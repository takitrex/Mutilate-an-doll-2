/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery.min.map
 */(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
    return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);/*!
 * jQuery UI 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.13",
    keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();
    b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,
    "overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
    function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,
    outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,"tabindex"),d=isNaN(b);
    return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=
    0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*
 * jQuery UI Effects 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function m(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
    16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return n.transparent;return n[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return m(b)}function o(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
    a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function p(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
    a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function l(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
    "borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=m(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var n={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
    0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
    211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},q=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   d){if(f.isFunction(b)){d=b;b=null}return this.queue(function(){var e=f(this),g=e.attr("style")||" ",h=p(o.call(this)),r,v=e.attr("class");f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});r=p(o.call(this));e.attr("class",v);e.animate(u(h,r),{queue:false,duration:a,easding:b,complete:function(){f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments);f.dequeue(this)}})})};
    f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,
        [{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.13",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=
        0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
        c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);return c},setTransition:function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(l(c))return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);
        a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(l(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(l(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%",
        "pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*
        ((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=
            e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=
            e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
    h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*
        h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,
            e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;
/* jquery-scrollbar.min.js */
(function(e){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){"use strict";function t(e){if(typeof e==="string"){return parseInt(e,10)}else{return~~e}}var n={wheelSpeed:1,wheelPropagation:false,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:false,useKeyboard:true,suppressScrollX:false,suppressScrollY:false,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:false};var r=0;var i=function(){var e=r++;return function(t){var n=".perfect-scrollbar-"+e;if(typeof t==="undefined"){return n}else{return t+n}}};e.fn.perfectScrollbar=function(r,s){return this.each(function(){function D(e,n){var r=e+n;var i=f-k;if(r<0){L=0}else if(r>i){L=i}else{L=r}var s=t(L*(c-f)/(f-k));u.scrollTop(s)}function P(e,n){var r=e+n;var i=a-y;if(r<0){b=0}else if(r>i){b=i}else{b=r}var s=t(b*(l-a)/(a-y));u.scrollLeft(s)}function H(e){if(o.minScrollbarLength){e=Math.max(e,o.minScrollbarLength)}if(o.maxScrollbarLength){e=Math.min(e,o.maxScrollbarLength)}return e}function B(){var e={width:a,display:g?"inherit":"none"};if(h){e.left=u.scrollLeft()+a-l}else{e.left=u.scrollLeft()}if(E){e.bottom=w-u.scrollTop()}else{e.top=S+u.scrollTop()}v.css(e);var t={top:u.scrollTop(),height:f,display:C?"inherit":"none"};if(O){if(h){t.right=l-u.scrollLeft()-A-N.outerWidth()}else{t.right=A-u.scrollLeft()}}else{if(h){t.left=u.scrollLeft()+a*2-l-M-N.outerWidth()}else{t.left=M+u.scrollLeft()}}T.css(t);m.css({left:b,width:y-x});N.css({top:L,height:k-_})}function j(){u.removeClass("ps-active-x");u.removeClass("ps-active-y");a=o.includePadding?u.innerWidth():u.width();f=o.includePadding?u.innerHeight():u.height();l=u.prop("scrollWidth");c=u.prop("scrollHeight");if(!o.suppressScrollX&&a+o.scrollXMarginOffset<l){g=true;y=H(t(a*a/l));b=t(u.scrollLeft()*(a-y)/(l-a))}else{g=false;y=0;b=0;u.scrollLeft(0)}if(!o.suppressScrollY&&f+o.scrollYMarginOffset<c){C=true;k=H(t(f*f/c));L=t(u.scrollTop()*(f-k)/(c-f))}else{C=false;k=0;L=0;u.scrollTop(0)}if(b>=a-y){b=a-y}if(L>=f-k){L=f-k}B();if(g){u.addClass("ps-active-x")}if(C){u.addClass("ps-active-y")}}function F(){var t;var n;var r=false;m.bind(p("mousedown"),function(e){n=e.pageX;t=m.position().left;v.addClass("in-scrolling");r=true;e.stopPropagation();e.preventDefault()});e(d).bind(p("mousemove"),function(e){if(r){P(t,e.pageX-n);j();e.stopPropagation();e.preventDefault()}});e(d).bind(p("mouseup"),function(e){if(r){r=false;v.removeClass("in-scrolling")}});t=n=null}function I(){var t;var n;var r=false;N.bind(p("mousedown"),function(e){n=e.pageY;t=N.position().top;r=true;T.addClass("in-scrolling");e.stopPropagation();e.preventDefault()});e(d).bind(p("mousemove"),function(e){if(r){D(t,e.pageY-n);j();e.stopPropagation();e.preventDefault()}});e(d).bind(p("mouseup"),function(e){if(r){r=false;T.removeClass("in-scrolling")}});t=n=null}function q(e,t){var n=u.scrollTop();if(e===0){if(!C){return false}if(n===0&&t>0||n>=c-f&&t<0){return!o.wheelPropagation}}var r=u.scrollLeft();if(t===0){if(!g){return false}if(r===0&&e<0||r>=l-a&&e>0){return!o.wheelPropagation}}return true}function R(){function t(e){var t=e.originalEvent.deltaX;var n=-1*e.originalEvent.deltaY;if(typeof t==="undefined"||typeof n==="undefined"){t=-1*e.originalEvent.wheelDeltaX/6;n=e.originalEvent.wheelDeltaY/6}if(e.originalEvent.deltaMode&&e.originalEvent.deltaMode===1){t*=10;n*=10}if(t!==t&&n!==n){t=0;n=e.originalEvent.wheelDelta}return[t,n]}function n(n){var r=t(n);var i=r[0];var s=r[1];e=false;if(!o.useBothWheelAxes){u.scrollTop(u.scrollTop()-s*o.wheelSpeed);u.scrollLeft(u.scrollLeft()+i*o.wheelSpeed)}else if(C&&!g){if(s){u.scrollTop(u.scrollTop()-s*o.wheelSpeed)}else{u.scrollTop(u.scrollTop()+i*o.wheelSpeed)}e=true}else if(g&&!C){if(i){u.scrollLeft(u.scrollLeft()+i*o.wheelSpeed)}else{u.scrollLeft(u.scrollLeft()-s*o.wheelSpeed)}e=true}j();e=e||q(i,s);if(e){n.stopPropagation();n.preventDefault()}}var e=false;if(typeof window.onwheel!=="undefined"){u.bind(p("wheel"),n)}else if(typeof window.onmousewheel!=="undefined"){u.bind(p("mousewheel"),n)}}function U(){var t=false;u.bind(p("mouseenter"),function(e){t=true});u.bind(p("mouseleave"),function(e){t=false});var n=false;e(d).bind(p("keydown"),function(r){if(r.isDefaultPrevented&&r.isDefaultPrevented()){return}if(!t){return}var i=document.activeElement?document.activeElement:d.activeElement;while(i.shadowRoot){i=i.shadowRoot.activeElement}if(e(i).is(":input,[contenteditable]")){return}var s=0;var o=0;switch(r.which){case 37:s=-30;break;case 38:o=30;break;case 39:s=30;break;case 40:o=-30;break;case 33:o=90;break;case 32:case 34:o=-90;break;case 35:if(r.ctrlKey){o=-c}else{o=-f}break;case 36:if(r.ctrlKey){o=u.scrollTop()}else{o=f}break;default:return}u.scrollTop(u.scrollTop()-o);u.scrollLeft(u.scrollLeft()+s);n=q(s,o);if(n){r.preventDefault()}})}function z(){function e(e){e.stopPropagation()}N.bind(p("click"),e);T.bind(p("click"),function(e){var n=t(k/2);var r=e.pageY-T.offset().top-n;var i=f-k;var s=r/i;if(s<0){s=0}else if(s>1){s=1}u.scrollTop((c-f)*s)});m.bind(p("click"),e);v.bind(p("click"),function(e){var n=t(y/2);var r=e.pageX-v.offset().left-n;var i=a-y;var s=r/i;if(s<0){s=0}else if(s>1){s=1}u.scrollLeft((l-a)*s)})}function W(){function t(){var e=window.getSelection?window.getSelection():document.getSlection?document.getSlection():{rangeCount:0};if(e.rangeCount===0){return null}else{return e.getRangeAt(0).commonAncestorContainer}}function i(){if(!n){n=setInterval(function(){u.scrollTop(u.scrollTop()+r.top);u.scrollLeft(u.scrollLeft()+r.left);j()},50)}}function s(){if(n){clearInterval(n);n=null}v.removeClass("in-scrolling");T.removeClass("in-scrolling")}var n=null;var r={top:0,left:0};var o=false;e(d).bind(p("selectionchange"),function(n){if(e.contains(u[0],t())){o=true}else{o=false;s()}});e(window).bind(p("mouseup"),function(e){if(o){o=false;s()}});e(window).bind(p("mousemove"),function(e){if(o){var t={x:e.pageX,y:e.pageY};var n=u.offset();var a={left:n.left,right:n.left+u.outerWidth(),top:n.top,bottom:n.top+u.outerHeight()};if(t.x<a.left+3){r.left=-5;v.addClass("in-scrolling")}else if(t.x>a.right-3){r.left=5;v.addClass("in-scrolling")}else{r.left=0}if(t.y<a.top+3){if(a.top+3-t.y<5){r.top=-5}else{r.top=-20}T.addClass("in-scrolling")}else if(t.y>a.bottom-3){if(t.y-a.bottom+3<5){r.top=5}else{r.top=20}T.addClass("in-scrolling")}else{r.top=0}if(r.top===0&&r.left===0){s()}else{i()}}})}function X(t,n){function r(e,t){u.scrollTop(u.scrollTop()-t);u.scrollLeft(u.scrollLeft()-e);j()}function c(e){f=true}function h(e){f=false}function d(e){if(e.originalEvent.targetTouches){return e.originalEvent.targetTouches[0]}else{return e.originalEvent}}function v(e){var t=e.originalEvent;if(t.targetTouches&&t.targetTouches.length===1){return true}if(t.pointerType&&t.pointerType!=="mouse"){return true}return false}function m(e){if(v(e)){l=true;var t=d(e);i.pageX=t.pageX;i.pageY=t.pageY;s=(new Date).getTime();if(a!==null){clearInterval(a)}e.stopPropagation()}}function g(e){if(!f&&l&&v(e)){var t=d(e);var n={pageX:t.pageX,pageY:t.pageY};var u=n.pageX-i.pageX;var a=n.pageY-i.pageY;r(u,a);i=n;var c=(new Date).getTime();var h=c-s;if(h>0){o.x=u/h;o.y=a/h;s=c}e.stopPropagation();e.preventDefault()}}function y(e){if(!f&&l){l=false;clearInterval(a);a=setInterval(function(){if(Math.abs(o.x)<.01&&Math.abs(o.y)<.01){clearInterval(a);return}r(o.x*30,o.y*30);o.x*=.8;o.y*=.8},10)}}var i={};var s=0;var o={};var a=null;var f=false;var l=false;if(t){e(window).bind(p("touchstart"),c);e(window).bind(p("touchend"),h);u.bind(p("touchstart"),m);u.bind(p("touchmove"),g);u.bind(p("touchend"),y)}if(n){if(window.PointerEvent){e(window).bind(p("pointerdown"),c);e(window).bind(p("pointerup"),h);u.bind(p("pointerdown"),m);u.bind(p("pointermove"),g);u.bind(p("pointerup"),y)}else if(window.MSPointerEvent){e(window).bind(p("MSPointerDown"),c);e(window).bind(p("MSPointerUp"),h);u.bind(p("MSPointerDown"),m);u.bind(p("MSPointerMove"),g);u.bind(p("MSPointerUp"),y)}}}function V(){u.bind(p("scroll"),function(e){j()})}function J(){u.unbind(p());e(window).unbind(p());e(d).unbind(p());u.data("perfect-scrollbar",null);u.data("perfect-scrollbar-update",null);u.data("perfect-scrollbar-destroy",null);m.remove();N.remove();v.remove();T.remove();v=T=m=N=g=C=a=f=l=c=y=b=w=E=S=k=L=A=O=M=h=p=null}function G(){j();V();F();I();z();W();R();if(K||Q){X(K,Q)}if(o.useKeyboard){U()}u.data("perfect-scrollbar",u);u.data("perfect-scrollbar-update",j);u.data("perfect-scrollbar-destroy",J)}var o=e.extend(true,{},n);var u=e(this);if(typeof r==="object"){e.extend(true,o,r)}else{s=r}if(s==="update"){if(u.data("perfect-scrollbar-update")){u.data("perfect-scrollbar-update")()}return u}else if(s==="destroy"){if(u.data("perfect-scrollbar-destroy")){u.data("perfect-scrollbar-destroy")()}return u}if(u.data("perfect-scrollbar")){return u.data("perfect-scrollbar")}u.addClass("ps-container");var a;var f;var l;var c;var h=u.css("direction")==="rtl";var p=i();var d=this.ownerDocument||document;var v=e("<div class='ps-scrollbar-x-rail'>").appendTo(u);var m=e("<div class='ps-scrollbar-x'>").appendTo(v);var g;var y;var b;var w=t(v.css("bottom"));var E=w===w;var S=E?null:t(v.css("top"));var x=t(v.css("borderLeftWidth"))+t(v.css("borderRightWidth"));var T=e("<div class='ps-scrollbar-y-rail'>").appendTo(u);var N=e("<div class='ps-scrollbar-y'>").appendTo(T);var C;var k;var L;var A=t(T.css("right"));var O=A===A;var M=O?null:t(T.css("left"));var _=t(T.css("borderTopWidth"))+t(T.css("borderBottomWidth"));var K="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;var Q=window.navigator.msMaxTouchPoints!==null;G();return u})}});function App(){var b=this;window.App=this;var d=false,e=false,c=[/^www\.[m]inijuegos\.com$/,/^www\.[m]inigiochi\.com$/,/^www\.[m]inijogos\.com\.br$/,/^www\.[m]iniplay\.com$/,/beta\.[m]iniplay\.com$/,/\.[m]inijuegos\.com$/,/\.[m]iniplay\.com$/,/\.[m]inigiochi\.com$/,/\.[m]inijuegos\.mx$/,/\.[m]inispelletjes\.com$/,/\.grymini\.pl$/];this.debug=false;this.failed=false;this.req={isPost:null};this.cfg={serverTime:null,productionMode:true,cookieDomain:null,buildVersion:null,thirdParty:{facebook:{}},minimonkey:{host:"localhost",port:"8000",enabled:false},utmSource:null,utmCampaign:null,isMobile:false,minigames:{},debugEvents:false};this.pageType=null;this.pageTypeId=null;this.url={root:null,host:null,current:null,js:null,css:null,media:null,content:null,ajax:null,ajaxhtml:null,api:null,api_lechuck:null,api_lechuck_static:null,game:null,avatar:null,community:null,trophies:null};this.eventListeners={init:null,ready:null,postReady:null,load:null};this.init=function(){var f="https://mnj.gs/chorizos?utm_source="+document.location.host;if(!a(document.location.host)){document.location.href=f}$(document).ready(function(){b.ready()});$(window).on("load",function(){b.load()});b.triggerEvent("init")};this.ready=function(){d=true;b.triggerEvent("ready");var g=MP.lib.getCookie("miniTimezone");if(!g||g=="undefined"){if(typeof Intl!="undefined"&&Intl.hasOwnProperty("DateTimeFormat")){try{if(typeof Intl.DateTimeFormat().resolvedOptions().timeZone!="undefined"){MP.lib.setCookie("miniTimezone",encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone),MP.cfg.cookieDomain,180)}}catch(f){}}}b.triggerEvent("postReady")};this.load=function(){e=true;b.triggerEvent("load")};this.trackAnalyticsEvent=function(g){var k,m,l;if(g[0]=="_trackEvent"){g.shift()}if(window.hasOwnProperty("_gaq")&&window.hasOwnProperty("_gat")){k=g.slice(0);if(window.hasOwnProperty("_gat")&&window._gat&&window._gat.hasOwnProperty("getTrackers")){m=window._gat._getTrackers();if(m instanceof Array){for(var j=0;j<m.length;
++j){l=m[j];l._trackEvent.apply(l,k)}}}}if(window.hasOwnProperty("uga")&&typeof window.uga==="function"){k=g.slice(0);k.unshift("event");uga(function(){var o;var p=uga.getAll();for(var n=0;n<p.length;++n){o=p[n];o.send.apply(o,k)}})}if(g.length<2){g[1]=""}if(g.length<3){g[2]=""}if(g.length<4){g[3]=""}var f=null;if(window.hasOwnProperty("dataLayer")){var h=["SearchV2","Push","NewAdManager","Registration","PurchaseMCv2-mob"];if(h.includes(g[0])){f={event:"js-event",eventCategory:g[0],eventAction:g[1],eventTag:g[2],eventValue:g[3]};window.dataLayer.push(f)}}if(!App.cfg.productionMode||App.cfg.debugEvents){if(f!==null){console.log("🚩 MP-ANALYTICS-EVENT => DATALAYER: "+g.join(", "),f)}else{console.log("🚩 MP-ANALYTICS-EVENT: "+g.join(", "))}}};this.trackAnalyticsEvents=function(g,f,h){if(window.hasOwnProperty("_gaq")){window._gaq.push.apply(window._gaq,arguments)}};this.onReady=function(f){this.registerEventListener("ready",f)};this.onLoad=function(f){this.registerEventListener("load",f)};this.registerEventListener=function(f,g){if(typeof g=="function"&&f!=null){if((f==="ready"||f==="postReady")&&d){g();return true}if(f==="load"&&e){g();return true}if(this.eventListeners[f]==null){this.eventListeners[f]=[]}this.eventListeners[f].push(g);return true}else{return false}};this.triggerEvent=function(g,h){if(typeof h=="undefined"){h=null}if(this.eventListeners[g] instanceof Array){for(var f=0;f<this.eventListeners[g].length;f++){if(this.eventListeners[g][f](h)==false){return false}}}return true};this.thirdParty={facebook:typeof ThirdPartyFacebook==="function"?new ThirdPartyFacebook(b):false};this.lib=typeof Lib==="function"?new Lib(b):false;this.i18n=typeof I18n==="function"?new I18n(b):false;this.navigation=typeof Navigation==="function"?new Navigation(b):false;this.homeFeaturedNavigation=typeof HomeFeaturedNavigation==="function"?new HomeFeaturedNavigation(b):false;this.lastPlayed=null;this.notifications=typeof Notifications==="function"?new Notifications(b):false;this.user=typeof User==="function"?new User(b):false;
this.userWidget=typeof _UserWidget==="function"?new _UserWidget(b):false;this.userWidgetAvatar=typeof _UserWidgetAvatar==="function"?new _UserWidgetAvatar(b):false;this.presenceManager=typeof PresenceManager==="function"?new PresenceManager(b):false;this.userChannel=typeof UserChannel==="function"?new UserChannel(b):false;this.userProfile=typeof UserProfile==="function"?new UserProfile(b):false;this.userModal=typeof UserModal==="function"?new UserModal(b,60000):false;this.userPurchase=typeof UserPurchase==="function"?new UserPurchase(b):false;this.share=typeof Share==="function"?new Share(b):false;this.game=typeof Game==="function"?new Game(b):false;this.gameApi=typeof GameApi==="function"?new GameApi(b):false;this.gameDevel=typeof GameDevel==="function"?new GameDevel(b):false;this.keyResponse=typeof KeyResponse==="function"?new KeyResponse(b):false;this.customformelements=typeof CustomFormElements==="function"?new CustomFormElements(b):false;this.dialog=typeof Dialog==="function"?new Dialog(b):false;this.newAdManager={config:{debugMode:false,adManagerUid:null},requireJS:function(){},consent:{okVendors:{google:false},okStorage:false,events:[],triggeredEvents:[],tcData:null}};this.widgets={headerNavSearch:typeof HeaderNavSearch==="function"?new HeaderNavSearch(b,function(){return{debug:true,serviceUrl:b.url.ajax+"search/widget-v2"}}):false,headerNavUserWidget:typeof HeaderNavUserWidget==="function"?new HeaderNavUserWidget(b,function(){return{debug:true,serviceUrl:b.url.ajax+"user/widget-v2"}}):false};this.userWidget=this.widgets.headerNavUserWidget;this.lazy={minigames:{}};this.requireJS=function(f,g){if(typeof g!="function"){g=function(){}}if(!(f instanceof Array)){f=[f]}this.lib.getMultiScriptsInOrder(f).done(function(){g()})};this.require=function(g,h){var f={pixijs:[this.url.js+"pixijs/pixi.min.js",this.url.js+"pixijs/pixiMiniplayTools.js","https://code.createjs.com/tweenjs-0.6.2.min.js"]};if(typeof h!="function"){h=function(){}}if(g===undefined||!f.hasOwnProperty(g)){throw new Error("Unknown library: "+g)
}this.lib.getMultiScriptsInOrder(f[g]).done(function(){h()})};var a=function(h){var f,j;if(typeof h!="string"){return false}if(!c instanceof Array){return false}for(var g=0;g<c.length;g++){if(h.match(c[g])!=null){return true}}return false}};function I18n(b){var a=this;this.App=b;this.locale_name=null;this.locale_lang=null;this.locale_region=null;this.country=null;this.country_forced=false;this.timezone=null;this.numbers={decimal_point:".",thousands_separator:" "};this.xlat=new function(){var c={};this.msg=function(d){return(c.hasOwnProperty(d)&&c[d]!=="")?c[d]:d};this.msv=function(e,f){var g=a.xlat.msg(e);if(typeof f=="object"){for(var d in f){if(!f.hasOwnProperty(d)){continue}if(typeof f[d]=="string"||typeof f[d]=="number"){g=g.split(d).join(f[d])}}}return g};this.add=function(d,e){if(typeof d=="string"&&typeof e=="string"){c[d]=e}};this.addBatch=function(d){if(typeof d!="object"){return}for(var e in d){if(!d.hasOwnProperty(e)){continue}if(typeof d[e]=="string"){c[e]=d[e]}}}};this.readNumber=function(c){c=c+"";c=c.split(a.numbers.thousands_separator).join("");c=c.split(a.numbers.decimal_point).join(".");return(Number(c))};this.writeNumber=function(e,f,d){var g;var c=/(\d+)(\d{3})/;if(typeof d==="undefined"){d=true}if(typeof f=="undefined"){f=0}e=Number(e).toFixed(parseInt(f))+"";if(d){g=e.split(".");g[1]=g.length>1?a.numbers.decimal_point+g[1]:"";while(c.test(g[0])){g[0]=g[0].replace(c,"$1"+a.numbers.thousands_separator+"$2")}return g[0]+g[1]}else{return e.split(".").join(a.numbers.decimal_point)}}};function Lib(b){var a=this;this.App=b;this.extendOptions=function(f,g){var d,c={};if(typeof f==="object"){for(d in f){if(f.hasOwnProperty(d)){c[d]=f[d]}}}if(typeof g==="object"){for(d in g){if(g.hasOwnProperty(d)){c[d]=g[d]}}}return c};this.getMultiScriptsAsync=function(g){var c=$.map(g,function(h){return $.getScript(h)});var f=false;var d;c.push($.Deferred(function(h){$(h.resolve)}));$.ajaxSettings.hasOwnProperty("cache")?$.ajaxSettings.cache:false;$.ajaxSetup({cache:true});d=$.when.apply($,c);$.ajaxSetup({cache:f});return d};this.getMultiScriptsInOrder=function(g){var f=0;var d=$.Deferred();(function c(){var h=false;if(f<g.length){$.ajaxSettings.hasOwnProperty("cache")?$.ajaxSettings.cache:false;$.ajaxSetup({cache:true});$.getScript(g[f]).done(function(){++f;c()});$.ajaxSetup({cache:h})}else{d.resolve()}})();return d};this.removeURLParam=function(c,j){var g=c.split("?");if(g.length>=2){var h=encodeURIComponent(j)+"=";var f=g[1].split(/[&;]/g);var d;for(d=f.length;d>0;d-=1){if(f[d].indexOf(h,0)===0){f.splice(d,1)}}if(f.length>0){return g[0]+"?"+f.join("&")}return g[0]}return c};this.getParameterByName=function(d){d=d.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var c="[\\?&]"+d+"=([^&#]*)";var g=new RegExp(c);var f=g.exec(window.location.search);if(f===null){return""}return decodeURIComponent(f[1].replace(/\+/g," "))};this.setCookie=function(j,h,d,i){document.cookie=j+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";var g=new Date();if(i>=1){g.setDate(g.getDate()+i)}else{var c=new Date();var f=c.getTime();f+=3600*1000*Math.floor(24*i);g.setTime(f)}h=encodeURI(h)+((i===null)?"":"; expires="+g.toGMTString());if(d===undefined){throw new Error("cookie domain missing")}h+="; path=/; domain="+d;document.cookie=j+"="+h};this.getCookie=function(g){var c;var d=document.cookie;var f=d.indexOf(" "+g+"=");if(f===-1){f=d.indexOf(g+"=")}if(f===-1){d=null}else{f=d.indexOf("=",f)+1;c=d.indexOf(";",f);if(c===-1){c=d.length}d=decodeURI(d.substring(f,c))}return d};this.getRandomInt=function(d,c){return Math.floor(Math.random()*(c-d+1))+d
};this.createJSHelper=function(f,d){var h=[];var g=false;var c=false;var j=[];var i=function(){if(d===undefined||!d){d="https://code.createjs.com/createjs-2015.11.26.min.js"}$.getScript(d+"?"+f,function(){var l,k;g=true;for(l=0,k=h.length;l<k;l+=1){if(typeof h[l]==="function"){h[l]()}}})};this.onReady=function(k){if(typeof k==="function"){if(g){k()}else{h.push(k)}}if(c){this.setFPS(c)}};this.setFPS=function(k){c=k;if(g){createjs.Ticker.setFPS(k)}};this.addAnimation=function(o,k,n,q){var m,l,p;$.getScript(o+"?"+f,function(){m=k;p=new lib[n]();l=new createjs.Stage(m);l.addChild(p);l.update();createjs.Ticker.setFPS(c?c:lib.properties.fps);createjs.Ticker.addEventListener("tick",l);j.push(l);if(q!==undefined&&typeof q==="function"){q(m,p,l)}})};this.stopAnimationsIfFrameRateDropsBelow=function(m,l,k){if(!g){return}var r=false;var p=0;var q=false;var o=false;var s=null;var n=function(x){var u=x.delta;var t=createjs.Ticker.getFPS();var w,v;if(o){if(document.hasFocus()){if(typeof console!=="undefined"){console.log("Animations set to normal speed "+s+" FPS")}o=false;createjs.Ticker.setFPS(s)}return}else{if(!document.hasFocus()){if(typeof console!=="undefined"){console.log("Animations set to blur speed "+k+" FPS")}s=createjs.Ticker.getFPS();o=true;createjs.Ticker.setFPS(k);return}}if(1000/u<m){if(!r){if(p<3){p+=1}else{p=0;if(typeof console!=="undefined"){console.log("FRAMERATE DROPPED TO "+(1000/u)+" FPS. MIN LEVEL IS "+m+" FPS")}r=setTimeout(function(){if(typeof console!=="undefined"){console.log("FRAMERATE DROPPED FROM "+m+" FOR "+l+" MILLISECONDS. ANIMATIONS STOPPED.")}for(w=0,v=j.length;w<v;w+=1){createjs.Ticker.removeEventListener("tick",j[w])}r=false;q=true;createjs.Ticker.removeEventListener("tick",n)},l)}}}else{if(r){if(typeof console!=="undefined"){console.log("FRAMERATE RESTORED TO "+(1000/u)+" FPS")}clearTimeout(r)}r=false;p=0}};setTimeout(function(){createjs.Ticker.addEventListener("tick",n)},3000)};i()};this.drawSVGPie=function(c,k,g,n,o,i){var f,m,l,h,j;c=$(c);if(c.length===0){return
}h=o/2;k=Math.abs(parseFloat(k));g=Math.abs(parseFloat(g));if(g>=360){g=359.9999}k=k-90;f=g+k;m=(f-k)>180;j=function(z,t,u,q,v,r){var y,p,x,d,w,s;z=$(z);y=parseFloat(t)+r;p=y+t*Math.cos(Math.PI*u/180);x=y+t*Math.sin(Math.PI*u/180);d=y+t*Math.cos(Math.PI*q/180);w=y+t*Math.sin(Math.PI*q/180);s=z.attr("d")||"";if(s.length>0){s+=" "}l="M"+y+","+y+"  L"+p+","+x+"  A"+t+","+t+" 0 "+ +v+",1 "+d+","+w+" z";if(z.length>0){z.attr("d",s+l);if(n){z.attr("transform","translate("+((t+r)*2)+",0) scale(-1, 1)")}else{z.attr("transform","")}z.attr("clip-rule","evenodd")}};if(c.children("path").size()>0){j(c.children("path")[0],h,k,f,m,0);if(i>0&&i<o){j(c.children("path")[0],i/2,k,f,m,(o-i)/2)}}};this.drawSVGPiePercent=function(c,f,d,g){a.drawPie(c,f,d*3.6,g)};this.Audio=function(c,f){var g=null;var d={defaultVolume:0.5,defaultFadeDuration:1000,defaultPlaybackRate:1,onlyOnFocus:false,fadeInterval:150,onLoad:function(){},onError:function(){}};var h=this;f=a.extendOptions(d,f||{});this.stop=function(){if(this.isPlaying()){this.pause();this.rewind()}};this.isPlaying=function(){if(g){return !g.paused}return false};this.pause=function(){if(this.isPlaying()){g.pause()}};this.play=function(){if(!this.isPlaying()&&g&&(!f.onlyOnFocus||document.hasFocus())){g.play()}};this.pause=function(){if(this.isPlaying()){g.pause()}};this.rewind=function(){if(g){g.currentTime=0}};this.getVolume=function(){if(g){return g.volume}return 0};this.setVolume=function(i){if(g){g.volume=i}};this.setLoop=function(i){if(g){g.loop=i}};this.getPlaybackRate=function(){if(g){return g.playbackRate}return 0};this.setPlaybackRate=function(i){if(g){g.playbackRate=i}};this.getCurrentTime=function(){if(g){return g.currentTime}return 0};this.getAudio=function(){return g};this.destroy=function(){this.stop();g=null};this.fadeTo=function(m,i,o){var l=this.getVolume();var j=0;var k=0;var n=function(){var p=h.getVolume()-k;if((p>i&&k>0)||(p<i&&k<0)){h.setVolume(p);setTimeout(n,f.fadeInterval)}else{h.setVolume(i);if(typeof o=="function"){o(h)
}}};if(typeof m!=="number"){m=f.defaultFadeDuration}if(typeof i!=="number"){i=0}if(this.isPlaying()){j=m/f.fadeInterval;k=(l-i)/j;if(k!=0&&j>0){setTimeout(n,f.fadeInterval)}else{if(typeof o=="function"){o(h)}}}},this.fadeIn=function(i,j){if(g){this.setVolume(0);if(!h.isPlaying()){h.play()}this.fadeTo(i,f.defaultVolume,j)}};this.fadeOut=function(i,j){if(this.isPlaying()){this.fadeTo(i,0,j)}};this.playbackFadeTo=function(m,i,o){var j=g.playbackRate;var k=0;var l=0;var n=function(){var p=g.playbackRate-l;if((p>i&&l>0)||(p<i&&l<0)){g.playbackRate=p;setTimeout(n,f.fadeInterval)}else{g.playbackRate=i;if(typeof o=="function"){o(h)}}};if(typeof m!=="number"){m=f.defaultFadeDuration}if(typeof i!=="number"||i<0.5){i=0.5}if(this.isPlaying()){k=m/f.fadeInterval;l=(j-i)/k;if(l!=0&&k>0){setTimeout(n,f.fadeInterval)}else{if(typeof o=="function"){o(h)}}}},this.init=function(){if(typeof"Audio"!=="undefined"&&typeof document.hasFocus==="function"){try{g=new Audio(c);g.volume=f.defaultVolume;g.playbackRate=f.defaultPlaybackRate;g.addEventListener("canplaythrough",f.onLoad,false);g.addEventListener("error",f.onError,false)}catch(i){g=null}}};this.init()};this.FutureGroup=function(c){if(c===undefined){c=false}var n=this;var f=[];var l=false;var i=[];var g=[];var m=[];var h=[];var d=new Date().getTime();var k=250;var j=null;this.getId=function(){return d};this.log=function(o){};this.newFuture=function(){var o=new a.Future(c);this.add(o);return o};this.add=function(p){var o;if(p===undefined){throw new Error("Not a Future or function instance")}if(l){throw new Error("FutureGroup is in ready status, no more futures can be added")}if(j){clearTimeout(j)}j=setTimeout(this.ready,k);if(typeof p==="function"){this.log("Future closure added");o=new a.Future(c);f.push(o);o.setFutureGroup(this);if(p()){o.success()}else{o.error("Callback returned false")}}else{if(!(p instanceof a.Future)){throw new Error("Not a Future instance")}this.log("Future added");f.push(p);p.setFutureGroup(this)}return this};this.ready=function(){if(j){clearTimeout(j)
}n.log("Ready");l=true;n.futureCompleted()};this.isGroup=function(){return true};this.getFutures=function(){return f};this.isCompleted=function(){var p,o;if(f.length===0){return false}for(p=0,o=f.length;p<o;p+=1){if(!f[p].isCompleted()){return false}}return true};this.isCancel=function(){var p,o;if(f.length===0||!this.isCompleted()){return false}for(p=0,o=f.length;p<o;p+=1){if(f[p].isCancel()){return true}}return false};this.isError=function(){var p,o;if(f.length===0||!this.isCompleted()){return false}for(p=0,o=f.length;p<o;p+=1){if(f[p].isError()){return true}}return false};this.isSuccess=function(){var p,o;if(f.length===0||!this.isCompleted()){return false}for(p=0,o=f.length;p<o;p+=1){if(!f[p].isSuccess()){return false}}return true};this.addListener=function(o){this.log("Listener added");if(typeof o==="function"){i.push(o)}this.futureCompleted();return this};this.addSuccessListener=function(o){this.log("Success listener added");if(typeof o==="function"){g.push(o)}if(this.isSuccess()){this._success()}return this};this.addErrorListener=function(o){this.log("Error listener added");if(typeof o==="function"){m.push(o)}if(this.isError()){this._error()}return this};this.addCancelListener=function(o){this.log("Cancel listener added");if(typeof o==="function"){h.push(o)}if(this.isCancel()){this._cancel()}return this};this.futureCompleted=function(){if(l){this.dumpStatus();n._success();n._error();n._cancel()}};this.dumpStatus=function(){var p,o;if(!c){return}this.log("Future group status:");for(p=0,o=f.length;p<o;p+=1){this.log("    F"+f[p].getId()+" > "+(f[p].isCompleted()?"Completed ("+(f[p].isSuccess()?"Success":"")+(f[p].isError()?"Error":"")+(f[p].isCancel()?"Cancel":"")+")":"Not completed"))}};this._success=function(){var o;if(n.isSuccess()){n.log("Success triggered");while(typeof(o=g.shift())!="undefined"){o(n)}while(typeof(o=i.shift())!="undefined"){o(n)}}};this._cancel=function(){var o;if(n.isCancel()){n.log("Cancel triggered");while(typeof(o=h.shift())!="undefined"){o(n)
}while(typeof(o=i.shift())!="undefined"){o(n)}}};this._error=function(){var o;if(n.isError()){n.log("Error triggered");while(typeof(o=m.shift())!="undefined"){o(n)}while(typeof(o=i.shift())!="undefined"){o(n)}}};this.flush=function(){if(f.length===0){return false}for(var p=0,o=f.length;p<o;p++){f[p].flush()}}};this.Future=function(c){if(typeof c=="undefined"){c=false}var k=false;var m=false;var o=false;var f=false;var l=false;var j=[];var g=[];var n=[];var h=[];var d=new Date().getTime();var i={};var p=false;this.setData=function(r,q){i[r]=q;return this};this.getData=function(q){return(typeof i[q]=="undefined"?null:i[q])};this.log=function(q){};this.enableDebug=function(){c=true;return this};this.isCompleted=function(){return k};this.isCancel=function(){return(k&&l)};this.isSuccess=function(){return(k&&m)};this.isError=function(){return(k&&o)};this.getId=function(){return d};this.setFutureGroup=function(q){if(typeof q==="undefined"||!(q instanceof a.FutureGroup)){throw new Error("Not a FutureGroup instance")}p=q};this.addListener=function(q){this.log("Listener added");if(typeof q=="function"){j.push(q)}if(this.isSuccess()){this.success()}if(this.isError()){this.error()}if(this.isCancel()){this.cancel()}return this};this.addSuccessListener=function(q){this.log("Success listener added");if(typeof q=="function"){g.push(q)}if(this.isSuccess()){this.success()}return this};this.addErrorListener=function(q){this.log("Error listener added");if(typeof q=="function"){n.push(q)}if(this.isError()){this.error()}return this};this.addCancelListener=function(q){this.log("Cancel listener added");if(typeof q=="function"){h.push(q)}if(this.isCancel()){this.cancel()}return this};this.success=function(){var q;if(!this.isCompleted()){k=true;m=true}if(this.isSuccess()){this.log("Success triggered");while(typeof(q=g.shift())!="undefined"){q(this)}while(typeof(q=j.shift())!="undefined"){q(this)}if(p){p.futureCompleted()}}else{throw new Error("Cannot set Future to success state, already resolved to another completion status")
}};this.cancel=function(){var q;if(!this.isCompleted()){k=true;l=true}if(this.isCancel()){this.log("Cancel triggered");while(typeof(q=h.shift())!="undefined"){q(this)}while(typeof(q=j.shift())!="undefined"){q(this)}if(p){p.futureCompleted()}}else{throw new Error("Future not cancellable, already resolved to another completion status")}};this.error=function(q){var r;if(!this.isCompleted()){k=true;o=true}if(this.isError()){if((typeof q=="undefined"||!(q instanceof Error))){if(typeof q=="string"){q=new Error(q)}else{if(f instanceof Error){q=f}else{q=new Error("Future's error state triggered, no error detail provided")}}f=q}this.log("Error triggered");this.log(q);while(typeof(r=n.shift())!="undefined"){r(this,q)}while(typeof(r=j.shift())!="undefined"){r(this)}if(p){p.futureCompleted()}}else{throw new Error("Cannot set Future to error state, already resolved to another completion status")}};this.flush=function(){var q=function(){return};delete k,m,o,f,l,j,g,n,h,d,i;this.success=q;this.error=q;this.cancel=q;this.addListener=q;this.addSuccessListener=q;this.addCancelListener=q;this.addErrorListener=q;this.setData=q;this.getData=q}};this.ActionDirector=function(f){if(typeof f=="undefined"){f=false}var h=false;var i=function(j){};var c=function(j){};var g=function(j){};var d=function(j){};this.leaveCurrentAction=function(){if(h){h.leave()}};this.getCurrentAction=function(){return h};this.enter=function(j){if(h==j){return}this.leaveCurrentAction();h=j;c(j)};this.leave=function(j){h=false;i(j)};this.enterState=function(j){d(j)};this.leaveState=function(j){g(j)};this.setOnEnter=function(j){if(typeof j=="function"){c=j}return this};this.setOnLeave=function(j){if(typeof j=="function"){i=j}return this};this.setOnEnterState=function(j){if(typeof j=="function"){d=j}return this};this.setOnLeaveState=function(j){if(typeof j=="function"){g=j}return this};this.enableDebug=function(){f=true;return this}};this.Action=function(d,o){var f=false;var i=false;var n={};var k=function(p){};var m=function(p){};
var h=0;var l=0;var c=false;var g={};var j={};if((typeof o=="undefined"||o==null)){o=false}o=a.App.lib.extendOptions({defaultState:"default"},o);this.isActive=function(){return i};this.getId=function(){return d};this.getOption=function(p){return o.hasOwnProperty(p)?o[p]:null};this.setOption=function(p,q){o[p]=q;return this};this.isCurrentState=function(p){if(this.getCurrentState()==this.getState(p)){return true}return false};this.getDefaultState=function(){if(typeof n[o.defaultState]!="undefined"){return n[o.defaultState]}for(var p in n){return n[p]}return false};this.getCurrentState=function(){if(f){return f}return this.getDefaultState()};this.setCurrentState=function(p){if(typeof p=="undefined"){throw Error("Invalid state provided")}if(p&&typeof p=="string"){p=this.getState(p);if(p==null){throw Error("Invalid state provided")}}if(f==p){return false}if(f){f.leave()}if(!p){f=false;return this}if(!(p instanceof a.ActionState)){throw Error("Invalid state provided")}f=p;f.enter();return this};this.enter=function(){if(i){return false}i=true;h++;if(c){c.enter(this)}k(this);if(this.getCurrentState()){this.getCurrentState().enter()}return true};this.leave=function(){if(!i){return false}i=false;l++;if(this.getCurrentState()&&!this.getCurrentState().getOption("persist")){this.getCurrentState().leave()}m(this);if(c){c.leave(this)}return true};this.setOnEnter=function(p){if(typeof p=="function"){k=p}return this};this.setOnLeave=function(p){if(typeof p=="function"){m=p}return this};this.addState=function(p){if(typeof d!="string"){throw Error("Invalid id provided")}if(typeof p=="undefined"||!(p instanceof a.ActionState)){throw Error("Invalid state provided")}p.setAction(this);n[p.getId()]=p;return this};this.getState=function(p){if(typeof p=="undefined"){return this.getCurrentState()}if(p instanceof a.ActionState){return p}if(typeof p!="string"){throw Error("Invalid id provided")}if(typeof n[p]=="undefined"){return null}return n[p]};this.setDirector=function(p){if(typeof p=="undefined"||!(p instanceof a.ActionDirector)){throw Error("Invalid director provided")
}c=p;return this};this.getDirector=function(){return c};this.addHandler=function(p,q){if(typeof p!="string"||typeof q!="function"){throw Error("Invalid or non-present handlerId or callback")}g[p]=q;return this};this.runHandler=function(p,q){if(typeof q==="undefined"){q=undefined}if(typeof g[p]=="function"){return g[p](this,q)}return null};this.runHandlerIfActive=function(p,q){if(typeof q==="undefined"){q=undefined}if(this.isActive()&&typeof g[p]=="function"){return this.runHandler(p,q)}return null};this.setData=function(q,p){j[q]=p};this.getData=function(p){if(p===undefined){return j}else{return(typeof j[p]=="undefined"?null:j[p])}};this.enterCount=function(){return h};this.leaveCount=function(){return l}};this.ActionState=function(c,m){var h=false;var j=function(n){};var l=function(n){};var g=0;var k=0;var f=false;var d={};var i={};if(typeof c=="undefined"){c="default"}if((typeof m=="undefined"||m==null)){m=false}m=a.App.lib.extendOptions({persist:false},m);this.isActive=function(){return h};this.getId=function(){return c};this.setAction=function(n){if(typeof n=="undefined"||!(n instanceof a.Action)){throw new Error("Invalid actionObject provided")}f=n};this.getAction=function(){return f};this.getOption=function(n){return m.hasOwnProperty(n)?m[n]:null};this.setOption=function(n,o){m[n]=o;return this};this.enter=function(){if(h){f.enter();return false}h=true;g++;f.setCurrentState(this);f.enter();j(this);if(this.getAction().getDirector()){this.getAction().getDirector().enterState(this)}return true};this.leave=function(){if(!h){return false}h=false;k++;if(f.getCurrentState()==this){f.setCurrentState(false)}l(this);if(this.getAction().getDirector()){this.getAction().getDirector().leaveState(this)}return true};this.setOnEnter=function(n){if(typeof n=="function"){j=n}return this};this.setOnLeave=function(n){if(typeof n=="function"){l=n}return this};this.addHandler=function(n,o){if(typeof n!="string"||typeof o!="function"){throw Error("Invalid or non-present handlerId or callback")
}d[n]=o;return this};this.runHandler=function(n,p,o){if(typeof o=="object"&&o instanceof a.ActionState){}else{o=this}if(typeof p==="undefined"){p=undefined}if(typeof d[n]=="function"){return d[n](o,p)}return null};this.runHandlerAs=function(o,n,p){if(typeof p==="undefined"){p=undefined}if(typeof o==="undefined"||!(o instanceof a.ActionState)){throw new Error("Invalid actionState provided")}return this.runHandler(n,p,o)};this.runHandlerIfActive=function(n,o){if(typeof o==="undefined"){o=undefined}if(this.isActive()&&typeof d[n]=="function"){return this.runHandler(n,o)}return null};this.setData=function(o,n){i[o]=n};this.getData=function(n){if(n===undefined){return i}else{return(typeof i[n]=="undefined"?null:i[n])}};this.enterCount=function(){return g};this.leaveCount=function(){return k}}}if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;return new a()}}Function.prototype.method=function(a,b){this.prototype[a]=b;return this};Function.method("inherits",function(b){this.prototype=new b();var f={},c=this.prototype;this.prototype.constructor=b;this.method("uber",function a(g){if(!(g in f)){f[g]=0}var j,i,h=f[g],d=b.prototype;if(h){while(h){d=d.constructor.prototype;h-=1}j=d[g]}else{j=c[g];if(j==this[g]){j=d[g]}}f[g]+=1;i=j.apply(this,Array.prototype.slice.apply(arguments,[1]));f[g]-=1;return i});return this});Function.method("swiss",function(c){for(var b=1;b<arguments.length;b+=1){var a=arguments[b];this.prototype[a]=c.prototype[a]}return this});Element.prototype.isVisible=function(){function b(g,o,d,k,i,m,j){var f=g.parentNode,n=2;if(!c(g)){return false}if(9===f.nodeType){return true}if("0"===a(g,"opacity")||"none"===a(g,"display")||"hidden"===a(g,"visibility")){return false}if("undefined"===typeof(o)||"undefined"===typeof(d)||"undefined"===typeof(k)||"undefined"===typeof(i)||"undefined"===typeof(m)||"undefined"===typeof(j)){o=g.offsetTop;i=g.offsetLeft;k=o+g.offsetHeight;d=i+g.offsetWidth;m=g.offsetWidth;j=g.offsetHeight}if(f){if(g.offsetParent===f){i+=f.offsetLeft;
o+=f.offsetTop}return b(f,o,d,k,i,m,j)}return true}function a(d,f){if(window.getComputedStyle){return document.defaultView.getComputedStyle(d,null)[f]}if(d.currentStyle){return d.currentStyle[f]}}function c(d){while(d=d.parentNode){if(d==document){return true}}return false}return b(this)};(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){if(!d){var d={map:function(i,g){var h={};return g?i.map(function(k,j){h.index=j;return g.call(h,k)}):i.slice()},naturalOrder:function(h,g){return(h<g)?-1:((h>g)?1:0)},sum:function(i,g){var h={};return i.reduce(g?function(k,l,j){h.index=j;return k+g.call(h,l)}:function(j,k){return j+k},0)},max:function(h,g){return Math.max.apply(null,g?d.map(h,g):h)}}}var f=(function(){var k=5,i=8-k,n=1000,r=0.75;function j(u,t,s){return(u<<(2*k))+(t<<k)+s}function o(s){var v=[],t=false;function u(){v.sort(s);t=true}return{push:function(w){v.push(w);t=false},peek:function(w){if(!t){u()}if(w===undefined){w=v.length-1}return v[w]},pop:function(){if(!t){u()}return v.pop()},size:function(){return v.length},map:function(w){return v.map(w)},debug:function(){if(!t){u()}return v}}}function g(x,t,w,s,y,v,u){var z=this;z.r1=x;z.r2=t;z.g1=w;z.g2=s;z.b1=y;z.b2=v;z.histo=u}g.prototype={volume:function(t){var s=this;if(!s._volume||t){s._volume=((s.r2-s.r1+1)*(s.g2-s.g1+1)*(s.b2-s.b1+1))}return s._volume},count:function(z){var y=this,t=y.histo;if(!y._count_set||z){var x=0,w,v,s,u;for(w=y.r1;w<=y.r2;w++){for(v=y.g1;v<=y.g2;v++){for(s=y.b1;s<=y.b2;s++){u=j(w,v,s);x+=(t[u]||0)}}}y._count=x;y._count_set=true}return y._count},copy:function(){var s=this;return new g(s.r1,s.r2,s.g1,s.g2,s.b1,s.b2,s.histo)
},avg:function(t){var z=this,x=z.histo;if(!z._avg||t){var C=0,w=1<<(8-k),B=0,A=0,E=0,s,y,v,u,D;for(y=z.r1;y<=z.r2;y++){for(v=z.g1;v<=z.g2;v++){for(u=z.b1;u<=z.b2;u++){D=j(y,v,u);s=x[D]||0;C+=s;B+=(s*(y+0.5)*w);A+=(s*(v+0.5)*w);E+=(s*(u+0.5)*w)}}}if(C){z._avg=[~~(B/C),~~(A/C),~~(E/C)]}else{z._avg=[~~(w*(z.r1+z.r2+1)/2),~~(w*(z.g1+z.g2+1)/2),~~(w*(z.b1+z.b2+1)/2)]}}return z._avg},contains:function(s){var t=this,u=s[0]>>i;gval=s[1]>>i;bval=s[2]>>i;return(u>=t.r1&&u<=t.r2&&gval>=t.g1&&gval<=t.g2&&bval>=t.b1&&bval<=t.b2)}};function m(){this.vboxes=new o(function(t,s){return d.naturalOrder(t.vbox.count()*t.vbox.volume(),s.vbox.count()*s.vbox.volume())})}m.prototype={push:function(s){this.vboxes.push({vbox:s,color:s.avg()})},palette:function(){return this.vboxes.map(function(s){return s.color})},size:function(){return this.vboxes.size()},map:function(s){var u=this.vboxes;for(var t=0;t<u.size();t++){if(u.peek(t).vbox.contains(s)){return u.peek(t).color}}return this.nearest(s)},nearest:function(s){var x=this.vboxes,v,u,w;for(var t=0;t<x.size();t++){u=Math.sqrt(Math.pow(s[0]-x.peek(t).color[0],2)+Math.pow(s[1]-x.peek(t).color[1],2)+Math.pow(s[2]-x.peek(t).color[2],2));if(u<v||v===undefined){v=u;w=x.peek(t).color}}return w},forcebw:function(){var v=this.vboxes;v.sort(function(x,w){return d.naturalOrder(d.sum(x.color),d.sum(w.color))});var t=v[0].color;if(t[0]<5&&t[1]<5&&t[2]<5){v[0].color=[0,0,0]}var s=v.length-1,u=v[s].color;if(u[0]>251&&u[1]>251&&u[2]>251){v[s].color=[255,255,255]}}};function q(y){var s=1<<(3*k),u=new Array(s),v,x,w,t;y.forEach(function(z){x=z[0]>>i;w=z[1]>>i;t=z[2]>>i;v=j(x,w,t);u[v]=(u[v]||0)+1});return u}function p(t,v){var z=1000000,C=0,x=1000000,B=0,A=1000000,s=0,w,u,y;t.forEach(function(D){w=D[0]>>i;u=D[1]>>i;y=D[2]>>i;if(w<z){z=w}else{if(w>C){C=w}}if(u<x){x=u}else{if(u>B){B=u}}if(y<A){A=y}else{if(y>s){s=y}}});return new g(z,C,x,B,A,s,v)}function l(w,B){if(!B.count()){return}var t=B.r2-B.r1+1,G=B.g2-B.g1+1,C=B.b2-B.b1+1,D=d.max([t,G,C]);if(B.count()==1){return[B.copy()]
}var F=0,E=[],y=[],x,v,u,A,z;if(D==t){for(x=B.r1;x<=B.r2;x++){A=0;for(v=B.g1;v<=B.g2;v++){for(u=B.b1;u<=B.b2;u++){z=j(x,v,u);A+=(w[z]||0)}}F+=A;E[x]=F}}else{if(D==G){for(x=B.g1;x<=B.g2;x++){A=0;for(v=B.r1;v<=B.r2;v++){for(u=B.b1;u<=B.b2;u++){z=j(v,x,u);A+=(w[z]||0)}}F+=A;E[x]=F}}else{for(x=B.b1;x<=B.b2;x++){A=0;for(v=B.r1;v<=B.r2;v++){for(u=B.g1;u<=B.g2;u++){z=j(v,u,x);A+=(w[z]||0)}}F+=A;E[x]=F}}}E.forEach(function(I,H){y[H]=F-I});function s(J){var O=J+"1",N=J+"2",I,P,L,K,H,M=0;for(x=B[O];x<=B[N];x++){if(E[x]>F/2){L=B.copy();K=B.copy();I=x-B[O];P=B[N]-x;if(I<=P){H=Math.min(B[N]-1,~~(x+P/2))}else{H=Math.max(B[O],~~(x-1-I/2))}while(!E[H]){H++}M=y[H];while(!M&&E[H-1]){M=y[--H]}L[N]=H;K[O]=L[N]+1;return[L,K]}}}return D==t?s("r"):D==G?s("g"):s("b")}function h(u,y){if(!u.length||y<2||y>256){return false}var v=q(u),w=1<<(3*k);var B=0;v.forEach(function(){B++});if(B<=y){}var x=p(u,v),s=new o(function(D,C){return d.naturalOrder(D.count(),C.count())});s.push(x);function z(C,I){var E=1,D=0,F;while(D<n){F=C.pop();if(!F.count()){C.push(F);D++;continue}var J=l(v,F),H=J[0],G=J[1];if(!H){return}C.push(H);if(G){C.push(G);E++}if(E>=I){return}if(D++>n){return}}}z(s,r*y);var A=new o(function(D,C){return d.naturalOrder(D.count()*D.volume(),C.count()*C.volume())});while(s.size()){A.push(s.pop())}z(A,y-A.size());var t=new m();while(A.size()){t.push(A.pop())}return t}return{quantize:h}})();c.exports=f.quantize},{}],2:[function(b,c,a){(function(){var g,f,d,i=function(j,k){return function(){return j.apply(k,arguments)}},h=[].slice;window.Swatch=f=(function(){j.prototype.hsl=void 0;j.prototype.rgb=void 0;j.prototype.population=1;j.yiq=0;function j(l,k){this.rgb=l;this.population=k}j.prototype.getHsl=function(){if(!this.hsl){return this.hsl=d.rgbToHsl(this.rgb[0],this.rgb[1],this.rgb[2])}else{return this.hsl}};j.prototype.getPopulation=function(){return this.population};j.prototype.getRgb=function(){return this.rgb};j.prototype.getHex=function(){return"#"+((1<<24)+(this.rgb[0]<<16)+(this.rgb[1]<<8)+this.rgb[2]).toString(16).slice(1,7)
};j.prototype.getTitleTextColor=function(){this._ensureTextColors();if(this.yiq<200){return"#fff"}else{return"#000"}};j.prototype.getBodyTextColor=function(){this._ensureTextColors();if(this.yiq<150){return"#fff"}else{return"#000"}};j.prototype._ensureTextColors=function(){if(!this.yiq){return this.yiq=(this.rgb[0]*299+this.rgb[1]*587+this.rgb[2]*114)/1000}};return j})();window.Vibrant=d=(function(){j.prototype.quantize=b("quantize");j.prototype._swatches=[];j.prototype.TARGET_DARK_LUMA=0.26;j.prototype.MAX_DARK_LUMA=0.45;j.prototype.MIN_LIGHT_LUMA=0.55;j.prototype.TARGET_LIGHT_LUMA=0.74;j.prototype.MIN_NORMAL_LUMA=0.3;j.prototype.TARGET_NORMAL_LUMA=0.5;j.prototype.MAX_NORMAL_LUMA=0.7;j.prototype.TARGET_MUTED_SATURATION=0.3;j.prototype.MAX_MUTED_SATURATION=0.4;j.prototype.TARGET_VIBRANT_SATURATION=1;j.prototype.MIN_VIBRANT_SATURATION=0.35;j.prototype.WEIGHT_SATURATION=3;j.prototype.WEIGHT_LUMA=6;j.prototype.WEIGHT_POPULATION=1;j.prototype.VibrantSwatch=void 0;j.prototype.MutedSwatch=void 0;j.prototype.DarkVibrantSwatch=void 0;j.prototype.DarkMutedSwatch=void 0;j.prototype.LightVibrantSwatch=void 0;j.prototype.LightMutedSwatch=void 0;j.prototype.HighestPopulation=0;function j(q,y,z){this.swatches=i(this.swatches,this);var x,v,w,n,u,t,p,m,s,l,o,k;if(typeof y==="undefined"){y=64}if(typeof z==="undefined"){z=5}p=new g(q);try{m=p.getImageData();o=m.data;l=p.getPixelCount();v=[];t=0;while(t<l){s=t*4;k=o[s+0];u=o[s+1];w=o[s+2];x=o[s+3];if(x>=125){if(!(k>250&&u>250&&w>250)){v.push([k,u,w])}}t=t+z}n=this.quantize(v,y);this._swatches=n.vboxes.map((function(r){return function(A){return new f(A.color,A.vbox.count())}})(this));this.maxPopulation=this.findMaxPopulation;this.generateVarationColors();this.generateEmptySwatches()}finally{p.removeCanvas()}}j.prototype.generateVarationColors=function(){this.VibrantSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1);this.LightVibrantSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1);
this.DarkVibrantSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_VIBRANT_SATURATION,this.MIN_VIBRANT_SATURATION,1);this.MutedSwatch=this.findColorVariation(this.TARGET_NORMAL_LUMA,this.MIN_NORMAL_LUMA,this.MAX_NORMAL_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION);this.LightMutedSwatch=this.findColorVariation(this.TARGET_LIGHT_LUMA,this.MIN_LIGHT_LUMA,1,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION);return this.DarkMutedSwatch=this.findColorVariation(this.TARGET_DARK_LUMA,0,this.MAX_DARK_LUMA,this.TARGET_MUTED_SATURATION,0,this.MAX_MUTED_SATURATION)};j.prototype.generateEmptySwatches=function(){var k;if(this.VibrantSwatch===void 0){if(this.DarkVibrantSwatch!==void 0){k=this.DarkVibrantSwatch.getHsl();k[2]=this.TARGET_NORMAL_LUMA;this.VibrantSwatch=new f(j.hslToRgb(k[0],k[1],k[2]),0)}}if(this.DarkVibrantSwatch===void 0){if(this.VibrantSwatch!==void 0){k=this.VibrantSwatch.getHsl();k[2]=this.TARGET_DARK_LUMA;return this.DarkVibrantSwatch=new f(j.hslToRgb(k[0],k[1],k[2]),0)}}};j.prototype.findMaxPopulation=function(){var m,k,l,o,n;l=0;o=this._swatches;for(m=0,k=o.length;m<k;m++){n=o[m];l=Math.max(l,n.getPopulation())}return l};j.prototype.findColorVariation=function(q,o,y,w,x,l){var p,s,k,t,r,n,m,v,u;t=void 0;r=0;n=this._swatches;for(p=0,s=n.length;p<s;p++){v=n[p];m=v.getHsl()[1];k=v.getHsl()[2];if(m>=x&&m<=l&&k>=o&&k<=y&&!this.isAlreadySelected(v)){u=this.createComparisonValue(m,w,k,q,v.getPopulation(),this.HighestPopulation);if(t===void 0||u>r){t=v;r=u}}}return t};j.prototype.createComparisonValue=function(o,k,p,m,n,l){return this.weightedMean(this.invertDiff(o,k),this.WEIGHT_SATURATION,this.invertDiff(p,m),this.WEIGHT_LUMA,n/l,this.WEIGHT_POPULATION)};j.prototype.invertDiff=function(l,k){return 1-Math.abs(l-k)};j.prototype.weightedMean=function(){var m,n,l,p,k,o;k=1<=arguments.length?h.call(arguments,0):[];n=0;l=0;m=0;while(m<k.length){p=k[m];o=k[m+1];n+=p*o;l+=o;m+=2}return n/l};j.prototype.swatches=function(){return{Vibrant:this.VibrantSwatch,Muted:this.MutedSwatch,DarkVibrant:this.DarkVibrantSwatch,DarkMuted:this.DarkMutedSwatch,LightVibrant:this.LightVibrantSwatch,LightMuted:this.LightMuted}
};j.prototype.isAlreadySelected=function(k){return this.VibrantSwatch===k||this.DarkVibrantSwatch===k||this.LightVibrantSwatch===k||this.MutedSwatch===k||this.DarkMutedSwatch===k||this.LightMutedSwatch===k};j.rgbToHsl=function(k,p,t){var q,o,m,u,n,v;k/=255;p/=255;t/=255;u=Math.max(k,p,t);n=Math.min(k,p,t);o=void 0;v=void 0;m=(u+n)/2;if(u===n){o=v=0}else{q=u-n;v=m>0.5?q/(2-u-n):q/(u+n);switch(u){case k:o=(p-t)/q+(p<t?6:0);break;case p:o=(t-k)/q+2;break;case t:o=(k-p)/q+4}o/=6}return[o,v,m]};j.hslToRgb=function(u,x,t){var w,v,o,n,m,k;k=void 0;v=void 0;w=void 0;o=function(s,r,l){if(l<0){l+=1}if(l>1){l-=1}if(l<1/6){return s+(r-s)*6*l}if(l<1/2){return r}if(l<2/3){return s+(r-s)*(2/3-l)*6}return s};if(x===0){k=v=w=t}else{m=t<0.5?t*(1+x):t+x-(t*x);n=2*t-m;k=o(n,m,u+1/3);v=o(n,m,u);w=o(n,m,u-(1/3))}return[k*255,v*255,w*255]};return j})();window.CanvasImage=g=(function(){function j(k){this.canvas=document.createElement("canvas");this.context=this.canvas.getContext("2d");document.body.appendChild(this.canvas);this.width=this.canvas.width=k.width;this.height=this.canvas.height=k.height;this.context.drawImage(k,0,0,this.width,this.height)}j.prototype.clear=function(){return this.context.clearRect(0,0,this.width,this.height)};j.prototype.update=function(k){return this.context.putImageData(k,0,0)};j.prototype.getPixelCount=function(){return this.width*this.height};j.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};j.prototype.removeCanvas=function(){return this.canvas.parentNode.removeChild(this.canvas)};return j})()}).call(this)},{quantize:1}]},{},[2]);function Share(n){var j=this;var d=n.i18n.xlat.msg;var v=n.i18n.xlat.msv;var r=n.notifications;this.App=n;this.social=new ShareSocial(this);this._init=false;this._ready=false;this.debug=true;var o=20;var i={catalog:true,user:true,page:true};var a={SHR:true,MSG:true,GIV:true,GCH:true,PSH:true,PGS:true};var y=false;var g="share-modal";var c="share-search-name";var x="share-search-results";var e={};var u=false;var m=false;var s=false;var q=false;var k,p,h,l;var t={shareSocial:true,shareInternal:true,actionType:"SHR",autoAddUserIds:[],allowAddUsers:true,allowMultiUser:true,customParameters:{},endpointType:false,endpointId:false,replyToId:false,pageTitle:"Check this!"};var b=false;var w=false;var f=[];this.share=function(A,D,C,z){if(typeof z!="function"){z=function(F,E){}}A.endpointType=D;A.endpointId=C;var B=j.App.lib.extendOptions(t,A);if(typeof a[B.actionType]=="undefined"||!a[B.actionType]){throw Error("Invalid action type")}if(B.actionType!="MSG"){if(typeof i[B.endpointType]=="undefined"||!i[B.endpointType]){throw Error("Invalid endpoint type")}}b=z;w=false;f=[];j._openShareModal(B)};this.profileShare=function(A,B,C,z){if(typeof z!="function"){z=function(D){}}j.share({actionType:"PSH",allowAddUsers:false,allowMultiUser:false,shareSocial:true,shareInternal:false,pageObject:C,customParameters:A},"user",B,z)};this.currentPageShare=function(A,B,z){if(typeof z!="function"){z=function(C){}}endpointId=0;j.share({actionType:"PGS",allowAddUsers:false,allowMultiUser:false,shareSocial:true,shareInternal:false,pageTitle:B,customParameters:A},"page",endpointId,z)};this.pageShare=function(A,B,z){if(typeof z!="function"){z=function(C){}}endpointId=0;j.share({actionType:"PSH",allowAddUsers:true,allowMultiUser:true,shareSocial:A.hasOwnProperty("shareSocial")?A.shareSocial:false,shareInternal:true,pageObject:B,customParameters:A},"page",endpointId,z)};this.gameInvite=function(C,A,B,z){if(typeof z!="function"){z=function(E,D){}}j.share({shareSocial:true,actionType:"GIV",autoAddUserIds:C,allowAddUsers:true,allowMultiUser:true,customParameters:A},"catalog",B,z)
};this.gameChallenge=function(E,C,D,A,B,z){if(typeof z!="function"){z=function(G,F){}}j.share({shareSocial:false,actionType:"GCH",allowAddUsers:C,autoAddUserIds:E,allowMultiUser:D,customParameters:A},"catalog",B,z)};this.message=function(B,z,A){if(typeof A!="function"){A=function(D,C){}}if(typeof z==="undefined"){z=false}if(j.App.userWidget.widgetMessages.isExtended){j.App.userWidget.widgetMessages.triggerOpen("#"+B);return}j.share({shareSocial:false,actionType:"MSG",allowAddUsers:false,autoAddUserIds:[B],allowMultiUser:false,replyToId:z},false,false,A)};this.messageConversation=function(B,z,A){if(typeof A!="function"){A=function(D,C){}}if(typeof z==="undefined"){z=false}if(j.App.userWidget.widgetMessages.isExtended){j.App.userWidget.widgetMessages.triggerOpen("#"+B);return}j.share({shareSocial:false,actionType:"MSG",allowAddUsers:false,autoAddUserIds:[B],allowMultiUser:false,replyToId:z,cssClasses:"conversation"},false,false,A)};this._closeShareModal=function(){if(!y){return false}j.App.navigation.modals.modal.close()};this._onShareModalClose=function(){if(!y){return}y=false;if(typeof b=="function"){b(w,f)}k.html("")};this._openShareModal=function(z){if(y){return false}var A;y=true;e=z;if(k){k.remove();k=false}A=$("<div id='"+g+"' class='modal share-modal small'><ul class='loader-spinner ls-dark'><li></li><li></li><li></li></ul></div>");if(z.hasOwnProperty("cssClasses")){A.addClass(z.cssClasses)}if(z.hasOwnProperty("noSmall")){A.removeClass("small")}$(document.body).append(A);k=$("#"+g);if(k.size()<1){return}k.on("modalClose",j._onShareModalClose);j.App.navigation.modals.modal.showByTarget(k);j._loadShareModal()};this._loadShareModal=function(){if(!y||!e){return}var z=j.App.url.ajaxhtml+"share/modal";$.ajax({url:z,type:"POST",data:e,success:function(A){k.html(A);j._onModalLoaded()},error:function(A){j._closeShareModal()}})};this._onModalLoaded=function(){if(!y||!e){return}if(e.shareSocial){j._attachSocialEvents()}if(e.shareInternal){j._attachInternalEvents()}if(!e.shareSocial&&!e.shareInternal){j._closeShareModal()
}};this._attachSocialEvents=function(){};this._attachInternalEvents=function(){var C;p=k.find("form");if(p.size()==0){return}C=p.find("#share-description");C.blur();C.focus(function(){C.select()});if(e.actionType==="MSG"){C.on("keydown",function(N){if(N.keyCode===13){N.preventDefault();N.stopPropagation();p.trigger("submit");return false}})}p.on("submit",j._onInternalSubmit);h=p.find("#"+c);l=p.find("#"+x);l.removeClass("visible");var K=p.find(".avatars-list");var B=false;var E=0;u=false;var z=function(){if(!u){return}u=false;m=false;if(q){q.abort();q=false}setTimeout(function(){E=0;B=false;setTimeout(function(){l.html("")},100);h.attr("value","");l.removeClass("visible")},200)};var I=function(){};var J=function(){if(q){q.abort();q=false}if(!u){return}var N=h.val();if(N.length<2){m=false;l.removeClass("visible").html("");return}if(N==m){return}E=0;B=false;q=$.ajax({url:j.App.url.ajaxhtml+"search/widget-friends/"+encodeURIComponent(N),success:function(O){if(!u||O.length<1){return}m=N;l.addClass("visible").html(O);K.find(".js-user").each(function(){l.find(".js-user[data-id='"+$(this).data("id")+"']").remove()});E=l.find(".js-user").size();if(E===0){l.find(".js-no-results").removeClass("hide-forced")}},complete:function(){q=false}})};var L=function(){l.find(".item-user").removeClass("current");var N=l.find(".item-user")[B];if(N){$(N).addClass("current")}};var G=function(N){if(N.keyCode!==38&&N.keyCode!==40&&N.keyCode!==13){return}N.preventDefault();N.stopPropagation();if(E===0){return false}if(N.keyCode===13){if(B===false&&E>0){B=0}if(B!==false){var O=l.find(".js-user")[B];if(O){$(O).trigger("click")}}}else{if(N.keyCode===38){if(B>0){B--;L()}}else{if(N.keyCode===40){if(B===false||B<(E-1)){if(B===false){B=0}else{B++}L()}}}}return false};var M=function(N){u=true;if(s){clearTimeout(s)}s=setTimeout(J,100);return G(N)};var H=function(N){if(N.keyCode===13||N.keyCode===38||N.keyCode===40){N.preventDefault();N.stopPropagation();return false}};var D=function(){var N=K.find(".js-user").size()-1;
if(N>0){K.show()}else{K.hide()}if(N>o){h.parent().hide()}else{if(!e.allowMultiUser&&N>=1){h.parent().hide()}else{h.parent().show()}}};var A=function(Q,O,N){if(!e.allowAddUsers){return}var P=p.find(".js-user-template").html();if(K.find(".js-user").size()>o){return false}if(K.find(".js-user[data-id="+Q+"]").size()>0){return false}K.append(P.split("data-src").join("src").split("%uid%").join(O).split("%id%").join(Q).split("%avatar%").join(N));h.val("");D();h.trigger("blur");setTimeout(function(){h.trigger("focus")},150);return false};var F=function(N){if(!e.allowAddUsers){return}var O=$(this);O.remove();D();N.preventDefault();N.stopPropagation();return false};h.on("blur",z);h.on("focus",I);h.on("keyup",M);h.on("keydown",H);K.on("click",".js-user",F);l.on("click",".js-user",function(N){N.preventDefault();N.stopPropagation();var O=$(this);if(!O||!O.data("id")){return false}A(O.data("id"),O.data("uid"),O.data("avatar"));return false});D()};this._onInternalSubmit=function(){if(!y||!e||!p){return}var z=j.App.url.ajaxhtml+"share/modal";var C=p.serializeArray();var B=j.App.lib.extendOptions({internalSubmit:true},e);B.autoAddUserIds=[];for(var A=0;A<C.length;A++){if(C[A].name=="message"){B.message=C[A].value}if(C[A].name=="autoAddUserIds[]"){B.autoAddUserIds.push(C[A].value)}}if(p.find("input[type=submit]").hasClass("disabled")){return}p.find("input[type=submit]").addClass("disabled");$.ajax({url:z,type:"POST",data:B,success:function(D){k.html(D);j._onModalLoaded()},error:function(D){j._onInternalSubmitFailed();p.find("input[type=submit]").removeClass("disabled")}});return false};this._onInternalSubmitError=function(z){j.notifyError(z)};this._onInternalSubmitSuccess=function(A,z){j.notifySuccess(A);w=true;f=z;setTimeout(function(){j._closeShareModal()},1200)};this._onIternalSubmitFailed=function(){j.notifyError("Unable to submit form")};this.notifyError=function(z){MP.navigation.hint.add(k.find('input[type="submit"]'),z,{position:"bottom","class":"error",stay:false,stayTime:5000})
};this.notifySuccess=function(z){p=k.find("form");p.height(p.height()).animate({height:180},150);p.empty().html('<div class="center group"><span class="icon icon-owl"></span><div class="t-c3 t-upp t-s15 group">'+z+"</div></div>")};this.init=function(){if(j._init){return}j.App.registerEventListener("ready",function(){j.ready()});j._init=true;j.social.init()};this.ready=function(){if(j._ready){return}j._ready=true;j.social.ready()};this.init()}function ShareSocial(e){var b=this;this.App=e.App;var d=this.App;var a=function(f){f=f||{};return d.lib.extendOptions({title:"",description:"",image:"",url:window.location,fragment:window.location.hash,caption:"",web:"",user:"",app_id:"",callback:function(){}},f)};var c=function(){return d.thirdParty.facebook.sdk()};this.init=function(){};this.ready=function(){};this.facebookModal=function(f){f=a(f);window.open("http://www.facebook.com/sharer.php?u="+encodeURIComponent(f.url+f.fragment),"facebook","height=365,width=660,resizable=1")};this.facebookFeed=function(f){if(!c()){return}f=a(f);c().ui({method:"feed",name:f.title,description:f.description,caption:f.caption,link:f.url+f.fragment,picture:f.image,actions:{link:f.url,name:f.web}},function(g){f.callback(g)})};this.facebookShare=function(f){if(!c()){return}f=a(f);c().ui({method:"share",href:f.url+f.fragment},function(g){f.callback(g)})};this.facebookLike=function(f){if(!c()){return}f=a(f);c().ui({method:"share_open_graph",action_type:"og.likes",action_properties:JSON.stringify({object:f.url+f.fragment})})};this.demoCount=function(g,h){var f=new d.lib.Future();setTimeout(function(){var i=Math.round(Math.random()*1000);if(!f.isCompleted()){f.setData("count",i).success()}},1500);setTimeout(function(){if(!f.isCompleted()){f.error(new Error("Timeout"))}},3000);if(typeof h==="function"){f.addListener(h)}return f};this.facebookCount=function(g,h){var f=new d.lib.Future();$.ajax({dataType:"jsonp",url:b.App.cfg.thirdParty.facebook.graphUrl+"?access_token="+b.App.cfg.thirdParty.facebook.accessToken+"&fields=engagement&callback=?&ids="+encodeURIComponent(g),success:function(j){var i=0;
if(!f.isCompleted()){if(j.hasOwnProperty(g)&&j[g].hasOwnProperty("engagement")&&j[g].engagement.hasOwnProperty("share_count")){i=j[g].engagement.share_count}if(g.split("https").length>=2){g=g.split("https").join("http");$.ajax({dataType:"jsonp",url:b.App.cfg.thirdParty.facebook.graphUrl+"?access_token="+b.App.cfg.thirdParty.facebook.accessToken+"&fields=engagement&callback=?&ids="+encodeURIComponent(g),success:function(k){if(!f.isCompleted()){if(k.hasOwnProperty(g)&&k[g].hasOwnProperty("engagement")&&k[g].engagement.hasOwnProperty("share_count")){i+=k[g].engagement.share_count}f.setData("count",i).success()}}})}else{f.setData("count",i).success()}}}});setTimeout(function(){if(!f.isCompleted()){f.error(new Error("Timeout"))}},3000);if(typeof h==="function"){f.addListener(h)}return f};this.twitterCount=function(g,h){var f=new d.lib.Future();$.ajax({type:"GET",dataType:"jsonp",url:"https://cdn.api.twitter.com/1/urls/count.json?callback=?&url="+encodeURIComponent(g),success:function(j){var i=0;if(!f.isCompleted()){if(j.hasOwnProperty("count")){i=j.count}f.setData("count",i).success()}}});setTimeout(function(){if(!f.isCompleted()){f.error(new Error("Timeout"))}},3000);if(typeof h==="function"){f.addListener(h)}return f};this.gplusCount=function(g,h,i){var f=new d.lib.Future();$.ajax({type:"GET",dataType:"jsonp",url:d.url.api+"thirdparty/social/shares/gplus/?callback=?&hash="+h+"&url="+encodeURIComponent(g),success:function(k){var j=0;if(!f.isCompleted()){if(k.hasOwnProperty("data")&&k.data.hasOwnProperty("count")&&k.data.count.hasOwnProperty("result")&&k.data.count.result.hasOwnProperty("metadata")){j=k.data.count.result.metadata.globalCounts.count||0}f.setData("count",j).success()}}});setTimeout(function(){if(!f.isCompleted()){f.error(new Error("Timeout"))}},1000);if(typeof i==="function"){f.addListener(i)}return f};this.gplusModal=function(f){f=a(f);window.open("https://plus.google.com/share?url="+encodeURIComponent(f.url+f.fragment),"gplus","height=300,width=550,resizable=1")
};this.twitterModal=function(f){f=a(f);window.open("https://www.twitter.com/share?via="+f.user+"&text="+f.title+"&url="+encodeURIComponent(f.url+f.fragment),"tweet","height=300,width=550,resizable=1")}};function User(App){var init,ready,self,msg,msv,notifications,isAliveFlag,levelsArray,currentSubscriptionsValue,initFlag;self=this;this.App=App;this.eventListeners={awake:null,die:null,statsUpdated:null,registrationCompleted:null};init=false;ready=false;this.debug=true;msg=App.i18n.xlat.msg;msv=App.i18n.xlat.msv;notifications=App.notifications;this.id=null;this.uid=null;this.avatar=null;this.is_staff=false;this.progress_points=0;this.progress_level=1;this.thirdparty={facebook:false,facebook_id:false,twitter:false,twitter_id:false};this.total_minicoins=0;this.total_gems=0;this.total_messages=0;this.last_read_messages=0;this.last_message_received=0;this.total_unread_threads=0;this.last_feed_notification=0;this.last_feed_notification_read=0;this.version={messaging:1};isAliveFlag=false;levelsArray=null;this.setLevels=function(levels){levelsArray=levels};this.getLevelRange=function(level){if(levelsArray===null){return false}if(level===undefined){return levelsArray[self.progress_level]}if(!(levelsArray[level]===undefined)){return levelsArray[level]}return false};this.getLevelByPoints=function(points){var levelPoints,level;if(levelsArray===null){return false}points=parseInt(points,10);for(level in levelsArray){if(levelsArray.hasOwnProperty(level)){levelPoints=levelsArray[level];if(points>=levelPoints[0]&&points<=levelPoints[1]){return parseInt(level,10)}}}return parseInt(level,10)};this.getProgressLevelPercent=function(points){var maxPoints,level,levelRange;if(levelsArray===null){return false}if(points===undefined){points=self.progress_points}level=self.getLevelByPoints(points);levelRange=self.getLevelRange(level);points=points-levelRange[0];maxPoints=levelRange[1]-levelRange[0];if(points<=0){return 0}if(maxPoints<=0){return 0}return(100*points)/maxPoints};this.awake=function(){if(!this.checkAwakeRequirements()){return}isAliveFlag=true;this.triggerEvent("awake")};this.die=function(){isAliveFlag=false;this.triggerEvent("die")};this.statsUpdated=function(){if(!isAliveFlag){return
}this.triggerEvent("statsUpdated")};this.registrationCompleted=function(payload){if(typeof payload==="undefined"){payload=null}this.triggerEvent("registrationCompleted",payload)};this.print=function(){};this.checkAwakeRequirements=function(){if(isAliveFlag){return false}if(this.id===null){alert("id is mandatory")}if(this.uid===null){alert("uid is mandatory")}if(levelsArray===null){alert("levels haven't been initialized")}return true};this.registerEventListener=function(eventId,triggerFunction){if(typeof triggerFunction==="function"&&eventId!==null){if(eventId=="awake"&&self.isAlive()){triggerFunction();return true}if(this.eventListeners[eventId]===null){this.eventListeners[eventId]=[]}this.eventListeners[eventId].push(triggerFunction);return true}return false};this.triggerEvent=function(eventId,parameter){var i;if(parameter===undefined){parameter=false}if(this.eventListeners[eventId] instanceof Array){for(i=0;i<this.eventListeners[eventId].length;i+=1){if(this.eventListeners[eventId][i](parameter)===false){return false}}}return true};this.doSubscribe=function(publisherUid,domElement,callbackSuccess,callbackNotSuccess,callbackOnFinish){if(!this.isAlive()){this.showLogin();if(typeof callbackOnFinish==="function"){callbackOnFinish(domElement)}return false}var urlAjax=MP.url.ajax+"user/actions/subscribe/"+publisherUid+"?rnd="+Math.random();if(domElement!==undefined){$(domElement).css({"pointer-events":"none"})}$.ajax({url:urlAjax,success:function(response){var selector;if(domElement!==undefined){$(domElement).css({"pointer-events":"auto"})}selector=$(".js-pubsub[data-user='"+publisherUid+"']");selector.find(".js-subscribe").hide();selector.find(".js-unsubscribe").show();selector.find(".label-subscribe").hide();selector.find(".label-unsubscribe").show();selector.addClass("btn-following");selector.find(".switch input").attr("checked",true);if(self.App.presenceManager.isAlive()&&self.App.presenceManager.modules.friendRecommendations.isAlive()){setTimeout(function(){self.App.presenceManager.modules.friendRecommendations.ackSuggestion(publisherUid,true)
},350)}if(typeof callbackSuccess==="function"){callbackSuccess(domElement)}if(typeof callbackOnFinish==="function"){callbackOnFinish(domElement)}},error:function(response){var responseData=null;if(domElement!==undefined){$(domElement).css({visibility:"visible"})}if(response.responseText!==null){eval("responseData="+response.responseText)}if(responseData&&responseData.hasOwnProperty("status")){switch(responseData.status){case 401:case 403:self.showLogin();break;default:if(responseData.hasOwnProperty("exception")){App.notifications.notify({stayTime:20000,text:responseData.exception.message,type:"error"})}else{App.notifications.notify({stayTime:20000,text:msg("Please try again later"),type:"error"})}break}}if(typeof callbackNotSuccess==="function"){callbackNotSuccess(domElement)}if(typeof callbackOnFinish==="function"){callbackOnFinish(domElement)}}});return true};this.doUnsubscribe=function(publisherUid,domElement,callbackSuccess,callbackNotSuccess,callbackOnFinish){if(!self.isAlive()){self.showLogin();if(typeof callbackOnFinish==="function"){callbackOnFinish(domElement)}return false}var urlAjax=MP.url.ajax+"user/actions/unsubscribe/"+publisherUid+"?rnd="+Math.random();$.ajax({url:urlAjax,success:function(response){var selector;selector=$(".js-pubsub[data-user='"+publisherUid+"']");selector.find(".js-unsubscribe").hide();selector.find(".js-subscribe").show();selector.find(".label-unsubscribe").hide();selector.find(".label-subscribe").show();selector.removeClass("btn-following");selector.find(".switch input").attr("checked",false);if(typeof callbackSuccess==="function"){callbackSuccess(domElement)}if(typeof callbackOnFinish==="function"){callbackOnFinish(domElement)}},error:function(response){var responseData=null;if(response.responseText!==null){eval("responseData="+response.responseText)}switch(response.status){case 401:case 403:self.showLogin();break;default:if(responseData.hasOwnProperty("exception")){App.notifications.notify({stayTime:20000,text:responseData.exception.message,type:"error"})
}else{App.notifications.notify({stayTime:20000,text:msg("Please try again later"),type:"error"})}}if(typeof callbackNotSuccess==="function"){callbackNotSuccess(domElement)}if(typeof callbackOnFinish==="function"){callbackOnFinish(domElement)}}});return true};this.video=new function(){var video=this,_ready=false,doActionOnVideo,actionNames={like:"like",dislike:"dislike",ban:"ban",unban:"unban",report:"report",deleteVideo:"delete",approve:"approve",feature:"feature",unfeature:"unfeature"},config={parentElements:".container, .full-container, .slideshow-wrapper, aside, modal",actionSelector:".js-video-action",valueContainerSelector:".js-action-value",actionCooldownTTL:30};this.like=function(videoId,driverType,$domTarget){return doActionOnVideo(actionNames.like,videoId,driverType,$domTarget)};this.dislike=function(videoId,driverType,$domTarget){return doActionOnVideo(actionNames.dislike,videoId,driverType,$domTarget)};this.report=function(videoId,driverType,$domTarget){return doActionOnVideo(actionNames.report,videoId,driverType,$domTarget)};var adminCallbackOK=function(action){App.notifications.notify({stayTime:20000,text:action+" video success",type:"success"})},adminCallbackKO=function(action){App.notifications.notify({stayTime:20000,text:action+" video fail",type:"error"})};this.ban=function(videoId,driverType,$domTarget){return doActionOnVideo(actionNames.ban,videoId,driverType,$domTarget,function(){adminCallbackOK(actionNames.ban)},function(){adminCallbackKO(actionNames.ban)})};this.unban=function(videoId,driverType,$domTarget){return doActionOnVideo(actionNames.unban,videoId,driverType,$domTarget,function(){adminCallbackOK(actionNames.unban)},function(){adminCallbackKO(actionNames.unban)})};this.deleteVideo=function(videoId,driverType,$domTarget){return doActionOnVideo(actionNames.deleteVideo,videoId,driverType,$domTarget,function(){adminCallbackOK(actionNames.deleteVideo)},function(){adminCallbackKO(actionNames.deleteVideo)})};this.approve=function(videoId,driverType,$domTarget){return doActionOnVideo(actionNames.approve,videoId,driverType,$domTarget,function(){adminCallbackOK(actionNames.approve)
},function(){adminCallbackKO(actionNames.approve)})};this.feature=function(videoId,driverType,$domTarget){return doActionOnVideo(actionNames.feature,videoId,driverType,$domTarget,function(){$domTarget.find("i").removeClass("ic-star-o").addClass("ic-star");adminCallbackOK(actionNames.feature)},function(){adminCallbackKO(actionNames.feature)})};this.unfeature=function(videoId,driverType,$domTarget){return doActionOnVideo(actionNames.unfeature,videoId,driverType,$domTarget,function(){$domTarget.find("i").removeClass("ic-star").addClass("ic-star-o");adminCallbackOK(actionNames.unfeature)},function(){adminCallbackKO(actionNames.unfeature)})};doActionOnVideo=function(actionName,videoId,driverType,$domTarget,callbackOK,callbackKO){if(!self.isAlive()){self.showLogin();return false}var urlAjax=MP.url.ajax+"user/actions/video/";if($domTarget!==undefined){$($domTarget).css({"pointer-events":"none"})}$.ajax({url:urlAjax,method:"POST",data:{actionName:actionName,videoId:videoId,driverType:driverType},success:function(response){var $videoActionButtons;if(response.hasOwnProperty("data")&&response.data.hasOwnProperty("result")&&response.data.result){if($domTarget!==undefined){$($domTarget).css({"pointer-events":"auto"})}var substract=false,value,$valueContainer;if(($domTarget).is(".active")){substract=true}$videoActionButtons=$(config.actionSelector+"[data-video-id='"+videoId+"']");$videoActionButtons.removeClass("active");if(substract){$domTarget.removeClass("active")}else{$domTarget.addClass("active")}if(response.data.hasOwnProperty("values")){var newValues=response.data.values;$.each(newValues,function(key,value){var $valueContainer=$videoActionButtons.find(config.valueContainerSelector+"[data-action="+key+"]");if($valueContainer.size()>0){$valueContainer.html(self.App.i18n.writeNumber(value));$valueContainer.attr("data-value",value)}})}else{$valueContainer=$domTarget.find(config.valueContainerSelector);if($valueContainer.size()>0){value=parseInt($valueContainer.data("value"),10);
if(value!="NaN"){if(substract){value-=1}else{value+=1}$valueContainer.html(self.App.i18n.writeNumber(value));$valueContainer.attr("data-value",value)}}}if(typeof callbackOK==="function"){callbackOK($domTarget)}}},error:function(response){var responseData=null;if($domTarget!==undefined){$($domTarget).css({visibility:"visible"})}if(response.responseText!==null){eval("responseData="+response.responseText)}if(responseData&&responseData.hasOwnProperty("status")){switch(responseData.status){case 401:case 403:self.showLogin();break;default:if(responseData.hasOwnProperty("exception")){App.notifications.notify({stayTime:20000,text:responseData.exception.message,type:"error"})}else{App.notifications.notify({stayTime:20000,text:msg("Please try again later"),type:"error"})}break}}if(typeof callbackKO==="function"){callbackKO($domTarget)}},complete:function(){$domTarget.addClass("disabled");setTimeout(function(){$domTarget.removeClass("disabled")},config.actionCooldownTTL*1000)}});return true};var bindEventListener=function(target){var $parentElement=$(config.parentElements);if(target!==undefined){$parentElement=$(target)}$parentElement.on("click",config.actionSelector,function(ev){ev.preventDefault();ev.stopPropagation();var $target=$(this),actionName=$target.data("action"),videoId=$target.data("video-id"),driverType=$target.data("driver-type");if($target.hasClass("disabled")){return false}if(!actionName||!videoId){return false}if(typeof video[actionName]==="function"){video[actionName](videoId,driverType,$target)}})};this.attachEventsOnTarget=function(target){bindEventListener(target)};this.ready=function(){if(_ready){return false}bindEventListener();_ready=true}};this.doDeleteRecommendation=function(publisherUid,domElement,callbackSuccess,callbackNotSuccess,callbackOnFinish){if(!self.isAlive()){if(typeof callbackOnFinish==="function"){callbackOnFinish(domElement)}return false}var urlAjax=MP.url.ajax+"user/actions/delete-recommendation/"+publisherUid;$.ajax({url:urlAjax,success:function(response){if(typeof callbackSuccess==="function"){callbackSuccess(domElement)
}if(typeof callbackOnFinish==="function"){callbackOnFinish(domElement)}},error:function(response){var responseData=null;if(response.responseText!==null){eval("responseData="+response.responseText)}switch(response.status){case 401:case 403:self.showLogin();break;default:break}if(typeof callbackNotSuccess==="function"){callbackNotSuccess(domElement)}if(typeof callbackOnFinish==="function"){callbackOnFinish(domElement)}}});return true};this.showLogin=function(){if(this.isAlive()){return false}this.die();if(self.App.game.is_embed){parent.App.userModal.ready(function(){parent.App.userModal.executeForAction("login","enter")})}else{parent.App.userModal.ready(function(){self.App.userModal.executeForAction("login","enter")})}return true};this.showRegister=function(destination,hideFB){if(typeof hideFB=="undefined"){hideFB=false}if(this.isAlive()){return false}this.die();if(destination===undefined){destination=null}if(self.App.game.is_embed){parent.App.userModal.ready(function(){parent.App.userModal.executeForAction("register","setOption",["hideFB",hideFB]);parent.App.userModal.executeForAction("register","setOption",["destination",destination],function(){parent.App.userModal.executeForAction("register","enter")})})}else{parent.App.userModal.ready(function(){parent.App.userModal.executeForAction("register","setOption",["hideFB",hideFB]);self.App.userModal.executeForAction("register","setOption",["destination",destination],function(){self.App.userModal.executeForAction("register","enter")})})}return true};this.loadRecommendations=function(domContainer,userUid,limit,options,callbackSuccess,callbackNotSuccess){var urlAjax,$container=$(domContainer);if($container.length==0){return false}if(limit===undefined||limit===null){limit=10}if(options===undefined){options={}}if(!options.hasOwnProperty("append")){options.append=true}if(!options.hasOwnProperty("loader")){options.loader=true}urlAjax=MP.url.ajaxhtml+"profile/"+userUid+"/user-recommendations?limit="+limit+"&"+$.param(options)+"&rnd="+Math.random();
if(options.loader){$container.append("<ul class='loader-spinner'><li></li><li></li><li></li></ul>")}$.ajax({url:urlAjax,success:function(response){if(options.append){$container.append(response)}else{$container.html(response)}self.App.user.eventUserDisplayed($container);if(typeof callbackSuccess==="function"){callbackSuccess($container)}},error:function(response){if(typeof callbackNotSuccess==="function"){callbackNotSuccess($container)}},complete:function(){if(options.loader){$container.find(".loader-spinner").remove()}}})};this.isAlive=function(){return !!isAliveFlag};this.eventUserDisplayed=function(domSelector){var $domObject;if(domSelector===undefined){return}$domObject=typeof domSelector==="object"?domSelector:$(domSelector);if(!$domObject){return}$domObject.find(".js-user-recommended").each(function(){var user,$user;$user=$(this);user=$user.attr("data-user");if($user.data().binded!==undefined){return}$user.data().binded=true;if(user.length>0){$user.find(".js-delete").click(function(ev){ev.preventDefault();ev.stopPropagation();$user.css({opacity:0.5});self.doDeleteRecommendation(user,$user.get(0),function(domElement){},function(domElement){},function(domElement){$user.trigger("user-recommendation-delete")});return false});$user.on("user-subscribe",function(ev){ev.preventDefault();ev.stopPropagation();$user.trigger("user-recommendation-delete");$user.css({opacity:0.5})})}});$domObject.find(".js-pubsub").each(function(){var btn,user,btnSubs,btnUnSubs,$spinner,$this,$btnLabel;btn=$(this);user=btn.attr("data-user");btnSubs=btn.find(".js-subscribe");btnUnSubs=btn.find(".js-unsubscribe");$spinner=$('<ul class="loader-spinner"><li></li><li></li><li></li></ul>');if(btn.data().binded!==undefined){return}btn.data().binded=true;if(user.length>0){btnSubs.click(function(){$this=$(this);$btnLabel=$this.siblings(".label-subscribe");if(self.isAlive()){$this.addClass("loading");$btnLabel.addClass("hide-forced")}self.doSubscribe(user,$this.get(0),function(domElement){$this.removeClass("loading");
$btnLabel.removeClass("hide-forced");self.changeSubscriptionsAmounts.changeSubscribers("add");self.changeSubscriptionsAmounts.changeFollowers("add",user);$this.trigger("user-subscribe")},function(domElement){$this.removeClass("loading");$btnLabel.removeClass("hide-forced")});return false});btnUnSubs.click(function(){$this=$(this);$btnLabel=$this.siblings(".label-unsubscribe");$this.addClass("loading");$btnLabel.addClass("hide-forced");self.doUnsubscribe(user,$this.get(0),function(domElement){$this.removeClass("loading");$btnLabel.removeClass("hide-forced");self.changeSubscriptionsAmounts.changeSubscribers("deduct");self.changeSubscriptionsAmounts.changeFollowers("deduct",user);$this.trigger("user-unsubscribe")},function(domElement){$this.removeClass("loading");$btnLabel.removeClass("hide-forced")});return false})}})};this.changeSubscriptionsAmounts={changeSubscribers:function(mode){var domSubscriptionsValue,user,subscriptionsValue,userProfile;domSubscriptionsValue=$(".subscriptions-value");if(domSubscriptionsValue===undefined){return}user=self.uid;subscriptionsValue=domSubscriptionsValue.attr("data-value");userProfile=domSubscriptionsValue.attr("data-user");if(user===userProfile){if(mode==="add"){currentSubscriptionsValue=parseInt(subscriptionsValue,10)+1}else{if(mode==="deduct"){currentSubscriptionsValue=parseInt(subscriptionsValue,10)-1}}subscriptionsValue=currentSubscriptionsValue;domSubscriptionsValue.attr("data-value",subscriptionsValue);domSubscriptionsValue.html(self.App.i18n.writeNumber(currentSubscriptionsValue))}},changeFollowers:function(mode,userTarget){var domFollowersValue,user,userProfile,followersValue;domFollowersValue=$(".followers-value");if(domFollowersValue===undefined){return}user=self.uid;followersValue=domFollowersValue.attr("data-value");userProfile=domFollowersValue.attr("data-user");if(userTarget===userProfile){if(mode==="add"){currentSubscriptionsValue=parseInt(followersValue,10)+1;$(".js-pubsub-followers").find(".its-me").show()}else{if(mode==="deduct"){currentSubscriptionsValue=parseInt(followersValue,10)-1;
$(".js-pubsub-followers").find(".its-me").hide()}}followersValue=currentSubscriptionsValue;domFollowersValue.attr("data-value",followersValue);domFollowersValue.html(self.App.i18n.writeNumber(currentSubscriptionsValue))}}};this.friendImporter=function(options,$trigger){var callback;if($trigger===undefined){$trigger=null}if(options===undefined){options={}}options.$trigger=$trigger;if(!self.isAlive()){return}callback=function(friendImporter){friendImporter.open(options,$trigger);if($trigger instanceof $){$trigger.removeClass("loading");$trigger.find(".loader-spinner").remove();$trigger.find(".js-txt").show();$trigger.trigger("friend-importer-open-success")}};if($trigger instanceof $){$trigger.append("<ul class='loader-spinner'><li></li><li></li><li></li></ul>").find(".js-txt").hide();$trigger.trigger("friend-importer-open-start")}if(window.App.lazy.hasOwnProperty("FriendImporter")&&window.App.lazy.FriendImporter.isReady()){callback(window.App.lazy.FriendImporter)}else{window.friendImporterCallback=callback;$("body").append('<script src="'+App.url.js+"App/Lazy/FriendImporter"+App.cfg.buildVersion+'.js"><\/script>')}};this.init=function(){if(initFlag){return}self.App.registerEventListener("ready",function(){self.ready()});initFlag=true};this.ready=function(){if(ready){return}self.video.ready();ready=true};this.init()};function UserWidgetExtendedMessaging(f,c){var l=this;this.App=f.App;this.userWidget=f;var h=0;var k="#user-widget-messages a";var d={baseContainer:"#dd-header-messages",threadsPanel:"#dd-threads-panel",threadsSearch:"#dd-threads-search",threadsSearchInput:"#dd-threads-search-query",threadsList:"#dd-threads-list",threadsTemplateOpen:"#dd-threads-template-thread-open",threadsTemplateNew:"#dd-threads-template-thread-new",threadsTemplateNoThreads:"#dd-threads-template-thread-no-threads",threadsTemplateNoFriends:"#dd-threads-template-thread-no-friends",messagesPanel:"#dd-messages-panel",messagesTemplateNoMessages:"#dd-messages-template-no-messages",messagesTemplateError:"#dd-messages-template-error",messagesTemplateMessage:"#dd-messages-template-message",messagesTemplateNewMessages:"#dd-messages-template-new-messages",messagesTemplateLoadMessages:"#dd-messages-template-load-messages",messagesList:"#dd-messages-list",messagesPost:"#dd-messages-post",messagesTemplateConversationHeader:"#dd-messages-template-conversation-header"};var i={baseContainer:null,threadsPanel:null,threadsSearch:null,threadsSearchInput:null,threadsList:null,threadsListZeroCase:null,threadsTemplateOpen:null,threadsTemplateNew:null,threadsTemplateNoThreads:null,threadsTemplateNoFriends:null,messagesPanel:null,messagesTemplateNewMessages:null,messagesTemplateLoadMessages:null,messagesTemplateMessage:null,messageTemplateMessageHtml:null,messagesTemplateNoMessages:null,messagesTemplateError:null,messagesList:null,messagesPost:null,$newMessagesPlaceholder:null,$loadMessagesPlaceholder:null,messagesTemplateConversationHeader:null,conversationHeader:null};var s=false;var m=null;var e=null;var q=null;var j=null;var x=null;var r=[];var y={};var a={};var t={};var p=(86400*120*1000);var v=20000;var g=30000;var n=0;var w="";var u=350;var o=0;this._ready=false;this._urlAjax=null;this._itemsPerPage=40;this._maxThreads=24;this._searchTimeoutDelayMS=750;this._updateThreadsTimeout=null;this._updateCurrentThreadTimeout=null;
this._currentSearch="";l._currentSearchUser="";this._currentThreadData={oldestTimestamp:null,lowestTimestamp:null,newestTimestamp:null,lastReadTimestamp:null,loadCounter:0,refreshCounter:0,isNew:false,updateJobTimeout:null,user_other:null};this.isBasic=false;this.isExtended=true;this._currentThread=null;this._onThreadClicked=function(z){l.setThread(z.attr("data-id"))};this._onSearchSubmit=function(z){var A=z.find("input[name=query]").val();if(A!==""){l.setSearch(A)}else{l._onSearchClear()}};this._onSearchClear=function(z){l.clearSearch();l.loadThreads()};this._onPostMessageSubmit=function(z){l.sendMessage(z.find("input[name=message]").val())};this.triggerOpen=function(A,z){if(A==undefined){A=""}if(z==undefined){z=""}A=A+"";z=z+"";if(A&&A.length>0){l._currentSearch=A}if(!s){$(k).trigger("click")}else{l._currentThread=null;l._currentThreadData.loadCounter=0;l._currentThreadData.refreshCounter=0;l._currentThreadData.isNew=false;l._currentThreadData.user_other=null;l.setSearch(l._currentSearch)}};this.triggerClose=function(){if(s){$(k).trigger("click")}};this.searchTypeTimeoutInstance=null;this.clearSearch=function(){i.threadsSearch.find("input[name=query]").val("");i.threadsSearch.find(".go-back").hide().removeClass("visible");i.threadsList.html("")};this.setSearch=function(z){l._currentSearch=z;if(!z.match(/^#[0-9+]/)){i.threadsSearch.find("input[name=query]").val(z);i.threadsSearch.removeClass("search-by-id")}else{i.threadsSearch.addClass("search-by-id")}l.loadSearch(l._currentSearch)};this.scheduleSearch=function(){var z=i.threadsSearchInput.val();if(true){if(l.searchTypeTimeoutInstance){clearTimeout(l.searchTypeTimeoutInstance)}l.searchTypeTimeoutInstance=setTimeout(function(){l._onSearchSubmit(i.threadsSearch)},l._searchTimeoutDelayMS)}};this.refresh=function(){if(l._currentSearch&&l._currentSearch.length>0){l.setSearch(l._currentSearch)}else{l.loadThreads()}};this.onOpen=function(z){if(z==undefined){z=l._itemsPerPage}else{z=parseInt(z)}l._urlAjax=MP.url.ajax+"user/"+MP.user.uid+"/messages/v"+MP.user.version.messaging+"/";
if(d.baseContainer&&!i.baseContainer){i.baseContainer=$(d.baseContainer);if(!i.baseContainer){return false}}if(!i.threadsPanel){i.threadsPanel=i.baseContainer.find(d.threadsPanel);i.threadsSearch=i.baseContainer.find(d.threadsSearch);i.threadsSearchInput=i.threadsSearch.find(d.threadsSearchInput);i.threadsList=i.baseContainer.find(d.threadsList);i.threadsTemplateOpen=i.baseContainer.find(d.threadsTemplateOpen);i.threadsTemplateOpenHtml=$.trim(i.threadsTemplateOpen.html());i.threadsTemplateNew=i.baseContainer.find(d.threadsTemplateNew);i.threadsTemplateNewHtml=$.trim(i.threadsTemplateNew.html());i.threadsTemplateNoThreads=i.baseContainer.find(d.threadsTemplateNoThreads);i.threadsTemplateNoFriends=i.baseContainer.find(d.threadsTemplateNoFriends);i.baseContainer.on("click",".js-close",function(A){A.preventDefault();l.triggerClose();return false});i.threadsList.on("click",".thread",function(A){A.preventDefault();l._onThreadClicked($(this));return false});i.threadsSearchInput.on("input",function(A){A.preventDefault();l.scheduleSearch();return false});i.threadsSearch.on("submit",function(A){A.preventDefault();l._onSearchSubmit(i.threadsSearch);return false});i.threadsSearch.on("click",".go-back",function(A){A.preventDefault();l._onSearchClear(i.threadsSearch);return false})}if(!i.messagesPanel){i.messagesPanel=i.baseContainer.find(d.messagesPanel);i.messagesTemplateNewMessages=i.baseContainer.find(d.messagesTemplateNewMessages);i.messagesTemplateLoadMessages=i.baseContainer.find(d.messagesTemplateLoadMessages);i.messagesTemplateMessage=i.baseContainer.find(d.messagesTemplateMessage);i.messagesTemplateMessageHtml=$.trim(i.messagesTemplateMessage.html());i.messagesTemplateNoMessages=i.baseContainer.find(d.messagesTemplateNoMessages);i.messagesTemplateError=i.baseContainer.find(d.messagesTemplateError);i.messagesList=i.baseContainer.find(d.messagesList);i.messagesPost=i.baseContainer.find(d.messagesPost);i.messagesTemplateConversationHeader=i.baseContainer.find(d.messagesTemplateConversationHeader);
i.messagesPost.on("submit",function(A){if(MP.user.version.messaging!==3){return false}A.preventDefault();l._onPostMessageSubmit(i.messagesPost);return false});i.messagesPanel.on("click",".js-enable-push",function(A){if(typeof window.Minipush!=undefined){window.Minipush.push(function(){if(!window.Minipush.isBlocked()){window.Minipush.subscription.subscribe()}else{$("#user-widget-pushn a").click()}})}A.preventDefault();return false})}if(!i.messagesPanel||!i.threadsPanel){return false}s=true;l._currentThreadData.lastReadTimestamp=l.App.user.last_read_messages;l._currentThreadData.loadCounter=0;l._currentThreadData.refreshCounter=0;l._currentThreadData.isNew=false;l._currentThreadData.user_other=null;l._itemsPerPage=z;l._ready=true;l._currentThread=null;i.messagesList.html("");i.threadsList.html("");if(i.conversationHeader){i.conversationHeader.remove();i.conversationHeader=null}t={};i.messagesPost.addClass("disabled");i.messagesPanel.addClass("thread-unselected").removeClass("thread-selected");if(l._currentSearch&&l._currentSearch.length>0){l.setSearch(l._currentSearch)}else{l.loadThreads()}};this.reload=function(){if(!s){return}l.close();l.open()};this.onClose=function(){if(!l._ready){return}s=false;if(m){m.abort()}if(q){q.abort()}if(i.messagesList){i.messagesList.html("")}if(i.threadsList){i.threadsList.html("")}l._currentThread=null;l._currentSearch="";l._currentSearchUser="";l._currentThreadData.loadCounter=0;l._currentThreadData.refreshCounter=0;l.clearSearch();clearTimeout(l._currentThreadData.updateJobTimeout);clearTimeout(l._updateThreadsTimeout);clearTimeout(l._updateCurrentThreadTimeout)};this.getPresenceStatus=function(){if(!l.App.hasOwnProperty("presenceManager")||!l.App.presenceManager||!l.App.presenceManager.isAlive()){return null}return l.App.presenceManager.getUserStatus()};this.getPresenceUserStatus=function(z){var B=l.getPresenceStatus();if(B=="online"||B=="dnd"){var A=l.App.presenceManager.getConnectedUser(z);if(A){return A.status}}return null};this.loadThreads=function(A){if(l._updateThreadsTimeout){clearTimeout(l._updateThreadsTimeout)
}if(l._updateCurrentThreadTimeout){clearTimeout(l._updateCurrentThreadTimeout)}i.threadsSearch.removeClass("search-by-id").removeClass("active");if(A==undefined){A=function(){}}if(!l._ready||!i.threadsPanel){return}if(m){m.abort()}l._currentSearch="";var z=l.getCurrentThread();m=$.ajax({url:l._urlAjax+"threads?currentThread="+l._currentThread+"&onlyCurrentThread=&limit="+l._maxThreads,success:function(B){if(B.data.hasOwnProperty("threads")){r=B.data.threads}if(B.data.hasOwnProperty("users")&&B.data.users){y=B.data.users}if(B.data.hasOwnProperty("unreadThreads")){n=parseInt(B.data.unreadThreads);l.updateUnreadThreadsCounter()}},error:function(B){},complete:function(){m=null;l._generateThreadList();l._onLoadThreadComplete(A,z,l._currentThread)}});l.scheduleReloadThreads()};this._onLoadThreadComplete=function(D,A,B){if(B==undefined){B=l._currentThread}var z=l.setThread(B);D(z);var C=l.getCurrentThread();if(A&&C){}if(A&&C&&C.id==A.id&&C.unread_messages>A.unread_messages){l._refreshMessages()}};var b=null;this.canMarkAsRead=function(){var A=l.getCurrentThread();var z=false;if(A&&A.unread_messages>0){if((i.messagesList.scrollTop()+i.messagesList.height())>(i.messagesList.prop("scrollHeight")-200)){z=true}}return z};this.loadCurrentThread=function(B){if(B==undefined){B=function(){}}if(!l._ready||!i.threadsPanel){return}if(l._currentThread){if(b){b.abort()}var A=l.canMarkAsRead();var z=l.getCurrentThread();b=$.ajax({url:l._urlAjax+"threads?currentThread="+l._currentThread+"&onlyCurrentThread=true&markAsRead="+A+"&limit=1",success:function(C){if(C.data.hasOwnProperty("threads")&&C.data.threads instanceof Array&&C.data.threads.length>0){l.updateThread(C.data.threads[0].id,C.data.threads[0],true)}if(C.data.hasOwnProperty(("markedAsRead"))&&C.data.markedAsRead){if(n>=1){n--}l.updateUnreadThreadsCounter()}if(C.data.hasOwnProperty("unreadThreads")){n=parseInt(C.data.unreadThreads);l.updateUnreadThreadsCounter()}l._onLoadThreadComplete(B,z,l._currentThread)},error:function(C){},complete:function(){b=null
}})}};this.loadSearch=function(A,B){if(l._updateThreadsTimeout){clearTimeout(l._updateThreadsTimeout)}if(l._updateCurrentThreadTimeout){clearTimeout(l._updateCurrentThreadTimeout)}i.threadsSearch.addClass("active");if(A==undefined){A=""}if(B==undefined){B=function(){}}if(e){e.abort()}if(m){m.abort()}clearTimeout(l._updateThreadsTimeout);clearTimeout(l._updateCurrentThreadTimeout);l._currentSearch=A;if(A.length==0){l.loadThreads(B);return}else{if(A.length<=2&&A.substring(0,1)!="#"){r=[];l._generateThreadList();B(l.setThread(l._currentThread));return}}if(!l._ready||!i.threadsPanel){return}var z=l.getCurrentThread();l._currentSearch=A;e=$.ajax({url:l._urlAjax+"search?searchUsers="+encodeURIComponent(A)+"&limit="+Math.round(l._maxThreads),success:function(C){if(C.data.hasOwnProperty("threads")){r=C.data.threads}if(C.data.hasOwnProperty("users")&&C.data.users){a=C.data.users}},error:function(C){},complete:function(){e=null;var C=l._currentThread;if(!C&&r.length==1){C=r[0].id}l._generateThreadList(true);l._onLoadThreadComplete(B,z,C)}});l.scheduleReloadThreads()};this.refreshPushNotificationsMessage=function(){if(window.Minipush!=undefined){window.Minipush.push(function(){if(!window.Minipush.isSubscribed()){i.messagesPanel.addClass("push-ko").removeClass("push-ok")}else{i.messagesPanel.addClass("push-ok").removeClass("push-ko")}})}};this.scheduleReloadThreads=function(){l.refreshPushNotificationsMessage();if(!l._currentSearch){if(l._updateThreadsTimeout){clearTimeout(l._updateThreadsTimeout)}l._updateThreadsTimeout=setTimeout(l.loadThreads,v);if(l._updateCurrentThreadTimeout){clearTimeout(l._updateCurrentThreadTimeout)}l._updateCurrentThreadTimeout=setTimeout(l.loadCurrentThread,v/2)}else{if(l._updateThreadsTimeout){clearTimeout(l._updateThreadsTimeout)}if(l._updateCurrentThreadTimeout){clearTimeout(l._updateCurrentThreadTimeout)}l._updateCurrentThreadTimeout=setTimeout(function(){l.loadCurrentThread();if(l._currentSearch){l.scheduleReloadThreads()}},v/2)}};this.getUserData=function(z){if(a&&a[z]!=undefined){return a[z]
}if(y&&y[z]!=undefined){return y[z]}return{avatar_alpha:"",avatar_big:"",avatar_body:"",avatar_mini:"",id:z,profile:"",uid:null}};this.updateThread=function(D,I,E){if(E==undefined){E=false}var H=l.getThread(I.id);var G=false;for(var B=0;B<r.length;B++){if(D==r[B].id){r[B]=I;G=B;break}}if(G===false){return null}var A=null;if(E&&r.length>0){A=i.threadsList.find("[data-id='"+I.id+"']");if(A){var z=l.getPresenceUserStatus(I.user_other);if(z=="online"){A.addClass("is-online").removeClass("is-dnd")}else{if(z=="dnd"){A.addClass("is-dnd").removeClass("is-online")}else{A.removeClass("is-dnd").removeClass("is-online")}}}}if(A&&E&&r.length>0&&(H.last_message_date!=I.last_message_date||H.last_message_content!=I.last_message_content||H.last_message_livedate!=I.last_message_livedate||H.unread_messages!=I.unread_messages)){var F=$.trim(l._generateThreadHtml(I));var C=$.trim(A.get(0).outerHTML);if(C!=F){A.replaceWith($(F))}}if(l._currentThread==I.id){if(G!==false&&I.unread_messages>0&&H&&I.unread_messages>H.unread_messages){l._refreshMessages()}l._generateNewMessagesPlaceholder(l._currentThreadData.lastReadTimestamp);setTimeout(function(){l._currentThreadData.lastReadTimestamp=I.last_read},1000)}setTimeout(function(){l._generateThreadList(false)},1500);return G};this.getThread=function(z){for(var A=0;A<r.length;A++){if(z==r[A].id){return r[A]}}return null};this.getCurrentThread=function(){return l.getThread(l._currentThread)};this._generateThreadList=function(C){if(C==undefined){C=false}if(C){i.threadsList.html("")}if(!r||r.length<=0){var B;if(!l._currentSearch){B=i.threadsTemplateNoFriends.html()}else{B=i.threadsTemplateNoThreads.html()}i.threadsList.html(B)}else{r=r.sort(function(G,F){if(G.last_message_date<F.last_message_date||G.last_message_date===null){return 1}if(G.last_message_date>F.last_message_date||F.last_message_date===null){return -1}return 0});var D=[];i.threadsList=i.baseContainer.find(d.threadsList);for(var A=0;A<r.length;A++){var z=r[A];var E=i.threadsList.find("[data-thread-id="+z.thread_id+"]");
if(E.length>0){l._refreshThreadHtml(E,z)}else{D.push($(l._generateThreadHtml(r[A])))}}for(var A=0;A<D.length;A++){i.threadsList.append(D[A])}i.threadsList.find(".thread").sort(function(G,F){if(!G.dataset.hasOwnProperty("lastMessageDate")){if(!F.dataset.hasOwnProperty("lastMessageDate")){return 0}return 1}if(!F.dataset.hasOwnProperty("lastMessageDate")){return -1}if(G.dataset.lastMessageDate<F.dataset.lastMessageDate){return 1}if(G.dataset.lastMessageDate>F.dataset.lastMessageDate){return -1}return 0}).appendTo(i.threadsList)}if(l._currentSearch.length>0){i.threadsSearch.find(".go-back").show().addClass("visible")}else{i.threadsSearch.find(".go-back").hide().removeClass("visible")}};this._refreshThreadHtml=function(A,z){var E=l.getUserData(z.user_owner);var D=l.getUserData(z.user_other);if(z.unread_messages>0){A.addClass("thread-unread-messages").removeClass("thread-all-read")}if(z.unread_messages===0){A.addClass("thread-all-read").removeClass("thread-unread-messages")}if(z.unread_messages>=10){z.unread_messages="+9"}if(z.last_message_from==MP.user.id){z.last_message_content_display="<strong>"+MP.i18n.xlat.msg("You")+":</strong> "+z.last_message_content}else{z.last_message_content_display=z.last_message_content}A.attr("data-last-message-date",z.last_message_date);for(var B in z){try{A.find("[data-field='thread."+B+"']").html(z[B]==null?"":z[B])}catch(C){}}for(var B in E){try{A.find("[data-field='user_owner."+B+"']").html(E[B]==null?"":E[B])}catch(C){}}for(var B in D){try{A.find("[data-field='user_other."+B+"']").html(D[B]==null?"":D[B])}catch(C){}}};this._generateThreadHtml=function(z){var C;if(z.is_new){C=i.threadsTemplateNewHtml}else{C=i.threadsTemplateOpenHtml}var F=l.getUserData(z.user_owner);var E=l.getUserData(z.user_other);z.css="";if(z.unread_messages>0){z.css+=" thread-unread-messages"}if(z.unread_messages===0){z.css+=" thread-all-read"}if(z.unread_messages>=10){z.unread_messages="+9"}if(z.id===l._currentThread){z.css+=" thread-active"}var A=l.getPresenceUserStatus(z.user_other);
if(A=="online"){z.css+=" is-online"}if(A=="dnd"){z.css+=" is-dnd"}if(z.last_message_from==MP.user.id){z.last_message_content_display="<strong>"+MP.i18n.xlat.msg("You")+":</strong> "+z.last_message_content}else{z.last_message_content_display=z.last_message_content}for(var B in z){try{C=C.split("$thread."+B+"$").join(z[B]==null?"":z[B])}catch(D){}}for(var B in F){try{C=C.split("$user_owner."+B+"$").join(F[B]==null?"":F[B])}catch(D){}}for(var B in E){try{C=C.split("$user_other."+B+"$").join(E[B]==null?"":E[B])}catch(D){}}return C};this.updateConversationHeader=function(){if(i.conversationHeader){i.conversationHeader.remove();i.conversationHeader=null}if(l.getCurrentThread()){i.conversationHeader=$($.trim(l._generateConversationHeaderHtml()));i.conversationHeader.addClass("user-"+l.getPresenceUserStatus(l._currentThreadData.user_other));i.messagesPanel.append(i.conversationHeader)}};this.setThread=function(B){var z=false;var A=l.getThread(B);if(l._currentThread!==B&&A){clearTimeout(l._currentThreadData.updateJobTimeout);l._fromTimestamp=null;l._toTimestamp=null;l._currentThread=B;z=true;l._currentThreadData.loadCounter=0;l._currentThreadData.refreshCounter=0;l._currentThreadData.oldestTimestamp=null;l._currentThreadData.lowestTimestamp=null;l._currentThreadData.newestTimestamp=null;o=0;i.$loadMessagesPlaceholder=null;t={};if(A){if(x){return false}l._currentThreadData.newestTimestamp=A.last_message_date+1;l._currentThreadData.lastReadTimestamp=A.last_read;l._currentThreadData.isNew=A.is_new;l._currentThreadData.user_other=A.user_other;i.messagesPost.addClass("disabled")}else{l._currentThreadData.lastReadTimestamp=null;l._currentThreadData.isNew=false}l.updateConversationHeader()}i.threadsList.find(".thread-active").removeClass("thread-active");i.threadsList.find("[data-id='"+B+"']").addClass("thread-active");if(z){l.loadMessages(z);l.scheduleRefreshMessages()}if(l._currentThread){i.messagesPanel.addClass("thread-selected").removeClass("thread-unselected")}else{i.messagesPanel.addClass("thread-unselected").removeClass("thread-selected")
}return z};this.scheduleRefreshMessages=function(){if(l._currentThreadData.updateJobTimeout){clearTimeout(l._currentThreadData.updateJobTimeout)}l._currentThreadData.updateJobTimeout=setTimeout(l._refreshMessages,g)};this._refreshMessages=function(){if(!l._ready||!i.messagesPanel){return}if(!l._currentThread||l._currentThreadData.refreshCounter>1000){return}if(j){j.abort()}l._currentThreadData.refreshCounter++;var z=l._currentThreadData.lastReadTimestamp;j=$.ajax({url:l._urlAjax+"messages?thread="+l._currentThread+"&desc=false&count="+l._currentThreadData.refreshCounter+"&new="+(l._currentThreadData.isNew?"true":"false")+"&user_other="+l._currentThreadData.user_other+"&oldestTimestamp="+(l._currentThreadData.newestTimestamp+1)+"&newestTimestamp=&lastReadTimestamp="+l._currentThreadData.lastReadTimestamp+"&limit="+l._itemsPerPage,success:function(A){if(A.data.hasOwnProperty("messages")&&A.data.messages instanceof Array&&A.data.messages.length>0){l._addMessages(A.data.messages,false,z)}if(A.data.hasOwnProperty("thread")&&A.data.thread.hasOwnProperty("id")){l.updateThread(A.data.thread.id,A.data.thread,true);l.setThread(l._currentThread)}l.updateConversationHeader()},error:function(A){},complete:function(){j=null}});l.scheduleRefreshMessages()};this.loadMessages=function(z,D,A,B){if(D==undefined){D=function(){}}if(z==undefined){z=null}if(!l._ready||!i.messagesPanel){return}if(!l._currentThread){return}if(A===undefined){A=l._currentThreadData.oldestTimestamp}if(B===undefined){B=l._currentThreadData.newestTimestamp}if(A==null){A=(new Date().getTime())-p}if(B!=null){B=parseInt(B)}A=parseInt(A);if(l._currentThreadData.oldestTimestamp===null){l._currentThreadData.oldestTimestamp=A}if(z){t={};l._currentThreadData.loadCounter=0;l._currentThreadData.refreshCounter=0;i.messagesList.html("");if(l._currentThreadData.isNew){}}if(q){q.abort()}var C=l._currentThreadData.lastReadTimestamp;var E=i.messagesPost.find("input[name=message]");q=$.ajax({url:l._urlAjax+"messages?thread="+l._currentThread+"&count="+l._currentThreadData.loadCounter+"&new="+(l._currentThreadData.isNew?"true":"false")+"&user_other="+l._currentThreadData.user_other+"&desc=true&oldestTimestamp="+A+"&newestTimestamp="+(B-1)+"&lastReadTimestamp="+l._currentThreadData.lastReadTimestamp+"&limit="+l._itemsPerPage,success:function(G){var H=false;
if(G.data.hasOwnProperty("messages")&&G.data.messages instanceof Array){if(G.data.messages.length>0){H=true}l._addMessages(G.data.messages,true,C)}D(true);if(z){i.messagesPost.removeClass("disabled");i.messagesPost.find("input[name=message]").focus()}if(G.data.hasOwnProperty("thread")&&G.data.thread.hasOwnProperty("id")){l.updateThread(G.data.thread.id,G.data.thread,true);l.setThread(l._currentThread)}if(l._currentThreadData.loadCounter==0){if(c==3){if(G.data.hasOwnProperty("isFriend")&&!G.data.isFriend){E.attr("placeholder",E.attr("data-placeholder-notfriends")).addClass("disabled");if(i.conversationHeader){i.conversationHeader.addClass("user-notfriends").removeClass("user-null")}}else{E.attr("placeholder",E.attr("data-placeholder")).removeClass("disabled");if(i.conversationHeader){i.conversationHeader.removeClass("user-notfriends")}}}else{E.addClass("disabled")}var F=l.getCurrentThread();if(F!=null&&F.is_new&&!H){var I=i.messagesTemplateNoMessages.html();i.messagesList.append(I)}if(i.$newMessagesPlaceholder){i.messagesList.scrollTop(i.$newMessagesPlaceholder.position().top)}else{i.messagesList.scrollTop(i.messagesList.prop("scrollHeight"))}}l._currentThreadData.loadCounter++},error:function(F){if(l._currentThreadData.loadCounter===0){var G=i.messagesTemplateNoMessages.html();i.messagesList.append(G)}else{l.App.notifications.notify({text:"Unable to load messages :( "+l._currentThread,type:"error",stayTime:3000})}D(false)},complete:function(){q=null}})};this._addMessage=function(A,z){return l._addMessages([A],z)};this._addMessages=function(z,H,K,G){if(G==undefined){G=false}if(!(z instanceof Array)){return}var B=false;var A=0;var J=false;var I=0;var F=l.getCurrentThread();for(var E=0;E<z.length;E++){var C=z[E];if(t.hasOwnProperty("$object")){C.$object=null}var D=l._generateMessageHtml(C);if(t.hasOwnProperty(C.id)&&t[C.id].$object){C.$object=$($.trim(D));t[C.id].$object.replaceWith(C.$object)}else{if(H){C.$object=$($.trim(D));i.messagesList.prepend(C.$object);if(((C.msg_date-p)<l._currentThreadData.oldestTimestamp)||l._currentThreadData.oldestTimestamp===null){l._currentThreadData.oldestTimestamp=(C.msg_date-p)
}if(l._currentThreadData.lowestTimestamp===null||C.msg_date<l._currentThreadData.lowestTimestamp){l._currentThreadData.lowestTimestamp=C.msg_date}A++;if(!J){J=C.$object}}else{C.$object=i.messagesList.append(D).children(":first-child");B=true;if(C.msg_date>l._currentThreadData.newestTimestamp&&!G){l._currentThreadData.newestTimestamp=C.msg_date}I++}}t[C.id]=C}if(!H&&I>0){l._generateNewMessagesPlaceholder(K)}if(H&&F!=null&&!F.is_new){if(A==0){l._currentThreadData.lowestTimestamp=l._currentThreadData.oldestTimestamp;l._currentThreadData.oldestTimestamp=l._currentThreadData.oldestTimestamp-p}l._generateLoadMessagesPlaceholder(J);if(A==0&&i.$loadMessagesPlaceholder&&o<10){o++;i.$loadMessagesPlaceholder.find("a").trigger("click")}else{o=0}J=null}if(B){i.messagesList.scrollTop(i.messagesList.prop("scrollHeight"))}};this._generateLoadMessagesPlaceholder=function(A){if(A==undefined){A=false}if(i.$loadMessagesPlaceholder){i.$loadMessagesPlaceholder.remove();i.$loadMessagesPlaceholder=null}var z=l.getCurrentThread();if(z&&l._currentThreadData.lowestTimestamp>z.date_created){i.$loadMessagesPlaceholder=$($.trim(i.messagesTemplateLoadMessages.html().split("$timestamp$").join(l._currentThreadData.lowestTimestamp)));i.messagesList.prepend(i.$loadMessagesPlaceholder);i.$loadMessagesPlaceholder.on("click","a",function(C){C.preventDefault();if(!i.$loadMessagesPlaceholder.hasClass("disabled")){i.$loadMessagesPlaceholder.addClass("disabled");l.loadMessages(false,function(){},l._currentThreadData.oldestTimestamp,l._currentThreadData.lowestTimestamp)}return false})}if(A&&l._currentThreadData.loadCounter>0){A.addClass("prepended");var B=l._currentThread;setTimeout(function(){if(B==l._currentThread&&s&&A){A.removeClass("prepended")}},3000);i.messagesList.scrollTop(A.position().top-i.messagesList.height()+u)}};this._generateNewMessagesPlaceholder=function(z){if(i.$newMessagesPlaceholder){i.$newMessagesPlaceholder.remove();i.$newMessagesPlaceholder=null}if(z<l._currentThreadData.newestTimestamp&&l.getCurrentThread().unread_messages>0){var A=null;
i.messagesList.find(".message").each(function(B,D){var C=$(D);if((!A||C.attr("data-time")<A.attr("data-time"))&&C.attr("data-time")>l._currentThreadData.lastReadTimestamp){A=C}});if(A&&A.size()>0){i.$newMessagesPlaceholder=$($.trim(i.messagesTemplateNewMessages.html().split("$unread_messages$").join(l.getCurrentThread().unread_messages)));i.$newMessagesPlaceholder.insertBefore(A)}}};this._generateConversationHeaderHtml=function(){var C;C=i.messagesTemplateConversationHeader.html();var z=l.getCurrentThread();var A=l.getUserData(z.user_other);for(var B in A){try{C=C.split("$user_other."+B+"$").join(A[B]==null?"":A[B])}catch(D){}}return C};this._generateMessageHtml=function(D){var C;C=i.messagesTemplateMessageHtml;var A=l.getUserData(D.user);D.css="";if(D.user==MP.user.id){D.css+=" user-me"}else{D.css+=" user-other"}if(D.endpoints_html){D.css+=" with-endpoints"}else{D.css+=" no-endpoints"}if(D.msg_seconds_ago<300){D.css+=" recent-message"}if(D.msg_date>l._currentThreadData.lastReadTimestamp){D.css+=" unread"}D.msg_content_parsed=l._parseMessageContent(D);for(var B in D){try{C=C.split("$message."+B+"$").join(D[B]==null?"":D[B])}catch(E){}}for(var B in A){try{C=C.split("$user."+B+"$").join(A[B]==null?"":A[B])}catch(E){}}var z=l.getThread(D.user);for(var B in z){try{C=C.split("$thread."+B+"$").join(z[B]==null?"":z[B])}catch(E){}}return C};this._parseMessageContent=function(B){var A="";if(B.msg_content){A=B.msg_content;var z=B.msg_content.match(new RegExp(/(https?)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/));if(z){var C=z[0];if(C.substr(0,4)!="http"){C="http"+C}if(C.length>50){C=z[0].substr(0,47)+"..."}A=B.msg_content.split(z[0]).join('<a href="'+z[0]+'" rel="external" target="_blank" alt="Open in new window">'+C+"</a>")}}return A};this.readMessages=function(z){if(z==undefined){z=function(){}}if(!l._ready||!i.messagesPanel){return false}$.ajax({method:"GET",url:l._urlAjax+"read?thread="+l._currentThread+"&new="+(l._currentThreadData.isNew?"true":"false")+"&user_other="+l._currentThreadData.user_other+"&newestTimestamp="+l._currentThreadData.newestTimestamp+"&lastReadTimestamp="+l._currentThreadData.lastReadTimestamp,success:function(A){if(l.getCurrentThread().is_new){i.messagesList.find("li.no-messages").remove()
}if(A.data.hasOwnProperty("thread")&&A.data.thread.hasOwnProperty("id")){l._currentThreadData.newestTimestamp=A.data.thread.last_message_date;l._currentThreadData.lastReadTimestamp=A.data.thread.last_message_date;l.scheduleReloadThreads();var B=function(){l.updateThread(A.data.thread.id,A.data.thread,true);l.setThread(l._currentThread)};B()}},error:function(A){},complete:function(){x=null;i.messagesPost.removeClass("disabled");z();i.messagesPost.find("input[name=message]").focus()}})};this.sendMessage=function(A,B){if(A==undefined){A=""}if(B==undefined){B=function(){}}if(!l._ready||!i.messagesPanel){return false}if(x||i.messagesPost.hasClass("disabled")){return false}i.messagesPost.addClass("disabled");var z=l.getPresenceUserStatus(l._currentThreadData.user_other);x=$.ajax({method:"POST",url:l._urlAjax+"post?thread="+l._currentThread+"&new="+(l._currentThreadData.isNew?"true":"false")+"&user_other="+l._currentThreadData.user_other+"&otherIsOnline="+(z!=null?"true":"")+"&oldestTimestamp="+l._currentThreadData.oldestTimestamp+"&newestTimestamp="+l._currentThreadData.newestTimestamp+"&lastReadTimestamp="+l._currentThreadData.lastReadTimestamp,data:{message:A},success:function(C){if(l.getCurrentThread().is_new){i.messagesList.find("li.no-messages").remove()}if(C.data.hasOwnProperty("thread")&&C.data.thread.hasOwnProperty("id")){l._currentThreadData.lastReadTimestamp=C.data.thread.last_message_date;l.scheduleReloadThreads();var D=function(){l.updateThread(C.data.thread.id,C.data.thread,true);l.setThread(l._currentThread)};if(l._currentSearch!=""){l.clearSearch();l._currentSearch="";l.loadThreads(function(){D()})}else{D()}}if(C.data.hasOwnProperty("unreadThreads")){n=parseInt(C.data.unreadThreads);l.updateUnreadThreadsCounter()}i.messagesPost.find("input[name=message]").val("");if(C.data.hasOwnProperty("messages")&&C.data.messages instanceof Array){l._addMessages(C.data.messages,false,null,true)}},error:function(C){var D="";if(C instanceof Object&&C.hasOwnProperty("responseText")){var E=JSON.parse(C.responseText);
if(E instanceof Object&&E.hasOwnProperty("exception")&&E.exception.hasOwnProperty("message")){D="\n"+E.exception.message}}l.App.notifications.notify({text:MP.i18n.xlat.msg("Cannot send message!")+D,type:"error",stayTime:5000})},complete:function(){x=null;i.messagesPost.removeClass("disabled");B();i.messagesPost.find("input[name=message]").focus()}})};this.isOpen=function(){return s};this.onUserChannelMessageReceived=function(D){if(D&&D.hasOwnProperty("param_i1")){var C=D.param_i1;var B=D.hasOwnProperty("detail_payload")&&D.detail_payload&&D.detail_payload.hasOwnProperty("unread_threads")?D.detail_payload.unread_threads:0;var A=D.hasOwnProperty("detail_payload")&&D.detail_payload&&D.detail_payload.hasOwnProperty("thread")?D.detail_payload.thread:null;var z=l.getCurrentThread();if(l.isOpen()){if(A){l.updateThread(A.id,A,true)}}n=parseInt(B);l.updateUnreadThreadsCounter()}};this.onUserChannelNewFriendReceived=function(B){if(B&&B.hasOwnProperty("detail_payload")){var A=B.hasOwnProperty("detail_payload")&&B.detail_payload&&B.detail_payload.hasOwnProperty("thread")?B.detail_payload.thread:null;var z=l.getCurrentThread();B.onclick=function(C){C.stopPropagation();if(!l.isOpen()){l.triggerOpen()}l.scheduleReloadThreads();if(A){setTimeout(function(){l.App.userWidget.widgetMessages.triggerOpen("#"+B.param_i1)},200)}}}};this.updateUnreadThreadsCounter=function(){if(n>0){h=n;$(k).addClass("recent");$(k).find(".info-badge").show(0,function(){$(this).addClass("shown")});$(k).find(".unread-messages").attr("data-value",n).html(l.App.i18n.writeNumber(n));document.title="("+l.App.i18n.writeNumber(n)+") "+w}else{h=0;$(k).removeClass("recent");$(k).find(".info-badge").hide(0,function(){$(this).removeClass("shown")});$(k).find(".unread-messages").attr("data-value",0).html(l.App.i18n.writeNumber(0));document.title=w}};this.onStatsUpdated=function(){if(c!=2&&c!=3){return}var z=l.App.user;n=z.total_unread_threads;l.updateUnreadThreadsCounter()};this.init=function(){w=document.title;l.App.user.registerEventListener("statsUpdated",l.onStatsUpdated);
if(l.App.lib.getParameterByName("threadId")&&l.App.lib.getParameterByName("from")){l.App.registerEventListener("ready",function(){l.triggerOpen("#"+l.App.lib.getParameterByName("from"))})}};this.init()};function UserModal(App,delayMS){var self=this;var msg=App.i18n.xlat.msg;var msv=App.i18n.xlat.msv;var notifications=App.notifications;var modal=App.navigation.modals.modal;var FBlib=App.thirdParty.facebook;this.App=App;this._init=false;this._ready=false;this.debug=false;var lockClose=false;var defaultErrorMessage="Oops, your request could not be completed.";var userModalId="user-modal";var modalContentLoaded=false;var gameTitle="";var $userModal;var $triggerLogin,$triggerForgot,$triggerRegister,$triggerRegisterFacebook,$triggerAccessFacebook,$triggerRgAccess,$triggerRgDetails,$triggerRgConfirm,$triggerRgSubmit,$triggerRgReady;var $login,$forgot,$register;var $rgAccess,$rgDetails,$rgConfirm,$rgSocials,$rgSubmitting,$rgCompleted;var $wrapper;var actions;var readyTimeoutInstance;this.onPreOpen=function(ev){return true};this.onOpen=function(ev){MP.navigation.helpers.placeholder()};this.onPreClose=function(ev){if(lockClose){return false}return true};this.onClose=function(ev){self.actionDirector.leaveCurrentAction();self.unsetModalAside()};this.modalOpen=function(){if(!modalContentLoaded){return false}if(self.modalIsOpened()){return false}self.App.navigation.modals.modal.showByTarget($userModal);return true};this.modalClose=function(){if(!self.modalIsOpened()){return false}modal.close();return true};this.modalIsOpened=function(){if(modal.isOpened()&&modal.getTargetId()==$userModal.attr("id")){return true}return false};this.setModalAside=function(firstSlideshowItemIndexOverride){if($userModal.hasClass("modal-w-aside")){return false}$userModal.addClass("modal-w-aside");var $registerSlideshow=$userModal.find(".js-register-slideshow");if($registerSlideshow.length>0){if(firstSlideshowItemIndexOverride===undefined||isNaN(firstSlideshowItemIndexOverride)){firstSlideshowItemIndexOverride=$registerSlideshow.data("firstitem")}if(self.App.navigation.showcases.registerSlideshow===null){self.App.navigation.showcases.registerSlideshow=new self.App.navigation.showcases.SlideShowv2();self.App.navigation.showcases.registerSlideshow.setup($registerSlideshow,{controls:false,preload:false,speed:8000,fadeSpeed:100,keyboardcontrols:false,firstitem:firstSlideshowItemIndexOverride})
}else{self.App.navigation.showcases.registerSlideshow.showItemByIndex(firstSlideshowItemIndexOverride)}}};this.unsetModalAside=function(){if(!$userModal.hasClass("modal-w-aside")){return false}$userModal.removeClass("modal-w-aside");if($(".js-register-slideshow").length<1){return}if(self.App.navigation.showcases.hasOwnProperty("registerSlideshow")&&self.App.navigation.showcases.registerSlideshow!==null){self.App.navigation.showcases.registerSlideshow.clearTimeouts()}};this.attachLoginEvents=function($target){if($target===undefined){$target=$(document)}$target.on("click",".js-login",function(e){var $this=$(this);self.ready(function(){self.Login(e,$this)})});$target.on("click",".js-register",function(e){e.stopPropagation();var $this=$(this);self.ready(function(){self.Register(e,$this)})});$target.on("click",".js-register-facebook",function(e){var $this=$(this);self.ready(function(){self.RegisterFacebook(e,$this)})});$target.on("click",".js-access-facebook",function(e){var $this=$(this);self.ready(function(){self.AccessFacebook(e,$this)})})};this.loadUserModalContent=function(callback){var urlAjaxHtml=self.App.url.ajaxhtml+"user/modal";urlAjaxHtml+="?page="+self.App.pageType;if(self.App.pageType==="game"&&self.App.game){urlAjaxHtml+="&pageId="+self.App.pageTypeId;if(self.App.game.with_achievements){urlAjaxHtml+="&with-achievements=1"}if(self.App.game.with_highscores){urlAjaxHtml+="&with-highscores=1"}}modalContentLoaded=false;$.ajax({url:urlAjaxHtml,type:"GET",success:function(response){modalContentLoaded=true;$userModal.html(response);$(document).ready(function(){if(self.App.pageType==="game"){gameTitle=$("#game h1[itemprop=name]").text();$userModal.find(".js-game-name").html(gameTitle)}});$triggerForgot=$userModal.find(".js-forgot");$triggerRgAccess=$userModal.find(".js-rg-access");$triggerRgDetails=$userModal.find(".js-rg-details");$triggerRgConfirm=$userModal.find(".js-rg-confirm");$triggerRgSubmit=$userModal.find(".js-rg-submit");$triggerRgReady=$userModal.find(".js-rg-ready");
$login=$userModal.find(".form-login");$forgot=$userModal.find(".form-forgot");$register=$userModal.find(".form-register");$rgAccess=$userModal.find(".state-access");$rgDetails=$userModal.find(".state-details");$rgConfirm=$userModal.find(".state-confirm");$rgSubmitting=$userModal.find(".state-submitting");$rgCompleted=$userModal.find(".state-completed");$rgSocials=$userModal.find(".user-social");$wrapper=$userModal.find(".user-modal-forms");self.attachLoginEvents($userModal);if(typeof callback=="function"){callback()}},error:function(response){}})};this.autoLaunchUserModalContent=function(){var params=(function(param){if(param==""){return{}}var paramList={};for(var i=0;i<param.length;++i){var value=param[i].split("=");if(value.length!=2){continue}paramList[value[0]]=decodeURIComponent(value[1].replace(/\+/g," "))}return paramList})(window.location.search.substr(1).split("&"));if(params.register=="1"){var $trigger=$(".js-register");if($trigger.length!=0){$trigger.get(0).click()}}else{if(params.login=="1"){var $trigger=$(".js-login");if($trigger.length!=0){$trigger.get(0).click()}}else{if(params.recover=="1"){var $trigger=$(".js-login");if($trigger.length!=0){$trigger.get(0).click();$(".js-forgot").get(0).click()}}}}};self.executeForAction=function(actionName,methodName,params,callback){if(!methodName||methodName==undefined){return}var executeFunction=function(actionName,methodName,params,callback){var action=actions[actionName];if(params&&typeof params=="object"){action[methodName].apply(null,params)}else{action[methodName]()}if(callback&&typeof callback=="function"){callback()}};if(!self._ready){self.ready(function(){executeFunction(actionName,methodName,params,callback)})}else{executeFunction(actionName,methodName,params,callback)}};self.setActionData=function(actionName,dataKey,dataValue){var action=actions[actionName];if(!action||action===undefined||action.setData===undefined){return false}action.setData(dataKey,dataValue)};this.actionDirector=(new self.App.lib.ActionDirector()).enableDebug();
actions={};actions.login=(new self.App.lib.Action("login",{defaultState:"login"})).setDirector(self.actionDirector).setOnEnter(function(action){var actionData=action.getData();currentAction=action;$login.show();$rgSocials.show();$wrapper.addClass("login");var firstItemOverride=null;if(actionData.hasOwnProperty("trigger")){var $trigger=actionData.trigger;firstItemOverride=$trigger.data("firstitem")}self.setModalAside(firstItemOverride);self.modalOpen();setTimeout(function(){$login.find("#login-uid").focus()},300)}).setOnLeave(function(action){$login.hide();$rgSocials.hide();$wrapper.removeClass("login")}).addState((new self.App.lib.ActionState("login")).setOnEnter(function(actionState){var $submitBtn=$login.find(".js-submit");$submitBtn.find(".btn-text").removeClass("hide");$submitBtn.find(".btn-text-wait").addClass("hide");$submitBtn.find(".btn-text-ok").addClass("hide");$submitBtn.removeClass("disabled");if(actionState.enterCount()==1){$submitBtn.click(function(e){e.preventDefault();e.stopPropagation();if($submitBtn.hasClass("disabled")){return false}actionState.runHandlerIfActive("submit")});$triggerForgot.click(function(e){e.preventDefault();e.stopPropagation();self.executeForAction("forgot","enter")})}}).addHandler("submit",function(actionState){actionState.getAction().getState("submitting").enter()})).addState((new self.App.lib.ActionState("submitting")).setOnEnter(function(actionState){var $submitBtn=$login.find(".js-submit");$submitBtn.addClass("disabled");$submitBtn.find(".btn-text").addClass("hide");$submitBtn.find(".btn-text-wait").removeClass("hide");$wrapper.addClass("submitting");self.App.navigation.hint.removeAll($login);$.ajax({url:self.App.url.ajax+"user/login",type:"POST",data:{uid:$login.find("#login-uid").val(),passwd:$login.find("#login-pwd").val(),remember:$login.find("#login-remember").is(":checked"),mp_zendesk_sso:!!window.location.search.substring(1).search("/mp_zendesk_sso=1/")},success:function(response){if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true&&response.data.hasOwnProperty("redirect")){$submitBtn.find(".btn-text").addClass("hide");
$submitBtn.find(".btn-text-wait").addClass("hide");$submitBtn.find(".btn-text-ok").removeClass("hide");setTimeout(function(){document.location.href=response.data.redirect},500)}else{actionState.getAction().getState("login").enter();self.notifyError(msg(defaultErrorMessage))}},error:function(response){var responseData=null;actionState.getAction().getState("login").enter();if(response.responseText!=null&&response.responseText!=""){eval("responseData="+response.responseText);switch(responseData.exception.type){case"ERROR_USER_BANNED":document.location.href=self.App.url.root+"error/banned?user="+$login.find("#login-uid").val();break;case"ERROR_USER_PASSWORD":self.App.navigation.hint.add($submitBtn,responseData.exception.message,{"class":"error",stay:false,stayTime:4000,width:"190px"});break;default:self.notifyError(msg(defaultErrorMessage))}}else{self.notifyError(msg(defaultErrorMessage))}}})}).setOnLeave(function(actionState){$wrapper.removeClass("submitting")}));actions.forgot=(new self.App.lib.Action("forgot",{defaultState:"forgot"})).setDirector(self.actionDirector).setOnEnter(function(action){currentAction=action;$forgot.find(".forgot-form").show();$forgot.find(".forgot-success").hide();$forgot.show();$forgot.find(".tooltip-hint").remove();$forgot.find("input#mail").val("");$wrapper.addClass("forgot");self.modalOpen();$("#forgotPasswordBackButton").removeAttr("disabled").removeClass("disabled");$("#forgotPasswordSubmitButton").removeAttr("disabled").removeClass("disabled");self.unsetModalAside()}).setOnLeave(function(action){$forgot.hide();$wrapper.removeClass("forgot")}).addState((new self.App.lib.ActionState("forgot")).setOnEnter(function(actionState){if(actionState.enterCount()===1){$forgot.find("form").on("submit",function(e){e.preventDefault();e.stopPropagation();actionState.getAction().getState("submitting").enter()})}})).addState((new self.App.lib.ActionState("submitting")).setOnEnter(function(actionState){$wrapper.addClass("submitting");var $submitButton=$forgot.find("form").find("[type=submit]");
var $email=$("#mail");var email=$email.val();if(!email.match(/^[A-Z0-9._%\-\+]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i)){self.App.navigation.hint.add($email,(email.length<1)?msg("Email required"):msg("Invalid email"),{"class":"error",width:"110px"});actionState.getAction().getState("forgot").enter()}else{$("#forgotPasswordBackButton").attr("disabled","disabled").addClass("disabled");$("#forgotPasswordSubmitButton").attr("disabled","disabled").addClass("disabled");$.ajax({url:self.App.url.ajax+"user/request-reset-password",type:"POST",data:$forgot.find("form").serialize(),success:function(response){if(response instanceof Object&&response.hasOwnProperty("data")&&response.data.success==true){$forgot.find(".forgot-form").hide();$forgot.find(".forgot-success").fadeIn(200)}else{if(response instanceof Object&&response.hasOwnProperty("data")&&response.data.hasOwnProperty("rateLimitExceeded")&&response.data.rateLimitExceeded===true){self.App.navigation.hint.add($email,msg("You've made too many attempts. Try again in an hour"),{"class":"error",width:"200px"})}else{if(response instanceof Object&&response.hasOwnProperty("data")&&response.data.hasOwnProperty("userCouldNotBeLoaded")&&response.data.userCouldNotBeLoaded===true){self.App.navigation.hint.add($email,msg("User could not be loaded with provided email. Are you registered?"),{"class":"error",width:"200px"})}else{self.App.navigation.hint.add($email,msg("Could not reset password for the specified email"),{"class":"error",width:"200px"})}}actionState.getAction().getState("forgot").enter()}},error:function(){self.App.navigation.hint.add($email,msg("Could not reset password for the specified email"),{"class":"error",width:"200px"});actionState.getAction().getState("forgot").enter()}})}}).setOnLeave(function(actionState){$wrapper.removeClass("submitting")}));actions.register=(new self.App.lib.Action("register",{defaultState:"access"})).setDirector(self.actionDirector).setOnEnter(function(action){var actionData=action.getData();currentAction=action;
$register.show();var firstItemOverride=null;if(actionData.hasOwnProperty("trigger")){var $trigger=actionData.trigger;firstItemOverride=$trigger.data("firstitem")}self.setModalAside(firstItemOverride);$wrapper.addClass("register");self.modalOpen();if(action.enterCount()==1){$triggerRgAccess.click(function(e){e.preventDefault();e.stopPropagation();action.getState("access").enter()});$triggerRgDetails.click(function(e){e.preventDefault();e.stopPropagation();if(action.getState("access").isActive()){return action.getState("access").runHandler("nextStep")}action.getState("details").enter()});$triggerRgConfirm.click(function(e){e.preventDefault();e.stopPropagation();if(action.getState("details").isActive()){return action.getState("details").runHandler("nextStep")}});$triggerRgSubmit.click(function(e){e.preventDefault();e.stopPropagation();if(action.getState("confirm").isActive()){return action.getState("confirm").runHandler("nextStep")}});var $form=$userModal.find(".form-register form");action.setData("$form",$form);$form.submit(function(e){e.preventDefault();e.stopPropagation();action.runHandlerIfActive("submit")})}}).setOnLeave(function(action){$register.hide();$wrapper.removeClass("register")}).addHandler("submit",function(action){if(action.getState("access").isActive()){action.getState("access").runHandler("nextStep")}else{if(action.getState("details").isActive()){action.getState("details").runHandler("nextStep")}else{if(action.getState("confirm").isActive()){action.getState("confirm").runHandler("nextStep")}}}}).addHandler("thirdparty",function(action,options){self.modalOpen();$register.show();var $form=$userModal.find(".form-register form");if(typeof options!="object"||!options.hasOwnProperty("type")||!options.hasOwnProperty("id")){action.setData("registration-type","direct");$form.find("input[name=thirdparty-type]").val("");$form.find("input[name=thirdparty-id]").val("");$form.find("input[name=thirdparty-token]").val("");return}action.setData("registration-type","thirdparty");
$form.find("input[name=thirdparty-type]").val(options.type);$form.find("input[name=thirdparty-id]").val(options.id);$form.find("input[name=thirdparty-token]").val(options.token);if(options.hasOwnProperty("username")&&options.username){$form.find("input[name=uid-thirdparty]").val(options.username).blur();action.setData("uid-thirdparty",options.username)}action.getState("details").enter()}).addState((new self.App.lib.ActionState("access")).setOnEnter(function(actionState){$rgAccess.show();$rgSocials.show();$wrapper.addClass("register-access");if(actionState.getAction().getOption("hideFB")){$rgAccess.find(".js-register-thirdparty").hide()}else{$rgAccess.find(".js-register-thirdparty").show()}if(actionState.enterCount()==1){var $form=actionState.getAction().getData("$form");actionState.setData("$reg-uid",$form.find("#reg-uid").keyup(function(ev){actionState.runHandler("delayedValidateUidSync")}));actionState.getData("$reg-uid").blur(function(ev){actionState.runHandler("validateUid")});actionState.setData("$reg-email",$form.find("#reg-email").keyup(function(ev){actionState.runHandler("delayedValidateEmailSync")}));actionState.getData("$reg-email").blur(function(ev){actionState.runHandler("validateEmail")});actionState.setData("$reg-pwd",$form.find("#reg-pwd").keyup(function(ev){actionState.runHandler("delayedValidatePasswdSync")}));actionState.setData("$reg-uid-status",$form.find("#reg-uid").siblings(".status"));actionState.setData("$reg-email-status",$form.find("#reg-email").siblings(".status"));actionState.setData("$reg-pwd-status",$form.find("#reg-pwd").siblings(".status"))}self.App.trackAnalyticsEvent(["_trackEvent","Registration","Access"])}).setOnLeave(function(actionState){$rgAccess.hide();$rgSocials.hide();$wrapper.removeClass("register-access")}).addHandler("delayedValidateUidSync",function(actionState){if(actionState.getData("delayedValidateUidSyncTimeout")){clearTimeout()}actionState.setData("delayedValidateUidSyncTimeout",setTimeout(function(){actionState.runHandler("validateUidSync")
}),250)}).addHandler("validateUidSync",function(actionState,instant){var value=actionState.getData("$reg-uid").val();var delay=500;if(typeof instant!=="undefined"&&instant){delay=0}clearTimeout(actionState.getData("uid-timeout"));actionState.getData("$reg-uid-status").removeClass("st-ok st-ko");if(value.length<1){self.App.navigation.hint.add(actionState.getData("$reg-uid"),msg("Username required"),{"class":"error",width:"140px"});actionState.getData("$reg-uid-status").addClass("st-ko");return false}else{if(value.length<4){self.App.navigation.hint.remove(actionState.getData("$reg-uid"));actionState.setData("uid-timeout",setTimeout(function(){self.App.navigation.hint.add(actionState.getData("$reg-uid"),msg("Username too short!"),{"class":"error",width:"140px"});actionState.getData("$reg-uid-status").addClass("st-ko")},delay));return false}else{if(value.length>22){self.App.navigation.hint.add(actionState.getData("$reg-uid"),msg("Username too large!"),{"class":"error",width:"140px"});actionState.getData("$reg-uid").val(value.substring(0,25));actionState.getData("$reg-uid-status").addClass("st-ko");return false}else{if(!value.match(/^[0-9a-z\_\-\.]*$/i)){self.App.navigation.hint.add(actionState.getData("$reg-uid"),msg("Only alphanumeric chars!"),{"class":"error",width:"140px"});actionState.getData("$reg-uid-status").addClass("st-ko");return false}else{self.App.navigation.hint.remove(actionState.getData("$reg-uid"));actionState.getData("$reg-uid-status").addClass("st-ok");return true}}}}}).addHandler("delayedValidateEmailSync",function(actionState){if(actionState.getData("delayedValidateEmailSyncTimeout")){clearTimeout()}actionState.setData("delayedValidateEmailSyncTimeout",setTimeout(function(){actionState.runHandler("validateEmailSync")}),250)}).addHandler("validateEmailSync",function(actionState,instant){var value=actionState.getData("$reg-email").val();var delay=500;if(typeof instant!=="undefined"&&instant){delay=0}clearTimeout(actionState.getData("email-timeout"));actionState.getData("$reg-email-status").removeClass("st-ok st-ko");
if(value.length<1){self.App.navigation.hint.add(actionState.getData("$reg-email"),msg("Email required"),{"class":"error",width:"140px"});actionState.getData("$reg-email-status").addClass("st-ko");return false}else{if(value.length>50){self.App.navigation.hint.add(actionState.getData("$reg-email"),msg("Email too large!"),{"class":"error",width:"140px"});actionState.getData("$reg-pwd").val(value.substring(0,55));actionState.getData("$reg-email-status").addClass("st-ko");return false}else{if(!value.match(/^[A-Z0-9._%\-\+]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i)){self.App.navigation.hint.remove(actionState.getData("$reg-email"));actionState.setData("email-timeout",setTimeout(function(){self.App.navigation.hint.add(actionState.getData("$reg-email"),msg("Invalid email"),{"class":"error",width:"140px"});actionState.getData("$reg-email-status").addClass("st-ko")},delay));return false}else{self.App.navigation.hint.remove(actionState.getData("$reg-email"));actionState.getData("$reg-email-status").addClass("st-ok");return true}}}}).addHandler("delayedValidatePasswdSync",function(actionState){if(actionState.getData("delayedValidatePasswdSyncTimeout")){clearTimeout()}actionState.setData("delayedValidatePasswdSyncTimeout",setTimeout(function(){actionState.runHandler("validatePasswdSync")}),250)}).addHandler("validatePasswdSync",function(actionState,instant){var value=actionState.getData("$reg-pwd").val();var delay=500;if(typeof instant!=="undefined"&&instant){delay=0}clearTimeout(actionState.getData("pwd-timeout"));actionState.getData("$reg-pwd-status").removeClass("st-ok st-ko");if(value.length<1){self.App.navigation.hint.add(actionState.getData("$reg-pwd"),msg("Password required"),{"class":"error",width:"140px"});actionState.getData("$reg-pwd-status").addClass("st-ko");return false}else{if(value.length<6){self.App.navigation.hint.remove(actionState.getData("$reg-pwd"));actionState.setData("pwd-timeout",setTimeout(function(){self.App.navigation.hint.add(actionState.getData("$reg-pwd"),msg("Password too short!"),{"class":"error",width:"140px"});
actionState.getData("$reg-pwd-status").addClass("st-ko")},delay));return false}else{if(value.length>22){self.App.navigation.hint.add(actionState.getData("$reg-pwd"),msg("Password too large!"),{"class":"error",width:"140px"});actionState.getData("$reg-pwd").val(value.substring(0,25));actionState.getData("$reg-pwd-status").addClass("st-ko");return false}else{if(value==actionState.getData("$reg-uid").val()){self.App.navigation.hint.add(actionState.getData("$reg-pwd"),msg("Same as username!"),{"class":"error",width:"140px"});actionState.getData("$reg-pwd").val(value.substring(0,25));actionState.getData("$reg-pwd-status").addClass("st-ko");return false}else{actionState.setData("pwd-timeout",setTimeout(function(){actionState.getData("$reg-pwd-status").addClass("st-ok");self.App.navigation.hint.remove(actionState.getData("$reg-pwd"));if(value.length>=10&&value.match("[a-z]")&&value.match("[A-Z]")&&value.match("[^a-zA-Z]")){self.App.navigation.hint.add(actionState.getData("$reg-pwd"),msg("Great password :)"),{"class":"success",width:"140px"})}else{if(value.length>=8&&value.match("[a-zA-Z]")&&value.match("[^a-zA-Z]")){self.App.navigation.hint.add(actionState.getData("$reg-pwd"),msg("Good enough :)"),{"class":"",width:"140px"})}else{if(value.length>=8&&value.match("[a-zA-Z]")){self.App.navigation.hint.add(actionState.getData("$reg-pwd"),msg("Better add some numbers"),{"class":"",width:"140px"})}else{self.App.navigation.hint.add(actionState.getData("$reg-pwd"),msg("Low security password! :("),{"class":"",width:"140px"})}}}},delay));return true}}}}}).addHandler("validateUid",function(actionState,instant){if(typeof instant=="undefined"){instant=false}var future=new self.App.lib.Future();var value=actionState.getData("$reg-uid").val();value=value.toLowerCase();actionState.getData("$reg-uid").val(value);if(!actionState.runHandler("validateUidSync",instant)){future.error("Invalid uid");return future}actionState.getData("$reg-uid-status").removeClass("st-ok st-ko");$.ajax({url:self.App.url.ajax+"user/field-validation/uid",type:"POST",data:{uid:encodeURI(value)},success:function(response){self.App.navigation.hint.remove(actionState.getData("$reg-uid"));
actionState.getData("$reg-uid-status").removeClass("st-ok st-ko");if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true){if(response.data.exists==false){actionState.getData("$reg-uid-status").addClass("st-ok");future.success()}else{self.App.navigation.hint.add(actionState.getData("$reg-uid"),msg("Already taken, choose another"),{"class":"error",width:"170px"});actionState.getData("$reg-uid-status").addClass("st-ko");future.error("UID already taken")}}else{self.App.navigation.hint.add(actionState.getData("$reg-uid"),msg("Unable to check field"),{"class":"error",width:"140px"});actionState.getData("$reg-uid-status").addClass("st-ko");future.error("Unexpected response")}},error:function(response){if(response.responseText!=null&&response.responseText!=""){eval("responseData="+response.responseText);self.App.navigation.hint.add(actionState.getData("$reg-uid"),responseData.exception.message,{"class":"error",width:"170px"});actionState.getData("$reg-uid-status").addClass("st-ko");future.error(responseData.exception.message)}else{self.App.navigation.hint.add(actionState.getData("$reg-uid"),msg("Unable to check field"),{"class":"error",width:"140px"});actionState.getData("$reg-uid-status").addClass("st-ko");future.error("Unexpected response")}}});return future}).addHandler("validateEmail",function(actionState,instant){if(typeof instant=="undefined"){instant=false}var future=new self.App.lib.Future();var value=actionState.getData("$reg-email").val();value=value.toLowerCase();actionState.getData("$reg-email").val(value);if(!actionState.runHandler("validateEmailSync",instant)){future.error("Invalid email");return future}actionState.getData("$reg-email-status").removeClass("st-ok st-ko");$.ajax({url:self.App.url.ajax+"user/field-validation/email",type:"POST",data:{email:encodeURI(value)},success:function(response){self.App.navigation.hint.remove(actionState.getData("$reg-email"));actionState.getData("$reg-email-status").removeClass("st-ok st-ko");
if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success===true){if(response.data.exists==false){actionState.getData("$reg-email-status").addClass("st-ok");future.success()}else{self.App.navigation.hint.add(actionState.getData("$reg-email"),msg("Already exists, choose another"),{"class":"error",width:"120px"});actionState.getData("$reg-email-status").addClass("st-ko");future.error("Email already registered")}}else{self.App.navigation.hint.add(actionState.getData("$reg-email"),msg("Unable to check field"),{"class":"error",width:"120px"});actionState.getData("$reg-email-status").addClass("st-ko");future.error("Unexpected response")}},error:function(response){if(response.responseText!=null&&response.responseText!=""){eval("responseData="+response.responseText);self.App.navigation.hint.add(actionState.getData("$reg-email"),responseData.exception.message,{"class":"error",width:"140px"});actionState.getData("$reg-email-status").addClass("st-ko");future.error(responseData.exception.message)}else{self.App.navigation.hint.add(actionState.getData("$reg-email"),msg("Unable to check field"),{"class":"error",width:"120px"});actionState.getData("$reg-email-status").addClass("st-ko");future.error("Unexpected response")}}});return future}).addHandler("validateAll",function(actionState){var futureGroup=new self.App.lib.FutureGroup();futureGroup.add(actionState.runHandler("validateUid",true)).add(actionState.runHandler("validateEmail",true)).add(function(){return actionState.runHandler("validatePasswdSync",true)});return futureGroup}).addHandler("nextStep",function(actionState){var futureGroup=null;var $form=actionState.getAction().getData("$form");if($triggerRgDetails.hasClass("disabled")){return false}$triggerRgDetails.addClass("disabled");futureGroup=actionState.runHandler("validateAll");futureGroup.addListener(function(futureGroup){$triggerRgDetails.removeClass("disabled");if(futureGroup.isSuccess()){actionState.getAction().setData("registration-type","direct");
$form.find("input[name=thirdparty-type]").val("");$form.find("input[name=thirdparty-id]").val("");$form.find("input[name=thirdparty-token]").val("");actionState.getAction().getState("details").enter()}});return false})).addState((new self.App.lib.ActionState("details")).setOption("persist",true).setOnEnter(function(actionState){;$rgDetails.show();$rgSocials.hide();self.unsetModalAside();$wrapper.addClass("register-details");if(actionState.enterCount()==1){$form=actionState.getAction().getData("$form");actionState.setData("$reg-gender",$form.find("#reg-gender"));actionState.getData("$reg-gender").find("input").click(function(ev){actionState.runHandler("validateGenderSync")});actionState.setData("$reg-birthday",$form.find("#reg-birthday"));actionState.setData("$reg-birthday-day",$form.find("#reg-birthday-day").change(function(ev){actionState.runHandler("validateBirthdaySync",true)}));actionState.setData("$reg-birthday-month",$form.find("#reg-birthday-month").change(function(ev){actionState.runHandler("validateBirthdaySync",true)}));actionState.setData("$reg-birthday-year",$form.find("#reg-birthday-year").change(function(ev){actionState.runHandler("validateBirthdaySync",true)}))}self.App.trackAnalyticsEvent(["_trackEvent","Registration","Details"])}).setOnLeave(function(actionState){$rgDetails.hide();$wrapper.removeClass("register-details")}).addHandler("validateBirthdaySync",function(actionState,onlyIfFull){var day=actionState.getData("$reg-birthday-day").val();var month=actionState.getData("$reg-birthday-month").val();var year=actionState.getData("$reg-birthday-year").val();var value=year+"/"+month+"/"+day;var y,m,d,date,comp;if((day==""||month==""||year=="")&&(typeof onlyIfFull!="undefined"&&onlyIfFull)){self.App.navigation.hint.remove(actionState.getData("$reg-birthday"));return false}try{if(isNaN(Date.parse(value))){throw new Error()}comp=value.split("/");if(comp.length!==3){throw new Error()}y=parseInt(comp[0],10);m=parseInt(comp[1],10);d=parseInt(comp[2],10);date=new Date(y,m-1,d);
if((date.getFullYear()==y&&date.getMonth()+1==m&&date.getDate()==d)==false){throw new Error()}self.App.navigation.hint.add(actionState.getData("$reg-birthday"),msg("Cool!"),{"class":"",position:"left"});return true}catch(err){self.App.navigation.hint.add(actionState.getData("$reg-birthday"),msg("Wrong date"),{"class":"error",position:"left"});return false}}).addHandler("validateGenderSync",function(actionState){var selected=actionState.getData("$reg-gender").find("input:checked");var value=(selected.length>0?selected.val():"");if(value.length<1){self.App.navigation.hint.add(actionState.getData("$reg-gender"),msg("Choose one"),{"class":"error",position:"top",offsetTop:20});return false}else{if(value=="M"){self.App.navigation.hint.add(actionState.getData("$reg-gender"),msg("Boy"),{"class":"",position:"top",offsetLeft:69,offsetTop:12})}else{self.App.navigation.hint.add(actionState.getData("$reg-gender"),msg("Girl"),{"class":"",position:"top",offsetLeft:-68,offsetTop:12})}return true}}).addHandler("validateAll",function(actionState){var futureGroup=new self.App.lib.FutureGroup();futureGroup.add(function(){return actionState.runHandler("validateBirthdaySync",false)}).add(function(){return actionState.runHandler("validateGenderSync")});return futureGroup}).addHandler("nextStep",function(actionState){var futureGroup=null;if($triggerRgConfirm.hasClass("disabled")){return false}$triggerRgConfirm.addClass("disabled");futureGroup=actionState.runHandler("validateAll");futureGroup.addListener(function(futureGroup){$triggerRgConfirm.removeClass("disabled");if(futureGroup.isSuccess()){actionState.getAction().getState("confirm").enter()}});return false})).addState((new self.App.lib.ActionState("confirm")).setOption("persist",true).setOnEnter(function(actionState){$rgConfirm.show();$rgSocials.hide();$wrapper.addClass("register-confirm");$rgAccess.hide();$rgAccess.hide();self.unsetModalAside();$triggerRgSubmit.removeClass("disabled");if(actionState.getAction().getData("registration-type")=="thirdparty"){$rgConfirm.find(".js-rg-access").show();
$rgConfirm.find(".js-rg-details").hide();$rgConfirm.find(".js-thirdparty").show()}else{if(actionState.getAction().getData("registration-type")=="direct"){$rgConfirm.find(".js-rg-access").hide();$rgConfirm.find(".js-rg-details").show();$rgConfirm.find(".js-thirdparty").hide()}}if(actionState.enterCount()==1){$form=actionState.getAction().getData("$form");actionState.setData("$reg-terms",$form.find("#reg-terms"));actionState.getData("$reg-terms").click(function(ev){actionState.runHandler("validateTermsSync")});actionState.setData("$reg-captcha",$form.find("#reg-captcha").change(function(ev){actionState.runHandler("validateCaptchaSync")}));actionState.setData("$reg-uid",$form.find("#reg-uid-thirdparty").keyup(function(ev){actionState.runHandler("delayedValidateUidSync")}));actionState.getData("$reg-uid").blur(function(ev){actionState.runHandler("validateUid")});actionState.setData("$reg-uid-status",$form.find("#reg-uid-thirdparty").siblings(".status"));actionState.runHandler("validateTermsSync")}self.App.trackAnalyticsEvent(["_trackEvent","Registration","Confirm"])}).setOnLeave(function(actionState){$rgConfirm.hide();$wrapper.removeClass("register-confirm")}).addHandler("validateTermsSync",function(actionState){if(!actionState.getData("$reg-terms").is(":checked")){self.App.navigation.hint.add(actionState.getData("$reg-terms"),msg("Mandatory"),{"class":"error",position:"left",offsetTop:-11});return false}else{self.App.navigation.hint.remove(actionState.getData("$reg-terms"));return true}}).addHandler("validateCaptchaSync",function(actionState){return true}).addHandler("delayedValidateUidSync",function(actionState){actionState.getAction().getState("access").runHandlerAs(actionState,"delayedValidateUidSync")}).addHandler("validateUidSync",function(actionState,instant){if(typeof instant=="undefined"){instant=false}return actionState.getAction().getState("access").runHandlerAs(actionState,"validateUidSync",instant)}).addHandler("validateUid",function(actionState,instant){if(typeof instant=="undefined"){instant=false
}return actionState.getAction().getState("access").runHandlerAs(actionState,"validateUid",instant)}).addHandler("validateAll",function(actionState){var futureGroup=new self.App.lib.FutureGroup();futureGroup.add(function(){return actionState.runHandler("validateTermsSync")}).add(function(){return actionState.runHandler("validateCaptchaSync")});if(actionState.getAction().getData("registration-type")=="thirdparty"){futureGroup.add(actionState.runHandler("validateUid",true))}return futureGroup}).addHandler("nextStep",function(actionState){var futureGroup=null;if($triggerRgSubmit.hasClass("disabled")){return false}$triggerRgSubmit.addClass("disabled");futureGroup=actionState.runHandler("validateAll");futureGroup.addListener(function(futureGroup){$triggerRgSubmit.removeClass("disabled");if(futureGroup.isSuccess()){actionState.getAction().getState("submitting").enter()}});return false})).addState((new self.App.lib.ActionState("submitting")).setOnEnter(function(actionState){$rgSubmitting.show();$wrapper.addClass("state-submitting");actionState.runHandler("submit")}).setOnLeave(function(actionState){$rgSubmitting.hide();$wrapper.removeClass("state-submitting submitting")}).addHandler("submit",function(actionState){var defaultError=msg("Ooops, something weird ocurred. User couldn't be created.");var registrationType=actionState.getAction().getData("registration-type");if(!registrationType){registrationType="direct"}lockClose=true;$.ajax({url:self.App.url.ajax+"user/register/?type="+registrationType,type:"POST",data:$register.find("form").serialize(),success:function(response){lockClose=false;if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true){actionState.getAction().getState("completed").setData("user",response.data.user);setTimeout(function(){actionState.getAction().getState("completed").enter()},2000)}else{self.notifyError(defaultError);actionState.getAction().getState("confirm").enter()}},error:function(response){lockClose=false;
if(response.responseText!=null&&response.responseText!=""){try{eval("responseData="+response.responseText)}catch(err){responseData={exception:{type:"ERROR_UNEXPECTED_RESPONSE",message:msg("Unexpected or invalid response received")}}}if(registrationType=="direct"){switch(responseData.exception.type){case"ERROR_INVALID_EMAIL":case"ERROR_INVALID_PASSWORD":case"ERROR_INVALID_UID":actionState.getAction().getState("access").enter();actionState.getAction().getState("access").runHandler("validateAll");break;case"ERROR_RATE_LIMIT":self.notifyError(msg("Too many registrations!"));self.modalClose();break;case"ERROR_INVALID_GENDER":case"ERROR_INVALID_BIRTHDAY":actionState.getAction().getState("details").enter();actionState.getAction().getState("details").runHandler("validateAll");break;default:self.notifyError(defaultError);actionState.getAction().getState("confirm").runHandler("validateAll");actionState.getAction().getState("confirm").enter();break}}else{if(registrationType=="thirdparty"){switch(responseData.exception.type){case"ERROR_INVALID_EMAIL":self.notifyError(msg("Your account email is invalid or already used by another account."));actionState.getAction().getState("confirm").enter();break;case"ERROR_INVALID_3RDPARTY":self.notifyError(defaultError);actionState.getAction().getState("access").enter();break;case"ERROR_INVALID_UID":actionState.getAction().getState("confirm").enter();actionState.getAction().getState("confirm").runHandler("validateAll");break;default:self.notifyError(defaultError);actionState.getAction().getState("confirm").runHandler("validateAll");actionState.getAction().getState("confirm").enter();break}}}}else{self.notifyError(defaultError);actionState.getAction().getState("confirm").enter()}}});return false})).addState((new self.App.lib.ActionState("completed")).setOnEnter(function(actionState){var genderSelected,genderValue;var userData=actionState.getData("user");var registrationType=actionState.getAction().getData("registration-type");var thirdPartyType=actionState.getAction().getData("$form").find("input[name=thirdparty-type]").val();
$rgCompleted.show();$wrapper.addClass("state-completed");lockClose=true;$rgCompleted.append('<script type="text/javascript">var google_conversion_id = 1007529816;var google_conversion_language = "en";var google_conversion_format = "3";var google_conversion_color = "ffffff";var google_conversion_label = "fdQyCIjs3wYQ2N624AM";var google_conversion_value = 0.00;var google_conversion_currency = "EUR";var google_remarketing_only = false;<\/script><script defer type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"><\/script><noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1007529816/?value=0.00&amp;currency_code=EUR&amp;label=fdQyCIjs3wYQ2N624AM&amp;guid=ON&amp;script=0"/></div></noscript>');self.App.trackAnalyticsEvent(["_trackEvent","Registration","Completed"]);if(typeof userData=="object"&&userData!=null&&userData.hasOwnProperty("id")){self.App.user.id=userData.id;self.App.user.uid=userData.uid;self.App.user._isAlive=true;self.App.user.registrationCompleted()}$rgCompleted.find(".js-reg-direct").hide();$rgCompleted.find(".js-reg-thirdparty").hide();if(registrationType=="direct"){$rgCompleted.find(".js-reg-direct").show()}else{if(registrationType=="thirdparty"){if(thirdPartyType=="facebook"){$rgCompleted.find(".js-reg-thirdparty-facebook").show();$rgCompleted.find(".js-invite-facebook-friends").on("click",function(ev){ev.preventDefault;ev.stopPropagation;var $this=$(this);if(!self.App.thirdParty.facebook){return}self.App.thirdParty.facebook.sdk().ui({method:"feed",display:"popup",description:$this.attr("data-description"),name:$this.attr("data-name"),link:$this.attr("data-link")});return false})}}}if(typeof userData=="object"&&userData!=null&&userData.hasOwnProperty("gender")){genderValue=userData.gender}else{genderValue="M"}if(genderValue=="M"){$triggerRgReady.html(msv("I'm ready! %MALE",{" %MALE":""}))}else{if(genderValue=="F"){$triggerRgReady.html(msv("I'm ready! %FEMALE",{" %FEMALE":""}))
}else{$triggerRgReady.html(msg("OK"))}}self.checkForRecommendations.start(actionState,$rgCompleted.find(".js-reg-friends"));if(actionState.enterCount()==1){$triggerRgReady.click(function(){var rememberMe=$rgCompleted.find("#reg-remember").is(":checked");$(this).addClass("disabled");self.reload(rememberMe,true,actionState.getAction().getOption("destination"))})}}).setOnLeave(function(actionState){$rgCompleted.hide();$wrapper.removeClass("state-completed")}));this.notifyError=function(msg){notifications.notify({stayTime:8000,text:msg,stay:false,type:"error"})};this.reload=function(rememberMe,completed,destination){if(typeof completed==="undefined"){completed=false}if(typeof destination==="undefined"||destination==null){destination=""}var loc=window.location.href;var index=loc.indexOf("#");if(index>0){loc=loc.substring(0,index)}if(rememberMe||typeof rememberMe=="undefined"){if(self.App.req.isPost){document.location.href=self.App.url.root+(completed?"?welcome=1&":"?")+"destination="+encodeURIComponent(destination)}else{if(document.location.href.match(/\?/)){document.location.href=loc+(completed?"&welcome=1":"")+"&destination="+encodeURIComponent(destination)}else{document.location.href=loc+(completed?"?welcome=1&":"?")+"destination="+encodeURIComponent(destination)}}}else{if(self.App.req.isPost){document.location.href=self.App.url.root+"?forget-me=1"+(completed?"&welcome=1":"")+"&destination="+encodeURIComponent(destination)}else{if(document.location.href.match(/\?/)){document.location.href=loc+"&forget-me=1"+(completed?"&welcome=1":"")+"&destination="+encodeURIComponent(destination)}else{document.location.href=loc+"?forget-me=1"+(completed?"&welcome=1":"")+"&destination="+encodeURIComponent(destination)}}}};this.checkForRecommendations=new function(){var checkForRecommendations=this;var actionState=false;var $target=false;var started=false;var timeoutInstance=false;var speedLT5=1000;var speedMT5=3000;var limit=10;var count=0;this.start=function(myActionState,$myTarget){actionState=myActionState;
$target=$myTarget;if(started){return}started=true;count=0;timeoutInstance=setTimeout(checkForRecommendations.check,speedLT5)};this.check=function(){count++;$.ajax({url:self.App.url.ajax+"user/checks/num-recommendations",success:function(response){if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true){if(response.data.numRecommendations>0){$target.show();$target.bind("user-recommendations-empty",function(ev){ev.preventDefault();ev.stopPropagation();$target.find(".js-friends-container").hide();$target.find(".js-friends-container-empty").show();return false}).bind("user-recommendations-notempty",function(ev){ev.preventDefault();ev.stopPropagation();$(this).show();return false}).bind("user-recommendation-delete",function(ev){ev.preventDefault();ev.stopPropagation();self.App.user.loadRecommendations($target.find(".js-friends-container"),response.data.user_uid,2,{append:false,loader:false});return false});MP.user.loadRecommendations($target.find(".js-friends-container"),response.data.user_uid,2,{})}else{if(count<limit){timeoutInstance=setTimeout(checkForRecommendations.check,count<5?speedLT5:speedMT5)}}}}})}};this.registerWithFB=function(){var onOk=function(){FBlib.isValid(function(valid,response){var onOk=this;if(valid){if(response.logged_in){self.reload(true)}else{if(response.user){self.notifyError("Oooops, we couldn't log you in, please refresh this page and retry")}else{if(response.hasOwnProperty("facebook_uid")){actions.register.runHandler("thirdparty",{type:"facebook",id:FBlib.getUserID(),token:FBlib.getAccessToken(),username:response.facebook_uid})}else{FBlib.getUsername(function(username){actions.register.runHandler("thirdparty",{type:"facebook",id:FBlib.getUserID(),token:FBlib.getAccessToken(),username:username})})}}}}else{if(response=="ERROR_PERMISSIONS"){window.msg=App.i18n.xlat.msg;App.navigation.modals.modalAlert.add("<h3>"+msg("In order to register with your Facebook account you must accept all the permissions we're asking for:")+"</h3><p><strong>"+msg("Email, birthday")+"</strong></p><a href='' onclick='App.user.showRegister(null, false);return false;' class='btn btn-full facebook'>"+msg("Grant permissions to my FB account")+"</a><hr/><p>"+msg("If you don't want to provide them you can create your own account in our site without linking it to your Facebook account.")+"</p><a href='' onclick='App.user.showRegister(null, true);return false;' class='btn btn-full btn-black'>"+msg("Create new account")+"</a>",null,null,function(){},{styles:"error"})
}else{self.notifyError("Oooops, we couldn't log you in, please refresh this page and retry")}}},{autologin:true})};var onKo=function(){};if(FBlib&&FBlib.getStatus()==="connected"){onOk()}else{FBlib.login(onOk,onKo)}};this.attachFBEvents=function(){if(!FBlib){return}FBlib.onConnected(function(){});FBlib.onUnauthorized(function(){});FBlib.onNotLogged(function(){})};this.triggerRegisterFacebook=function(){$(".js-register-facebook:first").trigger("click")};this.Login=function(e,$trigger,destination){e.preventDefault();e.stopPropagation();if(destination!=undefined){self.executeForAction("login","enter")}else{self.executeForAction("register","setOption",["destination",destination],function(){self.executeForAction("login","enter")})}};this.Register=function(e,$trigger,destination){e.preventDefault();e.stopPropagation();self.setActionData("register","trigger",$trigger);if(destination!=undefined){self.executeForAction("register","enter")}else{self.executeForAction("register","setOption",["destination",destination],function(){self.executeForAction("register","enter")})}};this.RegisterFacebook=function(e,$trigger){var $btn=$($trigger),$btnInner=$btn.find(".inner"),$spinner=$('<ul class="loader-spinner"><li></li><li></li><li></li></ul>');e.preventDefault();e.stopPropagation();if($btn.hasClass("sending")){return}$btn.addClass("sending");$btnInner.css("visibility","hidden");$spinner.appendTo($btn);setTimeout(function(){$btn.removeClass("sending");$btnInner.css("visibility","visible");$spinner.remove();$btn.find(".loader-spinner").remove()},10000);self.registerWithFB();return false};this.AccessFacebook=function(e,$trigger){var $btn=$trigger;e.preventDefault();e.stopPropagation();self.registerWithFB()};this.init=function(){if(self._init){return}self.attachLoginEvents();self.App.registerEventListener("ready",function(){self.autoLaunchUserModalContent();readyTimeoutInstance=setTimeout(function(){self.ready()},delayMS)});self._init=true};this.ready=function(callback){if(callback===undefined){callback=function(){}
}if(self._ready=="in-progress"){return false}if(self._ready||self.App.user.isAlive()){callback();return}self._ready="in-progress";$userModal=$("#"+userModalId);if($userModal.size()<1){return}$userModal.html("<ul class='loader-spinner ls-dark'><li></li><li></li><li></li></ul>");self.loadUserModalContent(function(){self._ready=true;callback()});$userModal.bind("modalPreOpen",self.onPreOpen);$userModal.bind("modalOpen",self.onOpen);$userModal.bind("modalPreClose",function(){return self.onPreClose()});$userModal.bind("modalClose",self.onClose);self.attachFBEvents()};this.init()};function PresenceManager(D){var t=this;this.App=D;this.userChannel=D.userChannel;this.resolutions=D.navigation.resolutions;this.debug=true;this.sandbox=false;var H={pmId:"presenceManager",templateListItemSelector:".pm-item.hide",listItem:"pm-list",toggleTriggerSelector:".js-pm-toggle",messagingButtonSelector:".js-message",onlineFriendsCounterSelector:".js-friends-counter",zeroCaseSelector:".js-pm-zero-case",cookieStatus:"mp_pms",cookieSettings:"mp_pmstngs",cookieDisplayMode:"mp_pmd",cookieTtl:1,avatarPromosCustomMarkup:true};var n=false;var b=false;var s=false;var a=false;var u=false;this.currentLayoutMode;this.availableStatus={online:"online",dnd:"dnd",offline:"offline"};var c=this.availableStatus.online;this.availableSettings={"share-room":true};var x;this.totalFriends=null;var w=[];var i=[];var h={};this.log=function(J,I){if((t.debug||(I!=undefined&&I))&&typeof console==="object"){if(typeof J=="string"){console.log("MP-PresenceManager: "+J)}else{console.groupCollapsed("MP-PresenceManager object "+(typeof J));console.dir(J);console.groupEnd()}}};this.modules={friendRecommendations:new FriendRecommendations(this),clientSettings:new ClientSettingsManager(this)};var m={};var g;var d,r,v,C,l,z;this.isReady=function(){return b};this.isShown=function(){return s};this.isCollapsed=function(){return a};this.isAlive=function(){return u};this.getConnectedUser=function(I){if(w[I]===undefined){return null}return w[I]};this.getFriendsInGame=function(){if(!t.isAlive()){return false}var I=[];$.each(w,function(K,J){if(J){if(J.roomType=="game"){I.push(J)}}});return I};this.setTotalFriends=function(I){if(I===undefined){return}this.totalFriends=I};var B=function(){q();u=true};this.kill=function(){u=false;g.find('li:not(".pm-item.hide")').remove();w={};i=[];q();$.each(t.modules,function(I,J){if(typeof J.kill==="function"){J.kill()}});t.log("[PresenceManager ~]$ Client killed")};this.awake=function(){if(u){return}t.show();$.each(t.modules,function(I,J){if(typeof J.awake==="function"){J.awake()
}});B();t.log("[PresenceManager ~]$ Client awoken")};this.initClient=function(I){if(I===undefined||!I instanceof Object){return}if(I.payload.friendsCounter!==undefined){t.totalFriends=I.payload.friendsCounter}if(I.payload.dynGroups!==undefined){h=I.payload.dynGroups}t.setUserPromos();t.setUserStatus(undefined,false);t.setUserSetting(undefined,undefined,false);t.awake();if(I.payload.connectedFriends!==null&&c!=t.availableStatus.offline){var J=I.payload.connectedFriends;t.initFriends(J)}t.log("[PresenceManager ~]$ Client initialized")};this.initFriends=function(K){if(K===undefined||!K instanceof Object){return}var J=K.length;for(var I=0;I<J;I++){t.friendOnline(K[I],true)}};this.die=function(){this.hide();this.kill()};this.show=function(){if(s){return}g.removeClass("hide");l.removeClass("hide");s=true};this.hide=function(){if(!s){return}g.addClass("hide");l.addClass("hide");s=false};this.toggle=function(){if(a){t.open();t.App.lib.setCookie(H.cookieDisplayMode,"open",t.App.cfg.cookieDomain,H.cookieTtl);t.log("[PresenceManager ~]$ Display cookie set: open")}else{t.collapse();t.App.lib.setCookie(H.cookieDisplayMode,"collapse",t.App.cfg.cookieDomain,H.cookieTtl);t.log("[PresenceManager ~]$ Display cookie set: collapse")}};this.open=function(){if(a){a=false;z.removeClass("st-pm-nav-collapsed");z.addClass("st-pm-nav-open")}};this.collapse=function(){if(!a){a=true;z.removeClass("st-pm-nav-open");z.addClass("st-pm-nav-collapsed")}};var F=function(){if(c==t.availableStatus.offline){return}if(x){clearTimeout(x)}x=setTimeout(function(){C.find(".text-case").hide();if(t.totalFriends==0){C.find(".text-case.no-friends").show()}else{C.find(".text-case.no-online-friends").show()}if(!C.is(":visible")){C.stop().fadeIn()}},50)};var k=function(){if(x){clearTimeout(x)}x=setTimeout(function(){if(C.is(":visible")){C.stop().fadeOut()}},50)};this.disconnect=function(I){if(c==t.availableStatus.offline){return}g.find(".pm-list > li.pm-item:not(.hide)").remove();w={};i=[];k();$.each(t.modules,function(J,K){if(typeof K.disconnect==="function"){K.disconnect()
}});this.setUserStatus(t.availableStatus.offline,I);e()};this.online=function(I){if(c==t.availableStatus.online){return}$.each(t.modules,function(J,K){if(typeof K.online==="function"){K.online()}});this.setUserStatus(t.availableStatus.online,I);q()};this.setUserStatus=function(J,K){if(K===undefined||K==true){t.log("[PresenceManager ~]$ User status change ("+J+") event triggered. Propagating through sockets..")}else{t.log("[PresenceManager ~]$ User status change ("+J+") event received")}var I=false;if(J===undefined){if(t.App.lib.getCookie(H.cookieStatus)!==null){c=t.App.lib.getCookie(H.cookieStatus)}I=true}else{if(J!=c){if(!E(J)){return}c=J;t.App.lib.setCookie(H.cookieStatus,c,t.App.cfg.cookieDomain,H.cookieTtl);I=true}}if(I){g.attr("data-status",c);l.attr("data-status",c);$.each(t.modules,function(L,M){if(typeof M.setUserStatus==="function"){M.setUserStatus(c)}});if(K!==false){t.App.userChannel.minimonkeyHandler.requestUpdateUserStatus(c)}}};this.setUserPromos=function(){if(Object.keys(h).length==0||Object.keys(m).length==0){return false}$.each(h,function(I,J){if(I in m){var K=I+"-"+J;g.addClass(K);if(typeof m[I].customMarkUp==="object"&&J in m[I].customMarkUp){g.append(m[I].customMarkUp[J])}}});$.each(m,function(J,I){if(typeof m[J].callback==="function"){m[J].callback()}})};this.setUserSetting=function(K,L,M){var J;if(M===undefined||M==true){t.log("[PresenceManager ~]$ User setting change ("+K+": "+L+") event triggered. Propagating through sockets..")}else{t.log("[PresenceManager ~]$ User setting change ("+K+": "+L+") event received")}if(K===undefined&&L===undefined){if(t.App.lib.getCookie(H.cookieSettings)!==null){J=t.App.lib.getCookie(H.cookieSettings);var I=JSON.parse(J);$.extend(t.availableSettings,I)}}else{if(L!=t.availableSettings[K]&&G(K)){t.availableSettings[K]=L;J=JSON.stringify(t.availableSettings);t.App.lib.setCookie(H.cookieSettings,J,t.App.cfg.cookieDomain,H.cookieTtl)}}$.each(t.modules,function(N,O){if(typeof O.setUserSetting==="function"){$.each(t.availableSettings,function(P,Q){O.setUserSetting(P,Q)
})}});if(M!==false){if(typeof L==="boolean"){L=(L)?"true":"false"}t.App.userChannel.minimonkeyHandler.requestUpdateUserSetting(K,L)}};this.getUserStatus=function(){return c};this.userIsDnd=function(){return(c==t.availableStatus.dnd)};this.userIsOnline=function(){return(c==t.availableStatus.online)};this.userIsOffline=function(){return(c==t.availableStatus.offline)};var E=function(I){return(t.availableStatus[I]!==undefined)};var G=function(I){return(t.availableSettings[I]!==undefined)};this.friendDisconnect=function(I){if(!b){return}if(!I instanceof Object){console.log("[friendDisconnect@PresenceManager ~]$ Not object provided");return}t.log("[PresenceManager ~]$ Friend disconnected: "+I.uid);var J=this.getConnectedUser(I.id);if(J instanceof Object){J.disconnect()}B()};this.friendOnline=function(J,I){if(!b){return}if(c==t.availableStatus.offline){return}t.log("[PresenceManager ~]$ Friend online: "+J.uid);var K=this.getConnectedUser(J.id);if(!K){K=new j(J);if(I===undefined||I==false){K.push("slide")}else{K.push("none")}}else{K.update(J)}B()};this.friendUpdate=function(I){if(!b){return}if(c==t.availableStatus.offline){return}if(!I instanceof Object){return}t.log("[PresenceManager ~]$ Friend update: "+I.uid);var J=this.getConnectedUser(I.id);if(J){J.update(I)}else{t.friendOnline(I,false)}B()};var q=function(){if(!b){return}var I=Object.keys(w).length;if(I>0){v.html(I);v.removeClass("hidden");k()}else{e();F();v.addClass("hidden")}};var e=function(){v.addClass("hidden");if(t.userIsOffline()){v.html("")}else{v.html(0)}};this.trackEvent=function(J,I,K){if(t.sandbox){return}if(!D.cfg.productionMode){return}if(J===undefined){return}if(K===undefined){K=""}t.App.trackAnalyticsEvent(["_trackEvent","PresenceManager",J,I,K])};var o=function(){if(b){return}g.on("click",H.messagingButtonSelector,function(I){D.share.message($(this).data("user-id"),false);I.preventDefault();return false})};var p=function(){var L=g.outerWidth(true);var I=$("section.container").outerWidth(false);var K=$(window).width();
if(K<(2*L)+I){t.collapse()}else{if(t.App.lib.getCookie(H.cookieDisplayMode)!==null){var J=t.App.lib.getCookie(H.cookieDisplayMode);if(typeof t[J]==="function"){t[J]();return}}t.open()}};this._resize=function(){if(t.resizeTimeoutInstance){clearTimeout(t.resizeTimeoutInstance)}if(t.currentLayoutMode=="FULLSCREEN"){return}if(!t.isReady()){return}A();if(t.currentLayoutMode=="LARGE"){if(!a){return}if(t.App.lib.getCookie(H.cookieDisplayMode)=="collapse"){return}if(y()){return}t.open()}else{if(t.currentLayoutMode=="MEDIUM"){if(!a&&y()){t.collapse();return}if(t.App.lib.getCookie(H.cookieDisplayMode)=="collapse"){return}if(y()){return}t.open()}else{if(t.currentLayoutMode=="SMALL"){if(a){return}t.collapse()}}}};var f=function(){if(t.resizeTimeoutInstance){clearTimeout(t.resizeTimeoutInstance)}t.resizeTimeoutInstance=setTimeout(t._resize,350)};var y=function(){return false};var A=function(){var I=$(window).width();if(z.hasClass("fullscreen")){t.currentLayoutMode="FULLSCREEN";t.presenceManagerNavigationStatus="FULLSCREEN"}else{t.currentLayoutMode="LARGE";t.presenceManagerNavigationStatus="FIXED";z.addClass("st-pm-nav-fixed");z.removeClass("st-pm-nav-attached");z.removeClass("st-pm-nav-pushing");z.removeClass("st-display-small")}};this.init=function(){if(n){return}t.App.registerEventListener("ready",function(){t.ready()});n=true;t.log("[PresenceManager ~]$ Client initialized")};this.ready=function(){if(b){return}g=$("#"+H.pmId);if(g.size()<1){return}l=$(H.toggleTriggerSelector);d=$(H.templateListItemSelector);r=$("."+H.listItem);v=$(H.onlineFriendsCounterSelector);C=$(H.zeroCaseSelector);z=$("body");o();b=true;t.log("[PresenceManager ~]$ Client ready")};var j=function(K){var J=this;this.id=null;this.uid="";this.isStaff=false;this.lastRoom=null;this.realRoomName=null;this.roomType="landing";this.sortScore=0;this.avatarSmall="";this.inGame=false;this.shouldTriggerGameUpdateEvent=false;this.dynGroups={};this.status="online";this._shown=false;this._init=false;this._animationMode="slide";
var L;var M=D.i18n.xlat.msg;this.show=function(N){if(J._shown){return}var O;if(N===undefined){O=J._animationMode}else{O=N}switch(O){case"slide":L.css({display:"none",marginLeft:"300px"});L.stop().slideDown().animate({marginLeft:"0px"},500);break;case"fade":L.css({display:"none"}).fadeIn(800);break;default:L.css({display:"none"}).show();break}J._shown=true};this.hide=function(N){if(!J._shown){return}L.animate({marginLeft:"250px"},500).slideUp(400,N);this._shown=false};this.disconnect=function(O){var N=this.id;this.hide(function(){L.remove()});I();if(this.inGame){L.trigger("userInGameUpdated")}delete w[this.id];if(O!==undefined&&typeof O=="function"){O()}};this.update=function(N){if(N===undefined){N={}}if(!N instanceof Object){console.log("Unable to update object, user provided is not a valid Object");return}if(this.inGame){J.shouldTriggerGameUpdateEvent=true}this.updateProperties(N);this.updateHtml(N);this.push("none")};this.push=function(P){var O=r.find("li[data-id='"+this.id+"']");if(O.length==0){var N=this.setUserPositionByScore();L.css({display:"none"});r.find("li.pm-item:nth-of-type("+N+")").after(L);J.show(P)}else{O.replaceWith(L)}if(J.inGame||J.shouldTriggerGameUpdateEvent){L.trigger("userInGameUpdated")}};var I=function(){var N=J.id;$.each(i,function(P,O){if(O instanceof Object){if(O.id==N){i.splice(P,1)}}})};this.getUserScorePosition=function(){var N=null;$.each(i,function(P,O){if(O.id==J.id){return P+1}});return N};this.getUserPositionByScore=function(){var Q=this.sortScore;var S=this.id;var R=0;var O=true;var N={};var P=false;N.id=S;N.score=Q;if(i.length>0){$.each(i,function(U,T){var V=parseInt(T.score,10);if(Q>=V){O=false;R=U;return false}else{if(T.id==J.id){P=true}}});if(O){R=i.length}}return(P)?R:R+1};this.getUserItemjQueryObject=function(){return L};this.setUserPositionByScore=function(){var P=this.sortScore;var R=this.id;var Q=0;var O=true;var N={};N.id=R;N.score=P;if(i.length>0){$.each(i,function(T,S){var U=parseInt(S.score,10);if(P>=U){i.splice(T,0,N);
O=false;Q=T;return false}});if(O){i.push(N);Q=i.length-1}}else{i.push(N)}return Q+1};this.updateProperties=function(N){if(!N instanceof Object){console.log("Unable to flush object, user provided is not a valid Object");return}$.each(N,function(P,O){J[P]=O})};this.updateHtml=function(P){if(!P instanceof Object){console.log("Unable to flush object, user provided is not a valid Object");return}var S=this.realRoomName!==null?this.realRoomName:this.lastRoom;var R,O;var T=M("Surfing Miniplay");J.inGame=false;if(P.roomType==="game"){J.inGame=true;R=this.lastRoom.split("|");R=R[2];if(R==="0"){T="<a target='_blank' href='"+D.url.root+"hot-games'> "+M("Highlight games")+" </a>"}else{T="<a target='_blank' href='"+D.url.game+P.roomGameUid+"'>"+S+"</a>"}}else{if(P.roomType==="minigame"){J.inGame=true;O=this.lastRoom.split("|");O=O[2];var N=D.cfg.minigames;var Q=N[O];if(Q!==undefined&&Q.hasOwnProperty("url")&&Q.hasOwnProperty("showInPresenceManager")&&Q.hasOwnProperty("name")){if(Q.showInPresenceManager){T="<a target='_blank' href='"+Q.url+"'> "+Q.name+" </a>"}}}else{if(P.roomType==="no-permission"){}else{if(P.roomType==="dev-game"){}else{if(P.roomType==="trophies"){T="<a target='_blank' href='"+D.url.trophies+"'> "+M("Looking for trophies")+" </a>"}else{if(P.roomType==="jobs"){T="<a target='_blank' href='"+D.url.root+"jobs'> "+M("Looking for job")+" </a>"}else{if(P.roomType==="avatars"){T="<a target='_blank' href='"+D.url.avatar+"'> "+M("Changing the avatar")+" </a>"}else{if(P.roomType==="community"){T="<a target='_blank' href='"+MP.url.community+"'> "+M("In the comunity page")+" </a>"}else{if(P.roomType==="videos"){T="<a target='_blank' href='"+MP.url.videos+"'> "+M("Watching videos")+" </a>"}}}}}}}}}L=d.clone();L.attr("data-id",this.id).addClass(this.status).removeClass("hide");if(D.user.is_staff){if(this.isStaff){L.addClass("staff")}}L.find("img").attr("data-user-id",this.id).attr("src",this.avatarSmall);L.find("a.name").attr("src","profile-"+this.id).attr("href",D.url.profile+this.uid).html(this.uid);
L.find(".js-card").attr("data-user-id",this.id).attr("data-card","profile-"+this.id).attr("href",D.url.profile+this.uid).attr("data-card-config",'{"position": "left","cssClass": "pm-card", "cardOffsetFromTrigger":10}').attr("data-card-event","hover");L.find(".js-message").attr("data-user-id",this.id);if(Object.keys(m).length>0){$.each(this.dynGroups,function(U,V){if(U in m){var W=U+"-"+V;L.addClass(W);if(typeof m[U].userItemCustomMarkUp==="object"&&V in m[U].userItemCustomMarkUp){L.append(m[U].userItemCustomMarkUp[V])}}})}L.find(".status").append(T);if(this.roomType==="game"&&R!=="0"){L.find(".game").removeClass("hide")}};this.flushConnectedFriendsArr=function(){w[this.id]=this};this.init=function(){if(J._init){return}if(!K instanceof Object){console.log("Unable to put friend, user provided is not a valid Object");return}this.updateProperties(K);this.updateHtml(K);this.flushConnectedFriendsArr();this._init=true};this.init()};this.init()}function FriendRecommendations(e){var i=this;this.App=e.App;this.userChannel=e.App.userChannel;this.presenceManager=e;this.debug=e.debug;this.maxSuggestions=30;this.initialSuggestionPoolRecommendations=6;var c={featuredSuggestionMinValue:2800,skipSuggestionTimeout:1000,friendRecommendationsId:"friendRecommendations",templateSuggestionItemSelector:".fs-item.hide",suggestionItemSelector:".fs-item:not(.hide)",suggestorSliderSelector:".js-slider",suggestionActiveItemSelector:".js-slider > li:nth-of-type(2)",followUserSelector:".js-subscribe",ignoreUserSelector:".js-remove-user",graphProximityRecommendationKey:"GP"};this._shown=false;this._init=false;this._ready=false;this._alive=false;this._loaded=false;this.suggestionPool={"request-friend-recommendations":[],"follow-suggestions-minimonkey":[]};var b;var a;this.requestFollowSuggestions=function(){i.requestRecommendations()};this.requestRecommendations=function(){$.ajax({url:i.App.url.ajax+"user/online-presence/request-friend-recommendations",type:"POST",dataType:"json",beforeSend:function(){},success:function(k){if(k.data.hasOwnProperty("clients")){var j=k.data.clients;
if(j.length>0){i.receivedSuggestions(k.data.clients,"request-friend-recommendations")}}},error:function(j){i.presenceManager.log("[friendRecommendations@PresenceManager ~]$ Error trying to fetch friend Recommendations: "+j.message)},complete:function(){}})};this.receivedSuggestions=function(j,k){i.presenceManager.log("[friendRecommendations@PresenceManager ~]$ Suggestions received from origin "+k);i.presenceManager.log(j);if(!this.suggestionPool.hasOwnProperty(k)){this.suggestionPool.origin=[]}for(var l=0;l<j.length;l++){j[l].origin=k}this.suggestionPool[k]=j;this._loaded=true;d();i.regenerateHtml()};this.regenerateHtml=function(k){if(k==undefined){k=100}var l=b.find(c.suggestionItemSelector).size();var j=b.find(c.suggestionItemSelector).filter("[data-origin=request-friend-recommendations]").size();for(;l<i.maxSuggestions;l++){var m=null;if(this.suggestionPool["request-friend-recommendations"].length>0&&j<this.initialSuggestionPoolRecommendations){m=this.suggestionPool["request-friend-recommendations"].shift();if(m){j++;l++;k--;g(m)}}else{if(this.suggestionPool["follow-suggestions-minimonkey"].length>0){m=this.suggestionPool["follow-suggestions-minimonkey"].shift();if(m){l++;k--;g(m)}}else{break}}if(k<=0){break}}};var g=function(j){var k=a.clone();if(j.hasOwnProperty("recommend_score")){j.score=j.recommend_score}k.removeClass("hide").attr("data-id",j.id).attr("data-uid",j.uid).attr("data-score",j.score).attr("data-origin",j.origin);if(j.score>=c.featuredSuggestionMinValue){k.append('<span class="fs-badge featured-user icon icon-fire-c"></span>')}k.find(".uid a").attr("href",i.App.url.profile+j.uid);k.find(".js-card").attr("data-user-id",j.id).attr("href",i.App.url.profile+j.uid);k.find(".js-uid").html(j.uid);if(j.level===undefined&&j.progress_level===undefined){k.find(".js-level").css("display","none")}else{var l;if(j.level){l=j.level}if(j.progress_level){l=j.progress_level}k.find(".js-level").html(l)}k.attr("data-featured",false);if(j.recommend_origin_type!==undefined){k.addClass("featured");
k.attr("data-featured",true);if(j.recommend_origin_type==c.graphProximityRecommendationKey){k.find(".js-friends-in-common").removeClass("hide").find("span").html(j.recommend_origin_param)}else{k.find(".js-friends-in-common").removeClass("hide")}}else{if(j.num_trophies!==undefined){k.find(".js-trophies").removeClass("hide").find("span").html(j.num_trophies)}}if(!j.hasOwnProperty("avatar")&&j.hasOwnProperty("avatarSmall")){j.avatar=j.avatarSmall}k.find(".js-avatar").attr("src",j.avatar);k.find("div.js-pubsub").attr("data-user",j.uid);k.find("a.js-subscribe").attr("data-user",j.uid);$suggestorSlider.append(k)};this.purgeSuggestion=function(j){if(j===undefined){return}var l=/[a-z]/i.test(j);i.presenceManager.log("[friendRecommendations@PresenceManager ~]$ Purge user suggestion event received (user: "+j+")");var k;if(l){k=b.find('li[data-uid="'+j+'"]').remove()}else{k=b.find('li[data-id="'+j+'"]').remove()}if(k.size()>0){i.regenerateHtml(1)}};this.resetPool=function(){for(var j in i.suggestionPool){i.suggestionPool[j]=[]}this._loaded=false};this.kill=function(){this.hide();this.resetPool();this._alive=false};this.awake=function(){if(this._alive){return}d()};this.show=function(){if(this._shown){return}if(this._loaded){b.css("display","none").removeClass("hide").fadeIn(800);this._shown=true}};this.hide=function(){if(!this._shown){return}b.fadeOut(800).addClass("hide");this._shown=false};var f=function(){b.find(c.suggestionItemSelector).remove()};this.ackSuggestion=function(k,q){if(k===undefined){return}var o=!!/[a-z]/i.test(k);var m;if(o){var p=this.suggestionPool.length;var n=false;for(var l=0;l<=p-1;l++){if(i.suggestionPool[l].uid==k){m=i.suggestionPool[l].id;n=true;break}}if(!n){var j=b.find('li[data-uid="'+k+'"]');if(j.size()>0){m=j.data("id")}}}else{m=k}if(m){if(q===true){h(m)}i.App.userChannel.minimonkeyHandler.requestFollowSuggestionAck(m)}else{i.presenceManager.log("[friendRecommendations@PresenceManager ~]$ ackSuggestion method failed, userId is null")}};var h=function(j){if(j===undefined){return
}$.ajax({url:i.App.url.ajax+"user/online-presence/skip-friend-recommendation",type:"POST",data:{userId:j},dataType:"json",beforeSend:function(){},success:function(k){i.presenceManager.log("[friendRecommendations@PresenceManager ~]$ Recommendation succesfully skipped(userId: "+k.data.skippedId+")")},error:function(k){i.presenceManager.log("[friendRecommendations@PresenceManager ~]$ Error trying to fetch friend Recommendations: "+k.message)},complete:function(){}})};var d=function(){i._alive=true;i.show()};this.isAlive=function(){return i._alive};this.bindEventListeners=function(){if(this._ready){return}b.on("click",c.followUserSelector,function(j){App.trackAnalyticsEvent(["_trackEvent","UserWidgetV2","presence-manager","follow-user"]);j.preventDefault();j.stopPropagation();var k=$(this);if(!k.hasClass("disabled")){k.addClass("disabled");k.parent().hide();i.App.user.doSubscribe(k.data("user"),this,function(){i.purgeSuggestion($(this).data("user"))});return false}return false});b.on("click",c.ignoreUserSelector,function(m){App.trackAnalyticsEvent(["_trackEvent","UserWidgetV2","presence-manager","ignore-user"]);m.preventDefault();m.stopPropagation();var l=$(this);var n=l.parents(".fs-item");var k=n.data("id");var j=n.data("featured");l.parent().hide();i.presenceManager.log("[FriendSuggestor@PresenceManager ~]$ Skip suggestion event triggered (id: "+k+")");i.ackSuggestion(k,j);i.purgeSuggestion(l.data("user"));return false})};this.ready=function(){if(i._ready){return}var j=$("#presenceManager");if(j.size()<1){return}b=$("#"+c.friendRecommendationsId);$suggestorSlider=b.find(c.suggestorSliderSelector);a=b.find(c.templateSuggestionItemSelector);this.bindEventListeners();this.requestFollowSuggestions();this._ready=true;i.presenceManager.log("[friendRecommendations@PresenceManager ~]$  Module ready")};this.init=function(){if(this._init){return}i.App.registerEventListener("ready",function(){i.ready()});this._init=true;i.presenceManager.log("[friendRecommendations@PresenceManager ~]$  Module initialized")
};this.init()}function ClientSettingsManager(g){var j=this;this.App=g.App;this.userChannel=g.App.userChannel;this.presenceManager=g;this.debug=g.debug;this.initialSuggestionPool=3;var c={clientSettingsMenuButtonSelector:".js-settings-trigger",clientSettingsId:"clientSettings",clientSettingsListSelector:".js-pm-settings-list",clientSettingsItemSelector:".js-pm-settings-item",clientSettingsItemTextSelector:".js-setting-text",clientDndActionSelector:".js-pm-settings-status-dnd",clientSettingsItemChangeActionSelector:".js-pm-settings-element",clientOfflineActionSelector:".js-pm-settings-status-offline",clientOnlineActionSelector:".js-pm-settings-status-online",clientOnlineStatusBoxSelector:".js-pm-settings-info-box.online",clientOfflineStatusBoxSelector:".js-pm-settings-info-box.offline"};this._shown=false;this._init=false;this._ready=false;var b,k,i,h,f;this.setUserSetting=function(l,m){l=l.replace("-","").toLowerCase();var n=l+"Setting";if(typeof j[n]==="function"){j[n](m)}};this.shareroomSetting=function(l){d(b.find('[data-setting="share-room"]'),!l)};this.setUserStatus=function(l){var m=l+"Status";if(typeof j[m]==="function"){j[m](l)}};this.disconnect=function(){f.hide();k.removeClass("open");i.hide();h.show();b.show();b.addClass("rel");this._shown=true};this.offlineStatus=function(){this.disconnect()};this.dndStatus=function(){f.show();i.show();h.hide();d($(c.clientDndActionSelector),true)};this.onlineStatus=function(){f.show();b.removeClass("rel");i.show();h.hide();d($(c.clientDndActionSelector),false)};this.online=function(){this.hide()};this.show=function(){b.slideDown(400,function(){});b.removeClass("hide");k.addClass("open");this._shown=true};this.hide=function(){b.slideUp(400,function(){b.addClass("hide")});k.removeClass("open");this._shown=false};this.toggle=function(){if(this._shown){j.hide()}else{j.show()}};var d=function(m,l){if(!(m instanceof $)){var m=$(m)}if(l){m.prop("checked",l)}else{m.removeAttr("checked")}a(m,l)};var a=function(l,m){if(!(l instanceof $)){var l=$(l)
}var n=l.parents(c.clientSettingsItemSelector).find(c.clientSettingsItemTextSelector);if(n.length>0){n.hide();if(m){n.siblings(".checked").show()}else{n.siblings(".unchecked").show()}}};var e=function(){if(j._ready){return}$(c.clientSettingsMenuButtonSelector).click(function(l){l.preventDefault();l.stopPropagation();if(App.presenceManager.isCollapsed()){App.presenceManager.toggle();return false}j.toggle();return false});b.on("change",c.clientSettingsItemChangeActionSelector,function(l){l.stopPropagation();if($(this).is(":checked")){j.presenceManager.setUserSetting($(this).data("setting"),false)}else{j.presenceManager.setUserSetting($(this).data("setting"),true)}return false});b.on("change",c.clientDndActionSelector,function(l){l.stopPropagation();if($(this).is(":checked")){j.presenceManager.setUserStatus($(this).data("status"))}else{j.presenceManager.setUserStatus(j.presenceManager.availableStatus.online)}return false});b.on("click",c.clientOfflineActionSelector,function(l){l.preventDefault();l.stopPropagation();j.presenceManager.disconnect();return false});b.on("click",c.clientOnlineActionSelector,function(l){l.preventDefault();l.stopPropagation();j.App.userChannel.minimonkeyHandler.reconnect();j.presenceManager.online();return false})};this.ready=function(){if(j._ready){return}var l=$("#presenceManager");if(l.size()<1){return}b=$("#"+c.clientSettingsId);k=$(c.clientSettingsMenuButtonSelector);i=$(c.clientOnlineStatusBoxSelector);h=$(c.clientOfflineStatusBoxSelector);f=$(c.clientSettingsListSelector);e();this._ready=true;j.presenceManager.log("[clientSettingsManager@PresenceManager ~]$ Module ready")};this.init=function(){if(this._init){return}j.App.registerEventListener("ready",function(){j.ready()});this._init=true;j.presenceManager.log("[clientSettingsManager@PresenceManager ~]$ Module initialized")};this.init()};function UserChannel(App){var self=this;var minigameEventListeners;this.App=App;this.messageHandler=new UserChannelMessageHandler(this);this.minimonkeyHandler=new UserMiniMonkeyHandler(this);this.debug=true;this.debuggerOnDispatch=true;this.channelType="N";this.channelTypeId=0;this.defaultPollingTime=20000;this.firstPollingTime=2000;this.firstPollingTimeGameChannel=1000+Math.round((Math.random()*4000));this.pollingTime={N:30000,P:30000,G:30000,GD:5000};this.maxProcessCountPerType={N:100,P:100,G:2500,GD:2500};this._isActive=false;this._timeoutInstance=false;this._lastMessageTime=false;this._lastMessageWithUserTime=false;this._lastMessageWithUserMessagingTime=false;this._processCounter=0;this._errorCounter=0;this._maxProcessCount=2500;this._first=true;this._elapsed=0;this._elapsedInterval=false;this._timezoneOffset=(new Date()).getTimezoneOffset();this._acceptedTypes=null;this.onMsg=function(triggerFunction){self.messageHandler.registerEventListener("msg",triggerFunction)};this.sendMiniGameEvent=function(minigameUid,eventName,params,callback){if(!params instanceof Object){throw Error("Params must be a object")}if(minigameUid===undefined){throw Error("minigameUid must be set")}if(eventName===undefined){throw Error("eventName must be set")}$.ajax({url:self.App.url.ajax+"minigames/event/"+minigameUid+"/"+eventName,type:"POST",data:params,success:function(response){if(self.debug){console.log("Minigame-Event ["+eventName+"] OK response: ");console.dir(response.data)}},error:function(response){var parsedResponse;if(response.hasOwnProperty("responseText")){try{parsedResponse=JSON.parse(response.responseText);response=parsedResponse}catch(e){response=response.responseText}}if(self.debug){console.log("Minigame-Event ["+eventName+"] KO response: ");console.dir(response)}},complete:function(response){if(response&&response.hasOwnProperty("responseText")){try{parsedResponse=JSON.parse(response.responseText);response=parsedResponse}catch(e){response=response.responseText}}if(callback){callback(response)
}}})};minigameEventListeners=[];this.addMiniGameEventListener=function(callback){minigameEventListeners.push(callback)};this.dispatchMiniGameEventListener=function(event,payload){if(self.debug){console.log("Dispatching MINIGAME event '"+event+"' to listeners. Payload: "+JSON.stringify(payload))}for(var i=0;i<minigameEventListeners.length;i++){minigameEventListeners[i](event,payload)}};this._messageReceived=function(msg){this.messageHandler.dispatch(msg)};this._userDataReceived=function(user){self.App.user.avatar=typeof user.avatar=="undefined"?null:user.avatar;self.App.user.progress_points=user.progress_points;self.App.user.progress_level=user.progress_level;self.App.user.total_minicoins=parseInt(user.totalMinicoins);self.App.user.total_gems=parseInt(user.totalGems);self.App.user.last_feed_notification=user.lastNotification;if(user.lastNotificationRead>self.App.user.last_feed_notification_read){self.App.user.last_feed_notification_read=user.lastNotificationRead}self.App.user.thirdparty.facebook=user.thirdparty.facebook;self.App.user.thirdparty.twitter=user.thirdparty.twitter;self.App.user.statsUpdated()};this._userMessagingDataReceived=function(data){self.App.user.total_messages=parseInt(data.totalMessagesUnread);self.App.user.total_unread_threads=data.hasOwnProperty("extendedUnreadThreads")?parseInt(data.extendedUnreadThreads):0;self.App.user.last_read_messages=data.lastReadAccess;self.App.user.last_message_received=data.lastMessageReceived;self.App.user.statsUpdated()};this.refreshUserMessagingData=function(){var urlAjax=MP.url.ajax+"user/notifications/channel/messaging-data/"+parseInt(self.channelTypeId)+"?pageType="+App.pageType+"&pageTypeId="+App.pageTypeId;$.ajax({url:urlAjax,success:function(response){if(typeof response.data.usermsg=="object"){self._lastMessageWithUserMessagingTime=response.data.usermsg.timestamp;self._userMessagingDataReceived(response.data.usermsg)}},error:function(response){}})};this.process=function(){self._processCounter++;if(self._processCounter==1){self._lastMessageTime=""
}var urlAjax=MP.url.ajax+"user/notifications/channel/"+self.channelType+"/"+parseInt(self.channelTypeId)+"?pageType="+App.pageType+"&pageTypeId="+App.pageTypeId+"&count="+self._processCounter+"&time="+self._lastMessageTime+"&usertime="+self._lastMessageWithUserTime+"&usermsgtime="+self._lastMessageWithUserMessagingTime+"&ptime="+self.getPollingTime()+"&elapsed="+self._elapsed+"&tz="+parseInt(self._timezoneOffset)+"&first="+(self._first?"1":"0")+"&socketEnabled="+(self.minimonkeyHandler.isOnline()?"1":"0");if(self.channelType=="G"||self.channelType=="GD"){if(App.game.is_playing){urlAjax+="&playingGame=1"}}$.ajax({url:urlAjax,success:function(response){var msg;if(typeof response.data!="undefined"){if(typeof response.data.messages!="undefined"&&response.data.messages instanceof Array){for(var i=0;i<response.data.messages.length;i++){msg=response.data.messages[i];self._lastMessageTime=msg.timestamp;self._messageReceived(msg)}}if(typeof response.data.user=="object"){self._lastMessageWithUserTime=response.data.user.timestamp;self._userDataReceived(response.data.user)}if(typeof response.data.usermsg=="object"){self._lastMessageWithUserMessagingTime=response.data.usermsg.timestamp;self._userMessagingDataReceived(response.data.usermsg)}}self._first=false;self._errorCounter=0;self._schedule()},error:function(response){var responseData=null;if(response.responseText!=null&&response.responseText!=""){eval("responseData="+response.responseText)}switch(response.status){case 401:case 403:self._errorCounter++;if(self._errorCounter<=3){self._schedule()}else{self.App.user.die();self.App.notifications.notify({title:self.App.i18n.xlat.msg("Session disconnected"),subtitle:self.App.i18n.xlat.msg("You've been disconnected, please refresh the page and login again."),endpointJS:"window.location.href='"+window.location.pathname+"?login=1';return false;",endpointTitle:self.App.i18n.xlat.msg("Connect again"),cancelTitle:self.App.i18n.xlat.msg("Cancel"),stay:true})}break;default:self._errorCounter++;
if(self._errorCounter<20){self._schedule()}}}})};this._schedule=function(){if(self._processCounter<this._maxProcessCount){if(self._timeoutInstance){clearTimeout(self._timeoutInstance)}self._timeoutInstance=setTimeout(self.process,self.getPollingTime())}};this.forceUserReload=function(){self._lastMessageWithUserTime=0;self.process();setTimeout(function(){self._lastMessageWithUserTime=0;self.process()},3000)};this.setChannelType=function(channelType,channelTypeId){self.channelType=channelType;self.channelTypeId=channelTypeId};this.enable=function(lastMessageTime){if(typeof lastMessageTime!="undefined"){self._lastMessageTime=lastMessageTime}self.start()};this.disable=function(){self.stop()};this.isActive=function(){return self._isActive};this.log=function(msg,force){if((self.debug||(force!=undefined&&force))&&typeof console==="object"){if(typeof msg=="string"){console.log("MP-UserChannel: "+msg)}else{console.groupCollapsed("MP-UserChannel object "+(typeof msg));console.dir(msg);console.groupEnd()}}};this.start=function(){if(self.isActive()){return}if(!self.App.user.isAlive()){return}self.log("Start user channel");if(self.maxProcessCountPerType.hasOwnProperty(self.channelType)){this._maxProcessCount=self.maxProcessCountPerType[self.channelType]}self.clearTimeouts();self._isActive=true;self._elapsedInterval=setInterval(function(){self._elapsed=self._elapsed+1},1000);setTimeout(function(){self.process()},300)};this.stop=function(){if(!self.isActive()){return}console.log("stop user channel");self.clearTimeouts();self._isActive=false};this.clearTimeouts=function(){if(this._timeoutInstance!=false){clearTimeout(this._timeoutInstance);this._timeoutInstance=false}if(this._elapsedInterval!=false){clearInterval(this._elapsedInterval);this._elapsedInterval=false}};this.getPollingTime=function(){var pollingTime=self.defaultPollingTime;if(self._processCounter<2){if(self.channelType=="G"){return self.firstPollingTimeGameChannel}else{return self.firstPollingTime}}if(typeof self.pollingTime[self.channelType]!="undefined"){pollingTime=parseInt(self.pollingTime[self.channelType])
}return pollingTime};this.userIsAwakeEvent=function(){self.start()};this.userDieEvent=function(){self.stop()};this.windowFocusEvent=function(){};this.windowBlurEvent=function(){};self.App.user.registerEventListener("awake",self.userIsAwakeEvent);self.App.user.registerEventListener("die",self.userDieEvent);$(window).focus(self.windowFocusEvent);$(window).blur(self.windowBlurEvent);this.setAcceptedTypes=function(types){self._acceptedTypes=types}}function UserChannelMessageHandler(a){var c=a.App;var b=this;this.App=c;this.userChannel=a;this.eventListeners={msg:null};this.messageDispatcher=new userMessageDispatcher(this);this.registerEventListener=function(d,e){if(typeof e==="function"&&d!==null){if(this.eventListeners[d]===null){this.eventListeners[d]=[]}this.eventListeners[d].push(e);return true}return false};this.onMsg=function(d){b.registerEventListener("msg",d)};this.triggerEvent=function(e,f){var d;if(f===undefined){f=false}if(this.eventListeners[e] instanceof Array){for(d=0;d<this.eventListeners[e].length;d+=1){if(this.eventListeners[e][d](f)===false){return false}}}return true};this.dispatch=function(e){if(typeof e!="object"||typeof e.type=="undefined"){return false}if(a.debug){console.log((new Date()).toISOString()+": "+e.type+" message received from channel "+(b.hasDetail(e)?"(detail present)":""));console.dir(e)}if(this.userChannel._acceptedTypes!==undefined&&this.userChannel._acceptedTypes!==null&&typeof Array.isArray(this.userChannel._acceptedTypes)){if($.inArray(e.type,this.userChannel._acceptedTypes)===-1){if(a.debug){console.log((new Date()).toISOString()+": "+e.type+" message skipped for channel "+(b.hasDetail(e)?"(detail present)":""));console.dir(e)}return true}}var d;if(b.hasDetail(e)){if(a.debuggerOnDispatch){}if(e.hasOwnProperty("javascript_dispatcher")&&e.javascript_dispatcher){$("body").append(e.javascript_dispatcher);if(typeof window.mpUserChannelJavascriptDispatcher=="function"){if(e.hasOwnProperty("log_stats")&&e.log_stats){c.trackAnalyticsEvent(["_trackEvent","Notificationsv2","JsDispatch-total",e.type+(e.hasOwnProperty("subtype")&&e.type!=e.subtype?"-"+e.subtype:"")]);
if(e.hasOwnProperty("source")){c.trackAnalyticsEvent(["_trackEvent","Notificationsv2","JsDispatch-"+e.source,e.type+(e.hasOwnProperty("subtype")&&e.type!=e.subtype?"-"+e.subtype:"")])}}window.mpUserChannelJavascriptDispatcher(e)}else{this.dispatchMessage(e)}}else{this.dispatchMessage(e)}}else{b.loadDetail(e)}return true};this.dispatchMessage=function(f){var e=false;var d="_"+f.type;b.triggerEvent("msg",f);if(typeof b.messageDispatcher[d]=="function"){e=b.messageDispatcher[d](f)}else{e=b.messageDispatcher._DEFAULT(f)}if(a.debug){if(e){console.log((new Date()).toISOString()+": "+f.type+" message dispatched")}else{console.log((new Date()).toISOString()+": "+f.type+" message not dispatched (ignored)")}console.log("---------------------------------")}if(e){if(f.hasOwnProperty("log_stats")&&f.log_stats){c.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Dispatch-total",f.type+(f.hasOwnProperty("subtype")&&f.type!=f.subtype?"-"+f.subtype:"")]);if(f.hasOwnProperty("source")){c.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Dispatch-"+f.source,f.type+(f.hasOwnProperty("subtype")&&f.type!=f.subtype?"-"+f.subtype:"")])}}}};this.doNotDispatchMessage=function(d){if(!d.default_sticky||d.default_autoack){setTimeout(function(){a.messageHandler.acknowledge(d,false,true)},250)}if(d.hasOwnProperty("log_stats")&&d.log_stats){c.trackAnalyticsEvent(["_trackEvent","Notificationsv2","NoDispatch-total",d.type+(d.hasOwnProperty("subtype")&&d.type!=d.subtype?"-"+d.subtype:"")]);if(d.hasOwnProperty("source")){c.trackAnalyticsEvent(["_trackEvent","Notificationsv2","NoDispatch-"+d.source,d.type+(d.hasOwnProperty("subtype")&&d.type!=d.subtype?"-"+d.subtype:"")])}}};this.hasDetail=function(d){if(d.hasOwnProperty("detail_loaded")&&d.detail_loaded){return true}if(d.type=="XPU"&&!d.must_acknowledge){return true}if(d.type=="GMU"&&(!d.hasOwnProperty("param_i1")||d.param_i1<100)){return true}if(d.type=="MINIGAME"&&(!d.hasOwnProperty("param_i1")||d.param_i1==0)){return true}return false};this.loadDetail=function(e){var d=MP.url.ajax+"user/notifications/detail/?channelType="+b.userChannel.channelType+"&channelTypeId="+parseInt(b.userChannel.channelTypeId);
if(MP.i18n.country_forced){d+="&mp_force_country="+MP.i18n.country}if(a.debug){console.log("Loading detail for "+e.type+"...")}$.ajax({url:d,method:"POST",data:{messages:JSON.stringify([e])},success:function(f){var h;if(typeof f.data!="undefined"){if(typeof f.data.messages!="undefined"&&f.data.messages instanceof Array){for(var g=0;g<f.data.messages.length;g++){b.dispatch(f.data.messages[g])}}}},error:function(f){if(a.debug){console.log("Error loading detail for "+e.type+"..."+f.responseText);console.dir(f)}}})};this.acknowledge=function(j,i,d){var f=null;var h={};if(j===undefined){return}if(i===undefined){i=false}if(d===undefined){d=true}var g={};if(typeof j!="object"||!j.hasOwnProperty("timestamp")){return}if(a.debug){if(i){console.log("Message "+j.type+" acknowledged (As SUCCESS)")}else{console.log("Message "+j.type+" acknowledged")}}if(j.hasOwnProperty("must_acknowledge")&&j.must_acknowledge){g.type=j.type;g.timestamp=j.timestamp;g.must_acknowledge=true;g.source=j.source;try{h.msg=JSON.stringify(g)}catch(e){h.error="Unable to stringify "+j.type+": "+e.message}$.ajax({url:MP.url.ajax+"user/notifications/ack?type="+g.type,method:"POST",data:h});if(d){f=j.type+(j.hasOwnProperty("subtype")&&j.type!=j.subtype?"-"+j.subtype:"");if(j.hasOwnProperty("log_stats")&&j.log_stats){c.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Acknowledge",f])}if(i){if(j.hasOwnProperty("log_stats")&&j.log_stats){c.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Acknowledge",f+"-success"]);c.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Acknowledge-Success",f])}}}}}}function userMessageDispatcher(c){var a=this;this.App=c.App;var b=this.App;var d=null;this._XPU=function(e){b.user.progress_points=parseInt(e.param_l);b.user.progress_level=b.user.getLevelByPoints(parseInt(e.param_l));b.user.statsUpdated();if(e.hasOwnProperty("log_stats")&&e.log_stats){b.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Amounts","XP",parseInt(e.param_s,10)])}return this._DEFAULT(e)};this._MCU=function(g){var e=parseInt(g.param_i1);
b.user.total_minicoins=parseInt(g.param_l);b.user.statsUpdated();a.App.widgets.headerNavUserWidget.triggerEvent("earned_minicoins",e);if(g.hasOwnProperty("log_stats")&&g.log_stats){b.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Amounts","Minicoins",e])}if(b.cfg.productionMode===true){var f=e/100;g.detail_inline_js='<script type="text/javascript">var google_conversion_id = 1007529816;var google_conversion_language = "en";var google_conversion_format = "3";var google_conversion_color = "ffffff";var google_conversion_label = "LE3iCKCL3F0Q2N624AM";var google_conversion_value = '+f+';var google_conversion_currency = "USD";var google_remarketing_only = false;<\/script><script defer type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"><\/script><noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/1007529816/?value='+f+'&amp;currency_code=USD&amp;label=LE3iCKCL3F0Q2N624AM&amp;guid=ON&amp;script=0"/></div></noscript>'}return this._DEFAULT(g)};this._GMU=function(f){var e=parseInt(f.param_i1);b.user.total_gems=parseInt(f.param_l);b.user.statsUpdated();a.App.widgets.headerNavUserWidget.triggerEvent("earned_gems",e);if(f.hasOwnProperty("log_stats")&&f.log_stats){b.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Amounts","Gems",e])}if(e>=2000){return this._DEFAULT(f)}else{c.acknowledge(f,false,true);return true}};this._NTR=function(e){if(!this.shouldDispatchModal()){return false}return this._DEFAULT(e)};this._AVC=function(e){c.acknowledge(e,false,true);if(e.hasOwnProperty("detail_user_item")&&e.hasOwnProperty("detail_avatar_list")){a.App.widgets.headerNavUserWidget.triggerEvent("update_widget_image",e.detail_user_item.id,e.detail_avatar_list.new_avatar_widget);if(a.App.pageType=="profile"&&a.App.pageTypeId==e.detail_user_item.id){a.App.userProfile.updateUserCoverImages(e.detail_user_item.id,e.detail_avatar_list.new_avatar_cover_big,e.detail_avatar_list.new_avatar_level_widget)
}}return true};this._NAC=function(e){c.acknowledge(e,false,true);if(b.game){b.game.navigation.aside.achievements.refreshIfVisible()}e.onclick=function(g){if(b.game){b.game.navigation.toAchievements();var f=b.game.achievementCountdowns.getCountdown(e.param_i1);if(f){f.doRemove()}}};return this._DEFAULT(e)};this._NASC=function(k){var j;var g;if(b.game){j=JSON.parse(k.param_s);g=k.param_i1;try{var l=JSON.parse(k.detail_text);if(l&&b.lazy.hasOwnProperty("deadline")){b.lazy.deadline.setTimePayload(l)}}catch(h){}for(var f=0;f<j.length;f++){if(b.game.achievementCountdowns){b.game.achievementCountdowns.startCountdown(j[f].id,g,parseInt(j[f].deadline,10),parseInt(j[f].time,10),j[f].uid,j[f].resetOnKaboom)}}}};this._NASK=function(k){var j;var g;if(b.game){j=JSON.parse(k.param_s);g=k.param_i1;console.dir(j);try{var l=JSON.parse(k.detail_text);if(l&&b.lazy.hasOwnProperty("deadline")){b.lazy.deadline.setTimePayload(l)}}catch(h){}for(var f=0;f<j.length;f++){if(b.game.achievementCountdowns){b.game.achievementCountdowns.stopCountdown(j[f].id,g,parseInt(j[f].deadline,10),parseInt(j[f].time,10),j[f].uid,j[f].resetOnKaboom)}}}};this._BHM=function(e){c.acknowledge(e,false,true);if(b.game){b.game.navigation.aside.highscores.refreshIfVisible(e.detail_highscore_item.uid,"total",e.detail_highscore_item.is_main,e.detail_highscore_item.is_custom)}if(e.detail_highscore_item.is_main=="0"&&e.detail_highscore_item.is_custom=="0"){return}e.onclick=function(f){if(b.game){b.game.navigation.toHighscoreGlobal(e.detail_highscore_item.uid,"total")}};return this._DEFAULT(e)};this._BHF=function(e){if(!this.shouldDispatchNotification()){c.acknowledge(e,false,false);return false}c.acknowledge(e);if(b.game){b.game.navigation.aside.highscores.refreshIfVisible(e.detail_highscore_item.uid,"friends",e.detail_highscore_item.is_main,e.detail_highscore_item.is_custom)}if(e.detail_highscore_item.is_main=="0"&&e.detail_highscore_item.is_custom=="0"){return}e.onclick=function(f){if(b.game){b.game.navigation.toHighscoreFriends(e.detail_highscore_item.uid)
}};return this._DEFAULT(e)};this._NFO=function(g){var e;if(!this.shouldDispatchNotification()){c.acknowledge(g,false,false);return false}if(g.default_type=="aside"){g.onclick=function(h){if(h.hasOwnProperty("currentTarget")){b.user.doSubscribe(g.detail_user_item.uid,h.currentTarget)}else{b.user.doSubscribe(g.detail_user_item.uid)}if(g.hasOwnProperty("log_stats")&&g.log_stats){b.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Amounts","NFO-Followback",1])}};e=this._DEFAULT(g)}if(g.default_type=="modal"){e=this._DEFAULT(g);var f=$(".modal.msg-nfo-nfo a.js-close-success");f.click(function(h){h.preventDefault();h.stopPropagation();if(h.hasOwnProperty("currentTarget")){b.user.doSubscribe(g.detail_user_item.uid,h.currentTarget)}else{b.user.doSubscribe(g.detail_user_item.uid)}if(g.hasOwnProperty("log_stats")&&g.log_stats){b.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Amounts","NFO-Followback-Modal",1])}$(".modal.msg-nfo-nfo .js-close").click()})}return e};this._NFR=function(e){e.default_sticky=true;if(!this.shouldDispatchNotification()){c.acknowledge(e,false,false);return false}if(a.App.userWidget.widgetMessages.isExtended){a.App.userWidget.widgetMessages.onUserChannelNewFriendReceived(e)}else{}return this._DEFAULT(e)};this._MSG=function(e){if(!this.shouldDispatchNotification()){c.acknowledge(e,false,false);return false}if(a.App.userWidget.widgetMessages.isExtended){e.detail_subtitle=a.App.i18n.xlat.msg("Click to open!");setTimeout(function(){if(!a.App.userWidget.widgetMessages.onUserChannelMessageReceived(e)){return}},1000);return false}else{e.onclick=function(f){a.App.share.messageConversation(e.detail_user_item.id,e.param_l);setTimeout(function(){var g=$("#share-description");if(g.length>0){g.focus()}},300);if(e.hasOwnProperty("log_stats")&&e.log_stats){b.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Amounts","MSG-Reply",1])}}}a.App.userChannel.refreshUserMessagingData();return this._DEFAULT(e)};this._RM_UFID=function(f){var e=parseInt(f.param_l,10);
if(f.hasOwnProperty("log_stats")&&f.log_stats){b.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Amounts","RM_UFID-total",e]);setTimeout(function(){b.trackAnalyticsEvent(["_trackEvent","Notificationsv2","Amounts","RM_UFID-"+e+"day",1])},500)}return this._DEFAULT(f)};this._MINIGAME=function(g){var h,e,f;c.acknowledge(g,false,true);if(!typeof JSON=="undefined"){return c.acknowledge(g,false,true)}h=JSON.parse(g.param_s);if(!h||!h.hasOwnProperty("event")||!h.hasOwnProperty("payload")){if(c.userChannel.debug){console.log("Unsupported minigame message, must be {event:..., payload: ....}")}}e=h.event;f=h.payload;c.userChannel.dispatchMiniGameEventListener(e,f);return true};this._DEFAULT=function(f){var e;if(f.hasOwnProperty("default_type")&&f.default_type!=="disabled"&&f.default_type){e="_DEFAULT_"+f.default_type.toUpperCase();if(typeof this[e]=="function"){return this[e](f)}}else{return c.acknowledge(f,false,true)}};this._DEFAULT_ASIDE=function(f){var e;if(!f.default_sticky||f.default_autoack){setTimeout(function(){c.acknowledge(f,false,true)},250)}f.styles="msg-"+f.type.toLowerCase()+" msg-"+f.type.toLowerCase()+"-"+f.subtype.toLowerCase()+" "+(f.hasOwnProperty("default_class")?f.default_class:"");e={id:f.timestamp,type:f.styles,clickable:f.default_clickable,onclose:function(g,h){if(f.default_sticky||!f.default_autoack){c.acknowledge(f,h,true)}if(f.hasOwnProperty("onclose")&&typeof f.onclose==="function"){f.onclose(h)}}};if(f.default_sticky){e.stay=true}else{e.stayTime=f.default_aside_time*1000}if(typeof f.detail_media_small=="string"&&f.detail_media_small.length>0){e.media=f.detail_media_small}if(typeof f.detail_text=="string"&&f.detail_text.length>0){e.text=f.detail_text}if(typeof f.detail_title=="string"&&f.detail_title.length>0){e.title=f.detail_title}if(typeof f.detail_subtitle=="string"&&f.detail_subtitle.length>0){e.subtitle=f.detail_subtitle}if(typeof f.detail_endpoint_url=="string"&&f.detail_endpoint_url.length>0){e.endpointUrl=f.detail_endpoint_url}if(typeof f.detail_endpoint_js=="string"&&f.detail_endpoint_js.length>0){e.endpointJS=f.detail_endpoint_js
}if(typeof f.detail_endpoint_title=="string"&&f.detail_endpoint_title.length>0){e.endpointTitle=f.detail_endpoint_title}if(typeof f.detail_cancel_title=="string"&&f.detail_cancel_title.length>0){e.cancelTitle=f.detail_cancel_title}if(typeof f.detail_inline_js=="string"&&f.detail_inline_js.length>0){e.inlineJS=f.detail_inline_js}if(f.hasOwnProperty("detail_earned_gems")){e.earnedGems=a.App.i18n.writeNumber(f.detail_earned_gems)}if(f.hasOwnProperty("detail_earned_xp")){e.earnedXP=a.App.i18n.writeNumber(f.detail_earned_xp)}if(f.hasOwnProperty("onclick")&&typeof f.onclick==="function"){e.onclick=function(g){f.onclick(g);if(!g.isDefaultPrevented()){b.notifications.close(g.currentTarget,true)}}}b.notifications.addToQueueLast(e);return true};this._DEFAULT_MODAL=function(f){var e;if(!this.shouldDispatchModal()){return false}if(f.default_autoack){setTimeout(function(){c.acknowledge(f,false,true)},f.default_autoack_timems>0?f.default_autoack_timems:250)}f.styles="msg-"+f.type.toLowerCase()+" msg-"+f.type.toLowerCase()+"-"+f.subtype.toLowerCase()+" "+(f.hasOwnProperty("default_class")?f.default_class:"");if(f.hasOwnProperty("detail_metadata")){e=f.detail_metadata;if(e.hasOwnProperty("audio")&&e.audio.length>0){this.playAudio(e.audio);f.styles+=" msg-with-audio"}}if(f.detail_html!=null){b.navigation.modals.htmlModal(f.detail_html,null,function(h,g){if(!f.default_autoack||f.default_autoack_timems>0){c.acknowledge(f,h,true)}a.stopAudio();return true},null)}else{b.navigation.modals.modalStandard(f,null,function(h,g){if(!f.default_autoack||f.default_autoack_timems>0){c.acknowledge(f,h,true)}if(f.hasOwnProperty("onclose")&&typeof f.onclose==="function"){f.onclose(h)}a.stopAudio();return true})}return true};this.stopAudio=function(){if(d!==null){try{d.pause();if(d.currentTime!=0){d.currentTime=0}}catch(f){}d=null}};this.playAudio=function(f){f=b.url.media+"audio/"+f;this.stopAudio();if(typeof"Audio"!=="undefined"&&typeof document.hasFocus==="function"){try{if(document.hasFocus()){d=new Audio(f);
d.volume=0.5;d.play()}}catch(g){}}};this.shouldDispatchModal=function(){return !b.navigation.modals.existsActiveModal()};this.shouldDispatchNotification=function(){if(b.presenceManager.userIsOffline()){return false}return(!b.presenceManager.userIsDnd())}}function MiniMonkeyMessage(c,f,a,e){var d="1.6";var b=this;if(e==undefined){e=0}this.type=c;this.payload=f;if(a===undefined||a===null){this.signature=""}else{this.signature=a}this.getJSON=function(){return JSON.stringify({version:d,type:b.type,callbackId:parseInt(e),payload:b.payload,signature:b.signature})}}function MiniMonkeyFollowSuggestionAckMessage(a,b){this.payload={userId:a.toString()};this.message=new MiniMonkeyMessage("skip-client-from-suggested-list",this.payload,"",b);this.getJSON=function(){return this.message.getJSON()}}function MiniMonkeyGetFollowSuggestionMessage(a){this.payload={};this.message=new MiniMonkeyMessage("get-suggested-clients-to-follow",this.payload,"",a);this.getJSON=function(){return this.message.getJSON()}}function MiniMonkeyGetRoomsStatsMessage(b,a){this.payload={rooms:b};this.message=new MiniMonkeyMessage("get-rooms-stats",this.payload,"",a);this.getJSON=function(){return this.message.getJSON()}}function MiniMonkeyUpdateClientStatusMessage(a,b){this.payload={clientStatus:a};this.message=new MiniMonkeyMessage("client-status-update",this.payload,"",b);this.getJSON=function(){return this.message.getJSON()}}function MiniMonkeyUpdateClientSettingMessage(a,c,b){this.payload={};this.payload[a]=c;this.message=new MiniMonkeyMessage("client-settings",this.payload,"",b);this.getJSON=function(){return this.message.getJSON()}}function MiniMonkeyGetClientStatsMessage(a){this.payload={};this.message=new MiniMonkeyMessage("get-client-stats",this.payload,"",a);this.getJSON=function(){return this.message.getJSON()}}function MiniMonkeyDismissNotificationMessage(b,a){this.payload={hasNotificationDismiss:b};this.message=new MiniMonkeyMessage("set-dismiss-notification",this.payload,"",a);this.getJSON=function(){return this.message.getJSON()
}}function MiniMonkeyReceivedMessage(a){var c;try{c=$.parseJSON(a);if(!c instanceof Object){throw new Error("Not an object")}if(!c.hasOwnProperty("type")){throw new Error("Uknown object type")}if(!c.hasOwnProperty("payload")){c.payload={}}if(!c.hasOwnProperty("callbackId")){c.callbackId=0}}catch(b){throw b}this.type=c.type;this.payload=c.payload;this.callbackId=c.callbackId;this.get=function(d){if(this.payload.hasOwnProperty(d)){return this.payload[d]}else{return null}}}function UserMiniMonkeyHandler(v){var r=v.App;var q=this;var k,f,e="/monkey",g="/monkey-stress";var j=false;var o=false;var l=false;var u=true;var p,c,i,m=true;var s=null;var n=r.presenceManager;var b=1001;var a=1002;var d=1003;var t=1004;var h=new function(){var y=[];var x=[];var w=0;var z=10;this.register=function(A){if(A==undefined||!(A instanceof Function)){return 0}if(y.length>=z){y.shift();x.shift()}w++;y.push(A);x.push(w);return w};this.dispatch=function(C,D){if(D==undefined){paramenter=null}for(var B=0,A=x.length;B<A;B++){if(x[B]==C){y[B](D);return true}}return false}};this.userChannel=v;this.isConnected=function(){if(k!=null){return true}return false};this.isOnline=function(){return j};this.isStressModeEnabled=function(){return l};this.isStaff=function(){return o};this.debug=function(x,w){if((q.debug||(w!=undefined&&w))&&typeof console==="object"){if(typeof x=="string"){console.log("MP-UserChannel-UserMiniMonkeyHandler: "+x)}else{console.groupCollapsed("MP-UserChannel-UserMiniMonkeyHandler object "+(typeof x));console.dir(x);console.groupEnd()}}};this.reconnect=function(){if(!p){return}if(q.isConnected()){return}q.connect(p,c,true);i=false};this.disconnect=function(w){if(q.isConnected()&&k){k.close();if(w!==undefined&&w){m=false}}};this.connect=function(x,y,w){if(!r.cfg.minimonkey.enabled){return}if(x===undefined){return}if(y===undefined){return}if(w===undefined){w=false}if(this.isConnected()||this.isOnline()){return}p=x;c=y;j=false;if(window.WebSocket){try{k=new WebSocket(r.cfg.minimonkey.protocol+"://"+r.cfg.minimonkey.host+":"+r.cfg.minimonkey.port+e);
k.onmessage=function(A){q.messageDispatcher(A.data)};k.onopen=function(B){var A;if(w){q.debug("Websocket channel open, reconnecting...!");A=new MiniMonkeyMessage("reconnection",x,y)}else{q.debug("Websocket channel open, connecting...!");if(x.userIsStaff!==null){o=x.userIsStaff}A=new MiniMonkeyMessage("connection",x,y)}k.send(A.getJSON())};k.onclose=function(B){if(j){q.debug("Websocket channel close!");q.onOffline()}else{q.debug("Websocket cannot connect!")}j=false;k=null;if(m){var A=(r.cfg.productionMode===true?60000+Math.round(Math.random()*30000):5000);q.debug("Websocket channel reconnect issued in "+A);i=setTimeout(q.reconnect,A)}}}catch(z){;q.debug("UNABLE TO CONNECT");console.dir(z)}if(l){f=new WebSocket(r.cfg.minimonkey.protocol+"://"+r.cfg.minimonkey.host+":"+r.cfg.minimonkey.port+g);f.onopen=function(B){var A;q.debug("Websocket Stress channel open...!");A=new MiniMonkeyMessage("stress-test",x,y);k.send(A.getJSON())};f.onmessage=function(A){};f.onclose=function(A){if(j){q.debug("Websocket Stress channel close!");q.onOffline()}else{q.debug("Websocket Stress cannot connect!")}f=null}}}else{k=null}};this.messageDispatcher=function(w){var z;try{z=new MiniMonkeyReceivedMessage(w)}catch(y){q.debug("Error receiving message: "+y);return}if(z.callbackId<=0){if(z.type==="exception"){q.onException(z.get("code"),z.get("message"),z.get("detail"))}else{if(z.type==="init"){if(!q.isOnline()){j=true;q.onOnline(z)}}else{if(z.type==="get-stats"){if(z.get("roomName")!==null&&z.get("roomUsage")!=null&&z.get("tags")!=null){q.onGetRoomStats(z.get("roomName"),z.get("roomUsage"));q.onGetTagsStats(z.get("tags"))}if(z.get("tagsUsage")!==null){q.onGetTagsUsage(z.get("tagsUsage"))}}else{if(z.type==="friend-connection"){if(z.get("clientStatus")!==null){var x=z.get("clientStatus");if(x.uid!==null&&x.lastRoom!=null&&x.avatarSmall!=null){this.onFriendConnection(x)}}}else{if(z.type==="friend-disconnection"){if(z.get("clientStatus")!==null){var x=z.get("clientStatus");if(x.uid!==null){this.onFriendDisconnection(x)
}}}else{if(z.type==="friend-update"){if(z.get("clientStatus")!==null){var x=z.get("clientStatus");if(x.uid!==null&&x.lastRoom!=null&&x.avatarSmall!=null){this.onFriendUpdate(x)}}}else{if(z.type==="force-connection-die"){q.onForceConnectionDie()}else{if(z.type==="push-notification"){q.onReceivePushNotification(z)}else{if(z.type==="suggested-clients-to-follow"){q.onFollowSuggestions(z)}else{if(z.type==="skip-client-from-suggested-list"){q.onPurgeFollowSuggestion(z)}else{if(z.type==="update-client-status"){q.onUserStatusUpdate(z)}else{if(z.type==="update-client-settings"){q.onUserSettingsUpdate(z)}else{if(z.type==="bulk-friend-list"){q.onBulkFriendUpdate(z)}else{if(z.type==="client-disconnect"){q.onClientDisconnect()}else{if(z.type=="update-client-total-friends"){q.onUserUpdateTotalFriends(z)}}}}}}}}}}}}}}}}else{h.dispatch(z.callbackId,z)}};this.onOnline=function(w){if(w===undefined){return}if(o||w.payload.enabledUI){if(n.isReady()){n.initClient(w)}}};this.onOffline=function(){n.die()};this.onGetTagsStats=function(w){};this.onGetTagsUsage=function(x){var w=r.navigation.minimonkey.tagUsage;if(w._ready){w.updateObjects(x)}};this.onGetRoomStats=function(x,w){if(s===null){s=$("span#players-online .js-all")}if(s&&s.size()>0){s.html(w)}};this.onFriendConnection=function(w){if(u){console.log("ONFRIENDCONNECTION: "+w.uid)}if(n.isReady()){this.onFriendUpdate(w)}};this.onFriendDisconnection=function(w){if(n.isReady()){n.friendDisconnect(w)}};this.onFriendUpdate=function(w){if(n.isReady()){n.friendUpdate(w)}};this.onForceConnectionDie=function(){m=false;if(k){k.close();k=null}};this.onReceivePushNotification=function(w){v.messageHandler.dispatch(w.payload)};this.onException=function(y,x,w){this.debug({code:y,message:x,detail:w});if(y==b||y==d){m=false;if(k){k.close();k=null}}};this.onFollowSuggestions=function(w){this.debug("FOLLOW SUGGESTIONS RECEIVED! ("+w.payload.clientsSuggested.length+")");if(w.payload.clientsSuggested.length>0){if(n.isReady()){setTimeout(function(){n.modules.friendRecommendations.receivedSuggestions(w.payload.clientsSuggested,"follow-suggestions-minimonkey")
},1000)}}};this.onPurgeFollowSuggestion=function(w){if(w.payload.userId!==undefined){if(n.isReady()){n.modules.friendRecommendations.purgeSuggestion(w.payload.userId)}}};this.onUserSettingsUpdate=function(w){if(w.payload!==undefined&&n.isReady()){$.each(w.payload,function(x,y){if(y=="true"){y=true}else{if(y=="false"){y=false}}n.setUserSetting(x,y,false)})}};this.onUserStatusUpdate=function(w){if(w.payload.clientStatus!==undefined){if(n.isReady()){n.setUserStatus(w.payload.clientStatus,false)}}};this.onClientDisconnect=function(){if(n.isReady()){n.disconnect(false)}};this.onBulkFriendUpdate=function(x){if(x.payload.connectedFriends!==null){var z=x.payload.connectedFriends;var y=z.length;for(var w=0;w<y;w++){n.friendOnline(z[w],true)}}};this.onUserUpdateTotalFriends=function(w){if(w.payload.friendsCounter===undefined){return}if(n.isReady()){n.setTotalFriends(w.payload.friendsCounter)}};this.requestFollowSuggestionAck=function(w,y){var x=new MiniMonkeyFollowSuggestionAckMessage(w,h.register(y));if(k!==null){k.send(x.getJSON());return true}else{q.debug("websocket channel not open :/");return false}};this.requestFollowSuggestions=function(x){var w=new MiniMonkeyGetFollowSuggestionMessage(h.register(x));if(k!==null){k.send(w.getJSON());return true}else{q.debug("websocket channel not open :/");return false}};this.requestUpdateUserStatus=function(w,y){var x=new MiniMonkeyUpdateClientStatusMessage(w,h.register(y));if(k!==null){k.send(x.getJSON());return true}else{q.debug("websocket channel not open :/");return false}};this.requestUpdateUserSetting=function(w,y,z){var x=new MiniMonkeyUpdateClientSettingMessage(w,y,h.register(z));if(k!==null){k.send(x.getJSON());return true}else{q.debug("websocket channel not open :/");return false}};this.requestRoomsStats=function(x,y){var w=new MiniMonkeyGetRoomsStatsMessage(x,h.register(y));if(k!==null){k.send(w.getJSON());return true}else{q.debug("websocket channel not open :/");return false}};this.requestClientStats=function(x){var w=new MiniMonkeyGetClientStatsMessage(h.register(x));
if(k!==null){k.send(w.getJSON());return true}else{q.debug("websocket channel not open :/");return false}};this.requestNotificationDismiss=function(w,y){var x=new MiniMonkeyDismissNotificationMessage(w,h.register(y));if(k!==null){k.send(x.getJSON());return true}else{q.debug("websocket channel not open :/");return false}};this.init=function(){r.user.registerEventListener("die",function(){m=false;if(k!=null){k.close()}})};r.registerEventListener("ready",q.init)};function UserPurchase(u){this.App=u;var q=this,g=false,t="buy-coins-modal",l,i,s=false,n=false,j=false,e={},F=false,c=null,m=false,k=false,B=false,z=false,d="",b=null,f="PurchaseMCv2",a,o,A,w,H,E,y,p,r,v,G,D,h=u.i18n.xlat.msg,C=u.i18n.xlat.msv,x=u.notifications;A=function(I){if(g){document.location.hash="";q.App.navigation.modals.modal.close(I)}};p=function(){if(g){g=false;l.html("");w()}};o=function(J){var I="";m=false;B=false;z=false;if(g){D();I+=document.location.search;if(e.hasOwnProperty("mc")){b=e.mc;if(I===""){I="?mc="+e.mc}else{I+="&mc="+e.mc}}$.ajax({url:q.App.url.ajaxhtml+"payment/purchase-modal"+I,type:"GET",data:null,success:function(K){l.html(K);a();y();q.App.trackAnalyticsEvent(["_trackEvent",f,"gateway-list",d])},error:function(){A()}})}};v=function(M,K,J){var N=[],L,I;if(J===undefined){J=true}N.push("gateway="+encodeURI(M));D();if(typeof K==="object"){for(L in K){if(K.hasOwnProperty(L)){N.push(L+"="+encodeURI(K[L]))}}}if(g){I=q.App.url.ajaxhtml+"payment/purchase-offers-modal";if(document.location.search.length>0){I+=document.location.search+"&"}else{I+="?"}u.navigation.helpers.loaderSpinnerToggle(i.find(".main").html(""),true);$.ajax({url:I+N.join("&"),type:"GET",data:null,success:function(O){var P;l.html(O);a();q.App.trackAnalyticsEvent(["_trackEvent",f,"offers-list-gw"+m,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"offers-list-total",d]);P=l.find(".js-offerselector");if(P.size()===1){if(J){P.eq(0).trigger("click")}else{l.find(".js-offers-back").click()}}},error:function(){A()},complete:function(){}})}};r=function(L,M,J){var N=[],K,I;G($("#gatewayselector-"+M).data("viewtype"));N.push("offer="+encodeURI(L));N.push("gateway="+encodeURI(M));if(typeof J==="object"){for(K in J){if(J.hasOwnProperty(K)){N.push(K+"="+encodeURI(J[K]))}}}if(g){I=q.App.url.ajaxhtml+"payment/purchase-provider-modal";if(document.location.search.length>0){I+=document.location.search+"&"}else{I+="?"}u.navigation.helpers.loaderSpinnerToggle(i.find(".main").html(""),true);$.ajax({url:I+N.join("&"),type:"GET",data:null,success:function(O){l.html(O);
l.show();a();q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-selected-gw"+m+"-of"+L,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-selected-gw"+m+"-total",d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-selected-total",d])},error:function(){x.notify({stayTime:5000,text:h("Oops, your request could not be completed."),stay:false,type:"error"});o(false);l.show()},complete:function(){}})}};y=function(){if(!g){return}i=$("#purchaseModalMainContent")};a=function(){if(l.data("purchase-events-binded")){return}l.data("purchase-events-binded",true);l.on("click",".js-infoPayMethod",function(){o(false)});l.on("click",".js-infoOffer",function(){if(!k){var I={};if(b!==null){I={mc:b}}v(m,I,false)}else{o(false)}});l.on("click",".js-offers-back",function(){l.find(".js-options").hide();l.find(".js-options-loading").show();o(false)});l.on("click",".js-provider-back",function(){var I={};q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-selected-backBtn-gw"+m,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-selected-backBtn-total",d]);if(k){o(false)}else{if(b!==null){I={mc:b}}v(m,I,false)}});l.on("click",".js-gatewayselector",function(){var J=$(this).find("a"),I;m=J.data()["gateway"];k=(J.data()["gatewayisfree"]===1);I={free:J.data()["gatewayisfree"]};if(m!==null){if(b!==null){I.mc=b}if(J.data()["payload"]){I.payload=J.data()["payload"]}if(!k){v(m,I,true)}else{r(0,m,I)}}});l.on("click",".js-offerselector",function(){var K=$(this).find("a"),J={},I;I=K.data()["offerid"];l.find(".js-options").hide();l.find(".js-options-loading").show();if(m!==null){if(b!==null){J={mc:b}}if(K.data()["payload"]){J.payload=K.data()["payload"]}r(I,m,J)}})};this.triggerGatewayOKCallback=function(){var I,J=l.find("#buyCoinsModalSuccessContent").html();z=true;MP.userChannel.forceUserReload();q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ok-gw"+m,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ok-total",d]);if(J!==undefined){l.html(J);I=l.find("#buyCoinsModalConfirmButton");
I.on("click",function(){if(typeof s==="function"){A(s)}else{A()}})}else{if(typeof s==="function"){A(s)}else{A()}}};this.triggerGatewayKOCallback=function(){var J,I=l.find("#buyCoinsModalFailureContent").html();q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-gw"+m,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-total",d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-error-gw"+m,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-error-total",d]);if(I!==undefined){l.html(I);J=l.find("#buyCoinsModalOkButton");J.on("click",function(){if(typeof n==="function"){A(n)}else{A()}})}else{if(typeof n==="function"){A(n)}else{A()}}};this.triggerGatewayDeniedCallback=function(){var J,I=l.find("#buyCoinsModalDeniedContent").html();q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-gw"+m,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-total",d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-denied-gw"+m,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-denied-total",d]);if(I!==undefined){l.html(I);J=l.find("#buyCoinsModalDeniedOkButton");J.on("click",function(){if(typeof n==="function"){A(n)}else{A()}})}else{if(typeof n==="function"){A(n)}else{A()}}};this.triggerGatewayCancelCallback=function(){q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-gw"+m,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-total",d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-cancel-gw"+m,d]);q.App.trackAnalyticsEvent(["_trackEvent",f,"provider-callback-ko-cancel-total",d]);z=false};w=function(){if(typeof j==="function"){j()}};this.showPurchaseModalFlow=function(I,J,K){if(typeof J==="object"){e=J}else{e={}}return this.showPurchaseModal(e,null,null,null,I,K)};this.showPurchaseModal=function(I,N,K,O,J,M){if(J===undefined){J="default"}d=J;if(!g){g=true;if(l){l.remove();l=false}if(typeof I==="object"){e=I}else{e={}
}if(typeof N==="function"){s=N}else{s=false}if(typeof K==="function"){n=K}else{n=false}if(typeof O==="function"){j=O}else{j=false}$(document.body).append("<div id='"+t+"' class='payments modal'><ul class='loader-spinner ls-dark'><div id='purchaseModalMainContent'></div></div>");l=$("#"+t);if(l.size()>0){y();l.on("modalClose",p);q.App.navigation.modals.modal.showByTarget(l);if(typeof M==="object"&&M.hasOwnProperty("gateway")&&M.hasOwnProperty("gatewayIsFree")){m=M.gateway;k=M.gatewayIsFree;switch(M.step){case"offers":if(!k){v(m,e,true);break}case"providers":var L=1;if(M.hasOwnProperty("offer")){L=M.offer}r(L,m,e);break;default:o(true);break}}else{o(true)}}}};G=function(I){D();if(I==="large"){l.addClass("large").css({width:"660px"})}};D=function(){l.removeClass("large").css({width:""})}};/*



                           /\
                        /\/  \/\
                        \      /
                         \____/


--  Navigation
    |
    |-- social
    |   |
    |   |-- gameComments (raw)
    |
    |-- helpers
    |   |
    |   |-- hashScrollToCheck
    |   |-- preventAutoScrollToHash
    |   |-- loader spinner
    |   |-- scroll loader
    |   |-- lazybind
    |   |-- dropdown
    |   |-- ellipsis
    |   |-- tabs
    |   |-- tabs horizontal scroll
    |   |-- expandable
    |   |-- scrollTo
    |   |-- placeholder
    |   |-- cardExpand
    |   |-- profileAvatarEnlarger
    |   |-- resizePopup
    |   |-- stickyAside
    |   |-- directVisibility
    |   |-- ajaxLoader
    |
    |-- header
    |   |
    |   |-- subNav
    |
    |-- showcases
    |   |
    |   |-- slideshow
    |   |-- carousel
    |
    |-- modals
    |	|
    |	|-- modal
    |	|-- modalFrame
    |	|-- autoLaunchModal
	|
	|-- hints
    |-- userCard
    |
    |-- Categories Navigation (NEW)

*/


function Navigation(App) {
	// Self reference
		var self 	 = this;

	// Global application instance
		this.App	 = App;

    // Public properties

    // Private properties
    	this._init = false; // Has been initialized?
    	this._ready = false; // Is it ready?
       
    // Setters and getters

    // Submodules
	//-----------------------------------------------------------------------------

        this.ghostGame = function(gameThumbnail, gameName, gameCategory, gameUrl) {
            var $gameListing, count = 0;
            if (self.App.pageType==="landing") {
                $gameListing = $("games-latest");
                if (!$gameListing) {return;}
            }
        };

    	
		//-----------------------------------------------------------------------------
    	this.social = new function() {

    		// @todo: sketched functionality
    		this.gameComments = function() { 

		        // expanding comment info
		        // body.delegate('.comments > li', 'click', function(){
		        //     $this       = $(this);
		        //     $expandable  = $($this.find('.expander-content'));
		        //     $expandable.toggleClass('visible');
		        // });

				// expanding commentBox
		        var body        = $('body');
		        var content     = $('.comments .content');
		        var commentBox  = $('.comment-box');
		        var sendContainer = $('.send-container').hide();

		        function charsInit() {
		            var chars   = 220;
		            var initCount =  $('.init-count, .count').html(chars);
		        };
		        body.delegate('#commentBox', 'focus', function(){
		            $(this).parent().addClass('focus');
		            $('.send-container').fadeIn();
		            charsInit();
		        });
		        body.delegate('.comment-box', 'blur', function(){
		            if($('#commentBox').val() == '') {
		                $('#commentBox').parent().removeClass('focus');
		                $('.send-container').hide();
		            }
		        });
		        body.delegate('#commentBox', 'keyup', function(){
		            var chars   = 220;
		            var box     = $(this).val();
		            var main    = box.length *100;
		            var value   = (main / chars);
		            var count   = chars - box.length;
		            // alert if you have few chars left
		            if(count <= 10) {
		                $('.count').css({'color' : '#FF6B6C'});
		            } else {
		                $('.count').css({'color' : '#969798'});
		            };
		            if(box.length <= chars) {
		                $('.count').html(count);
		                $('.bar').animate({"width": value+'%'}, 1);
		            }
		            else { /*console.log('full');*/ /* here we have to stop da typing*/ }
		            return false;
		        });
    		};

    	};


		//-----------------------------------------------------------------------------
    	this.helpers = new function() {

    		this.copyToClipboard = function(triggerElement) {
				var $this = $(triggerElement);
				if ($this.length > 0) {
					var targetSelector = $this.data("target");
					if (targetSelector !== undefined) {
						var $target = $(targetSelector);
						if ($target.length > 0 ) {
							$target = $target.first(); // Be sure we just get one item
							$target.focus();
							navigator.clipboard.writeText($target.text())
								.then(() => {
									var currentTriggerText = $this.text();
									$this.text(App.i18n.xlat.msg('Copied!'))
									setTimeout(() => { $this.text(currentTriggerText)}, 3000)
								})
						}
					}
				}
			};

            /**
             * SVG LOADER SPINNER
             * Inserts a css3 loader in a dom element.
             * Allows to add custom classes.
             * ie: MP.navigation.helpers.loaderSpinner('.js-my-selector', '.custom-class');
             */
            this.svgLoaderSpinner = function(target, relativeMode, customCSSClasses) {
                var computedLoaderTopPosition = 0;
                var calculateLoaderTopPosition = function($target) {
                    var scrollTop = $(window).scrollTop(),
                        targetTopOffset = $target.length>0 ? $target.offset().top : 0,
                        windowHeight = $(window).height(),
                        relativeTargetTopOffset = targetTopOffset - scrollTop,
                        targetHeight = $target.outerHeight(false),
                        heightBeneathElement = ( scrollTop + windowHeight ) - (targetTopOffset + targetHeight);

                    if (heightBeneathElement < 0) { heightBeneathElement = 0; }
                    if (targetHeight == 0) { computedLoaderTopPosition = 0; return;}
                    var heightToUse = windowHeight - heightBeneathElement;

                    if (relativeTargetTopOffset >= 0){
                        heightToUse -= relativeTargetTopOffset;
                        relativeTargetTopOffset = 0;
                    }

                    computedLoaderTopPosition = (heightToUse)/2 - relativeTargetTopOffset;

                };
                if (relativeMode === undefined) {
                    relativeMode = false;
                }
                if (target === undefined) { target = "body"; }
                var $target;
                if (target instanceof $) {
                    $target = target;
                } else {
                    $target = $(target);
                }
                if (customCSSClasses === undefined) customCSSClasses = "";

                if ($target.attr("data-svg-loader-spinner")==="1") {
                    var $spinnerWrapper = $target.find(".loader-spinner-wrapper");
                    $spinnerWrapper.fadeOut(100, function() {$spinnerWrapper.remove(); });
                    $target.attr("data-svg-loader-spinner","0");
                    return false;
                }
                var $loaderSpinner = $("<div class='vectorial-loader-spinner-wrapper "+(relativeMode ? "" : "overlay-mode")+"'><svg class='vectorial-loader-spinner "+customCSSClasses+"' width='64px' height='64px' viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'><circle class='circle' fill='none' stroke-width='6' stroke-linecap='round' cx='33' cy='33' r='30'></circle></svg></div>");
                // Simple gif: var $loaderSpinner = $("<div class='loader-spinner-wrapper "+(relativeMode ? "" : "overlay-mode")+"'><div class='loader-spinner "+customCSSClasses+"' width='64px' height='64px' ></div></div>");
                if (!relativeMode){
                    calculateLoaderTopPosition($target);
                    if (computedLoaderTopPosition < 0) {return;}
                    $loaderSpinner.find(".svg-loader-spinner").css({top: computedLoaderTopPosition });
                }
                $loaderSpinner.css({display:"none"});
                $target.append($loaderSpinner);
                $loaderSpinner.fadeIn(100);
                $target.attr("data-svg-loader-spinner","1");
            };

            this.closeSvgLoaderSpinner = function(target) {
                if (target === undefined) { target = "body"; }
                var $target;
                if (target instanceof $) {
                    $target = target;
                } else {
                    $target = $(target);
                }
                if ($target.attr("data-svg-loader-spinner")==="1") {
                    var $spinnerWrapper = $target.find(".svg-loader-spinner-wrapper");
                    $spinnerWrapper.fadeOut(100, function() {$spinnerWrapper.remove(); });
                    $target.attr("data-svg-loader-spinner","0");
                    return false;
                }
            };

			this.typeAhead = function(configOverride) {

				var init, ready, self, typeTimeOutInstance;

				// Self reference
				self 	 = this;

				// Global application instance
				this.App	 = App;

				// DOM jQuery objects
				var $input,
					$wrapper,
					$items;

				// Events triggered
				this.config = {
					inputSelector: ".js-typeahead-input",
					itemsWrapperSelector: ".js-typeahead-wrapper",
					typeaheadItemSelector: ".js-typeahead-item",
					timeOutWaitTimeMS : 500,
					filterMinChars : 3,
					onReset : function() {},
					onFilter : function() {}
				};

				/* Private properties */
				init = false; /* Has been initialized? */
				ready = false; /* Has been initialized? */

				/* Debug */
				this.debug = true; // Enables debugging

				// Methods
				//-----------------------------------------------------------------------------

				var bindEventListeners = function() {
					if (ready) return;

					$input.on("keyup change", function(){
						if (typeTimeOutInstance)
							clearTimeout(typeTimeOutInstance);

						typeTimeOutInstance = setTimeout(function() {
							self.filter();
						}, self.config.timeOutWaitTimeMS);
					});

				};

				this.filter = function() {
					var currentText = $input.val().toLowerCase(),
						filterEndControlTimeoutInstance;
					if (currentText.length < self.config.filterMinChars) { self.reset();  return; }
					$wrapper.find( self.config.typeaheadItemSelector + ":not([data-value*='"+currentText+"'])").fadeOut(200);
					$wrapper.find( self.config.typeaheadItemSelector + "[data-value*='"+currentText+"']").fadeIn(200, function() {
						if (filterEndControlTimeoutInstance) { clearTimeout(filterEndControlTimeoutInstance); }
						filterEndControlTimeoutInstance = setTimeout(function() {
							if (typeof self.config.onFilter === "function") {
								self.config.onFilter();
							}
						},200);
					});
				};

				this.reset = function() {
					var resetEndControlTimeoutInstance;
					$items.show(100,function() {
						if (resetEndControlTimeoutInstance) { clearTimeout(resetEndControlTimeoutInstance); }
							resetEndControlTimeoutInstance = setTimeout(function() {
							if (typeof self.config.onReset === "function") {
								self.config.onReset();
							}
						},200);
					});
				};

                this.resetInput = function() {
                    $input.val('');
                };

                this.hardReset = function() {
                    self.reset();
                    self.resetInput();
                };

				// Readiness / initialization / current state
				//-----------------------------------------------------------------------------
				var setConfig = function() {
					if (typeof configOverride === "object") {
						self.config = $.extend(self.config, configOverride);
					}
				};

				this.init = function() {
					if (init) {return;} // Already initialized
					self.App.registerEventListener("ready",function() {self.ready();}); // Register an event listener to the Document Ready event
					// Notify submodules that the Navigation has been initialized
					init = true;
				};
				this.ready = function() {
					if (ready) {return;} // It's already ready!

					setConfig();

					$input = $(self.config.inputSelector);
					if ($input.size() == 0) {return;}
					$wrapper = $(self.config.itemsWrapperSelector);
					$items = $wrapper.find(self.config.typeaheadItemSelector);

					bindEventListeners();

					ready = true;
				};

				this.init();

                return this;

			};

            /**
             * Prevents the browser from automatically scrolling to the hash
             */
            this.preventAutoScrollToHash = function() {
                setTimeout( function() {window.scrollTo(0,0);},1);
            };
            /**
             * Checks the current hash and tries to scroll to it
             */
            this.hashScrollToCheck = function (scrollTime) {
                var $target;
                if (scrollTime===undefined) {scrollTime = 250;}
                if (location.hash && location.hash!=="#") {
                    $target=$(location.hash);
                    if ($target && $target.size()>0) {
                        self.helpers.scrollTo($target,scrollTime,null,{urlTarget:false});
                    }
                }
            };
            this.loaderSpinnerToggle = function(target, darkMode, customCSSClasses) {
                var $target = $(target);
                if (darkMode === undefined) {darkMode = false;}
                if (customCSSClasses === undefined) customCSSClasses = "";
                if ($target.attr("data-loader-spinner")==="1") {
                    $target.find(".loader-spinner").remove();
                    $target.attr("data-loader-spinner","0");
                } else {
                    $target.append("<ul class='loader-spinner "+(darkMode ? "ls-dark":"")+" "+customCSSClasses+"'><li></li><li></li><li></li></ul>");
                    $target.attr("data-loader-spinner","1");
                }
            };

            this.ajaxLoader = function(url, options, callbackOK, callbackKO) {
                var defaultOptions = {};
                if (options===undefined) {
                    options = {};
                }
                options = self.App.lib.extendOptions( defaultOptions, options);
                options.url = url;
                if (typeof callbackOK==="function") {
                    options.success = callbackOK;
                }
                if (typeof callbackKO==="function") {
                    options.error = callbackKO;
                }
                $.ajax(options);
            };

            /**
             * fetchDeferredImagesWithSpinner
             * Method that hiddenly loads the images of the provided container and shows a spinner meanwhile.
             * @param jQuery imagesContainerDOMID
             */
            this.fetchDeferredImagesWithSpinner = function (imagesContainerDOMID) {

                // Local Vars
                var $spinner 		= $('<ul class="loader-spinner ls-dark"><li></li><li></li><li></li></ul>');
                var imgDetectClass  = "js-deferredimg";

                // Function definition
                var _substituteImage = function() {

                    // 'this' here has the context of each image
                    var $item = $(this);

                    // HidingImage
                    $item.hide();

                    // Looking for the data-src attribute of the img
                    if ($item.data()["src"]) {

                        var spinner = $spinner.appendTo($imgContainer);

                        // @todo: self.helpers.loaderSpinnerToggle($submitBtn.parent());
                        $item[0].src = $item.data()["src"];

                        // Only load the img once
                        $item.removeClass(imgDetectClass);
                    }

                    //Trigger onLoad behaviour
                    $item.load(function() {

                        // Showing Item
                        $item.fadeIn(300);

                        // Removing spinner
                        spinner.remove();
                    });
                };

                // Main execution

                if (imagesContainerDOMID instanceof $) {
                    $imgContainer = imagesContainerDOMID;
                } else {
                    $imgContainer = $('#'+ imagesContainerDOMID);
                }

                $imgContainer.find("."+imgDetectClass).each(_substituteImage);

            };

    		/**
    		 * Searches the page for elements and toggles the scrollable behaviour (various operations like preventing the default scroll behaviour when reaching the start/end)
    		 * @param selector       jquery selector or jquery object wich will be made scrollable (styles are not included)
    		 */
    		this.scrollable = function(selector) {
    			if (typeof selector=="undefined") selector = ".js-scrollable";
    			if (selector instanceof $) {
    				scrollables = selector;
    			} else {
    				scrollables = $(selector);
    			}
    			scrollables.each(function() {
    				var $item = $(this);
    				var handlerResult = false;
    				// Bind events to prevent the mousewheel jumping into the document scroll
	    				if (typeof $item.data("binded-mousewheel")=="undefined") {
		    				$item.on("mousewheel DOMMouseScroll",function(evt){
		    					var delta = (evt.originalEvent && (evt.originalEvent.detail < 0 || evt.originalEvent.wheelDelta > 0)) ? 1 : -1; // <0 = down
		    					//console.dir(evt);
		    					//console.log("OK "+($item.scrollTop()+$item.height())+" --- "+this.scrollHeight+" --- "+delta);
		    					if ( (($item.scrollTop()+$item.outerHeight(true)>=this.scrollHeight) && delta < 0) || ($item.scrollTop() === 0 && delta > 0)) {
		    						//console.log("prevented");
		    						evt.preventDefault();
		    						evt.stopPropagation();
		    					} else {
		    						//console.log("not prevented");
		    						if (delta>0) handlerResult = $item.triggerHandler("mousewheel-up");
		    						else handlerResult = $item.triggerHandler("mousewheel-down");
		    						if (handlerResult===false) {
		    							evt.preventDefault();
			    						evt.stopPropagation();
		    						}
		    					}
		    				});
		    				$item.data("binded-mousewheel",1);
	    				}
	    			// Other events / processes, don't forget to store the bind status to prevent it from being attached multiple times...
    			});
    		};

    		/**
    		 * Dispatches callbacks when the scroll of the window (or of a scrollable object) reaches a desired object and it appears on screen
    		 */
    		this.scrollLoader = new function() {
    			var scrollLoaderInstance = this;

                this.doScrollTimeoutId = null;
    			this._listeners = {};
    			this._listenersLength = 0;
    			this._lastListenerId = 0;
    			this._lastScrollerId = 0;
    			this._offset = 100; /* how many px must the loaderPoint enter to trigger the loader */

    			this.add = function(domSelector, domScrollableSelector, callback, offset) {
                    var scrollableObject,
                        loadPointObject,
                        scrollerId;

    				if (typeof offset === "undefined") {
                        offset = this._offset;
                    }

    				scrollableObject = $(domScrollableSelector);
    				loadPointObject = $(domSelector);
    				if (!scrollableObject || scrollableObject.size() === 0 || !loadPointObject
                        || loadPointObject.size() === 0) {
                        return;
                    }

    				scrollerId = this.addScroller(scrollableObject);
                    //loadPointObject.css({visibility:"hidden",height:0});
    				if (typeof this._listeners[("s"+scrollerId)] === "undefined") {
                        this._listeners[("s"+scrollerId)] = {};
                    }
    				this._listeners[("s" + scrollerId)][("l" + (++this._lastListenerId))] = {
    					callback : callback,
    					offset   : offset,
    					target   : loadPointObject
    				};
    				scrollLoaderInstance._listenersLength++;

                    // Do a first load if proceeds
    				this.onScroll(scrollerId, scrollableObject);
    			};
    			/* Adds the scrollable object to the queue of scrollable objects that will be checked for scroll events */
    			this.addScroller = function(scrollableObject) {
    				if (typeof scrollableObject.data("binded-scroll")!="undefined") {
                        return scrollableObject.data("binded-scroll");
                    }
    				scrollableObject.bind("scroll", function() {
                        clearTimeout(scrollLoaderInstance.doScrollTimeoutId);
                        scrollLoaderInstance.doScrollTimeoutId = setTimeout(function() {
                            scrollLoaderInstance.onScroll(scrollableObject.data("binded-scroll"), scrollableObject);
                        }, 75);
    				});
    				scrollableObject.data("binded-scroll", ++scrollLoaderInstance._lastScrollerId);
    				/* If the scrollable object is not the window, attach events to prevent */
    				if (scrollableObject.get(0) !== window) {
                        self.helpers.scrollable(".js-scrollable");
                    }
    				return scrollLoaderInstance._lastScrollerId;
    			};

    			this.onScroll = function(scrollerId, scrollableObject) {
                    var scrollableTop = 0, /* top offset of the scrollable object */
                        scrollableHeight = scrollableObject.height(),
    				    scrollableScrollTop = scrollableObject.scrollTop(),
                        nonScrollZoneHeight,
                        listenerKey,
                        listener,
                        top;

                    /**
                     * For special cases, like in the avatar center when we have part of the body fixed AND part scrollable,
                     * we calculate the outer height of the body and if is smaller than the window we use it.
                     * This properly calculates where is the "real" scroll, not the "body scroll"
                     */
                    if (scrollableObject.get(0) === window) {
                        var bodyHeight = $(document.body).outerHeight(true);
                        if (bodyHeight < scrollableHeight) {
                            scrollableHeight = bodyHeight;
                        }
                    }

    				if (scrollableObject.get(0) != window) {
    					/* We don't need the position, if the scrollable object is not the window
    					   the scroll moves the loadPointObject offset */
    					scrollableScrollTop = 0;
                        /* But we need to take the top offset of the scrollable object as reference */
    					scrollableTop = scrollableObject.offset().top;
    				}

                    nonScrollZoneHeight = scrollableHeight + scrollableScrollTop + scrollableTop;

    				if (scrollLoaderInstance._listenersLength <= 0) {
                        return;
                    }
    				for (listenerKey in scrollLoaderInstance._listeners[("s" + scrollerId)]) {
                        if (!scrollLoaderInstance._listeners[("s" + scrollerId)].hasOwnProperty(listenerKey)) {
                            continue;
                        }

    					listener = scrollLoaderInstance._listeners[("s" + scrollerId)][listenerKey];
    					top = listener.target.offset().top;
    					if (top <= 0) {
                            continue;
                        }

                        if ((nonScrollZoneHeight) >= (top + listener.offset)) {
                        	listener.callback();
                        	listener.target.remove();
                        	scrollLoaderInstance._listenersLength--;
                        	delete scrollLoaderInstance._listeners[("s" + scrollerId)][listenerKey];
                        }
    				}
    			};
    		};

    		this.lazybind = function(target, event, fn, timeout, abort){
			    var timer = null;
			    target.bind(event, function(e){
			        var ev = e;
			        timer = setTimeout(function(){
			            fn(ev);
			        }, timeout);
			    });
			    if(abort == undefined){
			        return;
			    }
			    target.bind(abort, function(){
			        if(timer != null){ clearTimeout(timer); }
			    });
			};


    		/**
    		 * Searches the page for elements and make them sticky to header
    		 * @param element -> jquery selector or jquery object wich will be made sticky (styles not included)
    		 */
    		this.dropDown = new function() {

    			var triggers        = null;
				var dropdownMenus   = null;
				var dropDown 		= this;
				var ddStatus        = false;
				// @todo: improve with array

    			this.onReady = function() {
    				triggers         = $(".js-dropdown");
			 		dropdownMenus    = $('.dropdown-menu');
				    this.attachClick();
    			};

    			this.attachClick = function() {
			        // dropdown closes on outside click
			        $('body').click(overlayClickCallback);
    				return triggers.each(function() {
						var trigger 		= $(this);
						var dropdownMenu 	= $(trigger.attr('data-target'));
						if (dropdownMenu.length === 0) { return true; }
						trigger.click(dropDown.onClick);
						// preventing click propagation on the dropdown
						dropdownMenu.click(function(event){
							event.stopPropagation();
						});
				    });
    			};

				var overlayClickCallback = function(){
					if (ddStatus===false) return;
					triggers.each(function() {
						var trigger = $(this);
						if (trigger.hasClass("active")) {
							trigger.trigger("click"); // No need to manually hide, trigger it's click event to hide it
						}
					});
				};

				var removeDropdownListeners = function(){
					$('body').off("click", overlayClickCallback);
					triggers.each(function() {
						var trigger 		= $(this);
						var dropdownMenu 	= $(trigger.attr('data-target'));
						trigger.off("click", dropDown.onClick);
					});
				};

				this.removeDropdownListeners = removeDropdownListeners;

				this.addDropdown = function(trigger, menu){
					if(!trigger instanceof $){
						trigger = $(trigger);
						if(trigger.length === 0) return false;
					}
					if(!menu instanceof $){
						menu = $(menu);
						if(menu.length === 0) return false;
					}
					// Add to current configuration
					triggers.push(trigger.get(0));
					dropdownMenus.push(menu.get(0));
					removeDropdownListeners();
					dropDown.attachClick();
				};

			    this.onClick = function() {
			        // every opened dropdown closes except the one clicked
			        var trigger 		= $(this);
			        var dropdownMenu 	= $(trigger.attr('data-target'));
			        var src 			= trigger.attr('data-target').replace("#", "");
			        // triggler toggle
			        if(trigger.hasClass('active')) {
			        	ddStatus = false;
			        	trigger.removeClass('active');
			        	dropdownMenu.removeClass('visible');
		                dropdownMenu.trigger('hide'); // trigger an event
			        } else {
			        	ddStatus = true;
			        	triggers.removeClass('active');
			        	dropdownMenus.removeClass('visible');
			        	trigger.addClass('active');
			        	dropdownMenu.addClass('visible');
		                dropdownMenu.trigger('show'); // trigger an event
			        }
			        // @ruben: don't know why this is here... should be elsewhere, now, the dropdownMenu triggers
			        // show/hide events move this to make use of them.
			        // headerMessages init (navbar messages dropdown)
			        if((src == 'dd-header-messages')) {
			            self.helpers.headerMessages();
			        };
			        return false;
			    };
    		};

    		// @todo: deprecate
			this.headerMessages = function() {
			    var triggerConv     = $('.js-conversation');
			    var triggerConvs    = $('.js-conversations');
			    var triggerWrite    = $('.js-message-write');
			    var messagesConts   = $('#dd-header-messages [id*="header-"]');
			    var message         = $('#header-message').hide();
			    var messages        = $('#header-messages').hide(); /*review: deprecated?*/
			    var conversation    = $('#header-conversation').hide();
			    var conversations   = $('#header-conversations').show();
			    triggerWrite.click(function(e) {
			        e.preventDefault();
			        messagesConts.hide();
			        message.show();
			    });
			    triggerConv.click(function(e) {
			        e.preventDefault();
			        messagesConts.hide();
			        conversation.show();
			    });
			    triggerConvs.click(function(e) {
			        e.preventDefault();
			        messagesConts.hide();
			        conversations.show();
			    });
			};

			this.ellipsis = function(target, value) {
			    var ellipsis = $(target);
			    return ellipsis.each(function() {
			        var myShortText = $(this).text().substring(0, value);
			        if ($(this).text().length > value)
			            myShortText += '...';
			        $(this).show().html(myShortText);
			    });
			};

			// tabs
			this.tabs = function(element,options) {

			    var $tabs;
    			if (typeof element == "string") $tabs = $(element);
		    	if (typeof element == "object") {
		    		if (element instanceof jQuery) $tabs = element;
		    		else $tabs = $(element);
				}
			    var hash = window.location.hash;
	    		var defaults = {
	                "urlTarget" 	:  true   // should add target hash to url?
		        };
		        var options = $.extend({}, defaults, options);

			    $tabs.each(function() {
			        var self           = $(this);
			        var $tabsNav       = self.find('.js-tabs-nav');
			        var $tab           = $tabsNav.find('.js-tab');
			        var $content       = self.find('.js-tabs-content');
			        var $pane          = $content.find('.js-tab-pane').hide();
			        var someoneActive  = false;

			        $tab.each(function() {
			            var self    = $(this);
			            var $activableElements = self.find("[data-class-active]");
						$activableElements.each(function() {
							var self = $(this);
							self.attr("data-activable-element","1");
							self.attr("data-class-inactive", self.attr("class"));
						});

			            // Checking if attr is same as hash so we click it
			            if(options.urlTarget) {
				            if(self.attr('href') == hash) {
					            someoneActive = true;
					            // Timeout to wait for dom content
					         	var timeout = setTimeout(function() {
					         		var target 		= $('[href="'+hash+'"]');
									target.click();
					         	}, 100);
				            }
			            }

				        if (typeof self.data().binded!=="undefined") return;
				        self.data().binded = true;
			            var target  = self.attr('href');
			            var targetObj = $(target);
			            if (!someoneActive) {
				            if ( $(this).parent('li').hasClass('active') ) {
				                someoneActive = true;
				                targetObj.addClass("visible").show().trigger('show');
				            };
				        };
			            self.click(function(e) {
			                e.preventDefault();
							$tab.parent().filter(".active").each(function() {
								var self = $(this);
								self.find("[data-activable-element]").each(function() {
									var self = $(this);
									self.attr("class",self.attr("data-class-inactive"));
								});
								self.removeClass("active");
							});
			                // set active tab
				                self.parent('li').addClass('active');
								self.find("[data-activable-element]").each(function() {
									var self = $(this);
									self.attr("class",self.attr("data-class-active"));
								});

			                // set visible pane
				                targetObj.siblings(".visible").removeClass('visible').attr("data-tab-visible",0).hide().trigger("hide");
				                targetObj.addClass('visible').show().trigger('show').attr("data-tab-visible",1);
			                // if trigger has href and is # add it to the url
				                if(options.urlTarget) {
				                	if (typeof target=="undefined") return;
				                	// workaround to avoid change of window location
				                	// @review: not working on ie
				                	if(typeof(history.pushState) == 'function') {
									    history.pushState(null, null, target);
									} else {
									    // location.hash = target;
									}
								}
			            });
			        });

					// if url has not # and none is active set the first one
					if (!someoneActive) {
			            // set first as active
				            var $firstLi = self.find("li").first();
				            $firstLi.addClass('active');
				        // show the first one
				            var $target = $($firstLi.find("a").attr('href'));
			                $target.addClass('visible').show().trigger('show');
			        };

			    });
			};


			this.tabsHScroll = function(element,speed,transition) { // @todo: speed option

		    	var tabs;
    			if (typeof element == "string") tabs = $(element);
		    	if (typeof element == "object") {
		    		if (element instanceof jQuery) tabs = element;
		    		else tabs = $(element);
				}
				if (typeof speed == "undefined") speed = 300;
				var transition 	= 'easeOutExpo';

			    tabs.each(function() {
			        var self           = $(this),
			        	tab            = self.first('.js-tabs-hs-nav').find('.js-tab'),
			        	wrapper        = self.find('.tabs-hs-wrapper'),
			        	content        = self.find('.js-tabs-hs-content'),
			        	tabPane        = content.find('.tab-hs-pane'),
			        	someoneActive  = false,
			        	running 	   = false;

			        // calculating the width and applying to the content
			        var contentWidth=0;
					// tabPane.each(function(){contentWidth += self.width() +
					// 										parseInt(self.css('margin-left')) +
					// 										parseInt(self.css('margin-right')) +
					// 										60; // misterious pixels
					// 									});
					tabPane.each(function(){contentWidth += self.width() + 100; });// misterious pixels
					content.width(contentWidth);

					// tabing fun
			        tab.each(function() {
			            var tab    		= $(this),
			            	$currentTab 	= tab.parent('li');
				        if (typeof tab.data().binded!=="undefined") return;
				        tab.data().binded = true;
			            var target  = $(tab.attr('data-target'));
			            if ( $currentTab.hasClass('active') ) {
			                someoneActive = true;
			                target.show().trigger('show');

			            } else {
			                someoneActive = false;
			            };
			            tab.click(function(e) {
			                e.preventDefault();
			                // preventing if carousel is during animation
			                if(running) return;
			                running = true;
			                // preventing clicks
			                tabs.css({'pointer-events':'none'});
			                // set active tab
			                $currentTab.siblings('.active').removeClass('active');
			                $currentTab.addClass('active');
			                target.siblings('.visible').removeClass('.visible').trigger("hide");
			                target.addClass('visible').trigger("show");
			                // wrapper.height(target.height());
			                // console.log(target.height());
			                // set visible pane
				            // target.siblings('.visible').removeClass('.visible').css({ 'opacity' : 0, 'height' : '1px', 'overflow' : 'hidden'}).trigger("hide");
				            // target.css({ 'opacity' : 1, 'height' : 'auto', 'overflow' : 'auto'}).addClass('visible').trigger('show');
			            	content.animate({"left": -(target.position().left) }, speed, transition, function(){
				            	running = false;
				                // preventing clicks
				                tabs.css({'pointer-events':'auto'});
				            });
			            });
			        });
			        if (!someoneActive) {
			            // set first as active
			            // wrapper.height(self.find('li').first().height());
			            tab.parent().removeClass('active');
			            tab.parent().first().addClass('active');
			            tabPane.removeClass('visible');
			            tabPane.first().addClass('visible').trigger("show");

			            // var firstTab	= self.find('li').first();
			            // var firstPane 	= self.find('.tab-hs-pane').first();
			            // showing first pane, avoiding height of the rest;
			            // firstPane.siblings().css({ 'opacity' : 0, 'height' : '1px', 'overflow' : 'hidden'}).removeClass('visible');
			            // firstPane.css({ 'opacity' : 1, 'height' : 'auto', 'overflow' : 'auto'}).addClass('visible').trigger("show");
			        }
			    });
			};

			/**
    		 * Searches the page for elements and toggles the expandable behaviour
    		 * @param selector      jquery selector or jquery object wich will be made expandable (styles are not included)
    		 */
			this.expandable = function(selector) {
				var autoExpanderCount=0;
				var maxAutoExpanderCount=15; // Max number of auto expanders per batch
				var autoExpanderDelay=50; // Milliseconds
				if (typeof selector=="undefined") selector = ".js-expander";
    			if (selector instanceof $) {
    				$expander = selector;
    			} else {
    				$expander = $(selector);
    			}
			    // preventing clicks from inner links
			    $expander.find('a').click(function(e){ e.stopPropagation(); });
			    $expander.each(function() {
			        var $trigger = $(this);
			        var $target;
			        if (typeof $trigger.data()['expander-binded']!="undefined") return; // Prevent binding the same events multiple times
			        $trigger.data()['expander-binded']=true;
			        $target = $($trigger.attr('data-target'));
			        $trigger.data().binded = true;
			        $trigger.click(function(e) {
			            // preventing click if target is <a>
			            if($trigger.is('a')){ e.preventDefault(); }
			            if($target.hasClass('visible')) {
			            	$trigger.removeClass('active');
			                $target.removeClass('visible');
			                $target.trigger("hide"); // Allows us to capture the hide event
			            } else {
			            	$trigger.addClass('active');
			                $target.addClass('visible');
			                $target.trigger("show"); // Allows us to capture the show event
			            };
			        });
			        if ($trigger.is('.js-auto-expander')) {
			        	if (autoExpanderCount<maxAutoExpanderCount) {
				        	autoExpanderCount++;
			        		setTimeout(function() {$trigger.click();},autoExpanderDelay*autoExpanderCount);
			        	}
			        }
			    });
			};

			this.scrollTo = function(selector,speed,callback,options){

	    		var defaults = {
	                urlTarget 	:  true,   // should add target hash to url?
                    additionalOffset : 0,
					animationEasing : "easeOutExpo"
		        };
		        var options = $.extend({}, defaults, options);

			    var $target		= selector instanceof $ ? selector:$(selector);
			    var headerSize 	= $('.navbar').height();
			    var canvas 		= $('html,body');
			    if (!$target || $target.length === 0) return;
			    if (typeof speed == "undefined") speed = 300;
			    if (typeof callback == "undefined") callback=function() {};
			    canvas.animate({scrollTop: $target.offset().top - ( headerSize + options.additionalOffset )},speed,options.animationEasing,callback);

			    // Adding # to url
				    var hash = window.location.hash;
	                if(options.urlTarget) {
	                	if (typeof selector=="undefined") return;
	                	if(typeof(history.pushState) == 'function') {
						    history.pushState(null, null, selector);
						} else {
						    location.hash = selector;
						}
					}
			};

			this.linkObfuscator = function() {
				var self = this;

				var config = {
					elementSelector : '.js-l-shredder',
					attributeName : 'data-target',
					plainAttributeName : 'data-target-plain'
				};

				var bindEventListeners = function() {
					// Deferred listener
					var $delegateTarget = $('body');
					self.bindEventOnCustomTarget($delegateTarget, true);
				};

				var clickFn = function(e) {
					e.stopPropagation();
					var $this = $(this);
					//if ($this.is("redeemed")) { return false; }
					var target = $this.attr(config.attributeName);
					var targetPlain = $this.attr(config.plainAttributeName);
					if (target && (targetPlain== undefined || !targetPlain)) {
						targetPlain = atob(target);
					}
					var targetBlank = !!($this.attr("target") === "_blank");
					if (targetPlain !== undefined && targetPlain) {
						if (targetBlank) {
							window.open(targetPlain, "_blank");
						} else {
							window.location.href = targetPlain;
						}
						//$this.addClass("redeemed");
					}
				};

				this.bindEventOnCustomTarget = function ($target) {
					if (!$target instanceof $) { $target = $($target); }
					$target.on('click', config.elementSelector, clickFn);
					//$target.find('a'+config.elementSelector).addClass("binded");
				};

				this.ready = function() {
					bindEventListeners();
				};

				this.init = function() {
					App.registerEventListener("ready",function() {
						self.ready();
					});
				};

				self.init();

				return {
					bindEventOnCustomTarget: self.bindEventOnCustomTarget
				};

			};

            this.scrollNav = function() {

                var self = this;
                var helpers = App.navigation.helpers;

                var config = {
                    wrapperSelector : '.js-scroll-nav'
                };

                var bindEventListeners = function() {
                    // Scrollers
                    $(config.wrapperSelector).on('click', 'a', function(e){
						var href = $(this).attr("href");
                        var additionalOffset = $(this).parents(config.wrapperSelector).data("offset");
                        if (additionalOffset === undefined) additionalOffset = 0;
						if (href !== undefined && href.substring(0, 1) == "#") {
							e.preventDefault();
							e.stopPropagation();
							helpers.scrollTo(href, 900, undefined, {additionalOffset: additionalOffset});
						}
                    });
                };

                this.ready = function() {
                    bindEventListeners();
                };

                this.init = function() {
                    App.registerEventListener("ready",function() {
                        self.ready();
                    });
                };

                self.init();

            };

			this.affix = function(selector, configOverride) {
				var self = this,
                    fn;

                self.$element = null;
                self.offset = null;
                self.$window = $(window);
                self.affixed = null;
                self.unpin = null;

                var config =  {
                    defaultSelector: ".js-affix",
                    topOffsetDeviation: 0,
                    bottomOffsetDeviation: 0,
                    affix: "affix",
                    topFlag: "top",
                    bottomFlag: "bottom",
                    bottomOffset : function() {}
                };

				self.checkPosition = function () {
					if (!self.$element.is(':visible')) return;

                    var scrollHeight = $(document).height(),
						scrollTop = self.$window.scrollTop(), // Scroll Top position
						position = self.$element.offset(), // Element offset
						offsetBottom = self.offset.bottom,
						offsetTop = self.offset.top,
						reset = config.affix + " " + config.affix + "-" + config.topFlag + " " + config.affix + "-" + config.bottomFlag,
						affix;

                    // If offset is not an object, set the values
					if (typeof self.offset != 'object') offsetBottom = offsetTop = self.offset;
                    // If top / bottom are functions, call them to get the value
					if (typeof offsetTop == 'function') offsetTop = self.offset.top();
					if (typeof offsetBottom == 'function') offsetBottom = self.offset.bottom();

                    //console.log("---------------");
                    //console.log("scrollTop: " +scrollTop);
                    //console.log("unpin: "+self.unpin);
                    //console.log("Element Top Position: " + position.top);
                    //console.log("Element Height: " + self.$element.height());
                    //console.log("OffsetBottom: "+offsetBottom);
                    //console.log("OffsetTop: "+offsetTop);
                    //
                    //console.log("BOTTOM LOGIC: scrollTop("+scrollTop+") + elementHeight("+self.$element.height()+") >= scrollHeight("+scrollHeight+") - offsetBottom("+offsetBottom+")");
                    //console.log("BOTTOM LOGIC: "+(scrollTop+self.$element.height())+" >= "+(scrollHeight-(offsetBottom+ config.bottomOffsetDeviation))+" ?");

                    if ( self.unpin != null && (scrollTop + self.unpin <= position.top) ) {
						affix = false;
                    } else if ( offsetBottom != null && (scrollTop + self.$element.height() + self.$element.position().top >= scrollHeight - ( offsetBottom + config.bottomOffsetDeviation ) )) {
                        affix = config.bottomFlag;
                    } else if ( offsetTop != null && scrollTop <= offsetTop + config.topOffsetDeviation) {
                        affix = config.topFlag;
                    } else {
                        affix = false;
                    }

                    //console.log("AFFIX RESULT: "+affix);

                    // If the affix is the same as the previous one, ignore it
					if (self.affixed === affix) return;

                    // Set the new last status
                    self.affixed = affix; // false, top, bottom

					// console.log("affix result: "+affix);

					self.unpin = affix == 'bottom' ? position.top - scrollTop : null;
					self.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''));

				};

                var setConfig = function() {
                    config = $.extend(config,configOverride);
                };

				var init = function() {

                    setConfig();

                    if (typeof selector=="undefined") selector = config.defaultSelector;

                    fn = $.proxy(self.checkPosition, self);

                    if (selector instanceof $) {
						self.$element = selector;
					} else {
						self.$element = $(selector);
					}

                    self.offset = self.$element.offset();
                    self.offset.bottom = config.bottomOffset;

                    self.$window.on('scroll.affix', fn);

					self.checkPosition();
				};

				init();

				return {
					remove: function() {
						self.$element.removeClass('affix');
						self.$window.off('scroll.affix', fn);
					},
					checkPosition: self.checkPosition
				};

			};

			this.scrollSpy = function(selector, optionsOverride) {

				// Self reference
				var self = this.scrollSpy;

				// Default options
				var options = { offset: 10 };
				var refreshTimeout = null;

				// Working objects & control vars
                self.offsets = [];
                self.targets = [];
				self.activeTarget = null;

				// DOM jQuery Objects & Selectors
				self.selector = selector + ' li > a';
				self.$body = $('body');

				/**
				 * Fetch total scroll window height
				 * @returns {number}
				 */
                self.getScrollHeight = function () {
					return self.$scrollElement[0].scrollHeight || Math.max(self.$body[0].scrollHeight, document.documentElement.scrollHeight);
                };

				/**
				 * Refresh Method
				 */
                self.refresh = function () {
                    var offsetMethod = 'offset';
                    var offsetBase = 0;

                    self.scrollHeight = self.getScrollHeight();

                    if (!$.isWindow(self.$scrollElement[0])) {
                        offsetMethod = 'position';
                        offsetBase = self.$scrollElement.scrollTop();
                    }

                    self.$body
                        .find(self.selector)
                        .map(function () {
                            var $el = $(this);
                            var href = $el.data('target') || $el.attr('href');
                            var $href = /^#./.test(href) && $(href);

                            return ($href
                                && $href.length
                                && $href.is(':visible')
                                && [[$href[offsetMethod]().top + offsetBase, href]]) || null;
                        })
                        .sort(function (a, b) {
                            return a[0] - b[0]
                        })
                        .each(function () {
                            self.offsets.push(this[0]);
                            self.targets.push(this[1]);
                        });

                };

				/**
				 * Process method, called on Scroll
				 * @returns {*}
				 */
                self.process = function () {
                    var scrollTop = self.$scrollElement.scrollTop() + options.offset;
                    var scrollHeight = self.getScrollHeight();
                    var maxScroll = options.offset + scrollHeight - self.$scrollElement.height();
                    var offsets = self.offsets;
                    var targets = self.targets;
                    var activeTarget = self.activeTarget;
                    var i;

                    if (self.scrollHeight != scrollHeight) {
						if (refreshTimeout) clearTimeout(refreshTimeout);
						refreshTimeout = setTimeout(function() { self.refresh(); }, 200);
					}

                    if (scrollTop >= maxScroll) {
                        return activeTarget != (i = targets[targets.length - 1]) && self.activate(i);
                    }

                    if (activeTarget && scrollTop < offsets[0]) {
                        self.activeTarget = null;
                        return self.clear();
                    }

                    for (i = offsets.length; i--;) {
                        activeTarget != targets[i]
                        && scrollTop >= offsets[i]
                        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
                        && self.activate(targets[i])
                    }
                };

                self.activate = function (target) {

					self.activeTarget = target;
                    self.clear();

                    var specificSelector = self.selector + '[href="' + target + '"]'

                    var active = $(specificSelector)
                        .parents('li')
                        .addClass('active');

                };

				/**
				 * Clear active element
				 */
                self.clear = function () {
                    $(self.selector)
                        .parent('.active')
                        .removeClass('active')
                };

				/*****************
				 * INITIALISATION
				 *****************/

				var init = function() {
					if (typeof selector=="undefined") selector = ".js-scroll-spy";
					if (selector instanceof $) {
						self.$element = selector;
					} else {
						self.$element = $(selector);
					}
                    options = $.extend({}, options, optionsOverride);
					var process = $.proxy(self.process, self),
						$element = $(window);

					self.$scrollElement = $element.on('scroll', process);
					setTimeout(function() {
						self.refresh();
						self.process();
					}, 2000);


				};

				init();

			};


			this.autoScroll = function(selector, optionsOverride) {

				// Self reference
				var self = this.autoScroll;
				var helpers = App.navigation.helpers;

				// Default options
				var options = {
					offset: 10,
					headerOffset: $('.navbar').height()
				};

				var locked = false;
				var keyCodeMap = {
					38: "up",
					40: "down",
				};

				// Working objects & control vars
				self.offsets = [];
				self.targets = [];
				self.activeTarget = null;

				// DOM jQuery Objects & Selectors
				self.selector = selector + ' li > a';
				self.$body = $('body');
				self.$window = $(window);


				/**
				 * Refresh Method
				 */
				self.refresh = function () {
					var offsetMethod = 'offset';
					var offsetBase = 0;

					// self.scrollHeight = self.getScrollHeight();

					if (!$.isWindow(self.$scrollElement[0])) {
						offsetMethod = 'position';
						offsetBase = self.$scrollElement.scrollTop();
					}

					self.$body
						.find(self.selector)
						.map(function () {
							var $el = $(this);
							var href = $el.data('target') || $el.attr('href');
							var $href = /^#./.test(href) && $(href);

							return ($href
								&& $href.length
								&& $href.is(':visible')
								&& [[$href[offsetMethod]().top + offsetBase, href]]) || null;
						})
						.sort(function (a, b) {
							return a[0] - b[0]
						})
						.each(function () {
							self.offsets.push(this[0]);
							self.targets.push(this[1]);
						});

					console.log(self.offsets);
					console.log(self.targets);

				};

				/**
				 * Process method, called on Scroll
				 * @returns {*}
				 */
				self.process = function (direction, event) {

					var directionIndex;
					switch(direction) {
						case "down":
							directionIndex = -1;
							break;
						case "up":
							directionIndex = 1;
							break;
						default:
							return self.unlock();
					}

					var scrollTop = self.$scrollElement.scrollTop() + ( options.offset + options.headerOffset );
					// var scrollHeight = self.getScrollHeight();
					// var maxScroll = options.offset + scrollHeight - self.$scrollElement.height();
					var offsets = self.offsets;
					var targets = self.targets;
					var activeTarget = self.activeTarget;
					var windowHeight = self.$window.height();
					var i;

					//for (i=offsets.length; i--;) {
					//	if (scrollTop <= offsets[i] && scrollTop) {}
					//	activeTarget != targets[i]
					//	&& scrollTop >= offsets[i]
					//	&& (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
					//	&& self.activate(targets[i])
					//}

					//if (scrollTop >= maxScroll) {
					//	return activeTarget != (i = targets[targets.length - 1]) && self.activate(i);
					//}

					// Case before
					if (activeTarget && scrollTop < offsets[0]) {
						self.activeTarget = null;
						return self.unlock();
					}

					var prevTarget;
					var nextTarget;
					for (i = offsets.length; i--;) {
						if (scrollTop<offsets[i]) {
							console.log("Next Target found: scrollTop is " + scrollTop + " and Next Offset is " + offsets[i]);
							nextTarget = targets[i];
						}
						if (scrollTop>offsets[i] && !prevTarget) {
							console.log("Prev Target found: scrollTop is " + scrollTop + " and Prev Offset is " + offsets[i]);
							prevTarget = targets[i];
						}
					}

					if (nextTarget && direction == "down") {
						console.log("direction down, about to prevent Default. Next Target is: " + nextTarget);
						event.preventDefault();
						return self.scrollTo(nextTarget);
					}

					if (nextTarget && direction == "up") {
						console.log("direction up, about to prevent Default. Prev Target is: " + prevTarget);
						event.preventDefault();
						return self.scrollTo(prevTarget);
					}

					return self.unlock();

					//for (i = offsets.length; i--;) {
					//	activeTarget != targets[i]
					//	&& scrollTop >= offsets[i]
					//	&& (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
					//	&& self.scrollTo(targets[i + directionIndex] )
					//}
				};

				self.shouldBlockScroll = function() {
					var scrollTop = self.$scrollElement.scrollTop() + options.offset;
					var activeTarget = self.activeTarget;
					if (!activeTarget) activeTarget = self.fetchActiveTargetFromPosition(scrollTop);
					var activeTargetHeight = $(activeTarget).outerHeight();
					var activeTargetIndex = self.targets.indexOf(activeTarget);
					var activeTargetOffsetTop = self.offsets[activeTargetIndex];
				};

				self.fetchActiveTargetFromPosition = function(scrollTop) {

				}

				self.scrollTo = function (target) {

					self.activeTarget = target;

					if (target.substring(0,1) == "#") {
						helpers.scrollTo(target, 1300, self.unlock, {additionalOffset: options.offset});
					}

				};


				self.unlock = function() { console.log("UNLOCKED!"); locked = false; }

				self.keyUpHandler = function(event) {
					var key = event.which || event.keyCode;
					switch (key) {
						case 38:
							self.process("up", event);
							break;
						case 40:
							self.process("down", event);
							break;
					}
				};

				/*****************
				 * INITIALISATION
				 *****************/

				var init = function() {
					if (typeof selector=="undefined") selector = ".js-auto-scroll";
					if (selector instanceof $) {
						self.$element = selector;
					} else {
						self.$element = $(selector);
					}
					options = $.extend({}, options, optionsOverride);
					//var process = $.proxy(self.process, self),

					self.$scrollElement = self.$window.on('mousewheel keydown', function(ev) {
						if (locked) { console.log("LOCKED!"); return false; }
						if (ev.type == "mousewheel") {
							locked = true;
							if(ev.originalEvent.wheelDelta /120 > 0) { // Up
								self.process("up", ev);
							}else{ // Down
								self.process("down", ev);
							}
							//ev.preventDefault();
						} else if (ev.type == "keydown") {
							locked = true;
							self.keyUpHandler(ev);
							//ev.preventDefault();
						}

					});

					self.refresh();

				};

				init();

			};

			this.placeholder = function() {
		        var body    = $('body'),
		        	input   = $('.placeholder input');

		        var placeholderVisibility = function(thisInput) {
		            if(thisInput.val() == '') {
		                thisInput.siblings("label").show();
		            } else {
		                thisInput.siblings("label").hide();
		            }
		        }
		        input.each(function() {
		        	thisInput = $(this);
		        	placeholderVisibility(thisInput);
		        });
		        body.delegate('.placeholder [class*="input-"]', 'focus', function(){
		            $(this).parent().find("label").fadeOut(100);
		        });
		        body.delegate('.placeholder [class*="input-"]', 'blur', function(){
		            if(this.value == '') {
		                $(this).parent().find("label").fadeIn(100);
		            } else {
		                $(this).parent().find("label").hide();
		            }
		        });
		        setTimeout(function(){
		        	var activated;
					if (this.activated === true) { return } else {
						this.activated = true;
			        	self.helpers.placeholder();
		        	};
		        }, 100);
		    };

		    

			// expanding trophy cards on profile @review: place on profile module
			this.cardExpand = function() {
				var trophies 		= $('.l-trophies > li');
				var globalTrigger 	= $('.js-expand-cards');
				var cards 			= $('.card-expandable');
		        trophies.each(function() {
		        	var trophy = $(this);
		            trophy.click(function(e) {
		                e.preventDefault();
		                trophy.find('.card-expandable').toggleClass('expanded');
		            });
		        });
		        // expand all
		        globalTrigger.click(function(e) {
		            e.preventDefault();
		            globalTrigger.toggleClass('expanded');
		            if(globalTrigger.hasClass('expanded')) {
		                cards.addClass('expanded');
		                globalTrigger.html('Collapse all');
		            } else {
		                cards.removeClass('expanded');
		                globalTrigger.html('Expand all');
		            }
		        })
		    };

			// @review: place on profile module
			this.profileAvatarEnlarger = function() {
				
				var self 	= this;

				var status 	= null;
				var speed 	= 160;

				var $enlarger    	= $('.js-profile-enlarge');
				var $enlargable		= $('.profile-canvas');
				var $canvas			= $enlargable.find('.profile-full-img');
				var $image1x		= $canvas.find('#cover-image-1x');
				var $spinner 		= $('<ul class="loader-spinner"><li></li><li></li><li></li></ul>');
                var $image2x;

				this.create = function() {
			        // creating the big image
			        	$image2x = $('<img/>', {'id':'cover-image-2x', 'src' : $image1x.attr('data-src-zoom') }).appendTo($canvas);
			        // adding spinner
			        	$canvas.append($spinner);
			        // when the big image is loaded:
				        $image2x.load(function() {
							// remove spinner
						    	$spinner.remove();
						    // enlarging
						    	self.enlarge();
						}).error(function() {
							// remove spinner in case of error
								$spinner.remove();
						});
				};
				this.enlarge = function() {
					// changing status
						status = 'large';
					// switching images
						$image2x.show();
						$image1x.hide();
			        // animation

        			// showing the big image (a little waiting to smooth things)
        				var timeout=setTimeout(function(){
							$enlargable.animate({ 'height' : 410}, speed);
				        	$canvas.animate({ 'height' : 450}, speed);
				        	$image2x.animate({ 'width' : 2000, 'margin-left' : -500, 'margin-top' : -110 }, speed);
    					},100);
			        	
				};
				this.shorten = function() {
					// changing status
						status = 'small';
			        // animation
			        	$enlargable.animate({ 'height' : 230}, speed);
			        	$canvas.animate({ 'height' : 270}, speed);
			        	$image2x.animate({ 'width' : 1000, 'margin-left' : -10, 'margin-top' : -20 }, speed, 
							        		function(){
							        			// switching images
							        				$image2x.hide();
							        				$image1x.show();
							        		});
				};
			    $enlarger.click(function(e){
			    	if($enlarger.is('a')){ e.preventDefault(); } // preventing link click (just in case)
			    	if(status == null) {
			        	self.create();
			        }else if(status == 'small') {
			        	self.enlarge();
			        } else if(status == 'large') {
			        	self.shorten();
			        }
			    });
			};

			this.resizePopup = function(element) {

				if (typeof element=="undefined") return;
            
		        var $dialog = $(element);
		        var dialogWidth = $dialog.width() + 
		                              parseInt($dialog.css("padding-left")) +
		                              parseInt($dialog.css("padding-right")) + 
		                              80; // security distance for browsers
		        var dialogHeight = $dialog.height() + 
		                              parseInt($dialog.css("padding-top")) +
		                              parseInt($dialog.css("padding-bottom")) +
		                              $('.navbar').height() +  // navbar height
		                              140; // security distance for browsers
		        
		        window.resizeTo(dialogWidth,dialogHeight);

			};

    		/**
    		 * Searches the page for elements and make them sticky to header
    		 * @param element -> jquery selector or jquery object wich will be made sticky (styles not included)
    		 */
            this.stickyAside = function(element) {

                var $aside 			= $(element),
                	$asideSibling 	= $aside.parent().siblings('.col-8'),
                	$asideInner 	= $aside.children().first(),
                    $window 		= $(window),
                    $navbar 		= $('.navbar'),
                    $footer 		= $('.main-footer'),
                    $wrapper 		= $aside.parent(),
                    offset 			= $aside.offset(),
                    $container 		= $aside.parents('.container'),
                    contOffset 		= $container.offset(),
                    $contFooter 	= $container.find('footer'),
                    contHeight,
                    contFooterHeight,
                    footerOffset,
                    navbarHeight,
                    asideHeight,
                    topLimit,
                    bottomLimit;
				
				if($navbar.length<1 || $footer.length<1 || $aside.length<1) return;

				function calculateLimits() {

					// do not make changes if aside is larger than sibling content
					if($aside.height() >= ($asideSibling.height()+20)) {
						$wrapper.height('auto');
						return false;
					}

                    footerOffset 		= $footer.offset();
                    navbarHeight 		= $navbar.height();
                    asideHeight 		= $aside.height();
                    contHeight 			= $container.height();
                    contFooterHeight	= $contFooter.height();

                    // Calc limits
					topLimit  	= offset.top - navbarHeight - parseInt($asideInner.css("margin-top"));
	                bottomLimit = contOffset.top +
	            					(contHeight + 28) -
	            					contFooterHeight -
	            					(asideHeight +  
	                                    parseInt($aside.css("padding-top")) +
	                                    parseInt($aside.css("padding-bottom")) +
	                                    navbarHeight +
	                                    20 +    // container padding
	                                    28);    // section margin

					$wrapper.height(asideHeight+20);
				};
				// calculating the limits
					calculateLimits();
                // on scroll...
	                $window.scroll(function () {
	                    if ($window.scrollTop() > topLimit) {
	                    	// sticking to top
	                        $aside.addClass("sticky").css({'position':'fixed','top':navbarHeight});
	                        // bottom limit
	                        if (bottomLimit < $window.scrollTop()) {
	                        	// setting limited sidebar
	                            var diff = bottomLimit - $window.scrollTop();
	                            $aside.css({top: diff + navbarHeight});
	                        };
	                    } else {
	                    	// natural position
	                        $aside.removeClass("sticky").css({'position':'static','top':'auto'});
	                    };
	                });
	            // safe timeouts to recalculate the limits
	            	var interval =setInterval(function(){calculateLimits();},500);
            };

			/**
    		 * Searches the page for game item and hide or show it depending on browser
    		 * Used to fix overlay issue when param wmode=direct on certain browsers (ie9 and...)
    		 */
            this.directVisibility = new function() {
            	
            	this.hideVisibility = function() {
	            	return false;
	            	// vars
	            		var $game = $('#game'),
	            			$gameDomElement = $game.find('#game-player-wrapper'), // dom element to hide/show
	            			playerType = $game.attr('data-player-type'); // player type ('FLASH','SHOCKWAVE','UNITY','VIDEO','IFRAME')
	            		
            		// checking browser (if not ie9, ie8) & SO + browser (if windows + firefox)
		        		if(($.browser.msie && parseInt($.browser.version) === 9) // ie9
        				|| ($.browser.msie && parseInt($.browser.version) === 8 ) // ie8
	        			|| (navigator.appVersion.indexOf("Win")!=-1 && $.browser.mozilla) // firefox in win
	        			|| (navigator.appVersion.indexOf("Win")!=-1 && (playerType === "UNITY" || playerType === "IFRAME")) ) // If in win game type is unity or iframe (there could be a unity monster inside)
	        			{
			            	// checking if dom element exists
			            		if($gameDomElement.length<1) return;	
							// hiding dom element
								$gameDomElement.css({'visibility':'hidden'});
							// showing paused message
								$('#game-player-msg').show();
						};
            	};
            	this.showVisibility = function() {
					return false;
	            	// vars
	            		var $game = $('#game'),
	            			$gameDomElement = $game.find('#game-player-wrapper'), // dom element to hide/show
	            			playerType = $game.attr('data-player-type'); // player type ('FLASH','SHOCKWAVE','UNITY','VIDEO','IFRAME')

            		// checking browser (if not ie9, ie8) & SO + browser (if windows + firefox)
		        		if(($.browser.msie && parseInt($.browser.version) === 9) // ie9
        				|| ($.browser.msie && parseInt($.browser.version) === 8 ) // ie8
	        			|| (navigator.appVersion.indexOf("Win")!=-1 && $.browser.mozilla) // firefox in win
	        			|| (navigator.appVersion.indexOf("Win")!=-1 && (playerType === "UNITY" || playerType === "IFRAME")) ) // If in win game type is unity or iframe (there could be a unity monster inside)
	        			{
			            	// checking if dom element exists
			            		if($gameDomElement.length<1) return;	
							// showing dom element
								$gameDomElement.css({'visibility':'visible'});
							// hiding back paused message
								$('#game-player-msg').hide();
						};
            	};
            };

			/**
			 * USAGE
			 * onclick="MP.navigation.helpers.pwa.showInstallDialog(this);"
			 */
			this.pwa = new function() {

				var selfPwa = this;

				var config = {
					wrapperSelector : ".install-pwa-disclaimer",
					carouselSlideSelector : ".pwa-carousel-slide",
				};
				var deferredPrompt; /** @var deferredPrompt Event **/

            	this.showInstallDialog = function(el) {
            		//ev.preventDefault();
            		if (typeof deferredPrompt === "object" && typeof deferredPrompt.prompt === "function") {
            			deferredPrompt.prompt().then(function(params) {
            				if (params.hasOwnProperty("outcome") && params.outcome === "accepted") {
								$(config.wrapperSelector).remove();
							}
						});
            		}
				};

            	// Add listener
				window.addEventListener('beforeinstallprompt', function(ev) {
					$(config.wrapperSelector).show().css("opacity", 1);
					deferredPrompt = ev;
				});

				App.registerEventListener("ready", function() {
					$(config.carouselSlideSelector).on("click", ".btn.btn-play, a.bg-wrapper", function(ev) {
						ev.preventDefault();
						selfPwa.showInstallDialog();
					});
				});

			};

    	};

    	//-----------------------------------------------------------------------------
    	this.header = new function() {

		    // this.subNav = function() {
		    //     $('.subnav').each(function() {
		    //         var $level0  = $(this),
		    //         	$level1  = $level0.find('.sn-lvl-1'),
		    //         	$level2  = $level1.find('.sn-lvl-2'),
		    //         	$hscroll = $level0.find('.js-tabs-hscroll'),
		    //         	$title 	 = $level0.find('.title'),
		    //         	scheduleShowNavTimeout;

		    //         $level0.hover(function(){ $title.addClass('active'); });

			   //      this.scheduleShowNav = function(){
						// clearTimeout(scheduleShowNavTimeout);
			   //          scheduleShowNavTimeout = setTimeout(this.showNav, 160);
			   //      };
		    //         this.showNav = function(){
		    //             $level1.addClass('active');
		    //             $level2.removeClass('active');
		    //             $level2.first().addClass('active');
		    //             // $level1.addClass('short');
			   //          $level2.hover(function(){
			   //          	var $this   = $(this);
			   //              $level2.removeClass('active');
			   //              $this.addClass('active');
			   //          });
				  //       // $level2.mouseleave(function(){
			   //       //    	$level1.removeClass('short');
			   //       //        $level2.removeClass('active');
				  //       // });
				  //       // @todo: set tabs scroll trigger...
				  //       self.helpers.tabsHScroll($hscroll,300);
				  //       // trigger hide game in older browsers
				  //       	App.navigation.helpers.directVisibility.hideVisibility();
		    //         };
		    //         this.hideNav = function(){
		    //             // $level0.removeClass('short');
		    //             $level1.removeClass('active');
		    //             $title.removeClass('active');
		    //             clearTimeout(scheduleShowNavTimeout);
		    //             // trigger hide game in older browsers
		    //             	App.navigation.helpers.directVisibility.showVisibility();
		    //         };
		    //         this.init = function(){
		    //         	// on hover schedule to show nav
		    //         		$level0.hover(this.scheduleShowNav);
		    //         	// on leave hide nav
		    //         		$level0.mouseleave(this.hideNav);
		    //         };
		    //         this.init();
		    //     });
		    // };

		    /*this.subNav = function() {
		        $('.subnav').each(function() {
		            var $level0  = $(this),
		            	$level1  = $level0.find('.sn-lvl-1'),
		            	$level2  = $level1.find('.sn-lvl-2'),
		            	$hscroll = $level0.find('.js-tabs-hscroll'),
		            	$title 	 = $level0.find('.title');

		            $level0.hover(function(){ $title.addClass('active'); });

		            this.showNav = function(){
		                $level1.addClass('active');
		                $level2.removeClass('active');
		                $level2.first().addClass('active');

			            $level2.hover(function(){
			            	var $this   = $(this);
			                $level2.removeClass('active');
			                $this.addClass('active');
			            });
				        // set tabs scroll trigger
				        	self.helpers.tabsHScroll($hscroll,300);
				        // trigger hide game in older browsers
				        	App.navigation.helpers.directVisibility.hideVisibility();
		            };
		            this.hideNav = function(){
		                $level1.removeClass('active');
		                $title.removeClass('active');
		                // trigger hide game in older browsers
		                	App.navigation.helpers.directVisibility.showVisibility();
		            };
		            this.init = function(){
		            	// on click show nav
		            		$title.click(this.showNav);
		            	// on leave hide nav
		            	    $level0.mouseleave(this.hideNav);
		            };
		            this.init();
		        });
		    };*/

            this.subNav = function() {
                $('header').find('.subnav').each(function() {
                    var $level0  = $(this),
                        $level1 = $level0.find('.sn-lvl-1'),
                        subnav = this,
                        $title 	 = $level0.find('.title'),
                        loaded = false,
                        dataTitle = $level0.data("title");

                    this.getLevel2 = function() {
                        return $level0.find('.sn-lvl-2');
                    };
                    this.getHscroll = function() {
                        return $level0.find('.js-tabs-hscroll');
                    };
                    this.onShowNav = function() {
                        /* Handle asynchronous content loading if needed */
                        if (loaded) {
                            subnav.doShowNav();
                        } else {
                            subnav.load(subnav.doShowNav);
                        }
                    };
                    this.load = function(callback) {
                        var $target;
                        if (typeof callback!=="function") {
                            callback  = function() {};
                        }
                        /* Must any content be asynchronously loaded?, load it and continue afterwards */
                        if (!loaded && $level0.data("url")!==undefined && $level0.data("url").length>0 && $level0.data("target")!==undefined ) {
                            $target = $level0.find($level0.data("target"));
                            $level1.addClass('active');
                            /* @todo move this inner styles to css */
                            $target.html('<div class="inner" style="width:300px;height:100px"><ul class="loader-spinner ls-dark"><li></li><li></li><li></li></ul></div>');
                            $.ajax({
                                // the URL for the request
                                url : $level0.data("url"),
                                success : function(response) {
                                    loaded = true;
                                    $level0.data("url",false);
                                    $level0.data("target",false);
                                    $target.html(response);
                                    self.fetchDeferredImages($target); /* In case it has any deferred images */
                                    callback();
                                },
                                error: function () {
                                    $level1.removeClass('active');
                                    subnav.hideNav(); /* Hide the nav */
                                }
                            });
                        } else {
                            /* Nothing to load, continue */
                            loaded = true;
                            callback();
                        }
                    };
                    this.doShowNav = function(){
                        var $level2 = subnav.getLevel2();
                        $level1.addClass('active');
                        $level2.removeClass('active');
                        $level2.first().addClass('active');
                        if ($level1.data("events-binded")===undefined) {
                            $level2.hover(function(){
                                var $this   = $(this);
                                $level2.removeClass('active');
                                $this.addClass('active');
                            });
                            $level1.data("events-binded",true);
                        }
                        // set tabs scroll trigger
                        self.helpers.tabsHScroll(subnav.getHscroll(),300);
                        // trigger hide game in older browsers
                        App.navigation.helpers.directVisibility.hideVisibility();
                        /* Track analytics event */
                        App.trackAnalyticsEvent(["_trackEvent", "Navigation", dataTitle+"Show"]);
                    };
                    this.doHideNav = function(){
                        $level1.removeClass('active');
                        $title.removeClass('active');
                        // trigger hide game in older browsers
                        App.navigation.helpers.directVisibility.showVisibility();
                        /* Track analytics event */
                        //App.trackAnalyticsEvent(["_trackEvent", "Navigation", dataTitle+"Hide"]);
                    };
                    this.doHover = function() {
                        $title.addClass('active');
                    }
                    this.init = function(){
                        // on click show nav
                        $title.click(subnav.onShowNav);
                        // on leave hide nav
                        $level0.on("mouseleave",subnav.doHideNav);
                        $level0.on("mouseover",subnav.doHover);
                        $level0.on("click","a",function(ev) {
                            App.trackAnalyticsEvent(["_trackEvent", "CategoriesNav", dataTitle+"Click", $(this).attr("title")]);
                        });
                    };
                    this.init();
                });
            };

    	};



		//-----------------------------------------------------------------------------
    	this.showcases = new function() {
            /**
             * To hold the reference to the homepage carousel
             */
            this.homeSlideShow = null;

            /**
             * Object-based version of the slideshow, to properly reuse and be able to kill the timeouts/intervals if reinstantiating in
             * the same page (like Avatar Center does)
             */
            this.SlideShowv2 = function(slideShowName) {
                var self 	 	= this,
                    timeout,
                    captionTimeout,
                    manualMode,
                    index,
                    slideshow,
                    ssWrapper,
                    items,
                    imgs,
                    firstItem,
                    firstImg,
                    total,
                    prevBtn,
                    nextBtn,
                    controls,
                    pager,
                    pagerItem,
                    isInitialized = false,
                    running = false,
                    defaults = {
                        "controls"		   :        true,   // should show controls?
                        "keyboardcontrols" :        true,   // use keyboard controls too?
                        "preload"		   :        true,   // should preload images before starting?
                        "speed"			   :        7000,   // sliding speed
                        "fadeSpeed"		   :        500,   	// fade speed
                        "autorunning"      :        true,   // autorun slideshow?
						"firstitem"		   :		0	// index of the first item to show
                    },
                    // private methods definitions, added at setup()
                    addPager,
                    showControls,
                    eventsControls,
                    addControls,
                    keyControls,
                    options
                    ;
				if (slideShowName==undefined) {
                    slideShowName="default";
				}
                this.getNextItem = function(item) {
                    return item.next().length ?
                        item.next() : items.first();
                };

                this.getPrevItem = function(item) {
                    return item.prev().length ?
                        item.prev() : items.last();
                };

                this.showItemByIndex = function(index) {
                    if (running) { return; }

                    if (isNaN(index) || index > total) { index = 0; }

                    var pagerItem 		= $(ssWrapper).find('.slideshow-pagination li'),
                        figcaptions 	= items.find('figcaption'),
                    	itemToShow = items.eq(index);

                    running = true;

                    pagerItem.removeClass('active');
                    pagerItem.eq(index).addClass('active');
                    items.removeClass('active').fadeOut(options.fadeSpeed);
                    itemToShow.addClass('active').fadeIn(options.fadeSpeed, self.fadeCallback);

                    // animating figcaption
                    figcaptions.animate({'opacity' : 0, 'left' : '5px' }, 200, function(){});
                    self.clearTimeouts();
                    captionTimeout = setTimeout(function() {
                        items.eq(index).find('figcaption').animate({'opacity' : 1, 'left' : '20px' }, 300);
                    }, 300);

                };

                this.showItem = function(currentItem, itemToShow) {
                    if (running) { return; }
                    itemToShow 		= itemToShow || self.getNextItem(currentItem);
                    var pagerItem 		= $(ssWrapper).find('.slideshow-pagination li'),
                        figcaptions 	= items.find('figcaption'),
                        index 			= itemToShow.index();

                    running = true;

                    pagerItem.removeClass('active');
                    pagerItem.eq(index).addClass('active');
                    items.removeClass('active').fadeOut(options.fadeSpeed);
                    itemToShow.addClass('active').fadeIn(options.fadeSpeed, self.fadeCallback);

                    //console.log("show item");
					//App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ShowItem"]);

                    // animating figcaption
                    figcaptions.animate({'opacity' : 0, 'left' : '5px' }, 200, function(){});
                    self.clearTimeouts();
                    captionTimeout = setTimeout(function() {
                        items.eq(index).find('figcaption').animate({'opacity' : 1, 'left' : '20px' }, 300);
                    }, 300);
                    // adding item height to container
                    // ssWrapper.height(itemToShow.height());
                };

                this.fadeCallback = function() {
                    // updating running status
                    running = false;

                    // continue auto running if not manual mode
                    if (manualMode) { return; }
                    if (!options.autorunning) { return; }

                    var $this = $(this),
                        $next = self.getNextItem($this),
                        speed = options.speed,
                        rotationTime = $this.data("auto-rotation-time");

                    if (rotationTime==="large") {
                        speed = speed * 3;
                    } else if (rotationTime==="stop") {
                        return;
                    }

                    timeout = setTimeout(function() {
                        self.showItem($this, $next);
                    }, speed);
                };

                // next prev buttons
                this.handleBtnClick = function(e) {
                    e.preventDefault();
                    clearTimeout(timeout); /* @todo: checkit */
                    manualMode = true;
                    var currentItem = items.filter(':visible'),
                        itemToShow = e.data.prev ?
                            self.getPrevItem(currentItem) :
                            self.getNextItem(currentItem);

                    //console.log("click controls");
					//App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ClickControls"]);
					//if (App.user.isAlive()) {
					//    App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ClickControlsUser" ]);
					//} else {
					//    App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ClickControlsGuest"]);
					//}

                    self.showItem(currentItem, itemToShow);
                };

                // pager buttons
                this.handleBtnClickPager = function(e) {
                    clearTimeout(timeout); /* @todo: checkit */
                    manualMode = true;
                    var currentItem = items.filter(':visible');
                    var itemToShow = e.data.item;
                    //console.log("click pagination");
					//App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ClickPagination"]);
					//if (App.user.isAlive()) {
					//    App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ClickPaginationkUser" ]);
					//} else {
					//    App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ClickPaginationGuest"]);
					//}
                    self.showItem(currentItem, items.eq(itemToShow));
                };

                this.preloadImages = function (){
                    if (items.size()<=0) {
                        self.init();
                        return;
                    }
                    // PRELOADING FIRST IMAGE
                    var firstImgSrc	= firstImg.attr('data-src');

                    firstImg.attr('src', firstImgSrc);
                    var spinner = $('<ul class="loader-spinner"><li></li><li></li><li></li></ul>').appendTo(slideshow);
                    firstImg.load(function() {
                        // SHOWING FIRST ITEM
                        firstItem.fadeIn(800);
                        // LOADING IMAGES
                        self.preloadImagesArray();
                        // Removing spinner
                        spinner.remove();
                    });
                    // PRELOADING THE REST OF THE IMAGES
                    this.preloadImagesArray = function (){
                        // creating and filling the images array
                        var images = [];
                        $.each(imgs, function() {
                            var img = $(this);
                            var src = img.attr('data-src');
                            images.push(src);
                        });
                        // removing first image from array (this prevents loop issues)
                        images.splice(0,1);

                        if (images.length > 0) {
                            // loading images from array
                            $.each(images, function(key, value) {
                                // adding src to images
                                var imageSelector = items.find('[data-src = "'+value+'" ]');

                                imageSelector.attr('src', value);
                                // when last image is loaded, then init slideshow
                                if ( key == images.length - 1 ) {
                                    imageSelector.load(function () {
                                        // SLIDESHOW INIT CALL (a little delay)
                                        timeout = setTimeout(function() {
                                            self.init();
                                        }, 500);
                                    });
                                }
                            });
                        } else {
                            // SLIDESHOW INIT CALL (a little delay)
                            timeout = setTimeout(function() {
                                self.init();
                            }, 500);
                        }
                    };
                };

                /**
                 * @deprecated
                 * @param imageUrl
                 * @param clickUrl
                 * @param title
                 * @param subtitle
                 * @param buttonText
                 * @param number
                 * @param autoGoAfterThisTime
                 */
                this.addSlide = function(imageUrl, clickUrl, title, subtitle, buttonText, number, autoGoAfterThisTime) {
                    var html = "", slides, slide,
                        template = typeof mpFeaturedSlideTemplate !== "undefined" ? mpFeaturedSlideTemplate : "";
                    //var $template = ssWrapper.find(".js-slide-template");
                    if (number===undefined) number=2;
                    if (autoGoAfterThisTime===undefined) autoGoAfterThisTime=-1;
                    if (template.length == 0) return;
                    html = template;
                    html = html.split("%imageUrl%").join(imageUrl);
                    html = html.split("%clickUrl%").join(clickUrl);
                    html = html.split("%title%").join(title);
                    html = html.split("%subtitle%").join(subtitle);
                    html = html.split("%buttonText%").join(buttonText);
                    slides = slideshow.find(".slide");
                    if (slides.size()>=number) {
                        slide = slides.eq(number-1);
                        slide.html(html);
                        slide.find('.slide-img').attr('src',slide.find('.slide-img').attr('data-src'));
                        autoGoAfterThisTime=parseInt(autoGoAfterThisTime);
                        if (autoGoAfterThisTime>=0) {
                            setTimeout(function() {
                                var pagerli = ssWrapper.find(".slideshow-pagination li").eq(number-1);
                                if (pagerli.size()>0) {
                                    pagerli.trigger("click");
                                }
                            },autoGoAfterThisTime);
                        }
                    }
                }       

                this.setup = function(element, configOptions) {
                    timeout 	= null;
                    manualMode  = false; // manualMode to autoplay
                    index       = 0;
                    slideshow  	= $(element);
                    ssWrapper  	= slideshow.parent();
				    items      	= slideshow.find('.slide').hide(); // hiding items at init
				    imgs		= items.find('.slide-img');
                    total       = items.length; // items cuantity
                    prevBtn    	= null;
                    nextBtn    	= null;
                    controls   	= null;
                    pager 		= null;
                    pagerItem	= null;
                    captionTimeout = null;
                    running 	= false;

                    configOptions = configOptions || {};
                    options = $.extend({}, defaults, configOptions);

                    // Check integrity
                    if (isNaN(options.firstitem) || options.firstitem > total) { options.firstitem = 0; }

					firstItem	= items.eq(options.firstitem);
                    firstImg	= firstItem.find('.slide-img');

                    addPager = function() {
                        var pager 		= $('<ul class="slideshow-pagination"></ul>').insertAfter(slideshow);
                        for(var i=0;i<total;i++) {
                            if(i==options.firstitem) pager.append('<li class="active"></li>');
                            else 		pager.append('<li></li>');
                        }
                        pager.find('li').each(function(){
                            $(this).bind('click', { item : $(this).index() }, self.handleBtnClickPager);
                        });
                    };
                    showControls = function(controls) {
                        ssWrapper.hover(function(){ controls.addClass('active'); });
                        App.navigation.helpers.lazybind(ssWrapper, 'mouseleave', function(){
                            controls.removeClass('active');
                        }, 800, 'mouseover');
                    };
                    eventsControls = function(prevBtn, nextBtn) {
                        prevBtn.bind('click', { prev : true }, self.handleBtnClick);
                        nextBtn.bind('click', { next : true }, self.handleBtnClick);
                    };
                    addControls = function() {
                        // if(!configOptions.controls) { return; }
                        var controls = $('<div class="controls slideshow-controls"></div>').prependTo(ssWrapper);
                        prevBtn  = $('<span class="control prev"></span>').appendTo(controls),
                            nextBtn  = $('<span class="control next"></span>').appendTo(controls);
                        if (!options.controls) {
                            controls.hide();
                        }
                        showControls(controls);
                        eventsControls(prevBtn, nextBtn);
                    };

                    keyControls = function() {
                        $(document.documentElement).keyup(function (event) {
                            // handle cursor keys
                            if (event.keyCode == 37) {
                                prevBtn.click();
                            } else if (event.keyCode == 39) {
                                nextBtn.click();
                            } else if (event.keyCode == 13) {
                                // enter actions
                            }
                        });
                    };

                    if (firstItem.css("display") === "none") {
                        firstItem.show();
                    }

                    // INITALIZING with or without preload
                    if(options.preload) {
                        self.preloadImages();
                    } else {
                        self.init();
                    }
                };

                this.init = function() {
                    if (isInitialized) {
                        return;
                    } else {
                        isInitialized = true;
                    }

                    if (items.size()>1) {
                        addPager();
                        addControls();
                        if (options.keyboardcontrols === true) {
                            keyControls();
                        }
                    } else {
                        this.clearTimeouts();
                        manualMode = true;
                        if (items.size()<=0) {
                            ssWrapper.remove();
                            //slideshow.remove();
                            return;
                        }
                    }
                    // fading in elements of the first slide
                    items.eq(index).fadeIn(300, self.fadeCallback);
                    items.eq(index).find('figcaption').animate({'opacity' : 1, 'left' : '20px' }, 300);
                    // adding item height to container
                    // ssWrapper.height(items.eq(index).height());


					//App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "Ready"]);
					//if (App.user.isAlive()) {
					//    App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ReadyUser"]);
					//} else {
					//    App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ReadyGuest"]);
					//}

					//ssWrapper.find(".js-slideshow").on("click","a", function(ev) {
                    	//console.log("click link");
					//App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ClickLink" ]);
					//if (App.user.isAlive()) {
					//   App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ClickLinkUser" ]);
					//} else {
					//   App.trackAnalyticsEvent(["_trackEvent", "Navigation", "Slideshow-"+slideShowName, "ClickLinkGuest"]);
					//}
					//});
                };

                this.clearTimeouts = function() {
                    clearTimeout(timeout);
                    clearTimeout(captionTimeout);
                };
            };

    		this.slideshow = function(element, options) {
				var self 	 	= this,
			    	timeout 	= null,
				    manualMode  = false, // manualMode to autoplay 
				    index       = 0,
				    slideshow  	= $(element),
				    ssWrapper  	= slideshow.parent(),
				    items      	= slideshow.find('li').hide(), // hiding items at init
				    imgs		= items.find('img'),
				    firstItem	= items.first(),
				    firstImg	= firstItem.find('img'),
				    total       = items.length, // items cuantity
				    prevBtn    	= null,
				    nextBtn    	= null,
				    controls   	= null,
				    pager 		= null,
				    pagerItem	= null,
				    captionTimeout = null,
				    running 	= false;
	    		var defaults = {
	                "controls"		:       true,   // should show controls?
	                "preload"		:       true,   // should preload images before starting?
	                "speed"			:       7000,   // sliding speed
	                "fadeSpeed"		:       500   	// fade speed
		        };
			    this.getNextItem = function(item) {
			        return item.next().length ? 
			        item.next() : items.first();
			    };
			    this.getPrevItem = function(item) {
			        return item.prev().length ?
			        item.prev() : items.last();
			    };
			    this.showItem = function(currentItem, itemToShow) {
			    	if (running) { return; }
			        var pagerItem 		= $('.slideshow-pagination li'),
			        	figcaptions 	= items.find('figcaption'),
			        	index 			= itemToShow.index(),
			        	itemToShow 		= itemToShow || this.getNextItem(currentItem);
			    	// updating running status
			    		running = true;
			        // active class
				        pagerItem.removeClass('active');
				        pagerItem.eq(index).addClass('active');
			        // items fadout, item fadein
				        items.removeClass('active').fadeOut(options.fadeSpeed);
				        itemToShow.addClass('active').fadeIn(options.fadeSpeed, this.fadeCallback);
			        // animating figcaption
				        figcaptions.animate({'opacity' : 0, 'left' : '5px' }, 200, function(){
				        	
				        });
				        captionTimeout = setTimeout(function() {
					        items.eq(index).find('figcaption').animate({'opacity' : 1, 'left' : '20px' }, 300);
				        }, 300);
			        // adding item height to container
			        	ssWrapper.height(itemToShow.height());
			    };
			    this.fadeCallback = function() {
			        // updating running status
			        	running = false;
			        // continue auto running if not manual mode
				        if (manualMode) { return; }
				        var $this = $(this),
				            $next = self.getNextItem($this);
				        timeout = setTimeout(function() {
				            self.showItem($this, $next);
				        }, options.speed);
			    };
			    // next prev buttons
			    this.handleBtnClick = function(e) {
			        e.preventDefault();
			        clearTimeout(timeout); /* @todo: checkit */
			        manualMode = true;
			        var currentItem = items.filter(':visible'),
			            itemToShow = e.data.prev ? 
			            self.getPrevItem(currentItem) :
			            self.getNextItem(currentItem);
			        self.showItem(currentItem, itemToShow);
			    };
			    // pager buttons
			    this.handleBtnClickPager = function(e) {
			        clearTimeout(timeout); /* @todo: checkit */
			        manualMode = true;
			        var currentItem = items.filter(':visible');
			        var itemToShow = e.data.item; 
			        self.showItem(currentItem, items.eq(itemToShow));
			    };
			    var addPager = function() {
			        var pager 		= $('<ul class="slideshow-pagination"></ul>').insertAfter(slideshow);
			        for(var i=0;i<total;i++) {
			            if(i==0) 	pager.append('<li class="active"></li>');
			            else 		pager.append('<li></li>');
			        };
			        pager.find('li').each(function(){
			            $(this).bind('click', { item : $(this).index() }, self.handleBtnClickPager);
			        });
			    };
			    var showControls = function(controls) {
					ssWrapper.hover(function(){ controls.addClass('active'); });
				    App.navigation.helpers.lazybind(ssWrapper, 'mouseleave', function(){
				        controls.removeClass('active');
				    }, 800, 'mouseover');
			    };
			    var eventsControls = function(prevBtn, nextBtn) {
				    prevBtn.bind('click', { prev : true }, self.handleBtnClick);
					nextBtn.bind('click', { next : true }, self.handleBtnClick);
			    };
			    var addControls = function() {
			    	// if(!options.controls) { return; }
			    	var controls = $('<div class="controls slideshow-controls"></div>').prependTo(ssWrapper);
					    prevBtn  = $('<span class="control prev"></span>').appendTo(controls),
					    nextBtn  = $('<span class="control next"></span>').appendTo(controls);
					if(!options.controls) { controls.hide(); }
				    showControls(controls);
				    eventsControls(prevBtn, nextBtn);
			    };
				this.preloadImages = function (){
					// PRELOADING FIRST IMAGE
						var firstImgSrc	= firstImg.attr('data-src');
						firstImg.attr('src', firstImgSrc);
						var spinner = $('<ul class="loader-spinner"><li></li><li></li><li></li></ul>').appendTo(slideshow);
				        firstImg.load(function() {
					        // SHOWING FIRST ITEM
					        	firstItem.fadeIn(800);
					        // LOADING IMAGES
								self.preloadImagesArray();
							// Removing spinner
								spinner.remove();
						});
			        // PRELOADING THE REST OF THE IMAGES
						this.preloadImagesArray = function (){
							// creating and filling the images array
								var images = [];
								$.each(imgs, function() {
									var img = $(this);
									var src = img.attr('data-src');
							        images.push(src);
							    });
						    // removing first image from array (this prevents loop issues)
						    	images.splice(0,1);
						    // loading images from array
							    $.each(images, function(key, value) {
							    	// adding src to images
								    	var imageSelector = items.find('[data-src = "'+value+'" ]');
								    	imageSelector.attr('src', value);
							    	// when last image is loaded, then init slideshow
								        if ( key == images.length - 1 ) {
								            imageSelector.load(function () {
												// SLIDESHOW INIT CALL (a little delay)
										        	timeout = setTimeout(function(){
										        		self.init();
										        	}, 500);
								            });
								        };
							    });
						};
				};
				var keyControls = function() {
					$(document.documentElement).keyup(function (event) {
					  // handle cursor keys
					  if (event.keyCode == 37) {
					    prevBtn.click();
					  } else if (event.keyCode == 39) {
					    nextBtn.click();
					  } else if (event.keyCode == 13) {
					    // enter actions
					  }
					});
				};
			    this.init = function(options) {
				    // add pagination
				    	addPager();
				    // setting up next & prev buttons
				    	addControls();
				    // adding keyboard actions
				    	keyControls();
				    // fading in elements of the first slide
				    	items.eq(index).fadeIn(300, this.fadeCallback);
				    	items.eq(index).find('figcaption').animate({'opacity' : 1, 'left' : '20px' }, 300);
			        // adding item height to container
			        	ssWrapper.height(items.eq(index).height());
			    };
			    // options
					var options = $.extend({}, defaults, options);
				// INITALIZING with or without preload
				    if(options.preload){
				    	this.preloadImages();
				    } else {
				    	this.init();
				    };

			    return { manualMode : manualMode };

			};



			// @todo: add extend options
			// options to add: autoRun, speed, itemsToScroll, styles, controls
			// @todo: create controls
			this.carousel = function(element, itemsToScroll, intervalTime, onReadyCallback) {
				// @todo: dinamic options (itemsToScroll) & optimization
                var item,
					self 	= this,
			    	$items 	= $(element).find('.items'),
			    	itemsToScroll = itemsToScroll,
			    	intervalTime;

				this.itemsCopy = function() {
				    $.each($items, function() {
				        item = $(this);
				        item.find('.copy').remove();
				        item.find('.item').clone().addClass('copy').appendTo(item);
				    });
				};

			    $items.each(function (index, value) { 
			        var $carousel       = $(this),
						$carouselItems  = $carousel.find(".item"),
			        	itemControl 	= $carousel.parent().parent(),
			        	controls        = $carousel.parent().next().find('.js-control'),
			        	$controlPrev 	= itemControl.find('.prev'),
			        	$controlNext 	= itemControl.find('.next'),
			        	$value 			= $(value),
			        	interval;

					// Exit iteration if not enough items to scroll
					if ($carouselItems.length <= itemsToScroll) {
						controls.hide();
						return true;
					}

			        // duplicating items for the looop
                    self.itemsCopy();
			            
		            // storing the data values in case are not defined
		            if ($value.data("clicks") == undefined) $value.data("clicks", 0);
		            if (itemsToScroll == undefined) itemsToScroll = 1;

		            var itemSize    = parseInt(($carousel.find(".copy").css('width'))) + parseInt(($carousel.find(".copy").css('margin-left'))) + parseInt(($carousel.find(".copy").css('margin-right'))), //calculating the size of each item (width + horizontal margins)
		            	size        = itemSize * itemsToScroll,
		            	speed       = 400,
		            	id          = $carousel.find(".copy:first", $items).index(),
		            	clickLimit  = id/parseInt(itemsToScroll),
			            clicks      = $items.data("clicks");

			        var getNextItem = function(event) {
			        	if(typeof event !== 'undefined') event.preventDefault();
			        	clicks++;
			        	animateCarousel();
			        };
					var getPrevItem = function(event) {
						if(typeof event !== 'undefined') event.preventDefault();
			        	clicks--;
			        	animateCarousel();
			        };
			        var animateCarousel = function() {
			        	if (clicks < 0) {
			                var amount = clickLimit * -size;
			                $carousel.css("left", amount + "px");
			                clicks = clicks + clickLimit;
			            } else if (clicks > clickLimit) {
			                var left = (clickLimit - (clicks - 1)) * size;
			                $carousel.css("left", left + "px");
			                clicks = clicks - clickLimit;
			            }
			            $carousel.data("clicks", clicks);
			            var move = clicks * -size;
			            $carousel.stop().animate({
			                left: move
			            }, speed, "easeOutExpo");
			            clearInterval(interval);
			        };
				    var eventsControls = function(event) {
					    $controlPrev.bind('click', getPrevItem);
						$controlNext.bind('click', getNextItem);
				    };
				    var toggleControlsVisibility = function() {
				        itemControl.hover(function(){
				            controls.addClass('active');
				        });
				        App.navigation.helpers.lazybind(itemControl, 'mouseleave', function(){
				            controls.removeClass('active');
				        }, 800, 'mouseover');
				    };
			        var timer = function() {
				        if (typeof intervalTime == "undefined") return;
				        var interval = setInterval(function(){
				        	getNextItem();
				        }, intervalTime);
			        };
			        toggleControlsVisibility();
			        eventsControls();
			        timer();
					if (onReadyCallback !== undefined && typeof onReadyCallback == "function") {
						onReadyCallback(self);
					}
			    });
			};

    	};


		//-----------------------------------------------------------------------------
    	this.modals = new function() {
    		var modals = this;
            var config = {
                'defaultClass' : '.modal'
            }

            this.existsActiveModal = function() {
                return $(config.defaultClass).is(":visible");
            }

			this.modal = new function() {

			    var modal 		        = this,
		        	opened		        = false,
		        	$target		        = false,
		    		$overlay	        = false,
		    		onProgress	        = false; /* Flag to forbid any operations while show/hide events ocurrs */

                this.nextModalLocked = false;

			    this.onReady = function(triggerSelector) {
			    	this.attachClick(triggerSelector);
			    };
			    this.attachClick = function(triggerSelector) {
			    	// Automatically attach the event to the found selectors, dynamic created objects won't be binded
			    	$(triggerSelector).on("click",modal.showByClick);
			    };
			    this.isOpened = function (targetId) {
			    	if (typeof targetId=="undefined") return opened; // Not id provided, just get if its opened or not
			    	if ($target && this.getTargetId()==targetId) return true;
			    	return false;
			    };
			    this.getTargetId = function() {
			    	if (!$target || !opened) return false;
			    	return $target.attr("id");
			    };
			    this.get = function() {
			    	return $target;
			    };
			    /**
			     * Allows opening a modal by specifying it's target id
			     */
			    this.showByTarget = function(targetId) {
			    	// Already opened?, close it!
				    	if (opened) {
				    		modal.close( function () {modal.showByTarget(targetId);} );
				    		return;
				    	}
				    // Set target 
				    	if (targetId instanceof $) {
				    		$target = targetId; // Already a jquery object
				    	} else {
	        				$target = $("#"+targetId.split("#").join(""));
				    	}
		        	// Show it!
		        		modal._show();
					return $target;
			    };
			    /**
			     * Allows opening a modal by attaching this function to the click event of an object 
			     */
			    this.showByClick = function(e,newTarget) {
			    	e.preventDefault();
			    	e.stopPropagation();
			    	var newTarget;
			    	// Already one opened? Close it, create new target and open this one
			    	if (opened) {
			    		newTarget = $($(this).attr('data-target'));
			    		modal.close( function () {modal.showByClick(e,newTarget);} );
			    		return;
			    	}
				    // Set target
				    if(typeof newTarget == 'undefined') {
				    	$target = $($(this).attr('data-target'));
				    } else {
				    	$target = newTarget;
				    }
		        	// Show it!
                    modal._show();
			    };
                this.closeSuccess = function(callback) {
                    if (typeof callback == "undefined") {
                        callback = null;
                    }
                    return modal.close(callback, true);
                }
			    /**
			     * Close the current opened modal, allows 
			     */
			    this.close = function(callback, success) {
                    if (success===undefined) success=false;
			    	if (!opened || !$target) return;
			    	// Already onProgress?
		    			if (onProgress) return;
		    			onProgress = true;
			    	var ev = null;
			    	if (typeof callback !=="undefined" && (callback instanceof Event || callback instanceof jQuery.Event)) {
                        // It's an event, not a callback
			    		ev=callback;
			    		callback=null;
			    		//ev.preventDefault();
			    		ev.stopPropagation();
			    	}
			    	// Trigger the target event that can stop the modal opening
                        if ( $target.data("locked") ) return false; /* Target is locked, do not close */
        				if ( $target.trigger("modalPreClose", success) === false) return false; // Cancel close if doesn't return true
			    	// animating/hiding modal window
				    	$target.animate({ 'margin-top': 120 }, 100, function(){
				    		$target.removeClass('visible').appendTo('body');
					    	// animating/hiding overlay
				        	$overlay.fadeOut(200, function(){ 
				        		$overlay.remove();
				        		$overlay = false;
				        		// Undelegate clicks! (if the user open the modal again, they will be duplicated if not removed first)
				        			$target.undelegate('.close, .js-close', 'click', modal.close);
                                    $target.undelegate('.js-close-success', 'click', modal.closeSuccess);
					        	// Trigger the target event that can stop the modal opening
		        					$target.trigger("modalClose", success);
						        // Set to not opened and call callback if any was provided
							        opened = false;
							        $target = false;
							        onProgress = false;
					        		if (typeof callback == "function") callback();
				        	});
				    	});
		        	// Manage direct visibility
		        		App.navigation.helpers.directVisibility.showVisibility();
			    };
			    /**
			     * Common helper to perform the actual show action
			     */
			    this._show = function() {
			    	// Already onProgress?
		    			if (onProgress) return;
					// Do not allow if already opened			    	
		    			if (opened || !$target) return false;		    			
	        		// Trigger the target event that can stop the modal opening
	        			if ( $target.trigger("modalPreOpen")===false ) return false; // Cancel opening if doesn't return true
			    	// Set as opened
	        			opened = true;
		    			onProgress = true;
	        		// preventing click events to traspass the modal window
				    	$target.click(function(e){			    	
				    		e.stopPropagation(); 
				    	});
			    	// launching overlay layer
			        	$overlay = $('<div/>', {'class':'overlay','style':'opacity:0'})
			        		.appendTo('body') // creating the overlay
				        	.animate({'opacity':1},200, function() {
				        	    // inserting the modal in the overlay layer
			        			$target.appendTo($overlay).addClass('visible');
						        // transition effect (no css)
						        	$target.css({ 'margin-top': -120, 'opacity' : 0 })
						        		.animate({ 'margin-top': 0, 'opacity' : 1}, 100, function () {
											$target.css("display", ""); // @todo: Review this. Avoids display block jquery auto display-block injection
										});
						        onProgress = false; // Completed
				         }); // sowing up with fade
						if (!$target.hasClass("no-overlay-close")) {
							$overlay.click(modal.close);
						} // attaching close click
			        // Close modal events
		        		$target.delegate('.close, .js-close', 'click', modal.close); /* Also captures dynamic created content */
                        $target.delegate('.js-close-success', 'click', modal.closeSuccess); /* Also captures dynamic created content */
	        		// Notify the target it has been opened
		        		$target.trigger("modalOpen"); // Trigger target event
		        	// Manage direct visibility
		        		App.navigation.helpers.directVisibility.hideVisibility();
			    };
			    $(document).keyup(function(e){
			    	// esc key closes modal
				    if(e.which == 27 && opened == true){
				        modal.close();
				    }
				});
			    /*
	     		this._resize = function(count) {
					if (opened == false) return;
	    			if (modal._timeoutInstance) clearTimeout(modal._timeoutInstance);
			        var overlay = $('.overlay');
			        //Get the screen height and width
			        var maskHeight 	= $(document).height();
			        var maskWidth	= $(window).width();
			        //Set height and width to mask to fill up the whole screen
			        overlay.css({'width':maskWidth,'height':maskHeight});
			        //Get the window height and width
			        var winH = $(window).height();
			        var winW = $(window).width();
			        //Set the popup window to center
			        modalBox.css('top',  winH/2 - modalBox.height()/2);
			        modalBox.css('left', winW/2 - modalBox.width()/2);
			        if (typeof count=="undefined") modal._resize(1); // resizing again to avoid browser gaps
	     		};
	     		this._scheduleResize = function() {
	     			if (modal._timeoutInstance) clearTimeout(modal._timeoutInstance);
	     			modal._timeoutInstance = setTimeout(modal._resize,350);
	     		};
	     		// resizing on window resize
	     		$(window).resize(function() {
			        modal._scheduleResize();
			    });
				*/
			};

			this.modalFrame = new function() {

                var overlay = null;
			    var modal 			= this;
		        var opened			= false;
		        var close 			= false;
		        var maxWidth 		= 900;
		        var maxHeightMargin = 83;
		        var minWidth 		= 100;
		        var minHeight 		= 100;
		        var modalBox		= false;
		        var windowObj 		= $(window);
		        this.callback 		= false;
		        this.iframeInstance = false;

			    this.showModal = function(location, callback, optionsOverride) {
                    var options = {
						width: "100%",
						height: "100%",
						scrolling: "no",
						id: "",
						frameborder: 0
					};

					if (typeof optionsOverride === "object") {
						options = $.extend({}, options, optionsOverride);
					}

			        overlay = $('<div/>', {'class':'overlay'}).appendTo('body')         // creating the overlay
													              .fadeIn(300)              // sowing up with fade
													              .click(modal.closeModal); // attaching close click
			        modalBox = $('<div class="modal modal-iframe visible" id="modalFrame"><ul class="loader-spinner ls-dark"><li></li><li></li><li></li></ul><i class="js-close close">×</i></div>').appendTo('.overlay') // creating the overlay
										 .fadeIn(300); // sowing up with fade
	        		// preventing closer click inside modal window
			        modalBox.click(function(e){ e.stopPropagation(); });
			        // close modal
	        		close = modalBox.find('.close');
	        		close.click(this.closeModal);
	        		// creating the iframe
				  	var link = location;
					var $iframe = $('<iframe />', options);
					$iframe.attr("src", link);
					$iframe.hide();
                    $("#modalFrame").append($iframe);
					this.iframeInstance = $iframe.get(0);
                    // Manage direct visibility
                    App.navigation.helpers.directVisibility.hideVisibility();
                    // Show it!
                    modal._show();
                    // Mark as opened
                    opened = true;
                    // Callback
                    if (typeof callback === "function") {
                        modal.callback = callback;
                    }

			    };
			    this.closeModal = function(evt, noCallbackFlag) {
			    	opened = false;
			        if ((typeof noCallbackFlag == "undefined" || noCallbackFlag==false)) {
				        // Check if we have access to the iframe and that it's a dialog to trigger it's onclose
					        try {
					        	if (modal.iframeInstance && typeof modal.iframeInstance.contentWindow == "object" && typeof modal.iframeInstance.contentWindow.App == "object") {
					        		if (typeof modal.iframeInstance.contentWindow.App.dialog == "object") {
					        			modal.iframeInstance.contentWindow.App.dialog.onClose();
					        		}
					        	}
					        } catch (error) {}
				        if (typeof modal.callback == "function") modal.callback();
			        }
			        overlay.fadeOut(300, function(){ overlay.remove();modal.iframeInstance = false; });
                    // Manage direct visibility
                        App.navigation.helpers.directVisibility.showVisibility();
			    };
			    this._show = function() {
			    	if (modal.iframeInstance) modal.iframeInstance.style.display="block";
			    	modalBox.find('.loader-spinner').remove();
			    };
			    this.isOpen = function() {
			    	return opened;
			    };
			    this.resize = function(width, height) {
			    	var maxHeight;
			    	if (!this.isOpen()) return false;
			    	if (width>maxWidth) width = maxWidth;
			    	if (width<minWidth) width = minWidth;
			    	// Height calculation
			    		 maxHeight = windowObj.height()-(maxHeightMargin*2);
			    		 if (height>maxHeight) height = maxHeight;
			    		 if (height<minHeight) height = minHeight;
			    	modalBox.width(width);
			    	modalBox.height(height);
			    };
			    $(document).keyup(function(e){
			    	// esc key closes modal
				    if(e.which == 27 && opened == true){
				        modal.closeModal();
				    }
				});
			};



            /**
             * Creates a new modal by automatically specifying the html content. If first child doesn't have a modal
             * css class it will automatically be wrapped into one. The target is destroyed after the modal closes.
             * @param html
             * @param onClose
             * @param onPreClose
             * @returns {jQuery} modal target
             */
            this.htmlModal = function(html, onClose, onPreClose, customCssClass) {
                if (this.nextModalLocked){
                    this.nextModalLocked = false;
                    return;
                }
                var $target, events;
                events = {
                    onPreClose: function() {},
                    onClose: function() {}
                };

                /* Create target or set it if jquery element received*/
                if (html instanceof $){
                    $target = html;
                    if (!$target.hasClass("modal")) {
                        $target = $("<div class='modal' />").append(html); /* No modal class present, wrap it into one */
                    }
                } else {
                    $target = $(html);
                    if (!$target.hasClass("modal")) {
                        $target = $("<div class='modal'>"+html+"</div>"); /* No modal class present, wrap it into one */
                    }
                }

                if (customCssClass !== undefined) {
                    $target.addClass(customCssClass);
                }
                $target.appendTo($("body"));
                /* Events */
                if (typeof onClose === "function") events.onClose = onClose;
                if (typeof onPreClose === "function") events.onPreClose = onPreClose;
                // $userModal.bind("modalPreOpen",self.onPreOpen);
                // $userModal.bind("modalOpen",self.onOpen);
                $target.bind("modalPreClose",function(ev, success) {
                    return events.onPreClose(success);
                }); /* PreClose is dynamicaly changed, don't provide id directly */
                $target.bind("modalClose",function(ev, success) {
                    events.onClose(success, $target);
                    if ($target) {$target.remove();}
                });
                /*$target.on("click",".js-close", function(ev){
                    $target.close();
                    ev.preventDefault();
                    ev.stopPropagation();
                    return false;
                });
                $target.on("click",".js-close-success", function(ev){
                    $target.closeSuccess();
                    ev.preventDefault();
                    ev.stopPropagation();
                    return false;
                });*/
                /* Show modal */
                modals.modal.showByTarget($target);
                return $target;
            };

            this.modalAlert = new function() {

				var self = this;
	    		var defaults = {
		                stay			:       true,        // should the item stay or not?
		                stayTime		:       3000,        // time in miliseconds before the item has to disappear (if stay false)
		                close			:       true,        // should the item have a close cross or not?
		                styles		    :       '',          // could also be error, succes
		                txtOnConfirm	:       'Confirm',   // text of confirm button
		                txtOnCancel	    :       'Cancel',    // text of cancel button
		                txtHeader		:       null,    	 // text for header
		                template		: 		"<div class='modal modal-alert'></div>"
		        };

				this.add = function(content, onConfirm, onCancel, onClose, options) {

					var options 	= $.extend({}, defaults, options);
					var timestamp	= new Date().getTime();
					var modalId		= '#'+timestamp; // using timestamp as unic id
					var $modalDom	= null; // modal dom object
					
					// Creating the item
						var $modal = $(options.template).html(content)
														.attr('id' , timestamp)
														.addClass(options.styles)
														.appendTo('body');
						$modalDom	= $(modalId); // storing the new dom object
						
						// Creating buttons wrapper (if exist any button)
							if (onConfirm != false || onCancel != false) {
								var $buttonsDom = $('<div/>',{'class' : 'buttons-wrapper clearfix'}).appendTo($(modalId));
							}
							
						// Creating cancel button (if exist & callback is a function)
							if (typeof onCancel != "undefined" && typeof onCancel == "function") {
								 // creating button
									var $btnCancel = $('<button/>',{'class' : 'btn btn-medium push-l'})
														.html(App.i18n.xlat.msg(options.txtOnCancel))
														.appendTo($buttonsDom);
								// attaching function to click
									$btnCancel.click(function() {
										onCancel();
										/*if (typeof onClose != "undefined" && typeof onClose == "function") {
											App.navigation.modals.modal.close(onClose);
										} else {*/
											App.navigation.modals.modal.close();
										//}
									});
							}
						// Creating confirm button (if exist & callback is a function)
							if ((typeof onConfirm != "undefined" && typeof onConfirm == "function")) {
								 // creating button
									var $btnConfirm = $('<button/>',{'class' : 'btn btn-medium push-r btn-black'})
														.html(App.i18n.xlat.msg(options.txtOnConfirm))
														.appendTo($buttonsDom);
								// attaching function to click
									$btnConfirm.click(function() {
										onConfirm();
										/*if (typeof onClose != "undefined" && typeof onClose == "function") {
											App.navigation.modals.modal.close(onClose);
										} else {*/
											App.navigation.modals.modal.close();
										//}
									});
							}
						// Creating close button
							if(options.close) { var $close = $('<span class="ic ic-or-close close"></span>').prependTo($modal); }

					var showModal = function() {
						// Triggering modal function (modal closes opened modals, if any)
							$modalTarget = modals.modal.showByTarget(modalId);



						// Removing if does not stay
							if(!options.stay) {
								var stayTimer = setTimeout(function() {
									// using callback only if is not undefined and is a function
									/*if (typeof onClose != "undefined" && typeof onClose == "function") {
										App.navigation.modals.modal.close(onClose);
									} else {*/
										App.navigation.modals.modal.close();
									//}
								}, options.stayTime);
							}

						// Creating header
							if(options.txtHeader !== null) {
								var $header = $('<header/>', {'class' : 'modal-header b-bottom' }).prependTo($modalDom);
								var $headerTitle = $('<h2/>', {'class' : 'title', 'html' : options.txtHeader }).prependTo($header);
								if(options.close) { $close.prependTo($header); }
							}

							$modalTarget.on("modalClose",function() {
								var closeTimer = setTimeout(function() {
									if ((typeof onClose != "undefined" && typeof onClose == "function")) {
										onClose();
										if ($modalDom) {
											$modalDom.remove();
										}
									}
								}, 200); // waiting for the closing animation to remove
							});
					}
					if (modals.modal.isOpened()) {
                        modals.modal.close(showModal);
					} else {
						showModal();
					}
					return $modalDom;
				};

				this.close = function(onClose) {
					// using callback only if is not undefined and is a function
					App.navigation.modals.modal.close(onClose);
				};

			    // SAMPLE USE
			    // App.navigation.modals.modalAlert.add('Hi, how are you', function(){alert('confirm')}, function(){alert('cancel')}, function(){alert('close')}, {"styles":"testclass"});
			    // App.navigation.modals.modalAlert.add('Hi, how are you', function(){alert('confirm')}, function(){alert('cancel')}, function(){alert('close')}, {"styles":"testclass", "stay":false, "close":false, "txtOnConfirm":"aceptar"});
			    // App.navigation.modals.modalAlert.close();

			};

            this.modalStandard = function(message, onClose, onPreClose) {
                var $close;
                var defaultMessage = {
                    id:                 0,
                    locked:             false,              // modal locked?, not closable
                    // Other properties
                    type		    :       '',          // could also be error, succes
                    styles		    :       "",          // CSS styles
                    template		: 		"<div class='modal modal-standard'></div>",
                    closeButton     : true
                };

                /**
                 * ADDITIONAL PARAMETERS - OPTIONAL since we evaluate their presence with the hasOwnProperty method
                 *
                 default_aside_clickable: false
                 default_aside_time: 10
                 default_class: "my-custom-class"
                 default_sticky: true
                 default_type: "modal"
                 detail_cancel_title: "Cancel"
                 detail_earned_gems: 2000
                 detail_earned_xp: 1000
                 detail_earned_minicoins: 1000
                 detail_endpoint_title: "Endpoint"
                 detail_endpoint_url: "http://rmruano.lab.minijuegos.com/miniproject/www/MiniSite/perfil/ruben"
                 detail_endpoint_js:
                 detail_media_html: "<div>My custom media</div>"
                 detail_loaded: true
                 detail_subtitle: "Message subtitle"
                 detail_text: "Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs."
                 detail_title: "Message title 01"
                 is_reminder: false
                 must_acknowledge: true
                 param_i1: 0
                 param_i2: 0
                 param_l: "0"
                 param_s: "test-standard1"
                 source: "push"
                 styles: "msg-modal msg-modal-test-standard1 my-custom-class"
                 subtype: "test-standard1"
                 timestamp: 1410253818430
                 type: "MODAL"
                 */

                var message 	= $.extend({}, defaultMessage, message);
                var timestamp	= new Date().getTime();
                var modalId, $modalDom, $modal;
                var $endpointButton, $cancelButton, $noticeButtonsWrapper, $closeButton, $noticeItemEarned, $img;

                if (onClose===undefined || typeof onClose!=="function") onClose = function(success) {};
                if (onPreClose===undefined || typeof onPreClose!=="function") onPreClose = function(success) {return true;};
				if ( ! message.hasOwnProperty("detail_endpoint_url")) { message.detail_endpoint_url = ""; }
				if (message.id === 0) {
                    message.id = timestamp; // Use time as message id
                    modalId = 'modal-'+timestamp;
                } else {
                    modalId = 'modal-'+message.id;
                }

                // Creating the item
                $modal = $(message.template)
                    .attr('id' , modalId)
                    .addClass(message.styles)
                    .appendTo('body');
                $modalDom	= $(modalId); // storing the new dom object
                if (message.locked) $modal.data("locked",true);

                // Creating close button
                $closeButton = $('<span class="ic ic-or-close close js-close"></span>');
                if (message.closeButton) {$closeButton.prependTo($modal);}


                /*
                 CONTENT
                 --------------------------------------------------------------------------
                 */


                // Media
				$img = null;
                if (message.hasOwnProperty("detail_media_html")) {
                    $modal.append(message.detail_media_html);
                } else if(message.hasOwnProperty("detail_media_big")) {
                    $modal.append("<div id='media-big-modal' class='media media-big'><img src='"+message.detail_media_big+"'/></div>");
					$img = $modal.find(".media-big");
                }
                // Title, subtitle & text
                if (message.hasOwnProperty("detail_title")) {
                    $modal.append("<div class='title'>"+message.detail_title+"</div>");
                }
                if (message.hasOwnProperty("detail_subtitle")) {
                    $modal.append("<div class='subtitle'>"+message.detail_subtitle+"</div>");
                }
                if (message.hasOwnProperty("detail_text")) {
                    $modal.append("<div class='detail-text'>"+message.detail_text+"</div>");
                }

                // Share module
                if (message.detail_share_html != null && message.detail_share_html.length>0 ) {
                    $modal.append("<div class='share'>"+message.detail_share_html+"</div>");
					function logNotificationStats(ev) {
						if (ev.data.hasOwnProperty('log_stats') && ev.data.log_stats) {
							App.trackAnalyticsEvent(["_trackEvent", "Notificationsv2", "Amounts", "Share", 1]);
						}
					}

					$modal.find(".share a").on("click", {log_stats: (message.hasOwnProperty('log_stats') ? message.log_stats : false)}, logNotificationStats);

					//$modal.find(".share a").on("click",function() {
					//    App.trackAnalyticsEvent(["_trackEvent", "Notificationsv2", "Amounts", "Share", 1]);
					//});
                }

                // Earned gems & xp & minicoins
                if (message.detail_earned_gems !=null || message.detail_earned_xp !=null || message.detail_earned_minicoins !=null ) {
                    $noticeItemEarned = $('<div></div>').addClass('earned-wrapper');
                    if (message.detail_earned_gems!=null && message.detail_earned_gems>0) {
                        //$noticeItemEarned.append("<div class='earned-gems'><span class='icon icon-gem'></span>+"+self.App.i18n.writeNumber(message.detail_earned_gems)+" "+self.App.i18n.xlat.msg("Gems")+"</div>");
                        $noticeItemEarned.append("<div class='earned-gems'>+"+self.App.i18n.writeNumber(message.detail_earned_gems)+" <span class='icon icon-gem-txt'></span></div>");
                    }
                    if (message.detail_earned_xp!=null && message.detail_earned_xp>0) {
                        //$noticeItemEarned.append("<div class='earned-xp'><span class='icon icon-xp'></span>+"+self.App.i18n.writeNumber(message.detail_earned_xp)+" "+self.App.i18n.xlat.msg("XP")+"</div>");
                        $noticeItemEarned.append("<div class='earned-xp'>+"+self.App.i18n.writeNumber(message.detail_earned_xp)+" <span class='icon icon-xp-txt'></span></div>");
                    }
                    if (message.detail_earned_minicoins!=null && message.detail_earned_minicoins>0) {
                        //$noticeItemEarned.append("<div class='earned-gems'><span class='icon icon-minicoin'></span>+"+self.App.i18n.writeNumber(message.detail_earned_minicoins)+" "+self.App.i18n.xlat.msg("Minicoins")+"</div>");
                        $noticeItemEarned.append("<div class='earned-gems'>+"+self.App.i18n.writeNumber(message.detail_earned_minicoins)+" <span class='icon icon-minicoin-txt'></span></div>");
                    }
                    $modal.append($noticeItemEarned);
                }
                /*
                 BUTTONS
                 --------------------------------------------------------------------------
                */
                if (message.detail_endpoint_title != null || (message.detail_cancel_title!=null && message.detail_cancel_title.length>0) ) {
                    // Buttons container
                    $noticeButtonsWrapper = $('<div></div>').addClass('buttons-case').appendTo($modal);
                    // Cancel button
                    if (message.detail_cancel_title != null) {
                        $cancelButton = $('<span>'+message.detail_cancel_title+'</span>').addClass('btn js-close').appendTo($noticeButtonsWrapper);
                    }
                    // Endpoint button
                    if (message.detail_endpoint_title != null) {
                        $endpointButton = $('<a href="'+message.detail_endpoint_url+'" onclick="' + message.detail_endpoint_js + '"  target="_blank">'+message.detail_endpoint_title+'</a>').addClass('btn btn-highlight js-close-success').appendTo($noticeButtonsWrapper);
						if ($img && $img.length > 0 && message.hasOwnProperty("allow_media_endpoint") && message.allow_media_endpoint == true) {
							$img.wrap("<a class='js-close-success' href='" + message.detail_endpoint_url + "' target='_blank'></a>");
						}
                    }
                    // Setting up sizes
                    if (message.detail_endpoint_title != null && message.detail_cancel_title == null ) {
                        if ($endpointButton) {$endpointButton.addClass('btn-large');}
                    } else if (message.detail_endpoint_title == null && message.detail_cancel_title != null ) {
                        if ($cancelButton) {$cancelButton.addClass('btn-large');}
                    } else {
                        if ($cancelButton) {$cancelButton.addClass('btn-large btn-l');}
                        if ($endpointButton) {$endpointButton.addClass('btn-large btn-r');}
                    }
                }

                if (message.detail_endpoint_js != null  && $endpointButton) {
                    $endpointButton
                        .attr("onclick", message.detail_endpoint_js);
                }

				if ($img && $img.length > 0 && message.detail_endpoint_js != null && message.hasOwnProperty("allow_media_endpoint") && message.allow_media_endpoint == true) {
					$img.attr("onclick", message.detail_endpoint_js).attr("target", "_blank").addClass("js-close-success");
				}

                //$endpointButton = $('<a onclick="' + options.endpointJS + '" href="' + options.endpointUrl + '" target="_blank">' + options.endpointTitle + '</a>').addClass('btn btn-highlight').appendTo($noticeButtonsWrapper);

                // Close action
                $modal.bind("modalClose",function(ev, success) {
                    if (typeof success===undefined) success=false;
					onClose(success, $modal);
					if ($modal) {
						$modal.remove();
					}
                });
               	$modal.bind("modalPreClose",function(ev, success) {
                    if (typeof success===undefined) success=false;
                    return onPreClose(success);
                }); /* PreClose is dynamicaly changed, don't provide id directly */

                // Triggering modal function (modal closes opened modals, if any)
                modals.modal.showByTarget(modalId);

                return $modalDom;

                // SAMPLE USE
                // App.navigation.modals.modalAlert.add('Hi, how are you', function(){alert('confirm')}, function(){alert('cancel')}, function(){alert('close')}, {"styles":"testclass"});
                // App.navigation.modals.modalAlert.add('Hi, how are you', function(){alert('confirm')}, function(){alert('cancel')}, function(){alert('close')}, {"styles":"testclass", "stay":false, "close":false, "txtOnConfirm":"aceptar"});
                // App.navigation.modals.modalAlert.close();

            };


	    	// Launching modals automatically
	        this.autoLaunchModal = function() {
		        //  Getting the url parameters
		            var params = (function(param) {
		                if (param == "") return {};
		                var paramList = {};
		                for (var i = 0; i < param.length; ++i)
		                {
		                    var value=param[i].split('=');
		                    if (value.length != 2) continue;
                            try {
		                        paramList[value[0]] = decodeURIComponent(value[1].replace(/\+/g, " "));
                            } catch(e) {
                                // Decode failed, try unescape
                                paramList[value[0]] = unescape(value[1].replace(/\+/g, " "));
                            }
		                }
		                return paramList;
		            })(window.location.search.substr(1).split('&'));
		        // If parameter register is 1 then launch modal
		            if(params["level"] == '1'){
		                    var target = '#modal-economy';
		                    if(target.length != 0) {
		            			modals.modal.showByTarget(target);
	  							$('[href = "#level"]').click();
		                    }
		            } else if(params["minicoins"] == '1'){
		                    var target = '#modal-economy';
		                    if(target.length != 0) {
		            			modals.modal.showByTarget(target);
	  							$('[href = "#minicoins"]').click();
		                    }
		            } else if(params["gems"] == '1'){
		                    var target = '#modal-economy';
		                    if(target.length != 0) {
		            			modals.modal.showByTarget(target);
	  							$('[href = "#gems"]').click();
		                    }
		            } else if(params["getminicoins"] == '1'){
		                    var target = '#buy-coins-modal';
		                    if(target.length != 0) {
		            			MP.userPurchase.showPurchaseModalFlow("purse");
		                    }
		            } else if (params["nivel"] == '1'){
		                    var $trigger = $('.js-modal-economy');
		                    if($trigger.length != 0) {
		                    	$trigger.click();
	  							$('[href = "#level"]').click();
	                    }
	            	}
	        };

    	};




    	this.hint = new function() {
    		var hint 		= this;
    		var activeTargets = []; // Store the targets jquery objects, hints are stored within the target data
    		var defaults = {
	                "position"	:       "right",      // hint position (top, bottom, left, right)
	                "stay"		:       true,         // should the notice item stay or not?
	                "stayTime"	:       3000,         // time in miliseconds before the item has to disappear
	                "class"		:       '',           // could also be error, succes
	                "offsetTop"	: 		null,		  // offset top for custom positioning
	                "offsetLeft": 		null,		  // offset left for custom positioning
	                "width"		: 		null,		  // custom width
	                "template"	: 		"<div class='tooltip-hint'></div>"
	        };
    		var resolveTarget = function(targetSelector) {
		    	var $target;
    			if (typeof targetSelector == "string") $target = $(targetSelector);
		    	if (typeof targetSelector == "object") {
		    		if (targetSelector instanceof jQuery) $target = targetSelector;
		    		else $target = $(targetSelector);
				}  
				if ($target.length<1) throw new Error("Invalid target provided");
				return $target.first(); // only first one
    		};
    		var findIfActive = function($target) {
		    	var $target = resolveTarget($target);
		    	for (var i = 0, l = activeTargets.length;i<l;i++) {
		    		/* We need to compare the DomObjects because the $ objects 
						will always be different (they're created on demand) */
					if (activeTargets[i].get(0)==$target.get(0)) return i;
				}
				return -1;
    		};
		    this.add = function(targetSelector, text, options) {
		    	var options         	= $.extend({}, defaults, options);
		    	var $target 			= resolveTarget(targetSelector);
		    	var $targetSelector 	= $(targetSelector);
		    	var targetSelectorW 	= $targetSelector.width() + 
		    							  parseInt($targetSelector.css("padding-right")) +
		    							  parseInt($targetSelector.css("padding-left"));
		    	var $hint;
				var targetOffset = $targetSelector.offset();
		    	var activeIdx = -1;
				if ((activeIdx=findIfActive($target)) != -1) {
					// Active with idx available, remove it by it's idx
					this.remove(null,activeIdx);
				};
				// Create the hint object
					$hint = $(options["template"]).append(text)
												  .addClass(options["class"])
												  .insertBefore(targetSelector);
				// Custom width
					if (options['width'] != null) {
						$hint.css({'width' : parseInt(options['width']), 'max-width' : 'none'});
					};

		    	// Calculate hint object size (width + paddings) for left positioning
			    	var hintW 	= $hint.width() + 
    							  parseInt($hint.css("padding-right")) +
    							  parseInt($hint.css("padding-left"));
				// Positioning the hint object
					switch(options["position"]){
						case "right":
							$hint.addClass('right').offset({ top: targetOffset.top, left: (targetOffset.left + targetSelectorW + 12) });
						break;
						case "left":
							$hint.addClass('left').offset({ top: targetOffset.top, left: (targetOffset.left - hintW - 12) });
						break;
						case "top":
							$hint.addClass('top').offset({ left: targetOffset.left }).css({'margin-left' : (targetSelectorW - hintW) / 2 });
						break;
						case "bottom":
							$hint.addClass('bottom').offset({ left: targetOffset.left }).css({'margin-left' : (targetSelectorW - hintW) / 2 });
						break;
						default:
							$hint.addClass('right').offset({ top: targetOffset.top, left: (targetOffset.left + targetSelectorW + 12) });
					};

				// Custom offset
					if (options['offsetTop'] != null) {
						$hint.css({'top' : parseInt(options['offsetTop'])});
					};
					if (options['offsetLeft'] != null) {
						$hint.css({'left' : parseInt(options['offsetLeft'])});
					};

				// Store a reference to the hint object
	        		$target.data("$hint",$hint);
	        		$target.attr("data-hint","1"); // Store a data attribute to allow find active hints within a scope
	        	// Store the active target
	        		activeTargets.push($target);
	        	// Removing if does not stay
		        	if(!options.stay) {
	                	$hint.data("timeout", setTimeout(function() { hint.remove($target); }, options.stayTime));
	            	};
	        };
	        this.remove = function(targetSelector, activeIdx) {
	        	var $target, $hint;
	        	if (typeof activeIdx == "undefined") activeIdx=findIfActive(targetSelector); // Find active idx
	        	targetSelector = null; // Not needed anymore, we'll use the activeIDx
	        	$target = activeTargets[activeIdx];
	        	if (!$target) return; /*throw new Error("Target not found");*/
	        	$hint = $target.data("$hint");
	        	//if (!$hint ) throw new Error("Hint not found within the target");
	        	if (!$hint) return;
	        	// Remove objects
	        		clearTimeout($hint.data("timeout"));
	        		$hint.remove();
	        		$target.data("$hint",false);
	        		$target.attr("data-hint",false);
	        	// Remove from active array
	        		activeTargets.splice(activeIdx,1);
	        };
	        /**
	         * Removes all the active hints within a scope, this is more costly, we'
	         */
	        this.removeAll = function(scopeSelector) {
	        	if (typeof scopeSelector!=="undefined") {
	        		// Scoped hints
		        	$scope = resolveTarget(scopeSelector);
		        	// Find hints (costyl if the scope is very generic)
		        	$scope.find("[data-hint=1]").each(function() {
		        		hint.remove(this);
		        	});	        	
	        	} else {
	        		// All hints!
	        		for (var i = 0, l = activeTargets.length;i<l;i++) {
		        		this.remove(activeTargets[i]);
					}
	        	}
	        };
		    // sample use
		    // App.navigation.hint.add('#test-hint', 'Hi, how are you', {"position":"left", "stay": 1000, "class": "test"});
		    // App.navigation.hint.remove('#foo')
		};




		this.userCard = new function() {

			// @todo: schedule timeout
			// @todo: check dom objects
			// @todo: translate level
			
			var card 		= this;
			var $content 	= $('<div/>', {'class':'user-card-content'});
			
			this.add = function(user,url,media,followed,level,userName) {
				// check if user card already exists
					// var $userDrophover = $('.js-drophover-'+user);
					// var $card = $userDrophover.find('.profile-card');
					// if($card.length){
					// 	$card.show();
					// 	return
					// };
				// make sure to empty var content
					$content.empty();

				// creating the content
					var $avatarLink = $('<a/>', {'href':url, 'class' : 'pc-avatar th-avatar', 'title' : user }),
						$avatar 	= $('<img/>', {'src' : media }).appendTo($avatarLink),
						$user 		= $('<a/>', {'href':url, 'class' : 'pc-name', 'title' : userName, 'html' : userName }),
						$status 	= $('<div/>', {'class' : 'pc-status' }),
						// @todo: TRANSLATE
						$level		= $('<span class="meta">'+level+'</span>').appendTo($status);
				// In case we'd like to add the switch:
					/*
					$stSwitch	= $('<div class="js-pubsub switch-'+user+' rel" data-user="'+user+'">' +
										'<div class="switch">' +
			                                '<label class="label-unsubscribe" for="user-switch-'+user+'">' +
			                                    '<input type="checkbox" id="user-switch-'+user+'">' +
			                                    '<span></span>' +
			                                '</label>' +
		                                '</div>' +
			                            '<a class="js-unsubscribe btn-switch"'+
		                                   'href="http://agonzalez.lab.minijuegos.com/miniproject/www/MiniSite/user/actions/unsubscribe/'+user+'" rel="nofollow">'+
		                                    'siguiendo'+
		                                '</a>' +
		                                '<a class="js-subscribe btn-switch"'+
		                                   'href="http://agonzalez.lab.minijuegos.com/miniproject/www/MiniSite/user/actions/subscribe/'+user+'" rel="nofollow">'+
		                                    'seguir'+
		                                '</a>'+
	                                '</div>').appendTo($status);
					*/
				// appending the content
					$avatarLink.appendTo($content);
					$user.appendTo($content);
					$status.appendTo($content);
				// triggering hint
					self.hint.add('.js-drophover-'+user+' > a', $content, {
	                    position: "top", "stay": true, "class": "profile-card white"
	                });
				// In case we'd like to add the switch:
				// checking following status & setting up switch
				/*
					var followed;
					if(followed == '1') {
						$('.switch-'+user+' .js-subscribe').hide();
						$('.switch-'+user+' #user-switch-'+user).attr('checked',true);
					} else {
						$('.switch-'+user+' .js-unsubscribe').hide();
						$('.switch-'+user+' #user-switch-'+user).attr('checked',false);
					};
	                MP.user.eventUserDisplayed('.trending-users');
	            */

			};

			this.remove = function(user) {
				self.hint.remove('.js-drophover-'+user+' > a');
			};
		};

        this.newUserCard = new function() {
            var card 		= this;
            var $content 	= $('<div/>', {'class':'user-card-content'});
            var visible     = false;
            var $currentTarget  = false;

            this.add = function(event) {
                var userUrl, userAvatar, userUid, userId, userLevel;
                if (visible) return;
                $currentTarget = $(event.currentTarget);

                // Extract variables
                userId = $currentTarget.attr("data-user-id");
                userUid = $currentTarget.attr("data-user-uid");
                userLevel = $currentTarget.attr("data-user-level");
                userAvatar = $currentTarget.attr("data-user-avatar");
                userUrl = $currentTarget.attr("data-user-url");

                $content.empty();

                // creating the content
                var $avatarLink = $('<a/>', {'href':userUrl, 'class' : 'pc-avatar th-avatar', 'title' : userUid }),
                    $avatar 	= $('<img/>', {'src' : userAvatar }).appendTo($avatarLink),
                    $user 		= $('<a/>', {'href':url, 'class' : 'pc-name', 'title' : userUid, 'html' : userUid }),
                    $status 	= $('<div/>', {'class' : 'pc-status' }),
                    $level		= $('<span class="meta">'+userLevel+'</span>').appendTo($status);

                // appending the content
                $avatarLink.appendTo($content);
                $user.appendTo($content);
                $status.appendTo($content);
                // triggering hint
                self.hint.add($currentTarget, $content, {
                    position: "top", "stay": true, "class": "profile-card white"
                });

                //console.log("add "+$currentTarget.attr("data-user-uid"));
                visible = true;
            };

            this.remove = function(event) {
                if (!visible || !$currentTarget) return;
                //console.log("remove "+$currentTarget.attr("data-user-uid"));
                self.hint.remove($currentTarget);
                visible = false;
                $currentTarget = false;
            };

            this.ready = function() {
                $(document).on("mouseenter","[data-user-card=1]",card.add);
                $(document).on("mouseleave","[data-user-card=1]",card.remove);
            };

        };


		this.cardExtendedInfo = function(element) {

            var $cardList,
                $cards;

            // Card lists dom selector tripple checked
                if (typeof element=="undefined") element = ".js-card-list";
                if (element instanceof $) {
                    $cardList = element;
                } else {
                    $cardList = $(element);
                }
            // All the cards
                $cards = $cardList.find('.js-card');

            // Card lists setup
            $cardList.each(function() {
                var $this = $(this);
                var $thisCards,
                    $cardModel,
                    cardWidth,
                    cardMargin,
                    cardListWidth,
                    colsNumber;

                $thisCards = $this.find('.js-card');

				if ($thisCards.length == 0) { return true; }

                // Calculating number of cols
                    $cardModel      = $thisCards.first();
                    cardWidth       = $cardModel.width();
                    cardMargin      = parseInt($cardModel.css('margin-left'));
                    cardListWidth   = $(this).width();
                    colsNumber      = Math.round(cardListWidth/(cardMargin + cardWidth));

                // Determine if should show on the right left side
                    $this.find('.js-card:nth-child('+colsNumber+'n)'  ).find('.card').addClass('c-left uno');
                    $this.find('.js-card:nth-child('+colsNumber+'n-1)').find('.card').addClass('c-left dis');
            });

            // Cards show/hide interaction
    			$cards.each(function() {
    				var $card 		    = $(this),
    					$cardInfo 	    = $(this).find('.js-extended-info'),
    	            	scheduleShowNavTimeout;

    		        this.scheduleShowNav = function(){
    					clearTimeout(scheduleShowNavTimeout);
    		            scheduleShowNavTimeout = setTimeout(this.showNav, 160);
    		        };
    	            this.showNav = function(){
    	                $cardInfo.addClass('active');
    	            };
    	            this.hideNav = function(){
    	                $cardInfo.removeClass('active');
    	                clearTimeout(scheduleShowNavTimeout);
    	            };
    	            this.init = function(){
    	            	// on hover schedule to show
    	            		$card.hover(this.scheduleShowNav);
    	            	// on leave hide
    	            		$card.mouseleave(this.hideNav);
    	            };
    	            this.init();
    	        });

            // Ellipsis for descriptions
			self.helpers.ellipsis(element + ' .desc', 175);

		};

    this.singleCardExtendedInfo = function (element) {
        var $card, $cardList, $thisCard;
        // Card lists dom selector tripple checked
        if (element === undefined) return;
        $card = $(element);
        if ($card.length == 0) return false;
        $cardList = $card.parents(".js-card-list");
        $thisCard = $card.parent('.js-card');
        var cardWidth,
            cardMargin,
            cardListWidth,
            colsNumber;

        if ($thisCard.length == 0) {
            return true;
        }

        // Calculating number of cols
        cardWidth = $thisCard.width();
        cardMargin = parseInt($thisCard.css('margin-left'));
        cardListWidth = $cardList.width();
        colsNumber = Math.round(cardListWidth / (cardMargin + cardWidth));

        var indexOfCard = $thisCard.index() + 1;
        // Determine if should show on the right left side
        if (indexOfCard % colsNumber == colsNumber) {
            $thisCard.find('.card').addClass('c-left uno');
        }
        if (indexOfCard % colsNumber == colsNumber - 1) {
            $thisCard.find('.card').addClass('c-left dis');
        }

        // Cards show/hide interaction
        $card.each(function () {
            var $card = $(this),
                $cardInfo = $(this).find('.js-extended-info'),
                scheduleShowNavTimeout;

            this.scheduleShowNav = function () {
                clearTimeout(scheduleShowNavTimeout);
                scheduleShowNavTimeout = setTimeout(this.showNav, 160);
            };
            this.showNav = function () {
                $cardInfo.addClass('active');
            };
            this.hideNav = function () {
                $cardInfo.removeClass('active');
                clearTimeout(scheduleShowNavTimeout);
            };
            this.init = function () {
                // on hover schedule to show
                $card.hover(this.scheduleShowNav);
                // on leave hide
                $card.mouseleave(this.hideNav);
            };
            this.init();
        });

        // Ellipsis for descriptions
        self.helpers.ellipsis($card.find('.desc'), 175);

    };

        /* =====================
           === GENERIC CARDS ===
           ===================== */

        //--------------
        // CARDS HANDLER
        //--------------

        this.cards = new function() {

            var cards = this;

            /**
             * Object to handle card objects
             * @type {Array}
             */
            var cardObjects =[];

            /**
             * Object to handle cards cache
             * @type {Array}
             */
            this.cachedCards = [];

            /**
             * Instance of the active card object
             * @type {this.navigationCard}
             */
            var activeCard = null;

            /**
             * HTML element to use as wrapper of the cards
             * @type {string}
             */
            var htmlWrapper = '<div class="js-card extendedCard" id="generic-card"><div class="js-content"></div><span class="hook"></span></div>';

            /**
             * Should be a valid CSS selector
             * @type {string}
             */
            var trackableHTMLElements = "a, button";

            var _timeoutQueueInstance;

            /**
             * Dispatches the strategy of retrieving a cached card / creates a new one depending on the cached results
             * @param element
             */
            this.dispatchCardStrategy = function (element) {

                var card;
                var cachedCard = self.navigationCard.getFromStack($(this).attr("data-card"));

                if(cachedCard === false ) { // Card not in cache

                    this.createCardElement(element);

                } else { // Card in cache

                    this.retrieveCardFromCache(element);

                }

            }

            /**
             * Creates a new card Object and stores it in the Cache
             * @param element
             */
            this.createCardElement = function (element) {

                //Creating object
                    activeCard = Object.create( self.navigationCard );
                //Calling Init method
                    activeCard.init($(element));
                // Display Card
                    activeCard.scheduleShowCard();
                // Save card object
                    cardObjects.push({id: $(element).attr("data-card"), object: activeCard});

            };

            /**
             * Retrieves a card Object from the cache
             * @param element
             */
            this.retrieveCardFromCache = function (element) {

                var type = $(element).attr("data-card");

                for(var i= 0, j=cardObjects.length; i<j; i++ ) {
                    if (cardObjects[i].id == type) {
                        activeCard = cardObjects[i].object;
                    }
                }

                activeCard.scheduleShowCard();

            };

            /**
             * Removes a Card from the card cache
             * @param type
             */
            this.removeCardFromCache = function(type) {
                for(var i= 0, j=App.navigation.cards.cachedCards.length; i<j; i++ ) {
                    if (App.navigation.cards.cachedCards[i].type == type) {
                        // Remove from cache
                        App.navigation.cards.cachedCards.splice(i, 1);
                        break;
                    }
                }
            };

            /**
             * Delegate Event binding
             */
            this.initCards = function () {

                var $this = this;

                var clicked = false;


                $(htmlWrapper).appendTo('body');

                // Resize Listener
                $( window ).resize(function() { // When window is resized clean all cached card positions
                    // Timeout this!
                    if (_timeoutQueueInstance) clearTimeout(_timeoutQueueInstance); // If there is another timeout scheduled, clear it
                    _timeoutQueueInstance = setTimeout(function () {
                        for(var i= 0, j=cardObjects.length; i<j; i++ ) {
                            var card = cardObjects[i].object;
                            card.positionX = null;
                            card.positionY = null;
                            card.finalCardPositionX = null;
                            card.finalCardPositionY = null;
                        }
                    },200); // Program next process

                });

                // MouseEnter Listener
                $(self.navigationCard.config.parentElements).on({
                    'mouseenter': function (e) { // Show card
                        $this.dispatchCardStrategy(this);
                        e.stopPropagation();
                    },
                    'mouseleave' : function (e) { //Card hide!
                        activeCard.scheduleHideCard();
                        e.stopPropagation();
                    }
                }, '[data-card-event="hover"]');

                $(self.navigationCard.config.cardElement).on({
                    'mouseenter' : function(e) { // Mouse over card, cancel hide card event!
                        window.clearTimeout(activeCard.scheduleHideCardTimeout);
                        e.stopPropagation();
                    },
                    'mouseleave' : function (e) { // Mouse left the card, hide it.
                        activeCard.scheduleHideCard();
                        e.stopPropagation();
                    }
                });

                // Click Listener
                $(self.navigationCard.config.parentElements).on({
                    'click': function (e) {
                        e.preventDefault();
                        if(!clicked) { // card not visible, show it!
                            clicked = true;

                            $this.dispatchCardStrategy(this);

                        }else { // Card already clicked, hide card
                            clicked = false;
                            activeCard.scheduleHideCard();
                        }

                        e.stopPropagation();
                    }
                }, '[data-card-event="click"]');

                //Tracking Events "Click" Binding @ Card
				//$(self.navigationCard.config.cardElement).on({
				//    'click' : function(e) {
				//
				//        var $this = $(this);
				//        var trackTarget = $this.attr('data-track');
				//
				//        if (trackTarget){
				//            // Track event
				//            App.trackAnalyticsEvent(["_trackEvent","Navigation","Cards","clickCard-total"]);
				//            App.trackAnalyticsEvent(["_trackEvent","Navigation","Cards","clickCard-"+trackTarget]);
				//        }
				//        e.stopPropagation();
				//    }
				//}, trackableHTMLElements);

            };

        };


    /* =====================
     ==== CARD OBJECT ====
     ===================== */

    this.navigationCard = {

        navigationCard: this,
        type: null,
        scheduleShowCardTimeout: null,
        scheduleHideCardTimeout: null,
        content: null,
        positionX: null,
        positionY: null,
        finalCardPositionX: null,
        finalCardPositionY: null,
        $cardTriggerObject: null,
        hookDeviationY: 0,
        hookDeviationX: 0,


        // Generic config
        config: {
            sticky: false,
            position: "top",
            cssClass: false,
            animation: 'slide', //@todo: new animation types
            parentElements: ".container, .full-container, .slideshow-wrapper, aside", // Where we are searching for data-card's
            cardElement: "#generic-card", // Our card identifier
            cardContentSelector: "#generic-card .js-content",
            cardHookSelector: "#generic-card .hook",
            cardImgContainer: "#generic-card .imgWrapper",
            headerNavbar: "header.navbar", // Header
            footer: "footer.main-footer",
            cardOffsetFromTrigger: 5, // Card offset from trigger (margin)
            openCardTimeout: 160, // Timeout to open card
            hideCardTimeout: 100, // Timeout to close card
            strafeCorrectionFactor: 10
        },

        //------------------------------
        // INITIALIZATION & CONFIG SETUP
        //------------------------------


        /**
         * Init method
         * @param $cardReceived
         */
        init: function($cardReceived) {
            this.$cardTriggerObject = $cardReceived; //Save card received!
            this.prepareCard();

        },

        prepareCard: function() {
            this.setCardConfig();
            this.prepareCardLocation();
        },

        /**
         * Initial coordinates save of the cardTriggerObject element
         */
        prepareCardLocation: function() {
            var $this = this;
            //Saving absolute X,Y coords
            $this.positionY = $this.$cardTriggerObject.offset().top;
            $this.positionX = $this.$cardTriggerObject.offset().left;
        },

        /**
         * Config setter
         */
        setCardConfig: function() {

            if (this.$cardTriggerObject.attr("data-card-config")){
                var config = JSON.parse(this.$cardTriggerObject.attr("data-card-config"));
                this.config = $.extend({},this.config,config);
            }

        },

        /**
         * Dispatches the final card coordinates reading the config position value
         * @param forcePosition
         */
        prepareCardPosition: function(forcePosition) {

            // Vars
            var $this = this;
            var cardTriggerObject = $this.$cardTriggerObject;
            var config = $this.config;
            var position = config.position;
            var positionX = $this.positionX;
            var positionY = $this.positionY;

            if(typeof forcePosition != "undefined" && typeof forcePosition === "string") {
                position = forcePosition;
            }

            switch(position) {
                case "top":
                    $this.finalCardPositionY = positionY - $(config.cardElement).outerHeight(false) - config.cardOffsetFromTrigger;
                    $this.finalCardPositionX = positionX + ($(cardTriggerObject).outerWidth(false)/2) - ($(config.cardElement).outerWidth(false)/2) ;
                    break;
                case "bottom":
                    $this.finalCardPositionY = positionY + $(cardTriggerObject).outerHeight(false) + $this.config.cardOffsetFromTrigger;
                    $this.finalCardPositionX = positionX + ($(cardTriggerObject).outerWidth(false)/2) - ($(config.cardElement).outerWidth(false)/2) ;
                    break;
                case "left":
                    $this.finalCardPositionY = positionY + ($(cardTriggerObject).outerHeight(false)/2) - ($(config.cardElement).outerHeight(false)/2);
                    $this.finalCardPositionX = positionX - $(config.cardElement).outerWidth(false) - config.cardOffsetFromTrigger;
                    break;
                case "right":
                    $this.finalCardPositionY = positionY + ($(cardTriggerObject).outerHeight(false)/2) - ($(config.cardElement).outerHeight(false)/2);
                    $this.finalCardPositionX = positionX + $(cardTriggerObject).outerWidth(false) + config.cardOffsetFromTrigger;
                    break;
                default: // Default card == top card
                    $this.finalCardPositionY = positionY - $(config.cardElement).outerHeight(false) - config.cardOffsetFromTrigger;
                    $this.finalCardPositionX = positionX + ($(cardTriggerObject).outerWidth(false)/2) - ($(config.cardElement).outerWidth(false)/2) ;
                    break;
            }

            $this.fixFinalCardPositionWithStrafe(position);
            // Place Hook
            $this.setHookPosition(position);
        },

        /**
         * Slightly moves the card position if it collides with the window borders
         * @param position
         * @returns {boolean}
         */
        fixFinalCardPositionWithStrafe : function (position) {

            if (position === undefined) {return false;}

            var $this = this;
            var $cardElement = $(this.config.cardElement);
            var cardOffset = $this.config.strafeCorrectionFactor;

            switch(position) {
                case "top":
                case "bottom":

                    var screenWidth = $( window ).width();
                    var cardWidth = $cardElement.outerWidth(false);

                    if ($this.finalCardPositionX <= 0){
                        $this.hookDeviationX = $this.finalCardPositionX - cardOffset; // todo: Study deviation
                        $this.finalCardPositionX = cardOffset;
                        return false;}
                    if ($this.finalCardPositionX >= screenWidth - cardWidth){
                        $this.hookDeviationX = $this.finalCardPositionX; // Save original final position
                        $this.finalCardPositionX = screenWidth - cardWidth - cardOffset;
                        $this.hookDeviationX = $this.hookDeviationX - $this.finalCardPositionX;
                        return false;
                    }

                    break;

                case "left":
                case "right":

                    var screenHeight = $( window ).height();
                    var cardHeight = $cardElement.outerHeight(false);
                    var screenOffset = $(this.config.headerNavbar).offset().top;

                    if ($this.finalCardPositionY <= screenOffset){ // Card would be partially hidden on top window side
                        $this.hookDeviationY = $this.finalCardPositionY - (screenOffset + cardOffset);
                        $this.finalCardPositionY = screenOffset + cardOffset;
                        return false;
                    }
                    if ($this.finalCardPositionY >= screenOffset + screenHeight - cardHeight){  // Card would be partially hidden on bottom window side
                        $this.hookDeviationY = $this.finalCardPositionY; // Save original final position
                        $this.finalCardPositionY = screenOffset + screenHeight - cardHeight - cardOffset;
                        $this.hookDeviationY = $this.hookDeviationY - $this.finalCardPositionY;
                        return false;}
                    break;
            }

        },

        //---------------------------------------
        // CARD: CACHE MANAGEMENT & CONTENT FETCH
        //---------------------------------------


        /**
         * Cache: Store card in cache
         * @param element
         * @returns {boolean}
         */
        putInStack: function(element) {

            if(typeof element == "undefined") {
                return false;
            } else {

                if(element instanceof Object) {

                    var searchResult = this.getFromStack(element.type, true);

                    if(searchResult === false) { // Element not found in stack
                        App.navigation.cards.cachedCards.push(element); // store it
                    }else { // Element found in stack
                        App.navigation.cards.cachedCards.splice(searchResult,1); // Delete element from actual position
                        App.navigation.cards.cachedCards.push(element); // store it the last one
                    }

                    if(App.navigation.cards.cachedCards.length > 10 ) { // if stack is >= 10 delete the last element
                        App.navigation.cards.cachedCards.shift();
                    }

                }else {
                    return false;
                }
            }
            return true;
        },

        /**
         * Cache: Get/search card from cache
         * @param type
         * @param index
         * @returns {HTML/false}
         */
        getFromStack: function(type, index) {
            for(var i= 0, j=App.navigation.cards.cachedCards.length; i<j; i++ ) {
                if (App.navigation.cards.cachedCards[i].type == type) {
                    if(typeof index != "undefined") {
                        if(index) {
                            return App.navigation.cards.cachedCards.indexOf(App.navigation.cards.cachedCards[i]); // return array index
                        }else {
                            return App.navigation.cards.cachedCards[i]; // return data
                        }
                    }else {
                        return App.navigation.cards.cachedCards[i]; // return data
                    }
                }
            }
            return false;
        },

        /**
         * Get card inner HTML via Async transaction
         * @param type
         * @returns {HTML}
         */
        getCardContent: function(type) {

            var result = false;

            $.ajax({
                url : App.url.ajaxhtml+"nav/cards?type="+type,
                async: false, // @TODO: Meh... have a look at this
                success : function(response) {
                    result = response;
                }
            });

            return result;
        },

        //------------------------------------------------
        // CARD: HIDING & SHOWING FUNCTIONALITIES HANDLING
        //------------------------------------------------

        /**
         * Method that schedules the showing action of a card adding it in a Timeout queue
         */
        scheduleShowCard: function() {

            var $this = this;
            //Proxying functions
            var showCard = $.proxy($this.showCard, $this); // Proxy showCard function so we can send it's context to the timeout

            $this.clearTimeoutQueue();

            $this.scheduleShowCardTimeout = window.setTimeout(showCard, $this.config.openCardTimeout);
        },

        /**
         * Method that schedules the hiding action of a card adding it in a Timeout queue
         */
        scheduleHideCard: function() {

            var $this = this;
            //Proxying functions
            var hideCard = $.proxy($this.hideCard, $this); // Proxy hideCard function so we can send it's context to the timeout

            $this.clearTimeoutQueue();

            $this.scheduleHideCardTimeout = setTimeout(hideCard,$this.config.hideCardTimeout);
        },

        /**
         * Method that hides a card
         */
        hideCard: function() {

            var $card = $(this.config.cardElement);

            $card.removeClass("active "+this.config.cssClass).hide().removeClass('shown');
//            // Add custom class
//            var cssClass = this.config.cssClass;
//            $div.addClass(cssClass);

        },

        /**
         * Method that shows a card
         */
        showCard: function() {

            var $this = this;
            var type = $this.$cardTriggerObject.attr("data-card");

            var cachedCard = $this.getFromStack(type); // Get card from cache (if exists)

            if(cachedCard === false) { // card not in cache, request it to ajax-html
                $this.content = $this.getCardContent(type);
            } else { // card in cache, get from it
                $this.content = cachedCard.content;
            }

            if($this.content) {

                var $div = $($this.config.cardElement);

                // Fill card
                    $($this.config.cardContentSelector).html($this.content);

                // Add custom class
                    var cssClass = this.config.cssClass;
                    $div.addClass(cssClass);

                //Prepare deferred load
                    self.helpers.fetchDeferredImagesWithSpinner($($this.config.cardImgContainer));

                // Locate card --> @read: positioning at this moment since we need the wrapper div to have its content for further calculations of positions
                    var collision = $this.detectCardCollision(); // Detect collisions
                    if(collision) {
                        $this.prepareCardPosition(collision);
                    } else {
                        $this.prepareCardPosition();
                    }
                    $div.css({'top':$this.finalCardPositionY,'left':$this.finalCardPositionX});

                // Store
                    $this.putInStack({type: type, content: $this.content});

                // Show card
                    $div.show().fadeIn('slow');
                    $div.addClass('shown');
                // Track event
				//    App.trackAnalyticsEvent(["_trackEvent","Navigation","Cards","showCard"]);
            }
        },

        //--------
        // HELPERS
        //--------

        /**
         * Method that clears the Timeout queue
         */
        clearTimeoutQueue: function () {
            window.clearTimeout(this.scheduleShowCardTimeout);
        },

        /**
         * Method that injects the card position class in the card wrapper
         * @param position
         */
        setHookPosition: function(position) {
            var $this = this;

            // Add the class
            if(typeof position == "string") {

                var $cardElement = $($this.config.cardElement);

                $cardElement
                    .removeClass('card-top') // delete all hooks if any
                    .removeClass('card-bottom') // delete all hooks if any
                    .removeClass('card-left') // delete all hooks if any
                    .removeClass('card-right') // delete all hooks if any
                    .addClass('card-'+position);    // add the hook we want
            }

            // Set hook and reset the position
            var $hook = $($this.config.cardHookSelector);

            // Reset Deviations and other styles on the Hook
            $hook.removeAttr("style");

            // Apply Hook deviations if needed
            // @read: These deviations are calculated if the card final position needs to be fixed with a strafe movement

            if ($this.hookDeviationX != 0) {
                var hookWidth = $hook.outerWidth(false); //It's width its the border width
                var cardWidth = $($this.config.cardElement).outerWidth(false);
                var finalDeviation = (cardWidth/2)+$this.hookDeviationX;

                // If the final deviation is bigger than the total length of the side minus a little margin (due to the border radius and aesthetic stuff), we hide the hook
                if (finalDeviation >= cardWidth - (hookWidth*2) ){
                    $hook.hide();
                }else{
                    // Deviate from center!
                    $hook.css({'left': finalDeviation});
                }
            }

            if ($this.hookDeviationY != 0) {
                var hookHeight = $hook.outerHeight(false); //It's height its the border height
                var cardHeight = $($this.config.cardElement).outerHeight(false);
                var finalDeviation = (cardHeight/2)+$this.hookDeviationY;

                // If the final deviation is bigger than the total length of the side minus a little margin (due to the border radius and aesthetic stuff), we hide the hook
                if (finalDeviation >= cardHeight - (hookHeight*2) ){
                    $hook.hide();
                }else{
                    // Deviate from center!
                    $hook.css({'top': finalDeviation});
                }
            }
        },

        /**
         * Method that detects a possible collision between the card and the viewport
         * @returns string/false
         */
        detectCardCollision: function() {

            var finalPosition;

            switch(this.config.position) {
                case "top":
                    finalPosition = this.topCollision($(this.config.cardElement), $(this.config.headerNavbar));
                    break;
                case "bottom":
                    finalPosition =  this.bottomCollision($(this.config.cardElement));
                    break;
                case "left":
                    finalPosition = this.leftCollision($(this.config.cardElement));
                    break;
                case "right":
                    finalPosition =  this.rightCollision($(this.config.cardElement));
                    break;
                default:
                    finalPosition = this.topCollision($(this.config.cardElement), $(this.config.headerNavbar));
                    break;
            }

            return finalPosition;
        },

        /**
         * Method that looks for a possible collision between the card and the top side of the viewport
         * @param $cardElement
         * @param $headerNav
         * @returns string/false
         */
        topCollision: function ($cardElement, $headerNav) {

            var header = $headerNav.offset().top + $headerNav.outerHeight(true);

            var card = this.$cardTriggerObject.offset().top - $cardElement.height() - this.config.cardOffsetFromTrigger;

            if(card <= header) {
                return "bottom";
            }
            return false;
        },

        /**
         * Method that looks for a possible collision between the card and the bottom side of the viewport
         * @param $cardElement
         * @returns string/false
         */
        bottomCollision: function($cardElement) {

            var distanceToTop = this.$cardTriggerObject.offset().top - $(document).scrollTop();

            var distanceToBottom = $(window).height() - distanceToTop - this.$cardTriggerObject.height() - this.config.cardOffsetFromTrigger;

            var cardHeight = $cardElement.height();

            if(distanceToBottom <= cardHeight) {
                return "top";
            }
            return false;
        },

        /**
         * Method that looks for a possible collision between the card and the left side of the viewport
         * @param $cardElement
         * @returns string/false
         */
        leftCollision: function($cardElement) {

            var cardPositionX = this.positionX - $cardElement.outerWidth(false) - this.config.cardOffsetFromTrigger;

            if(cardPositionX < 0) {
                return "right";
            }
            return false;
        },

        /**
         * Method that looks for a possible collision between the card and the right side of the viewport
         * @param $cardElement
         * @returns string/false
         */
        rightCollision: function($cardElement) {

            var cardPositionX = this.positionX + $(this.$cardTriggerObject).outerWidth(false) + $cardElement.outerWidth(false) + this.config.cardOffsetFromTrigger;

            var screenWidth = $( window ).width();

            if(cardPositionX > screenWidth) {
                return "left";
            }
            return false;
        }

    };


    /* =========================
       === GENERIC CARDS END ===
       ========================= */

	this.gameCardVideoThumbnails = new function() {
		var self = this,
			$body,
			gameCardSelector = '.card.card-game',
			videoThumbnailSelector = '.video-thumbnail';

		var bindEventListeners = () => {
			$body.on('mouseover', gameCardSelector, function(ev) {
				var $thisEl = $(this);
				var $videoThumbnail = $thisEl.find(videoThumbnailSelector);
				if ($videoThumbnail && $videoThumbnail.attr('data-video-src')) {
					$videoThumbnail.on('canplaythrough', function(ev) {
						$videoThumbnail.parents('.video-thumbnail-wrapper').addClass('loaded')
					});
					$videoThumbnail.append(`<source src="${$videoThumbnail.data('video-src')}" type="video/mp4">`);
					$videoThumbnail.removeAttr('data-video-src');

				}
			});
		};

		self.init = function () {
			$body = $('body');
			bindEventListeners()
		}
	};

    /* Minimonkey */
    this.minimonkey = new function() {
        var minimonkey = this;

        this.handler = function() {
            if (!App.userChannel) {return false;}
            return App.userChannel.minimonkeyHandler;
        }

        this.init = function() {
            //minimonkey.roomUsage.init();
        }

        this.ready = function() {
            if (!minimonkey.handler()) {return; /* Handler not available, do not init */}
            minimonkey.roomUsage.ready();
            minimonkey.tagUsage.ready();
            minimonkey.multiplayerHomeBanner.ready();
        }


        this.multiplayerHomeBanner = new function() {

            var mpHomeBanner = this,
                itemsSize = 0,
                intervalInstance;
            /* DOM jQuery objects */
            var $multiplayerBanner,
                $multiplayerBannerItems;


            var config = {
                multiplayerBannerSelector: '.js-multiplayer-banner',
                multiplayerBannerItemSelector: '.js-multiplayer-banner-item',
                activeItemClass: 'active-item',
                intervalGap : 20000,
                transitionAnimationSpeed: 300,
                pauseOnHover : true
            };

            this._ready = false;

            var startRotation = function() {

                if (itemsSize > 1) {
                    // Set interval, rotation stuff
                    showNextItem();
                    launchInterval();
                } else {
                    // Simply show it, there are not enough items for rotation
                    showNextItem();
                }

            }

            var launchInterval = function() {
                intervalInstance = setInterval(showNextItem, config.intervalGap);
            }

            var showNextItem = function() {
                var $nextItem;
                var $activeItem = $multiplayerBanner.find("."+config.activeItemClass);

                // Active Item set
                if ($activeItem.size() > 0) {
                    $nextItem = $activeItem.next();
                    if ($nextItem.size() == 0) { $nextItem = $multiplayerBannerItems.first(); }

                    // Animate the transition
                    $activeItem.fadeOut(config.transitionAnimationSpeed, function() {
                        $nextItem.fadeIn(config.transitionAnimationSpeed);
                        $activeItem.removeClass(config.activeItemClass);
                        $nextItem.addClass(config.activeItemClass);
                    });

                }else{ // No active item

                    // Animate the transition
                    $nextItem = $multiplayerBannerItems.first();
                    $nextItem.fadeIn(config.transitionAnimationSpeed);
                    $nextItem.addClass(config.activeItemClass);
                }


            }

            var bindEventListeners = function() {

                $multiplayerBanner.on("mouseenter", "."+config.activeItemClass, function() {
                    if (intervalInstance)
                        clearInterval(intervalInstance);
                });

                $multiplayerBanner.on("mouseleave", "."+config.activeItemClass, function() {
                    launchInterval();
                });

            };

            this.ready = function() {

                $multiplayerBanner = $(config.multiplayerBannerSelector);

                if ($multiplayerBanner.size() == 0 ) {return false;}

                $multiplayerBannerItems = $multiplayerBanner.find(config.multiplayerBannerItemSelector);

                itemsSize = $multiplayerBannerItems.size();
                if (itemsSize == 0 ) {return false;}

                startRotation();
                if (config.pauseOnHover){
                    bindEventListeners();
                }
                mpHomeBanner._ready = true;
            };

        };

        this.tagUsage = new function() {

            var tagUsageObject;
            var tagUsage = this;
            var foundObjectsToUpdate;
            var reBindListenersTimeoutInstance = false;

            var config = {
                elementClass : '.js-tags-usage',
                elementValueToUpdateClass : '.js-value',
                updateAnimationClassName : 'badge-fade',
                timeLapseMode: false,
                updateAnimationMaxDelay : 2000,
                updateAnimationMinDelay : 500
            }

            this._ready = false;

            this.addObjects = function($wrapper) {
                if ($wrapper == undefined || ! $wrapper instanceof jQuery){
                    $wrapper = $('body');
                }

                foundObjectsToUpdate = $wrapper.find(config.elementClass);

                for (i=0,j=foundObjectsToUpdate.length;i<j;i++) {
                    $object = foundObjectsToUpdate.eq(i);
                    // Set binded, just in case we need it @ the future
                    if ($object.attr("data-binded")!="1") {
                        $object.attr("data-binded","1");
                    }
                }
            }

            var pruneObjects = function() {

                for(var i = foundObjectsToUpdate.length -1; i >= 0 ; i--){
                    var $object = foundObjectsToUpdate[i];
                    if (!document.body.contains($object)) {
                        // Remove item if it does not exists
                        foundObjectsToUpdate.splice(i, 1);
                    }

                }

                //console.log("After Pruning:");
                //console.dir(foundObjectsToUpdate);
            }

            this.updateObjects = function (newTagUsageInfoObject) {
                if (!newTagUsageInfoObject instanceof Object){ return false; }
                // Override tag object
                tagUsageObject = newTagUsageInfoObject;

                pruneObjects();

                var i, j, i1, j1;
                for (i=0, j=foundObjectsToUpdate.length;i<j;i++) {
                    $object = foundObjectsToUpdate.eq(i);
                    var tagIds = $object.attr("data-tag-id");
                    if (tagIds === undefined || !tagIds) { return true; } // Skip to next iteration
                    // Check if tag exists in the info we have
                    tagIds = JSON.parse(tagIds);
                    totalOnlinePlayers = 0;
                    for (i1=0,j1=tagIds.length;i1<j1;i1++) {
                        var actualTag = parseInt(tagIds[i1], 10);
                        if (tagUsageObject[actualTag] !== undefined) {
                            totalOnlinePlayers+=tagUsageObject[ actualTag ];
                        }
                    }

                    var $valueWrapper;
                    if (totalOnlinePlayers > 0){
                        // Update HTML and trigger custom event in case someone wants to listen for it
                        // Value has changed?
                        $valueWrapper = $object.find(config.elementValueToUpdateClass);
                        var prevValue = parseInt($valueWrapper.html(), 10);
                        if (prevValue != totalOnlinePlayers) {

                            // Auto executable closure to assure variable scope @ setTimeOut
                            (function ($valueWrapper, totalOnlinePlayers) {
                                var updateHtml = function() { $valueWrapper.html(totalOnlinePlayers).trigger('UsageUpdated'); $object.show(); };
                                if (config.timeLapseMode){
                                    var timeLapse = Math.round(Math.random() * (config.updateAnimationMaxDelay - config.updateAnimationMinDelay) + config.updateAnimationMinDelay);
                                    setTimeout( updateHtml, timeLapse);
                                }else{
                                    updateHtml();
                                }
                            }($valueWrapper, totalOnlinePlayers));

                        }
                    } else {
                        $object.hide();
                    }
                }

            }

            var bindEventListeners = function() {

                foundObjectsToUpdate.on('UsageUpdated', function(event) {
                    // Animation Blink
                    var $this = $(this),
                        $newOne = $this.clone(true);

                    $this.before($newOne);
                    $this.remove();
                    $newOne.show().addClass('regenerated');
                    $newOne.find(config.elementValueToUpdateClass).removeClass(config.updateAnimationClassName).addClass(config.updateAnimationClassName);

                    // Since is a brand-new element, we need to add it into the objects object (lol)
                        foundObjectsToUpdate.push($newOne.get(0));
                    // Re-bind since this has no delegate functionality
                    if (reBindListenersTimeoutInstance) clearTimeout(reBindListenersTimeoutInstance);
                    reBindListenersTimeoutInstance = setTimeout(bindEventListeners,500);
                });
            }

            this.ready = function() {
                tagUsage.addObjects(); /* Add all objects */
                tagUsage._ready = true;
                bindEventListeners();
            };

        }



        /* Searches the dom for game rooms and appends & update their usage (users connected) */
        this.roomUsage = new function() {
            var updateObjects;
            var roomUsage = this;
            var foundObjects = {};
            /**
             * Format:
             * { id: [$object1, $object2],
             *   id2: [$object1, $object2]}
             */

            var config = {
                elementClass : '.js-thm-room',
                elementValueToUpdateClass : '.js-value',
                updateAnimationClassName : 'badge-fade',
                zeroCaseClass : '.zero-case',
                updateAnimationMaxDelay : 2000,
                updateAnimationMinDelay : 500,
                startupDelay: 1750 // ms of delay until we initialize the module
            };

            var pruneObjects = function() {

                for(var i = foundObjects.length -1; i >= 0 ; i--){
                    var $objects = foundObjects.eq(i);

                    for(var j = $objects.length -1; j >= 0 ; j--) {
                        var $object = $objects.eq(j);
                        if ($object) {
                            if (!document.body.contains($object.get(0))) {
                                // Remove item if it does not exists
                                $objects.splice(index, 1);
                            }
                        }
                    }
                    if ($objects.length==0) {
                        delete foundObjects[i];
                    }
                }
            };

            var addObjects = function($objects) {
                var i, j, $addedObjects = $(), $object;

                for (i=0,j=$objects.length;i<j;i++) {
                    $object = $objects.eq(i);
                    var id = $object.attr("data-id");
                    // Check if item already exists
                    if ($object.attr("data-binded")!="1") {
                        $object.attr("data-binded","1");
                        $object.attr("data-room","room|"+$object.attr("data-type")+"|"+id); /* room|pagetype|pageid|1 (for production game) */
                        if (! foundObjects.hasOwnProperty(id)) {
                            foundObjects[id] = [];
                        }
                        foundObjects[id].push($object);
                        //$foundObjects = $foundObjects.add($object);
                        //$addedObjects = $addedObjects.add($object);
                    }
                }
                updateObjects();
            };

            updateObjects = function() {
                var roomsList = [], room;

                if (!minimonkey.handler().isOnline()) {
                    /* Not online, wait a few seconds and retry */
                    setTimeout(function() {
                        updateObjects();
                    },1000);
                    return;
                }

                pruneObjects();


                $.each(foundObjects, function( id, $objects){
                    if ($objects.length > 0 ) {
                        $.each($objects, function( index, $object){
                            room = $object.attr("data-room");
                            roomsList.push(room);
                        });
                    }
                });

                if(roomsList.length > 0) {
                    minimonkey.handler().requestRoomsStats(roomsList, function (responseMessage) {
                        var roomUsage, i, j, $object, roomsStats;
                        if (responseMessage.type == "get-rooms-stats") {
                            //console.dir(responseMessage);
                            roomsStats = responseMessage.payload['rooms'];
                            $.each(foundObjects, function( id, $objects){
                                if ($objects.length > 0 ) {
                                    var roomUsage = null;
                                    $.each($objects, function( index, $object){
                                        if (!roomUsage)
                                            roomUsage = roomsStats[$object.attr("data-room")];

                                        if (roomUsage !== "undefined" && parseInt(roomUsage) > 0) {
                                            // Update HTML and trigger custom event in case someone wants to listen for it
                                            $object.find(".js-total").find(config.elementValueToUpdateClass).html(roomUsage).removeClass("active-zero-case").trigger('UsageUpdated');
                                            $object.show();
                                        } else {
                                            $object.find(".js-total").find(config.elementValueToUpdateClass).html('').addClass("active-zero-case").trigger('UsageUpdated');
                                            // Zero Case show / hide logic
                                            if ($object.find(config.zeroCaseClass).size() > 0){
                                                $object.show();
                                            } else{
                                                $object.hide();
                                            }

                                        }
                                    });
                                }
                            });
                        } else {
                            // Bad response, how to handle it
                            /*
                             if (responseMessage.type=="exception") {} else {}
                             */
                        }
                    });
                }
            };


            this.add = function(jquerySelector) {
                var $objects;
                if (jquerySelector === undefined) {
                    $objects = $(config.elementClass);
                } else if (jquerySelector instanceof $) {
                    $objects = jquerySelector.find(config.elementClass);
                } else {
                    $objects = $(jquerySelector);
                }
                if ($objects.size()>0) {
                    addObjects($objects);
                }
            };

            this.ready = function() {

                setTimeout(function() {
                    roomUsage.add(); /* Add all objects */
                    setInterval(updateObjects, App.cfg.productionMode ? 30000:10000); /* Refresh after X seconds for users online */
                }, config.startupDelay);

            };
        };
    };


	// New 1140 Grid resolutions
    this.resolutions =  {
        XS:     {min: 0, 	max: 767},
        S:      {min: 768, 	max: 1366},
        M:      {min: 1367, max: 1599},
        L:      {min: 1600, max: 1919},
        XL:     {min: 1920}
    };

	/*// Old 980 Grid resolution thresholds
	 this.resolutions =  {
		 XS:     {min: 0, max: 767},
		 S:      {min: 768, max: 1229},
		 M:      {min: 1230, max: 1519},
		 L:      {min: 1520, max: 1919},
		 XL:     {min: 1920}
	 }*/

    /* =================================
       ===== CATEGORIES NAVIGATION =====
       ================================= */

    this.categoriesNavigation = new function() {

        // Self reference
            var self     = this;

        // Private properties
            var analyticsCategory = "Menu"; // Analytics event category
			var trackAnalytics = false;
            var startedVisible = true; // Did it started visible?

        // Global properties
            this.browserWidth  = null;
            this.browserHeight = null;
            // this.isGameFullscreen = false;

        // Status properties
            this._ready             = false;
            this._init              = false;
            this.collapsed          = null;
            this.wrapperAnimationsEnabled = true;
            this.currentLayoutMode  = null;    // When opened is positioned (attached / floating / pushing) the content
            this.toggle_running     = false;   // It's performing an open or close animation
            this.toggle_speed       = 250;     // Open and close speed in miliseconds

        // Resize properties
            this.resizeTimeoutInstance = null;

		// DOM

		var $body,
			$categoriesNav,
			$categoriesNavInner,
			$navbar,
			$categoriesNavToggle,
			$categoriesNavBubble,
			$navItem,
			$navItemToggle,
			$dockedModeToggle;

        // PRIVATE config
        var config = {
            bodySelector                  : "body",
            contentWrapperId              : 'contentWrapper',
            categoriesNavId               : 'categoriesNav',
            categoriesNavInnerSelector    : '.inner',
            navbarId                      : 'navbar',
            categoriesNavToggleSelector   : '.js-categories-nav-toggle',
            categoriesNavBubbleSelector   : '.js-categories-nav-bubble',
            navItemSelector               : '.js-nav-item',
            navItemToggleSelector         : '.js-nav-item-toggle',
            dockedModeToggleSelector      : '.js-toggle-docked-mode',
			notDockedModeClassName	      : 'not-docked',
            navListSelector               : '.nav-list',
            cookieDisplayMode             : "mp_catd",
            cookieToggleTooltip           : "mp_catt",
			cookieDockedMode			  :  "mp_catdock",
            cookieTtl : 0.3,
			setLayoutModeDelayMS : 2500
        };

        var getAnalyticsActionPrefix = function() {
            if (startedVisible) {
                return "VIS-";
            }
            return "INV-";
        };

        var getAnalyticsActionTotalPrefix = function() {
            return "TOT-";
        };

        /*****************************************************************************************
         * ▼ Categories Navigation Manager
         *****************************************************************************************/

        /**
         * Set layout mode (pushing / floating)
         */
        this.setLayoutMode = function() {

            // Check browser width
                self.browserWidth    = $(window).width();
            // Set layout status

                if($body.hasClass('fullscreen')) {
                    self.currentLayoutMode = 'FULLSCREEN';
                    self.categoriesNavigationStatus = 'FULLSCREEN';
                } else if(self.browserWidth < ( App.navigation.resolutions.S.max + 60 )) {
                    self.currentLayoutMode = 'SMALL';
                    self.categoriesNavigationStatus = 'PUSHING';
                    $body.addClass('st-cat-nav-pushing');
                    $body.removeClass('st-cat-nav-attached');
                    $body.removeClass('st-cat-nav-fixed');
                    $body.removeClass('st-display-small');
                    if(self.browserWidth <= 1080) $body.addClass('st-display-small');
                } else if(self.browserWidth >= App.navigation.resolutions.L.min) {
                    self.currentLayoutMode = 'LARGE';
                    self.categoriesNavigationStatus = 'FIXED';
                    $body.addClass('st-cat-nav-fixed');
                    $body.removeClass('st-cat-nav-attached');
                    $body.removeClass('st-cat-nav-pushing');
                    $body.removeClass('st-display-small');
                } else {
                    self.currentLayoutMode = 'MEDIUM';
                    self.categoriesNavigationStatus = 'ATTACHED';
                    $body.addClass('st-cat-nav-attached');
                    $body.removeClass('st-cat-nav-fixed');
                    $body.removeClass('st-cat-nav-pushing');
                    $body.removeClass('st-display-small');
                }
        }

        this.disableWrapperAnimations = function() {
            if (!self.wrapperAnimationsEnabled) {return;}
            $categoriesNav.addClass("no-transition");
            self.wrapperAnimationsEnabled = false;
        }

        this.enableWrapperAnimations = function() {
            if (self.wrapperAnimationsEnabled) {return;}
            $categoriesNav.removeClass("no-transition");
            self.wrapperAnimationsEnabled = true;
        };

        /**
         * marks a category as active
         * @param categoryId
         */
        this.markCategoryAsActive = function (categoryId) {
            $categoriesNav.find(".js-nav-item-cat-"+categoryId).addClass("active open");
        };

        /**
         * Set visibility (opened / collapsed)
         */
        this.show = function(manualMode) {
            if (manualMode===undefined) manualMode = false;
			if (!this.collapsed) { return false; }
            this.collapsed = false;
            //$categoriesNavToggle.addClass('active');
            $body.removeClass('st-cat-nav-collapsed');
            $body.addClass('st-cat-nav-open');
            /**
             * IF WE'RE IN ATTACHED/PUSHING MODE, WE FORCE PM TO HIDE!
             */
            if (self.categoriesNavigationStatus == 'ATTACHED' || self.categoriesNavigationStatus == 'PUSHING') {
                if (App.presenceManager.isReady())
                    App.presenceManager.collapse();
            }

			///* Track analytics event */
			//if (trackAnalytics) {
			//	if (manualMode) {
			//		App.trackAnalyticsEvents(
			//			["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "ShowManual", null, 1],
			//			["_trackEvent", analyticsCategory, getAnalyticsActionTotalPrefix() + "ShowManual", null, 1]
			//		);
			//	} else {
			//		App.trackAnalyticsEvents(
			//			["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "ShowAuto", null, 1],
			//			["_trackEvent", analyticsCategory, getAnalyticsActionTotalPrefix() + "ShowAuto", null, 1]
			//		);
			//	}
			//}
        };
        this.hide = function(manualMode) {
            if (manualMode===undefined) manualMode = false;
            if (this.collapsed) { return false; }
            this.collapsed = true;
            //$categoriesNavToggle.removeClass('active');
            $body.addClass('st-cat-nav-collapsed');
            $body.removeClass('st-cat-nav-open');
            $navItem.removeClass('open'); // collapse all subnav items
            /* Track analytics event */
			//if (trackAnalytics) {
			//	if (manualMode) {
			//		App.trackAnalyticsEvents(
			//			["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "HideManual", null, 1],
			//			["_trackEvent", analyticsCategory, getAnalyticsActionTotalPrefix() + "HideManual", null, 1]
			//		);
			//	} else {
			//		App.trackAnalyticsEvents(
			//			["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "HideAuto", null, 1],
			//			["_trackEvent", analyticsCategory, getAnalyticsActionTotalPrefix() + "HideAuto", null, 1]
			//		);
			//	}
			//}
            
        };

        this.navToggle = function() {
            // if (self.currentLayoutMode == 'LARGE') return; // disabling hide on large screens
            if (this.collapsed) {
                self.show(true);
                // Stick the cookie
                App.lib.setCookie(config.cookieDisplayMode, 'show', App.cfg.cookieDomain, config.cookieTtl);
            } else {
                self.hide(true);
                // Stick the cookie
                App.lib.setCookie(config.cookieDisplayMode, 'hide', App.cfg.cookieDomain, config.cookieTtl);
            }
        };

        this.subNavToggle = function($element) {
            var $currentItemToggleItem = $element.parents('.js-nav-item');
            var $catItem = $currentItemToggleItem.find(".nav-item-level>a");
            if($currentItemToggleItem.hasClass('open')) {
                $currentItemToggleItem.removeClass('open');
                // Event
				//if ($catItem) {
				//if (trackAnalytics) {
				//	App.trackAnalyticsEvents(
				//		["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "CloseCat", $catItem.attr("title"), 1],
				//		["_trackEvent", analyticsCategory, getAnalyticsActionTotalPrefix() + "CloseCat", $catItem.attr("title"), 1]
				//	);
				//}
				//}
            } else {
                $navItem.removeClass('open');
                $currentItemToggleItem.addClass('open');
                // Event
				//if ($catItem) {
				//if (trackAnalytics) {
				//	App.trackAnalyticsEvents(
				//		["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "OpenCat", $catItem.attr("title"), 1],
				//		["_trackEvent", analyticsCategory, getAnalyticsActionTotalPrefix() + "OpenCat", $catItem.attr("title"), 1]
				//	);
				//}
				//}
            };
        };


        /**
         * Resize watcher
         */        
        this._resize = function() {
            if (self.resizeTimeoutInstance) clearTimeout(self.resizeTimeoutInstance);
            if (self.currentLayoutMode == 'FULLSCREEN') return;

            self.setLayoutMode();
            // show / hide on resize
            /*if (self.currentLayoutMode == 'LARGE' ||  self.currentLayoutMode == 'MEDIUM') {
                // We collapse from Large resolutions in Game Pages
            	if (App.pageType === "game") {
					if (self.collapsed) return;
					self.hide(false);
				} else {
					if (!self.collapsed) return;
					if (App.lib.getCookie(config.cookieDisplayMode) == "hide") return;
					self.show(false);
				}
            } else if (self.currentLayoutMode == 'SMALL') {
				if (self.collapsed) return;
				self.hide(false);
            }*/
        };
        this._scheduleResize = function() {
            if (self.resizeTimeoutInstance) clearTimeout(self.resizeTimeoutInstance);
            self.resizeTimeoutInstance = setTimeout(self._resize,350);
        };
        
		var setDockedMode = function() {
			$body.removeClass(config.notDockedModeClassName);
			App.lib.setCookie(config.cookieDockedMode, 1, App.cfg.cookieDomain, 7);
			$dockedModeToggle.addClass("docked").removeClass("not-ready");
		};

		var unsetDockedMode = function() {
			$body.addClass(config.notDockedModeClassName);
			$dockedModeToggle.removeClass("docked").removeClass("not-ready");
			App.lib.setCookie(config.cookieDockedMode, 0, App.cfg.cookieDomain, 7);
		};

        /*****************************************************************************************
         * ▼ Readiness / initialization / current state
         *****************************************************************************************/

        var showTooltip = function() {
            // Cookie exists, let's use it
            if (App.lib.getCookie(config.cookieToggleTooltip) == null){
                // Show the Categories tooltip
                    setTimeout(function() {
                        $categoriesNavBubble.fadeIn();
                        $categoriesNavToggle.addClass('highlighted');
                    },2000);
            }
        }

		var scheduleHideTimeoutInstance;

        var bindEventListeners = function() {

            if (this._ready) {return;}

            // On resize
            $(window).on('resize', function() {
                self._scheduleResize();
            });

            // Toggle navigation
            /*$categoriesNavToggle.on('click', function(e){
                e.preventDefault();
                self.navToggle();
                // Set the cookie
                //if (App.lib.getCookie(config.cookieToggleTooltip) == null){
                //
                //    $categoriesNavBubble.hide();
                //    $categoriesNavToggle.removeClass('highlighted');
                //    App.lib.setCookie(config.cookieToggleTooltip, 1, App.cfg.cookieDomain, 100);
                //}
                
            });*/

			var $hoverTargets = $categoriesNav.add($categoriesNavToggle.filter(".short-screen-mode"));
			$hoverTargets.hover(function(e){
				e.preventDefault();
				e.stopPropagation();
				if (scheduleHideTimeoutInstance) { clearTimeout(scheduleHideTimeoutInstance); }
				// if (self.currentLayoutMode == 'LARGE') return; // disabling hide on large screens
				if (self.collapsed) {
					self.show(true);
					// Stick the cookie
					//App.lib.setCookie(config.cookieDisplayMode, 'show', App.cfg.cookieDomain, config.cookieTtl);
				}
			}, function(e) {
				e.preventDefault();
                e.stopPropagation();
				scheduleHideTimeoutInstance = setTimeout(function() {
					self.hide(true);
					// Stick the cookie
					//App.lib.setCookie(config.cookieDisplayMode, 'hide', App.cfg.cookieDomain, config.cookieTtl);
				}, 500);
			});

            // Toggle subNavigation
            $navItemToggle.on('click', function(e){
                e.preventDefault();
                self.subNavToggle($(this));
            });

            $categoriesNav.on("click", ".nav-item-level-1>a", function(ev) {
                var $this = $(this);
                    
                if ($this.data("click")!="1") {
                    $this.data("click","1").addClass("focus");
                    setTimeout(function() {
                        window.location.href=$this.attr("href");
                    },200);
					//if (trackAnalytics) {
					//	App.trackAnalyticsEvents(
					//		["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "Click-Tot", $this.attr("title"), 1],
					//		["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "Click-Lv1", $this.attr("title"), 1],
					//		["_trackEvent", analyticsCategory, getAnalyticsActionTotalPrefix() + "Click-Lv1", $this.attr("title"), 1]
					//	);
					//}
                }
                ev.preventDefault();
                ev.stopPropagation();
            });

            $categoriesNav.on("click", ".nav-item-level-2>a", function(ev) {
                var $this = $(this);
                if ($this.data("click")!="1") {
                    $this.data("click","1").addClass("focus");
                    setTimeout(function() {
                        window.location.href=$this.attr("href");
                    },200);
					//if (trackAnalytics) {
					//	App.trackAnalyticsEvents(
					//		["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "Click-Tot", $this.attr("title"), 1],
					//		["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "Click-Lv2", $this.attr("title"), 1],
					//		["_trackEvent", analyticsCategory, getAnalyticsActionTotalPrefix() + "Click-Lv2", $this.attr("title"), 1]
					//	);
					//}
                }
                ev.preventDefault();
                ev.stopPropagation();
            });

            if ($dockedModeToggle.length > 0) {
            	$dockedModeToggle.click(function(ev) {
            		ev.preventDefault();
            		ev.stopPropagation();
            		if ($body.hasClass(config.notDockedModeClassName)) {
						setDockedMode();
					} else {
            			unsetDockedMode();
					}
            		self.hide();
				});
			}

        };

		var isBot = function () {
			var ua = navigator.userAgent.toLowerCase();
			return (ua.indexOf('googlebot') >= 0 || ua.indexOf('bingbot') >= 0 || ua.indexOf('bot') >= 0);
		};

		var hasCookies = function () {
			var cookieStr = document.cookie;
			return cookieStr.length > 0;
		};

        this.ready = function() {

            // Set-up DOM objects
                $body                   = $(config.bodySelector);
                //$contentWrapper         = $("#"+config.contentWrapperId);
                $categoriesNav          = $("#"+config.categoriesNavId);

                // If no HTML present, return, CategoriesNav is NOT READY
                if ($categoriesNav.size()<1){return;}

                $categoriesNavInner     = $categoriesNav.find(config.categoriesNavInnerSelector);
                $navbar                 = $("#"+config.navbarId);
                $categoriesNavToggle    = $(config.categoriesNavToggleSelector);
                $categoriesNavBubble    = $(config.categoriesNavBubbleSelector);
                $navItem                = $categoriesNav.find(config.navItemSelector);
                $navItemToggle          = $categoriesNav.find(config.navItemToggleSelector);
				$dockedModeToggle       = $categoriesNav.find(config.dockedModeToggleSelector);
                // $navItemToggle          = $categoriesNav.find(config.navItemToggleSelector);

				self.collapsed = false;
				if ($body.hasClass("st-cat-nav-collapsed")) {
					self.collapsed = true;
				}

            // Enabling scrollbar
                //$categoriesNav.find(config.navListSelector).perfectScrollbar();
                $categoriesNavInner.perfectScrollbar();

            // Bind Listeners
                bindEventListeners();

			setTimeout(function() {
			//App.onLoad(function() {
				//$body.addClass('st-cat-nav-collapsed');
				self.disableWrapperAnimations(); // Disable Animations @ Startup
				if (!self.collapsed) {
					self.show(); // Show menu by default
				}
				self.setLayoutMode();
				//showTooltip();

				/*******************************
				 * VISIBILITY LOGIC AT STARTUP *
				 *******************************/

				// Docked Mode
				if (App.lib.getCookie(config.cookieDockedMode) !== null){ // Cookie exists, let's use it
					var dockedMode = !!parseInt(App.lib.getCookie(config.cookieDockedMode),10);
					if (dockedMode) {
						setDockedMode();
					} else {
						unsetDockedMode();
					}
				} else {
					setDockedMode();
				}


				// Always hide except if is a Bot
				if (!isBot() && hasCookies()) {
					startedVisible = false;
					self.hide();
				}

				// Hide on init if small browser
				/*if(self.currentLayoutMode != 'SMALL' && self.currentLayoutMode != 'FULLSCREEN') {
					// IN MEDIUM AND EVEN LARGE RESOLUTIONS NAVIGATION BAR IS HIDDEN @ GAME PAGES
					if (App.pageType === "game") {
						startedVisible = false;
						self.hide();
					}
					// There is a Cookie set?
					else if (App.lib.getCookie(config.cookieDisplayMode) !== null){ // Cookie exists, let's use it
						var displayMode = App.lib.getCookie(config.cookieDisplayMode);
						if (typeof self[displayMode] === "function"){
							// Call the display method
							self[displayMode]();
							// Track
							if (displayMode === "show")
								startedVisible = true;
							else
								startedVisible = false;
						}
					}else{
						// Nothing happened with cookie, show it!
						self.show();
					}
				}else{
					// we DO NOT autohide the menu bar if UA matches with GoogleBot
					if (!isBot()){
						startedVisible = false;
						self.hide();
					}
				}*/
				self.enableWrapperAnimations(); // Re-enable transition animations
			//});
			}, config.setLayoutModeDelayMS);

            /* Track analytics event */
			//setTimeout(function() {
			//if (trackAnalytics) {
			//	App.trackAnalyticsEvents(
			//		["_trackEvent", analyticsCategory, getAnalyticsActionPrefix() + "Init", null, 1, true], /* Non interactive */
			//		["_trackEvent", analyticsCategory, getAnalyticsActionTotalPrefix() + "Init", null, 1, true]  /* Non interactive */
			//	);
			//}
			//}, 1000);

            // We're ready!
                this._ready = true;

        };

        this.init = function() {

            if (this._init) {return;} /* It's already initialized! */

            App.registerEventListener("ready",function() {
                self.ready();
            });

            this._init = true;
        }

    }
    /* =====================================
       ===== CATEGORIES NAVIGATION END =====
       ===================================== */










    /* jQuery 1.9 deprecated $.browser. This code comes from jQuery Migrate's src */
    var matched, browser;
    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];
        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };
    if ( !jQuery.browser ) {
        matched = jQuery.uaMatch( navigator.userAgent );
        browser = {};
        if ( matched.browser ) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
        }
        if ( browser.chrome ) {
            browser.webkit = true;
        } else if ( browser.webkit ) {
            browser.safari = true;
        }
        jQuery.browser = browser;
    }

    // this.loadDeferredImages = function(parentDOMID, eventType, imagesContainerDOMID) {
    this.loadDeferredImages = function(parentDOMID, imagesContainerDOMID) {
        var $parentContainer, $childContainer;
        if (parentDOMID instanceof $) {
            $parentContainer = parentDOMID;
        } else {
            $parentContainer = $('#'+ parentDOMID);
        }
        if (typeof imagesContainerDOMID === "undefined") {
            $childContainer = $parentContainer;
        } else {
            $childContainer = $('#' + imagesContainerDOMID);
        }
        /* Cannot avoid using an inline function here due to the parameter and don't want to mess with this context and binds */
        /** @read It triggers automatically now, since is not inside a hidden tab, its always visible, no need to click to click on tab button **/
        // $parentContainer.on(eventType, function() {
		//setTimeout( function() { self.fetchDeferredImages($childContainer) }, 2000);
        self.fetchDeferredImages($childContainer);
        // });
    };

    this.fetchDeferredImages = function($imagesContainer) {
        $imagesContainer.find(".js-deferredimg, .js-deferredimg-hidden").each(self._substituteImage);
    };

    this._substituteImage = function() {
        /* 'this' here has the context of each image */
        var $item = $(this);
        if ($item.data()["src"]) {
            $item[0].src = $item.data()["src"];
            /* Only load the images once */
            $item.removeClass("js-deferredimg").removeClass("js-deferredimg-hidden").attr("data-deferred-ok",1);
        }
    };

	/**
	 * Automatically loads images with a data-src attribute and a .js-in-viewport class when their top left coordinates are within the viewport.
	 */
	this.imageViewportLoader = new (function() {
		var imagesWaitingForViewport = [];
		var imagesWaitingForViewportTimeout = null;
		var imagesWaitingForViewportScrollTimeout = null;
		var loadImagesOnViewportScrollBinded = false;
		var idx = 0;
		var self=this;
		var checkImagesWaitingForViewport;
		var ticking = false;
		var isInViewport = function(element, width, height) {
			const rect = element.getBoundingClientRect();
			return (
				rect.bottom >= -250 &&
				rect.right >= -100 &&
				rect.top <= (height+500) &&
				rect.left <= (width+100)
				//rect.bottom <= height &&
				//rect.right <= width
			);
		};
		checkImagesWaitingForViewport = function() {
			clearTimeout(imagesWaitingForViewportTimeout);
			clearTimeout(imagesWaitingForViewportScrollTimeout);
			var pendingImages = [];
			var height = (window.innerHeight || document.documentElement.clientHeight);
			var width = (window.innerWidth || document.documentElement.clientWidth);
			//console.log("checking "+imagesWaitingForViewport.length+" images");
			for(var i=0;i<imagesWaitingForViewport.length;i++) {
				var $img = imagesWaitingForViewport[i];
				if (!$img || $img.length<=0) continue;
				var inViewport=isInViewport($img[0], width, height);
				if(!inViewport) {
					pendingImages.push($img);
				} else {
					$img.attr("src",$img.data()["src"]);
					$img.removeClass("js-in-viewport").attr("data-in-viewport","1");
				}
			}
			imagesWaitingForViewport=pendingImages;
			imagesWaitingForViewportTimeout = setTimeout(checkImagesWaitingForViewport,3000);
			if ((++idx)>=4) {
				idx=0;
				self.add($(document.body)); // re add to find missing
			}
		};
		this.add = function($container) {
			var added = 0;
			if ($container==undefined) $container=$(document.body);
			$container.find("img.js-in-viewport").not("[data-in-viewport=0]").each(function() {
				var $img = $(this);
				imagesWaitingForViewport.push($img);
				$img.attr("data-in-viewport","0");
				added++;
			});
			if (!loadImagesOnViewportScrollBinded) {
				loadImagesOnViewportScrollBinded = true;
				window.addEventListener('scroll', function() {
					if (!ticking) {
						window.requestAnimationFrame(function() {
							clearTimeout(imagesWaitingForViewportScrollTimeout);
							imagesWaitingForViewportScrollTimeout = setTimeout(checkImagesWaitingForViewport, 250);
							ticking = false;
						});
					}
					ticking = true;
				});
			}
			if (added>0) {
				checkImagesWaitingForViewport();
			} else {
				imagesWaitingForViewportScrollTimeout = setTimeout(checkImagesWaitingForViewport,2000);
			}
		};
	})();

    // Readiness / initialization / current state
	//-----------------------------------------------------------------------------
    this.init = function() {
        if (self._init) return; // Already initialized
        self.App.registerEventListener("ready",self.ready); // Register an event listener to the Document Ready event
        // Notify submodules that the Navigation has been initialized
        self._init = true;
    };
    this.ready = function() {
        if (self._ready) return; // It's already ready!
        // Notify submodules that the Navigation is ready
        self._ready = true;

        //social
            self.social.gameComments();
        // header
            self.header.subNav();
        // helpers
            self.helpers.dropDown.onReady();
            // self.helpers.ellipsis('.bulk .title', 30);
            self.helpers.profileAvatarEnlarger(); // @todo: should go on profile module
            self.helpers.tabs('.js-tabs');
            self.helpers.tabsHScroll('.js-tabs-hscroll', 400); // @todo: trigger individually
            self.helpers.expandable();
            // self.helpers.cardExpand();
            self.helpers.placeholder();
            self.helpers.scrollNav();
            self.helpers.linkObfuscator();


           // @TODO: Deprecated by HomeCarousel.js
           // showcases
           // if ($(".js-slideshow").length > 0 && self.showcases.homeSlideShow === null) {
           //      //self.showcases.slideshow('.js-slideshow');
           //      self.showcases.homeSlideShow = new self.showcases.SlideShowv2("home");
           //      self.showcases.homeSlideShow.setup('.js-slideshow');
           // }

        // Cards
            self.cards.initCards();

        // Categories navigation
            //self.categoriesNavigation.init();


       // Minimonkey
            self.minimonkey.ready();

       // modals
            self.modals.modal.onReady('.js-modal');

        // autolaunching modals
            self.modals.autoLaunchModal();

        // Initialize user card events
            self.newUserCard.ready();

		// Initialize videoThumbnails
			self.gameCardVideoThumbnails.init();

        // Load deferred images
			setTimeout(function() {self.loadDeferredImages($("body"));},50);
			setTimeout(function() {self.imageViewportLoader.add();},100);

    };
    this.init();
       
}
function HomeFeaturedNavigation(App){var self=this,attachNavigationEvents,removeActiveTab,setActiveTab,loadFeaturedContent,changeTab,loadRankingContent,processNewContent,markAsNewContent,removeAsNewContent,changeContentHeight,calcContentHeight,toggleFeaturedVisibility,closeFeaturedContent,featuredContainerId="featuredContainer",featuredContent="featuredContent",achievementsTabId="featuredAchievementsTab",trophiesTabId="featuredTrophiesTab",rankingTabId="featuredRankingTab",eventsTabId="featuredEventsTab",newsTabId="featuredNewsTab",achievementsContentId="featuredAchievements",trophiesContentId="featuredTrophies",rankingContentId="featuredRanking",eventsContentId="featuredEvents",newsContentId="featuredNews",togglerId="featuredToggler",currentTab="",userId,resizeSpeed=160,serverTimestamp,cookieLastTrophiesOpened="mp__lto",cookieLastEventsOpened="mp__leo",cookieLastNewsOpened="mp__lno",cookieLastGameAchievementOpened="mp__lgo",lastTrophiesOpened,lastEventsOpened,lastNewsOpened,lastGameAchievementOpened,lastEvent,lastNew,lastTrophy,lastGameAchievement,isWhiteBrand=0,autoOpen="",$featuredContainer,$content,$featuredAchievementsTab,$featuredTrophiesTab,$featuredRankingTab,$featuredEventsTab,$featuredNewsTab,$featuredToggler,openedTab=false,contentHeight=null,newContentHeight=null;this.App=App;this.initProp=false;this.readyProp=false;attachNavigationEvents=function(){$featuredContainer=$("#"+featuredContainerId);$content=$featuredContainer.find("#"+featuredContent);$featuredAchievementsTab=$featuredContainer.find("#"+achievementsTabId);$featuredTrophiesTab=$featuredContainer.find("#"+trophiesTabId);$featuredRankingTab=$featuredContainer.find("#"+rankingTabId);$featuredEventsTab=$featuredContainer.find("#"+eventsTabId);$featuredNewsTab=$featuredContainer.find("#"+newsTabId);$featuredToggler=$featuredContainer.find("#"+togglerId);isWhiteBrand=$featuredContainer.data("iswb")===1;$featuredAchievementsTab.on("click",function(){currentTab=(currentTab==="achievements"?"":"achievements");
changeTab(currentTab)});$featuredTrophiesTab.on("click",function(){currentTab=(currentTab==="trophies"?"":"trophies");changeTab(currentTab)});$featuredRankingTab.on("click",function(){currentTab=(currentTab==="ranking"?"":"ranking");changeTab(currentTab)});$featuredEventsTab.on("click",function(){currentTab=(currentTab==="events"?"":"events");changeTab(currentTab)});$featuredNewsTab.on("click",function(){currentTab=(currentTab==="news"?"":"news");changeTab(currentTab)});$featuredToggler.on("click",function(){toggleFeaturedVisibility()})};changeTab=function(tab){autoOpen="";if(currentTab===""){closeFeaturedContent()}else{$featuredToggler.addClass("active");openedTab=true;setActiveTab(tab);var containerId=eval(tab+"ContentId");self.App.navigation.helpers.fetchDeferredImagesWithSpinner(containerId);if(tab==="ranking"&&$content.find("#"+rankingContentId).is(":empty")){loadRankingContent(tab)}else{$content.find(".featured-"+tab).fadeIn(200);changeContentHeight(tab)}switch(tab){case"trophies":self.App.lib.setCookie(cookieLastTrophiesOpened,serverTimestamp,self.App.cfg.cookieDomain,30);break;case"achievements":self.App.lib.setCookie(cookieLastGameAchievementOpened,serverTimestamp,self.App.cfg.cookieDomain,30);break;case"events":self.App.lib.setCookie(cookieLastEventsOpened,serverTimestamp,self.App.cfg.cookieDomain,30);break;case"news":self.App.lib.setCookie(cookieLastNewsOpened,serverTimestamp,self.App.cfg.cookieDomain,30);break;default:break}}removeAsNewContent()};loadFeaturedContent=function(){if($content.is(":empty")){$.ajax({url:self.App.url.ajaxhtml+"home-featured",success:function(response){$content.html(response);userId=$content.data("userid");serverTimestamp=parseInt($content.data("servertimestamp"),10);processNewContent()},error:function(){$content.html("<p>Error loading tab content</p>")}})}};processNewContent=function(){lastTrophiesOpened=self.App.lib.getCookie(cookieLastTrophiesOpened)===null?null:parseInt(self.App.lib.getCookie(cookieLastTrophiesOpened),10);lastEventsOpened=self.App.lib.getCookie(cookieLastEventsOpened)===null?null:parseInt(self.App.lib.getCookie(cookieLastEventsOpened),10);
lastNewsOpened=self.App.lib.getCookie(cookieLastNewsOpened)===null?null:parseInt(self.App.lib.getCookie(cookieLastNewsOpened),10);lastGameAchievementOpened=self.App.lib.getCookie(cookieLastGameAchievementOpened)===null?null:parseInt(self.App.lib.getCookie(cookieLastGameAchievementOpened),10);lastTrophy=parseInt($content.find("#lastTrophy").data("timestamp"),10);lastGameAchievement=parseInt($content.find("#lastGameAchievement").data("timestamp"),10);lastEvent=parseInt($content.find("#lastEvent").data("timestamp"),10);lastNew=parseInt($content.find("#lastNew").data("timestamp"),10);if(lastTrophiesOpened===null||lastTrophy>lastTrophiesOpened){markAsNewContent($featuredTrophiesTab)}if(lastGameAchievementOpened===null||lastGameAchievement>lastGameAchievementOpened){markAsNewContent($featuredAchievementsTab)}if(lastEventsOpened===null||lastEvent>lastEventsOpened){markAsNewContent($featuredEventsTab);if($content.find("#lastEvent").data("autoopen")===1){autoOpen="events"}}if(lastNewsOpened===null||lastNew>lastNewsOpened){markAsNewContent($featuredNewsTab);if($content.find("#lastNew").data("autoopen")===1&&autoOpen!=="events"){autoOpen="news"}}if(autoOpen!==""&&!isWhiteBrand){currentTab=autoOpen;changeTab(autoOpen)}};markAsNewContent=function($tab){$tab.append(' <span class="bullet"></span>')};removeAsNewContent=function(){lastTrophiesOpened=self.App.lib.getCookie(cookieLastTrophiesOpened)===null?null:parseInt(self.App.lib.getCookie(cookieLastTrophiesOpened),10);lastEventsOpened=self.App.lib.getCookie(cookieLastEventsOpened)===null?null:parseInt(self.App.lib.getCookie(cookieLastEventsOpened),10);lastNewsOpened=self.App.lib.getCookie(cookieLastNewsOpened)===null?null:parseInt(self.App.lib.getCookie(cookieLastNewsOpened),10);lastGameAchievementOpened=self.App.lib.getCookie(cookieLastGameAchievementOpened)===null?null:parseInt(self.App.lib.getCookie(cookieLastGameAchievementOpened),10);if(lastTrophiesOpened!==null&&lastTrophy<=lastTrophiesOpened){$featuredTrophiesTab.find("span").remove()
}if(lastEventsOpened!==null&&lastEvent<=lastEventsOpened){$featuredEventsTab.find("span").remove()}if(lastNewsOpened!==null&&lastNew<=lastNewsOpened){$featuredNewsTab.find("span").remove()}if(lastGameAchievementOpened!==null&&lastGameAchievement<=lastGameAchievementOpened){$featuredAchievementsTab.find("span").remove()}};toggleFeaturedVisibility=function(){if(openedTab){closeFeaturedContent()}else{$featuredToggler.addClass("active");if(currentTab===""){currentTab=(currentTab==="achievements"?"":"achievements")}openedTab=true;changeTab(currentTab)}};closeFeaturedContent=function(){$featuredToggler.removeClass("active");$content.animate({"min-height":0,height:0},resizeSpeed);openedTab=false;removeActiveTab();removeAsNewContent()};calcContentHeight=function(tab){var newContentHeightPaddingT=parseInt($content.find(".featured-"+tab).css("padding-top"),10),newContentHeightPaddingB=parseInt($content.find(".featured-"+tab).css("padding-bottom"),10),newContentHeightHeight=parseInt($content.find(".featured-"+tab).height(),10);newContentHeight=newContentHeightPaddingT+newContentHeightPaddingB+newContentHeightHeight};changeContentHeight=function(tab){calcContentHeight(tab);if(openedTab===true){$content.animate({height:newContentHeight},resizeSpeed)}else{$content.animate({"min-height":"40px",height:newContentHeight},resizeSpeed)}};loadRankingContent=function(tab){changeContentHeight(tab);self.App.navigation.helpers.loaderSpinnerToggle($content);var url="home-featured/ranking";$.ajax({url:self.App.url.ajaxhtml+url+(userId!==""?"/user/"+userId:"/user"),success:function(response){self.App.navigation.helpers.loaderSpinnerToggle($content);$content.find("#"+rankingContentId).html(response);$content.find("#"+rankingContentId).show();changeContentHeight(tab)},error:function(){$content.find("#"+rankingContentId).html("<p>Error loading tab</p>")}})};setActiveTab=function(tab){removeActiveTab();$featuredContainer.find(".js-featured-"+tab).addClass("active")};removeActiveTab=function(){$featuredContainer.find(".js-featured-tab").removeClass("active");
$content.find(".js-featured-content").hide()};this.init=function(){if(self.initProp){return}self.App.registerEventListener("ready",function(){self.ready()});self.initProp=true};this.ready=function(){if(self.readyProp){return}self.readyProp=true;attachNavigationEvents();loadFeaturedContent()};this.init()};function Notifications(d){var b=this;var c=null;this.App=d;this._queue=[];this._bufferMaxSize=6;this._bufferSize=0;this._bufferSlotAvgSize=150;this.defaultPollingTime=1500;this._timeoutInstance=false;this._bufferTimeoutInstance=false;this._defaultMessage={id:0,stayTime:15000,title:"",subtitle:"",text:"",endpointUrl:null,endpointJS:null,endpointTitle:null,cancelTitle:null,media:"",stay:false,type:"",clickable:false,earnedGems:null,earnedXP:null,earnedMinicoins:null,inlineJS:""};var e=false;var a=false;this.notify=function(f){f=$.extend({},b._defaultMessage,f);if(f.id===0){f.id=new Date().getTime()}if(f.clickable||(f.hasOwnProperty("onclick")&&f.onclick)){f.type+=" msg-clickable"}if(f.type.includes("msg-nac")&&typeof window.confetti==="function"){confetti.reset();function g(j,i){return Math.random()*(i-j)+j}var h={particleCount:200,angle:g(140,160),spread:45,startVelocity:75,gravity:0.8,ticks:300,origin:{x:1.2,y:0.6},disableForReducedMotion:true};confetti(h);h.origin.x=-0.2;h.angle=g(20,40);confetti(h)}$.noticeAdd(f)};this.close=function(f,g){if(g===undefined){g=false}$.noticeRemove(f,g)};this.addToQueueFirst=function(f){b._queue.unshift(f);if(b.getQueueSize()==1){b._queue.push(false);b._queue.unshift(false);b.process()}};this.addToQueueLast=function(f){if(f.id>0){if(c===null||c.size()===0){c=$(".notice-container")}if(c.find("[data-msg-id="+f.id+"]").size()>0){return}}b._queue.push(f);if(b.getQueueSize()==1){b._queue.push(false);b._queue.unshift(false);b.process()}};this.getQueueSize=function(){return b._queue.length};this.incrementBuffer=function(f){if(!f instanceof Object||f.bufferSize===undefined){return}this._bufferSize+=f.bufferSize};this.decrementBuffer=function(f){if(!f instanceof Object||f.bufferSize===undefined){return}this._bufferSize-=f.bufferSize;if(this._bufferSize<0){this._bufferSize=0}};this.calculateBuffer=function(){var f=$(window).height();this._bufferMaxSize=Math.round(f/b._bufferSlotAvgSize)};this.determineMessageBufferSize=function(g){if(!g instanceof Object){return 0
}var f=1;if(g.text!=""&&g.text!==undefined&&g.title!=""&&g.title!==undefined){f+=1}if(g.text!==undefined){if(g.text.indexOf("class")>=5){f+=1}}if(g.endpointTitle||g.cancelTitle){f+=1}return f};this.nextMessageFitsInBuffer=function(){var f=this._queue[0];if(f===undefined||!f instanceof Object||f==false){return true}this._queue[0].bufferSize=this.determineMessageBufferSize(f);return(this._bufferMaxSize-this._bufferSize-f.bufferSize>=0)};this.process=function(){var f;if(b.getQueueSize()>0&&b.nextMessageFitsInBuffer()){f=b._queue.shift();if(f!=false){b.notify(f)}else{b.process();return}}b._schedule()};this._schedule=function(){if(b._timeoutInstance){clearTimeout(b._timeoutInstance)}b._timeoutInstance=setTimeout(b.process,b.defaultPollingTime)};this.scheduleBufferRecalculation=function(){if(this._bufferTimeoutInstance){clearTimeout(this._bufferTimeoutInstance)}this._bufferTimeoutInstance=setTimeout(function(){b.calculateBuffer()},300)};this.ready=function(){$(window).on("resize",b.scheduleBufferRecalculation);this._ready=true};this.init=function(){this.process();this.calculateBuffer();b.App.registerEventListener("ready",function(){b.ready()});this._init=true};this.init()}(function(a){a.extend({noticeAdd:function(o){var f={inEffect:{opacity:"show",right:20},inEffectDuration:300,stayTime:4000,stay:false,type:"notice",onclick:false,onclose:false};var l,d,g,j,k,e,n,b,i,h,c;o=$.extend({},f,o);n=$(".notice-container");l=(!n.length)?$("<div></div>").addClass("notice-container").appendTo("body"):n;d=$("<div></div>").addClass("notice-outer");g=$("<div></div>").hide().addClass("notice "+(o.stay?"notice-stay ":"")+o.type).attr("data-msg-id",o.id).prependTo(l);j=$("<div></div>").addClass("n-header").prependTo(g);if(typeof o.onclick=="function"){g.addClass("notice-clickable").click(o.onclick)}if(typeof o.onclose=="function"){g.on("close",o.onclose)}if(o.media!=""){$("<span></span>").addClass("thumbnail").html('<img src="'+o.media+'"/>').prependTo(g)}if(o.subtitle!=""){$("<div></div>").addClass("subtitle").html(o.subtitle).prependTo(j)
}if(o.title!=""){$("<div></div>").addClass("title").html(o.title).prependTo(j)}if(o.text!=""){if(o.title!=""&&o.subtitle!=""){k=$("<div></div>").addClass("extended").html(o.text).appendTo(g)}else{if(o.title==""&&o.subtitle==""){j.html(o.text)}else{if(o.title!=""&&o.subtitle==""){$("<div></div>").addClass("subtitle").html(o.text).appendTo(j)}}}}if(o.inlineJS!==""){$inlineJSWrapper=l.find(".inline-js");$inlineJS=($inlineJSWrapper.size()>0)?$inlineJSWrapper:$("<div></div>").addClass("inline-js");$inlineJS.html(o.inlineJS);l.append($inlineJS)}if(o.earnedGems!=null||o.earnedXP!=null){e=$("<div></div>").addClass("earned-wrapper");if(o.earnedGems!=null){e.append("<div class='earned-gems'><span class='icon icon-gem'></span>+"+o.earnedGems+" "+self.App.i18n.xlat.msg("Gems")+"</div>")}if(o.earnedXP!=null){e.append("<div class='earned-xp'><span class='icon icon-xp'></span>+"+o.earnedXP+" "+self.App.i18n.xlat.msg("XP")+"</div>")}g.append(e)}if(o.endpointTitle!=null||(o.cancelTitle!=null&&o.cancelTitle.length>0)){b=$("<div></div>").addClass("buttons-case").appendTo(g);if(o.cancelTitle!=null){h=$("<span>"+o.cancelTitle+"</span>").addClass("btn").appendTo(b);h.on("click",function(p){$.noticeRemove(g,false,o)})}if(o.endpointTitle!=null){i=$('<a onclick="'+o.endpointJS+'" href="'+o.endpointUrl+'" target="_blank">'+o.endpointTitle+"</a>").addClass("btn btn-highlight").appendTo(b);i.on("click",function(){$.noticeRemove(g,true,o)})}if(o.endpointTitle!=null&&o.cancelTitle==null){if(i){i.addClass("btn-full")}}else{if(o.endpointTitle==null&&o.cancelTitle!=null){if(h){h.addClass("btn-full")}}else{if(h){h.addClass("btn-medium push-l")}if(i){i.addClass("btn-medium push-r")}}}}c=$("<div></div>").addClass("notice-close").prependTo(g).html("<span></span>").click(function(p){$.noticeRemove(g,false,o);p.stopPropagation();return false});if(!o.stay){setTimeout(function(){$.noticeRemove(g,false,o)},o.stayTime)}if(o.title==""&&o.subtitle==""){j.prepend(c);if(o.media==""){g.addClass("msg-wo-header")}else{g.addClass("msg-wo-header-txt")
}}var m=g.height()+60;if(!$(".notice-outer").length){g.wrap(d).animate(o.inEffect,o.inEffectDuration);App.notifications.incrementBuffer(o)}else{g.wrap(d).parent().animate({height:m},300,function(){g.animate(o.inEffect,o.inEffectDuration)});App.notifications.incrementBuffer(o)}},noticeRemove:function(c,d,b){if(d===undefined){d=false}c=$(c);c.trigger("close",d);if(!c.parent().hasClass("notice-outer")){c=c.closest(".notice-outer div:first")}if(c.size()==0){return}c.animate({opacity:"0",right:-20},300,function(){c.parent().animate({height:"0px"},300,function(){c.parent().remove()})});if(b!==undefined){App.notifications.decrementBuffer(b)}}})})(jQuery);function LastPlayed(b,e,g){var m=this;this.App=b;this._init=false;this._ready=false;this.debug=false;var a={widgetSelector:"#last-played-widget-container",containerSelector:"#dd-last-played-widget-content",triggerSelector:".js-trigger-last-played",bodyContainerSelector:"#body-last-games-widget",chromeExtensionPromoSelector:"#chrome-ext-promo"};var h=false,k,c=false;var j,l,i,d,f;this.loadLastPlayedContent=function(){var n=m.App.url.ajaxhtml+"nav/last-played";h=false;var o=m.App.pageType=="landing"&&m.App.pageTypeId=="landing";$.ajax({url:n+"?landing="+JSON.stringify(o),type:"GET",success:function(p){h=true;j.html(p);l=$(a.containerSelector);i=$(a.triggerSelector);d=$(a.bodyContainerSelector);k=parseInt(i.data("servertimestamp"),10);f=$(a.chromeExtensionPromoSelector);m.checkChromeExtensionInstalled();m.attachEvents();m.displayCounter();if(o){m.displayLanding(p)}},error:function(p){}})};this.checkChromeExtensionInstalled=function(){if(f.length>0&&!f.is(":visible")){var p=function(){f.show();l.addClass("promo-active")},o=f.attr("data-chromeextid"),n=false;try{chrome.runtime.sendMessage(o,"Ack?",function(s){if(chrome.runtime.lastError||s===undefined){n=false}if(s!==undefined&&s.hasOwnProperty("success")&&s.success===true){n=true}if(!n){p()}})}catch(q){p()}}};this.attachEvents=function(){m.App.navigation.helpers.dropDown.addDropdown(i,l);i.on("click",function(){if(!c){m.loadContent()}});l.on("show",function(s){s.stopPropagation();if(s.target!==s.currentTarget){var r=$(s.target);if(r.attr("id")==="favs"||r.attr("id")==="last"){m.App.trackAnalyticsEvent(["_trackEvent","Navigation","LastPlayedWidget","click-tab-widget"]);m.App.trackAnalyticsEvent(["_trackEvent","Navigation","LastPlayedWidget","click-tab-widget-"+r.attr("id")])}return}m.hideCounter();$.ajax({url:m.App.url.ajax+"nav/last-played/widget-open-log",type:"POST",data:{},success:function(t){},error:function(t){}});m.App.trackAnalyticsEvent(["_trackEvent","Navigation","LastPlayedWidget","click-open-widget"])});var p=$("#most-played-widget"),o=$("#last-played-widget"),q=$("recommended-widget"),n=$("#favorites-widget");
p.on("click",".js-most-played",function(){m.App.trackAnalyticsEvent(["_trackEvent","Navigation","LastPlayedWidget","click-most-played"])});o.on("click",".js-last-played",function(){m.App.trackAnalyticsEvent(["_trackEvent","Navigation","LastPlayedWidget","click-last-played"])});q.on("click",".js-recommended",function(){m.App.trackAnalyticsEvent(["_trackEvent","Navigation","LastPlayedWidget","click-recommended"])});n.on("click",".js-favorite",function(){m.App.trackAnalyticsEvent(["_trackEvent","Navigation","LastPlayedWidget","click-favorites"])})};this.loadContent=function(){var n=d.find("#last"),p={},o={};if(n.length>0){p=n.attr("data-mostplayed");o=n.attr("data-lastplayed")}$.ajax({url:m.App.url.ajaxhtml+"nav/last-played/load-tab-content",type:"POST",data:{most_played:p,last_played:o},success:function(q){d.html(q);m.App.navigation.helpers.tabs(".js-widget-tabs",{urlTarget:false});m.App.navigation.helpers.fetchDeferredImagesWithSpinner(j)},error:function(q){var r="Ooops, something weird occurred. Try again later";d.html('<p class="title-xs ml-10 mr-10">'+b.i18n.xlat.msg(r)+"</p>")}});c=true};this.displayLanding=function(n){};this.displayCounter=function(){var n=i.find(".alert-count");if(n.length>0){n.show().css({top:32,opacity:0}).animate({top:10,opacity:1},300,function(){})}};this.hideCounter=function(){var n=i.find(".alert-count");if(n.length>0){n.hide()}};this.init=function(){if(m._init){return}m.App.registerEventListener("ready",function(){setTimeout(function(){m.ready()},MP.pageType==="game"?g:e)});m._init=true};this.ready=function(){if(m._ready){return}m._ready=true;j=$(a.widgetSelector);if(j.size()<1){return}m.loadLastPlayedContent()};this.init()};function ThirdPartyFacebook(App){var self=this;var FB=window.FB;var msg=null;var msv=null;this.App=App;this._init=false;this._ready=false;this.debug=false;var auth={accessToken:false,userID:false,expireTime:false};var status="unknown";var loginStatusTimeout=false;var sdk=null;var eventListeners={init:null,ready:null,connected:null,"not-authorized":null,"not-logged":null,login:null};this.notifyError=function(msg){self.App.notifications.notify({stayTime:7000,text:msg,stay:false,type:"error"})};this.notifySuccess=function(msg){self.App.notifications.notify({stayTime:4000,text:msg,stay:false,type:"success"})};this.getAccessToken=function(){return auth.accessToken};this.getUserID=function(){return auth.userID};this.getStatus=function(){if(status=="connected"&&self.isConnected()){return"connected"}return status};this.getExpireTime=function(){return auth.expireTime};this.getUsername=function(callback){if(!self.isConnected()){return callback(false)}if(!self.getUserID()){callback(false);return}self.sdk().api("/me",function(response){if(typeof response=="object"&&response.hasOwnProperty("username")){callback(response.username)}else{callback(false)}})};this.shareGame=function(){if(!self._ready){return self.onReady(function(){self.shareGame()})}self.sdk().ui({method:"feed",type:"popup",link:"https://developers.facebook.com/docs/reference/dialogs/",picture:"http://fbrell.com/f8.jpg",name:"Facebook Dialogs",caption:"Reference Documentation",description:"Using Dialogs to interact with users."},function(response){self.log("Completed");console.dir(response)})};this.getTotalFans=function(callback,pageId){if(typeof callback=="undefined"){callback=function(){}}callback(false);if(typeof pageId=="undefined"){pageId=self.App.cfg.thirdParty.facebook.pageId}if(!self._ready){return self.onReady(function(){self.getTotalFans(callback,pageId)})}self.sdk().api("/"+pageId+"/?fields=fan_count",function(response){if(typeof response=="object"&&response.hasOwnProperty("likes")){callback(response.likes)
}if(typeof response=="object"&&response.hasOwnProperty("fan_count")){callback(response.fan_count)}else{callback(false)}})};this.isFan=function(callback,pageId){if(typeof callback=="undefined"){callback=function(){}}if(typeof pageId=="undefined"){pageId=self.App.cfg.thirdParty.facebook.pageId}if(!self._ready){return self.onReady(function(){self.isFan(callback,pageId)})}if(self.getUserID()){self.sdk().api("/me/likes/"+pageId,function(response){if(typeof response=="object"&&response.hasOwnProperty("data")&&response.data instanceof Array&&response.data.length>0){callback(true)}else{callback(false)}})}};this.uploadAvatarToFacebook=function(ev){if(typeof ev!="undefined"){ev.preventDefault()}if(!self._ready){return}var $target=$(this);var $modal;if(self.App.user.isAlive()&&(!self.App.user.thirdparty.facebook||!self.isConnected())){self.linkUserToFacebook(function(){$target.trigger("click")});return}else{if(!self.App.user.isAlive()||!self.App.user.thirdparty.facebook){return}}var doUpload=function(id){$.ajax({url:self.App.url.ajax+"user/third-party/facebook/upload-avatar?confirm=1",success:function(response){if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true){self.App.navigation.modals.modalAlert.add("<p class='description'>"+response.data.message_text+"</p><div class='clearfix group-btm'><div class='fb-screen push-l'><div class='th-profile'></div><img class='img-profile' width='190px' height='70px' src='"+response.data.photo_large+"'/><a href=\""+response.data.fbresponse.url_make_cover+'" class="btn btn-full btn-black" target="_blank">'+response.data.message_btn_cover+"</a></div><div class='fb-screen push-r'><div class='th-profile'><img width='34px' height='34px' src='"+response.data.photo_small+"'/></div><a href=\""+response.data.fbresponse2.url_make_profile+'" class="btn btn-full btn-black" target="_blank">'+response.data.message_btn_profile+"</a></div></div>",false,false,false,{styles:"upload-facebook-completed medium",close:true,txtHeader:response.data.message_title})
}else{self.App.navigation.modals.modal.close();self.notifyError(msg("Unexpected or invalid response received"))}},error:function(response){self.App.navigation.modals.modal.close();if(response.responseText!=null&&response.responseText!=""){try{eval("responseData="+response.responseText)}catch(err){responseData={exception:{type:"ERROR_UNEXPECTED_RESPONSE",message:"Unexpected or invalid response received"}}}self.notifyError(responseData.exception.message)}else{self.notifyError(msg("Unexpected or invalid response received"))}}})};$modal=self.App.navigation.modals.modalAlert.add('<div class="group loading-placeholder"><ul class="loader-spinner ls-dark"><li></li><li></li><li></li></ul></div>',false,false,false,{styles:"upload-facebook-loading",close:false,txtHeader:msg("Please wait")+"..."});$.ajax({url:self.App.url.ajax+"user/third-party/facebook/upload-avatar",success:function(response){if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true){$modal.find(".modal-header .title").html("<h2 class='title'>"+response.data.header_text+"</h2>");$modal.find(".loader-spinner").remove();$modal.find(".loading-placeholder").replaceWith("<div class='center'><img class='group' width='270px' height='108px' src='"+response.data.fb_connecting+"'/></div>");doUpload($target.data("avatar-id"))}else{self.App.navigation.modals.modal.close();self.notifyError(msg("Unexpected or invalid response received"))}},error:function(response){var responseData;self.App.navigation.modals.modal.close();if(response.responseText!=null&&response.responseText!=""){try{eval("responseData="+response.responseText)}catch(err){responseData={exception:{type:"ERROR_UNEXPECTED_RESPONSE",message:"Unexpected or invalid response received"}}}self.notifyError(responseData.exception.message)}else{self.notifyError(msg("Unexpected or invalid response received"))}}})};this.uploadSnapshotToFacebook=function(ev,snapshot){ev.preventDefault();if(!self._ready){return}var $target=$(this);var $modal;
if(self.App.user.isAlive()&&(!self.App.user.thirdparty.facebook||!self.isConnected())){self.linkUserToFacebook(function(){$target.trigger("click")});return}else{if(!self.App.user.isAlive()||!self.App.user.thirdparty.facebook){return}}var doUpload=function(id){$.ajax({url:self.App.url.ajax+"user/third-party/facebook/upload-snapshot?confirm=1&snapshot="+encodeURIComponent(snapshot),success:function(response){if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true){self.App.navigation.modals.modalAlert.add("<div class='center group-btm'><img width='300px' height='96px' src='"+response.data.photo+"'/></div>",false,false,false,{styles:"upload-facebook-completed medium",close:true,txtHeader:response.data.message_title})}else{self.App.navigation.modals.modal.close();self.notifyError(msg("Unexpected or invalid response received"))}},error:function(response){self.App.navigation.modals.modal.close();if(response.responseText!=null&&response.responseText!=""){try{eval("responseData="+response.responseText)}catch(err){responseData={exception:{type:"ERROR_UNEXPECTED_RESPONSE",message:"Unexpected or invalid response received"}}}self.notifyError(responseData.exception.message)}else{self.notifyError(msg("Unexpected or invalid response received"))}}})};$modal=self.App.navigation.modals.modalAlert.add('<div class="group loading-placeholder"><ul class="loader-spinner ls-dark"><li></li><li></li><li></li></ul></div>',false,false,false,{styles:"upload-facebook-loading",close:false,txtHeader:msg("Please wait")+"..."});$.ajax({url:self.App.url.ajax+"user/third-party/facebook/upload-snapshot?snapshot="+encodeURIComponent(snapshot),success:function(response){if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true){$modal.find(".modal-header .title").html("<h2 class='title'>"+response.data.header_text+"</h2>");$modal.find(".loader-spinner").remove();$modal.find(".loading-placeholder").replaceWith("<div class='center'><img class='group' width='270px' height='108px' src='"+response.data.fb_connecting+"'/></div>");
doUpload($target.data("avatar-id"))}else{self.App.navigation.modals.modal.close();self.notifyError(msg("Unexpected or invalid response received"))}},error:function(response){var responseData;self.App.navigation.modals.modal.close();if(response.responseText!=null&&response.responseText!=""){try{eval("responseData="+response.responseText)}catch(err){responseData={exception:{type:"ERROR_UNEXPECTED_RESPONSE",message:"Unexpected or invalid response received"}}}self.notifyError(responseData.exception.message)}else{self.notifyError(msg("Unexpected or invalid response received"))}}})};this.linkUserToFacebook=function(callbackOk,callbackKo){if(typeof callbackOk!=="function"){callbackOk=function(){}}if(typeof callbackKo!=="function"){callbackKo=function(){}}if(!self.App.user.isAlive()){callbackKo();return}if(self.App.user.thirdparty.facebook&&self.isConnected()){callbackOk();return}var onOk=function(){self.App.navigation.modals.modalAlert.add('<div class="group loading-placeholder"><ul class="loader-spinner ls-dark"><li></li><li></li><li></li></ul></div>',false,false,false,{close:false,txtHeader:msg("Please wait")+"..."});self.isValid(function(valid,response){var onOk=this;if(valid){if(response.user){if(response.user.id==self.App.user.id){self.App.navigation.modals.modal.close(callbackOk);return}self.notifyError(msv("Sorry, the %3rdpartyname% account you're using is already linked to another user. Close this session and use it to log in.",{"%3rdpartyname%":"Facebook"}));self.App.navigation.modals.modal.close(callbackKo)}else{$.ajax({url:self.App.url.ajax+"user/third-party/facebook/link-account",success:function(response){if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true){self.App.user.thirdparty.facebook=true;self.App.navigation.modals.modal.close(callbackOk)}else{self.notifyError(msg("Unexpected or invalid response received"));self.App.navigation.modals.modal.close(callbackKo)}},error:function(response){var responseData;if(response.responseText!=null&&response.responseText!=""){try{eval("responseData="+response.responseText)
}catch(err){responseData={exception:{type:"ERROR_UNEXPECTED_RESPONSE",message:msg("Unexpected or invalid response received")}}}self.notifyError(responseData.exception.message)}else{self.notifyError(msg("Unexpected or invalid response received"))}self.App.navigation.modals.modal.close(callbackKo)}})}}else{self.login(onOk,callbackKo)}},{autologin:true})};self.login(onOk,callbackKo);return false};this.registerEventListener=function(eventId,triggerFunction){if(typeof triggerFunction=="function"&&eventId!=null){if(eventListeners[eventId]==null){eventListeners[eventId]=[]}eventListeners[eventId].push(triggerFunction);return true}else{return false}};this.triggerEvent=function(eventId,parameter){if(typeof parameter=="undefined"){parameter=null}if(self.debug){self.log("Trigger "+eventId)}if(eventListeners[eventId] instanceof Array){for(var i=0;i<eventListeners[eventId].length;i++){if(eventListeners[eventId][i](parameter)==false){return false}}}return true};this.onInit=function(callback){if(self._init){return callback()}self.registerEventListener("init",callback)};this.onReady=function(callback){if(self._ready){return callback()}self.registerEventListener("ready",callback)};this.onConnected=function(callback){self.registerEventListener("connected",callback);if(status=="connected"){callback()}};this.onUnauthorized=function(callback){self.registerEventListener("not-authorized",callback);if(status=="not-authorized"){callback()}};this.onNotLogged=function(callback){self.registerEventListener("not-logged",callback);if(status=="not-logged"){callback()}};this.onLogin=function(callback){self.registerEventListener("login",callback)};this.flush=function(){status="unknown";auth.accessToken=false;auth.userID=false;auth.expireTime=false};this.isOnFacebook=function(){if(status=="connected"||status=="not-authorized"){return true}return false};this.isConnected=function(){if(status=="connected"){if(auth.expireTime>new Date()){return true}self.loadLoginStatus();return false}else{return false}};
this.loadLoginStatus=function(){self.sdk().getLoginStatus(function(response){if(response.authResponse){auth.accessToken=response.authResponse.accessToken;auth.userID=response.authResponse.userID;auth.expireTime=new Date(new Date().getTime()+(response.authResponse.expiresIn*1000)-900000)}else{self.flush()}if(response.status==="connected"){if(status!="connected"){status="connected";self.triggerEvent("connected")}}else{if(response.status==="not_authorized"){status="not-authorized";self.triggerEvent("not-authorized")}else{self.triggerEvent("not-logged");status="not-logged"}}if(!self._ready){self._ready=true;self.triggerEvent("ready")}},true);if(loginStatusTimeout){clearTimeout(loginStatusTimeout)}loginStatusTimeout=setTimeout(self.loadLoginStatus,900*1000)};this.requestPermissions=function(scopes,callbackOk,callbackKo){if(typeof callbackOk!="function"){callbackOk=function(){}}if(typeof callbackKo!="function"){callbackKo=function(){}}if(!self.App.user.isAlive()){callbackKo("User not alive");return}if(!self.App.user.thirdparty.facebook){callbackKo("Account not connected to facebook");return}if(!self.isConnected()){self.log("Not connected, connect first!");self.login(function(){self.requestPermissions(scopes,callbackOk,callbackKo)},function(){callbackKo(response)});return}if(self.App.user.thirdparty.facebook_id!=auth.userID){callbackKo("Connected with the wrong account. Required: "+self.App.user.thirdparty.facebook_id+" / Reported: "+auth.userID);return}self.sdk().login(function(response){if(response.hasOwnProperty("authResponse")){if(!response.authResponse.hasOwnProperty("grantedScopes")){callbackKo("ERROR: No granted scopes")}else{var grantedScopes=response.authResponse.grantedScopes.split(",");var requiredScopes=scopes.split(",");var hasAllScopes=true;var failedScope=null;for(var i=0;i<requiredScopes.length;i++){if(grantedScopes.indexOf(requiredScopes[i])<0){hasAllScopes=false;failedScope=requiredScopes[i];break}}if(hasAllScopes){callbackOk(grantedScopes)}else{callbackKo("Error: Permission scope "+failedScope+" not granted")
}}}else{callbackKo("ERROR: No authResponse")}},{scope:"email"+ +","+scopes,return_scopes:true,auth_type:"rerequest"})};this.login=function(callbackOk,callbackKo){if(typeof callbackOk!="function"){callbackOk=function(){}}if(typeof callbackKo!="function"){callbackKo=function(){}}if(self.isConnected()){return callbackOk()}var doFBLogin=function(){self.sdk().login(function(response){if(response.authResponse){auth.accessToken=response.authResponse.accessToken;auth.userID=response.authResponse.userID;auth.expireTime=new Date(new Date().getTime()+(response.authResponse.expiresIn*1000)-900000);status="connected";self.triggerEvent("login");self.triggerEvent("connected");callbackOk(response)}else{status="not-authorized";self.triggerEvent("not-authorized");callbackKo(response)}},{scope:"email",auth_type:"rerequest"})};if(self.sdk()==null){self.onFacebookInit=doFBLogin;if(typeof window.FB!="undefined"&&window.FB!=null){self.fbAsyncInit()}}else{doFBLogin()}};this.sdk=function(){return sdk};this.setSdk=function(facebookSdk){sdk=facebookSdk};this.log=function(msg){if(typeof console!=undefined){console.log(msg)}};this.dir=function(msg){if(typeof console!=undefined){console.dir(msg)}};this.isValid=function(callback,options){if(typeof callback!="function"){callback=function(){}}if(typeof options=="undefined"){options={}}options=self.App.lib.extendOptions({autologin:false},options);$.ajax({url:self.App.url.ajax+"user/third-party/facebook/is-valid?userID="+self.getUserID()+"&token="+self.getAccessToken()+"&autologin="+(options.autologin?1:0),success:function(response){if(response instanceof Object&&response.hasOwnProperty("status")&&response.status.success==true){callback(true,{user:response.data.user,fb_user:response.data.fb_user,fb_token:response.data.fb_token,facebook_uid:(response.data.hasOwnProperty("facebook_uid")?response.data.facebook_uid:null),logged_in:response.data.logged_in},response)}else{callback(false,new Error("ERROR_UNEXPECTED_RESPONSE"))}},error:function(response){status="not-authorized";
if(response.responseText!=null&&response.responseText!=""){try{eval("responseData="+response.responseText)}catch(err){responseData={exception:{type:"ERROR_UNEXPECTED_RESPONSE",message:"Unexpected or invalid response received"}}}if(responseData.exception.type==="ERROR_PERMISSIONS"){self.notifyError(responseData.exception.message)}callback(false,responseData.exception.type)}else{callback(false,"ERROR_UNEXPECTED_RESPONSE")}}})};this.onFacebookInit=null;this.fbAsyncInit=function(){self.setSdk(window.FB);self.sdk().init({appId:self.App.cfg.thirdParty.facebook.appId,channelUrl:self.App.cfg.thirdParty.facebook.channelUrl,status:true,cookie:true,xfbml:false,version:"v"+self.App.cfg.thirdParty.facebook.version,oauth:true});self.triggerEvent("init");self.loadLoginStatus();$usersFacebook=$(".js-aside-users-facebook");if($usersFacebook.size()>0){var link=$usersFacebook.attr("data-link");var name=$usersFacebook.attr("data-name");var description=$usersFacebook.attr("data-description");$("body").on("click",".js-invite-facebook-friends",function(ev){ev.preventDefault;ev.stopPropagation;self.sdk().ui({method:"send",display:"popup",description:description,name:name,link:link});return false});$("body").on("click",".js-invite-facebook-friend",function(ev){ev.preventDefault;ev.stopPropagation;self.sdk().ui({method:"send",display:"popup",to:$(this).attr("data-to"),description:description,name:name,link:link});return false})}if(typeof self.onFacebookInit==="function"){self.onFacebookInit()}};this.init=function(){var $body;if(self._init){return}self._init=true;$body=$("body");$body.on("click",".js-upload-avatar-facebook",function(ev){self.log("Uploading avatar to FB...");self.requestPermissions("publish_actions",function(){self.uploadAvatarToFacebook(ev)},function(ev){self.log("Could not get publish_actions permissions");self.dir(ev)})});$body.on("click",".js-upload-snapshot-facebook",function(ev){var snapshot=$(this).attr("data-snapshot");if(snapshot.length<5){return false}self.log("Uploading snapshot to FB...");
self.requestPermissions("publish_actions",function(){self.uploadSnapshotToFacebook(ev,snapshot)},function(ev){self.log("Could not get publish_actions permissions")})});self.App.registerEventListener("ready",function(){self.ready()})};this.ready=function(){if(document.location.href.indexOf("noFb=1")==-1){(function(d){var js,id="facebook-jssdk",ref=d.getElementsByTagName("script")[0];if(d.getElementById(id)){return}js=d.createElement("script");js.id=id;js.async=true;js.src="//connect.facebook.net/"+self.App.i18n.locale_name+"/sdk.js";ref.parentNode.insertBefore(js,ref)}(document))}self._ready=true;msg=App.i18n.xlat.msg;msv=App.i18n.xlat.msv};window.fbAsyncInit=self.fbAsyncInit;setTimeout(this.init,250)};function HeaderNavSearch(c,n){var m=this;var b=function(){};var f=function(){};this.App=c;this._init=false;this._ready=false;this.isOpened=false;this.isSearching=false;this.currentSearchXhrGames=false;this.currentSearchXhrUsers=false;this.currentSearchXhrVideos=false;this.currentSearchTerm=null;this.lastCompletedSearchTerm=null;this.currentSearchTimeout=null;var h={games:0,users:0,videos:0};var g=false;var a={categories:[],tags:[],gamesText:[],gamesTags:[],gamesCats:[],users:[],friends:[],videos:[]};var k={body:"body",widget:"#searchWidget",widgetOverlay:"#searchWidgetOverlay",toggle:".js-search-widget-toggle",toggleCount:".alert-count",form:"#search-widget-form",formInput:"input[name=query]",submitButton:"input[name=submit]",clearButton:".input-clear",loadingButton:".search-loader",closeButton:".input-close",gamesContainer:"#search-widget-games",usersContainer:"#search-widget-users",videosContainer:"#search-widget-videos",landingContainer:"#search-widget-landing",templateGame:"#search-template-game",templateGameAchievements:"#search-template-game-achievements",templateCategory:"#search-template-category",templateUser:"#search-template-user",templateVideo:"#search-template-video",chromePromo:"#chrome-ext-promo"};var e={body:null,widget:null,widgetOverlay:null,toggle:null,toggleCount:null,form:null,formInput:null,submitButton:null,closeButton:null,clearButton:null,loadingButton:null,gamesContainer:null,gamesContainerList:null,usersContainer:null,usersContainerList:null,videosContainer:null,videosContainerList:null,landingContainer:null,templateGame:null,templateGameAchievements:null,templateCategory:null,templateUser:null,templateVideo:null,chromePromo:null};var p={debug:false,serviceUrl:null,maxGames:32,maxCategories:6,maxUsers:12,maxVideos:10};var j=false;var i=0;var l=0;var d={};this.eventListeners={init:null,ready:null,open:null,close:null};this.registerEventListener=function(q,r){if(typeof r=="function"&&q!=null){if(this.eventListeners[q]==null){this.eventListeners[q]=[]
}this.eventListeners[q].push(r);return true}else{return false}};this.triggerEvent=function(r,s){if(typeof s=="undefined"){s=false}m.log("Trigger event "+r);if(this.eventListeners[r] instanceof Array){for(var q=0;q<this.eventListeners[r].length;q++){if(this.eventListeners[r][q](s)==false){return false}}}return true};this.log=function(r,q){if((p.debug||(q!=undefined&&q))&&typeof console==="object"){if(typeof r=="string"){console.log("MP-HeaderNavSearch: "+r)}else{console.groupCollapsed("MP-HeaderNavSearch object "+(typeof r));console.dir(r);console.groupEnd()}}};this.toggleSearch=function(){m.triggerEvent("toggle");if(!m.isOpened){return m.openSearch()}else{return m.closeSearch()}};this.openSearch=function(q){m.App.widgets.headerNavUserWidget.closeWidget();e.widgetOverlay.show();e.widget.show();if(!m._ready){return false}if(m.isOpened){return false}if(q==undefined){q=function(){}}e.toggle.addClass("opened");m.isOpened=true;q();m.clearSearch();e.body.removeClass("st-sw-collapsed").addClass("st-sw-open");e.widget.addClass("opened");e.formInput.first().focus();m.triggerEvent("open");m.loadLanding();g=true;c.trackAnalyticsEvent(["_trackEvent","SearchV2","open-widget"]);return true};this.closeSearch=function(q){if(!m._ready){return false}if(!m.isOpened){return false}e.toggle.removeClass("opened");if(q==undefined){q=function(){}}q();m.clearSearch();m.isOpened=false;e.body.addClass("st-sw-collapsed").removeClass("st-sw-open");e.widget.removeClass("opened");e.formInput.first().blur();m.triggerEvent("close");c.trackAnalyticsEvent(["_trackEvent","SearchV2","close-widget"]);return true};this.clearSearch=function(){if(m.currentSearchXhrGames){m.currentSearchXhrGames.abort()}if(m.currentSearchXhrUsers){m.currentSearchXhrUsers.abort()}if(m.currentSearchXhrVideos){m.currentSearchXhrVideos.abort()}m.isSearching=false;e.widget.removeClass("is-searching");m.currentSearchTerm="";m.lastCompletedSearchTerm="";clearTimeout(m.currentSearchTimeout);m.currentSearchTimeout=null;e.formInput.val("");
m.resetResults();m.refreshContent(true,true,true)};this.resetResults=function(){a={categories:[],tags:[],gamesText:[],gamesTags:[],gamesCats:[],users:[],friends:[],videos:[]};h={users:0,games:0,videos:0}};this.setSearch=function(q){e.formInput.val(q);m.formInput.scheduleSearchUpdate()};this.submitSearch=function(q){if(q.length<2){return}if(e.form.data("submitting")==true){return}e.form.data("submitting",true);c.trackAnalyticsEvent(["_trackEvent","Navigation","SearchWidget_V2_PartialSearch",q]);document.location.href=e.form.attr("action").split("%query%").join(encodeURIComponent(q))};this.formInput={onKeyUp:function(){m.formInput.scheduleSearchUpdate()},onBlur:function(){m.formInput.scheduleSearchUpdate()},onFocus:function(){},scheduleSearchUpdate:function(){m.currentSearchTerm=e.formInput.val();clearTimeout(m.currentSearchTimeout);m.currentSearchTimeout=setTimeout(m.performSearch,150)}};this.updateForm=function(){if(m.currentSearchTerm.length>0){e.widget.addClass("with-search").removeClass("without-search")}else{e.widget.removeClass("with-search").addClass("without-search")}};this.performSearch=function(){if(!m.isOpened){return false}else{m.updateForm();if(m.currentSearchXhrGames){m.log("Aborting games search of "+q);if(m.currentSearchXhrGames.hasOwnProperty("abort")){m.currentSearchXhrGames.abort()}else{clearTimeout(m.currentSearchXhrGames)}m.currentSearchXhrGames=null}if(m.currentSearchXhrUsers){m.log("Aborting users search of "+q);m.currentSearchXhrUsers.abort();m.currentSearchXhrUsers=null}if(m.currentSearchXhrVideos){m.log("Aborting videos search of "+q);m.currentSearchXhrVideos.abort();m.currentSearchXhrVideos=null}var q=m.currentSearchTerm;if(m.currentSearchTerm.length>=2){if(q!=m.lastCompletedSearchTerm){m.isSearching=true;e.widget.addClass("is-searching");m.log("Perform search of "+q);var r=false;m.currentSearchXhrGames=$.ajax({url:p.serviceUrl,data:{query:q.substring(0,30),scope:"games"},success:function(s){if(!m.isSearching||!m.isOpened||s.length<1){return
}if(s&&s.hasOwnProperty("status")&&s.status.success&&s.hasOwnProperty("data")&&s.data.hasOwnProperty("results")){m.lastCompletedSearchTerm=q;a.categories=s.data.results.categories;a.tags=s.data.results.tags;a.gamesCats=s.data.results.gamesCats;a.gamesTags=s.data.results.gamesTags;a.gamesText=s.data.results.gamesText;r=true}},complete:function(){setTimeout(function(){m.log("Search of "+q+" complete");c.trackAnalyticsEvent(["_trackEvent","SearchV2","search-complete",q]);m.isSearching=false;e.widget.removeClass("is-searching");m.currentSearchXhrGames=null;a.users=[];a.friends=[];a.videos=[];m.refreshContent(true,true,true);if(r){m.currentSearchXhrUsers=$.ajax({url:p.serviceUrl,data:{query:q.substring(0,30),scope:"users"},success:function(s){if(!m.isOpened||s.length<1){return}if(s&&s.hasOwnProperty("status")&&s.status.success&&s.hasOwnProperty("data")&&s.data.hasOwnProperty("results")){a.users=s.data.results.users;a.friends=s.data.results.friends}},complete:function(){m.log("Search of users"+q+" complete");m.currentSearchXhrUsers=null;m.refreshContent(false,true,false);m.currentSearchXhrVideos=$.ajax({url:p.serviceUrl,data:{query:q.substring(0,30),scope:"videos"},success:function(s){if(!m.isOpened||s.length<1){return}if(s&&s.hasOwnProperty("status")&&s.status.success&&s.hasOwnProperty("data")&&s.data.hasOwnProperty("results")){a.videos=s.data.results.videos}},complete:function(){m.log("Search of videos"+q+" complete");m.currentSearchXhrVideos=null;m.refreshContent(false,false,true)}})}})}},5)}})}}else{m.isSearching=false;m.lastCompletedSearchTerm="";e.widget.removeClass("is-searching");m.resetResults();m.refreshContent(true,true,true)}}};this.refreshContent=function(q,s,r){if(!m.isOpened){return}if(q==undefined){q=true}if(s==undefined){s=true}if(r==undefined){s=true}m.updateForm();if(q){h.games=m.refreshContentGames()}if(s){h.users=m.refreshContentUsers()}if(r){h.videos=m.refreshContentVideos()}if((h.games+h.users+h.videos)>0){e.widget.addClass("with-search-results").removeClass("without-search-results")
}else{e.widget.removeClass("with-search-results").addClass("without-search-results")}};var o=function(r,s){if(r&&s&&r.length>1&&s.length>1){var q=function(t,u){var v=u.toLowerCase().indexOf(t.toLowerCase());if(v==-1){return u}return u.substr(0,v)+"<span class='match'>"+u.substr(v,t.length)+"</span>"+u.substr(v+t.length)};s=q(r,s)}return s};this.refreshContentUsers=function(){m.log("refreshContentUsers()");e.usersContainerList.html("");e.usersContainer.removeClass("with-results").addClass("no-results");var u=function(y){for(var z=0;z<y.length;z++){var A=y[z].type;var B=y[z].item;B.origin=y[z].origin;if(A=="user"){e.usersContainerList.append(t(B,z))}}if(y.length>0){e.usersContainer.removeClass("no-results").addClass("with-results")}};var t=function(A,y){var z=e.templateUser.split("{name}").join(A.hasOwnProperty("fullname")?A.fullname:"");z=z.split("{name_html}").join(o(m.currentSearchTerm,A.hasOwnProperty("fullname")?A.fullname:"&nbsp;"));z=z.split("{uid_html}").join(o(m.currentSearchTerm,A.uid));z=z.split("{origin}").join(A.origin);z=z.split("{url}").join(A.url);z=z.split("{id}").join(A.id);z=z.split("{uid}").join(A.uid);z=z.split("{image}").join(A.avatar_big);z=z.split("{level}").join(A.progress_level);if(A.origin=="friend"){z=z.split("{css}").join("card-friend")}else{z=z.split("{css}").join("")}return $.parseHTML(z)};var w=[];var s=JSON.parse(JSON.stringify(a));var x=[];var v=function(A,z){if(A.length==0){return false}var y=A.shift();if(!z.includes(y.id)){z.push(y.id);return y}else{return false}};for(var r=0;r<50&&w.length<p.maxUsers;r++){if(s.friends.length>0){var q=v(s.friends,x);if(q){w.push({type:"user",origin:"friend",item:q})}}else{if(s.users.length>0){var q=v(s.users,x);if(q){w.push({type:"user",origin:"user",item:q})}}}}u(w);return w.length};this.refreshContentVideos=function(){if(!e.videosContainer){return}m.log("refreshContentVideos()");e.videosContainerList.html("");e.videosContainer.removeClass("with-results").addClass("no-results");var u=function(y){for(var z=0;
z<y.length;z++){var A=y[z].type;var B=y[z].item;B.origin=y[z].origin;if(A=="video"){e.videosContainerList.append(w(B,z))}}if(y.length>0){e.videosContainer.removeClass("no-results").addClass("with-results")}};var w=function(A,y){var B=function(G){var E=~~(G/3600);var F=~~((G%3600)/60);var D=~~G%60;var C="";if(E>0){C+=""+E+":"+(F<10?"0":"")}C+=""+F+":"+(D<10?"0":"");C+=""+D;return C};var z=e.templateVideo.split("{name}").join(A.title);z=z.split("{name_html}").join(o(m.currentSearchTerm,A.title));z=z.split("{uid}").join(A.video_id);z=z.split("{origin}").join(A.origin);z=z.split("{url}").join(A.url);z=z.split("{id}").join(A.video_id);z=z.split("{image}").join(A.thumbnail);z=z.split("{duration}").join(A.duration);z=z.split("{duration_fancy}").join(B(A.duration));z=z.split("{channel}").join(A.driver_channel);z=z.split("{channel_thumbnail}").join(A.driver_channel_thumbnail);z=z.split("{likes}").join(MP.i18n.writeNumber(A.driver_likes,0,true));z=z.split("{views}").join(MP.i18n.writeNumber(A.driver_views,0,true));z=z.split("{css}").join("");z=z.split("data-hreflinkattr").join("href");return $.parseHTML(z)};var q=[];var s=JSON.parse(JSON.stringify(a));var x=[];var v=function(y,A){if(y.length==0){return false}var z=y.shift();if(!A.includes(z.video_id)){A.push(z.video_id);return z}else{return false}};for(var r=0;r<50&&q.length<p.maxVideos;r++){if(s.videos.length>0){var t=v(s.videos,x);if(t){q.push({type:"video",origin:"video",item:t})}}}u(q);return q.length};this.refreshContentGames=function(){m.log("refreshContentGames()");e.gamesContainerList.html("");e.gamesContainer.addClass("no-results").removeClass("with-results");var v=function(A){for(var B=0;B<A.length;B++){var C=A[B].type;var D=A[B].item;D.origin=A[B].origin;if(C=="game"){e.gamesContainerList.append(q(D,B))}if(C=="category"){e.gamesContainerList.append(r(D,B))}}if(A.length>0){e.gamesContainer.removeClass("no-results").addClass("with-results")}};var y=3;var q=function(C,A){var B=e.templateGame.split("{name}").join(C.name);
B=B.split("{name_html}").join(o(m.currentSearchTerm,C.name));B=B.split("{origin}").join(C.origin);B=B.split("{url}").join(C.url);B=B.split("{master_catalog_id}").join(C.master_catalog_id);B=B.split("data-hreflinkattr").join("href");if(C.origin=="game-cats"&&y>0){y--;B=B.split("{css}").join("card-highlight")}else{B=B.split("{css}").join("")}if(!C.has_achievements&&!C.has_highscores){B=B.split("{achievements}").join("")}else{B=B.split("{achievements}").join(e.templateGameAchievements)}if(C.has_updated){B=B.split("{updated}").join("<span class='card-badge-3d badge-updated'></span>")}else{B=B.split("{updated}").join("")}if(C.has_new){B=B.split("{new}").join("<span class='card-badge-3d badge-new'></span>")}else{B=B.split("{new}").join("")}return $.parseHTML(B)};var r=function(C,A){var B=e.templateCategory.split("{name}").join(C.name);B=B.split("{origin}").join(C.origin);B=B.split("{name_short}").join(C.name_short);B=B.split("{name_html}").join(o(m.currentSearchTerm,C.name));B=B.split("{name_short_html}").join(o(m.currentSearchTerm,C.name_short));B=B.split("{url_desktop}").join(C.url_desktop);B=B.split("{icon}").join(C.icon);B=B.split("data-hreflinkattr").join("href");return $.parseHTML(B)};var u=[];var t=JSON.parse(JSON.stringify(a));if(t.gamesCats.length==0){t.gamesCats=t.gamesTags}if(t.categories.length==1&&t.gamesText.length>8){t.gamesText=t.gamesText.slice(0,8)}var z=[];var w=function(C,B){if(C.length==0){return false}var A=C.shift();if(!B.includes(A.id)){B.push(A.id);return A}else{return false}};for(var s=0;s<120&&u.length<p.maxGames;s++){if(t.categories.length>0){u.push({type:"category",origin:"category",item:t.categories.shift()})}else{if(t.tags.length>0){u.push({type:"category",origin:"category",item:t.tags.shift()})}else{if(s<18){if(t.gamesCats.length>0&&((z.length<4&&(z.length>0||t.gamesText.length==0))||(z.length>6&&s%(s%3==1?1:2)==0))){var x=w(t.gamesCats,z);if(x){u.push({type:"game",origin:"game-cats",item:x})}}else{if(t.gamesText.length>0){var x=w(t.gamesText,z);
if(x){u.push({type:"game",origin:"game-text",item:x})}}}}else{if(t.gamesText.length>0&&s%3!=0){var x=w(t.gamesText,z);if(x){u.push({type:"game",origin:"game-text",item:x})}}else{if(t.gamesCats.length>0){var x=w(t.gamesCats,z);if(x){u.push({type:"game",origin:"game-cats",item:x})}}}}}}}v(u);return u.length};this.checkChromeExtensionInstalled=function(){if(window.hasOwnProperty("chrome")&&e.chromePromo.length>0&&!e.chromePromo.is(":visible")){var r=function(){e.widget.addClass("show-chrome-extension")},q=e.chromePromo.attr("data-chromeextid");try{chrome.runtime.sendMessage(q,"Ack?",function(t){if(chrome.runtime.lastError||t===undefined){j=false}if(t!==undefined&&t.hasOwnProperty("success")&&t.success===true){j=true}if(!j){r()}else{}})}catch(s){r()}}};this.loadLastPlayedCount=function(){if(e.toggleCount){$.ajax({url:p.serviceUrl,data:{scope:"last-played-count"},success:function(q){if(q&&q.hasOwnProperty("status")&&q.status.success&&q.hasOwnProperty("data")&&q.data.hasOwnProperty("results")){i=q.data.results["last-played-count"];l=q.data.results["last-widget-open"];d=q.data.results["last-played-games"];if(i>4){e.toggleCount.find(".js-amount").html(4)}else{e.toggleCount.find(".js-amount").html(i)}if(i>0){e.toggleCount.addClass("count-visible")}}}})}};this.loadLanding=function(){if(e.landingContainer&&!g){$.ajax({url:p.serviceUrl,data:{scope:"landing-modules",numItemsMostPlayed:12,numItemsRecommended:8,numItemsTopOnline:32,lastWidgetOpen:l},success:function(q){if(q&&q.hasOwnProperty("status")&&q.status.success&&q.hasOwnProperty("data")&&q.data.hasOwnProperty("results")&&q.data.results.hasOwnProperty("landing-modules")){e.landingContainer.html(q.data.results["landing-modules"]);e.widget.addClass("landing-ready");e.landingContainer.find("#search-widget-top-online .view-all").on("click",function(r){c.trackAnalyticsEvent(["_trackEvent","SearchV2","Click-Top-Online-Viewmore"]);e.landingContainer.find("#search-widget-top-online").addClass("all");return false});e.landingContainer.find("#search-widget-top-online ").on("click","a.media",function(r){var s=$(this);
c.trackAnalyticsEvent(["_trackEvent","SearchV2","Click-Top-Online-Click-Card",s.attr("title")])});m.App.navigation.minimonkey.roomUsage.add(e.landingContainer)}}})}};this.init=function(){if(m._init){return}m._init=true;b=c.i18n.xlat.msg;f=c.i18n.xlat.msv;if(n!=undefined){var q=n();for(var r in q){if(q.hasOwnProperty(r)){p[r]=q[r]}}}c.registerEventListener("ready",m.ready);m.triggerEvent("init",m)};this.ready=function(){if(m._ready){return}m._ready=true;e.body=$(k.body);e.widget=$(k.widget);e.widgetOverlay=$(k.widgetOverlay);e.toggle=$(k.toggle);e.toggleCount=e.toggle.find(k.toggleCount);e.form=e.widget.find(k.form);e.formInput=e.form.find(k.formInput);e.closeButton=e.form.find(k.closeButton);e.clearButton=e.form.find(k.clearButton);e.loadingButton=e.form.find(k.loadingButton);e.submitButton=e.form.find(k.submitButton);e.gamesContainer=e.widget.find(k.gamesContainer);e.gamesContainerList=e.gamesContainer.children("ul");e.usersContainer=e.widget.find(k.usersContainer);e.usersContainerList=e.usersContainer.children("ul");e.videosContainer=e.widget.find(k.videosContainer);if(e.videosContainer){e.videosContainerList=e.videosContainer.children("ul")}e.landingContainer=e.widget.find(k.landingContainer);e.chromePromo=$(k.chromePromo);e.templateGame=e.gamesContainer.find(k.templateGame).html();e.templateGameAchievements=e.gamesContainer.find(k.templateGameAchievements).html();e.templateCategory=e.gamesContainer.find(k.templateCategory).html();e.templateUser=e.usersContainer.find(k.templateUser).html();if(e.videosContainer){e.templateVideo=e.videosContainer.find(k.templateVideo).html()}e.toggle.on("click",m.toggleSearch);e.closeButton.on("click",function(q){m.closeSearch();return false});e.clearButton.on("click",function(q){m.clearSearch();return false});e.loadingButton.on("click",function(q){m.clearSearch();return false});e.widgetOverlay.on("click",function(q){m.closeSearch()});e.formInput.on("keyup",m.formInput.onKeyUp);e.formInput.on("blur",m.formInput.onBlur);e.formInput.on("focus",m.formInput.onFocus);
e.form.on("submit",function(q){q.preventDefault();q.stopPropagation();m.submitSearch(e.formInput.val());return false});m.checkChromeExtensionInstalled();m.loadLastPlayedCount();m.triggerEvent("ready",m)};c.registerEventListener("init",function(){m.init()})};function HeaderNavUserWidget(b,h){var g=this;var a=function(){};var d=function(){};var f=b.url.root;this.App=b;this.isInit=false;this.isReady=false;this.isOpened=false;this.firstOpen=true;this.widgetAvailable=false;this.widgetDocked=false;this.widgetMessages=null;this.widgetEconomy=null;this.widgetUserStats=null;this.widgetFeed=null;this.widgetRanking=null;var e={body:"body",widget:"#userWidgetV2",widgetOverlay:"#userWidgetV2Overlay",toggle:".js-uw-aside-toggle",aside:".uw-aside",dropdowns:".uw-dropdowns",asideWheelToggle:".toggle-btn",userRankings:{trendSelector:".alert-trend",rankingsSelector:"#global-position-pane"},userFeed:{paneSelector:"#news-pane",userFeedSelector:".user-feed"}};var c={body:null,widget:null,widgetOverlay:null,dropdowns:null,toggle:null,aside:null};var i={debug:false,serviceUrl:null};this.eventListeners={init:null,ready:null,open:null,close:null,toggle:null,earned_minicoins:null,earned_gems:null,update_widget_image:null,user_stats_updated:null,user_awake:null,user_die:null,resize:null,dock_widget:null,undock_widget:null};this.registerEventListener=function(j,k){if(typeof k=="function"&&j!=null){if(g.eventListeners[j]==null){this.eventListeners[j]=[]}this.eventListeners[j].push(k);return true}else{return false}};this.triggerEvent=function(l,m,k){if(typeof m=="undefined"){m=false}if(typeof k=="undefined"){k=false}g.log("Trigger event "+l);if(this.eventListeners[l] instanceof Array){for(var j=0;j<this.eventListeners[l].length;j++){if(this.eventListeners[l][j](m,k)==false){return false}}}return true};this.userIsAwakeEvent=function(){g.log("USER IS AWAKE");if(g.App.user.isAlive()){if(g.App.user.version.messaging==2||g.App.user.version.messaging==3){g.widgetMessages=new UserWidgetExtendedMessaging(g,g.App.user.version.messaging)}else{}}else{}g.triggerEvent("user_awake")};this.userDieEvent=function(){g.log("USER DIED");g.triggerEvent("user_die")};this.userStatsUpdated=function(){g.log("USER STATS UPDATED");g.triggerEvent("user_stats_updated")};this.log=function(k,j){if((i.debug||(j!=undefined&&j))&&typeof console==="object"){if(typeof k=="string"){console.log("MP-HeaderNavUserWidget: "+k)
}else{console.groupCollapsed("MP-HeaderNavUserWidget object "+(typeof k));console.dir(k);console.groupEnd()}}};this.getObjects=function(){return c};this.getSelectors=function(){return e};this.getOptions=function(){return i};this.toggleWidget=function(){g.triggerEvent("toggle");if(!g.isOpened){return g.openWidget()}else{return g.closeWidget()}};this.openWidget=function(j){if(!g.isReady){return false}if(g.isOpened){return false}if(!g.widgetAvailable){return false}if(!g.widgetDocked){g.App.widgets.headerNavSearch.closeSearch()}c.widgetOverlay.show();c.widget.show();c.aside.show();if(j==undefined){j=function(){}}c.toggle.addClass("opened");g.isOpened=true;j();c.widget.addClass("opened");c.body.addClass("st-uw-open").removeClass("st-uw-collapsed");g.triggerEvent("open");b.trackAnalyticsEvent(["_trackEvent","UserWidgetV2","open-widget"]);if(g.firstOpen){c.aside.find(e.asideWheelToggle).on("click",function(){g.toggleWidget();return false})}this.firstOpen=false;return true};this.closeWidget=function(j){if(!g.isReady){return false}if(!g.isOpened){return false}if(!g.widgetAvailable){return false}if(g.widgetDocked){return false}c.toggle.removeClass("opened");if(j==undefined){j=function(){}}j();g.isOpened=false;c.body.addClass("st-uw-collapsed").removeClass("st-uw-open");c.widget.removeClass("opened");g.triggerEvent("close");b.trackAnalyticsEvent(["_trackEvent","UserWidgetV2","close-widget"]);return true};this.resizeWidget=function(){if(!g.widgetAvailable){return false}if((window.innerWidth>=1640&&b.pageType!="game")||(window.innerWidth>=(1640+450))){if(!g.widgetDocked){g.triggerEvent("dock_widget");g.log("DOCK User widget");g.widgetDocked=true;c.body.addClass("st-uw-docked");if(!g.isOpened){g.openWidget()}}}else{if(g.widgetDocked){g.triggerEvent("undock_widget");g.log("UNDOCK User widget");g.widgetDocked=false;c.body.removeClass("st-uw-docked");if(g.isOpened){g.closeWidget()}}}};this.nav=new function(){this.toLevelModal=function(j){$(".js-modal-economy").click();$('[href = "#level"]').click();
if(j!==undefined){j.preventDefault();j.stopPropagation()}};this.toGemsModal=function(j){$(".js-modal-economy").click();$('[href = "#gems"]').click();if(j!==undefined){j.preventDefault();j.stopPropagation()}};this.toMinicoinsModal=function(j){$(".js-modal-economy").click();$('[href = "#minicoins"]').click();if(j!==undefined){j.preventDefault();j.stopPropagation()}}};this.init=function(){if(g.isInit){return}g.isInit=true;a=b.i18n.xlat.msg;d=b.i18n.xlat.msv;if(h!=undefined){var j=h();for(var l in j){if(j.hasOwnProperty(l)){i[l]=j[l]}}}this.widgetEconomy=new UserWidgetEconomy(g);this.widgetRanking=new UserWidgetRanking(g);this.widgetUserStats=new UserWidgetUserStats(g);this.widgetFeed=new UserWidgetFeed(g);b.registerEventListener("ready",g.ready);b.user.registerEventListener("awake",g.userIsAwakeEvent);b.user.registerEventListener("die",g.userDieEvent);b.user.registerEventListener("statsUpdated",g.userStatsUpdated);g.triggerEvent("init",g)};this.ready=function(){if(g.isReady){return}g.isReady=true;c.body=$(e.body);c.widget=$(e.widget);c.widgetOverlay=$(e.widgetOverlay);if(c.widget.size()>0){g.widgetAvailable=true}if(g.widgetAvailable){c.dropdowns=c.widget.find(e.dropdowns);c.toggle=c.widget.find(e.toggle);c.aside=c.widget.find(e.aside);if(c.aside.size()<=0){g.widgetAvailable=false}}if(g.widgetAvailable){c.dropdowns=c.widget.find(e.dropdowns);c.toggle=c.widget.find(e.toggle);c.aside=c.widget.find(e.aside);c.toggle.on("click",function(){g.toggleWidget();return false});c.widgetOverlay.on("click",function(){g.closeWidget();return false});var j=null;window.addEventListener("resize",function(){clearTimeout(j);j=setTimeout(g.resizeWidget,150)});g.resizeWidget()}g.triggerEvent("ready",g)};b.registerEventListener("init",function(){g.init()})}function UserWidgetUserStats(b){var a=this;this.App=b.App;this.userWidget=b;this._widgetId="userWidgetV2";this._widgetNotLoggedId="user-widget-no-logged";this._widgetDom=null;this._widgetNotLoggedDom=null;this._started=false;this.isInit=false;
this._first=false;this._statValues={total_messages:"messages",total_minicoins:"minicoins",total_gems:"gems",progress_level:"level"};this._userCurrentValues={avatar:null,progress_level:0,progress_points:0,total_minicoins:0,total_gems:0,total_messages:0};this._progress={points:0,level_percent:0,level_percent_level:0};this._updateStatsTimeoutInstance=false;this._updateStatsTimeoutTime=3000;this._progressMoveRatePerFrame=5;this._progressIntervalTime=41;this._progressIntervalInstance=false;this._progressMoving=false;this.$levelValue;this.$progressBar;this.eventListeners={progressMoveStart:null,progressMoveStop:null,progressUpdate:null,progressNewLevel:null,statsFirst:null,statsUpdated:null};this.registerEventListener=function(c,d){if(typeof d=="function"&&c!=null){if(this.eventListeners[c]==null){this.eventListeners[c]=[]}this.eventListeners[c].push(d);return true}else{return false}};this.triggerEvent=function(d,e){if(typeof e=="undefined"){e=false}if(this.eventListeners[d] instanceof Array){for(var c=0;c<this.eventListeners[d].length;c++){if(this.eventListeners[d][c](e)==false){return false}}}return true};this.start=function(){a._widgetDom=$("#"+a._widgetId);a._widgetNotLoggedDom=$("#"+a._widgetNotLoggedId);a.$levelValue=a._widgetDom.find("span[data-var='animated-level-value']");a.$progressBar=a._widgetDom.find("#progress-bar");if(a._started){return a.update()}if(!a.isInit){a.init()}a._started=true;a._updateStatsValues();a._updateProgressBar()};this.update=function(){if(!a._started){return}a._updateStatsValues();a._updateProgressBar()};this.die=function(){a._started=false;if(a._widgetDom){a._widgetDom.remove()}if(a._widgetNotLoggedDom){a._widgetNotLoggedDom.removeClass("hide")}if(a._progressIntervalInstance){clearInterval(a._progressIntervalInstance)}};this._updateProgressBar=function(){var c=false;var d=a.App.user.getProgressLevelPercent();if(a.App.user.progress_points>a._progress.points){if(a.App.user.progress_level==a._progress.level_percent_level){a._progress.level_percent+=a._progressMoveRatePerFrame;
if(a._progress.level_percent>=d){a._progress.level_percent=d;a._progress.points=a.App.user.progress_points}}else{if(a._progress.level_percent>0&&a._progress.level_percent<100){a._progress.level_percent+=a._progressMoveRatePerFrame}else{if(a._progress.level_percent_level==0){c=true}a._progress.level_percent_level=a.App.user.progress_level;a._progress.level_percent=0;if(!c){a.triggerEvent("progressNewLevel",a.App.user.progress_level)}}}}else{if(a.App.user.progress_points<a._progress.points){if(a.App.user.progress_level==a._progress.level_percent_level){a._progress.level_percent-=a._progressMoveRatePerFrame;if(a._progress.level_percent<=d){a._progress.level_percent=d;a._progress.points=a.App.user.progress_points}}else{if(a._progress.level_percent>0&&a._progress.level_percent<=100){a._progress.level_percent-=a._progressMoveRatePerFrame}else{if(a._progress.level_percent_level==0){c=true}a._progress.level_percent_level=a.App.user.progress_level;a._progress.level_percent=100;if(!c){a.triggerEvent("progressNewLevel",a.App.user.progress_level)}}}}else{if(a._progressIntervalInstance){a._progressMoving=false;clearInterval(a._progressIntervalInstance);a._progressIntervalInstance=false}return}}if(a.App.user.progress_points==a._progress.points){if(a._progressIntervalInstance){a._progressMoving=false;a.triggerEvent("progressMoveStop");clearInterval(a._progressIntervalInstance);a._progressIntervalInstance=false}}else{if(!a._progressIntervalInstance){a._progressMoving=true;a.triggerEvent("progressMoveStart");a._progressIntervalInstance=setInterval(a._updateProgressBar,a._progressIntervalTime)}}if(a._progress.level_percent>100){a._progress.level_percent=100}if(a._progress.level_percent<0){a._progress.level_percent=0}a.triggerEvent("progressUpdate",a._progress.level_percent)};this._updateStatsValues=function(){if(!a._started){return}var e=a._findDifferences();if(!e){return}for(var d in a._statValues){if(!a._statValues.hasOwnProperty(d)){continue}a._widgetDom.find("span[data-var='"+a._statValues[d]+"-value']").html(a.App.i18n.writeNumber(a.App.user[d]));
var f=$("#shoppingCart");if(f.length>0){f.find("span[data-var='"+a._statValues[d]+"-value']").html(a.App.i18n.writeNumber(a.App.user[d]))}}for(var c in a._userCurrentValues){if(!a._userCurrentValues.hasOwnProperty(c)){continue}if(typeof a.App.user[c]!="undefined"){a._userCurrentValues[c]=a.App.user[c]}}if(!a._first){a.triggerEvent("statsFirst",e);a._first=true}else{a.triggerEvent("statsUpdated",e)}};this._findDifferences=function(){var d=false;for(var c in a._userCurrentValues){if(!a._userCurrentValues.hasOwnProperty(c)){continue}if(a.App.user[c]!=a._userCurrentValues[c]&&typeof a.App.user[c]!="undefined"){if(!d){d={}}d[c]=a.App.user[c]}}return d};this.userIsAwakeEvent=function(){a.start()};this.userDieEvent=function(){a.die()};this.userStatsUpdated=function(){if(!a._started){a.start()}else{a.update()}};this.init=function(){a.isInit=true;a.userWidget.registerEventListener("user_awake",a.userIsAwakeEvent);a.userWidget.registerEventListener("user_die",a.userDieEvent);a.userWidget.registerEventListener("user_stats_updated",a.userStatsUpdated);a.registerEventListener("progressUpdate",function(c){if(a.$progressBar&&a.$progressBar.size()>0){a.$progressBar.css("width",c+"%")}});a.registerEventListener("progressNewLevel",function(c){a.$levelValue.html(a.App.i18n.writeNumber(a.App.user.progress_level))});a.registerEventListener("statsFirst",function(c){a.$levelValue.html(a.App.i18n.writeNumber(a.App.user.progress_level))})};this.ready=function(){};b.registerEventListener("ready",a.ready);this.init()}function UserWidgetEconomy(l){var p=this;this.App=l.App;this.userWidget=l;var y=250;var o=1000;var c=4000;var B=4000;var A=10000;var t=10000;var k=20000;var u=20000;var h=100;var s=200;var z=0;var C=0;var n=false;var e=false;var i="#user-widget-economy a";var x="#user-widget-economy .alert-gems";var w="#user-widget-economy .alert-minicoins";var g=false;var f=false;var b=false;var r=false;var d=false;var v=function(){f.fadeOut(function(){f.removeClass("shown");f.removeClass("large-amount");
f.find(".earned-gems").data("value",0).html(p.App.i18n.writeNumber(0));r=false})};var j=function(){g.removeClass("recent")};var m=function(){f.show(0,function(){f.addClass("shown")})};this.displayGems=function(){if(!d){if(r){if(n){clearTimeout(n)}n=setTimeout(p.displayGems,2000);return}if(z>0){var E=z;z=0;r=true;if(!f){return}if(!g){return}var F=c,D=B;g.addClass("recent");if(E>o){f.find(".earned-gems").addClass("large-amount");F=k;D=u}else{if(E>y){f.find(".earned-gems").addClass("large-amount");F=A;D=t}}f.find(".earned-gems").attr("data-value",E).html("+"+p.App.i18n.writeNumber(E));m();setTimeout(v,F);setTimeout(j,D)}}};this.onEarnedGems=function(D){D=parseInt(D);z+=D;if(n){clearTimeout(n)}n=setTimeout(p.displayGems,500);if(!g){g=$(i)}if(!f){f=$(x)}};var a=function(){b.fadeOut(function(){b.removeClass("shown")});d=false;b.removeClass("large-amount");b.find(".earned-minicoins").data("value",0).html(p.App.i18n.writeNumber(0))};var q=function(){b.show(0,function(){b.addClass("shown")})};this.displayMinicoins=function(){if(r){setTimeout(v,1000);setTimeout(j,1000);e=setTimeout(p.displayMinicoins,2000);return}if(d){if(e){clearTimeout(e)}e=setTimeout(p.displayMinicoins,2000);return}if(C>0){var D=C;C=0;d=true;if(!b){return}if(!g){return}g.addClass("recent");b.find(".earned-minicoins").addClass("large-amount").attr("data-value",D).html("+"+p.App.i18n.writeNumber(D));b.fadeIn(h,function(){});q();setTimeout(a,k);setTimeout(j,u)}};this.onEarnedMinicoins=function(D){D=parseInt(D);C+=D;if(e){clearTimeout(e)}e=setTimeout(p.displayMinicoins,500);if(!g){g=$(i)}if(!b){b=$(w)}};this.ready=function(){l.getObjects().widget.find("#dd-header-economy").on("show",function(D){D.stopPropagation();App.trackAnalyticsEvent(["_trackEvent","UserWidgetV2","EconomyClick-Open"])});l.getObjects().widget.find("#buyCoinsFromHelpAnchor").on("click",function(D){D.stopPropagation();D.preventDefault();App.trackAnalyticsEvent(["_trackEvent","UserWidgetV2","EconomyClick-Buy"]);App.userPurchase.showPurchaseModalFlow("purse")
})};this.init=function(){l.registerEventListener("earned_gems",p.onEarnedGems);l.registerEventListener("earned_minicoins",p.onEarnedMinicoins)};l.registerEventListener("ready",p.ready);p.init()}function UserWidgetRanking(l){var k=this;this.App=l.App;this.userWidget=l;var b=null;var i=null;var c=false;var g=false;var j=false;var e=false;var a=function(){if(j){return}j=true;$.ajax({url:k.userWidget.getOptions().serviceUrl,data:{scope:"position",user:k.App.user.user_id},success:function(m){if(m&&m.hasOwnProperty("status")&&m.status.success&&m.hasOwnProperty("data")&&m.data.hasOwnProperty("results")){if(m.data.results.positionStatus!=0){c.find("[data-var=earned-trend-value]").attr("value",m.data.results.position).html(m.data.results.positionStatusAbbreviated);if(m.data.results.positionStatus>0){c.addClass("shown").addClass("up")}else{c.addClass("shown").addClass("down")}}}}})};var f=function(){App.trackAnalyticsEvent(["_trackEvent","UserWidgetV2","tab-rankings-open"]);e=true;$.ajax({url:k.userWidget.getOptions().serviceUrl,data:{scope:"ranking",user:k.App.user.user_id,numUsersAfter:3,numUsersBefore:3,withGraph:1,graphDays:30,graphHeight:60,type:"user-widget"},success:function(m){if(m&&m.hasOwnProperty("status")&&m.status.success&&m.hasOwnProperty("data")&&m.data.hasOwnProperty("results")){g.find(".user-rankings").html(m.data.results.html)}}})};var h=function(){e=false;g.find(".user-rankings").html("")};var d=function(){if(l.firstOpen){b=l.getObjects();i=l.getSelectors();c=b.widget.find(i.userRankings.trendSelector);g=b.widget.find(i.userRankings.rankingsSelector);g.on("show",f);g.on("hide",h)}if(g.attr("data-tab-visible")==1){f()}setTimeout(a,1000)};l.registerEventListener("open",d);l.registerEventListener("close",h)}function UserWidgetFeed(o){var m=this;this.App=o.App;this.userWidget=o;var g=null;var k=null;var a=false;var d=false;var f=false;var b=0;var i=null;var l=null;var c=0;var e=false;var j=function(){f=false;d.html("");b=0;i=null;l=null;e=false};var n=function(){if(!f){App.trackAnalyticsEvent(["_trackEvent","UserWidgetV2","tab-feed-open"])
}d.append("<li id='social-loading'><ul class='loader-spinner'><li></li><li></li><li></li></ul></li>");setTimeout(function(){$.ajax({url:m.App.url.ajaxhtml+"profile/"+m.App.user.uid+"/socialactivity/",data:{user:m.App.user.user_id,startTimestamp:l,lastTimePeriod:encodeURIComponent(e),count:b},success:function(p){f=true;d.find(".show-more").remove();d.find("#social-loading").remove();d.append(p);b++}})},100)};var h=function(){if(o.firstOpen||!a){g=o.getObjects();k=o.getSelectors();a=g.widget.find(k.userFeed.paneSelector);d=a.find(k.userFeed.userFeedSelector);a.on("show",n);a.on("hide",j);a.on("click","#social-viewmore",function(){if(!$(this).attr("disabled")==true){$(this).attr("disabled",true).addClass("disabled");n()}return false});d.on("mousewheel DOMMouseScroll",function(p){p.stopPropagation()})}if(a.attr("data-tab-visible")==1){n()}};this.setLast=function(q,p){l=q;e=p};this.bindScrollLoader=function(p){m.App.navigation.helpers.scrollLoader.add(g.widget.find("#"+p),a.find(".user-feed"),function(){g.widget.find("#"+p).remove();n()},-400)};this.load=function(){n()};o.registerEventListener("open",h);o.registerEventListener("close",j)}function UserWidgetFeedOld(b){var a=this;this.App=b.App;this.userWidget=b;var f=false;var c="#user-widget-alerts a";var e=false;var d=this;this.isReady=false;this._domObject=null;this._scrollableObject=null;this._urlAjax=null;this._urlAjaxDetail=null;this._itemsPerPage=20;this._loadCounter=1;this._lastTimestamp=0;this._lastTimePeriod="";this.ready=function(j,g,i,h){e=true;this._domObject=$("#"+j);if(!this._domObject){return false}this._lastTimestamp=0;this._loadCounter=1;this._lastTimePeriod="";this._urlAjax=g;this._urlAjaxDetail=i;this._itemsPerPage=h;this.isReady=true;this._domObject.html("");this._scrollableObject=this._domObject.parent(".js-scrollable");this.load()};this._onMouseWheelDown=function(g){};this._onMouseWheelUp=function(g){};this._onScroll=function(){};this.close=function(){if(!this.isReady){return}e=false;this._domObject.html("")
};this.load=function(){if(!d._ready||!d._domObject){return}d._domObject.find("li.show-more").remove();d._domObject.append("<li class='lt-loader'><ul class='loader-spinner ls-dark'><li></li><li></li><li></li></ul></li>");$.ajax({url:d._urlAjax+"?count="+d._loadCounter+"&startTimestamp="+d._lastTimestamp+"&limit="+d._itemsPerPage+"&lastTimePeriod="+encodeURIComponent(d._lastTimePeriod),success:function(g){if(!d||typeof d=="undefined"||typeof d._domObject=="undefined"){return}d._loadCounter++;d._domObject.append(g)},error:function(g){d._domObject.append("<li class='activity-item intext end'><span class='icon icon-cross i-soft'></span>Unable to load activity :(</li>")},complete:function(){d._domObject.find(".lt-loader").remove();if(d._loadCounter===2){var g=d._domObject.find("li.activity-item:first").data("timestamp");a.disableNewNotifications(parseInt(g)+1)}}})};this._loadExpanderContent=function(h){var g=h.find(".inner");g.html("<div class='loading'></div>");$.ajax({url:d._urlAjaxDetail+"?timestamp="+h.data("timestamp")+"&owner="+h.data("owner")+"&domid="+h.attr("id"),success:function(i){g.append(i)},error:function(i){g.append("Unable to load activity detail :(")},complete:function(){d._domObject.find(".loading").remove()}})};this._unloadExpanderContent=function(h){var g=h.find(".inner").first();g.html("")};this.setLast=function(g,h){d._lastTimestamp=g;d._lastTimePeriod=h};this.checkLastFeedNotification=function(){var h=a.App.user;var i=h.last_feed_notification;var g=h.last_feed_notification_read;if(parseInt(g||0)<parseInt(i||0)){a.enableNewNotifications()}else{a.disableNewNotifications(i)}};this.enableNewNotifications=function(){if(f){return}f=true;$(c).addClass("recent")};this.disableNewNotifications=function(g){f=false;$(c).removeClass("recent");if(typeof g=="undefined"){return}a.App.user.last_feed_notification_read=g};this.init=function(){a.App.user.registerEventListener("statsUpdated",a.checkLastFeedNotification)};this.ready=function(){};b.registerEventListener("ready",a.ready);
this.init()};