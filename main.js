/*
 AngularJS v1.2.21
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,W,s){'use strict';function y(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.21/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function eb(b){if(null==b||Fa(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:z(b)||I(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(C(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(I(b)||eb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function fb(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function F(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});ac(b,a);return b}function Z(b){return parseInt(b,
10)}function bc(b,a){return F(new (F(function(){},{prototype:b})),a)}function D(){}function Ga(b){return b}function $(b){return function(){return b}}function v(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function S(b){return null!=b&&"object"===typeof b}function z(b){return"string"===typeof b}function Ab(b){return"number"===typeof b}function sa(b){return"[object Date]"===ya.call(b)}function C(b){return"function"===typeof b}function gb(b){return"[object RegExp]"===ya.call(b)}
function Fa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Pa(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Qa(b,a){var c=Pa(b,a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Fa(b)||b&&b.$evalAsync&&b.$watch)throw Ra("cpws");if(a){if(b===a)throw Ra("cpi");c=c||[];
d=d||[];if(S(b)){var e=Pa(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(I(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;q(a,function(b,c){delete a[c]});for(f in b)e=Ha(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;ac(a,g)}}else if(a=b)I(b)?a=Ha(b,[],c,d):sa(b)?a=new Date(b.getTime()):gb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):S(b)&&(a=Ha(b,{},c,d));return a}function ga(b,
a){if(I(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(S(b))for(c in a=a||{},b)!hb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function za(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(I(b)){if(!I(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!za(b[d],a[d]))return!1;return!0}}else{if(sa(b))return sa(a)&&b.getTime()==a.getTime();if(gb(b)&&gb(a))return b.toString()==a.toString();
if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Fa(b)||Fa(a)||I(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!C(b[d])){if(!za(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!C(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?Aa.call(arguments,2):[];return!C(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Aa.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?
a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:Fa(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function ta(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Wc,a?"  ":null)}function cc(b){return z(b)?JSON.parse(b):b}function Sa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=x(b).clone();try{b.empty()}catch(a){}var c=
x("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=dc(c[0]),B(d)&&(b=B(c[1])?dc(c[1]):!0,hb.call(a,d)?I(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=[];q(b,function(b,d){I(b)?q(b,function(b){a.push(Ba(d,
!0)+(!0===b?"":"="+Ba(b,!0)))}):a.push(Ba(d,!0)+(!0===b?"":"="+Ba(b,!0)))});return a.length?a.join("&"):""}function ib(b){return Ba(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ba(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
q(g,function(a){g[a]=!0;c(W.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function fc(b,a){var c=function(){b=x(b);if(b.injector()){var c=b[0]===W?"document":ha(b);throw Ra("btstrpd",c);}a=a||[];a.unshift(["$provide",
function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=gc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");Ta.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function jb(b,a){a=a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Ra("areq",
a||"?",c||"required");return b}function Ua(b,a,c){c&&I(b)&&(b=b[b.length-1]);Db(C(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ca(b,a){if("hasOwnProperty"===b)throw Ra("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&C(b)?Bb(e,b):b}function Eb(b){var a=b[0];b=b[b.length-1];if(a===b)return x(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==
b);return x(c)}function Zc(b){var a=y("$injector"),c=y("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||y;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return p}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),p={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide",
"provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return p}())}}())}function $c(b){F(b,{bootstrap:fc,copy:Ha,extend:F,equals:za,element:x,forEach:q,injector:gc,noop:D,bind:Bb,
toJson:ta,fromJson:cc,identity:Ga,isUndefined:v,isDefined:B,isString:z,isFunction:C,isObject:S,isNumber:Ab,isElement:Uc,isArray:I,version:ad,isDate:sa,lowercase:K,uppercase:Ia,callbacks:{counter:0},$$minErr:y,$$csp:Va});Wa=Zc(P);try{Wa("ngLocale")}catch(a){Wa("ngLocale",[]).provider("$locale",bd)}Wa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",ic).directive({a:dd,input:jc,textarea:jc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,
ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:kc,ngRequired:kc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Fb).directive(lc);a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,
$exceptionHandler:Rd,$filter:mc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function Xa(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,h,l,p,n,r,t;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,p=h.length;l<p;l++)for(n=
x(h[l]),m?n.triggerHandler("$destroy"):m=!m,r=0,n=(t=n.children()).length;r<n;r++)e.push(Da(t[r]));return f.apply(this,arguments)}var f=Da.fn[b],f=f.$original||f;e.$original=f;Da.fn[b]=e}function R(b){if(b instanceof R)return b;z(b)&&(b=aa(b));if(!(this instanceof R)){if(z(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new R(b)}if(z(b)){var a=b;b=W;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));
e=(le.exec(a)||["",""])[1].toLowerCase();e=ba[e]||ba._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);x(W.createDocumentFragment()).append(this)}else Jb(this,b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){Lb(b);var a=0;for(b=b.childNodes||
[];a<b.length;a++)Ja(b[a])}function nc(b,a,c,d){if(B(d))throw Hb("offargs");var e=la(b,"events");la(b,"handle")&&(v(a)?q(e,function(a,c){Ya(b,c,a);delete e[c]}):q(a.split(" "),function(a){v(c)?(Ya(b,a,e[a]),delete e[a]):Qa(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=Za[c];d&&(a?delete Za[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),nc(b)),delete Za[c],b.ng339=s))}function la(b,a,c){var d=b.ng339,d=Za[d||-1];if(B(c))d||(b.ng339=d=++ne,d=Za[d]={}),d[a]=c;else return d&&d[a]}
function Mb(b,a,c){var d=la(b,"data"),e=B(c),f=!e&&B(a),g=f&&!S(a);d||g||la(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];F(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function kb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function lb(b,a){if(a&&b.setAttribute){var c=
(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Jb(b,a){if(a){a=a.nodeName||!B(a.length)||Fa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return mb(b,"$"+(a||"ngController")+"Controller")}function mb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=I(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=x.data(b,a[d]))!==s)return c;b=b.parentNode||11===
b.nodeType&&b.host}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=nb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||W);if(v(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=
!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ga(a[e||c.type]||[]);q(g,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ka(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=b.$$hashKey)?d=b.$$hashKey():d===s&&(d=b.$$hashKey=(a||fb)()):
d=b;return c+":"+d}function $a(b,a){if(a){var c=0;this.nextUid=function(){return++c}}q(b,this.put,this)}function sc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),q(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):I(b)?(c=b.length-1,Ua(b[c],"fn"),a=b.slice(0,c)):Ua(b,"fn",!0);return a}function gc(b){function a(a){return function(b,c){if(S(b))q(b,$b(a));else return a(b,c)}}function c(a,b){Ca(a,"service");
if(C(b)||I(b))b=p.instantiate(b);if(!b.$get)throw ab("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,k;q(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(z(a))for(c=Wa(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,k=d.length;f<k;f++){var g=d[f],m=p.get(g[0]);m[g[1]].apply(m,g[2])}else C(a)?b.push(p.invoke(a)):I(a)?b.push(p.invoke(a)):Ua(a,"module")}catch(l){throw I(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&
(l=l.message+"\n"+l.stack),ab("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw ab("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],k=sc(a),g,m,h;m=0;for(g=k.length;m<g;m++){h=k[m];if("string"!==typeof h)throw ab("itkn",h);f.push(e&&e.hasOwnProperty(h)?e[h]:c(h))}I(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,
instantiate:function(a,b){var c=function(){},e;c.prototype=(I(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return S(e)||C(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var g={},k="Provider",m=[],h=new $a([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){Ca(a,"constant");l[a]=b;n[a]=b}),decorator:function(a,
b){var c=p.get(a+k),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},p=l.$injector=f(l,function(){throw ab("unpr",m.join(" <- "));}),n={},r=n.$injector=f(n,function(a){a=p.get(a+k);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||D)});return r}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}
function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,Aa.call(arguments,1))}finally{if(t--,0===t)for(;L.length;)try{L.pop()()}catch(b){c.error(b)}}}
function f(a,b){(function ca(){q(w,function(a){a()});u=b(ca,a)})()}function g(){A=null;M!=k.url()&&(M=k.url(),q(da,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,p=b.setTimeout,n=b.clearTimeout,r={};k.isMock=!1;var t=0,L=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){t++};k.notifyWhenNoOutstandingRequests=function(a){q(w,function(a){a()});0===t?a():L.push(a)};var w=[],u;k.addPollFn=function(a){v(u)&&f(100,p);w.push(a);return a};var M=h.href,X=a.find("base"),
A=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(M!=a)return M=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),X.attr("href",X.attr("href"))):(A=a,c?h.replace(a):h.href=a),k}else return A||h.href.replace(/%27/g,"'")};var da=[],J=!1;k.onUrlChange=function(a){if(!J){if(d.history)x(b).on("popstate",g);if(d.hashchange)x(b).on("hashchange",g);else k.addPollFn(g);J=!0}da.push(a);return a};k.baseHref=function(){var a=X.attr("href");return a?
a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var T={},ea="",O=k.baseHref();k.cookies=function(a,b){var d,e,f,k;if(a)b===s?m.cookie=escape(a)+"=;path="+O+";expires=Thu, 01 Jan 1970 00:00:00 GMT":z(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+O).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==ea)for(ea=m.cookie,d=ea.split("; "),T={},f=0;f<d.length;f++)e=d[f],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,
k)),T[a]===s&&(T[a]=unescape(e.substring(k+1))));return T}};k.defer=function(a,b){var c;t++;c=p(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],n(a),e(D),!0):!1}}function Nd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=p&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in
a)throw y("$cacheFactory")("iid",b);var g=0,k=F({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},p=null,n=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!v(b))return a in m||g++,m[a]=b,g>h&&this.remove(n.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;b==p&&(p=b.p);b==n&&(n=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m=
{};g=0;l={};p=n=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return F({},k,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Ca(a,"directive");z(a)?
(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);C(g)?g={compile:$(g)}:!g.compile&&g.link&&(g.compile=$(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,$b(m));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),
this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,p,n,r,t,L,w,u,M,X){function A(a,b,c,d,e){a instanceof x||(a=x(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=x(b).wrap("<span></span>").parent()[0])});
var f=J(a,b,a,c,d,e);da(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?La.clone.call(a):a;q(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var m=g.length;d<m;d++){var h=g[d].nodeType;1!==h&&9!==h||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function da(a,b){try{a.addClass(b)}catch(c){}}function J(a,b,c,d,e,f){function g(a,c,d,e){var f,h,l,r,p,n,t;f=c.length;var w=Array(f);for(r=0;r<f;r++)w[r]=c[r];n=r=0;for(p=m.length;r<p;n++)h=w[n],c=m[r++],f=m[r++],c?(c.scope?
(l=a.$new(),x.data(h,"$scope",l)):l=a,t=c.transcludeOnThisElement?T(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?T(a,b):null,c(f,l,h,d,t)):f&&f(a,h.childNodes,s,e)}for(var m=[],h,l,r,p,n=0;n<a.length;n++)h=new Ob,l=ea(a[n],[],h,0===n?d:s,e),(f=l.length?H(l,a[n],h,b,c,null,[],[],f):null)&&f.scope&&da(h.$$element,"ng-scope"),h=f&&f.terminal||!(r=a[n].childNodes)||!r.length?null:J(r,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),m.push(f,h),p=p||f||h,f=null;return p?
g:null}function T(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function ea(a,b,c,d,g){var h=c.$attr,m;switch(a.nodeType){case 1:ca(b,ma(Ma(a).toLowerCase()),"E",d,g);for(var l,r,p,n=a.attributes,t=0,w=n&&n.length;t<w;t++){var L=!1,M=!1;l=n[t];if(!Q||8<=Q||l.specified){m=l.name;r=aa(l.value);l=ma(m);if(p=V.test(l))m=jb(l.substr(6),"-");var u=l.replace(/(Start|End)$/,"");l===u+"Start"&&(L=m,M=m.substr(0,
m.length-5)+"end",m=m.substr(0,m.length-6));l=ma(m.toLowerCase());h[l]=m;if(p||!c.hasOwnProperty(l))c[l]=r,qc(a,l)&&(c[l]=!0);P(a,b,r,l);ca(b,l,"A",d,g,L,M)}}a=a.className;if(z(a)&&""!==a)for(;m=f.exec(a);)l=ma(m[2]),ca(b,l,"C",d,g)&&(c[l]=aa(m[3])),a=a.substr(m.index+m[0].length);break;case 3:y(b,a.nodeValue);break;case 8:try{if(m=e.exec(a.nodeValue))l=ma(m[1]),ca(b,l,"M",d,g)&&(c[l]=aa(m[2]))}catch(A){}}b.sort(v);return b}function O(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",
b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function E(a,b,c){return function(d,e,f,g,m){e=O(e[0],b,c);return a(d,e,f,g,m)}}function H(a,c,d,e,f,g,m,p,n){function w(a,b,c,d){if(a){c&&(a=E(a,c,d));a.require=G.require;a.directiveName=na;if(J===G||G.$$isolateScope)a=tc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=E(b,c,d));b.require=G.require;b.directiveName=na;if(J===G||G.$$isolateScope)b=tc(b,{isolateScope:!0});p.push(b)}}
function L(a,b,c,d){var e,f="data",g=!1;if(z(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);}else I(b)&&(e=[],q(b,function(b){e.push(L(a,b,c,d))}));return e}function M(a,e,f,g,n){function w(a,b){var c;2>arguments.length&&(b=a,a=s);Ea&&(c=ea);return n(a,b,c)}var u,N,A,E,T,O,ea={},pb;u=c===f?d:ga(d,new Ob(x(f),d.$attr));N=u.$$element;if(J){var ca=/^\s*([@=&])(\??)\s*(\w*)\s*$/;
O=e.$new(!0);!H||H!==J&&H!==J.$$originalDirective?N.data("$isolateScopeNoTemplate",O):N.data("$isolateScope",O);da(N,"ng-isolate-scope");q(J.scope,function(a,c){var d=a.match(ca)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,p,n;O.$$isolateBindings[c]=d+f;switch(d){case "@":u.$observe(f,function(a){O[c]=a});u.$$observers[f].$$scope=e;u[f]&&(O[c]=b(u[f])(e));break;case "=":if(g&&!u[f])break;l=r(u[f]);n=l.literal?za:function(a,b){return a===b};p=l.assign||function(){m=O[c]=l(e);throw ia("nonassign",u[f],J.name);
};m=O[c]=l(e);O.$watch(function(){var a=l(e);n(a,O[c])||(n(a,m)?p(e,a=O[c]):O[c]=a);return m=a},null,l.literal);break;case "&":l=r(u[f]);O[c]=function(a){return l(e,a)};break;default:throw ia("iscp",J.name,c,a);}})}pb=n&&w;X&&q(X,function(a){var b={$scope:a===J||a.$$isolateScope?O:e,$element:N,$attrs:u,$transclude:pb},c;T=a.controller;"@"==T&&(T=u[a.name]);c=t(T,b);ea[a.name]=c;Ea||N.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(A=m.length;g<A;g++)try{E=m[g],
E(E.isolateScope?O:e,N,u,E.require&&L(E.directiveName,E.require,N,ea),pb)}catch(ob){l(ob,ha(N))}g=e;J&&(J.template||null===J.templateUrl)&&(g=O);a&&a(g,f.childNodes,s,n);for(g=p.length-1;0<=g;g--)try{E=p[g],E(E.isolateScope?O:e,N,u,E.require&&L(E.directiveName,E.require,N,ea),pb)}catch(G){l(G,ha(N))}}n=n||{};for(var u=-Number.MAX_VALUE,T,X=n.controllerDirectives,J=n.newIsolateScopeDirective,H=n.templateDirective,ca=n.nonTlbTranscludeDirective,v=!1,F=!1,Ea=n.hasElementTranscludeDirective,y=d.$$element=
x(c),G,na,U,R=e,Q,P=0,oa=a.length;P<oa;P++){G=a[P];var V=G.$$start,Y=G.$$end;V&&(y=O(c,V,Y));U=s;if(u>G.priority)break;if(U=G.scope)T=T||G,G.templateUrl||(K("new/isolated scope",J,G,y),S(U)&&(J=G));na=G.name;!G.templateUrl&&G.controller&&(U=G.controller,X=X||{},K("'"+na+"' controller",X[na],G,y),X[na]=G);if(U=G.transclude)v=!0,G.$$tlb||(K("transclusion",ca,G,y),ca=G),"element"==U?(Ea=!0,u=G.priority,U=y,y=d.$$element=x(W.createComment(" "+na+": "+d[na]+" ")),c=y[0],qb(f,Aa.call(U,0),c),R=A(U,e,u,
g&&g.name,{nonTlbTranscludeDirective:ca})):(U=x(Kb(c)).contents(),y.empty(),R=A(U,e));if(G.template)if(F=!0,K("template",H,G,y),H=G,U=C(G.template)?G.template(y,d):G.template,U=Z(U),G.replace){g=G;U=Ib.test(U)?x(aa(U)):[];c=U[0];if(1!=U.length||1!==c.nodeType)throw ia("tplrt",na,"");qb(f,y,c);oa={$attr:{}};U=ea(c,[],oa);var $=a.splice(P+1,a.length-(P+1));J&&ob(U);a=a.concat(U).concat($);B(d,oa);oa=a.length}else y.html(U);if(G.templateUrl)F=!0,K("template",H,G,y),H=G,G.replace&&(g=G),M=D(a.splice(P,
a.length-P),y,d,f,v&&R,m,p,{controllerDirectives:X,newIsolateScopeDirective:J,templateDirective:H,nonTlbTranscludeDirective:ca}),oa=a.length;else if(G.compile)try{Q=G.compile(y,d,R),C(Q)?w(null,Q,V,Y):Q&&w(Q.pre,Q.post,V,Y)}catch(ba){l(ba,ha(y))}G.terminal&&(M.terminal=!0,u=Math.max(u,G.priority))}M.scope=T&&!0===T.scope;M.transcludeOnThisElement=v;M.templateOnThisElement=F;M.transclude=R;n.hasElementTranscludeDirective=Ea;return M}function ob(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}
function ca(b,e,f,g,h,r,p){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var n;e=a.get(e+d);for(var t=0,w=e.length;t<w;t++)try{n=e[t],(g===s||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(r&&(n=bc(n,{$$start:r,$$end:p})),b.push(n),h=n)}catch(L){l(L)}}return h}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(da(e,b),a["class"]=(a["class"]?a["class"]+" ":
"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function D(a,b,c,d,e,f,g,m){var h=[],l,r,t=b[0],w=a.shift(),L=F({},w,{templateUrl:null,transclude:null,replace:null,$$originalDirective:w}),M=C(w.templateUrl)?w.templateUrl(b,c):w.templateUrl;b.empty();p.get(u.getTrustedResourceUrl(M),{cache:n}).success(function(p){var n,u;p=Z(p);if(w.replace){p=Ib.test(p)?x(aa(p)):[];n=p[0];if(1!=p.length||1!==n.nodeType)throw ia("tplrt",
w.name,M);p={$attr:{}};qb(d,b,n);var A=ea(n,[],p);S(w.scope)&&ob(A);a=A.concat(a);B(c,p)}else n=t,b.html(p);a.unshift(L);l=H(a,n,c,e,b,w,f,g,m);q(d,function(a,c){a==n&&(d[c]=b[0])});for(r=J(b[0].childNodes,e);h.length;){p=h.shift();u=h.shift();var E=h.shift(),X=h.shift(),A=b[0];if(u!==t){var O=u.className;m.hasElementTranscludeDirective&&w.replace||(A=Kb(n));qb(E,x(u),A);da(x(A),O)}u=l.transcludeOnThisElement?T(p,l.transclude,X):X;l(r,p,A,d,u)}h=null}).error(function(a,b,c,d){throw ia("tpload",d.url);
});return function(a,b,c,d,e){a=e;h?(h.push(b),h.push(c),h.push(d),h.push(a)):(l.transcludeOnThisElement&&(a=T(b,l.transclude,e)),l(r,b,c,d,a))}}function v(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function K(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ha(d));}function y(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&da(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||
[];f.push(d);e.data("$binding",f);b||da(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function R(a,b){if("srcdoc"==b)return u.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function P(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ma(a))throw ia("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ia("nodomevents");if(f=
b(m[e],!0,R(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function qb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var h=a.length;g<h;g++,m++)m<h?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);c[x.expando]=d[x.expando];d=1;for(e=b.length;d<e;d++)f=
b[d],x(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function tc(a,b){return F(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&M.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&M.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?M.removeClass(this.$$element,d):0===d.length?M.addClass(this.$$element,c):
M.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=jb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=X(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),
e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Ea=b.startSymbol(),oa=b.endSymbol(),Z="{{"==Ea||"}}"==oa?Ga:function(a){return a.replace(/\{\{/g,Ea).replace(/}}/g,oa)},V=/^ngAttr[A-Z]/;return A}]}function ma(b){return Xa(b.replace(ue,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;
this.register=function(a,d){Ca(a,"controller");S(a)?F(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,k,m;z(e)&&(g=e.match(a),k=g[1],m=g[3],e=b.hasOwnProperty(k)?b[k]:hc(f.$scope,k,!0)||hc(d,k,!0),Ua(e,k,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!==typeof f.$scope)throw y("$controller")("noscp",k||e.name,m);f.$scope[m]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return x(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,
c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=K(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function wc(b){var a=S(b)?b:s;return function(c){a||(a=vc(b));return c?a[K(c)]||null:a}}function xc(b,a,c){if(C(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults=
{transformResponse:[function(d){z(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return S(a)&&"[object File]"!==ya.call(a)&&"[object Blob]"!==ya.call(a)?ta(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ga(d),put:ga(d),patch:ga(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",
function(a,b,c,d,p,n){function r(a){function b(a){var d=F({},a,{data:xc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:p.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=F({},a.headers),d,f,b=F({},b.common,b[K(a.method)]);a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;q(a,function(c,d){C(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);
F(c,a);c.headers=d;c.method=Ia(c.method);var f=[function(a){d=a.headers;var c=xc(a.data,wc(d),a.transformRequest);v(c)&&q(d,function(a,b){"content-type"===K(b)&&delete d[b]});v(a.withCredentials)&&!v(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],g=p.when(c);for(q(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var m=f.shift(),g=g.then(a,
m)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function t(c,f,g){function h(a,b,c,e){E&&(200<=a&&300>a?E.put(x,[a,b,vc(c),e]):E.remove(x));n(b,a,c,e);d.$$phase||d.$apply()}function n(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?u.resolve:u.reject)({data:a,status:b,headers:wc(d),config:c,statusText:e})}function t(){var a=Pa(r.pendingRequests,c);-1!==a&&r.pendingRequests.splice(a,
1)}var u=p.defer(),q=u.promise,E,H,x=L(c.url,c.params);r.pendingRequests.push(c);q.then(t,t);(c.cache||e.cache)&&(!1!==c.cache&&"GET"==c.method)&&(E=S(c.cache)?c.cache:S(e.cache)?e.cache:w);if(E)if(H=E.get(x),B(H)){if(H&&C(H.then))return H.then(t,t),H;I(H)?n(H[1],H[0],ga(H[2]),H[3]):n(H,200,{},"OK")}else E.put(x,q);v(H)&&((H=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,x,f,h,g,c.timeout,c.withCredentials,c.responseType));return q}
function L(a,b){if(!b)return a;var c=[];Tc(b,function(a,b){null===a||v(a)||(I(a)||(a=[a]),q(a,function(a){S(a)&&(sa(a)?a=a.toISOString():S(a)&&(a=ta(a)));c.push(Ba(b)+"="+Ba(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),u=[];q(f,function(a){u.unshift(z(a)?n.get(a):n.invoke(a))});q(g,function(a,b){var c=z(a)?n.get(a):n.invoke(a);u.splice(b,0,{response:function(a){return c(p.when(a))},responseError:function(a){return c(p.reject(a))}})});r.pendingRequests=
[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(F(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(F(d||{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ve(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw y("$httpBackend")("noxhr");}function Vd(){this.$get=
["$browser","$window","$document",function(b,a,c){return we(b,ve,b.defer,a.angular.callbacks,c[0])}]}function we(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){Ya(f,"load",g);Ya(f,"error",g);e.body.removeChild(f);f=null;var k=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,k="error"===a.type?404:200);c&&c(k,t)};rb(f,"load",g);rb(f,"error",g);8>=Q&&(f.onreadystatechange=function(){z(f.readyState)&&
/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,h,l,p,n,r,t){function L(){u=g;X&&X();A&&A.abort()}function w(a,d,e,f,g){J&&c.cancel(J);X=A=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(D)}var u;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==K(e)){var M="_"+(d.counter++).toString(36);d[M]=function(a){d[M].data=a;d[M].called=!0};
var X=f(m.replace("JSON_CALLBACK","angular.callbacks."+M),M,function(a,b){w(l,a,d[M].data,"",b);d[M]=D})}else{var A=a(e);A.open(e,m,!0);q(p,function(a,b){B(a)&&A.setRequestHeader(b,a)});A.onreadystatechange=function(){if(A&&4==A.readyState){var a=null,b=null,c="";u!==g&&(a=A.getAllResponseHeaders(),b="response"in A?A.response:A.responseText);u===g&&10>Q||(c=A.statusText);w(l,u||A.status,b,a,c)}};r&&(A.withCredentials=!0);if(t)try{A.responseType=t}catch(da){if("json"!==t)throw da;}A.send(h||null)}if(0<
n)var J=c(L,n);else n&&C(n.then)&&n.then(L)}}function Sd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,h,l){for(var p,n,r=0,t=[],L=f.length,w=!1,u=[];r<L;)-1!=(p=f.indexOf(b,r))&&-1!=(n=f.indexOf(a,p+g))?(r!=p&&t.push(f.substring(r,p)),t.push(r=c(w=f.substring(p+g,n))),r.exp=w,r=n+k,w=!0):(r!=L&&t.push(f.substring(r)),r=L);(L=t.length)||(t.push(""),
L=1);if(l&&1<t.length)throw yc("noconcat",f);if(!h||w)return u.length=L,r=function(a){try{for(var b=0,c=L,g;b<c;b++){if("function"==typeof(g=t[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=ta(g)}u[b]=g}return u.join("")}catch(k){a=yc("interr",f,k.toString()),d(a)}},r.exp=f,r.parts=t,r}var g=b.length,k=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=
["$rootScope","$window","$q",function(b,a,c){function d(d,g,k,m){var h=a.setInterval,l=a.clearInterval,p=c.defer(),n=p.promise,r=0,t=B(m)&&!m;k=B(k)?k:0;n.then(null,null,d);n.$$intervalId=h(function(){p.notify(r++);0<k&&r>=k&&(p.resolve(r),l(n.$$intervalId),delete e[n.$$intervalId]);t||b.$apply()},g);e[n.$$intervalId]=p;return n}var e={};d.cancel=function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}
function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ib(b[a]);return b.join("/")}function zc(b,a,c){b=ua(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Z(b.port)||xe[b.protocol]||null}function Ac(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function pa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function bb(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,
bb(b).lastIndexOf("/")+1)}function Bc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);zc(b,this,b);this.$$parse=function(a){var e=pa(c,a);if(!z(e))throw Sb("ipthprfx",a,c);Ac(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=pa(b,d))!==s)return d=e,(e=pa(a,e))!==s?c+(pa("/",e)||e):b+d;if((e=pa(c,
d))!==s)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);zc(b,this,b);this.$$parse=function(d){var e=pa(b,d)||pa(c,d),e="#"==e.charAt(0)?pa(a,e):this.$$html5?e:"";if(!z(e))throw Sb("ihshprfx",d,a);Ac(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(bb(b)==bb(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==bb(d))return d;if(e=pa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function sb(b){return function(){return this[b]}}function Cc(b,a){return function(c){if(v(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),p;a?(p=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Bc:Ub):(p=bb(l),m=Tb);k=new m(p,"#"+b);k.$$parse(k.$$rewrite(l));f.on("click",
function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=x(a.target);"a"!==K(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");S(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);if(m===Ub){var h=e.attr("href")||e.attr("xlink:href");if(0>h.indexOf("://"))if(g="#"+b,"/"==h[0])g=p+g+h;else if("#"==h[0])g=p+g+(k.path()||"/")+h;else{for(var l=k.path().split("/"),h=h.split("/"),n=0;n<h.length;n++)"."!=h[n]&&(".."==h[n]?l.pop():h[n].length&&l.push(h[n]));
g=p+g+l.join("/")}}l=k.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(k.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url(),b=k.$$replace;n&&a==k.absUrl()||
(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),g(a))}));k.$$replace=!1;return n});return k}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=
c.console||{},e=b[a]||b.log||D;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function qa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ja("isecfld",a);return b}function Na(b,
a){if(b){if(b.constructor===b)throw ja("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw ja("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ja("isecdom",a);if(b===Object)throw ja("isecobj",a);}return b}function tb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=qa(a.shift(),d);var k=b[f];k||(k={},b[f]=k);b=k;b.then&&e.unwrapPromises&&(va(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=qa(a.shift(),
d);Na(b,d);Na(b[f],d);return b[f]=c}function Dc(b,a,c,d,e,f,g){qa(b,f);qa(a,f);qa(c,f);qa(d,f);qa(e,f);return g.unwrapPromises?function(g,m){var h=m&&m.hasOwnProperty(b)?m:g,l;if(null==h)return h;(h=h[b])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return s;(h=h[a])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return s;(h=h[c])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=
a})),h=h.$$v);if(!d)return h;if(null==h)return s;(h=h[d])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return s;(h=h[e])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=h[b];if(!a)return h;if(null==h)return s;h=h[a];if(!c)return h;if(null==h)return s;h=h[c];if(!d)return h;if(null==h)return s;h=h[d];return e?null==h?s:h=h[e]:h}}function Ec(b,
a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?Dc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,k;do k=Dc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=s,b=k;while(g<e);return k};else{var g="var p;\n";q(d,function(b,d){qa(b,c);g+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var g=g+"return s;",k=new Function("s","k","pw",g);k.toString=$(g);f=a.unwrapPromises?function(a,b){return k(a,b,va)}:k}"hasOwnProperty"!==b&&(Vb[b]=f);return f}function Yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;va=
function(b){a.logPromiseWarnings&&!Fc.hasOwnProperty(b)&&(Fc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Wb(a);e=(new cb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return D}}}]}function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ye(function(a){b.$evalAsync(a)},
a)}]}function ye(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],h,l;return l={resolve:function(a){if(g){var c=g;g=s;h=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,k){var l=e(),L=function(d){try{l.resolve((C(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},
w=function(b){try{l.resolve((C(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},u=function(b){try{l.notify((C(k)?k:c)(b))}catch(d){a(d)}};g?g.push([L,w,u]):h.then(L,w,u);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(k){return b(k,!1)}return g&&C(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,
!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&C(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(f,g){var k=e();b(function(){try{k.resolve((C(g)?g:d)(c))}catch(b){k.reject(b),a(b)}});return k.promise}}};return{defer:e,reject:g,when:function(k,h,l,p){var n=e(),r,t=function(b){try{return(C(h)?h:c)(b)}catch(d){return a(d),g(d)}},L=function(b){try{return(C(l)?
l:d)(b)}catch(c){return a(c),g(c)}},w=function(b){try{return(C(p)?p:c)(b)}catch(d){a(d)}};b(function(){f(k).then(function(a){r||(r=!0,n.resolve(f(a).then(t,L,w)))},function(a){r||(r=!0,n.resolve(L(a)))},function(a){r||n.notify(w(a))})});return n.promise},all:function(a){var b=e(),c=0,d=I(a)?[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=
["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Zd(){var b=10,a=y("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=
["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function k(){this.$id=fb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(n.$$phase)throw a("inprog",n.$$phase);n.$$phase=b}function h(a,b){var c=f(a);Ua(c,b);return c}function l(a,
b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=fb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=
this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),f=this.$$watchers,g={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;if(!C(b)){var k=h(b||D,"listener");g.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var m=g.fn;g.fn=function(a,b,c){m.call(this,a,b,c);Qa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);
return function(){Qa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,k=1<b.length,h=0,m=f(a),l=[],n={},p=!0,q=0;return this.$watch(function(){d=m(c);var a,b,f;if(S(d))if(eb(d))for(e!==l&&(e=l,q=e.length=0,h++),a=d.length,q!==a&&(h++,e.length=q=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b])):(q++,e[b]=d[b],h++));
if(q>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){p?(p=!1,b(d,d,c)):b(d,g,c);if(k)if(S(d))if(eb(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)hb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,k,h=this.$$asyncQueue,l=this.$$postDigestQueue,q,A,s=b,J,T=[],x,O,E;m("$digest");c=null;do{A=!1;for(J=this;h.length;){try{E=h.shift(),E.scope.$eval(E.expression)}catch(H){n.$$phase=null,
e(H)}c=null}a:do{if(k=J.$$watchers)for(q=k.length;q--;)try{if(d=k[q])if((f=d.get(J))!==(g=d.last)&&!(d.eq?za(f,g):"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g)))A=!0,c=d,d.last=d.eq?Ha(f,null):f,d.fn(f,g===p?f:g,J),5>s&&(x=4-s,T[x]||(T[x]=[]),O=C(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,O+="; newVal: "+ta(f)+"; oldVal: "+ta(g),T[x].push(O));else if(d===c){A=!1;break a}}catch(B){n.$$phase=null,e(B)}if(!(k=J.$$childHead||J!==this&&J.$$nextSibling))for(;J!==this&&!(k=J.$$nextSibling);)J=
J.$parent}while(J=k);if((A||h.length)&&!s--)throw n.$$phase=null,a("infdig",b,ta(T));}while(A||h.length);for(n.$$phase=null;l.length;)try{l.shift()()}catch(y){e(y)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==n&&(q(this.$$listenerCount,Bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),
this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=D,this.$on=this.$watch=function(){return D})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){n.$$phase||n.$$asyncQueue.length||g.defer(function(){n.$$asyncQueue.length&&n.$digest()});this.$$asyncQueue.push({scope:this,
expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{n.$$phase=null;try{n.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Pa(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,k={name:a,
targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(Aa.call(arguments,1)),m,l;do{d=f.$$listeners[a]||c;k.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,h)}catch(n){e(n)}else d.splice(m,1),m--,l--;if(g)break;f=f.$parent}while(f);return k},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(Aa.call(arguments,
1)),k,h;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,g)}catch(m){e(m)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var n=new k;return n}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=
function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function ze(b){if("self"===b)return b;if(z(b)){if(-1<b.indexOf("***"))throw wa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(gb(b))return RegExp("^"+b.source+"$");throw wa("imatcher");}function Gc(b){var a=[];
B(b)&&q(b,function(b){a.push(ze(b))});return a}function be(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var e=function(a){throw wa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw wa("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw wa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof
f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=ua(d.toString()),l,p,n=!1;l=0;for(p=b.length;l<p;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){n=!0;break}if(n)for(l=0,p=a.length;l<p;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){n=!1;break}if(n)return d;throw wa("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw wa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};
this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw wa("iequirks");var e=ga(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ga);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;q(fa,function(a,b){var c=K(b);e[Xa("parse_as_"+c)]=
function(b){return f(a,b)};e[Xa("get_trusted_"+c)]=function(b){return g(a,b)};e[Xa("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=Z((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,p=!1;if(h){for(var n in h)if(l=m.exec(n)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);
break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);p=!!("animation"in h||k+"Animation"in h);!d||l&&p||(l=z(f.body.style.webkitTransition),p=z(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(v(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Va(),vendorPrefix:k,transitions:l,animations:p,android:d,msie:Q,msieDocumentMode:g}}]}
function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,p=B(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete f[l.$$timeoutId]}p||b.$apply()},k);l.$$timeoutId=k;f[k]=h;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;Q&&(V.setAttribute("href",
c),c=V.href);V.setAttribute("href",c);return{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:"/"===V.pathname.charAt(0)?V.pathname:"/"+V.pathname}}function Pb(b){b=z(b)?ua(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}function fe(){this.$get=$(P)}function mc(b){function a(d,e){if(S(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+
c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ae);a("json",Be);a("limitTo",Ce);a("lowercase",De);a("number",Kc);a("orderBy",Lc);a("uppercase",Ee)}function Ae(){return function(b,a,c){if(!I(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ta.equals(a,b)}:function(a,b){if(a&&b&&
"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&hb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<
a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=b[g];e.check(k)&&d.push(k)}return d}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){v(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,
a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||S(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",m=[],h=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?(g="0",b=0):(k=g,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));
b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var l=0,p=a.lgSize,n=a.gSize;if(g.length>=p+n)for(l=g.length-p,h=0;h<l;h++)0===(l-h)%n&&0!==h&&(k+=c),k+=g.charAt(h);for(h=l;h<g.length;h++)0===(g.length-h)%p&&0!==h&&(k+=c),k+=g.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(k);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Xb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;
c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Xb(e,a,d)}}function ub(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));k.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-
g;k=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;z(c)&&(c=Fe.test(c)?Z(c):a(c));Ab(c)&&(c=new Date(c));if(!sa(c))return c;for(;e;)(m=Ge.exec(e))?(g=g.concat(Aa.call(m,1)),e=g.pop()):(g.push(e),e=null);q(g,function(a){k=He[a];f+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,
"").replace(/''/g,"'")});return f}}function Be(){return function(b){return ta(b,!0)}}function Ce(){return function(b,a){if(!I(b)&&!z(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Z(a);if(z(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Sa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=
typeof a,d=typeof b;return c==d?(sa(a)&&sa(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!I(a)||!c)return a;c=I(c)?c:[c];c=Vc(c,function(a){var c=!1,d=a||Ga;if(z(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,
b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function xa(b){C(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+jb(c,"-"):"";d.removeClass(b,(a?vb:wb)+c);d.addClass(b,(a?wb:vb)+c)}var f=this,g=b.parent().controller("form")||xb,k=0,m=f.$error={},h=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Oa);e(!0);f.$addControl=function(a){Ca(a.$name,"input");h.push(a);
a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(m,function(b,c){f.$setValidity(c,!0,a)});Qa(h,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Qa(d,c),d.length||(k--,k||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{k||e(b);if(d){if(-1!=Pa(d,c))return}else m[a]=d=[],k++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Oa);d.addClass(b,yb);f.$dirty=!0;
f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,yb);d.addClass(b,Oa);f.$dirty=!1;f.$pristine=!0;q(h,function(a){a.$setPristine()})}}function ra(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ie(b,a,c,d,e){S(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;b.$setValidity(a,!1)}))}function zb(b,a,c,d,e,f){var g=a.prop(Je),k=a[0].placeholder,
m={};d.$$validityState=g;if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(e){if(!h){var f=a.val();if(Q&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if(Sa(c.ngTrim||"T")&&(f=aa(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==f||""===f&&e)b.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",l);else{var p,n=function(){p||(p=f.defer(function(){l();
p=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||n()});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var r=c.ngPattern;r&&((e=r.match(/^\/(.*)\/([gim]*)$/))?(r=RegExp(e[1],e[2]),e=function(a){return ra(d,"pattern",d.$isEmpty(a)||r.test(a),a)}):e=function(c){var e=b.$eval(r);if(!e||!e.test)throw y("ngPattern")("noregexp",r,e,ha(a));return ra(d,"pattern",d.$isEmpty(c)||e.test(c),
c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var t=Z(c.ngMinlength);e=function(a){return ra(d,"minlength",d.$isEmpty(a)||a.length>=t,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var q=Z(c.ngMaxlength);e=function(a){return ra(d,"maxlength",d.$isEmpty(a)||a.length<=q,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Yb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==
b[l])continue a;c.push(e)}return c}function e(a){if(!I(a)){if(z(a))return a.split(" ");if(S(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function m(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||f.$index%2===a){var h=e(b||[]);if(!l){var r=m(h,1);k.$addClass(r)}else if(!za(b,l)){var q=
e(l),r=d(h,q),h=d(q,h),h=m(h,-1),r=m(r,1);0===r.length?c.removeClass(g,h):0===h.length?c.addClass(g,r):c.setClass(g,r,h)}}l=ga(b)}var l;f.$watch(k[b],h,!0);k.$observe("class",function(a){h(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var h=e(f.$eval(k[b]));g===a?(g=m(h,1),k.$addClass(g)):(g=m(h,-1),k.$removeClass(g))}})}}}]}var Je="validity",K=function(b){return z(b)?b.toLowerCase():b},hb=Object.prototype.hasOwnProperty,Ia=function(b){return z(b)?b.toUpperCase():
b},Q,x,Da,Aa=[].slice,Ke=[].push,ya=Object.prototype.toString,Ra=y("ng"),Ta=P.angular||(P.angular={}),Wa,Ma,ka=["0","0","0"];Q=Z((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=Z((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));D.$inject=[];Ga.$inject=[];var I=function(){return C(Array.isArray)?Array.isArray:function(b){return"[object Array]"===ya.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return z(b)?b.trim():b}:function(b){return z(b)?b.replace(/^\s\s*/,
"").replace(/\s\s*$/,""):b}}();Ma=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Va=function(){if(B(Va.isActive_))return Va.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Va.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.21",major:1,minor:2,dot:21,codeName:"wizard-props"};R.expando="ng339";var Za=
R.cache={},ne=1,rb=P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ya=P.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};R._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,je=/^moz([A-Z])/,Hb=y("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,le=/<([\w:]+)/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
ba={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ba.optgroup=ba.option;ba.tbody=ba.tfoot=ba.colgroup=ba.caption=ba.thead;ba.th=ba.td;var La=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(P).on("load",a))},
toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?x(this[b]):x(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},nb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){nb[K(b)]=b});var rc={};q("input select option textarea button form details".split(" "),function(b){rc[Ia(b)]=!0});q({data:Mb,removeData:Lb},function(b,a){R[a]=b});q({data:Mb,inheritedData:mb,scope:function(b){return x.data(b,
"$scope")||mb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return x.data(b,"$isolateScope")||x.data(b,"$isolateScopeNoTemplate")},controller:oc,injector:function(b){return mb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Xa(a);if(B(c))b.style[a]=c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=K(a);if(nb[d])if(B(c))c?(b[a]=
!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||D).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(v(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(v(a)){if("SELECT"===Ma(b)&&b.multiple){var c=
[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(v(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:pc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==pc&&(2==b.length&&b!==Nb&&b!==oc?a:d)===s){if(S(a)){for(e=0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var k=
b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});q({removeData:Lb,dealoc:Ja,on:function a(c,d,e,f){if(B(f))throw Hb("onargs");var g=la(c,"events"),k=la(c,"handle");g||la(c,"events",g={});k||la(c,"handle",k=oe(c,g));q(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=W.body.contains||W.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?
d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else rb(c,d,k),g[d]=[];f=g[d]}f.push(e)})},off:nc,one:function(a,c,d){a=x(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);q(new R(c),function(c){d?e.insertBefore(c,
d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new R(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=x(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new R(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:lb,removeClass:kb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;v(f)&&(f=!Nb(a,c));(f?lb:kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];c=ga(c||[]);d=d||[];var e=[{preventDefault:D,stopPropagation:D}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,k=0;k<this.length;k++)v(g)?(g=a(this[k],c,e,f),B(g)&&(g=x(g))):Jb(g,a(this[k],c,e,f));return B(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});$a.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,
this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,ab=y("$injector"),Le=y("$animate"),Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,k){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));k&&d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,g){c=z(c)?c:I(c)?c.join(" "):"";q(a,function(a){lb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=z(c)?c:I(c)?c.join(" "):"";q(a,function(a){kb(a,c)});g&&d(g)},setClass:function(a,c,g,k){q(a,function(a){lb(a,
c);kb(a,g)});k&&d(k)},enabled:D}}]}],ia=y("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var ue=/^(x[\:\-_]|data[\:\-_])/i,yc=y("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xe={http:80,https:443,ftp:21},Sb=y("$location");Ub.prototype=Tb.prototype=Bc.prototype={$$html5:!1,$$replace:!1,absUrl:sb("$$absUrl"),url:function(a,c){if(v(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},
protocol:sb("$$protocol"),host:sb("$$host"),port:sb("$$port"),path:Cc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(z(a))this.$$search=ec(a);else if(S(a))q(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:v(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Cc("$$hash",Ga),replace:function(){this.$$replace=!0;return this}};
var ja=y("$parse"),Fc={},va,Ne=Function.prototype.call,Oe=Function.prototype.apply,Qc=Function.prototype.bind,db={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:D,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,
c,d,e){return d(a,c)^e(a,c)},"=":D,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,
c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Pe={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=db[this.ch],e=db[a],f=db[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",
this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ja("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-
d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}d={index:d,text:c};if(db.hasOwnProperty(c))d.fn=db[c],d.literal=!0,d.constant=!0;else{var m=Ec(c,this.options,this.text);d.fn=F(function(a,c){return m(a,c)},{assign:function(d,e){return tb(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Pe[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var cb=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d};cb.ZERO=F(function(){return 0},{constant:!0});cb.prototype={constructor:cb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();
(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ja("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ja("ueoe",this.text);return this.tokens[0]},
peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return F(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return F(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&
c.constant&&d.constant})},binaryFn:function(a,c,d){return F(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=
this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,
c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),
c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;
return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(cb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return F(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){return tb(a(e,k),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return F(function(e,f){var g=a(e,f),k=d(e,f),m;qa(k,c.text);
if(!g)return s;(g=Na(g[k],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var k=d(e,g);return Na(a(e,g),c.text)[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var k=[],m=c?c(f,g):f,h=0;h<d.length;h++)k.push(d[h](f,g));h=a(f,g,m)||D;Na(m,e.text);var l=e.text;if(h){if(h.constructor===
h)throw ja("isecfn",l);if(h===Ne||h===Oe||Qc&&h===Qc)throw ja("isecff",l);}k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return Na(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return F(function(c,d){for(var g=[],k=0;k<a.length;k++)g.push(a[k](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return F(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},wa=y("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},V=W.createElement("a"),Hc=ua(P.location.href,!0);mc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];
var Nc=".",He={yyyy:Y("FullYear",4),yy:Y("FullYear",2,0,!0),y:Y("FullYear",1),MMMM:ub("Month"),MMM:ub("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:ub("Day"),EEE:ub("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Xb(Math[0<
a?"floor":"ceil"](a/60),2)+Xb(Math.abs(a%60),2))}},Ge=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Fe=/^\-?\d+$/;Jc.$inject=["$locale"];var De=$(K),Ee=$(Ia);Lc.$inject=["$parse"];var dd=$({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(W.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===ya.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};q(nb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===ya.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(k,a),Q&&g&&e.prop(g,f[k]))})}}}});
var xb={$addControl:D,$removeControl:D,$setValidity:D,$setDirty:D,$setPristine:D};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};rb(e[0],"submit",k);e.on("$destroy",function(){c(function(){Ya(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),h=f.name||
f.ngForm;h&&tb(a,h,g,h);if(m)e.on("$destroy",function(){m.$removeControl(g);h&&tb(a,h,s,h);F(g,xb)})}}}}}]},ed=Rc(),rd=Rc(!0),Qe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Re=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Se=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:zb,number:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Se.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Ie(e,"number",Te,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ra(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ra(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ra(e,"number",e.$isEmpty(a)||
Ab(a),a)})},url:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);a=function(a){return ra(e,"url",e.$isEmpty(a)||Qe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);a=function(a){return ra(e,"email",e.$isEmpty(a)||Re.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){v(d.name)&&c.attr("name",fb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;z(f)||(f=!0);z(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:D,button:D,submit:D,reset:D,file:D},Te=["badInput"],jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Sc[K(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",vb="ng-invalid",Oa="ng-pristine",yb="ng-dirty",Ue=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function k(a,c){c=c?"-"+jb(c,"-"):"";g.removeClass(e,(a?vb:wb)+c);g.addClass(e,(a?wb:vb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=f(d.ngModel),h=m.assign;if(!h)throw y("ngModel")("nonassign",d.ngModel,ha(e));this.$render=D;this.$isEmpty=function(a){return v(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||xb,p=0,n=this.$error={};e.addClass(Oa);k(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&p--,p||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,p++),n[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,yb);g.addClass(e,Oa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Oa),g.addClass(e,yb),l.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=m(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=
c,r.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:Ue,link:function(a,c,d,e){var f=e[0],g=e[1]||xb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!v(a)){var c=[];a&&q(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return I(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Ve=/^(true|false|\d+)$/,Jd=function(){return{priority:100,
compile:function(a,c){return Ve.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=xa({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==s?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var k=c(g.ngBindHtml);d.$watch(function(){return(k(d)||"").toString()},function(c){f.html(a.getTrustedHtml(k(d))||"")})}}}}],md=Yb("",!0),od=Yb("Odd",0),nd=Yb("Even",1),pd=xa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],lc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ma("ng-"+a);lc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d){d.on(K(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,m,h;c.$watch(e.ngIf,function(f){Sa(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),
h=null),m&&(m.$destroy(),m=null),k&&(h=Eb(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ta.noop,compile:function(g,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(g,k,r,q,L){var w=0,u,s,x,A=function(){s&&(s.remove(),s=null);u&&(u.$destroy(),u=null);x&&(e.leave(x,function(){s=null}),s=x,x=null)};g.$watch(f.parseAsResourceUrl(m),
function(f){var m=function(){!B(l)||l&&!g.$eval(l)||d()},r=++w;f?(a.get(f,{cache:c}).success(function(a){if(r===w){var c=g.$new();q.template=a;a=L(c,function(a){A();e.enter(a,null,k,m)});u=c;x=a;u.$emit("$includeContentLoaded");g.$eval(h)}}).error(function(){r===w&&A()}),g.$emit("$includeContentRequested")):(A(),q.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=xa({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=xa({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,m=g.$attr.when&&f.attr(g.$attr.when),h=g.offset||0,l=e.$eval(m)||{},p={},n=c.startSymbol(),r=c.endSymbol(),t=/^when(Minus)?(.+)$/;q(g,function(a,c){t.test(c)&&(l[K(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(l,function(a,e){p[e]=c(a.replace(d,n+k+"-"+h+r))});e.$watch(function(){var c=
parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return p[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse","$animate",function(a,c){var d=y("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,k,m){var h=g.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),p,n,r,t,s,w,u={$id:Ka};if(!l)throw d("iexp",h);g=l[1];k=l[2];(l=l[3])?(p=a(l),n=function(a,c,d){w&&(u[w]=a);u[s]=c;u.$index=d;return p(e,
u)}):(r=function(a,c){return Ka(c)},t=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);s=l[3]||l[1];w=l[2];var B={};e.$watchCollection(k,function(a){var g,k,l=f[0],p,u={},y,E,H,z,D,v,I=[];if(eb(a))D=a,p=n||r;else{p=n||t;D=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&D.push(H);D.sort()}y=D.length;k=I.length=D.length;for(g=0;g<k;g++)if(H=a===D?g:D[g],z=a[H],z=p(H,z,g),Ca(z,"`track by` id"),B.hasOwnProperty(z))v=B[z],delete B[z],u[z]=
v,I[g]=v;else{if(u.hasOwnProperty(z))throw q(I,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",h,z);I[g]={id:z};u[z]=!1}for(H in B)B.hasOwnProperty(H)&&(v=B[H],g=Eb(v.clone),c.leave(g),q(g,function(a){a.$$NG_REMOVED=!0}),v.scope.$destroy());g=0;for(k=D.length;g<k;g++){H=a===D?g:D[g];z=a[H];v=I[g];I[g-1]&&(l=I[g-1].clone[I[g-1].clone.length-1]);if(v.scope){E=v.scope;p=l;do p=p.nextSibling;while(p&&p.$$NG_REMOVED);v.clone[0]!=p&&c.move(Eb(v.clone),null,x(l));l=v.clone[v.clone.length-1]}else E=e.$new();
E[s]=z;w&&(E[w]=H);E.$index=g;E.$first=0===g;E.$last=g===y-1;E.$middle=!(E.$first||E.$last);E.$odd=!(E.$even=0===(g&1));v.scope||m(E,function(a){a[a.length++]=W.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,x(l));l=a;v.scope=E;v.clone=a;u[v.id]=v})}B=u})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Sa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Sa(c)?"addClass":"removeClass"](d,
"ng-hide")})}}],Ad=xa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var p,n;p=0;for(n=m.length;p<n;++p)m[p].remove();p=m.length=0;for(n=h.length;p<n;++p){var r=k[p];h[p].$destroy();m[p]=r;a.leave(r,function(){m.splice(p,1)})}k.length=0;h.length=
0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Cd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||
[];e.cases["?"].push({transclude:f,element:c})}}),Fd=xa({link:function(a,c,d,e,f){if(!f)throw y("ngTransclude")("orphan",ha(c));f(function(a){c.empty();c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],We=y("ngOptions"),Ed=$({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:D};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,p;m.databound=d.ngModel;m.init=function(a,c,d){l=a;p=d};m.addOption=function(c){Ca(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),p.parent()&&p.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",
!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=D})}],link:function(e,g,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&w.prop("selected",!0)):v(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new $a(d.$viewValue);q(c.find("option"),
function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){za(e,d.$viewValue)||(e=ga(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function k(){var a={"":[]},c=[""],d,h,s,t,v;t=g.$modelValue;v=x(e)||[];var A=n?Zb(v):v,E,N,C;N={};s=!1;var F,K;if(r)if(w&&I(t))for(s=new $a([]),C=0;C<t.length;C++)N[m]=t[C],s.put(w(e,N),t[C]);else s=new $a(t);for(C=0;E=A.length,
C<E;C++){h=C;if(n){h=A[C];if("$"===h.charAt(0))continue;N[n]=h}N[m]=v[h];d=p(e,N)||"";(h=a[d])||(h=a[d]=[],c.push(d));r?d=B(s.remove(w?w(e,N):q(e,N))):(w?(d={},d[m]=t,d=w(e,d)===w(e,N)):d=t===q(e,N),s=s||d);F=l(e,N);F=B(F)?F:"";h.push({id:w?w(e,N):n?A[C]:C,label:F,selected:d})}r||(z||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));N=0;for(A=c.length;N<A;N++){d=c[N];h=a[d];y.length<=N?(t={element:D.clone().attr("label",d),label:h.label},v=[t],y.push(v),
f.append(t.element)):(v=y[N],t=v[0],t.label!=d&&t.element.attr("label",t.label=d));F=null;C=0;for(E=h.length;C<E;C++)s=h[C],(d=v[C+1])?(F=d.element,d.label!==s.label&&F.text(d.label=s.label),d.id!==s.id&&F.val(d.id=s.id),d.selected!==s.selected&&(F.prop("selected",d.selected=s.selected),Q&&F.prop("selected",d.selected))):(""===s.id&&z?K=z:(K=u.clone()).val(s.id).prop("selected",s.selected).text(s.label),v.push({element:K,label:s.label,id:s.id,selected:s.selected}),F?F.after(K):t.element.append(K),
F=K);for(C++;v.length>C;)v.pop().element.remove()}for(;y.length>N;)y.pop()[0].element.remove()}var h;if(!(h=t.match(d)))throw We("iexp",t,ha(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],p=c(h[3]||""),q=c(h[2]?h[1]:m),x=c(h[7]),w=h[8]?c(h[8]):null,y=[[{element:f,label:""}]];z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=x(e)||[],d={},h,k,l,p,t,u,v;if(r)for(k=[],p=0,u=y.length;p<u;p++)for(a=y[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=
h.val();n&&(d[n]=h);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=h);v++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<y[0].length&&y[0][1].id!==h&&(y[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=k;e.$watch(k)}if(m[1]){var n=m[0];m=m[1];var r=k.multiple,t=k.ngOptions,z=!1,w,u=x(W.createElement("option")),D=x(W.createElement("optgroup")),y=u.clone();
k=0;for(var A=g.children(),C=A.length;k<C;k++)if(""===A[k].value){w=z=A.eq(k);break}n.init(m,z,y);r&&(m.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,m):r?l(e,g,m):h(e,g,m,n)}}}}],id=["$interpolate",function(a){var c={addOption:D,removeOption:D};return{restrict:"E",priority:100,compile:function(d,e){if(v(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",
!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],hd=$({restrict:"E",terminal:!0});P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Da=P.jQuery)&&Da.fn.on?(x=Da,F(Da.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",!1,!1,!1),Gb("html",
!1,!1,!0)):x=R,Ta.element=x,$c(Ta),x(W).ready(function(){Xc(W,fc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ui.router';
}

(function (window, angular, undefined) {
/*jshint globalstrict:true*/
/*global angular:false*/
'use strict';

var isDefined = angular.isDefined,
    isFunction = angular.isFunction,
    isString = angular.isString,
    isObject = angular.isObject,
    isArray = angular.isArray,
    forEach = angular.forEach,
    extend = angular.extend,
    copy = angular.copy;

function inherit(parent, extra) {
  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
}

function merge(dst) {
  forEach(arguments, function(obj) {
    if (obj !== dst) {
      forEach(obj, function(value, key) {
        if (!dst.hasOwnProperty(key)) dst[key] = value;
      });
    }
  });
  return dst;
}

/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
  var path = [];

  for (var n in first.path) {
    if (first.path[n] !== second.path[n]) break;
    path.push(first.path[n]);
  }
  return path;
}

/**
 * IE8-safe wrapper for `Object.keys()`.
 *
 * @param {Object} object A JavaScript object.
 * @return {Array} Returns the keys of the object as an array.
 */
function keys(object) {
  if (Object.keys) {
    return Object.keys(object);
  }
  var result = [];

  angular.forEach(object, function(val, key) {
    result.push(key);
  });
  return result;
}

/**
 * IE8-safe wrapper for `Array.prototype.indexOf()`.
 *
 * @param {Array} array A JavaScript array.
 * @param {*} value A value to search the array for.
 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
 */
function arraySearch(array, value) {
  if (Array.prototype.indexOf) {
    return array.indexOf(value, Number(arguments[2]) || 0);
  }
  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

  if (from < 0) from += len;

  for (; from < len; from++) {
    if (from in array && array[from] === value) return from;
  }
  return -1;
}

/**
 * Merges a set of parameters with all parameters inherited between the common parents of the
 * current state and a given destination state.
 *
 * @param {Object} currentParams The value of the current state parameters ($stateParams).
 * @param {Object} newParams The set of parameters which will be composited with inherited params.
 * @param {Object} $current Internal definition of object representing the current state.
 * @param {Object} $to Internal definition of object representing state to transition to.
 */
function inheritParams(currentParams, newParams, $current, $to) {
  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

  for (var i in parents) {
    if (!parents[i].params || !parents[i].params.length) continue;
    parentParams = parents[i].params;

    for (var j in parentParams) {
      if (arraySearch(inheritList, parentParams[j]) >= 0) continue;
      inheritList.push(parentParams[j]);
      inherited[parentParams[j]] = currentParams[parentParams[j]];
    }
  }
  return extend({}, inherited, newParams);
}

/**
 * Normalizes a set of values to string or `null`, filtering them by a list of keys.
 *
 * @param {Array} keys The list of keys to normalize/return.
 * @param {Object} values An object hash of values to normalize.
 * @return {Object} Returns an object hash of normalized string values.
 */
function normalize(keys, values) {
  var normalized = {};

  forEach(keys, function (name) {
    var value = values[name];
    normalized[name] = (value != null) ? String(value) : null;
  });
  return normalized;
}

/**
 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
 *
 * @param {Object} a The first object.
 * @param {Object} b The second object.
 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
 *                     it defaults to the list of keys in `a`.
 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
 */
function equalForKeys(a, b, keys) {
  if (!keys) {
    keys = [];
    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
  }

  for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
  }
  return true;
}

/**
 * Returns the subset of an object, based on a list of keys.
 *
 * @param {Array} keys
 * @param {Object} values
 * @return {Boolean} Returns a subset of `values`.
 */
function filterByKeys(keys, values) {
  var filtered = {};

  forEach(keys, function (name) {
    filtered[name] = values[name];
  });
  return filtered;
}
/**
 * @ngdoc overview
 * @name ui.router.util
 *
 * @description
 * # ui.router.util sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 *
 */
angular.module('ui.router.util', ['ng']);

/**
 * @ngdoc overview
 * @name ui.router.router
 * 
 * @requires ui.router.util
 *
 * @description
 * # ui.router.router sub-module
 *
 * This module is a dependency of other sub-modules. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 */
angular.module('ui.router.router', ['ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router.state
 * 
 * @requires ui.router.router
 * @requires ui.router.util
 *
 * @description
 * # ui.router.state sub-module
 *
 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
 * in your angular app (use {@link ui.router} module instead).
 * 
 */
angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

/**
 * @ngdoc overview
 * @name ui.router
 *
 * @requires ui.router.state
 *
 * @description
 * # ui.router
 * 
 * ## The main module for ui.router 
 * There are several sub-modules included with the ui.router module, however only this module is needed
 * as a dependency within your angular app. The other modules are for organization purposes. 
 *
 * The modules are:
 * * ui.router - the main "umbrella" module
 * * ui.router.router - 
 * 
 * *You'll need to include **only** this module as the dependency within your angular app.*
 * 
 * <pre>
 * <!doctype html>
 * <html ng-app="myApp">
 * <head>
 *   <script src="js/angular.js"></script>
 *   <!-- Include the ui-router script -->
 *   <script src="js/angular-ui-router.min.js"></script>
 *   <script>
 *     // ...and add 'ui.router' as a dependency
 *     var myApp = angular.module('myApp', ['ui.router']);
 *   </script>
 * </head>
 * <body>
 * </body>
 * </html>
 * </pre>
 */
angular.module('ui.router', ['ui.router.state']);

angular.module('ui.router.compat', ['ui.router']);

/**
 * @ngdoc object
 * @name ui.router.util.$resolve
 *
 * @requires $q
 * @requires $injector
 *
 * @description
 * Manages resolution of (acyclic) graphs of promises.
 */
$Resolve.$inject = ['$q', '$injector'];
function $Resolve(  $q,    $injector) {
  
  var VISIT_IN_PROGRESS = 1,
      VISIT_DONE = 2,
      NOTHING = {},
      NO_DEPENDENCIES = [],
      NO_LOCALS = NOTHING,
      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
  

  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#study
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Studies a set of invocables that are likely to be used multiple times.
   * <pre>
   * $resolve.study(invocables)(locals, parent, self)
   * </pre>
   * is equivalent to
   * <pre>
   * $resolve.resolve(invocables, locals, parent, self)
   * </pre>
   * but the former is more efficient (in fact `resolve` just calls `study` 
   * internally).
   *
   * @param {object} invocables Invocable objects
   * @return {function} a function to pass in locals, parent and self
   */
  this.study = function (invocables) {
    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
    
    // Perform a topological sort of invocables to build an ordered plan
    var plan = [], cycle = [], visited = {};
    function visit(value, key) {
      if (visited[key] === VISIT_DONE) return;
      
      cycle.push(key);
      if (visited[key] === VISIT_IN_PROGRESS) {
        cycle.splice(0, cycle.indexOf(key));
        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
      }
      visited[key] = VISIT_IN_PROGRESS;
      
      if (isString(value)) {
        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
      } else {
        var params = $injector.annotate(value);
        forEach(params, function (param) {
          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
        });
        plan.push(key, value, params);
      }
      
      cycle.pop();
      visited[key] = VISIT_DONE;
    }
    forEach(invocables, visit);
    invocables = cycle = visited = null; // plan is all that's required
    
    function isResolve(value) {
      return isObject(value) && value.then && value.$$promises;
    }
    
    return function (locals, parent, self) {
      if (isResolve(locals) && self === undefined) {
        self = parent; parent = locals; locals = null;
      }
      if (!locals) locals = NO_LOCALS;
      else if (!isObject(locals)) {
        throw new Error("'locals' must be an object");
      }       
      if (!parent) parent = NO_PARENT;
      else if (!isResolve(parent)) {
        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
      }
      
      // To complete the overall resolution, we have to wait for the parent
      // promise and for the promise for each invokable in our plan.
      var resolution = $q.defer(),
          result = resolution.promise,
          promises = result.$$promises = {},
          values = extend({}, locals),
          wait = 1 + plan.length/3,
          merged = false;
          
      function done() {
        // Merge parent values we haven't got yet and publish our own $$values
        if (!--wait) {
          if (!merged) merge(values, parent.$$values); 
          result.$$values = values;
          result.$$promises = true; // keep for isResolve()
          resolution.resolve(values);
        }
      }
      
      function fail(reason) {
        result.$$failure = reason;
        resolution.reject(reason);
      }
      
      // Short-circuit if parent has already failed
      if (isDefined(parent.$$failure)) {
        fail(parent.$$failure);
        return result;
      }
      
      // Merge parent values if the parent has already resolved, or merge
      // parent promises and wait if the parent resolve is still in progress.
      if (parent.$$values) {
        merged = merge(values, parent.$$values);
        done();
      } else {
        extend(promises, parent.$$promises);
        parent.then(done, fail);
      }
      
      // Process each invocable in the plan, but ignore any where a local of the same name exists.
      for (var i=0, ii=plan.length; i<ii; i+=3) {
        if (locals.hasOwnProperty(plan[i])) done();
        else invoke(plan[i], plan[i+1], plan[i+2]);
      }
      
      function invoke(key, invocable, params) {
        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
        var invocation = $q.defer(), waitParams = 0;
        function onfailure(reason) {
          invocation.reject(reason);
          fail(reason);
        }
        // Wait for any parameter that we have a promise for (either from parent or from this
        // resolve; in that case study() will have made sure it's ordered before us in the plan).
        forEach(params, function (dep) {
          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
            waitParams++;
            promises[dep].then(function (result) {
              values[dep] = result;
              if (!(--waitParams)) proceed();
            }, onfailure);
          }
        });
        if (!waitParams) proceed();
        function proceed() {
          if (isDefined(result.$$failure)) return;
          try {
            invocation.resolve($injector.invoke(invocable, self, values));
            invocation.promise.then(function (result) {
              values[key] = result;
              done();
            }, onfailure);
          } catch (e) {
            onfailure(e);
          }
        }
        // Publish promise synchronously; invocations further down in the plan may depend on it.
        promises[key] = invocation.promise;
      }
      
      return result;
    };
  };
  
  /**
   * @ngdoc function
   * @name ui.router.util.$resolve#resolve
   * @methodOf ui.router.util.$resolve
   *
   * @description
   * Resolves a set of invocables. An invocable is a function to be invoked via 
   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
   * An invocable can either return a value directly,
   * or a `$q` promise. If a promise is returned it will be resolved and the 
   * resulting value will be used instead. Dependencies of invocables are resolved 
   * (in this order of precedence)
   *
   * - from the specified `locals`
   * - from another invocable that is part of this `$resolve` call
   * - from an invocable that is inherited from a `parent` call to `$resolve` 
   *   (or recursively
   * - from any ancestor `$resolve` of that parent).
   *
   * The return value of `$resolve` is a promise for an object that contains 
   * (in this order of precedence)
   *
   * - any `locals` (if specified)
   * - the resolved return values of all injectables
   * - any values inherited from a `parent` call to `$resolve` (if specified)
   *
   * The promise will resolve after the `parent` promise (if any) and all promises 
   * returned by injectables have been resolved. If any invocable 
   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
   * same error. A rejection of a `parent` promise (if specified) will likewise be 
   * propagated immediately. Once the `$resolve` promise has been rejected, no 
   * further invocables will be called.
   * 
   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
   * to throw an error. As a special case, an injectable can depend on a parameter 
   * with the same name as the injectable, which will be fulfilled from the `parent` 
   * injectable of the same name. This allows inherited values to be decorated. 
   * Note that in this case any other injectable in the same `$resolve` with the same
   * dependency would see the decorated value, not the inherited value.
   *
   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
   * exception.
   *
   * Invocables are invoked eagerly as soon as all dependencies are available. 
   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
   *
   * As a special case, an invocable can be a string, in which case it is taken to 
   * be a service name to be passed to `$injector.get()`. This is supported primarily 
   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
   * routes.
   *
   * @param {object} invocables functions to invoke or 
   * `$injector` services to fetch.
   * @param {object} locals  values to make available to the injectables
   * @param {object} parent  a promise returned by another call to `$resolve`.
   * @param {object} self  the `this` for the invoked methods
   * @return {object} Promise for an object that contains the resolved return value
   * of all invocables, as well as any inherited and local values.
   */
  this.resolve = function (invocables, locals, parent, self) {
    return this.study(invocables)(locals, parent, self);
  };
}

angular.module('ui.router.util').service('$resolve', $Resolve);


/**
 * @ngdoc object
 * @name ui.router.util.$templateFactory
 *
 * @requires $http
 * @requires $templateCache
 * @requires $injector
 *
 * @description
 * Service. Manages loading of templates.
 */
$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
function $TemplateFactory(  $http,   $templateCache,   $injector) {

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromConfig
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a configuration object. 
   *
   * @param {object} config Configuration object for which to load a template. 
   * The following properties are search in the specified order, and the first one 
   * that is defined is used to create the template:
   *
   * @param {string|object} config.template html string template or function to 
   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
   * @param {string|object} config.templateUrl url to load or a function returning 
   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
   * @param {Function} config.templateProvider function to invoke via 
   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
   * @param {object} params  Parameters to pass to the template function.
   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
   * via a `templateProvider`. Defaults to `{ params: params }`.
   *
   * @return {string|object}  The template html as a string, or a promise for 
   * that string,or `null` if no template is configured.
   */
  this.fromConfig = function (config, params, locals) {
    return (
      isDefined(config.template) ? this.fromString(config.template, params) :
      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
      null
    );
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromString
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template from a string or a function returning a string.
   *
   * @param {string|object} template html template as a string or function that 
   * returns an html template as a string.
   * @param {object} params Parameters to pass to the template function.
   *
   * @return {string|object} The template html as a string, or a promise for that 
   * string.
   */
  this.fromString = function (template, params) {
    return isFunction(template) ? template(params) : template;
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   * 
   * @description
   * Loads a template from the a URL via `$http` and `$templateCache`.
   *
   * @param {string|Function} url url of the template to load, or a function 
   * that returns a url.
   * @param {Object} params Parameters to pass to the url function.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromUrl = function (url, params) {
    if (isFunction(url)) url = url(params);
    if (url == null) return null;
    else return $http
        .get(url, { cache: $templateCache })
        .then(function(response) { return response.data; });
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$templateFactory#fromUrl
   * @methodOf ui.router.util.$templateFactory
   *
   * @description
   * Creates a template by invoking an injectable provider function.
   *
   * @param {Function} provider Function to invoke via `$injector.invoke`
   * @param {Object} params Parameters for the template.
   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
   * `{ params: params }`.
   * @return {string|Promise.<string>} The template html as a string, or a promise 
   * for that string.
   */
  this.fromProvider = function (provider, params, locals) {
    return $injector.invoke(provider, null, locals || { params: params });
  };
}

angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

/**
 * @ngdoc object
 * @name ui.router.util.type:UrlMatcher
 *
 * @description
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
 * 
 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
 * syntax, which optionally allows a regular expression for the parameter to be specified:
 *
 * * `':'` name - colon placeholder
 * * `'*'` name - catch-all placeholder
 * * `'{' name '}'` - curly placeholder
 * * `'{' name ':' regexp '}'` - curly placeholder with regexp. Should the regexp itself contain
 *   curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters). For colon 
 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
 * number of characters other than '/'. For catch-all placeholders the path parameter matches
 * any number of characters.
 * 
 * Examples:
 * 
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 *
 * @param {string} pattern  the pattern to compile into a matcher.
 *
 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
 *   non-null) will start with this prefix.
 *
 * @property {string} source  The pattern that was passed into the contructor
 *
 * @property {string} sourcePath  The path portion of the source property
 *
 * @property {string} sourceSearch  The search portion of the source property
 *
 * @property {string} regex  The constructed regex that will be used to match against the url when 
 *   it is time to determine which url will match.
 *
 * @returns {Object}  New UrlMatcher object
 */
function UrlMatcher(pattern) {

  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
  //   '*' name
  //   ':' name
  //   '{' name '}'
  //   '{' name ':' regexp '}'
  // The regular expression is somewhat complicated due to the need to allow curly braces
  // inside the regular expression. The placeholder regexp breaks down as follows:
  //    ([:*])(\w+)               classic placeholder ($1 / $2)
  //    \{(\w+)(?:\:( ... ))?\}   curly brace placeholder ($3) with optional regexp ... ($4)
  //    (?: ... | ... | ... )+    the regexp consists of any number of atoms, an atom being either
  //    [^{}\\]+                  - anything other than curly braces or backslash
  //    \\.                       - a backslash escape
  //    \{(?:[^{}\\]+|\\.)*\}     - a matched set of curly braces containing other atoms
  var placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
      names = {}, compiled = '^', last = 0, m,
      segments = this.segments = [],
      params = this.params = [];

  function addParameter(id) {
    if (!/^\w+(-+\w+)*$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
    if (names[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
    names[id] = true;
    params.push(id);
  }

  function quoteRegExp(string) {
    return string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
  }

  this.source = pattern;

  // Split into static segments separated by path parameter placeholders.
  // The number of segments is always 1 more than the number of parameters.
  var id, regexp, segment;
  while ((m = placeholder.exec(pattern))) {
    id = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
    regexp = m[4] || (m[1] == '*' ? '.*' : '[^/]*');
    segment = pattern.substring(last, m.index);
    if (segment.indexOf('?') >= 0) break; // we're into the search part
    compiled += quoteRegExp(segment) + '(' + regexp + ')';
    addParameter(id);
    segments.push(segment);
    last = placeholder.lastIndex;
  }
  segment = pattern.substring(last);

  // Find any search parameter names and remove them from the last segment
  var i = segment.indexOf('?');
  if (i >= 0) {
    var search = this.sourceSearch = segment.substring(i);
    segment = segment.substring(0, i);
    this.sourcePath = pattern.substring(0, last+i);

    // Allow parameters to be separated by '?' as well as '&' to make concat() easier
    forEach(search.substring(1).split(/[&?]/), addParameter);
  } else {
    this.sourcePath = pattern;
    this.sourceSearch = '';
  }

  compiled += quoteRegExp(segment) + '$';
  segments.push(segment);
  this.regexp = new RegExp(compiled);
  this.prefix = segments[0];
}

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#concat
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns a new matcher for a pattern constructed by appending the path part and adding the
 * search parameters of the specified pattern to this pattern. The current pattern is not
 * modified. This can be understood as creating a pattern for URLs that are relative to (or
 * suffixes of) the current pattern.
 *
 * @example
 * The following two matchers are equivalent:
 * ```
 * new UrlMatcher('/user/{id}?q').concat('/details?date');
 * new UrlMatcher('/user/{id}/details?q&date');
 * ```
 *
 * @param {string} pattern  The pattern to append.
 * @returns {ui.router.util.type:UrlMatcher}  A matcher for the concatenated pattern.
 */
UrlMatcher.prototype.concat = function (pattern) {
  // Because order of search parameters is irrelevant, we can add our own search
  // parameters to the end of the new pattern. Parse the new pattern by itself
  // and then join the bits together, but it's much easier to do this on a string level.
  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch);
};

UrlMatcher.prototype.toString = function () {
  return this.source;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#exec
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Tests the specified path against this matcher, and returns an object containing the captured
 * parameter values, or null if the path does not match. The returned object contains the values
 * of any search parameters that are mentioned in the pattern, but their value may be null if
 * they are not present in `searchParams`. This means that search parameters are always treated
 * as optional.
 *
 * @example
 * ```
 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', { x:'1', q:'hello' });
 * // returns { id:'bob', q:'hello', r:null }
 * ```
 *
 * @param {string} path  The URL path to match, e.g. `$location.path()`.
 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
 * @returns {Object}  The captured parameter values.
 */
UrlMatcher.prototype.exec = function (path, searchParams) {
  var m = this.regexp.exec(path);
  if (!m) return null;

  var params = this.params, nTotal = params.length,
    nPath = this.segments.length-1,
    values = {}, i;

  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

  for (i=0; i<nPath; i++) values[params[i]] = m[i+1];
  for (/**/; i<nTotal; i++) values[params[i]] = searchParams[params[i]];

  return values;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#parameters
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Returns the names of all path and search parameters of this pattern in an unspecified order.
 * 
 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
 *    pattern has no parameters, an empty array is returned.
 */
UrlMatcher.prototype.parameters = function () {
  return this.params;
};

/**
 * @ngdoc function
 * @name ui.router.util.type:UrlMatcher#format
 * @methodOf ui.router.util.type:UrlMatcher
 *
 * @description
 * Creates a URL that matches this pattern by substituting the specified values
 * for the path and search parameters. Null values for path parameters are
 * treated as empty strings.
 *
 * @example
 * ```
 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
 * // returns '/user/bob?q=yes'
 * ```
 *
 * @param {Object} values  the values to substitute for the parameters in this pattern.
 * @returns {string}  the formatted URL (path and optionally search part).
 */
UrlMatcher.prototype.format = function (values) {
  var segments = this.segments, params = this.params;
  if (!values) return segments.join('');

  var nPath = segments.length-1, nTotal = params.length,
    result = segments[0], i, search, value;

  for (i=0; i<nPath; i++) {
    value = values[params[i]];
    // TODO: Maybe we should throw on null here? It's not really good style to use '' and null interchangeabley
    if (value != null) result += encodeURIComponent(value);
    result += segments[i+1];
  }
  for (/**/; i<nTotal; i++) {
    value = values[params[i]];
    if (value != null) {
      result += (search ? '&' : '?') + params[i] + '=' + encodeURIComponent(value);
      search = true;
    }
  }

  return result;
};



/**
 * @ngdoc object
 * @name ui.router.util.$urlMatcherFactory
 *
 * @description
 * Factory for {@link ui.router.util.type:UrlMatcher} instances. The factory is also available to providers
 * under the name `$urlMatcherFactoryProvider`.
 */
function $UrlMatcherFactory() {

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#compile
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Creates a {@link ui.router.util.type:UrlMatcher} for the specified pattern.
   *   
   * @param {string} pattern  The URL pattern.
   * @returns {ui.router.util.type:UrlMatcher}  The UrlMatcher.
   */
  this.compile = function (pattern) {
    return new UrlMatcher(pattern);
  };

  /**
   * @ngdoc function
   * @name ui.router.util.$urlMatcherFactory#isMatcher
   * @methodOf ui.router.util.$urlMatcherFactory
   *
   * @description
   * Returns true if the specified object is a UrlMatcher, or false otherwise.
   *
   * @param {Object} object  The object to perform the type check against.
   * @returns {Boolean}  Returns `true` if the object has the following functions: `exec`, `format`, and `concat`.
   */
  this.isMatcher = function (o) {
    return isObject(o) && isFunction(o.exec) && isFunction(o.format) && isFunction(o.concat);
  };
  
  /* No need to document $get, since it returns this */
  this.$get = function () {
    return this;
  };
}

// Register as a provider so it's available to other providers
angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);

/**
 * @ngdoc object
 * @name ui.router.router.$urlRouterProvider
 *
 * @requires ui.router.util.$urlMatcherFactoryProvider
 *
 * @description
 * `$urlRouterProvider` has the responsibility of watching `$location`. 
 * When `$location` changes it runs through a list of rules one by one until a 
 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
 *
 * There are several methods on `$urlRouterProvider` that make it useful to use directly
 * in your module config.
 */
$UrlRouterProvider.$inject = ['$urlMatcherFactoryProvider'];
function $UrlRouterProvider(  $urlMatcherFactory) {
  var rules = [], 
      otherwise = null;

  // Returns a string that is a prefix of all strings matching the RegExp
  function regExpPrefix(re) {
    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
  }

  // Interpolates matched values into a String.replace()-style pattern
  function interpolate(pattern, match) {
    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
      return match[what === '$' ? 0 : Number(what)];
    });
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#rule
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines rules that are used by `$urlRouterProvider to find matches for
   * specific URLs.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // Here's an example of how you might allow case insensitive urls
   *   $urlRouterProvider.rule(function ($injector, $location) {
   *     var path = $location.path(),
   *         normalized = path.toLowerCase();
   *
   *     if (path !== normalized) {
   *       return normalized;
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {object} rule Handler function that takes `$injector` and `$location`
   * services as arguments. You can use them to return a valid path as a string.
   *
   * @return {object} $urlRouterProvider - $urlRouterProvider instance
   */
  this.rule =
    function (rule) {
      if (!isFunction(rule)) throw new Error("'rule' must be a function");
      rules.push(rule);
      return this;
    };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouterProvider#otherwise
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Defines a path that is used when an invalied route is requested.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   // if the path doesn't match any of the urls you configured
   *   // otherwise will take care of routing the user to the
   *   // specified url
   *   $urlRouterProvider.otherwise('/index');
   *
   *   // Example of using function rule as param
   *   $urlRouterProvider.otherwise(function ($injector, $location) {
   *     ...
   *   });
   * });
   * </pre>
   *
   * @param {string|object} rule The url path you want to redirect to or a function 
   * rule that returns the url path. The function version is passed two params: 
   * `$injector` and `$location` services.
   *
   * @return {object} $urlRouterProvider - $urlRouterProvider instance
   */
  this.otherwise =
    function (rule) {
      if (isString(rule)) {
        var redirect = rule;
        rule = function () { return redirect; };
      }
      else if (!isFunction(rule)) throw new Error("'rule' must be a function");
      otherwise = rule;
      return this;
    };


  function handleIfMatch($injector, handler, match) {
    if (!match) return false;
    var result = $injector.invoke(handler, handler, { $match: match });
    return isDefined(result) ? result : true;
  }

  /**
   * @ngdoc function
   * @name ui.router.router.$urlRouterProvider#when
   * @methodOf ui.router.router.$urlRouterProvider
   *
   * @description
   * Registers a handler for a given url matching. if handle is a string, it is
   * treated as a redirect, and is interpolated according to the syyntax of match
   * (i.e. like String.replace() for RegExp, or like a UrlMatcher pattern otherwise).
   *
   * If the handler is a function, it is injectable. It gets invoked if `$location`
   * matches. You have the option of inject the match object as `$match`.
   *
   * The handler can return
   *
   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
   *   will continue trying to find another one that matches.
   * - **string** which is treated as a redirect and passed to `$location.url()`
   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
   *
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.router']);
   *
   * app.config(function ($urlRouterProvider) {
   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
   *     if ($state.$current.navigable !== state ||
   *         !equalForKeys($match, $stateParams) {
   *      $state.transitionTo(state, $match, false);
   *     }
   *   });
   * });
   * </pre>
   *
   * @param {string|object} what The incoming path that you want to redirect.
   * @param {string|object} handler The path you want to redirect your user to.
   */
  this.when =
    function (what, handler) {
      var redirect, handlerIsString = isString(handler);
      if (isString(what)) what = $urlMatcherFactory.compile(what);

      if (!handlerIsString && !isFunction(handler) && !isArray(handler))
        throw new Error("invalid 'handler' in when()");

      var strategies = {
        matcher: function (what, handler) {
          if (handlerIsString) {
            redirect = $urlMatcherFactory.compile(handler);
            handler = ['$match', function ($match) { return redirect.format($match); }];
          }
          return extend(function ($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
          }, {
            prefix: isString(what.prefix) ? what.prefix : ''
          });
        },
        regex: function (what, handler) {
          if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

          if (handlerIsString) {
            redirect = handler;
            handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
          }
          return extend(function ($injector, $location) {
            return handleIfMatch($injector, handler, what.exec($location.path()));
          }, {
            prefix: regExpPrefix(what)
          });
        }
      };

      var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

      for (var n in check) {
        if (check[n]) {
          return this.rule(strategies[n](what, handler));
        }
      }

      throw new Error("invalid 'what' in when()");
    };

  /**
   * @ngdoc object
   * @name ui.router.router.$urlRouter
   *
   * @requires $location
   * @requires $rootScope
   * @requires $injector
   *
   * @description
   *
   */
  this.$get =
    [        '$location', '$rootScope', '$injector',
    function ($location,   $rootScope,   $injector) {
      // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
      function update(evt) {
        if (evt && evt.defaultPrevented) return;
        function check(rule) {
          var handled = rule($injector, $location);
          if (handled) {
            if (isString(handled)) $location.replace().url(handled);
            return true;
          }
          return false;
        }
        var n=rules.length, i;
        for (i=0; i<n; i++) {
          if (check(rules[i])) return;
        }
        // always check otherwise last to allow dynamic updates to the set of rules
        if (otherwise) check(otherwise);
      }

      $rootScope.$on('$locationChangeSuccess', update);

      return {
        /**
         * @ngdoc function
         * @name ui.router.router.$urlRouter#sync
         * @methodOf ui.router.router.$urlRouter
         *
         * @description
         * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
         * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event, 
         * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed 
         * with the transition by calling `$urlRouter.sync()`.
         *
         * @example
         * <pre>
         * angular.module('app', ['ui.router']);
         *   .run(function($rootScope, $urlRouter) {
         *     $rootScope.$on('$locationChangeSuccess', function(evt) {
         *       // Halt state change from even starting
         *       evt.preventDefault();
         *       // Perform custom logic
         *       var meetsRequirement = ...
         *       // Continue with the update and state transition if logic allows
         *       if (meetsRequirement) $urlRouter.sync();
         *     });
         * });
         * </pre>
         */
        sync: function () {
          update();
        }
      };
    }];
}

angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$stateProvider
 *
 * @requires ui.router.router.$urlRouterProvider
 * @requires ui.router.util.$urlMatcherFactoryProvider
 * @requires $locationProvider
 *
 * @description
 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
 * on state.
 *
 * A state corresponds to a "place" in the application in terms of the overall UI and
 * navigation. A state describes (via the controller / template / view properties) what
 * the UI looks like and does at that place.
 *
 * States often have things in common, and the primary way of factoring out these
 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
 * nested states.
 *
 * The `$stateProvider` provides interfaces to declare these states for your app.
 */
$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider'];
function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory,           $locationProvider) {

  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

  // Builds state properties from definition passed to registerState()
  var stateBuilder = {

    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
    // state.children = [];
    // if (parent) parent.children.push(state);
    parent: function(state) {
      if (isDefined(state.parent) && state.parent) return findState(state.parent);
      // regex matches any valid composite state name
      // would match "contact.list" but not "contacts"
      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
      return compositeName ? findState(compositeName[1]) : root;
    },

    // inherit 'data' from parent and override by own values (if any)
    data: function(state) {
      if (state.parent && state.parent.data) {
        state.data = state.self.data = extend({}, state.parent.data, state.data);
      }
      return state.data;
    },

    // Build a URLMatcher if necessary, either via a relative or absolute URL
    url: function(state) {
      var url = state.url;

      if (isString(url)) {
        if (url.charAt(0) == '^') {
          return $urlMatcherFactory.compile(url.substring(1));
        }
        return (state.parent.navigable || root).url.concat(url);
      }

      if ($urlMatcherFactory.isMatcher(url) || url == null) {
        return url;
      }
      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
    },

    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
    navigable: function(state) {
      return state.url ? state : (state.parent ? state.parent.navigable : null);
    },

    // Derive parameters for this state and ensure they're a super-set of parent's parameters
    params: function(state) {
      if (!state.params) {
        return state.url ? state.url.parameters() : state.parent.params;
      }
      if (!isArray(state.params)) throw new Error("Invalid params in state '" + state + "'");
      if (state.url) throw new Error("Both params and url specicified in state '" + state + "'");
      return state.params;
    },

    // If there is no explicit multi-view configuration, make one up so we don't have
    // to handle both cases in the view directive later. Note that having an explicit
    // 'views' property will mean the default unnamed view properties are ignored. This
    // is also a good time to resolve view names to absolute names, so everything is a
    // straight lookup at link time.
    views: function(state) {
      var views = {};

      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
        views[name] = view;
      });
      return views;
    },

    ownParams: function(state) {
      if (!state.parent) {
        return state.params;
      }
      var paramNames = {}; forEach(state.params, function (p) { paramNames[p] = true; });

      forEach(state.parent.params, function (p) {
        if (!paramNames[p]) {
          throw new Error("Missing required parameter '" + p + "' in state '" + state.name + "'");
        }
        paramNames[p] = false;
      });
      var ownParams = [];

      forEach(paramNames, function (own, p) {
        if (own) ownParams.push(p);
      });
      return ownParams;
    },

    // Keep a full path from the root down to this state as this is needed for state activation.
    path: function(state) {
      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
    },

    // Speed up $state.contains() as it's used a lot
    includes: function(state) {
      var includes = state.parent ? extend({}, state.parent.includes) : {};
      includes[state.name] = true;
      return includes;
    },

    $delegates: {}
  };

  function isRelative(stateName) {
    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
  }

  function findState(stateOrName, base) {
    var isStr = isString(stateOrName),
        name  = isStr ? stateOrName : stateOrName.name,
        path  = isRelative(name);

    if (path) {
      if (!base) throw new Error("No reference point given for path '"  + name + "'");
      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

      for (; i < pathLength; i++) {
        if (rel[i] === "" && i === 0) {
          current = base;
          continue;
        }
        if (rel[i] === "^") {
          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
          current = current.parent;
          continue;
        }
        break;
      }
      rel = rel.slice(i).join(".");
      name = current.name + (current.name && rel ? "." : "") + rel;
    }
    var state = states[name];

    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
      return state;
    }
    return undefined;
  }

  function queueState(parentName, state) {
    if (!queue[parentName]) {
      queue[parentName] = [];
    }
    queue[parentName].push(state);
  }

  function registerState(state) {
    // Wrap a new object around the state so we can store our private details easily.
    state = inherit(state, {
      self: state,
      resolve: state.resolve || {},
      toString: function() { return this.name; }
    });

    var name = state.name;
    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

    // Get parent name
    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
        : (isString(state.parent)) ? state.parent
        : '';

    // If parent is not registered yet, add state to queue and register later
    if (parentName && !states[parentName]) {
      return queueState(parentName, state.self);
    }

    for (var key in stateBuilder) {
      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
    }
    states[name] = state;

    // Register the state in the global state list and with $urlRouter if necessary.
    if (!state[abstractKey] && state.url) {
      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
          $state.transitionTo(state, $match, { location: false });
        }
      }]);
    }

    // Register any queued children
    if (queue[name]) {
      for (var i = 0; i < queue[name].length; i++) {
        registerState(queue[name][i]);
      }
    }

    return state;
  }

  // Checks text to see if it looks like a glob.
  function isGlob (text) {
    return text.indexOf('*') > -1;
  }

  // Returns true if glob matches current $state name.
  function doesStateMatchGlob (glob) {
    var globSegments = glob.split('.'),
        segments = $state.$current.name.split('.');

    //match greedy starts
    if (globSegments[0] === '**') {
       segments = segments.slice(segments.indexOf(globSegments[1]));
       segments.unshift('**');
    }
    //match greedy ends
    if (globSegments[globSegments.length - 1] === '**') {
       segments.splice(segments.indexOf(globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
       segments.push('**');
    }

    if (globSegments.length != segments.length) {
      return false;
    }

    //match single stars
    for (var i = 0, l = globSegments.length; i < l; i++) {
      if (globSegments[i] === '*') {
        segments[i] = '*';
      }
    }

    return segments.join('') === globSegments.join('');
  }


  // Implicit root state that is always active
  root = registerState({
    name: '',
    url: '^',
    views: null,
    'abstract': true
  });
  root.navigable = null;


  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#decorator
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Allows you to extend (carefully) or override (at your own peril) the 
   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
   * to add custom functionality to ui-router, for example inferring templateUrl 
   * based on the state name.
   *
   * When passing only a name, it returns the current (original or decorated) builder
   * function that matches `name`.
   *
   * The builder functions that can be decorated are listed below. Though not all
   * necessarily have a good use case for decoration, that is up to you to decide.
   *
   * In addition, users can attach custom decorators, which will generate new 
   * properties within the state's internal definition. There is currently no clear 
   * use-case for this beyond accessing internal states (i.e. $state.$current), 
   * however, expect this to become increasingly relevant as we introduce additional 
   * meta-programming features.
   *
   * **Warning**: Decorators should not be interdependent because the order of 
   * execution of the builder functions in non-deterministic. Builder functions 
   * should only be dependent on the state definition object and super function.
   *
   *
   * Existing builder functions and current return values:
   *
   * - **parent** `{object}` - returns the parent state object.
   * - **data** `{object}` - returns state data, including any inherited data that is not
   *   overridden by own values (if any).
   * - **url** `{object}` - returns a {link ui.router.util.type:UrlMatcher} or null.
   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
   *   navigable).
   * - **params** `{object}` - returns an array of state params that are ensured to 
   *   be a super-set of parent's params.
   * - **views** `{object}` - returns a views object where each key is an absolute view 
   *   name (i.e. "viewName@stateName") and each value is the config object 
   *   (template, controller) for the view. Even when you don't use the views object 
   *   explicitly on a state config, one is still created for you internally.
   *   So by decorating this builder function you have access to decorating template 
   *   and controller properties.
   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
   *   not including any params defined by ancestor states.
   * - **path** `{string}` - returns the full path from the root down to this state. 
   *   Needed for state activation.
   * - **includes** `{object}` - returns an object that includes every state that 
   *   would pass a '$state.includes()' test.
   *
   * @example
   * <pre>
   * // Override the internal 'views' builder with a function that takes the state
   * // definition, and a reference to the internal function being overridden:
   * $stateProvider.decorator('views', function ($state, parent) {
   *   var result = {},
   *       views = parent(state);
   *
   *   angular.forEach(view, function (config, name) {
   *     var autoName = (state.name + '.' + name).replace('.', '/');
   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
   *     result[name] = config;
   *   });
   *   return result;
   * });
   *
   * $stateProvider.state('home', {
   *   views: {
   *     'contact.list': { controller: 'ListController' },
   *     'contact.item': { controller: 'ItemController' }
   *   }
   * });
   *
   * // ...
   *
   * $state.go('home');
   * // Auto-populates list and item views with /partials/home/contact/list.html,
   * // and /partials/home/contact/item.html, respectively.
   * </pre>
   *
   * @param {string} name The name of the builder function to decorate. 
   * @param {object} func A function that is responsible for decorating the original 
   * builder function. The function receives two parameters:
   *
   *   - `{object}` - state - The state config object.
   *   - `{object}` - super - The original builder function.
   *
   * @return {object} $stateProvider - $stateProvider instance
   */
  this.decorator = decorator;
  function decorator(name, func) {
    /*jshint validthis: true */
    if (isString(name) && !isDefined(func)) {
      return stateBuilder[name];
    }
    if (!isFunction(func) || !isString(name)) {
      return this;
    }
    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
      stateBuilder.$delegates[name] = stateBuilder[name];
    }
    stateBuilder[name] = func;
    return this;
  }

  /**
   * @ngdoc function
   * @name ui.router.state.$stateProvider#state
   * @methodOf ui.router.state.$stateProvider
   *
   * @description
   * Registers a state configuration under a given state name. The stateConfig object
   * has the following acceptable properties.
   *
   * <a id='template'></a>
   *
   * - **`template`** - {string|function=} - html template as a string or a function that returns
   *   an html template as a string which should be used by the uiView directives. This property 
   *   takes precedence over templateUrl.
   *   
   *   If `template` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
   *     applying the current state
   *
   * <a id='templateUrl'></a>
   *
   * - **`templateUrl`** - {string|function=} - path or function that returns a path to an html 
   *   template that should be used by uiView.
   *   
   *   If `templateUrl` is a function, it will be called with the following parameters:
   *
   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
   *     applying the current state
   *
   * <a id='templateProvider'></a>
   *
   * - **`templateProvider`** - {function=} - Provider function that returns HTML content
   *   string.
   *
   * <a id='controller'></a>
   *
   * - **`controller`** - {string|function=} -  Controller fn that should be associated with newly 
   *   related scope or the name of a registered controller if passed as a string.
   *
   * <a id='controllerProvider'></a>
   *
   * - **`controllerProvider`** - {function=} - Injectable provider function that returns
   *   the actual controller or string.
   *
   * <a id='controllerAs'></a>
   * 
   * - **`controllerAs`** – {string=} – A controller alias name. If present the controller will be 
   *   published to scope under the controllerAs name.
   *
   * <a id='resolve'></a>
   *
   * - **`resolve`** - {object.&lt;string, function&gt;=} - An optional map of dependencies which 
   *   should be injected into the controller. If any of these dependencies are promises, 
   *   the router will wait for them all to be resolved or one to be rejected before the 
   *   controller is instantiated. If all the promises are resolved successfully, the values 
   *   of the resolved promises are injected and $stateChangeSuccess event is fired. If any 
   *   of the promises are rejected the $stateChangeError event is fired. The map object is:
   *   
   *   - key - {string}: name of dependency to be injected into controller
   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
   *     it is injected and return value it treated as dependency. If result is a promise, it is 
   *     resolved before its value is injected into controller.
   *
   * <a id='url'></a>
   *
   * - **`url`** - {string=} - A url with optional parameters. When a state is navigated or
   *   transitioned to, the `$stateParams` service will be populated with any 
   *   parameters that were passed.
   *
   * <a id='params'></a>
   *
   * - **`params`** - {object=} - An array of parameter names or regular expressions. Only 
   *   use this within a state if you are not using url. Otherwise you can specify your
   *   parameters within the url. When a state is navigated or transitioned to, the 
   *   $stateParams service will be populated with any parameters that were passed.
   *
   * <a id='views'></a>
   *
   * - **`views`** - {object=} - Use the views property to set up multiple views or to target views
   *   manually/explicitly.
   *
   * <a id='abstract'></a>
   *
   * - **`abstract`** - {boolean=} - An abstract state will never be directly activated, 
   *   but can provide inherited properties to its common children states.
   *
   * <a id='onEnter'></a>
   *
   * - **`onEnter`** - {object=} - Callback function for when a state is entered. Good way
   *   to trigger an action or dispatch an event, such as opening a dialog.
   *
   * <a id='onExit'></a>
   *
   * - **`onExit`** - {object=} - Callback function for when a state is exited. Good way to
   *   trigger an action or dispatch an event, such as opening a dialog.
   *
   * <a id='reloadOnSearch'></a>
   *
   * - **`reloadOnSearch = true`** - {boolean=} - If `false`, will not retrigger the same state 
   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
   *   Useful for when you'd like to modify $location.search() without triggering a reload.
   *
   * <a id='data'></a>
   *
   * - **`data`** - {object=} - Arbitrary data object, useful for custom configuration.
   *
   * @example
   * <pre>
   * // Some state name examples
   *
   * // stateName can be a single top-level name (must be unique).
   * $stateProvider.state("home", {});
   *
   * // Or it can be a nested state name. This state is a child of the 
   * // above "home" state.
   * $stateProvider.state("home.newest", {});
   *
   * // Nest states as deeply as needed.
   * $stateProvider.state("home.newest.abc.xyz.inception", {});
   *
   * // state() returns $stateProvider, so you can chain state declarations.
   * $stateProvider
   *   .state("home", {})
   *   .state("about", {})
   *   .state("contacts", {});
   * </pre>
   *
   * @param {string} name A unique state name, e.g. "home", "about", "contacts". 
   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
   * @param {object} definition State configuration object.
   */
  this.state = state;
  function state(name, definition) {
    /*jshint validthis: true */
    if (isObject(name)) definition = name;
    else definition.name = name;
    registerState(definition);
    return this;
  }

  /**
   * @ngdoc object
   * @name ui.router.state.$state
   *
   * @requires $rootScope
   * @requires $q
   * @requires ui.router.state.$view
   * @requires $injector
   * @requires ui.router.util.$resolve
   * @requires ui.router.state.$stateParams
   *
   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
   * you'd like to test against the current active state.
   * @property {object} current A reference to the state's config object. However 
   * you passed it in. Useful for accessing custom data.
   * @property {object} transition Currently pending transition. A promise that'll 
   * resolve or reject.
   *
   * @description
   * `$state` service is responsible for representing states as well as transitioning
   * between them. It also provides interfaces to ask for current state or even states
   * you're coming from.
   */
  // $urlRouter is injected just to ensure it gets instantiated
  this.$get = $get;
  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$location', '$urlRouter', '$browser'];
  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $location,   $urlRouter,   $browser) {

    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
    var TransitionPrevented = $q.reject(new Error('transition prevented'));
    var TransitionAborted = $q.reject(new Error('transition aborted'));
    var TransitionFailed = $q.reject(new Error('transition failed'));
    var currentLocation = $location.url();
    var baseHref = $browser.baseHref();

    function syncUrl() {
      if ($location.url() !== currentLocation) {
        $location.url(currentLocation);
        $location.replace();
      }
    }

    root.locals = { resolve: null, globals: { $stateParams: {} } };
    $state = {
      params: {},
      current: root.self,
      $current: root,
      transition: null
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#reload
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method that force reloads the current state. All resolves are re-resolved, events are not re-fired, 
     * and controllers reinstantiated (bug with controllers reinstantiating right now, fixing soon).
     *
     * @example
     * <pre>
     * var app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * </pre>
     *
     * `reload()` is just an alias for:
     * <pre>
     * $state.transitionTo($state.current, $stateParams, { 
     *   reload: true, inherit: false, notify: false 
     * });
     * </pre>
     */
    $state.reload = function reload() {
      $state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: false });
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#go
     * @methodOf ui.router.state.$state
     *
     * @description
     * Convenience method for transitioning to a new state. `$state.go` calls 
     * `$state.transitionTo` internally but automatically sets options to 
     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
     * This allows you to easily use an absolute or relative to path and specify 
     * only the parameters you'd like to update (while letting unspecified parameters 
     * inherit from the currently active ancestor states).
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * </pre>
     * <img src='../ngdoc_assets/StateGoExamples.png'/>
     *
     * @param {string} to Absolute state name or relative state path. Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to a parent state
     * - `$state.go('^.sibling')` - will go to a sibling state
     * - `$state.go('.child.grandchild')` - will go to grandchild state
     *
     * @param {object=} params A map of the parameters that will be sent to the state, 
     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
     * defined parameters. This allows, for example, going to a sibling state that shares parameters
     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
     * will get you all current parameters, etc.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition.
     *
     * Possible success values:
     *
     * - $state.current
     *
     * <br/>Possible rejection values:
     *
     * - 'transition superseded' - when a newer transition has been started after this one
     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
     *   when a `$stateNotFound` `event.retry` promise errors.
     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
     * - *resolve error* - when an error has occurred with a `resolve`
     *
     */
    $state.go = function go(to, params, options) {
      return this.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#transitionTo
     * @methodOf ui.router.state.$state
     *
     * @description
     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
     *
     * @example
     * <pre>
     * var app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * </pre>
     *
     * @param {string} to State name.
     * @param {object=} toParams A map of the parameters that will be sent to the state,
     * will populate $stateParams.
     * @param {object=} options Options object. The options are:
     *
     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
     *    use this when you want to force a reload when *everything* is the same, including search params.
     *
     * @returns {promise} A promise representing the state of the new transition. See
     * {@link ui.router.state.$state#methods_go $state.go}.
     */
    $state.transitionTo = function transitionTo(to, toParams, options) {
      toParams = toParams || {};
      options = extend({
        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
      }, options || {});

      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
      var evt, toState = findState(to, options.relative);

      if (!isDefined(toState)) {
        // Broadcast not found event and abort the transition if prevented
        var redirect = { to: to, toParams: toParams, options: options };

        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateNotFound
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when a requested state **cannot be found** using the provided state name during transition.
         * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
         * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
         * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
         * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
         *
         * @param {Object} event Event object.
         * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
         * @param {State} fromState Current state object.
         * @param {Object} fromParams Current state params.
         *
         * @example
         *
         * <pre>
         * // somewhere, assume lazy.state has not been defined
         * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
         *
         * // somewhere else
         * $scope.$on('$stateNotFound',
         * function(event, unfoundState, fromState, fromParams){
         *     console.log(unfoundState.to); // "lazy.state"
         *     console.log(unfoundState.toParams); // {a:1, b:2}
         *     console.log(unfoundState.options); // {inherit:false} + default options
         * })
         * </pre>
         */
        evt = $rootScope.$broadcast('$stateNotFound', redirect, from.self, fromParams);
        if (evt.defaultPrevented) {
          syncUrl();
          return TransitionAborted;
        }

        // Allow the handler to return a promise to defer state lookup retry
        if (evt.retry) {
          if (options.$retry) {
            syncUrl();
            return TransitionFailed;
          }
          var retryTransition = $state.transition = $q.when(evt.retry);
          retryTransition.then(function() {
            if (retryTransition !== $state.transition) return TransitionSuperseded;
            redirect.options.$retry = true;
            return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
          }, function() {
            return TransitionAborted;
          });
          syncUrl();
          return retryTransition;
        }

        // Always retry once if the $stateNotFound was not prevented
        // (handles either redirect changed or state lazy-definition)
        to = redirect.to;
        toParams = redirect.toParams;
        options = redirect.options;
        toState = findState(to, options.relative);
        if (!isDefined(toState)) {
          if (options.relative) throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
          throw new Error("No such state '" + to + "'");
        }
      }
      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
      to = toState;

      var toPath = to.path;

      // Starting from the root of the path, keep all levels that haven't changed
      var keep, state, locals = root.locals, toLocals = [];
      for (keep = 0, state = toPath[keep];
           state && state === fromPath[keep] && equalForKeys(toParams, fromParams, state.ownParams) && !options.reload;
           keep++, state = toPath[keep]) {
        locals = toLocals[keep] = state.locals;
      }

      // If we're going to the same state and all locals are kept, we've got nothing to do.
      // But clear 'transition', as we still want to cancel any other pending transitions.
      // TODO: We may not want to bump 'transition' if we're called from a location change that we've initiated ourselves,
      // because we might accidentally abort a legitimate transition initiated from code?
      if (shouldTriggerReload(to, from, locals, options) ) {
        if ( to.self.reloadOnSearch !== false )
          syncUrl();
        $state.transition = null;
        return $q.when($state.current);
      }

      // Normalize/filter parameters before we pass them to event handlers etc.
      toParams = normalize(to.params, toParams || {});

      // Broadcast start event and cancel the transition if requested
      if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeStart
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when the state transition **begins**. You can use `event.preventDefault()`
         * to prevent the transition from happening and then the transition promise will be
         * rejected with a `'transition prevented'` value.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         *
         * @example
         *
         * <pre>
         * $rootScope.$on('$stateChangeStart',
         * function(event, toState, toParams, fromState, fromParams){
         *     event.preventDefault();
         *     // transitionTo() promise will be rejected with
         *     // a 'transition prevented' error
         * })
         * </pre>
         */
        evt = $rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams);
        if (evt.defaultPrevented) {
          syncUrl();
          return TransitionPrevented;
        }
      }

      // Resolve locals for the remaining states, but don't update any global state just
      // yet -- if anything fails to resolve the current state needs to remain untouched.
      // We also set up an inheritance chain for the locals here. This allows the view directive
      // to quickly look up the correct definition for each view in the current state. Even
      // though we create the locals object itself outside resolveState(), it is initially
      // empty and gets filled asynchronously. We need to keep track of the promise for the
      // (fully resolved) current locals, and pass this down the chain.
      var resolved = $q.when(locals);
      for (var l=keep; l<toPath.length; l++, state=toPath[l]) {
        locals = toLocals[l] = inherit(locals);
        resolved = resolveState(state, toParams, state===to, resolved, locals);
      }

      // Once everything is resolved, we are ready to perform the actual transition
      // and return a promise for the new state. We also keep track of what the
      // current promise is, so that we can detect overlapping transitions and
      // keep only the outcome of the last transition.
      var transition = $state.transition = resolved.then(function () {
        var l, entering, exiting;

        if ($state.transition !== transition) return TransitionSuperseded;

        // Exit 'from' states not kept
        for (l=fromPath.length-1; l>=keep; l--) {
          exiting = fromPath[l];
          if (exiting.self.onExit) {
            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
          }
          exiting.locals = null;
        }

        // Enter 'to' states not kept
        for (l=keep; l<toPath.length; l++) {
          entering = toPath[l];
          entering.locals = toLocals[l];
          if (entering.self.onEnter) {
            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
          }
        }

        // Run it again, to catch any transitions in callbacks
        if ($state.transition !== transition) return TransitionSuperseded;

        // Update globals in $state
        $state.$current = to;
        $state.current = to.self;
        $state.params = toParams;
        copy($state.params, $stateParams);
        $state.transition = null;

        // Update $location
        var toNav = to.navigable;
        if (options.location && toNav) {
          $location.url(toNav.url.format(toNav.locals.globals.$stateParams));

          if (options.location === 'replace') {
            $location.replace();
          }
        }

        if (options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeSuccess
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired once the state transition is **complete**.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         */
          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
        }
        currentLocation = $location.url();

        return $state.current;
      }, function (error) {
        if ($state.transition !== transition) return TransitionSuperseded;

        $state.transition = null;
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$stateChangeError
         * @eventOf ui.router.state.$state
         * @eventType broadcast on root scope
         * @description
         * Fired when an **error occurs** during transition. It's important to note that if you
         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
         * they will not throw traditionally. You must listen for this $stateChangeError event to
         * catch **ALL** errors.
         *
         * @param {Object} event Event object.
         * @param {State} toState The state being transitioned to.
         * @param {Object} toParams The params supplied to the `toState`.
         * @param {State} fromState The current state, pre-transition.
         * @param {Object} fromParams The params supplied to the `fromState`.
         * @param {Error} error The resolve error object.
         */
        $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
        syncUrl();

        return $q.reject(error);
      });

      return transition;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#is
     * @methodOf ui.router.state.$state
     *
     * @description
     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
     * but only checks for the full state name. If params is supplied then it will be 
     * tested for strict equality against the current active params object, so all params 
     * must match with none missing and no extras.
     *
     * @example
     * <pre>
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     *
     * // everything else would return false
     * </pre>
     *
     * @param {string|object} stateName The state name or state object you'd like to check.
     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like 
     * to test against the current active state.
     * @returns {boolean} Returns true if it is the state.
     */
    $state.is = function is(stateOrName, params) {
      var state = findState(stateOrName);

      if (!isDefined(state)) {
        return undefined;
      }

      if ($state.$current !== state) {
        return false;
      }

      return isDefined(params) && params !== null ? angular.equals($stateParams, params) : true;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#includes
     * @methodOf ui.router.state.$state
     *
     * @description
     * A method to determine if the current active state is equal to or is the child of the 
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item';
     *
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     * </pre>
     *
     * @description
     * Basic globing patterns will also work.
     *
     * @example
     * <pre>
     * $state.$current.name = 'contacts.details.item.url';
     *
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * </pre>
     *
     * @param {string} stateOrName A partial name to be searched for within the current state name.
     * @param {object} params A param object, e.g. `{sectionId: section.id}`, 
     * that you'd like to test against the current active state.
     * @returns {boolean} Returns true if it does include the state
     */

    $state.includes = function includes(stateOrName, params) {
      if (isString(stateOrName) && isGlob(stateOrName)) {
        if (doesStateMatchGlob(stateOrName)) {
          stateOrName = $state.$current.name;
        } else {
          return false;
        }
      }

      var state = findState(stateOrName);
      if (!isDefined(state)) {
        return undefined;
      }

      if (!isDefined($state.$current.includes[state.name])) {
        return false;
      }

      var validParams = true;
      angular.forEach(params, function(value, key) {
        if (!isDefined($stateParams[key]) || $stateParams[key] !== value) {
          validParams = false;
        }
      });
      return validParams;
    };


    /**
     * @ngdoc function
     * @name ui.router.state.$state#href
     * @methodOf ui.router.state.$state
     *
     * @description
     * A url generation method that returns the compiled url for the given state populated with the given params.
     *
     * @example
     * <pre>
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * </pre>
     *
     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
     * @param {object=} params An object of parameter values to fill the state's required parameters.
     * @param {object=} options Options object. The options are:
     *
     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
     *    ancestor with a valid url).
     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
     *    defines which state to be relative from.
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     * 
     * @returns {string} compiled state url
     */
    $state.href = function href(stateOrName, params, options) {
      options = extend({ lossy: true, inherit: false, absolute: false, relative: $state.$current }, options || {});
      var state = findState(stateOrName, options.relative);
      if (!isDefined(state)) return null;

      params = inheritParams($stateParams, params || {}, $state.$current, state);
      var nav = (state && options.lossy) ? state.navigable : state;
      var url = (nav && nav.url) ? nav.url.format(normalize(state.params, params || {})) : null;
      if (!$locationProvider.html5Mode() && url) {
        url = "#" + $locationProvider.hashPrefix() + url;
      }

      if (baseHref !== '/') {
        if ($locationProvider.html5Mode()) {
          url = baseHref.slice(0, -1) + url;
        } else if (options.absolute){
          url = baseHref.slice(1) + url;
        }
      }

      if (options.absolute && url) {
        url = $location.protocol() + '://' + 
              $location.host() + 
              ($location.port() == 80 || $location.port() == 443 ? '' : ':' + $location.port()) + 
              (!$locationProvider.html5Mode() && url ? '/' : '') + 
              url;
      }
      return url;
    };

    /**
     * @ngdoc function
     * @name ui.router.state.$state#get
     * @methodOf ui.router.state.$state
     *
     * @description
     * Returns the state configuration object for any specific state or all states.
     *
     * @param {string|object=} stateOrName If provided, will only get the config for
     * the requested state. If not provided, returns an array of ALL state configs.
     * @returns {object|array} State configuration object or array of all objects.
     */
    $state.get = function (stateOrName, context) {
      if (!isDefined(stateOrName)) {
        var list = [];
        forEach(states, function(state) { list.push(state.self); });
        return list;
      }
      var state = findState(stateOrName, context);
      return (state && state.self) ? state.self : null;
    };

    function resolveState(state, params, paramsAreFiltered, inherited, dst) {
      // Make a restricted $stateParams with only the parameters that apply to this state if
      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
      // we also need $stateParams to be available for any $injector calls we make during the
      // dependency resolution process.
      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params, params);
      var locals = { $stateParams: $stateParams };

      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
      // We're also including $stateParams in this; that way the parameters are restricted
      // to the set that should be visible to the state, and are independent of when we update
      // the global $state and $stateParams values.
      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
      var promises = [ dst.resolve.then(function (globals) {
        dst.globals = globals;
      }) ];
      if (inherited) promises.push(inherited);

      // Resolve template and dependencies for all views.
      forEach(state.views, function (view, name) {
        var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
        injectables.$template = [ function () {
          return $view.load(name, { view: view, locals: locals, params: $stateParams, notify: false }) || '';
        }];

        promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function (result) {
          // References to the controller (only instantiated at link time)
          if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
            var injectLocals = angular.extend({}, injectables, locals);
            result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
          } else {
            result.$$controller = view.controller;
          }
          // Provide access to the state itself for internal use
          result.$$state = state;
          result.$$controllerAs = view.controllerAs;
          dst[name] = result;
        }));
      });

      // Wait for all the promises and then return the activation object
      return $q.all(promises).then(function (values) {
        return dst;
      });
    }

    return $state;
  }

  function shouldTriggerReload(to, from, locals, options) {
    if ( to === from && ((locals === from.locals && !options.reload) || (to.self.reloadOnSearch === false)) ) {
      return true;
    }
  }
}

angular.module('ui.router.state')
  .value('$stateParams', {})
  .provider('$state', $StateProvider);


$ViewProvider.$inject = [];
function $ViewProvider() {

  this.$get = $get;
  /**
   * @ngdoc object
   * @name ui.router.state.$view
   *
   * @requires ui.router.util.$templateFactory
   * @requires $rootScope
   *
   * @description
   *
   */
  $get.$inject = ['$rootScope', '$templateFactory'];
  function $get(   $rootScope,   $templateFactory) {
    return {
      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
      /**
       * @ngdoc function
       * @name ui.router.state.$view#load
       * @methodOf ui.router.state.$view
       *
       * @description
       *
       * @param {string} name name
       * @param {object} options option object.
       */
      load: function load(name, options) {
        var result, defaults = {
          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
        };
        options = extend(defaults, options);

        if (options.view) {
          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
        }
        if (result && options.notify) {
        /**
         * @ngdoc event
         * @name ui.router.state.$state#$viewContentLoading
         * @eventOf ui.router.state.$view
         * @eventType broadcast on root scope
         * @description
         *
         * Fired once the view **begins loading**, *before* the DOM is rendered.
         *
         * @param {Object} event Event object.
         * @param {Object} viewConfig The view config properties (template, controller, etc).
         *
         * @example
         *
         * <pre>
         * $scope.$on('$viewContentLoading',
         * function(event, viewConfig){
         *     // Access to all the view config properties.
         *     // and one special property 'targetView'
         *     // viewConfig.targetView
         * });
         * </pre>
         */
          $rootScope.$broadcast('$viewContentLoading', options);
        }
        return result;
      }
    };
  }
}

angular.module('ui.router.state').provider('$view', $ViewProvider);

/**
 * @ngdoc object
 * @name ui.router.state.$uiViewScrollProvider
 *
 * @description
 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
 */
function $ViewScrollProvider() {

  var useAnchorScroll = false;

  /**
   * @ngdoc function
   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
   * @methodOf ui.router.state.$uiViewScrollProvider
   *
   * @description
   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
   * scrolling based on the url anchor.
   */
  this.useAnchorScroll = function () {
    useAnchorScroll = true;
  };

  /**
   * @ngdoc object
   * @name ui.router.state.$uiViewScroll
   *
   * @requires $anchorScroll
   * @requires $timeout
   *
   * @description
   * When called with a jqLite element, it scrolls the element into view (after a
   * `$timeout` so the DOM has time to refresh).
   *
   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
   */
  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
    if (useAnchorScroll) {
      return $anchorScroll;
    }

    return function ($element) {
      $timeout(function () {
        $element[0].scrollIntoView();
      }, 0, false);
    };
  }];
}

angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-view
 *
 * @requires ui.router.state.$state
 * @requires $compile
 * @requires $controller
 * @requires $injector
 * @requires ui.router.state.$uiViewScroll
 * @requires $document
 *
 * @restrict ECA
 *
 * @description
 * The ui-view directive tells $state where to place your templates.
 *
 * @param {string=} ui-view A view name. The name should be unique amongst the other views in the
 * same state. You can have views of the same name that live in different states.
 *
 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
 * scroll ui-view elements into view when they are populated during a state activation.
 *
 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
 *
 * @param {string=} onload Expression to evaluate whenever the view updates.
 * 
 * @example
 * A view can be unnamed or named. 
 * <pre>
 * <!-- Unnamed -->
 * <div ui-view></div> 
 * 
 * <!-- Named -->
 * <div ui-view="viewName"></div>
 * </pre>
 *
 * You can only have one unnamed view within any template (or root html). If you are only using a 
 * single view and it is unnamed then you can populate it like so:
 * <pre>
 * <div ui-view></div> 
 * $stateProvider.state("home", {
 *   template: "<h1>HELLO!</h1>"
 * })
 * </pre>
 * 
 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
 * config property, by name, in this case an empty name:
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * But typically you'll only use the views property if you name your view or have more than one view 
 * in the same template. There's not really a compelling reason to name a view if its the only one, 
 * but you could if you wanted, like so:
 * <pre>
 * <div ui-view="main"></div>
 * </pre> 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "main": {
 *       template: "<h1>HELLO!</h1>"
 *     }
 *   }    
 * })
 * </pre>
 * 
 * Really though, you'll use views to set up multiple views:
 * <pre>
 * <div ui-view></div>
 * <div ui-view="chart"></div> 
 * <div ui-view="data"></div> 
 * </pre>
 * 
 * <pre>
 * $stateProvider.state("home", {
 *   views: {
 *     "": {
 *       template: "<h1>HELLO!</h1>"
 *     },
 *     "chart": {
 *       template: "<chart_thing/>"
 *     },
 *     "data": {
 *       template: "<data_thing/>"
 *     }
 *   }    
 * })
 * </pre>
 *
 * Examples for `autoscroll`:
 *
 * <pre>
 * <!-- If autoscroll present with no expression,
 *      then scroll ui-view into view -->
 * <ui-view autoscroll/>
 *
 * <!-- If autoscroll present with valid expression,
 *      then scroll ui-view into view if expression evaluates to true -->
 * <ui-view autoscroll='true'/>
 * <ui-view autoscroll='false'/>
 * <ui-view autoscroll='scopeVariable'/>
 * </pre>
 */
$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll'];
function $ViewDirective(   $state,   $injector,   $uiViewScroll) {

  function getService() {
    return ($injector.has) ? function(service) {
      return $injector.has(service) ? $injector.get(service) : null;
    } : function(service) {
      try {
        return $injector.get(service);
      } catch (e) {
        return null;
      }
    };
  }

  var service = getService(),
      $animator = service('$animator'),
      $animate = service('$animate');

  // Returns a set of DOM manipulation functions based on which Angular version
  // it should use
  function getRenderer(attrs, scope) {
    var statics = function() {
      return {
        enter: function (element, target, cb) { target.after(element); cb(); },
        leave: function (element, cb) { element.remove(); cb(); }
      };
    };

    if ($animate) {
      return {
        enter: function(element, target, cb) { $animate.enter(element, null, target, cb); },
        leave: function(element, cb) { $animate.leave(element, cb); }
      };
    }

    if ($animator) {
      var animate = $animator && $animator(scope, attrs);

      return {
        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
        leave: function(element, cb) { animate.leave(element); cb(); }
      };
    }

    return statics();
  }

  var directive = {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    compile: function (tElement, tAttrs, $transclude) {
      return function (scope, $element, attrs) {
        var previousEl, currentEl, currentScope, latestLocals,
            onloadExp     = attrs.onload || '',
            autoScrollExp = attrs.autoscroll,
            renderer      = getRenderer(attrs, scope);

        scope.$on('$stateChangeSuccess', function() {
          updateView(false);
        });
        scope.$on('$viewContentLoading', function() {
          updateView(false);
        });

        updateView(true);

        function cleanupLastView() {
          if (previousEl) {
            previousEl.remove();
            previousEl = null;
          }

          if (currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }

          if (currentEl) {
            renderer.leave(currentEl, function() {
              previousEl = null;
            });

            previousEl = currentEl;
            currentEl = null;
          }
        }

        function updateView(firstTime) {
          var newScope        = scope.$new(),
              name            = currentEl && currentEl.data('$uiViewName'),
              previousLocals  = name && $state.$current && $state.$current.locals[name];

          if (!firstTime && previousLocals === latestLocals) return; // nothing to do

          var clone = $transclude(newScope, function(clone) {
            renderer.enter(clone, $element, function onUiViewEnter() {
              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                $uiViewScroll(clone);
              }
            });
            cleanupLastView();
          });

          latestLocals = $state.$current.locals[clone.data('$uiViewName')];

          currentEl = clone;
          currentScope = newScope;
          /**
           * @ngdoc event
           * @name ui.router.state.directive:ui-view#$viewContentLoaded
           * @eventOf ui.router.state.directive:ui-view
           * @eventType emits on ui-view directive scope
           * @description           *
           * Fired once the view is **loaded**, *after* the DOM is rendered.
           *
           * @param {Object} event Event object.
           */
          currentScope.$emit('$viewContentLoaded');
          currentScope.$eval(onloadExp);
        }
      };
    }
  };

  return directive;
}

$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state'];
function $ViewDirectiveFill ($compile, $controller, $state) {
  return {
    restrict: 'ECA',
    priority: -400,
    compile: function (tElement) {
      var initial = tElement.html();
      return function (scope, $element, attrs) {
        var name      = attrs.uiView || attrs.name || '',
            inherited = $element.inheritedData('$uiView');

        if (name.indexOf('@') < 0) {
          name = name + '@' + (inherited ? inherited.state.name : '');
        }

        $element.data('$uiViewName', name);

        var current = $state.$current,
            locals  = current && current.locals[name];

        if (! locals) {
          return;
        }

        $element.data('$uiView', { name: name, state: locals.$$state });
        $element.html(locals.$template ? locals.$template : initial);

        var link = $compile($element.contents());

        if (locals.$$controller) {
          locals.$scope = scope;
          var controller = $controller(locals.$$controller, locals);
          if (locals.$$controllerAs) {
            scope[locals.$$controllerAs] = controller;
          }
          $element.data('$ngControllerController', controller);
          $element.children().data('$ngControllerController', controller);
        }

        link(scope);
      };
    }
  };
}

angular.module('ui.router.state').directive('uiView', $ViewDirective);
angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

function parseStateRef(ref) {
  var parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
  return { state: parsed[1], paramExpr: parsed[3] || null };
}

function stateContext(el) {
  var stateData = el.parent().inheritedData('$uiView');

  if (stateData && stateData.state && stateData.state.name) {
    return stateData.state;
  }
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref
 *
 * @requires ui.router.state.$state
 * @requires $timeout
 *
 * @restrict A
 *
 * @description
 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
 * URL, the directive will automatically generate & update the `href` attribute via 
 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
 * the link will trigger a state transition with optional parameters. 
 *
 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
 * handled natively by the browser.
 *
 * You can also use relative state paths within ui-sref, just like the relative 
 * paths passed to `$state.go()`. You just need to be aware that the path is relative
 * to the state that the link lives in, in other words the state that loaded the 
 * template containing the link.
 *
 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
 * and `reload`.
 *
 * @example
 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
 * following template:
 * <pre>
 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
 *     </li>
 * </ul>
 * </pre>
 * 
 * Then the compiled html would be (assuming Html5Mode is off):
 * <pre>
 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a>
 * 
 * <ul>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
 *     </li>
 *     <li ng-repeat="contact in contacts">
 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
 *     </li>
 * </ul>
 *
 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
 * </pre>
 *
 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
 */
$StateRefDirective.$inject = ['$state', '$timeout'];
function $StateRefDirective($state, $timeout) {
  var allowedOptions = ['location', 'inherit', 'reload'];

  return {
    restrict: 'A',
    require: '?^uiSrefActive',
    link: function(scope, element, attrs, uiSrefActive) {
      var ref = parseStateRef(attrs.uiSref);
      var params = null, url = null, base = stateContext(element) || $state.$current;
      var isForm = element[0].nodeName === "FORM";
      var attr = isForm ? "action" : "href", nav = true;

      var options = {
        relative: base
      };
      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};
      angular.forEach(allowedOptions, function(option) {
        if (option in optionsOverride) {
          options[option] = optionsOverride[option];
        }
      });

      var update = function(newVal) {
        if (newVal) params = newVal;
        if (!nav) return;

        var newHref = $state.href(ref.state, params, options);

        if (uiSrefActive) {
          uiSrefActive.$$setStateInfo(ref.state, params);
        }
        if (!newHref) {
          nav = false;
          return false;
        }
        element[0][attr] = newHref;
      };

      if (ref.paramExpr) {
        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
          if (newVal !== params) update(newVal);
        }, true);
        params = scope.$eval(ref.paramExpr);
      }
      update();

      if (isForm) return;

      element.bind("click", function(e) {
        var button = e.which || e.button;
        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
          $timeout(function() {
            $state.go(ref.state, params, options);
          });
          e.preventDefault();
        }
      });
    }
  };
}

/**
 * @ngdoc directive
 * @name ui.router.state.directive:ui-sref-active
 *
 * @requires ui.router.state.$state
 * @requires ui.router.state.$stateParams
 * @requires $interpolate
 *
 * @restrict A
 *
 * @description
 * A directive working alongside ui-sref to add classes to an element when the 
 * related ui-sref directive's state is active, and removing them when it is inactive.
 * The primary use-case is to simplify the special appearance of navigation menus 
 * relying on `ui-sref`, by having the "active" state's menu button appear different,
 * distinguishing it from the inactive menu items.
 *
 * @example
 * Given the following template:
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item">
 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 * 
 * When the app state is "app.user", and contains the state parameter "user" with value "bilbobaggins", 
 * the resulting HTML will appear as (note the 'active' class):
 * <pre>
 * <ul>
 *   <li ui-sref-active="active" class="item active">
 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
 *   </li>
 * </ul>
 * </pre>
 * 
 * The class name is interpolated **once** during the directives link time (any further changes to the 
 * interpolated value are ignored). 
 * 
 * Multiple classes may be specified in a space-separated format:
 * <pre>
 * <ul>
 *   <li ui-sref-active='class1 class2 class3'>
 *     <a ui-sref="app.user">link</a>
 *   </li>
 * </ul>
 * </pre>
 */
$StateActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
function $StateActiveDirective($state, $stateParams, $interpolate) {
  return {
    restrict: "A",
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      var state, params, activeClass;

      // There probably isn't much point in $observing this
      activeClass = $interpolate($attrs.uiSrefActive || '', false)($scope);

      // Allow uiSref to communicate with uiSrefActive
      this.$$setStateInfo = function(newState, newParams) {
        state = $state.get(newState, stateContext($element));
        params = newParams;
        update();
      };

      $scope.$on('$stateChangeSuccess', update);

      // Update route state
      function update() {
        if ($state.$current.self === state && matchesParams()) {
          $element.addClass(activeClass);
        } else {
          $element.removeClass(activeClass);
        }
      }

      function matchesParams() {
        return !params || equalForKeys(params, $stateParams);
      }
    }]
  };
}

angular.module('ui.router.state')
  .directive('uiSref', $StateRefDirective)
  .directive('uiSrefActive', $StateActiveDirective);

/**
 * @ngdoc filter
 * @name ui.router.state.filter:isState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
 */
$IsStateFilter.$inject = ['$state'];
function $IsStateFilter($state) {
  return function(state) {
    return $state.is(state);
  };
}

/**
 * @ngdoc filter
 * @name ui.router.state.filter:includedByState
 *
 * @requires ui.router.state.$state
 *
 * @description
 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
 */
$IncludedByStateFilter.$inject = ['$state'];
function $IncludedByStateFilter($state) {
  return function(state) {
    return $state.includes(state);
  };
}

angular.module('ui.router.state')
  .filter('isState', $IsStateFilter)
  .filter('includedByState', $IncludedByStateFilter);

/*
 * @ngdoc object
 * @name ui.router.compat.$routeProvider
 *
 * @requires ui.router.state.$stateProvider
 * @requires ui.router.router.$urlRouterProvider
 *
 * @description
 * `$routeProvider` of the `ui.router.compat` module overwrites the existing
 * `routeProvider` from the core. This is done to provide compatibility between
 * the UI Router and the core router.
 *
 * It also provides a `when()` method to register routes that map to certain urls.
 * Behind the scenes it actually delegates either to 
 * {@link ui.router.router.$urlRouterProvider $urlRouterProvider} or to the 
 * {@link ui.router.state.$stateProvider $stateProvider} to postprocess the given 
 * router definition object.
 */
$RouteProvider.$inject = ['$stateProvider', '$urlRouterProvider'];
function $RouteProvider(  $stateProvider,    $urlRouterProvider) {

  var routes = [];

  onEnterRoute.$inject = ['$$state'];
  function onEnterRoute(   $$state) {
    /*jshint validthis: true */
    this.locals = $$state.locals.globals;
    this.params = this.locals.$stateParams;
  }

  function onExitRoute() {
    /*jshint validthis: true */
    this.locals = null;
    this.params = null;
  }

  this.when = when;
  /*
   * @ngdoc function
   * @name ui.router.compat.$routeProvider#when
   * @methodOf ui.router.compat.$routeProvider
   *
   * @description
   * Registers a route with a given route definition object. The route definition
   * object has the same interface the angular core route definition object has.
   * 
   * @example
   * <pre>
   * var app = angular.module('app', ['ui.router.compat']);
   *
   * app.config(function ($routeProvider) {
   *   $routeProvider.when('home', {
   *     controller: function () { ... },
   *     templateUrl: 'path/to/template'
   *   });
   * });
   * </pre>
   *
   * @param {string} url URL as string
   * @param {object} route Route definition object
   *
   * @return {object} $routeProvider - $routeProvider instance
   */
  function when(url, route) {
    /*jshint validthis: true */
    if (route.redirectTo != null) {
      // Redirect, configure directly on $urlRouterProvider
      var redirect = route.redirectTo, handler;
      if (isString(redirect)) {
        handler = redirect; // leave $urlRouterProvider to handle
      } else if (isFunction(redirect)) {
        // Adapt to $urlRouterProvider API
        handler = function (params, $location) {
          return redirect(params, $location.path(), $location.search());
        };
      } else {
        throw new Error("Invalid 'redirectTo' in when()");
      }
      $urlRouterProvider.when(url, handler);
    } else {
      // Regular route, configure as state
      $stateProvider.state(inherit(route, {
        parent: null,
        name: 'route:' + encodeURIComponent(url),
        url: url,
        onEnter: onEnterRoute,
        onExit: onExitRoute
      }));
    }
    routes.push(route);
    return this;
  }

  /*
   * @ngdoc object
   * @name ui.router.compat.$route
   *
   * @requires ui.router.state.$state
   * @requires $rootScope
   * @requires $routeParams
   *
   * @property {object} routes - Array of registered routes.
   * @property {object} params - Current route params as object.
   * @property {string} current - Name of the current route.
   *
   * @description
   * The `$route` service provides interfaces to access defined routes. It also let's
   * you access route params through `$routeParams` service, so you have fully
   * control over all the stuff you would actually get from angular's core `$route`
   * service.
   */
  this.$get = $get;
  $get.$inject = ['$state', '$rootScope', '$routeParams'];
  function $get(   $state,   $rootScope,   $routeParams) {

    var $route = {
      routes: routes,
      params: $routeParams,
      current: undefined
    };

    function stateAsRoute(state) {
      return (state.name !== '') ? state : undefined;
    }

    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
      $rootScope.$broadcast('$routeChangeStart', stateAsRoute(to), stateAsRoute(from));
    });

    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
      $route.current = stateAsRoute(to);
      $rootScope.$broadcast('$routeChangeSuccess', stateAsRoute(to), stateAsRoute(from));
      copy(toParams, $route.params);
    });

    $rootScope.$on('$stateChangeError', function (ev, to, toParams, from, fromParams, error) {
      $rootScope.$broadcast('$routeChangeError', stateAsRoute(to), stateAsRoute(from), error);
    });

    return $route;
  }
}

angular.module('ui.router.compat')
  .provider('$route', $RouteProvider)
  .directive('ngView', $ViewDirective);
})(window, window.angular);
/**
 * @license AngularJS v1.2.21
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {

'use strict';

/**
 * @ngdoc object
 * @name angular.mock
 * @description
 *
 * Namespace from 'angular-mocks.js' which contains testing related code.
 */
angular.mock = {};

/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 *
 * @description
 * This service is a mock implementation of {@link ng.$browser}. It provides fake
 * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
 * cookies, etc...
 *
 * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
 * that there are several helper methods available which can be used in tests.
 */
angular.mock.$BrowserProvider = function() {
  this.$get = function() {
    return new angular.mock.$Browser();
  };
};

angular.mock.$Browser = function() {
  var self = this;

  this.isMock = true;
  self.$$url = "http://server/";
  self.$$lastUrl = self.$$url; // used by url polling fn
  self.pollFns = [];

  // TODO(vojta): remove this temporary api
  self.$$completeOutstandingRequest = angular.noop;
  self.$$incOutstandingRequestCount = angular.noop;


  // register url polling fn

  self.onUrlChange = function(listener) {
    self.pollFns.push(
      function() {
        if (self.$$lastUrl != self.$$url) {
          self.$$lastUrl = self.$$url;
          listener(self.$$url);
        }
      }
    );

    return listener;
  };

  self.cookieHash = {};
  self.lastCookieHash = {};
  self.deferredFns = [];
  self.deferredNextId = 0;

  self.defer = function(fn, delay) {
    delay = delay || 0;
    self.deferredFns.push({time:(self.defer.now + delay), fn:fn, id: self.deferredNextId});
    self.deferredFns.sort(function(a,b){ return a.time - b.time;});
    return self.deferredNextId++;
  };


  /**
   * @name $browser#defer.now
   *
   * @description
   * Current milliseconds mock time.
   */
  self.defer.now = 0;


  self.defer.cancel = function(deferId) {
    var fnIndex;

    angular.forEach(self.deferredFns, function(fn, index) {
      if (fn.id === deferId) fnIndex = index;
    });

    if (fnIndex !== undefined) {
      self.deferredFns.splice(fnIndex, 1);
      return true;
    }

    return false;
  };


  /**
   * @name $browser#defer.flush
   *
   * @description
   * Flushes all pending requests and executes the defer callbacks.
   *
   * @param {number=} number of milliseconds to flush. See {@link #defer.now}
   */
  self.defer.flush = function(delay) {
    if (angular.isDefined(delay)) {
      self.defer.now += delay;
    } else {
      if (self.deferredFns.length) {
        self.defer.now = self.deferredFns[self.deferredFns.length-1].time;
      } else {
        throw new Error('No deferred tasks to be flushed');
      }
    }

    while (self.deferredFns.length && self.deferredFns[0].time <= self.defer.now) {
      self.deferredFns.shift().fn();
    }
  };

  self.$$baseHref = '';
  self.baseHref = function() {
    return this.$$baseHref;
  };
};
angular.mock.$Browser.prototype = {

/**
  * @name $browser#poll
  *
  * @description
  * run all fns in pollFns
  */
  poll: function poll() {
    angular.forEach(this.pollFns, function(pollFn){
      pollFn();
    });
  },

  addPollFn: function(pollFn) {
    this.pollFns.push(pollFn);
    return pollFn;
  },

  url: function(url, replace) {
    if (url) {
      this.$$url = url;
      return this;
    }

    return this.$$url;
  },

  cookies:  function(name, value) {
    if (name) {
      if (angular.isUndefined(value)) {
        delete this.cookieHash[name];
      } else {
        if (angular.isString(value) &&       //strings only
            value.length <= 4096) {          //strict cookie storage limits
          this.cookieHash[name] = value;
        }
      }
    } else {
      if (!angular.equals(this.cookieHash, this.lastCookieHash)) {
        this.lastCookieHash = angular.copy(this.cookieHash);
        this.cookieHash = angular.copy(this.cookieHash);
      }
      return this.cookieHash;
    }
  },

  notifyWhenNoOutstandingRequests: function(fn) {
    fn();
  }
};


/**
 * @ngdoc provider
 * @name $exceptionHandlerProvider
 *
 * @description
 * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
 * passed into the `$exceptionHandler`.
 */

/**
 * @ngdoc service
 * @name $exceptionHandler
 *
 * @description
 * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
 * into it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
 * information.
 *
 *
 * ```js
 *   describe('$exceptionHandlerProvider', function() {
 *
 *     it('should capture log messages and exceptions', function() {
 *
 *       module(function($exceptionHandlerProvider) {
 *         $exceptionHandlerProvider.mode('log');
 *       });
 *
 *       inject(function($log, $exceptionHandler, $timeout) {
 *         $timeout(function() { $log.log(1); });
 *         $timeout(function() { $log.log(2); throw 'banana peel'; });
 *         $timeout(function() { $log.log(3); });
 *         expect($exceptionHandler.errors).toEqual([]);
 *         expect($log.assertEmpty());
 *         $timeout.flush();
 *         expect($exceptionHandler.errors).toEqual(['banana peel']);
 *         expect($log.log.logs).toEqual([[1], [2], [3]]);
 *       });
 *     });
 *   });
 * ```
 */

angular.mock.$ExceptionHandlerProvider = function() {
  var handler;

  /**
   * @ngdoc method
   * @name $exceptionHandlerProvider#mode
   *
   * @description
   * Sets the logging mode.
   *
   * @param {string} mode Mode of operation, defaults to `rethrow`.
   *
   *   - `rethrow`: If any errors are passed into the handler in tests, it typically
   *                means that there is a bug in the application or test, so this mock will
   *                make these tests fail.
   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
   *            mode stores an array of errors in `$exceptionHandler.errors`, to allow later
   *            assertion of them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
   *            {@link ngMock.$log#reset reset()}
   */
  this.mode = function(mode) {
    switch(mode) {
      case 'rethrow':
        handler = function(e) {
          throw e;
        };
        break;
      case 'log':
        var errors = [];

        handler = function(e) {
          if (arguments.length == 1) {
            errors.push(e);
          } else {
            errors.push([].slice.call(arguments, 0));
          }
        };

        handler.errors = errors;
        break;
      default:
        throw new Error("Unknown mode '" + mode + "', only 'log'/'rethrow' modes are allowed!");
    }
  };

  this.$get = function() {
    return handler;
  };

  this.mode('rethrow');
};


/**
 * @ngdoc service
 * @name $log
 *
 * @description
 * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
 * (one array per logging level). These arrays are exposed as `logs` property of each of the
 * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
 *
 */
angular.mock.$LogProvider = function() {
  var debug = true;

  function concat(array1, array2, index) {
    return array1.concat(Array.prototype.slice.call(array2, index));
  }

  this.debugEnabled = function(flag) {
    if (angular.isDefined(flag)) {
      debug = flag;
      return this;
    } else {
      return debug;
    }
  };

  this.$get = function () {
    var $log = {
      log: function() { $log.log.logs.push(concat([], arguments, 0)); },
      warn: function() { $log.warn.logs.push(concat([], arguments, 0)); },
      info: function() { $log.info.logs.push(concat([], arguments, 0)); },
      error: function() { $log.error.logs.push(concat([], arguments, 0)); },
      debug: function() {
        if (debug) {
          $log.debug.logs.push(concat([], arguments, 0));
        }
      }
    };

    /**
     * @ngdoc method
     * @name $log#reset
     *
     * @description
     * Reset all of the logging arrays to empty.
     */
    $log.reset = function () {
      /**
       * @ngdoc property
       * @name $log#log.logs
       *
       * @description
       * Array of messages logged using {@link ngMock.$log#log}.
       *
       * @example
       * ```js
       * $log.log('Some Log');
       * var first = $log.log.logs.unshift();
       * ```
       */
      $log.log.logs = [];
      /**
       * @ngdoc property
       * @name $log#info.logs
       *
       * @description
       * Array of messages logged using {@link ngMock.$log#info}.
       *
       * @example
       * ```js
       * $log.info('Some Info');
       * var first = $log.info.logs.unshift();
       * ```
       */
      $log.info.logs = [];
      /**
       * @ngdoc property
       * @name $log#warn.logs
       *
       * @description
       * Array of messages logged using {@link ngMock.$log#warn}.
       *
       * @example
       * ```js
       * $log.warn('Some Warning');
       * var first = $log.warn.logs.unshift();
       * ```
       */
      $log.warn.logs = [];
      /**
       * @ngdoc property
       * @name $log#error.logs
       *
       * @description
       * Array of messages logged using {@link ngMock.$log#error}.
       *
       * @example
       * ```js
       * $log.error('Some Error');
       * var first = $log.error.logs.unshift();
       * ```
       */
      $log.error.logs = [];
        /**
       * @ngdoc property
       * @name $log#debug.logs
       *
       * @description
       * Array of messages logged using {@link ngMock.$log#debug}.
       *
       * @example
       * ```js
       * $log.debug('Some Error');
       * var first = $log.debug.logs.unshift();
       * ```
       */
      $log.debug.logs = [];
    };

    /**
     * @ngdoc method
     * @name $log#assertEmpty
     *
     * @description
     * Assert that the all of the logging methods have no logged messages. If messages present, an
     * exception is thrown.
     */
    $log.assertEmpty = function() {
      var errors = [];
      angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
        angular.forEach($log[logLevel].logs, function(log) {
          angular.forEach(log, function (logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
                        (logItem.stack || ''));
          });
        });
      });
      if (errors.length) {
        errors.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or "+
          "an expected log message was not checked and removed:");
        errors.push('');
        throw new Error(errors.join('\n---------\n'));
      }
    };

    $log.reset();
    return $log;
  };
};


/**
 * @ngdoc service
 * @name $interval
 *
 * @description
 * Mock implementation of the $interval service.
 *
 * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
 * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
 * time.
 *
 * @param {function()} fn A function that should be called repeatedly.
 * @param {number} delay Number of milliseconds between each function call.
 * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
 *   indefinitely.
 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
 * @returns {promise} A promise which will be notified on each iteration.
 */
angular.mock.$IntervalProvider = function() {
  this.$get = ['$rootScope', '$q',
       function($rootScope,   $q) {
    var repeatFns = [],
        nextRepeatId = 0,
        now = 0;

    var $interval = function(fn, delay, count, invokeApply) {
      var deferred = $q.defer(),
          promise = deferred.promise,
          iteration = 0,
          skipApply = (angular.isDefined(invokeApply) && !invokeApply);

      count = (angular.isDefined(count)) ? count : 0;
      promise.then(null, null, fn);

      promise.$$intervalId = nextRepeatId;

      function tick() {
        deferred.notify(iteration++);

        if (count > 0 && iteration >= count) {
          var fnIndex;
          deferred.resolve(iteration);

          angular.forEach(repeatFns, function(fn, index) {
            if (fn.id === promise.$$intervalId) fnIndex = index;
          });

          if (fnIndex !== undefined) {
            repeatFns.splice(fnIndex, 1);
          }
        }

        if (!skipApply) $rootScope.$apply();
      }

      repeatFns.push({
        nextTime:(now + delay),
        delay: delay,
        fn: tick,
        id: nextRepeatId,
        deferred: deferred
      });
      repeatFns.sort(function(a,b){ return a.nextTime - b.nextTime;});

      nextRepeatId++;
      return promise;
    };
    /**
     * @ngdoc method
     * @name $interval#cancel
     *
     * @description
     * Cancels a task associated with the `promise`.
     *
     * @param {promise} promise A promise from calling the `$interval` function.
     * @returns {boolean} Returns `true` if the task was successfully cancelled.
     */
    $interval.cancel = function(promise) {
      if(!promise) return false;
      var fnIndex;

      angular.forEach(repeatFns, function(fn, index) {
        if (fn.id === promise.$$intervalId) fnIndex = index;
      });

      if (fnIndex !== undefined) {
        repeatFns[fnIndex].deferred.reject('canceled');
        repeatFns.splice(fnIndex, 1);
        return true;
      }

      return false;
    };

    /**
     * @ngdoc method
     * @name $interval#flush
     * @description
     *
     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
     *
     * @param {number=} millis maximum timeout amount to flush up until.
     *
     * @return {number} The amount of time moved forward.
     */
    $interval.flush = function(millis) {
      now += millis;
      while (repeatFns.length && repeatFns[0].nextTime <= now) {
        var task = repeatFns[0];
        task.fn();
        task.nextTime += task.delay;
        repeatFns.sort(function(a,b){ return a.nextTime - b.nextTime;});
      }
      return millis;
    };

    return $interval;
  }];
};


/* jshint -W101 */
/* The R_ISO8061_STR regex is never going to fit into the 100 char limit!
 * This directive should go inside the anonymous function but a bug in JSHint means that it would
 * not be enacted early enough to prevent the warning.
 */
var R_ISO8061_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

function jsonStringToDate(string) {
  var match;
  if (match = string.match(R_ISO8061_STR)) {
    var date = new Date(0),
        tzHour = 0,
        tzMin  = 0;
    if (match[9]) {
      tzHour = int(match[9] + match[10]);
      tzMin = int(match[9] + match[11]);
    }
    date.setUTCFullYear(int(match[1]), int(match[2]) - 1, int(match[3]));
    date.setUTCHours(int(match[4]||0) - tzHour,
                     int(match[5]||0) - tzMin,
                     int(match[6]||0),
                     int(match[7]||0));
    return date;
  }
  return string;
}

function int(str) {
  return parseInt(str, 10);
}

function padNumber(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while(num.length < digits) num = '0' + num;
  if (trim)
    num = num.substr(num.length - digits);
  return neg + num;
}


/**
 * @ngdoc type
 * @name angular.mock.TzDate
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
 *
 * Mock of the Date type which has its timezone specified via constructor arg.
 *
 * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
 * offset, so that we can test code that depends on local timezone settings without dependency on
 * the time zone settings of the machine where the code is running.
 *
 * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
 * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
 *
 * @example
 * !!!! WARNING !!!!!
 * This is not a complete Date object so only methods that were implemented can be called safely.
 * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
 *
 * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
 * incomplete we might be missing some non-standard methods. This can result in errors like:
 * "Date.prototype.foo called on incompatible Object".
 *
 * ```js
 * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
 * newYearInBratislava.getTimezoneOffset() => -60;
 * newYearInBratislava.getFullYear() => 2010;
 * newYearInBratislava.getMonth() => 0;
 * newYearInBratislava.getDate() => 1;
 * newYearInBratislava.getHours() => 0;
 * newYearInBratislava.getMinutes() => 0;
 * newYearInBratislava.getSeconds() => 0;
 * ```
 *
 */
angular.mock.TzDate = function (offset, timestamp) {
  var self = new Date(0);
  if (angular.isString(timestamp)) {
    var tsStr = timestamp;

    self.origDate = jsonStringToDate(timestamp);

    timestamp = self.origDate.getTime();
    if (isNaN(timestamp))
      throw {
        name: "Illegal Argument",
        message: "Arg '" + tsStr + "' passed into TzDate constructor is not a valid date string"
      };
  } else {
    self.origDate = new Date(timestamp);
  }

  var localOffset = new Date(timestamp).getTimezoneOffset();
  self.offsetDiff = localOffset*60*1000 - offset*1000*60*60;
  self.date = new Date(timestamp + self.offsetDiff);

  self.getTime = function() {
    return self.date.getTime() - self.offsetDiff;
  };

  self.toLocaleDateString = function() {
    return self.date.toLocaleDateString();
  };

  self.getFullYear = function() {
    return self.date.getFullYear();
  };

  self.getMonth = function() {
    return self.date.getMonth();
  };

  self.getDate = function() {
    return self.date.getDate();
  };

  self.getHours = function() {
    return self.date.getHours();
  };

  self.getMinutes = function() {
    return self.date.getMinutes();
  };

  self.getSeconds = function() {
    return self.date.getSeconds();
  };

  self.getMilliseconds = function() {
    return self.date.getMilliseconds();
  };

  self.getTimezoneOffset = function() {
    return offset * 60;
  };

  self.getUTCFullYear = function() {
    return self.origDate.getUTCFullYear();
  };

  self.getUTCMonth = function() {
    return self.origDate.getUTCMonth();
  };

  self.getUTCDate = function() {
    return self.origDate.getUTCDate();
  };

  self.getUTCHours = function() {
    return self.origDate.getUTCHours();
  };

  self.getUTCMinutes = function() {
    return self.origDate.getUTCMinutes();
  };

  self.getUTCSeconds = function() {
    return self.origDate.getUTCSeconds();
  };

  self.getUTCMilliseconds = function() {
    return self.origDate.getUTCMilliseconds();
  };

  self.getDay = function() {
    return self.date.getDay();
  };

  // provide this method only on browsers that already have it
  if (self.toISOString) {
    self.toISOString = function() {
      return padNumber(self.origDate.getUTCFullYear(), 4) + '-' +
            padNumber(self.origDate.getUTCMonth() + 1, 2) + '-' +
            padNumber(self.origDate.getUTCDate(), 2) + 'T' +
            padNumber(self.origDate.getUTCHours(), 2) + ':' +
            padNumber(self.origDate.getUTCMinutes(), 2) + ':' +
            padNumber(self.origDate.getUTCSeconds(), 2) + '.' +
            padNumber(self.origDate.getUTCMilliseconds(), 3) + 'Z';
    };
  }

  //hide all methods not implemented in this mock that the Date prototype exposes
  var unimplementedMethods = ['getUTCDay',
      'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
      'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
      'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
      'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];

  angular.forEach(unimplementedMethods, function(methodName) {
    self[methodName] = function() {
      throw new Error("Method '" + methodName + "' is not implemented in the TzDate mock");
    };
  });

  return self;
};

//make "tzDateInstance instanceof Date" return true
angular.mock.TzDate.prototype = Date.prototype;
/* jshint +W101 */

angular.mock.animate = angular.module('ngAnimateMock', ['ng'])

  .config(['$provide', function($provide) {

    var reflowQueue = [];
    $provide.value('$$animateReflow', function(fn) {
      var index = reflowQueue.length;
      reflowQueue.push(fn);
      return function cancel() {
        reflowQueue.splice(index, 1);
      };
    });

    $provide.decorator('$animate', function($delegate, $$asyncCallback) {
      var animate = {
        queue : [],
        enabled : $delegate.enabled,
        triggerCallbacks : function() {
          $$asyncCallback.flush();
        },
        triggerReflow : function() {
          angular.forEach(reflowQueue, function(fn) {
            fn();
          });
          reflowQueue = [];
        }
      };

      angular.forEach(
        ['enter','leave','move','addClass','removeClass','setClass'], function(method) {
        animate[method] = function() {
          animate.queue.push({
            event : method,
            element : arguments[0],
            args : arguments
          });
          $delegate[method].apply($delegate, arguments);
        };
      });

      return animate;
    });

  }]);


/**
 * @ngdoc function
 * @name angular.mock.dump
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available function.
 *
 * Method for serializing common angular objects (scope, elements, etc..) into strings, useful for
 * debugging.
 *
 * This method is also available on window, where it can be used to display objects on debug
 * console.
 *
 * @param {*} object - any object to turn into string.
 * @return {string} a serialized string of the argument
 */
angular.mock.dump = function(object) {
  return serialize(object);

  function serialize(object) {
    var out;

    if (angular.isElement(object)) {
      object = angular.element(object);
      out = angular.element('<div></div>');
      angular.forEach(object, function(element) {
        out.append(angular.element(element).clone());
      });
      out = out.html();
    } else if (angular.isArray(object)) {
      out = [];
      angular.forEach(object, function(o) {
        out.push(serialize(o));
      });
      out = '[ ' + out.join(', ') + ' ]';
    } else if (angular.isObject(object)) {
      if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
        out = serializeScope(object);
      } else if (object instanceof Error) {
        out = object.stack || ('' + object.name + ': ' + object.message);
      } else {
        // TODO(i): this prevents methods being logged,
        // we should have a better way to serialize objects
        out = angular.toJson(object, true);
      }
    } else {
      out = String(object);
    }

    return out;
  }

  function serializeScope(scope, offset) {
    offset = offset ||  '  ';
    var log = [offset + 'Scope(' + scope.$id + '): {'];
    for ( var key in scope ) {
      if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
        log.push('  ' + key + ': ' + angular.toJson(scope[key]));
      }
    }
    var child = scope.$$childHead;
    while(child) {
      log.push(serializeScope(child, offset + '  '));
      child = child.$$nextSibling;
    }
    log.push('}');
    return log.join('\n' + offset);
  }
};

/**
 * @ngdoc service
 * @name $httpBackend
 * @description
 * Fake HTTP backend implementation suitable for unit testing applications that use the
 * {@link ng.$http $http service}.
 *
 * *Note*: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
 * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
 *
 * During unit testing, we want our unit tests to run quickly and have no external dependencies so
 * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
 * to verify whether a certain request has been sent or not, or alternatively just let the
 * application make requests, respond with pre-trained responses and assert that the end result is
 * what we expect it to be.
 *
 * This mock implementation can be used to respond with static or dynamic responses via the
 * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
 *
 * When an Angular application needs some data from a server, it calls the $http service, which
 * sends the request to a real server using $httpBackend service. With dependency injection, it is
 * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
 * the requests and respond with some testing data without sending a request to a real server.
 *
 * There are two ways to specify what test data should be returned as http responses by the mock
 * backend when the code under test makes http requests:
 *
 * - `$httpBackend.expect` - specifies a request expectation
 * - `$httpBackend.when` - specifies a backend definition
 *
 *
 * # Request Expectations vs Backend Definitions
 *
 * Request expectations provide a way to make assertions about requests made by the application and
 * to define responses for those requests. The test will fail if the expected requests are not made
 * or they are made in the wrong order.
 *
 * Backend definitions allow you to define a fake backend for your application which doesn't assert
 * if a particular request was made or not, it just returns a trained response if a request is made.
 * The test will pass whether or not the request gets made during testing.
 *
 *
 * <table class="table">
 *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
 *   <tr>
 *     <th>Syntax</th>
 *     <td>.expect(...).respond(...)</td>
 *     <td>.when(...).respond(...)</td>
 *   </tr>
 *   <tr>
 *     <th>Typical usage</th>
 *     <td>strict unit tests</td>
 *     <td>loose (black-box) unit testing</td>
 *   </tr>
 *   <tr>
 *     <th>Fulfills multiple requests</th>
 *     <td>NO</td>
 *     <td>YES</td>
 *   </tr>
 *   <tr>
 *     <th>Order of requests matters</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Request required</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Response required</th>
 *     <td>optional (see below)</td>
 *     <td>YES</td>
 *   </tr>
 * </table>
 *
 * In cases where both backend definitions and request expectations are specified during unit
 * testing, the request expectations are evaluated first.
 *
 * If a request expectation has no response specified, the algorithm will search your backend
 * definitions for an appropriate response.
 *
 * If a request didn't match any expectation or if the expectation doesn't have the response
 * defined, the backend definitions are evaluated in sequential order to see if any of them match
 * the request. The response from the first matched definition is returned.
 *
 *
 * # Flushing HTTP requests
 *
 * The $httpBackend used in production always responds to requests asynchronously. If we preserved
 * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
 * to follow and to maintain. But neither can the testing mock respond synchronously; that would
 * change the execution of the code under test. For this reason, the mock $httpBackend has a
 * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
 * the async api of the backend, while allowing the test to execute synchronously.
 *
 *
 * # Unit testing with mock $httpBackend
 * The following code shows how to setup and use the mock backend when unit testing a controller.
 * First we create the controller under test:
 *
  ```js
  // The controller code
  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').success(function(data, status, headers) {
      authToken = headers('A-Token');
      $scope.user = data;
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).success(function(response) {
        $scope.status = '';
      }).error(function() {
        $scope.status = 'ERROR!';
      });
    };
  }
  ```
 *
 * Now we setup the mock backend and create the test specs:
 *
  ```js
    // testing controller
    describe('MyController', function() {
       var $httpBackend, $rootScope, createController;

       beforeEach(inject(function($injector) {
         // Set up the mock http service responses
         $httpBackend = $injector.get('$httpBackend');
         // backend definition common for all tests
         $httpBackend.when('GET', '/auth.py').respond({userId: 'userX'}, {'A-Token': 'xxx'});

         // Get hold of a scope (i.e. the root scope)
         $rootScope = $injector.get('$rootScope');
         // The $controller service is used to create instances of controllers
         var $controller = $injector.get('$controller');

         createController = function() {
           return $controller('MyController', {'$scope' : $rootScope });
         };
       }));


       afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });


       it('should fetch authentication token', function() {
         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
       });


       it('should send msg to server', function() {
         var controller = createController();
         $httpBackend.flush();

         // now you don’t care about the authentication, but
         // the controller will still send the request and
         // $httpBackend will respond without you having to
         // specify the expectation and response for this request

         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
         $rootScope.saveMessage('message content');
         expect($rootScope.status).toBe('Saving...');
         $httpBackend.flush();
         expect($rootScope.status).toBe('');
       });


       it('should send auth header', function() {
         var controller = createController();
         $httpBackend.flush();

         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
           // check if the header was send, if it wasn't the expectation won't
           // match the request and the test will fail
           return headers['Authorization'] == 'xxx';
         }).respond(201, '');

         $rootScope.saveMessage('whatever');
         $httpBackend.flush();
       });
    });
   ```
 */
angular.mock.$HttpBackendProvider = function() {
  this.$get = ['$rootScope', createHttpBackendMock];
};

/**
 * General factory function for $httpBackend mock.
 * Returns instance for unit testing (when no arguments specified):
 *   - passing through is disabled
 *   - auto flushing is disabled
 *
 * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
 *   - passing through (delegating request to real backend) is enabled
 *   - auto flushing is enabled
 *
 * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
 * @param {Object=} $browser Auto-flushing enabled if specified
 * @return {Object} Instance of $httpBackend mock
 */
function createHttpBackendMock($rootScope, $delegate, $browser) {
  var definitions = [],
      expectations = [],
      responses = [],
      responsesPush = angular.bind(responses, responses.push),
      copy = angular.copy;

  function createResponse(status, data, headers, statusText) {
    if (angular.isFunction(status)) return status;

    return function() {
      return angular.isNumber(status)
          ? [status, data, headers, statusText]
          : [200, status, data];
    };
  }

  // TODO(vojta): change params to: method, url, data, headers, callback
  function $httpBackend(method, url, data, callback, headers, timeout, withCredentials) {
    var xhr = new MockXhr(),
        expectation = expectations[0],
        wasExpected = false;

    function prettyPrint(data) {
      return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp)
          ? data
          : angular.toJson(data);
    }

    function wrapResponse(wrapped) {
      if (!$browser && timeout && timeout.then) timeout.then(handleTimeout);

      return handleResponse;

      function handleResponse() {
        var response = wrapped.response(method, url, data, headers);
        xhr.$$respHeaders = response[2];
        callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
                 copy(response[3] || ''));
      }

      function handleTimeout() {
        for (var i = 0, ii = responses.length; i < ii; i++) {
          if (responses[i] === handleResponse) {
            responses.splice(i, 1);
            callback(-1, undefined, '');
            break;
          }
        }
      }
    }

    if (expectation && expectation.match(method, url)) {
      if (!expectation.matchData(data))
        throw new Error('Expected ' + expectation + ' with different data\n' +
            'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);

      if (!expectation.matchHeaders(headers))
        throw new Error('Expected ' + expectation + ' with different headers\n' +
                        'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' +
                        prettyPrint(headers));

      expectations.shift();

      if (expectation.response) {
        responses.push(wrapResponse(expectation));
        return;
      }
      wasExpected = true;
    }

    var i = -1, definition;
    while ((definition = definitions[++i])) {
      if (definition.match(method, url, data, headers || {})) {
        if (definition.response) {
          // if $browser specified, we do auto flush all requests
          ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
        } else if (definition.passThrough) {
          $delegate(method, url, data, callback, headers, timeout, withCredentials);
        } else throw new Error('No response defined !');
        return;
      }
    }
    throw wasExpected ?
        new Error('No response defined !') :
        new Error('Unexpected request: ' + method + ' ' + url + '\n' +
                  (expectation ? 'Expected ' + expectation : 'No more request expected'));
  }

  /**
   * @ngdoc method
   * @name $httpBackend#when
   * @description
   * Creates a new backend definition.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp} url HTTP url.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled.
   *
   *  - respond –
   *      `{function([status,] data[, headers, statusText])
   *      | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string).
   */
  $httpBackend.when = function(method, url, data, headers) {
    var definition = new MockHttpExpectation(method, url, data, headers),
        chain = {
          respond: function(status, data, headers, statusText) {
            definition.response = createResponse(status, data, headers, statusText);
          }
        };

    if ($browser) {
      chain.passThrough = function() {
        definition.passThrough = true;
      };
    }

    definitions.push(definition);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#whenGET
   * @description
   * Creates a new backend definition for GET requests. For more info see `when()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   * request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenHEAD
   * @description
   * Creates a new backend definition for HEAD requests. For more info see `when()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   * request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenDELETE
   * @description
   * Creates a new backend definition for DELETE requests. For more info see `when()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   * request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPOST
   * @description
   * Creates a new backend definition for POST requests. For more info see `when()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   * request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPUT
   * @description
   * Creates a new backend definition for PUT requests.  For more info see `when()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   * request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenJSONP
   * @description
   * Creates a new backend definition for JSONP requests. For more info see `when()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   * request is handled.
   */
  createShortMethods('when');


  /**
   * @ngdoc method
   * @name $httpBackend#expect
   * @description
   * Creates a new request expectation.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp} url HTTP url.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   *  request is handled.
   *
   *  - respond –
   *    `{function([status,] data[, headers, statusText])
   *    | function(function(method, url, data, headers)}`
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (string), response
   *    headers (Object), and the text for the status (string).
   */
  $httpBackend.expect = function(method, url, data, headers) {
    var expectation = new MockHttpExpectation(method, url, data, headers);
    expectations.push(expectation);
    return {
      respond: function (status, data, headers, statusText) {
        expectation.response = createResponse(status, data, headers, statusText);
      }
    };
  };


  /**
   * @ngdoc method
   * @name $httpBackend#expectGET
   * @description
   * Creates a new request expectation for GET requests. For more info see `expect()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   * request is handled. See #expect for more info.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectHEAD
   * @description
   * Creates a new request expectation for HEAD requests. For more info see `expect()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   *   request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectDELETE
   * @description
   * Creates a new request expectation for DELETE requests. For more info see `expect()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   *   request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPOST
   * @description
   * Creates a new request expectation for POST requests. For more info see `expect()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   *   request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPUT
   * @description
   * Creates a new request expectation for PUT requests. For more info see `expect()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   *   request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPATCH
   * @description
   * Creates a new request expectation for PATCH requests. For more info see `expect()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   *   request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectJSONP
   * @description
   * Creates a new request expectation for JSONP requests. For more info see `expect()`.
   *
   * @param {string|RegExp} url HTTP url.
   * @returns {requestHandler} Returns an object with `respond` method that control how a matched
   *   request is handled.
   */
  createShortMethods('expect');


  /**
   * @ngdoc method
   * @name $httpBackend#flush
   * @description
   * Flushes all pending requests using the trained responses.
   *
   * @param {number=} count Number of responses to flush (in the order they arrived). If undefined,
   *   all pending requests will be flushed. If there are no pending requests when the flush method
   *   is called an exception is thrown (as this typically a sign of programming error).
   */
  $httpBackend.flush = function(count) {
    $rootScope.$digest();
    if (!responses.length) throw new Error('No pending request to flush !');

    if (angular.isDefined(count)) {
      while (count--) {
        if (!responses.length) throw new Error('No more pending request to flush !');
        responses.shift()();
      }
    } else {
      while (responses.length) {
        responses.shift()();
      }
    }
    $httpBackend.verifyNoOutstandingExpectation();
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingExpectation
   * @description
   * Verifies that all of the requests defined via the `expect` api were made. If any of the
   * requests were not made, verifyNoOutstandingExpectation throws an exception.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingExpectation);
   * ```
   */
  $httpBackend.verifyNoOutstandingExpectation = function() {
    $rootScope.$digest();
    if (expectations.length) {
      throw new Error('Unsatisfied requests: ' + expectations.join(', '));
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingRequest
   * @description
   * Verifies that there are no outstanding requests that need to be flushed.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingRequest);
   * ```
   */
  $httpBackend.verifyNoOutstandingRequest = function() {
    if (responses.length) {
      throw new Error('Unflushed requests: ' + responses.length);
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#resetExpectations
   * @description
   * Resets all request expectations, but preserves all backend definitions. Typically, you would
   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
   * $httpBackend mock.
   */
  $httpBackend.resetExpectations = function() {
    expectations.length = 0;
    responses.length = 0;
  };

  return $httpBackend;


  function createShortMethods(prefix) {
    angular.forEach(['GET', 'DELETE', 'JSONP'], function(method) {
     $httpBackend[prefix + method] = function(url, headers) {
       return $httpBackend[prefix](method, url, undefined, headers);
     };
    });

    angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
      $httpBackend[prefix + method] = function(url, data, headers) {
        return $httpBackend[prefix](method, url, data, headers);
      };
    });
  }
}

function MockHttpExpectation(method, url, data, headers) {

  this.data = data;
  this.headers = headers;

  this.match = function(m, u, d, h) {
    if (method != m) return false;
    if (!this.matchUrl(u)) return false;
    if (angular.isDefined(d) && !this.matchData(d)) return false;
    if (angular.isDefined(h) && !this.matchHeaders(h)) return false;
    return true;
  };

  this.matchUrl = function(u) {
    if (!url) return true;
    if (angular.isFunction(url.test)) return url.test(u);
    return url == u;
  };

  this.matchHeaders = function(h) {
    if (angular.isUndefined(headers)) return true;
    if (angular.isFunction(headers)) return headers(h);
    return angular.equals(headers, h);
  };

  this.matchData = function(d) {
    if (angular.isUndefined(data)) return true;
    if (data && angular.isFunction(data.test)) return data.test(d);
    if (data && angular.isFunction(data)) return data(d);
    if (data && !angular.isString(data)) return angular.equals(data, angular.fromJson(d));
    return data == d;
  };

  this.toString = function() {
    return method + ' ' + url;
  };
}

function createMockXhr() {
  return new MockXhr();
}

function MockXhr() {

  // hack for testing $http, $httpBackend
  MockXhr.$$lastInstance = this;

  this.open = function(method, url, async) {
    this.$$method = method;
    this.$$url = url;
    this.$$async = async;
    this.$$reqHeaders = {};
    this.$$respHeaders = {};
  };

  this.send = function(data) {
    this.$$data = data;
  };

  this.setRequestHeader = function(key, value) {
    this.$$reqHeaders[key] = value;
  };

  this.getResponseHeader = function(name) {
    // the lookup must be case insensitive,
    // that's why we try two quick lookups first and full scan last
    var header = this.$$respHeaders[name];
    if (header) return header;

    name = angular.lowercase(name);
    header = this.$$respHeaders[name];
    if (header) return header;

    header = undefined;
    angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
      if (!header && angular.lowercase(headerName) == name) header = headerVal;
    });
    return header;
  };

  this.getAllResponseHeaders = function() {
    var lines = [];

    angular.forEach(this.$$respHeaders, function(value, key) {
      lines.push(key + ': ' + value);
    });
    return lines.join('\n');
  };

  this.abort = angular.noop;
}


/**
 * @ngdoc service
 * @name $timeout
 * @description
 *
 * This service is just a simple decorator for {@link ng.$timeout $timeout} service
 * that adds a "flush" and "verifyNoPendingTasks" methods.
 */

angular.mock.$TimeoutDecorator = function($delegate, $browser) {

  /**
   * @ngdoc method
   * @name $timeout#flush
   * @description
   *
   * Flushes the queue of pending tasks.
   *
   * @param {number=} delay maximum timeout amount to flush up until
   */
  $delegate.flush = function(delay) {
    $browser.defer.flush(delay);
  };

  /**
   * @ngdoc method
   * @name $timeout#verifyNoPendingTasks
   * @description
   *
   * Verifies that there are no pending tasks that need to be flushed.
   */
  $delegate.verifyNoPendingTasks = function() {
    if ($browser.deferredFns.length) {
      throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' +
          formatPendingTasksAsString($browser.deferredFns));
    }
  };

  function formatPendingTasksAsString(tasks) {
    var result = [];
    angular.forEach(tasks, function(task) {
      result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
    });

    return result.join(', ');
  }

  return $delegate;
};

angular.mock.$RAFDecorator = function($delegate) {
  var queue = [];
  var rafFn = function(fn) {
    var index = queue.length;
    queue.push(fn);
    return function() {
      queue.splice(index, 1);
    };
  };

  rafFn.supported = $delegate.supported;

  rafFn.flush = function() {
    if(queue.length === 0) {
      throw new Error('No rAF callbacks present');
    }

    var length = queue.length;
    for(var i=0;i<length;i++) {
      queue[i]();
    }

    queue = [];
  };

  return rafFn;
};

angular.mock.$AsyncCallbackDecorator = function($delegate) {
  var callbacks = [];
  var addFn = function(fn) {
    callbacks.push(fn);
  };
  addFn.flush = function() {
    angular.forEach(callbacks, function(fn) {
      fn();
    });
    callbacks = [];
  };
  return addFn;
};

/**
 *
 */
angular.mock.$RootElementProvider = function() {
  this.$get = function() {
    return angular.element('<div ng-app></div>');
  };
};

/**
 * @ngdoc module
 * @name ngMock
 * @packageName angular-mocks
 * @description
 *
 * # ngMock
 *
 * The `ngMock` module provides support to inject and mock Angular services into unit tests.
 * In addition, ngMock also extends various core ng services such that they can be
 * inspected and controlled in a synchronous manner within test code.
 *
 *
 * <div doc-module-components="ngMock"></div>
 *
 */
angular.module('ngMock', ['ng']).provider({
  $browser: angular.mock.$BrowserProvider,
  $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
  $log: angular.mock.$LogProvider,
  $interval: angular.mock.$IntervalProvider,
  $httpBackend: angular.mock.$HttpBackendProvider,
  $rootElement: angular.mock.$RootElementProvider
}).config(['$provide', function($provide) {
  $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
  $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
  $provide.decorator('$$asyncCallback', angular.mock.$AsyncCallbackDecorator);
}]);

/**
 * @ngdoc module
 * @name ngMockE2E
 * @module ngMockE2E
 * @packageName angular-mocks
 * @description
 *
 * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
 * Currently there is only one mock present in this module -
 * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
 */
angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}]);

/**
 * @ngdoc service
 * @name $httpBackend
 * @module ngMockE2E
 * @description
 * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
 * applications that use the {@link ng.$http $http service}.
 *
 * *Note*: For fake http backend implementation suitable for unit testing please see
 * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
 *
 * This implementation can be used to respond with static or dynamic responses via the `when` api
 * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
 * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
 * templates from a webserver).
 *
 * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
 * is being developed with the real backend api replaced with a mock, it is often desirable for
 * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
 * templates or static files from the webserver). To configure the backend with this behavior
 * use the `passThrough` request handler of `when` instead of `respond`.
 *
 * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
 * testing. For this reason the e2e $httpBackend automatically flushes mocked out requests
 * automatically, closely simulating the behavior of the XMLHttpRequest object.
 *
 * To setup the application to run with this http backend, you have to create a module that depends
 * on the `ngMockE2E` and your application modules and defines the fake backend:
 *
 * ```js
 *   myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
 *   myAppDev.run(function($httpBackend) {
 *     phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *     $httpBackend.whenGET(/^\/templates\//).passThrough();
 *     //...
 *   });
 * ```
 *
 * Afterwards, bootstrap your app with this new module.
 */

/**
 * @ngdoc method
 * @name $httpBackend#when
 * @module ngMockE2E
 * @description
 * Creates a new backend definition.
 *
 * @param {string} method HTTP method.
 * @param {string|RegExp} url HTTP url.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
 *   object and returns true if the headers match the current definition.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled.
 *
 *  - respond –
 *    `{function([status,] data[, headers, statusText])
 *    | function(function(method, url, data, headers)}`
 *    – The respond method takes a set of static data to be returned or a function that can return
 *    an array containing response status (number), response data (string), response headers
 *    (Object), and the text for the status (string).
 *  - passThrough – `{function()}` – Any request matching a backend definition with
 *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
 *    to the server.)
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenGET
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for GET requests. For more info see `when()`.
 *
 * @param {string|RegExp} url HTTP url.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenHEAD
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for HEAD requests. For more info see `when()`.
 *
 * @param {string|RegExp} url HTTP url.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenDELETE
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for DELETE requests. For more info see `when()`.
 *
 * @param {string|RegExp} url HTTP url.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPOST
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for POST requests. For more info see `when()`.
 *
 * @param {string|RegExp} url HTTP url.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPUT
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PUT requests.  For more info see `when()`.
 *
 * @param {string|RegExp} url HTTP url.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPATCH
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PATCH requests.  For more info see `when()`.
 *
 * @param {string|RegExp} url HTTP url.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenJSONP
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for JSONP requests. For more info see `when()`.
 *
 * @param {string|RegExp} url HTTP url.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled.
 */
angular.mock.e2e = {};
angular.mock.e2e.$httpBackendDecorator =
  ['$rootScope', '$delegate', '$browser', createHttpBackendMock];


angular.mock.clearDataCache = function() {
  var key,
      cache = angular.element.cache;

  for(key in cache) {
    if (Object.prototype.hasOwnProperty.call(cache,key)) {
      var handle = cache[key].handle;

      handle && angular.element(handle.elem).off();
      delete cache[key];
    }
  }
};


if(window.jasmine || window.mocha) {

  var currentSpec = null,
      isSpecRunning = function() {
        return !!currentSpec;
      };


  (window.beforeEach || window.setup)(function() {
    currentSpec = this;
  });

  (window.afterEach || window.teardown)(function() {
    var injector = currentSpec.$injector;

    angular.forEach(currentSpec.$modules, function(module) {
      if (module && module.$$hashKey) {
        module.$$hashKey = undefined;
      }
    });

    currentSpec.$injector = null;
    currentSpec.$modules = null;
    currentSpec = null;

    if (injector) {
      injector.get('$rootElement').off();
      injector.get('$browser').pollFns.length = 0;
    }

    angular.mock.clearDataCache();

    // clean up jquery's fragment cache
    angular.forEach(angular.element.fragments, function(val, key) {
      delete angular.element.fragments[key];
    });

    MockXhr.$$lastInstance = null;

    angular.forEach(angular.callbacks, function(val, key) {
      delete angular.callbacks[key];
    });
    angular.callbacks.counter = 0;
  });

  /**
   * @ngdoc function
   * @name angular.mock.module
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   *
   * This function registers a module configuration code. It collects the configuration information
   * which will be used when the injector is created by {@link angular.mock.inject inject}.
   *
   * See {@link angular.mock.inject inject} for usage example
   *
   * @param {...(string|Function|Object)} fns any number of modules which are represented as string
   *        aliases or as anonymous module initialization functions. The modules are used to
   *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
   *        object literal is passed they will be registered as values in the module, the key being
   *        the module name and the value being what is returned.
   */
  window.module = angular.mock.module = function() {
    var moduleFns = Array.prototype.slice.call(arguments, 0);
    return isSpecRunning() ? workFn() : workFn;
    /////////////////////
    function workFn() {
      if (currentSpec.$injector) {
        throw new Error('Injector already created, can not register a module!');
      } else {
        var modules = currentSpec.$modules || (currentSpec.$modules = []);
        angular.forEach(moduleFns, function(module) {
          if (angular.isObject(module) && !angular.isArray(module)) {
            modules.push(function($provide) {
              angular.forEach(module, function(value, key) {
                $provide.value(key, value);
              });
            });
          } else {
            modules.push(module);
          }
        });
      }
    }
  };

  /**
   * @ngdoc function
   * @name angular.mock.inject
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   *
   * The inject function wraps a function into an injectable function. The inject() creates new
   * instance of {@link auto.$injector $injector} per test, which is then used for
   * resolving references.
   *
   *
   * ## Resolving References (Underscore Wrapping)
   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
   * that is declared in the scope of the `describe()` block. Since we would, most likely, want
   * the variable to have the same name of the reference we have a problem, since the parameter
   * to the `inject()` function would hide the outer variable.
   *
   * To help with this, the injected parameters can, optionally, be enclosed with underscores.
   * These are ignored by the injector when the reference name is resolved.
   *
   * For example, the parameter `_myService_` would be resolved as the reference `myService`.
   * Since it is available in the function body as _myService_, we can then assign it to a variable
   * defined in an outer scope.
   *
   * ```
   * // Defined out reference variable outside
   * var myService;
   *
   * // Wrap the parameter in underscores
   * beforeEach( inject( function(_myService_){
   *   myService = _myService_;
   * }));
   *
   * // Use myService in a series of tests.
   * it('makes use of myService', function() {
   *   myService.doStuff();
   * });
   *
   * ```
   *
   * See also {@link angular.mock.module angular.mock.module}
   *
   * ## Example
   * Example of what a typical jasmine tests looks like with the inject method.
   * ```js
   *
   *   angular.module('myApplicationModule', [])
   *       .value('mode', 'app')
   *       .value('version', 'v1.0.1');
   *
   *
   *   describe('MyApp', function() {
   *
   *     // You need to load modules that you want to test,
   *     // it loads only the "ng" module by default.
   *     beforeEach(module('myApplicationModule'));
   *
   *
   *     // inject() is used to inject arguments of all given functions
   *     it('should provide a version', inject(function(mode, version) {
   *       expect(version).toEqual('v1.0.1');
   *       expect(mode).toEqual('app');
   *     }));
   *
   *
   *     // The inject and module method can also be used inside of the it or beforeEach
   *     it('should override a version and test the new version is injected', function() {
   *       // module() takes functions or strings (module aliases)
   *       module(function($provide) {
   *         $provide.value('version', 'overridden'); // override version here
   *       });
   *
   *       inject(function(version) {
   *         expect(version).toEqual('overridden');
   *       });
   *     });
   *   });
   *
   * ```
   *
   * @param {...Function} fns any number of functions which will be injected using the injector.
   */



  var ErrorAddingDeclarationLocationStack = function(e, errorForStack) {
    this.message = e.message;
    this.name = e.name;
    if (e.line) this.line = e.line;
    if (e.sourceId) this.sourceId = e.sourceId;
    if (e.stack && errorForStack)
      this.stack = e.stack + '\n' + errorForStack.stack;
    if (e.stackArray) this.stackArray = e.stackArray;
  };
  ErrorAddingDeclarationLocationStack.prototype.toString = Error.prototype.toString;

  window.inject = angular.mock.inject = function() {
    var blockFns = Array.prototype.slice.call(arguments, 0);
    var errorForStack = new Error('Declaration Location');
    return isSpecRunning() ? workFn.call(currentSpec) : workFn;
    /////////////////////
    function workFn() {
      var modules = currentSpec.$modules || [];

      modules.unshift('ngMock');
      modules.unshift('ng');
      var injector = currentSpec.$injector;
      if (!injector) {
        injector = currentSpec.$injector = angular.injector(modules);
      }
      for(var i = 0, ii = blockFns.length; i < ii; i++) {
        try {
          /* jshint -W040 *//* Jasmine explicitly provides a `this` object when calling functions */
          injector.invoke(blockFns[i] || angular.noop, this);
          /* jshint +W040 */
        } catch (e) {
          if (e.stack && errorForStack) {
            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
          }
          throw e;
        } finally {
          errorForStack = null;
        }
      }
    }
  };
}


})(window, window.angular);

/*!
 * Less - Leaner CSS v2.0.0-b3
 * http://lesscss.org
 *
 * Copyright (c) 2009-2014, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache v2 License.
 *
 */

 /** * @license Apache v2
 */

!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b.less=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){var c=a("./utils").addDataAttr,d=a("./browser");b.exports=function(a,b){c(b,d.currentScript(a)),void 0===b.isFileProtocol&&(b.isFileProtocol=/^(file|chrome(-extension)?|resource|qrc|app):/.test(a.location.protocol)),b.async=b.async||!1,b.fileAsync=b.fileAsync||!1,b.poll=b.poll||(b.isFileProtocol?1e3:1500),b.env=b.env||("127.0.0.1"==a.location.hostname||"0.0.0.0"==a.location.hostname||"localhost"==a.location.hostname||a.location.port&&a.location.port.length>0||b.isFileProtocol?"development":"production");var e=/!dumpLineNumbers:(comments|mediaquery|all)/.exec(a.location.hash);e&&(b.dumpLineNumbers=e[1]),void 0===b.useFileCache&&(b.useFileCache=!0)}},{"./browser":3,"./utils":9}],2:[function(a,b){a("promise/polyfill.js");var c=window.less||{};a("./add-default-options")(window,c);var d=b.exports=a("./index")(window,c);/!watch/.test(window.location.hash)&&d.watch(),d.pageLoadFinished=d.registerStylesheets().then(function(){return d.refresh("development"===d.env)})},{"./add-default-options":1,"./index":7,"promise/polyfill.js":void 0}],3:[function(a,b){var c=a("./utils");b.exports={createCSS:function(a,b,d){var e=d.href||"",f="less:"+(d.title||c.extractId(e)),g=a.getElementById(f),h=!1,i=a.createElement("style");i.setAttribute("type","text/css"),d.media&&i.setAttribute("media",d.media),i.id=f,i.styleSheet||(i.appendChild(a.createTextNode(b)),h=null!==g&&g.childNodes.length>0&&i.childNodes.length>0&&g.firstChild.nodeValue===i.firstChild.nodeValue);var j=a.getElementsByTagName("head")[0];if(null===g||h===!1){var k=d&&d.nextSibling||null;k?k.parentNode.insertBefore(i,k):j.appendChild(i)}if(g&&h===!1&&g.parentNode.removeChild(g),i.styleSheet)try{i.styleSheet.cssText=b}catch(l){throw new Error("Couldn't reassign styleSheet.cssText.")}},currentScript:function(a){var b=a.document;return b.currentScript||function(){var a=b.getElementsByTagName("script");return a[a.length-1]}()}}},{"./utils":9}],4:[function(a,b){b.exports=function(a,b,c){var d=null;if("development"!==b.env)try{d="undefined"==typeof a.localStorage?null:a.localStorage}catch(e){}return{setCSS:function(a,b,e){if(d){c.info("saving "+a+" to cache.");try{d.setItem(a,e),d.setItem(a+":timestamp",b)}catch(f){c.error("failed to save")}}},getCSS:function(a,b){var c=d&&d.getItem(a),e=d&&d.getItem(a+":timestamp");return e&&b.lastModified&&new Date(b.lastModified).valueOf()===new Date(e).valueOf()?c:void 0}}}},{}],5:[function(a,b){var c=a("./utils"),d=a("./browser");b.exports=function(a,b,e){function f(b,f){var g,h,i="less-error-message:"+c.extractId(f||""),j='<li><label>{line}</label><pre class="{class}">{content}</pre></li>',k=a.document.createElement("div"),l=[],m=b.filename||f,n=m.match(/([^\/]+(\?.*)?)$/)[1];k.id=i,k.className="less-error-message",h="<h3>"+(b.type||"Syntax")+"Error: "+(b.message||"There is an error in your .less file")+'</h3><p>in <a href="'+m+'">'+n+"</a> ";var o=function(a,b,c){void 0!==a.extract[b]&&l.push(j.replace(/\{line\}/,(parseInt(a.line,10)||0)+(b-1)).replace(/\{class\}/,c).replace(/\{content\}/,a.extract[b]))};b.extract&&(o(b,0,""),o(b,1,"line"),o(b,2,""),h+="on line "+b.line+", column "+(b.column+1)+":</p><ul>"+l.join("")+"</ul>"),b.stack&&(b.extract||e.logLevel>=4)&&(h+="<br/>Stack Trace</br />"+b.stack.split("\n").slice(1).join("<br/>")),k.innerHTML=h,d.createCSS(a.document,[".less-error-message ul, .less-error-message li {","list-style-type: none;","margin-right: 15px;","padding: 4px 0;","margin: 0;","}",".less-error-message label {","font-size: 12px;","margin-right: 15px;","padding: 4px 0;","color: #cc7777;","}",".less-error-message pre {","color: #dd6666;","padding: 4px 0;","margin: 0;","display: inline-block;","}",".less-error-message pre.line {","color: #ff0000;","}",".less-error-message h3 {","font-size: 20px;","font-weight: bold;","padding: 15px 0 5px 0;","margin: 0;","}",".less-error-message a {","color: #10a","}",".less-error-message .error {","color: red;","font-weight: bold;","padding-bottom: 2px;","border-bottom: 1px dashed red;","}"].join("\n"),{title:"error-message"}),k.style.cssText=["font-family: Arial, sans-serif","border: 1px solid #e00","background-color: #eee","border-radius: 5px","-webkit-border-radius: 5px","-moz-border-radius: 5px","color: #e00","padding: 15px","margin-bottom: 15px"].join(";"),"development"===e.env&&(g=setInterval(function(){var b=a.document,c=b.body;c&&(b.getElementById(i)?c.replaceChild(k,b.getElementById(i)):c.insertBefore(k,c.firstChild),clearInterval(g))},10))}function g(a,b){e.errorReporting&&"html"!==e.errorReporting?"console"===e.errorReporting?k(a,b):"function"==typeof e.errorReporting&&e.errorReporting("add",a,b):f(a,b)}function h(b){var d=a.document.getElementById("less-error-message:"+c.extractId(b));d&&d.parentNode.removeChild(d)}function i(){}function j(a){e.errorReporting&&"html"!==e.errorReporting?"console"===e.errorReporting?i(a):"function"==typeof e.errorReporting&&e.errorReporting("remove",a):h(a)}function k(a,c){var d="{line} {content}",f=a.filename||c,g=[],h=(a.type||"Syntax")+"Error: "+(a.message||"There is an error in your .less file")+" in "+f+" ",i=function(a,b,c){void 0!==a.extract[b]&&g.push(d.replace(/\{line\}/,(parseInt(a.line,10)||0)+(b-1)).replace(/\{class\}/,c).replace(/\{content\}/,a.extract[b]))};a.extract&&(i(a,0,""),i(a,1,"line"),i(a,2,""),h+="on line "+a.line+", column "+(a.column+1)+":\n"+g.join("\n")),a.stack&&(a.extract||e.logLevel>=4)&&(h+="\nStack Trace\n"+a.stack),b.logger.error(h)}return{add:g,remove:j}}},{"./browser":3,"./utils":9}],6:[function(a,b){b.exports=function(b,c){function d(){if(window.XMLHttpRequest&&!("file:"===window.location.protocol&&"ActiveXObject"in window))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return c.error("browser doesn't support AJAX."),null}}var e="undefined"==typeof Promise?a("promise"):Promise,f=a("../less/environment/abstract-file-manager.js"),g={},h=function(){};return h.prototype=new f,h.prototype.alwaysMakePathsAbsolute=function(){return!0},h.prototype.join=function(a,b){return a?this.extractUrlParts(b,a).path:b},h.prototype.doXHR=function(a,e,f,g){function h(b,c,d){b.status>=200&&b.status<300?c(b.responseText,b.getResponseHeader("Last-Modified")):"function"==typeof d&&d(b.status,a)}var i=d(),j=b.isFileProtocol?b.fileAsync:b.async;"function"==typeof i.overrideMimeType&&i.overrideMimeType("text/css"),c.debug("XHR: Getting '"+a+"'"),i.open("GET",a,j),i.setRequestHeader("Accept",e||"text/x-less, text/css; q=0.9, */*; q=0.5"),i.send(null),b.isFileProtocol&&!b.fileAsync?0===i.status||i.status>=200&&i.status<300?f(i.responseText):g(i.status,a):j?i.onreadystatechange=function(){4==i.readyState&&h(i,f,g)}:h(i,f,g)},h.prototype.supports=function(){return!0},h.prototype.clearFileCache=function(){g={}},h.prototype.loadFile=function(a,b,c){return new e(function(d,e){b&&!this.isPathAbsolute(a)&&(a=b+a),c=c||{};var f=this.extractUrlParts(a,window.location.href),h=f.url;if(c.useFileCache&&g[h])try{var i=g[h];d({contents:i,filename:h,webInfo:{lastModified:new Date}})}catch(j){e({filename:h,message:"Error loading file "+h+" error was "+j.message})}else this.doXHR(h,c.mime,function(a,b){g[h]=a,d({contents:a,filename:h,webInfo:{lastModified:b}})},function(a,b){e({type:"File",message:"'"+b+"' wasn't found ("+a+")",href:h})})}.bind(this))},h}},{"../less/environment/abstract-file-manager.js":14,promise:void 0}],7:[function(a,b){var c=a("./utils").addDataAttr,d=a("./browser");b.exports=function(e,f){function g(a){return f.postProcessor&&"function"==typeof f.postProcessor&&(a=f.postProcessor.call(a,a)||a),a}function h(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function i(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){var d=c.concat(Array.prototype.slice.call(arguments,0));return a.apply(b,d)}}function j(a){for(var b,c=n.getElementsByTagName("style"),d=0;d<c.length;d++)if(b=c[d],b.type.match(u)){var e=h(f);e.modifyVars=a;var g=b.innerHTML||"";e.filename=n.location.href.replace(/#.*$/,""),o.render(g,e).then(i(function(a,b){a.type="text/css",a.styleSheet?a.styleSheet.cssText=b.css:a.innerHTML=b.css},null,b),function(a){s.add(a,"inline")})}}function k(a,b,g,i,j){var k=h(f);c(k,a),k.mime=a.type,j&&(k.modifyVars=j),r.loadFile(a.href,null,k,p).then(function(c){var f=c.contents,h=c.filename,j=c.webInfo,l={currentDirectory:r.getPath(h),filename:h,rootFilename:h,relativeUrls:k.relativeUrls};if(l.entryPath=l.currentDirectory,l.rootpath=k.rootpath||l.currentDirectory,j){j.remaining=i;var m=t.getCSS(h,j);if(!g&&m)return d.createCSS(e.document,m,a),j.local=!0,void b(null,null,f,a,j,h)}s.remove(h),k.rootFileInfo=l,o.render(f,k).then(function(c){b(null,c.css,f,a,j,h)},function(a){a.href=h,b(a)})},function(a){b(a)})}function l(a,b,c){for(var d=0;d<o.sheets.length;d++)k(o.sheets[d],a,b,o.sheets.length-(d+1),c)}function m(){"development"===o.env&&(o.watchTimer=setInterval(function(){o.watchMode&&(r.clearFileCache(),l(function(a,b,c,f,h){a?s.add(a,a.href||f.href):b&&(b=g(b),d.createCSS(e.document,b,f),t.setCSS(f.href,h.lastModified,b))}))},f.poll))}var n=e.document,o=a("../less")();b.exports=o,o.options=f;var p=o.environment,q=a("./file-manager")(f,o.logger),r=new q;p.addFileManager(r),o.FileManager=q,a("./log-listener")(o,f);var s=a("./error-reporting")(e,o,f),t=o.cache=f.cache||a("./cache")(e,f,o.logger);f.functions&&o.functions.functionRegistry.addMultiple(f.functions);var u=/^text\/(x-)?less$/;return o.watch=function(){return o.watchMode||(o.env="development",m()),this.watchMode=!0,!0},o.unwatch=function(){return clearInterval(o.watchTimer),this.watchMode=!1,!1},o.registerStylesheets=function(){return new Promise(function(a){var b=n.getElementsByTagName("link");o.sheets=[];for(var c=0;c<b.length;c++)("stylesheet/less"===b[c].rel||b[c].rel.match(/stylesheet/)&&b[c].type.match(u))&&o.sheets.push(b[c]);a()})},o.modifyVars=function(a){return o.refresh(!0,a,!1)},o.refresh=function(a,b,c){return(a||c)&&c!==!1&&r.clearFileCache(),new Promise(function(c,f){var h,i,k;h=i=new Date,l(function(a,b,j,l,m){a&&(s.add(a,a.href||l.href),f(a)),m.local?o.logger.info("loading "+l.href+" from cache."):(o.logger.info("rendered "+l.href+" successfully."),b=g(b),d.createCSS(e.document,b,l),t.setCSS(l.href,m.lastModified,b)),o.logger.info("css for "+l.href+" generated in "+(new Date-i)+"ms"),0===m.remaining&&(k=new Date-h,o.logger.info("less has finished. css generated in "+k+"ms"),c({startTime:h,endTime:i,totalMilliseconds:k,sheets:o.sheets.length})),i=new Date},a,b),j(b)})},o.refreshStyles=j,o}},{"../less":29,"./browser":3,"./cache":4,"./error-reporting":5,"./file-manager":6,"./log-listener":8,"./utils":9}],8:[function(a,b){b.exports=function(a,b){var c=4,d=3,e=2,f=1;b.logLevel="undefined"!=typeof b.logLevel?b.logLevel:"development"===b.env?d:f,b.loggers||(b.loggers=[{debug:function(a){b.logLevel>=c&&console.log(a)},info:function(a){b.logLevel>=d&&console.log(a)},warn:function(a){b.logLevel>=e&&console.warn(a)},error:function(a){b.logLevel>=f&&console.error(a)}}]);for(var g=0;g<b.loggers.length;g++)a.logger.addListener(b.loggers[g])}},{}],9:[function(a,b){b.exports={extractId:function(a){return a.replace(/^[a-z-]+:\/+?[^\/]+/,"").replace(/^\//,"").replace(/\.[a-zA-Z]+$/,"").replace(/[^\.\w-]+/g,"-").replace(/\./g,":")},addDataAttr:function(a,b){for(var c in b.dataset)b.dataset.hasOwnProperty(c)&&(a[c]="env"===c||"dumpLineNumbers"===c||"rootpath"===c||"errorReporting"===c?b.dataset[c]:JSON.parse(b.dataset[c]))}}},{}],10:[function(a,b){var c={};b.exports=c;var d=function(a,b,c){if(a)for(var d=0;d<c.length;d++)a.hasOwnProperty(c[d])&&(b[c[d]]=a[c[d]])},e=["paths","relativeUrls","rootpath","strictImports","insecure","dumpLineNumbers","compress","syncImport","chunkInput","mime","useFileCache","processImports","reference","pluginManager"];c.Parse=function(a){d(a,this,e),"string"==typeof this.paths&&(this.paths=[this.paths])};var f=["compress","ieCompat","strictMath","strictUnits","sourceMap","importMultiple","urlArgs","javascriptEnabled","pluginManager"];c.Eval=function(a,b){d(a,this,f),this.frames=b||[]},c.Eval.prototype.inParenthesis=function(){this.parensStack||(this.parensStack=[]),this.parensStack.push(!0)},c.Eval.prototype.outOfParenthesis=function(){this.parensStack.pop()},c.Eval.prototype.isMathOn=function(){return this.strictMath?this.parensStack&&this.parensStack.length:!0},c.Eval.prototype.isPathRelative=function(a){return!/^(?:[a-z-]+:|\/)/.test(a)},c.Eval.prototype.normalizePath=function(a){var b,c=a.split("/").reverse();for(a=[];0!==c.length;)switch(b=c.pop()){case".":break;case"..":0===a.length||".."===a[a.length-1]?a.push(b):a.pop();break;default:a.push(b)}return a.join("/")}},{}],11:[function(a,b){b.exports={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},{}],12:[function(a,b){b.exports={colors:a("./colors"),unitConversions:a("./unit-conversions")}},{"./colors":11,"./unit-conversions":13}],13:[function(a,b){b.exports={length:{m:1,cm:.01,mm:.001,"in":.0254,px:.0254/96,pt:.0254/72,pc:.0254/72*12},duration:{s:1,ms:.001},angle:{rad:1/(2*Math.PI),deg:1/360,grad:.0025,turn:1}}},{}],14:[function(a,b){var c=function(){};c.prototype.getPath=function(a){var b=a.lastIndexOf("?");return 0>b&&(a=a.slice(0,b)),b=a.lastIndexOf("/"),0>b&&(b=a.lastIndexOf("\\")),0>b?"":a.slice(0,b+1)},c.prototype.tryAppendLessExtension=function(a){return/(\.[a-z]*$)|([\?;].*)$/.test(a)?a:a+".less"},c.prototype.supportsSync=function(){return!1},c.prototype.alwaysMakePathsAbsolute=function(){return!1},c.prototype.isPathAbsolute=function(a){return/^(?:[a-z-]+:|\/|\\)/i.test(a)},c.prototype.join=function(a,b){return a?a+b:b},c.prototype.pathDiff=function(a,b){var c,d,e,f,g=this.extractUrlParts(a),h=this.extractUrlParts(b),i="";if(g.hostPart!==h.hostPart)return"";for(d=Math.max(h.directories.length,g.directories.length),c=0;d>c&&h.directories[c]===g.directories[c];c++);for(f=h.directories.slice(c),e=g.directories.slice(c),c=0;c<f.length-1;c++)i+="../";for(c=0;c<e.length-1;c++)i+=e[c]+"/";return i},c.prototype.extractUrlParts=function(a,b){var c,d,e=/^((?:[a-z-]+:)?\/+?(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,f=a.match(e),g={},h=[];if(!f)throw new Error("Could not parse sheet href - '"+a+"'");if(b&&(!f[1]||f[2])){if(d=b.match(e),!d)throw new Error("Could not parse page url - '"+b+"'");f[1]=f[1]||d[1]||"",f[2]||(f[3]=d[3]+f[3])}if(f[3]){for(h=f[3].replace(/\\/g,"/").split("/"),c=0;c<h.length;c++)"."===h[c]&&(h.splice(c,1),c-=1);for(c=0;c<h.length;c++)".."===h[c]&&c>0&&(h.splice(c-1,2),c-=2)}return g.hostPart=f[1],g.directories=h,g.path=(f[1]||"")+h.join("/"),g.fileUrl=g.path+(f[4]||""),g.url=g.fileUrl+(f[5]||""),g},b.exports=c},{}],15:[function(a,b){var c=function(a,b){this.fileManagers=b||[],a=a||{};for(var c=["encodeBase64","mimeLookup","charsetLookup","getSourceMapGenerator"],d=[],e=d.concat(c),f=0;f<e.length;f++){var g=e[f],h=a[g];h?this[g]=h.bind(a):f<d.length&&this.warn("missing required function in environment - "+g)}};c.prototype.getFileManager=function(a,b,c,d,e){var f=this.fileManagers;c.pluginManager&&(f=[].concat(f).concat(c.pluginManager.getFileManagers()));for(var g=f.length-1;g>=0;g--){var h=f[g];if(h[e?"supportsSync":"supports"](a,b,c,d))return h}return null},c.prototype.addFileManager=function(a){this.fileManagers.push(a)},c.prototype.clearFileManagers=function(){this.fileManagers=[]},b.exports=c},{}],16:[function(a){function b(a,b,d){var e,f,g,h,i=b.alpha,j=d.alpha,k=[];g=j+i*(1-j);for(var l=0;3>l;l++)e=b.rgb[l]/255,f=d.rgb[l]/255,h=a(e,f),g&&(h=(j*f+i*(e-j*(e+f-h)))/g),k[l]=255*h;return new c(k,g)}var c=a("../tree/color"),d=a("./function-registry"),e={multiply:function(a,b){return a*b},screen:function(a,b){return a+b-a*b},overlay:function(a,b){return a*=2,1>=a?e.multiply(a,b):e.screen(a-1,b)},softlight:function(a,b){var c=1,d=a;return b>.5&&(d=1,c=a>.25?Math.sqrt(a):((16*a-12)*a+4)*a),a-(1-2*b)*d*(c-a)},hardlight:function(a,b){return e.overlay(b,a)},difference:function(a,b){return Math.abs(a-b)},exclusion:function(a,b){return a+b-2*a*b},average:function(a,b){return(a+b)/2},negation:function(a,b){return 1-Math.abs(a+b-1)}};for(var f in e)e.hasOwnProperty(f)&&(b[f]=b.bind(null,e[f]));d.addMultiple(b)},{"../tree/color":46,"./function-registry":21}],17:[function(a){function b(a){return Math.min(1,Math.max(0,a))}function c(a){return f.hsla(a.h,a.s,a.l,a.a)}function d(a){if(a instanceof g)return parseFloat(a.unit.is("%")?a.value/100:a.value);if("number"==typeof a)return a;throw{type:"Argument",message:"color functions take numbers as parameters"}}function e(a,b){return a instanceof g&&a.unit.is("%")?parseFloat(a.value*b/100):d(a)}var f,g=a("../tree/dimension"),h=a("../tree/color"),i=a("../tree/quoted"),j=a("../tree/anonymous"),k=a("./function-registry");f={rgb:function(a,b,c){return f.rgba(a,b,c,1)},rgba:function(a,b,c,f){var g=[a,b,c].map(function(a){return e(a,255)});return f=d(f),new h(g,f)},hsl:function(a,b,c){return f.hsla(a,b,c,1)},hsla:function(a,c,e,g){function h(a){return a=0>a?a+1:a>1?a-1:a,1>6*a?j+(i-j)*a*6:1>2*a?i:2>3*a?j+(i-j)*(2/3-a)*6:j}a=d(a)%360/360,c=b(d(c)),e=b(d(e)),g=b(d(g));var i=.5>=e?e*(c+1):e+c-e*c,j=2*e-i;return f.rgba(255*h(a+1/3),255*h(a),255*h(a-1/3),g)},hsv:function(a,b,c){return f.hsva(a,b,c,1)},hsva:function(a,b,c,e){a=d(a)%360/360*360,b=d(b),c=d(c),e=d(e);var g,h;g=Math.floor(a/60%6),h=a/60-g;var i=[c,c*(1-b),c*(1-h*b),c*(1-(1-h)*b)],j=[[0,3,1],[2,0,1],[1,0,3],[1,2,0],[3,1,0],[0,1,2]];return f.rgba(255*i[j[g][0]],255*i[j[g][1]],255*i[j[g][2]],e)},hue:function(a){return new g(a.toHSL().h)},saturation:function(a){return new g(100*a.toHSL().s,"%")},lightness:function(a){return new g(100*a.toHSL().l,"%")},hsvhue:function(a){return new g(a.toHSV().h)},hsvsaturation:function(a){return new g(100*a.toHSV().s,"%")},hsvvalue:function(a){return new g(100*a.toHSV().v,"%")},red:function(a){return new g(a.rgb[0])},green:function(a){return new g(a.rgb[1])},blue:function(a){return new g(a.rgb[2])},alpha:function(a){return new g(a.toHSL().a)},luma:function(a){return new g(a.luma()*a.alpha*100,"%")},luminance:function(a){var b=.2126*a.rgb[0]/255+.7152*a.rgb[1]/255+.0722*a.rgb[2]/255;return new g(b*a.alpha*100,"%")},saturate:function(a,d){if(!a.rgb)return null;var e=a.toHSL();return e.s+=d.value/100,e.s=b(e.s),c(e)},desaturate:function(a,d){var e=a.toHSL();return e.s-=d.value/100,e.s=b(e.s),c(e)},lighten:function(a,d){var e=a.toHSL();return e.l+=d.value/100,e.l=b(e.l),c(e)},darken:function(a,d){var e=a.toHSL();return e.l-=d.value/100,e.l=b(e.l),c(e)},fadein:function(a,d){var e=a.toHSL();return e.a+=d.value/100,e.a=b(e.a),c(e)},fadeout:function(a,d){var e=a.toHSL();return e.a-=d.value/100,e.a=b(e.a),c(e)},fade:function(a,d){var e=a.toHSL();return e.a=d.value/100,e.a=b(e.a),c(e)},spin:function(a,b){var d=a.toHSL(),e=(d.h+b.value)%360;return d.h=0>e?360+e:e,c(d)},mix:function(a,b,c){c||(c=new g(50));var d=c.value/100,e=2*d-1,f=a.toHSL().a-b.toHSL().a,i=((e*f==-1?e:(e+f)/(1+e*f))+1)/2,j=1-i,k=[a.rgb[0]*i+b.rgb[0]*j,a.rgb[1]*i+b.rgb[1]*j,a.rgb[2]*i+b.rgb[2]*j],l=a.alpha*d+b.alpha*(1-d);return new h(k,l)},greyscale:function(a){return f.desaturate(a,new g(100))},contrast:function(a,b,c,e){if(!a.rgb)return null;if("undefined"==typeof c&&(c=f.rgba(255,255,255,1)),"undefined"==typeof b&&(b=f.rgba(0,0,0,1)),b.luma()>c.luma()){var g=c;c=b,b=g}return e="undefined"==typeof e?.43:d(e),a.luma()<e?c:b},argb:function(a){return new j(a.toARGB())},color:function(a){if(a instanceof i&&/^#([a-f0-9]{6}|[a-f0-9]{3})$/i.test(a.value))return new h(a.value.slice(1));if(a instanceof h||(a=h.fromKeyword(a.value)))return a.keyword=void 0,a;throw{type:"Argument",message:"argument must be a color keyword or 3/6 digit hex e.g. #FFF"}},tint:function(a,b){return f.mix(f.rgb(255,255,255),a,b)},shade:function(a,b){return f.mix(f.rgb(0,0,0),a,b)}},k.addMultiple(f)},{"../tree/anonymous":42,"../tree/color":46,"../tree/dimension":52,"../tree/quoted":69,"./function-registry":21}],18:[function(a,b){b.exports=function(b){var c=a("../tree/anonymous"),d=a("../tree/url"),e=a("./function-registry"),f=function(a,b){return new d(b,a.index,a.currentFileInfo).eval(a.context)},g=a("../logger");e.add("data-uri",function(a,e){var h=a.value,i=e&&e.value,j=b.getFileManager(i,this.context.currentFileInfo,this.context,b,!0);if(!j)return f(this,e||a);var k=!1;arguments.length<2&&(i=h);var l=i.indexOf("#"),m="";-1!==l&&(m=i.slice(l),i=i.slice(0,l));var n=this.currentFileInfo.relativeUrls?this.currentFileInfo.currentDirectory:this.currentFileInfo.entryPath;if(arguments.length<2){h=b.mimeLookup(i);var o=b.charsetLookup(h);k=["US-ASCII","UTF-8"].indexOf(o)<0,k&&(h+=";base64")}else k=/;base64$/.test(h);var p=j.loadFileSync(i,n,this.context,b);if(!p.contents)return g.warn("Skipped data-uri embedding because file not found"),f(this,e||a);var q=p.contents,r=32,s=parseInt(q.length/1024,10);if(s>=r&&this.context.ieCompat!==!1)return g.warn("Skipped data-uri embedding of %s because its size (%dKB) exceeds IE8-safe %dKB!",i,s,r),f(this,e||a);q=k?q.toString("base64"):encodeURIComponent(q);var t='"data:'+h+","+q+m+'"';return new d(new c(t),this.index,this.currentFileInfo)})}},{"../logger":31,"../tree/anonymous":42,"../tree/url":76,"./function-registry":21}],19:[function(a,b){var c=a("../tree/keyword"),d=a("./function-registry"),e={eval:function(){var a=this.value_,b=this.error_;if(b)throw b;return null!=a?a?c.True:c.False:void 0},value:function(a){this.value_=a},error:function(a){this.error_=a},reset:function(){this.value_=this.error_=null}};d.add("default",e.eval.bind(e)),b.exports=e},{"../tree/keyword":61,"./function-registry":21}],20:[function(a,b){var c=a("./function-registry"),d=function(a,b,d,e){this.name=a.toLowerCase(),this.function=c.get(this.name),this.index=d,this.context=b,this.currentFileInfo=e};d.prototype.isValid=function(){return Boolean(this.function)},d.prototype.call=function(a){return this.function.apply(this,a)},b.exports=d},{"./function-registry":21}],21:[function(a,b){b.exports={_data:{},add:function(a,b){this._data.hasOwnProperty(a),this._data[a]=b},addMultiple:function(a){Object.keys(a).forEach(function(b){this.add(b,a[b])}.bind(this))},get:function(a){return this._data[a]}}},{}],22:[function(a,b){b.exports=function(b){var c={functionRegistry:a("./function-registry"),functionCaller:a("./function-caller")};return a("./default"),a("./color"),a("./color-blending"),a("./data-uri")(b),a("./math"),a("./number"),a("./string"),a("./svg")(b),a("./types"),c}},{"./color":17,"./color-blending":16,"./data-uri":18,"./default":19,"./function-caller":20,"./function-registry":21,"./math":23,"./number":24,"./string":25,"./svg":26,"./types":27}],23:[function(a){function b(a,b,d){if(!(d instanceof c))throw{type:"Argument",message:"argument must be a number"};return null==b?b=d.unit:d=d.unify(),new c(a(parseFloat(d.value)),b)}var c=a("../tree/dimension"),d=a("./function-registry"),e={ceil:null,floor:null,sqrt:null,abs:null,tan:"",sin:"",cos:"",atan:"rad",asin:"rad",acos:"rad"};for(var f in e)e.hasOwnProperty(f)&&(e[f]=b.bind(null,Math[f],e[f]));e.round=function(a,c){var d="undefined"==typeof c?0:c.value;return b(function(a){return a.toFixed(d)},null,a)},d.addMultiple(e)},{"../tree/dimension":52,"./function-registry":21}],24:[function(a){var b=a("../tree/dimension"),c=a("../tree/anonymous"),d=a("./function-registry"),e=function(a,d){switch(d=Array.prototype.slice.call(d),d.length){case 0:throw{type:"Argument",message:"one or more arguments required"}}var e,f,g,h,i,j,k,l,m=[],n={};for(e=0;e<d.length;e++)if(g=d[e],g instanceof b)if(h=""===g.unit.toString()&&void 0!==l?new b(g.value,l).unify():g.unify(),j=""===h.unit.toString()&&void 0!==k?k:h.unit.toString(),k=""!==j&&void 0===k||""!==j&&""===m[0].unify().unit.toString()?j:k,l=""!==j&&void 0===l?g.unit.toString():l,f=void 0!==n[""]&&""!==j&&j===k?n[""]:n[j],void 0!==f)i=""===m[f].unit.toString()&&void 0!==l?new b(m[f].value,l).unify():m[f].unify(),(a&&h.value<i.value||!a&&h.value>i.value)&&(m[f]=g);else{if(void 0!==k&&j!==k)throw{type:"Argument",message:"incompatible types"};n[j]=m.length,m.push(g)}else Array.isArray(d[e].value)&&Array.prototype.push.apply(d,Array.prototype.slice.call(d[e].value));return 1==m.length?m[0]:(d=m.map(function(a){return a.toCSS(this.context)}).join(this.context.compress?",":", "),new c((a?"min":"max")+"("+d+")"))};d.addMultiple({min:function(){return e(!0,arguments)},max:function(){return e(!1,arguments)},convert:function(a,b){return a.convertTo(b.value)},pi:function(){return new b(Math.PI)},mod:function(a,c){return new b(a.value%c.value,a.unit)},pow:function(a,c){if("number"==typeof a&&"number"==typeof c)a=new b(a),c=new b(c);else if(!(a instanceof b&&c instanceof b))throw{type:"Argument",message:"arguments must be numbers"};return new b(Math.pow(a.value,c.value),a.unit)},percentage:function(a){return new b(100*a.value,"%")}})},{"../tree/anonymous":42,"../tree/dimension":52,"./function-registry":21}],25:[function(a){var b=a("../tree/quoted"),c=a("../tree/anonymous"),d=a("../tree/javascript"),e=a("./function-registry");e.addMultiple({e:function(a){return new c(a instanceof d?a.evaluated:a.value)},escape:function(a){return new c(encodeURI(a.value).replace(/=/g,"%3D").replace(/:/g,"%3A").replace(/#/g,"%23").replace(/;/g,"%3B").replace(/\(/g,"%28").replace(/\)/g,"%29"))},replace:function(a,c,d,e){var f=a.value;return f=f.replace(new RegExp(c.value,e?e.value:""),d.value),new b(a.quote||"",f,a.escaped)},"%":function(a){for(var c=Array.prototype.slice.call(arguments,1),d=a.value,e=0;e<c.length;e++)d=d.replace(/%[sda]/i,function(a){var b=a.match(/s/i)?c[e].value:c[e].toCSS();return a.match(/[A-Z]$/)?encodeURIComponent(b):b});return d=d.replace(/%%/g,"%"),new b(a.quote||"",d,a.escaped)}})},{"../tree/anonymous":42,"../tree/javascript":59,"../tree/quoted":69,"./function-registry":21}],26:[function(a,b){b.exports=function(b){var c=a("../tree/dimension"),d=a("../tree/color"),e=a("../tree/anonymous"),f=a("../tree/url"),g=a("./function-registry");g.add("svg-gradient",function(a){function g(){throw{type:"Argument",message:"svg-gradient expects direction, start_color [start_position], [color position,]..., end_color [end_position]"}}arguments.length<3&&g();var h,i,j,k,l,m,n,o=Array.prototype.slice.call(arguments,1),p="linear",q='x="0" y="0" width="1" height="1"',r=!0,s={compress:!1},t=a.toCSS(s);switch(t){case"to bottom":h='x1="0%" y1="0%" x2="0%" y2="100%"';break;case"to right":h='x1="0%" y1="0%" x2="100%" y2="0%"';break;case"to bottom right":h='x1="0%" y1="0%" x2="100%" y2="100%"';break;case"to top right":h='x1="0%" y1="100%" x2="100%" y2="0%"';break;case"ellipse":case"ellipse at center":p="radial",h='cx="50%" cy="50%" r="75%"',q='x="-50" y="-50" width="101" height="101"';break;default:throw{type:"Argument",message:"svg-gradient direction must be 'to bottom', 'to right', 'to bottom right', 'to top right' or 'ellipse at center'"}}for(i='<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none"><'+p+'Gradient id="gradient" gradientUnits="userSpaceOnUse" '+h+">",j=0;j<o.length;j+=1)o[j].value?(k=o[j].value[0],l=o[j].value[1]):(k=o[j],l=void 0),k instanceof d&&((0===j||j+1===o.length)&&void 0===l||l instanceof c)||g(),m=l?l.toCSS(s):0===j?"0%":"100%",n=k.alpha,i+='<stop offset="'+m+'" stop-color="'+k.toRGB()+'"'+(1>n?' stop-opacity="'+n+'"':"")+"/>";if(i+="</"+p+"Gradient><rect "+q+' fill="url(#gradient)" /></svg>',r)try{i=b.encodeBase64(i)}catch(u){r=!1}return i="'data:image/svg+xml"+(r?";base64":"")+","+i+"'",new f(new e(i),this.index,this.currentFileInfo)})}},{"../tree/anonymous":42,"../tree/color":46,"../tree/dimension":52,"../tree/url":76,"./function-registry":21}],27:[function(a){var b=a("../tree/keyword"),c=a("../tree/dimension"),d=a("../tree/color"),e=a("../tree/quoted"),f=a("../tree/anonymous"),g=a("../tree/url"),h=a("../tree/operation"),i=a("./function-registry"),j=function(a,c){return a instanceof c?b.True:b.False},k=function(a,d){return a instanceof c&&a.unit.is(d.value||d)?b.True:b.False};i.addMultiple({iscolor:function(a){return j(a,d)},isnumber:function(a){return j(a,c)},isstring:function(a){return j(a,e)},iskeyword:function(a){return j(a,b)},isurl:function(a){return j(a,g)},ispixel:function(a){return k(a,"px")},ispercentage:function(a){return k(a,"%")},isem:function(a){return k(a,"em")},isunit:k,unit:function(a,d){if(!(a instanceof c))throw{type:"Argument",message:"the first argument to unit must be a number"+(a instanceof h?". Have you forgotten parenthesis?":"")};
return d=d?d instanceof b?d.value:d.toCSS():"",new c(a.value,d)},"get-unit":function(a){return new f(a.unit)},extract:function(a,b){return b=b.value-1,Array.isArray(a.value)?a.value[b]:Array(a)[b]},length:function(a){var b=Array.isArray(a.value)?a.value.length:1;return new c(b)}})},{"../tree/anonymous":42,"../tree/color":46,"../tree/dimension":52,"../tree/keyword":61,"../tree/operation":67,"../tree/quoted":69,"../tree/url":76,"./function-registry":21}],28:[function(a,b){var c=a("./contexts"),d=a("./parser/parser");b.exports=function(a){var b=function(a,b){this.rootFilename=b.filename,this.paths=a.paths||[],this.contents={},this.contentsIgnoredChars={},this.mime=a.mime,this.error=null,this.context=a,this.queue=[],this.files=[]};return b.prototype.push=function(b,e,f,g,h){var i=this;this.queue.push(b);var j=function(a,c,d){i.queue.splice(i.queue.indexOf(b),1);var e=d===i.rootFilename;i.files[d]=c,a&&!i.error&&(i.error=a),h(a,c,e,d)},k={relativeUrls:this.context.relativeUrls,entryPath:f.entryPath,rootpath:f.rootpath,rootFilename:f.rootFilename},l=a.getFileManager(b,f.currentDirectory,this.context,a);return l?(e&&(b=l.tryAppendLessExtension(b)),void l.loadFile(b,f.currentDirectory,this.context,a).then(function(a){var b=a.filename,e=a.contents;k.currentDirectory=l.getPath(b),k.relativeUrls&&(k.rootpath=l.join(i.context.rootpath||"",l.pathDiff(k.currentDirectory,k.entryPath)),!l.isPathAbsolute(k.rootpath)&&l.alwaysMakePathsAbsolute()&&(k.rootpath=l.join(k.entryPath,k.rootpath))),k.filename=b;var h=new c.Parse(i.context);h.processImports=!1,i.contents[b]=e,(f.reference||g.reference)&&(k.reference=!0),g.inline?j(null,e,b):new d(h,i,k).parse(e,function(a,c){j(a,c,b)})},function(a){j(a)})):void j({message:"Could not find a file-manager for "+b})},b}},{"./contexts":10,"./parser/parser":35}],29:[function(a,b){b.exports=function(b,c){var d,e,f,g,h,i={version:[2,0,"0-b2"],data:a("./data"),tree:a("./tree"),Environment:h=a("./environment/environment"),AbstractFileManager:a("./environment/abstract-file-manager"),environment:b=new h(b,c),visitors:a("./visitors"),Parser:a("./parser/parser"),functions:a("./functions")(b),contexts:a("./contexts"),SourceMapOutput:d=a("./source-map-output")(b),SourceMapBuilder:e=a("./source-map-builder")(d),ParseTree:f=a("./parse-tree")(e),ImportManager:g=a("./import-manager")(b),render:a("./render")(b,f,g),LessError:a("./less-error"),transformTree:a("./transform-tree"),utils:a("./utils"),PluginManager:a("./plugin-manager"),logger:a("./logger")};return i}},{"./contexts":10,"./data":12,"./environment/abstract-file-manager":14,"./environment/environment":15,"./functions":22,"./import-manager":28,"./less-error":30,"./logger":31,"./parse-tree":32,"./parser/parser":35,"./plugin-manager":36,"./render":37,"./source-map-builder":38,"./source-map-output":39,"./transform-tree":40,"./tree":58,"./utils":79,"./visitors":83}],30:[function(a,b){var c=a("./utils"),d=b.exports=function(a,b,d){Error.call(this);var e=a.filename||d;if(b&&e){var f=b.contents[e],g=c.getLocation(a.index,f),h=g.line,i=g.column,j=a.call&&c.getLocation(a.call,f).line,k=f.split("\n");this.type=a.type||"Syntax",this.filename=e,this.index=a.index,this.line="number"==typeof h?h+1:null,this.callLine=j+1,this.callExtract=k[j],this.column=i,this.extract=[k[h-1],k[h],k[h+1]]}this.message=a.message,this.stack=a.stack};d.prototype=Object.create(Error.prototype),d.prototype.constructor=d},{"./utils":79}],31:[function(a,b){b.exports={error:function(a){this._fireEvent("error",a)},warn:function(a){this._fireEvent("warn",a)},info:function(a){this._fireEvent("info",a)},debug:function(a){this._fireEvent("debug",a)},addListener:function(a){this._listeners.push(a)},removeListener:function(a){for(var b=0;b<this._listeners.length;b++)if(this._listeners[b]===a)return void this._listeners.splice(b,1)},_fireEvent:function(a,b){for(var c=0;c<this._listeners.length;c++){var d=this._listeners[c][a];d&&d(b)}},_listeners:[]}},{}],32:[function(a,b){var c=a("./less-error"),d=a("./transform-tree");b.exports=function(a){var b=function(a,b){this.root=a,this.imports=b};return b.prototype.toCSS=function(b){var e,f,g={};try{e=d(this.root,b)}catch(h){throw new c(h,this.imports)}try{var i={compress:Boolean(b.compress),dumpLineNumbers:b.dumpLineNumbers,strictUnits:Boolean(b.strictUnits),numPrecision:8};b.sourceMap?(f=new a(b.sourceMap),g.css=f.toCSS(e,i,this.imports)):g.css=e.toCSS(i)}catch(h){throw new c(h,this.imports)}if(b.pluginManager)for(var j=b.pluginManager.getPostProcessors(),k=0;k<j.length;k++)g.css=j[k].process(g.css,{sourceMap:f,options:b,imports:this.imports});return b.sourceMap&&(g.map=f.getExternalSourceMap()),g},b}},{"./less-error":30,"./transform-tree":40}],33:[function(a,b){b.exports=function(a,b){function c(b){var c=h-q;512>c&&!b||!c||(p.push(a.slice(q,h+1)),q=h+1)}var d,e,f,g,h,i,j,k,l,m=a.length,n=0,o=0,p=[],q=0;for(h=0;m>h;h++)if(j=a.charCodeAt(h),!(j>=97&&122>=j||34>j))switch(j){case 40:o++,e=h;continue;case 41:if(--o<0)return b("missing opening `(`",h);continue;case 59:o||c();continue;case 123:n++,d=h;continue;case 125:if(--n<0)return b("missing opening `{`",h);n||o||c();continue;case 92:if(m-1>h){h++;continue}return b("unescaped `\\`",h);case 34:case 39:case 96:for(l=0,i=h,h+=1;m>h;h++)if(k=a.charCodeAt(h),!(k>96)){if(k==j){l=1;break}if(92==k){if(h==m-1)return b("unescaped `\\`",h);h++}}if(l)continue;return b("unmatched `"+String.fromCharCode(j)+"`",i);case 47:if(o||h==m-1)continue;if(k=a.charCodeAt(h+1),47==k)for(h+=2;m>h&&(k=a.charCodeAt(h),!(13>=k)||10!=k&&13!=k);h++);else if(42==k){for(f=i=h,h+=2;m-1>h&&(k=a.charCodeAt(h),125==k&&(g=h),42!=k||47!=a.charCodeAt(h+1));h++);if(h==m-1)return b("missing closing `*/`",i);h++}continue;case 42:if(m-1>h&&47==a.charCodeAt(h+1))return b("unmatched `/*`",h);continue}return 0!==n?f>d&&g>f?b("missing closing `}` or `*/`",d):b("missing closing `}`",d):0!==o?b("missing closing `)`",e):(c(!0),p)}},{}],34:[function(a,b){var c=a("./chunker");b.exports=function(){function a(){k.i>i&&(h=h.slice(k.i-i),i=k.i)}var b,d,e,f,g,h,i,j=[],k={};k.save=function(){i=k.i,j.push({current:h,i:k.i,j:d})},k.restore=function(a){k.i>e&&(e=k.i,f=a);var b=j.pop();h=b.current,i=k.i=b.i,d=b.j},k.forget=function(){j.pop()},k.isWhitespace=function(a){var c=k.i+(a||0),d=b.charCodeAt(c);return d===l||d===o||d===m||d===n},k.$=function(c){var d,e,f=typeof c;return"string"===f?b.charAt(k.i)!==c?null:(t(1),c):(a(),(d=c.exec(h))?(e=d[0].length,t(e),"string"==typeof d?d:1===d.length?d[0]:d):null)},k.$re=function(a){k.i>i&&(h=h.slice(k.i-i),i=k.i);var b=a.exec(h);return b?(t(b[0].length),"string"==typeof b?b:1===b.length?b[0]:b):null},k.$char=function(a){return b.charAt(k.i)!==a?null:(t(1),a)};var l=32,m=9,n=10,o=13,p=43,q=44,r=47,s=57;k.autoCommentAbsorb=!0,k.commentStore=[],k.finished=!1;var t=function(a){for(var c,e,f,j=k.i,p=d,q=k.i-i,s=k.i+h.length-q,u=k.i+=a,v=b;k.i<s;k.i++){if(c=v.charCodeAt(k.i),k.autoCommentAbsorb&&c===r){if(e=v[k.i+1],"/"===e){f={index:k.i,isLineComment:!0};var w=v.indexOf("\n",k.i+1);0>w&&(w=s),k.i=w,f.text=v.substr(f.i,k.i-f.i),k.commentStore.push(f);continue}if("*"===e){var x=v.substr(k.i),y=x.match(/^\/\*(?:[^*]|\*+[^\/*])*\*+\//);if(y){f={index:k.i,text:y[0],isLineComment:!1},k.i+=f.text.length-1,k.commentStore.push(f);continue}}break}if(c!==l&&c!==n&&c!==m&&c!==o)break}if(h=h.slice(a+k.i-u+q),i=k.i,!h.length){if(d<g.length-1)return h=g[++d],t(0),!0;k.finished=!0}return j!==k.i||p!==d};return k.peek=function(a){return"string"==typeof a?b.charAt(k.i)===a:a.test(h)},k.peekChar=function(a){return b.charAt(k.i)===a},k.currentChar=function(){return b.charAt(k.i)},k.getInput=function(){return b},k.peekNotNumeric=function(){var a=b.charCodeAt(k.i);return a>s||p>a||a===r||a===q},k.start=function(a,f,j){b=a,k.i=d=i=e=0,g=f?c(a,j):[a],h=g[0],t(0)},k.end=function(){var a,c=k.i>=b.length-1;return k.i<e&&(a=f,k.i=e),{isFinished:c,furthest:k.i,furthestPossibleErrorMessage:a,furthestReachedEnd:k.i>=b.length-1,furthestChar:b[k.i]}},k}},{"./chunker":33}],35:[function(a,b){var c=a("../less-error"),d=a("../tree"),e=a("../visitors"),f=a("./parser-input"),g=a("../utils"),h=function i(a,b,h){function j(a,b){var c="[object Function]"===Object.prototype.toString.call(a)?a.call(n):o.$(a);return c?c:void l(b||("string"==typeof a?"expected '"+a+"' got '"+o.currentChar()+"'":"unexpected token"))}function k(a,b){return o.$char(a)?a:void l(b||"expected '"+a+"' got '"+o.currentChar()+"'")}function l(a,d){throw new c({index:o.i,filename:h.filename,type:d||"Syntax",message:a},b)}function m(a){var b=h.filename;return{lineNumber:g.getLocation(a,o.getInput()).line+1,fileName:b}}var n,o=f();return{parse:function(f,g,j){var k,l,m,n=null,p="";l=j&&j.globalVars?i.serializeVars(j.globalVars)+"\n":"",m=j&&j.modifyVars?"\n"+i.serializeVars(j.modifyVars):"",(l||j&&j.banner)&&(p=(j&&j.banner?j.banner:"")+l,b.contentsIgnoredChars[h.filename]=p.length),f=f.replace(/\r\n/g,"\n"),f=p+f.replace(/^\uFEFF/,"")+m,b.contents[h.filename]=f;try{o.start(f,a.chunkInput,function(a,d){throw c({index:d,type:"Parse",message:a,filename:h.filename},b)}),k=new d.Ruleset(null,this.parsers.primary()),k.root=!0,k.firstRoot=!0}catch(q){return g(new c(q,b,h.filename))}var r=o.end();if(!r.isFinished){var s=r.furthestPossibleErrorMessage;s||(s="Unrecognised input","}"===r.furthestChar?s+=". Possibly missing opening '{'":")"===r.furthestChar?s+=". Possibly missing opening '('":r.furthestReachedEnd&&(s+=". Possibly missing something")),n=new c({type:"Parse",message:s,index:r.furthest,filename:h.filename},b)}var t=function(a){return a=n||a||b.error,a?(a instanceof c||(a=new c(a,b,h.filename)),g(a)):g(null,k)};return a.processImports===!1?t():void new e.ImportVisitor(b,t).run(k)},parsers:n={primary:function(){for(var a,b=this.mixin,c=[];!o.finished;){for(;;){if(a=this.comment(),!a)break;c.push(a)}if(o.peek("}"))break;if(a=this.extendRule()||b.definition()||this.rule()||this.ruleset()||b.call()||this.rulesetCall()||this.directive())c.push(a);else if(!o.$re(/^[\s\n]+/)&&!o.$re(/^;+/))break}return c},comment:function(){if(o.commentStore.length){var a=o.commentStore.shift();return new d.Comment(a.text,a.isLineComment,a.index,h)}},entities:{quoted:function(){var a,b=o.i;return a=o.$re(/^(~)?("((?:[^"\\\r\n]|\\.)*)"|'((?:[^'\\\r\n]|\\.)*)')/),a?new d.Quoted(a[2],a[3]||a[4],Boolean(a[1]),b,h):void 0},keyword:function(){var a=o.$re(/^%|^[_A-Za-z-][_A-Za-z0-9-]*/);return a?d.Color.fromKeyword(a)||new d.Keyword(a):void 0},call:function(){var a,b,c,e,f=o.i;if(!o.peek(/^url\(/i))return o.save(),(a=o.$re(/^([\w-]+|%|progid:[\w\.]+)\(/))?(a=a[1],b=a.toLowerCase(),"alpha"===b&&(e=n.alpha())?e:(c=this.arguments(),o.$char(")")?(o.forget(),new d.Call(a,c,f,h)):void o.restore("Could not parse call arguments or missing ')'"))):void o.forget()},arguments:function(){for(var a,b=[];;){if(a=this.assignment()||n.expression(),!a)break;if(b.push(a),!o.$char(","))break}return b},literal:function(){return this.dimension()||this.color()||this.quoted()||this.unicodeDescriptor()},assignment:function(){var a,b;return a=o.$re(/^\w+(?=\s?=)/i),a&&o.$char("=")?(b=n.entity(),b?new d.Assignment(a,b):void 0):void 0},url:function(){var a,b=o.i;return o.autoCommentAbsorb=!1,"u"===o.currentChar()&&o.$re(/^url\(/)?(a=this.quoted()||this.variable()||o.$re(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/)||"",o.autoCommentAbsorb=!0,k(")"),new d.URL(null!=a.value||a instanceof d.Variable?a:new d.Anonymous(a),b,h)):void(o.autoCommentAbsorb=!0)},variable:function(){var a,b=o.i;return"@"===o.currentChar()&&(a=o.$re(/^@@?[\w-]+/))?new d.Variable(a,b,h):void 0},variableCurly:function(){var a,b=o.i;return"@"===o.currentChar()&&(a=o.$re(/^@\{([\w-]+)\}/))?new d.Variable("@"+a[1],b,h):void 0},color:function(){var a;if("#"===o.currentChar()&&(a=o.$re(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/))){var b=a.input.match(/^#([\w]+).*/);return b=b[1],b.match(/^[A-Fa-f0-9]+$/)||l("Invalid HEX color code"),new d.Color(a[1])}},dimension:function(){if(!o.peekNotNumeric()){var a=o.$re(/^([+-]?\d*\.?\d+)(%|[a-z]+)?/i);return a?new d.Dimension(a[1],a[2]):void 0}},unicodeDescriptor:function(){var a;return a=o.$re(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/),a?new d.UnicodeDescriptor(a[0]):void 0},javascript:function(){var a,b=o.i;return a=o.$re(/^(~)?`([^`]*)`/),a?new d.JavaScript(a[2],Boolean(a[1]),b,h):void 0}},variable:function(){var a;return"@"===o.currentChar()&&(a=o.$re(/^(@[\w-]+)\s*:/))?a[1]:void 0},rulesetCall:function(){var a;return"@"===o.currentChar()&&(a=o.$re(/^(@[\w-]+)\s*\(\s*\)\s*;/))?new d.RulesetCall(a[1]):void 0},extend:function(a){var b,c,e,f,g,h=o.i;if(o.$re(a?/^&:extend\(/:/^:extend\(/)){do{for(e=null,b=null;!(e=o.$re(/^(all)(?=\s*(\)|,))/))&&(c=this.element());)b?b.push(c):b=[c];e=e&&e[1],b||l("Missing target selector for :extend()."),g=new d.Extend(new d.Selector(b),e,h),f?f.push(g):f=[g]}while(o.$char(","));return j(/^\)/),a&&j(/^;/),f}},extendRule:function(){return this.extend(!0)},mixin:{call:function(){var a,b,c,e,f,g,i=o.currentChar(),j=!1,l=o.i;if("."===i||"#"===i){for(o.save();;){if(a=o.i,e=o.$re(/^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/),!e)break;c=new d.Element(f,e,a,h),b?b.push(c):b=[c],f=o.$char(">")}return b&&(o.$char("(")&&(g=this.args(!0).args,k(")")),n.important()&&(j=!0),n.end())?(o.forget(),new d.mixin.Call(b,g,l,h,j)):void o.restore()}},args:function(a){var b,c,e,f,g,h,i=n.entities,j={args:null,variadic:!1},k=[],m=[],p=[];for(o.save();;){if(a)h=n.detachedRuleset()||n.expression();else{if(o.commentStore.length=0,"."===o.currentChar()&&o.$re(/^\.{3}/)){j.variadic=!0,o.$char(";")&&!b&&(b=!0),(b?m:p).push({variadic:!0});break}h=i.variable()||i.literal()||i.keyword()}if(!h)break;f=null,h.throwAwayComments&&h.throwAwayComments(),g=h;var q=null;if(a?h.value&&1==h.value.length&&(q=h.value[0]):q=h,q&&q instanceof d.Variable)if(o.$char(":")){if(k.length>0&&(b&&l("Cannot mix ; and , as delimiter types"),c=!0),g=a&&n.detachedRuleset()||n.expression(),!g){if(!a)return o.restore(),j.args=[],j;l("could not understand value for named argument")}f=e=q.name}else{if(!a&&o.$re(/^\.{3}/)){j.variadic=!0,o.$char(";")&&!b&&(b=!0),(b?m:p).push({name:h.name,variadic:!0});break}a||(e=f=q.name,g=null)}g&&k.push(g),p.push({name:f,value:g}),o.$char(",")||(o.$char(";")||b)&&(c&&l("Cannot mix ; and , as delimiter types"),b=!0,k.length>1&&(g=new d.Value(k)),m.push({name:e,value:g}),e=null,k=[],c=!1)}return o.forget(),j.args=b?m:p,j},definition:function(){var a,b,c,e,f=[],g=!1;if(!("."!==o.currentChar()&&"#"!==o.currentChar()||o.peek(/^[^{]*\}/)))if(o.save(),b=o.$re(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/)){a=b[1];var h=this.args(!1);if(f=h.args,g=h.variadic,!o.$char(")"))return void o.restore("Missing closing ')'");if(o.commentStore.length=0,o.$re(/^when/)&&(e=j(n.conditions,"expected condition")),c=n.block())return o.forget(),new d.mixin.Definition(a,f,c,e,g);o.restore()}else o.forget()}},entity:function(){var a=this.entities;return this.comment()||a.literal()||a.variable()||a.url()||a.call()||a.keyword()||a.javascript()},end:function(){return o.$char(";")||o.peek("}")},alpha:function(){var a;if(o.$re(/^opacity=/i))return a=o.$re(/^\d+/),a||(a=j(this.entities.variable,"Could not parse alpha")),k(")"),new d.Alpha(a)},element:function(){var a,b,c,e=o.i;return b=this.combinator(),a=o.$re(/^(?:\d+\.\d+|\d+)%/)||o.$re(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/)||o.$char("*")||o.$char("&")||this.attribute()||o.$re(/^\([^()@]+\)/)||o.$re(/^[\.#](?=@)/)||this.entities.variableCurly(),a||(o.save(),o.$char("(")?(c=this.selector())&&o.$char(")")?(a=new d.Paren(c),o.forget()):o.restore("Missing closing ')'"):o.forget()),a?new d.Element(b,a,e,h):void 0},combinator:function(){var a=o.currentChar();if("/"===a){o.save();var b=o.$re(/^\/[a-z]+\//i);if(b)return o.forget(),new d.Combinator(b);o.restore()}if(">"===a||"+"===a||"~"===a||"|"===a||"^"===a){for(o.i++,"^"===a&&"^"===o.currentChar()&&(a="^^",o.i++);o.isWhitespace();)o.i++;return new d.Combinator(a)}return new d.Combinator(o.isWhitespace(-1)?" ":null)},lessSelector:function(){return this.selector(!0)},selector:function(a){for(var b,c,e,f,g,i,k,m=o.i;(a&&(g=this.extend())||a&&(i=o.$re(/^when/))||(f=this.element()))&&(i?k=j(this.conditions,"expected condition"):k?l("CSS guard can only be used at the end of selector"):g?c?c.push(g):c=[g]:(c&&l("Extend can only be used at the end of selector"),e=o.currentChar(),b?b.push(f):b=[f],f=null),"{"!==e&&"}"!==e&&";"!==e&&","!==e&&")"!==e););return b?new d.Selector(b,c,k,m,h):void(c&&l("Extend must be used to extend a selector, it cannot be used on its own"))},attribute:function(){if(o.$char("[")){var a,b,c,e=this.entities;return(a=e.variableCurly())||(a=j(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/)),c=o.$re(/^[|~*$^]?=/),c&&(b=e.quoted()||o.$re(/^[0-9]+%/)||o.$re(/^[\w-]+/)||e.variableCurly()),k("]"),new d.Attribute(a,c,b)}},block:function(){var a;return o.$char("{")&&(a=this.primary())&&o.$char("}")?a:void 0},blockRuleset:function(){var a=this.block();return a&&(a=new d.Ruleset(null,a)),a},detachedRuleset:function(){var a=this.blockRuleset();return a?new d.DetachedRuleset(a):void 0},ruleset:function(){var b,c,e,f;for(o.save(),a.dumpLineNumbers&&(f=m(o.i));;){if(c=this.lessSelector(),!c)break;if(b?b.push(c):b=[c],o.commentStore.length=0,c.condition&&b.length>1&&l("Guards are only currently allowed on a single selector."),!o.$char(","))break;c.condition&&l("Guards are only currently allowed on a single selector."),o.commentStore.length=0}if(b&&(e=this.block())){o.forget();var g=new d.Ruleset(b,e,a.strictImports);return a.dumpLineNumbers&&(g.debugInfo=f),g}o.restore()},rule:function(b){var c,e,f,g,i,j=o.i,k=o.currentChar();if("."!==k&&"#"!==k&&"&"!==k)if(o.save(),c=this.variable()||this.ruleProperty()){if(i="string"==typeof c,i&&(e=this.detachedRuleset()),o.commentStore.length=0,!e){g=!i&&c.pop().value;var l=!b&&(a.compress||i);if(l&&(e=this.value()),!e&&(e=this.anonymousValue()))return o.forget(),new d.Rule(c,e,!1,g,j,h);l||e||(e=this.value()),f=this.important()}if(e&&this.end())return o.forget(),new d.Rule(c,e,f,g,j,h);if(o.restore(),e&&!b)return this.rule(!0)}else o.forget()},anonymousValue:function(){var a=o.$re(/^([^@+\/'"*`(;{}-]*);/);return a?new d.Anonymous(a[1]):void 0},"import":function(){var a,b,c=o.i,e=o.$re(/^@import?\s+/);if(e){var f=(e?this.importOptions():null)||{};if(a=this.entities.quoted()||this.entities.url())return b=this.mediaFeatures(),o.$(";")||(o.i=c,l("missing semi-colon or unrecognised media features on import")),b=b&&new d.Value(b),new d.Import(a,b,f,c,h);o.i=c,l("malformed import statement")}},importOptions:function(){var a,b,c,d={};if(!o.$char("("))return null;do if(a=this.importOption()){switch(b=a,c=!0,b){case"css":b="less",c=!1;break;case"once":b="multiple",c=!1}if(d[b]=c,!o.$char(","))break}while(a);return k(")"),d},importOption:function(){var a=o.$re(/^(less|css|multiple|once|inline|reference)/);return a?a[1]:void 0},mediaFeature:function(){var a,b,c=this.entities,e=[];o.save();do if(a=c.keyword()||c.variable())e.push(a);else if(o.$char("(")){if(b=this.property(),a=this.value(),!o.$char(")"))return o.restore("Missing closing ')'"),null;if(b&&a)e.push(new d.Paren(new d.Rule(b,a,null,null,o.i,h,!0)));else{if(!a)return o.restore("badly formed media feature definition"),null;e.push(new d.Paren(a))}}while(a);return o.forget(),e.length>0?new d.Expression(e):void 0},mediaFeatures:function(){var a,b=this.entities,c=[];do if(a=this.mediaFeature()){if(c.push(a),!o.$char(","))break}else if(a=b.variable(),a&&(c.push(a),!o.$char(",")))break;while(a);return c.length>0?c:null},media:function(){var b,c,e,f;return a.dumpLineNumbers&&(f=m(o.i)),o.$re(/^@media/)&&(b=this.mediaFeatures(),c=this.block())?(e=new d.Media(c,b,o.i,h),a.dumpLineNumbers&&(e.debugInfo=f),e):void 0},directive:function(){var b,c,e,f,g,i,j,k=o.i,n=!0;if("@"===o.currentChar()){if(c=this["import"]()||this.media())return c;if(o.save(),b=o.$re(/^@[a-z-]+/)){switch(f=b,"-"==b.charAt(1)&&b.indexOf("-",2)>0&&(f="@"+b.slice(b.indexOf("-",2)+1)),f){case"@charset":g=!0,n=!1;break;case"@namespace":i=!0,n=!1;break;case"@keyframes":g=!0;break;case"@host":case"@page":case"@document":case"@supports":j=!0}return o.commentStore.length=0,g?(c=this.entity(),c||l("expected "+b+" identifier")):i?(c=this.expression(),c||l("expected "+b+" expression")):j&&(c=(o.$re(/^[^{;]+/)||"").trim(),c&&(c=new d.Anonymous(c))),n&&(e=this.blockRuleset()),e||!n&&c&&o.$char(";")?(o.forget(),new d.Directive(b,c,e,k,h,a.dumpLineNumbers?m(k):null)):void o.restore("directive options not recognised")}}},value:function(){var a,b=[];do if(a=this.expression(),a&&(b.push(a),!o.$char(",")))break;while(a);return b.length>0?new d.Value(b):void 0},important:function(){return"!"===o.currentChar()?o.$re(/^! *important/):void 0},sub:function(){var a,b;return o.$char("(")&&(a=this.addition())?(b=new d.Expression([a]),k(")"),b.parens=!0,b):void 0},multiplication:function(){var a,b,c,e,f;if(a=this.operand()){for(f=o.isWhitespace(-1);;){if(o.peek(/^\/[*\/]/))break;if(o.save(),c=o.$char("/")||o.$char("*"),!c){o.forget();break}if(b=this.operand(),!b){o.restore();break}o.forget(),a.parensInOp=!0,b.parensInOp=!0,e=new d.Operation(c,[e||a,b],f),f=o.isWhitespace(-1)}return e||a}},addition:function(){var a,b,c,e,f;if(a=this.multiplication()){for(f=o.isWhitespace(-1);;){if(c=o.$re(/^[-+]\s+/)||!f&&(o.$char("+")||o.$char("-")),!c)break;if(b=this.multiplication(),!b)break;a.parensInOp=!0,b.parensInOp=!0,e=new d.Operation(c,[e||a,b],f),f=o.isWhitespace(-1)}return e||a}},conditions:function(){var a,b,c,e=o.i;if(a=this.condition()){for(;;){if(!o.peek(/^,\s*(not\s*)?\(/)||!o.$char(","))break;if(b=this.condition(),!b)break;c=new d.Condition("or",c||a,b,e)}return c||a}},condition:function(){var a,b,c,e,f=this.entities,g=o.i,h=!1;return o.$re(/^not/)&&(h=!0),k("("),a=this.addition()||f.keyword()||f.quoted(),a?(e=o.$re(/^(?:>=|<=|=<|[<=>])/),e?(b=this.addition()||f.keyword()||f.quoted(),b?c=new d.Condition(e,a,b,g,h):l("expected expression")):c=new d.Condition("=",a,new d.Keyword("true"),g,h),k(")"),o.$re(/^and/)?new d.Condition("and",c,this.condition()):c):void 0},operand:function(){var a,b=this.entities;o.peek(/^-[@\(]/)&&(a=o.$char("-"));var c=this.sub()||b.dimension()||b.color()||b.variable()||b.call();return a&&(c.parensInOp=!0,c=new d.Negative(c)),c},expression:function(){var a,b,c=[];do a=this.comment(),a?c.push(a):(a=this.addition()||this.entity(),a&&(c.push(a),o.peek(/^\/[\/*]/)||(b=o.$char("/"),b&&c.push(new d.Anonymous(b)))));while(a);return c.length>0?new d.Expression(c):void 0},property:function(){var a=o.$re(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);return a?a[1]:void 0},ruleProperty:function(){function a(a){var b=o.i,c=o.$re(a);return c?(f.push(b),e.push(c[1])):void 0}var b,c,e=[],f=[];for(o.save(),a(/^(\*?)/);;)if(!a(/^((?:[\w-]+)|(?:@\{[\w-]+\}))/))break;if(e.length>1&&a(/^((?:\+_|\+)?)\s*:/)){for(o.forget(),""===e[0]&&(e.shift(),f.shift()),c=0;c<e.length;c++)b=e[c],e[c]="@"!==b.charAt(0)?new d.Keyword(b):new d.Variable("@"+b.slice(2,-1),f[c],h);return e}o.restore()}}}};h.serializeVars=function(a){var b="";for(var c in a)if(Object.hasOwnProperty.call(a,c)){var d=a[c];b+=("@"===c[0]?"":"@")+c+": "+d+(";"===(""+d).slice(-1)?"":";")}return b},b.exports=h},{"../less-error":30,"../tree":58,"../utils":79,"../visitors":83,"./parser-input":34}],36:[function(a,b){var c=function(a){this.less=a,this.visitors=[],this.postProcessors=[],this.installedPlugins=[],this.fileManagers=[]};c.prototype.addPlugins=function(a){if(a)for(var b=0;b<a.length;b++)this.addPlugin(a[b])},c.prototype.addPlugin=function(a){this.installedPlugins.push(a),a.install(this.less,this)},c.prototype.addVisitor=function(a){this.visitors.push(a)},c.prototype.addPostProcessor=function(a,b){var c;for(c=0;c<this.postProcessors.length&&!(this.postProcessors[c].priority>=b);c++);this.postProcessors.splice(c,0,{postProcessor:a,priority:b})},c.prototype.addFileManager=function(a){this.fileManagers.push(a)},c.prototype.getPostProcessors=function(){for(var a=[],b=0;b<this.postProcessors.length;b++)a.push(this.postProcessors[b].postProcessor);return a},c.prototype.getVisitors=function(){return this.visitors},c.prototype.getFileManagers=function(){return this.fileManagers},b.exports=c},{}],37:[function(a,b){var c="undefined"==typeof Promise?a("promise"):Promise,d=a("./contexts"),e=a("./parser/parser"),f=a("./plugin-manager");b.exports=function(a,b,g){var h=function(a,i,j){if(i=i||{},"function"==typeof i&&(j=i,i={}),!j){var k,l,m=new f(this);if(m.addPlugins(i.plugins),i.pluginManager=m,k=new d.Parse(i),i.rootFileInfo)l=i.rootFileInfo;else{var n=i.filename||"input",o=n.replace(/[^\/\\]*$/,"");l={filename:n,relativeUrls:k.relativeUrls,rootpath:k.rootpath||"",currentDirectory:o,entryPath:o,rootFilename:n}}var p=new g(k,l),q=new e(k,p,l);return new c(function(c,d){q.parse(a,function(a,e){if(a)return d(a);try{var f=new b(e,p),g=f.toCSS(i);c(g)}catch(h){d(h)}},i)})}h.call(this,a,i).then(function(a){j(null,a)},function(a){j(a)})};return h}},{"./contexts":10,"./parser/parser":35,"./plugin-manager":36,promise:void 0}],38:[function(a,b){b.exports=function(a){var b=function(a){this.options=a};return b.prototype.toCSS=function(b,c,d){var e=new a({contentsIgnoredCharsMap:d.contentsIgnoredChars,rootNode:b,contentsMap:d.contents,sourceMapFilename:this.options.sourceMapFilename,sourceMapURL:this.options.sourceMapURL,outputFilename:this.options.sourceMapOutputFilename,sourceMapBasepath:this.options.sourceMapBasepath,sourceMapRootpath:this.options.sourceMapRootpath,outputSourceFiles:this.options.outputSourceFiles,sourceMapGenerator:this.options.sourceMapGenerator,sourceMapFileInline:this.options.sourceMapFileInline}),f=e.toCSS(c);return this.sourceMap=e.sourceMap,this.sourceMapURL=e.sourceMapURL,this.options.sourceMapInputFilename&&(this.sourceMapInputFilename=e.normalizeFilename(this.options.sourceMapInputFilename)),f},b.prototype.getExternalSourceMap=function(){return this.sourceMap},b.prototype.setExternalSourceMap=function(a){this.sourceMap=a},b.prototype.isInline=function(){return this.options.sourceMapFileInline},b.prototype.getSourceMapURL=function(){return this.sourceMapURL},b.prototype.getOutputFilename=function(){return this.options.sourceMapOutputFilename},b.prototype.getInputFilename=function(){return this.sourceMapInputFilename},b}},{}],39:[function(a,b){b.exports=function(a){var b=function(b){this._css=[],this._rootNode=b.rootNode,this._contentsMap=b.contentsMap,this._contentsIgnoredCharsMap=b.contentsIgnoredCharsMap,b.sourceMapFilename&&(this._sourceMapFilename=b.sourceMapFilename.replace(/\\/g,"/")),this._outputFilename=b.outputFilename,this.sourceMapURL=b.sourceMapURL,b.sourceMapBasepath&&(this._sourceMapBasepath=b.sourceMapBasepath.replace(/\\/g,"/")),b.sourceMapRootpath?(this._sourceMapRootpath=b.sourceMapRootpath.replace(/\\/g,"/"),"/"!==this._sourceMapRootpath.charAt(this._sourceMapRootpath.length-1)&&(this._sourceMapRootpath+="/")):this._sourceMapRootpath="",this._outputSourceFiles=b.outputSourceFiles,this._sourceMapGeneratorConstructor=a.getSourceMapGenerator(),this._sourceMapFileInline=b.sourceMapFileInline,this._lineNumber=0,this._column=0};return b.prototype.normalizeFilename=function(a){return a=a.replace(/\\/g,"/"),this._sourceMapBasepath&&0===a.indexOf(this._sourceMapBasepath)&&(a=a.substring(this._sourceMapBasepath.length),("\\"===a.charAt(0)||"/"===a.charAt(0))&&(a=a.substring(1))),(this._sourceMapRootpath||"")+a},b.prototype.add=function(a,b,c,d){if(a){var e,f,g,h,i;if(b){var j=this._contentsMap[b.filename];this._contentsIgnoredCharsMap[b.filename]&&(c-=this._contentsIgnoredCharsMap[b.filename],0>c&&(c=0),j=j.slice(this._contentsIgnoredCharsMap[b.filename])),j=j.substring(0,c),f=j.split("\n"),h=f[f.length-1]}if(e=a.split("\n"),g=e[e.length-1],b)if(d)for(i=0;i<e.length;i++)this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+i+1,column:0===i?this._column:0},original:{line:f.length+i,column:0===i?h.length:0},source:this.normalizeFilename(b.filename)});else this._sourceMapGenerator.addMapping({generated:{line:this._lineNumber+1,column:this._column},original:{line:f.length,column:h.length},source:this.normalizeFilename(b.filename)});1===e.length?this._column+=g.length:(this._lineNumber+=e.length-1,this._column=g.length),this._css.push(a)}},b.prototype.isEmpty=function(){return 0===this._css.length},b.prototype.toCSS=function(b){if(this._sourceMapGenerator=new this._sourceMapGeneratorConstructor({file:this._outputFilename,sourceRoot:null}),this._outputSourceFiles)for(var c in this._contentsMap)if(this._contentsMap.hasOwnProperty(c)){var d=this._contentsMap[c];this._contentsIgnoredCharsMap[c]&&(d=d.slice(this._contentsIgnoredCharsMap[c])),this._sourceMapGenerator.setSourceContent(this.normalizeFilename(c),d)}if(this._rootNode.genCSS(b,this),this._css.length>0){var e,f=JSON.stringify(this._sourceMapGenerator.toJSON());this.sourceMapURL?e=this.sourceMapURL:this._sourceMapFilename&&(e=this._sourceMapFilename),this.sourceMapURL=e,this._sourceMapFileInline?e="data:application/json;base64,"+a.encodeBase64(f):this.sourceMap=f,e&&this._css.push("/*# sourceMappingURL="+e+" */")}return this._css.join("")},b}},{}],40:[function(a,b){var c=a("./contexts"),d=a("./visitors"),e=a("./tree");b.exports=function(a,b){b=b||{};var f,g=b.variables,h=new c.Eval(b);"object"!=typeof g||Array.isArray(g)||(g=Object.keys(g).map(function(a){var b=g[a];return b instanceof e.Value||(b instanceof e.Expression||(b=new e.Expression([b])),b=new e.Value([b])),new e.Rule("@"+a,b,!1,null,0)}),h.frames=[new e.Ruleset(null,g)]);var i,j=[],k=[new d.JoinSelectorVisitor,new d.ExtendVisitor,new d.ToCSSVisitor({compress:Boolean(b.compress)})];if(b.pluginManager){var l=b.pluginManager.getVisitors();for(i=0;i<l.length;i++){var m=l[i];m.isPreEvalVisitor?j.push(m):m.isPreVisitor?k.splice(0,0,m):k.push(m)}}for(i=0;i<j.length;i++)j[i].run(a);for(f=a.eval(h),i=0;i<k.length;i++)k[i].run(f);return f}},{"./contexts":10,"./tree":58,"./visitors":83}],41:[function(a,b){var c=a("./node"),d=function(a){this.value=a};d.prototype=new c,d.prototype.type="Alpha",d.prototype.accept=function(a){this.value=a.visit(this.value)},d.prototype.eval=function(a){return this.value.eval?new d(this.value.eval(a)):this},d.prototype.genCSS=function(a,b){b.add("alpha(opacity="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value),b.add(")")},b.exports=d},{"./node":66}],42:[function(a,b){var c=a("./node"),d=function(a,b,c,d,e){this.value=a,this.index=b,this.mapLines=d,this.currentFileInfo=c,this.rulesetLike="undefined"==typeof e?!1:e};d.prototype=new c,d.prototype.type="Anonymous",d.prototype.eval=function(){return new d(this.value,this.index,this.currentFileInfo,this.mapLines,this.rulesetLike)},d.prototype.compare=function(a){return a.toCSS&&this.toCSS()===a.toCSS()?0:void 0},d.prototype.isRulesetLike=function(){return this.rulesetLike},d.prototype.genCSS=function(a,b){b.add(this.value,this.currentFileInfo,this.index,this.mapLines)},b.exports=d},{"./node":66}],43:[function(a,b){var c=a("./node"),d=function(a,b){this.key=a,this.value=b};d.prototype=new c,d.prototype.type="Assignment",d.prototype.accept=function(a){this.value=a.visit(this.value)},d.prototype.eval=function(a){return this.value.eval?new d(this.key,this.value.eval(a)):this},d.prototype.genCSS=function(a,b){b.add(this.key+"="),this.value.genCSS?this.value.genCSS(a,b):b.add(this.value)},b.exports=d},{"./node":66}],44:[function(a,b){var c=a("./node"),d=function(a,b,c){this.key=a,this.op=b,this.value=c};d.prototype=new c,d.prototype.type="Attribute",d.prototype.eval=function(a){return new d(this.key.eval?this.key.eval(a):this.key,this.op,this.value&&this.value.eval?this.value.eval(a):this.value)},d.prototype.genCSS=function(a,b){b.add(this.toCSS(a))},d.prototype.toCSS=function(a){var b=this.key.toCSS?this.key.toCSS(a):this.key;return this.op&&(b+=this.op,b+=this.value.toCSS?this.value.toCSS(a):this.value),"["+b+"]"},b.exports=d},{"./node":66}],45:[function(a,b){var c=a("./node"),d=a("../functions/function-caller"),e=function(a,b,c,d){this.name=a,this.args=b,this.index=c,this.currentFileInfo=d
};e.prototype=new c,e.prototype.type="Call",e.prototype.accept=function(a){this.args&&(this.args=a.visitArray(this.args))},e.prototype.eval=function(a){var b,c=this.args.map(function(b){return b.eval(a)}),f=new d(this.name,a,this.index,this.currentFileInfo);if(f.isValid())try{if(b=f.call(c),null!=b)return b}catch(g){throw{type:g.type||"Runtime",message:"error evaluating function `"+this.name+"`"+(g.message?": "+g.message:""),index:this.index,filename:this.currentFileInfo.filename}}return new e(this.name,c,this.index,this.currentFileInfo)},e.prototype.genCSS=function(a,b){b.add(this.name+"(",this.currentFileInfo,this.index);for(var c=0;c<this.args.length;c++)this.args[c].genCSS(a,b),c+1<this.args.length&&b.add(", ");b.add(")")},b.exports=e},{"../functions/function-caller":20,"./node":66}],46:[function(a,b){function c(a,b){return Math.min(Math.max(a,0),b)}function d(a){return"#"+a.map(function(a){return a=c(Math.round(a),255),(16>a?"0":"")+a.toString(16)}).join("")}var e=a("./node"),f=a("../data/colors"),g=function(a,b){this.rgb=Array.isArray(a)?a:6==a.length?a.match(/.{2}/g).map(function(a){return parseInt(a,16)}):a.split("").map(function(a){return parseInt(a+a,16)}),this.alpha="number"==typeof b?b:1};g.prototype=new e,g.prototype.type="Color",g.prototype.luma=function(){var a=this.rgb[0]/255,b=this.rgb[1]/255,c=this.rgb[2]/255;return a=.03928>=a?a/12.92:Math.pow((a+.055)/1.055,2.4),b=.03928>=b?b/12.92:Math.pow((b+.055)/1.055,2.4),c=.03928>=c?c/12.92:Math.pow((c+.055)/1.055,2.4),.2126*a+.7152*b+.0722*c},g.prototype.genCSS=function(a,b){b.add(this.toCSS(a))},g.prototype.toCSS=function(a,b){var d,e,f=a&&a.compress&&!b;if(this.keyword)return this.keyword;if(e=this.fround(a,this.alpha),1>e)return"rgba("+this.rgb.map(function(a){return c(Math.round(a),255)}).concat(c(e,1)).join(","+(f?"":" "))+")";if(d=this.toRGB(),f){var g=d.split("");g[1]===g[2]&&g[3]===g[4]&&g[5]===g[6]&&(d="#"+g[1]+g[3]+g[5])}return d},g.prototype.operate=function(a,b,c){for(var d=[],e=this.alpha*(1-c.alpha)+c.alpha,f=0;3>f;f++)d[f]=this._operate(a,b,this.rgb[f],c.rgb[f]);return new g(d,e)},g.prototype.toRGB=function(){return d(this.rgb)},g.prototype.toHSL=function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=(g+h)/2,j=g-h;if(g===h)a=b=0;else{switch(b=i>.5?j/(2-g-h):j/(g+h),g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,l:i,a:f}},g.prototype.toHSV=function(){var a,b,c=this.rgb[0]/255,d=this.rgb[1]/255,e=this.rgb[2]/255,f=this.alpha,g=Math.max(c,d,e),h=Math.min(c,d,e),i=g,j=g-h;if(b=0===g?0:j/g,g===h)a=0;else{switch(g){case c:a=(d-e)/j+(e>d?6:0);break;case d:a=(e-c)/j+2;break;case e:a=(c-d)/j+4}a/=6}return{h:360*a,s:b,v:i,a:f}},g.prototype.toARGB=function(){return d([255*this.alpha].concat(this.rgb))},g.prototype.compare=function(a){return a.rgb&&a.rgb[0]===this.rgb[0]&&a.rgb[1]===this.rgb[1]&&a.rgb[2]===this.rgb[2]&&a.alpha===this.alpha?0:void 0},g.fromKeyword=function(a){var b,c=a.toLowerCase();return f.hasOwnProperty(c)?b=new g(f[c].slice(1)):"transparent"===c&&(b=new g([0,0,0],0)),b?(b.keyword=a,b):void 0},b.exports=g},{"../data/colors":11,"./node":66}],47:[function(a,b){var c=a("./node"),d=function(a){" "===a?(this.value=" ",this.emptyOrWhitespace=!0):(this.value=a?a.trim():"",this.emptyOrWhitespace=""===this.value)};d.prototype=new c,d.prototype.type="Combinator";var e={"":!0," ":!0,"|":!0};d.prototype.genCSS=function(a,b){var c=a.compress||e[this.value]?"":" ";b.add(c+this.value+c)},b.exports=d},{"./node":66}],48:[function(a,b){var c=a("./node"),d=a("./debug-info"),e=function(a,b,c,d){this.value=a,this.isLineComment=b,this.currentFileInfo=d};e.prototype=new c,e.prototype.type="Comment",e.prototype.genCSS=function(a,b){this.debugInfo&&b.add(d(a,this),this.currentFileInfo,this.index),b.add(this.value)},e.prototype.isSilent=function(a){var b=this.currentFileInfo&&this.currentFileInfo.reference&&!this.isReferenced,c=a.compress&&"!"!==this.value[2];return this.isLineComment||b||c},e.prototype.markReferenced=function(){this.isReferenced=!0},e.prototype.isRulesetLike=function(a){return Boolean(a)},b.exports=e},{"./debug-info":50,"./node":66}],49:[function(a,b){var c=a("./node"),d=function(a,b,c,d,e){this.op=a.trim(),this.lvalue=b,this.rvalue=c,this.index=d,this.negate=e};d.prototype=new c,d.prototype.type="Condition",d.prototype.accept=function(a){this.lvalue=a.visit(this.lvalue),this.rvalue=a.visit(this.rvalue)},d.prototype.eval=function(a){var b=function(a,b,d){switch(a){case"and":return b&&d;case"or":return b||d;default:switch(c.compare(b,d)){case-1:return"<"===a||"=<"===a||"<="===a;case 0:return"="===a||">="===a||"=<"===a||"<="===a;case 1:return">"===a||">="===a;default:return!1}}}(this.op,this.lvalue.eval(a),this.rvalue.eval(a));return this.negate?!b:b},b.exports=d},{"./node":66}],50:[function(a,b){var c=function(a,b,d){var e="";if(a.dumpLineNumbers&&!a.compress)switch(a.dumpLineNumbers){case"comments":e=c.asComment(b);break;case"mediaquery":e=c.asMediaQuery(b);break;case"all":e=c.asComment(b)+(d||"")+c.asMediaQuery(b)}return e};c.asComment=function(a){return"/* line "+a.debugInfo.lineNumber+", "+a.debugInfo.fileName+" */\n"},c.asMediaQuery=function(a){return"@media -sass-debug-info{filename{font-family:"+("file://"+a.debugInfo.fileName).replace(/([.:\/\\])/g,function(a){return"\\"==a&&(a="/"),"\\"+a})+"}line{font-family:\\00003"+a.debugInfo.lineNumber+"}}\n"},b.exports=c},{}],51:[function(a,b){var c=a("./node"),d=a("../contexts"),e=function(a,b){this.ruleset=a,this.frames=b};e.prototype=new c,e.prototype.type="DetachedRuleset",e.prototype.evalFirst=!0,e.prototype.accept=function(a){this.ruleset=a.visit(this.ruleset)},e.prototype.eval=function(a){var b=this.frames||a.frames.slice(0);return new e(this.ruleset,b)},e.prototype.callEval=function(a){return this.ruleset.eval(this.frames?new d.Eval(a,this.frames.concat(a.frames)):a)},b.exports=e},{"../contexts":10,"./node":66}],52:[function(a,b){var c=a("./node"),d=a("../data/unit-conversions"),e=a("./unit"),f=a("./color"),g=function(a,b){this.value=parseFloat(a),this.unit=b&&b instanceof e?b:new e(b?[b]:void 0)};g.prototype=new c,g.prototype.type="Dimension",g.prototype.accept=function(a){this.unit=a.visit(this.unit)},g.prototype.eval=function(){return this},g.prototype.toColor=function(){return new f([this.value,this.value,this.value])},g.prototype.genCSS=function(a,b){if(a&&a.strictUnits&&!this.unit.isSingular())throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: "+this.unit.toString());var c=this.fround(a,this.value),d=String(c);if(0!==c&&1e-6>c&&c>-1e-6&&(d=c.toFixed(20).replace(/0+$/,"")),a&&a.compress){if(0===c&&this.unit.isLength())return void b.add(d);c>0&&1>c&&(d=d.substr(1))}b.add(d),this.unit.genCSS(a,b)},g.prototype.operate=function(a,b,c){var d=this._operate(a,b,this.value,c.value),e=this.unit.clone();if("+"===b||"-"===b)if(0===e.numerator.length&&0===e.denominator.length)e.numerator=c.unit.numerator.slice(0),e.denominator=c.unit.denominator.slice(0);else if(0===c.unit.numerator.length&&0===e.denominator.length);else{if(c=c.convertTo(this.unit.usedUnits()),a.strictUnits&&c.unit.toString()!==e.toString())throw new Error("Incompatible units. Change the units or use the unit function. Bad units: '"+e.toString()+"' and '"+c.unit.toString()+"'.");d=this._operate(a,b,this.value,c.value)}else"*"===b?(e.numerator=e.numerator.concat(c.unit.numerator).sort(),e.denominator=e.denominator.concat(c.unit.denominator).sort(),e.cancel()):"/"===b&&(e.numerator=e.numerator.concat(c.unit.denominator).sort(),e.denominator=e.denominator.concat(c.unit.numerator).sort(),e.cancel());return new g(d,e)},g.prototype.compare=function(a){var b,d;if(!(a instanceof g))return void 0;if(this.unit.isEmpty()||a.unit.isEmpty())b=this,d=a;else if(b=this.unify(),d=a.unify(),0!==b.unit.compare(d.unit))return void 0;return c.numericCompare(b.value,d.value)},g.prototype.unify=function(){return this.convertTo({length:"px",duration:"s",angle:"rad"})},g.prototype.convertTo=function(a){var b,c,e,f,h,i=this.value,j=this.unit.clone(),k={};if("string"==typeof a){for(b in d)d[b].hasOwnProperty(a)&&(k={},k[b]=a);a=k}h=function(a,b){return e.hasOwnProperty(a)?(b?i/=e[a]/e[f]:i*=e[a]/e[f],f):a};for(c in a)a.hasOwnProperty(c)&&(f=a[c],e=d[c],j.map(h));return j.cancel(),new g(i,j)},b.exports=g},{"../data/unit-conversions":13,"./color":46,"./node":66,"./unit":75}],53:[function(a,b){var c=a("./node"),d=a("./ruleset"),e=function(a,b,c,d,e,f){this.name=a,this.value=b,c&&(this.rules=c,this.rules.allowImports=!0),this.index=d,this.currentFileInfo=e,this.debugInfo=f};e.prototype=new c,e.prototype.type="Directive",e.prototype.accept=function(a){var b=this.value,c=this.rules;c&&(this.rules=a.visit(c)),b&&(this.value=a.visit(b))},e.prototype.isRulesetLike=function(){return this.rules||!this.isCharset()},e.prototype.isCharset=function(){return"@charset"===this.name},e.prototype.genCSS=function(a,b){var c=this.value,d=this.rules;b.add(this.name,this.currentFileInfo,this.index),c&&(b.add(" "),c.genCSS(a,b)),d?this.outputRuleset(a,b,[d]):b.add(";")},e.prototype.eval=function(a){var b=this.value,c=this.rules;return b&&(b=b.eval(a)),c&&(c=c.eval(a),c.root=!0),new e(this.name,b,c,this.index,this.currentFileInfo,this.debugInfo)},e.prototype.variable=function(a){return this.rules?d.prototype.variable.call(this.rules,a):void 0},e.prototype.find=function(){return this.rules?d.prototype.find.apply(this.rules,arguments):void 0},e.prototype.rulesets=function(){return this.rules?d.prototype.rulesets.apply(this.rules):void 0},e.prototype.markReferenced=function(){var a,b;if(this.isReferenced=!0,this.rules)for(b=this.rules.rules,a=0;a<b.length;a++)b[a].markReferenced&&b[a].markReferenced()},e.prototype.outputRuleset=function(a,b,c){var d,e=c.length;if(a.tabLevel=(0|a.tabLevel)+1,a.compress){for(b.add("{"),d=0;e>d;d++)c[d].genCSS(a,b);return b.add("}"),void a.tabLevel--}var f="\n"+Array(a.tabLevel).join("  "),g=f+"  ";if(e){for(b.add(" {"+g),c[0].genCSS(a,b),d=1;e>d;d++)b.add(g),c[d].genCSS(a,b);b.add(f+"}")}else b.add(" {"+f+"}");a.tabLevel--},b.exports=e},{"./node":66,"./ruleset":72}],54:[function(a,b){var c=a("./node"),d=a("./paren"),e=a("./combinator"),f=function(a,b,c,d){this.combinator=a instanceof e?a:new e(a),this.value="string"==typeof b?b.trim():b?b:"",this.index=c,this.currentFileInfo=d};f.prototype=new c,f.prototype.type="Element",f.prototype.accept=function(a){var b=this.value;this.combinator=a.visit(this.combinator),"object"==typeof b&&(this.value=a.visit(b))},f.prototype.eval=function(a){return new f(this.combinator,this.value.eval?this.value.eval(a):this.value,this.index,this.currentFileInfo)},f.prototype.genCSS=function(a,b){b.add(this.toCSS(a),this.currentFileInfo,this.index)},f.prototype.toCSS=function(a){a=a||{};var b=this.value,c=a.firstSelector;return b instanceof d&&(a.firstSelector=!0),b=b.toCSS?b.toCSS(a):b,a.firstSelector=c,""===b&&"&"===this.combinator.value.charAt(0)?"":this.combinator.toCSS(a)+b},b.exports=f},{"./combinator":47,"./node":66,"./paren":68}],55:[function(a,b){var c=a("./node"),d=a("./paren"),e=a("./comment"),f=function(a){if(this.value=a,!a)throw new Error("Expression requires a array parameter")};f.prototype=new c,f.prototype.type="Expression",f.prototype.accept=function(a){this.value=a.visitArray(this.value)},f.prototype.eval=function(a){var b,c=this.parens&&!this.parensInOp,e=!1;return c&&a.inParenthesis(),this.value.length>1?b=new f(this.value.map(function(b){return b.eval(a)})):1===this.value.length?(this.value[0].parens&&!this.value[0].parensInOp&&(e=!0),b=this.value[0].eval(a)):b=this,c&&a.outOfParenthesis(),this.parens&&this.parensInOp&&!a.isMathOn()&&!e&&(b=new d(b)),b},f.prototype.genCSS=function(a,b){for(var c=0;c<this.value.length;c++)this.value[c].genCSS(a,b),c+1<this.value.length&&b.add(" ")},f.prototype.throwAwayComments=function(){this.value=this.value.filter(function(a){return!(a instanceof e)})},b.exports=f},{"./comment":48,"./node":66,"./paren":68}],56:[function(a,b){var c=a("./node"),d=function e(a,b,c){switch(this.selector=a,this.option=b,this.index=c,this.object_id=e.next_id++,this.parent_ids=[this.object_id],b){case"all":this.allowBefore=!0,this.allowAfter=!0;break;default:this.allowBefore=!1,this.allowAfter=!1}};d.next_id=0,d.prototype=new c,d.prototype.type="Extend",d.prototype.accept=function(a){this.selector=a.visit(this.selector)},d.prototype.eval=function(a){return new d(this.selector.eval(a),this.option,this.index)},d.prototype.clone=function(){return new d(this.selector,this.option,this.index)},d.prototype.findSelfSelectors=function(a){var b,c,d=[];for(b=0;b<a.length;b++)c=a[b].elements,b>0&&c.length&&""===c[0].combinator.value&&(c[0].combinator.value=" "),d=d.concat(a[b].elements);this.selfSelectors=[{elements:d}]},b.exports=d},{"./node":66}],57:[function(a,b){var c=a("./node"),d=a("./media"),e=a("./url"),f=a("./quoted"),g=a("./ruleset"),h=a("./anonymous"),i=function(a,b,c,d,e){if(this.options=c,this.index=d,this.path=a,this.features=b,this.currentFileInfo=e,void 0!==this.options.less||this.options.inline)this.css=!this.options.less||this.options.inline;else{var f=this.getPath();f&&/css([\?;].*)?$/.test(f)&&(this.css=!0)}};i.prototype=new c,i.prototype.type="Import",i.prototype.accept=function(a){this.features&&(this.features=a.visit(this.features)),this.path=a.visit(this.path),!this.options.inline&&this.root&&(this.root=a.visit(this.root))},i.prototype.genCSS=function(a,b){this.css&&(b.add("@import ",this.currentFileInfo,this.index),this.path.genCSS(a,b),this.features&&(b.add(" "),this.features.genCSS(a,b)),b.add(";"))},i.prototype.getPath=function(){return this.path instanceof f?this.path.value:this.path instanceof e?this.path.value.value:null},i.prototype.isVariableImport=function(){var a=this.path;return a instanceof e&&(a=a.value),a instanceof f?a.containsVariables():!0},i.prototype.evalForImport=function(a){var b=this.path;return b instanceof e&&(b=b.value),new i(b.eval(a),this.features,this.options,this.index,this.currentFileInfo)},i.prototype.evalPath=function(a){var b=this.path.eval(a),c=this.currentFileInfo&&this.currentFileInfo.rootpath;if(!(b instanceof e)){if(c){var d=b.value;d&&a.isPathRelative(d)&&(b.value=c+d)}b.value=a.normalizePath(b.value)}return b},i.prototype.eval=function(a){var b,c=this.features&&this.features.eval(a);if(this.skip&&("function"==typeof this.skip&&(this.skip=this.skip()),this.skip))return[];if(this.options.inline){var e=new h(this.root,0,{filename:this.importedFilename},!0,!0);return this.features?new d([e],this.features.value):[e]}if(this.css){var f=new i(this.evalPath(a),c,this.options,this.index);if(!f.css&&this.error)throw this.error;return f}return b=new g(null,this.root.rules.slice(0)),b.evalImports(a),this.features?new d(b.rules,this.features.value):b.rules},b.exports=i},{"./anonymous":42,"./media":62,"./node":66,"./quoted":69,"./ruleset":72,"./url":76}],58:[function(a,b){var c={};c.Alpha=a("./alpha"),c.Color=a("./color"),c.Directive=a("./directive"),c.DetachedRuleset=a("./detached-ruleset"),c.Operation=a("./operation"),c.Dimension=a("./dimension"),c.Unit=a("./unit"),c.Keyword=a("./keyword"),c.Variable=a("./variable"),c.Ruleset=a("./ruleset"),c.Element=a("./element"),c.Attribute=a("./attribute"),c.Combinator=a("./combinator"),c.Selector=a("./selector"),c.Quoted=a("./quoted"),c.Expression=a("./expression"),c.Rule=a("./rule"),c.Call=a("./call"),c.URL=a("./url"),c.Import=a("./import"),c.mixin={Call:a("./mixin-call"),Definition:a("./mixin-definition")},c.Comment=a("./comment"),c.Anonymous=a("./anonymous"),c.Value=a("./value"),c.JavaScript=a("./javascript"),c.Assignment=a("./assignment"),c.Condition=a("./condition"),c.Paren=a("./paren"),c.Media=a("./media"),c.UnicodeDescriptor=a("./unicode-descriptor"),c.Negative=a("./negative"),c.Extend=a("./extend"),c.RulesetCall=a("./ruleset-call"),b.exports=c},{"./alpha":41,"./anonymous":42,"./assignment":43,"./attribute":44,"./call":45,"./color":46,"./combinator":47,"./comment":48,"./condition":49,"./detached-ruleset":51,"./dimension":52,"./directive":53,"./element":54,"./expression":55,"./extend":56,"./import":57,"./javascript":59,"./keyword":61,"./media":62,"./mixin-call":63,"./mixin-definition":64,"./negative":65,"./operation":67,"./paren":68,"./quoted":69,"./rule":70,"./ruleset":72,"./ruleset-call":71,"./selector":73,"./unicode-descriptor":74,"./unit":75,"./url":76,"./value":77,"./variable":78}],59:[function(a,b){var c=a("./js-eval-node"),d=a("./dimension"),e=a("./quoted"),f=a("./anonymous"),g=function(a,b,c,d){this.escaped=b,this.expression=a,this.index=c,this.currentFileInfo=d};g.prototype=new c,g.prototype.type="JavaScript",g.prototype.eval=function(a){var b=this.evaluateJavaScript(this.expression,a);return"number"==typeof b?new d(b):"string"==typeof b?new e('"'+b+'"',b,this.escaped,this.index):new f(Array.isArray(b)?b.join(", "):b)},b.exports=g},{"./anonymous":42,"./dimension":52,"./js-eval-node":60,"./quoted":69}],60:[function(a,b){var c=a("./node"),d=a("./variable"),e=function(){};e.prototype=new c,e.prototype.evaluateJavaScript=function(a,b){var c,e=this,f={};if(void 0!==b.javascriptEnabled&&!b.javascriptEnabled)throw{message:"You are using JavaScript, which has been disabled.",filename:this.currentFileInfo.filename,index:this.index};a=a.replace(/@\{([\w-]+)\}/g,function(a,c){return e.jsify(new d("@"+c,e.index,e.currentFileInfo).eval(b))});try{a=new Function("return ("+a+")")}catch(g){throw{message:"JavaScript evaluation error: "+g.message+" from `"+a+"`",filename:this.currentFileInfo.filename,index:this.index}}var h=b.frames[0].variables();for(var i in h)h.hasOwnProperty(i)&&(f[i.slice(1)]={value:h[i].value,toJS:function(){return this.value.eval(b).toCSS()}});try{c=a.call(f)}catch(g){throw{message:"JavaScript evaluation error: '"+g.name+": "+g.message.replace(/["]/g,"'")+"'",filename:this.currentFileInfo.filename,index:this.index}}return c},e.prototype.jsify=function(a){return Array.isArray(a.value)&&a.value.length>1?"["+a.value.map(function(a){return a.toCSS()}).join(", ")+"]":a.toCSS()},b.exports=e},{"./node":66,"./variable":78}],61:[function(a,b){var c=a("./node"),d=function(a){this.value=a};d.prototype=new c,d.prototype.type="Keyword",d.prototype.genCSS=function(a,b){if("%"===this.value)throw{type:"Syntax",message:"Invalid % without number"};b.add(this.value)},d.True=new d("true"),d.False=new d("false"),b.exports=d},{"./node":66}],62:[function(a,b){var c=a("./ruleset"),d=a("./value"),e=a("./element"),f=a("./selector"),g=a("./anonymous"),h=a("./expression"),i=a("./directive"),j=function(a,b,e,f){this.index=e,this.currentFileInfo=f;var g=this.emptySelectors();this.features=new d(b),this.rules=[new c(g,a)],this.rules[0].allowImports=!0};j.prototype=new i,j.prototype.type="Media",j.prototype.isRulesetLike=!0,j.prototype.accept=function(a){this.features&&(this.features=a.visit(this.features)),this.rules&&(this.rules=a.visitArray(this.rules))},j.prototype.genCSS=function(a,b){b.add("@media ",this.currentFileInfo,this.index),this.features.genCSS(a,b),this.outputRuleset(a,b,this.rules)},j.prototype.eval=function(a){a.mediaBlocks||(a.mediaBlocks=[],a.mediaPath=[]);var b=new j(null,[],this.index,this.currentFileInfo);this.debugInfo&&(this.rules[0].debugInfo=this.debugInfo,b.debugInfo=this.debugInfo);var c=!1;a.strictMath||(c=!0,a.strictMath=!0);try{b.features=this.features.eval(a)}finally{c&&(a.strictMath=!1)}return a.mediaPath.push(b),a.mediaBlocks.push(b),a.frames.unshift(this.rules[0]),b.rules=[this.rules[0].eval(a)],a.frames.shift(),a.mediaPath.pop(),0===a.mediaPath.length?b.evalTop(a):b.evalNested(a)},j.prototype.variable=function(a){return c.prototype.variable.call(this.rules[0],a)},j.prototype.find=function(){return c.prototype.find.apply(this.rules[0],arguments)},j.prototype.rulesets=function(){return c.prototype.rulesets.apply(this.rules[0])},j.prototype.emptySelectors=function(){var a=new e("","&",this.index,this.currentFileInfo),b=[new f([a],null,null,this.index,this.currentFileInfo)];return b[0].mediaEmpty=!0,b},j.prototype.markReferenced=function(){var a,b=this.rules[0].rules;for(this.rules[0].markReferenced(),this.isReferenced=!0,a=0;a<b.length;a++)b[a].markReferenced&&b[a].markReferenced()},j.prototype.evalTop=function(a){var b=this;if(a.mediaBlocks.length>1){var d=this.emptySelectors();b=new c(d,a.mediaBlocks),b.multiMedia=!0}return delete a.mediaBlocks,delete a.mediaPath,b},j.prototype.evalNested=function(a){var b,e,f=a.mediaPath.concat([this]);for(b=0;b<f.length;b++)e=f[b].features instanceof d?f[b].features.value:f[b].features,f[b]=Array.isArray(e)?e:[e];return this.features=new d(this.permute(f).map(function(a){for(a=a.map(function(a){return a.toCSS?a:new g(a)}),b=a.length-1;b>0;b--)a.splice(b,0,new g("and"));return new h(a)})),new c([],[])},j.prototype.permute=function(a){if(0===a.length)return[];if(1===a.length)return a[0];for(var b=[],c=this.permute(a.slice(1)),d=0;d<c.length;d++)for(var e=0;e<a[0].length;e++)b.push([a[0][e]].concat(c[d]));return b},j.prototype.bubbleSelectors=function(a){a&&(this.rules=[new c(a.slice(0),[this.rules[0]])])},b.exports=j},{"./anonymous":42,"./directive":53,"./element":54,"./expression":55,"./ruleset":72,"./selector":73,"./value":77}],63:[function(a,b){var c=a("./node"),d=a("./selector"),e=a("./mixin-definition"),f=a("../functions/default"),g=function(a,b,c,e,f){this.selector=new d(a),this.arguments=b&&b.length?b:null,this.index=c,this.currentFileInfo=e,this.important=f};g.prototype=new c,g.prototype.type="MixinCall",g.prototype.accept=function(a){this.selector&&(this.selector=a.visit(this.selector)),this.arguments&&(this.arguments=a.visitArray(this.arguments))},g.prototype.eval=function(a){function b(b,c){var d,e;for(k=0;2>k;k++){for(w[k]=!0,f.value(k),d=0;d<c.length&&w[k];d++)e=c[d],e.matchCondition&&(w[k]=w[k]&&e.matchCondition(null,a));b.matchCondition&&(w[k]=w[k]&&b.matchCondition(h,a))}return w[0]||w[1]?w[0]!=w[1]?w[1]?z:A:y:x}var c,d,g,h,i,j,k,l,m,n,o,p,q,r,s,t=[],u=!1,v=[],w=[],x=-1,y=0,z=1,A=2;for(h=this.arguments&&this.arguments.map(function(b){return{name:b.name,value:b.value.eval(a)}}),s=function(b){return b.matchArgs(null,a)},i=0;i<a.frames.length;i++)if((c=a.frames[i].find(this.selector,null,s)).length>0){for(m=!0,j=0;j<c.length;j++){for(d=c[j].rule,g=c[j].path,l=!1,k=0;k<a.frames.length;k++)if(!(d instanceof e)&&d===(a.frames[k].originalRuleset||a.frames[k])){l=!0;break}l||d.matchArgs(h,a)&&(o={mixin:d,group:b(d,g)},o.group!==x&&v.push(o),u=!0)}for(f.reset(),q=[0,0,0],j=0;j<v.length;j++)q[v[j].group]++;if(q[y]>0)p=A;else if(p=z,q[z]+q[A]>1)throw{type:"Runtime",message:"Ambiguous use of `default()` found when matching for `"+this.format(h)+"`",index:this.index,filename:this.currentFileInfo.filename};for(j=0;j<v.length;j++)if(o=v[j].group,o===y||o===p)try{d=v[j].mixin,d instanceof e||(r=d.originalRuleset||d,d=new e("",[],d.rules,null,!1),d.originalRuleset=r),Array.prototype.push.apply(t,d.evalCall(a,h,this.important).rules)}catch(B){throw{message:B.message,index:this.index,filename:this.currentFileInfo.filename,stack:B.stack}}if(u){if(!this.currentFileInfo||!this.currentFileInfo.reference)for(i=0;i<t.length;i++)n=t[i],n.markReferenced&&n.markReferenced();return t}}throw m?{type:"Runtime",message:"No matching definition was found for `"+this.format(h)+"`",index:this.index,filename:this.currentFileInfo.filename}:{type:"Name",message:this.selector.toCSS().trim()+" is undefined",index:this.index,filename:this.currentFileInfo.filename}},g.prototype.format=function(a){return this.selector.toCSS().trim()+"("+(a?a.map(function(a){var b="";return a.name&&(b+=a.name+":"),b+=a.value.toCSS?a.value.toCSS():"???"}).join(", "):"")+")"},b.exports=g},{"../functions/default":19,"./mixin-definition":64,"./node":66,"./selector":73}],64:[function(a,b){var c=a("./selector"),d=a("./element"),e=a("./ruleset"),f=a("./rule"),g=a("./expression"),h=a("../contexts"),i=function(a,b,e,f,g,h){this.name=a,this.selectors=[new c([new d(null,a,this.index,this.currentFileInfo)])],this.params=b,this.condition=f,this.variadic=g,this.arity=b.length,this.rules=e,this._lookups={},this.required=b.reduce(function(a,b){return!b.name||b.name&&!b.value?a+1:a},0),this.frames=h};i.prototype=new e,i.prototype.type="MixinDefinition",i.prototype.evalFirst=!0,i.prototype.accept=function(a){this.params&&this.params.length&&(this.params=a.visitArray(this.params)),this.rules=a.visitArray(this.rules),this.condition&&(this.condition=a.visit(this.condition))},i.prototype.evalParams=function(a,b,c,d){var i,j,k,l,m,n,o,p,q=new e(null,null),r=this.params.slice(0),s=0;if(b=new h.Eval(b,[q].concat(b.frames)),c)for(c=c.slice(0),s=c.length,k=0;s>k;k++)if(j=c[k],n=j&&j.name){for(o=!1,l=0;l<r.length;l++)if(!d[l]&&n===r[l].name){d[l]=j.value.eval(a),q.prependRule(new f(n,j.value.eval(a))),o=!0;break}if(o){c.splice(k,1),k--;continue}throw{type:"Runtime",message:"Named argument for "+this.name+" "+c[k].name+" not found"}}for(p=0,k=0;k<r.length;k++)if(!d[k]){if(j=c&&c[p],n=r[k].name)if(r[k].variadic){for(i=[],l=p;s>l;l++)i.push(c[l].value.eval(a));q.prependRule(new f(n,new g(i).eval(a)))}else{if(m=j&&j.value)m=m.eval(a);else{if(!r[k].value)throw{type:"Runtime",message:"wrong number of arguments for "+this.name+" ("+s+" for "+this.arity+")"};m=r[k].value.eval(b),q.resetCache()}q.prependRule(new f(n,m)),d[k]=m}if(r[k].variadic&&c)for(l=p;s>l;l++)d[l]=c[l].value.eval(a);p++}return q},i.prototype.eval=function(a){return new i(this.name,this.params,this.rules,this.condition,this.variadic,this.frames||a.frames.slice(0))},i.prototype.evalCall=function(a,b,c){var d,i,j=[],k=this.frames?this.frames.concat(a.frames):a.frames,l=this.evalParams(a,new h.Eval(a,k),b,j);return l.prependRule(new f("@arguments",new g(j).eval(a))),d=this.rules.slice(0),i=new e(null,d),i.originalRuleset=this,i=i.eval(new h.Eval(a,[this,l].concat(k))),c&&(i=this.makeImportant.apply(i)),i},i.prototype.matchCondition=function(a,b){return this.condition&&!this.condition.eval(new h.Eval(b,[this.evalParams(b,new h.Eval(b,this.frames?this.frames.concat(b.frames):b.frames),a,[])].concat(this.frames).concat(b.frames)))?!1:!0},i.prototype.matchArgs=function(a,b){var c,d=a&&a.length||0;if(this.variadic){if(d<this.required-1)return!1}else{if(d<this.required)return!1;if(d>this.params.length)return!1}c=Math.min(d,this.arity);for(var e=0;c>e;e++)if(!this.params[e].name&&!this.params[e].variadic&&a[e].value.eval(b).toCSS()!=this.params[e].value.eval(b).toCSS())return!1;return!0},b.exports=i},{"../contexts":10,"./element":54,"./expression":55,"./rule":70,"./ruleset":72,"./selector":73}],65:[function(a,b){var c=a("./node"),d=a("./operation"),e=a("./dimension"),f=function(a){this.value=a};f.prototype=new c,f.prototype.type="Negative",f.prototype.genCSS=function(a,b){b.add("-"),this.value.genCSS(a,b)},f.prototype.eval=function(a){return a.isMathOn()?new d("*",[new e(-1),this.value]).eval(a):new f(this.value.eval(a))},b.exports=f},{"./dimension":52,"./node":66,"./operation":67}],66:[function(a,b){var c=function(){};c.prototype.toCSS=function(a){var b=[];return this.genCSS(a,{add:function(a){b.push(a)},isEmpty:function(){return 0===b.length}}),b.join("")},c.prototype.genCSS=function(a,b){b.add(this.value)},c.prototype.accept=function(a){this.value=a.visit(this.value)},c.prototype.eval=function(){return this},c.prototype._operate=function(a,b,c,d){switch(b){case"+":return c+d;case"-":return c-d;case"*":return c*d;case"/":return c/d}},c.prototype.fround=function(a,b){var c=a&&a.numPrecision;return null==c?b:Number((b+2e-16).toFixed(c))},c.compare=function(a,b){if(a.compare&&"Quoted"!==b.type&&"Anonymous"!==b.type)return a.compare(b);if(b.compare)return-b.compare(a);if(a.type!==b.type)return void 0;if(a=a.value,b=b.value,!Array.isArray(a))return a===b?0:void 0;if(a.length!==b.length)return void 0;for(var d=0;d<a.length;d++)if(0!==c.compare(a[d],b[d]))return void 0;return 0},c.numericCompare=function(a,b){return b>a?-1:a===b?0:a>b?1:void 0},b.exports=c},{}],67:[function(a,b){var c=a("./node"),d=a("./color"),e=a("./dimension"),f=function(a,b,c){this.op=a.trim(),this.operands=b,this.isSpaced=c};f.prototype=new c,f.prototype.type="Operation",f.prototype.accept=function(a){this.operands=a.visit(this.operands)},f.prototype.eval=function(a){var b=this.operands[0].eval(a),c=this.operands[1].eval(a);if(a.isMathOn()){if(b instanceof e&&c instanceof d&&(b=b.toColor()),c instanceof e&&b instanceof d&&(c=c.toColor()),!b.operate)throw{type:"Operation",message:"Operation on an invalid type"};return b.operate(a,this.op,c)}return new f(this.op,[b,c],this.isSpaced)},f.prototype.genCSS=function(a,b){this.operands[0].genCSS(a,b),this.isSpaced&&b.add(" "),b.add(this.op),this.isSpaced&&b.add(" "),this.operands[1].genCSS(a,b)},b.exports=f},{"./color":46,"./dimension":52,"./node":66}],68:[function(a,b){var c=a("./node"),d=function(a){this.value=a};d.prototype=new c,d.prototype.type="Paren",d.prototype.genCSS=function(a,b){b.add("("),this.value.genCSS(a,b),b.add(")")},d.prototype.eval=function(a){return new d(this.value.eval(a))},b.exports=d},{"./node":66}],69:[function(a,b){var c=a("./node"),d=a("./js-eval-node"),e=a("./variable"),f=function(a,b,c,d,e){this.escaped=c,this.value=b||"",this.quote=a.charAt(0),this.index=d,this.currentFileInfo=e};f.prototype=new d,f.prototype.type="Quoted",f.prototype.genCSS=function(a,b){this.escaped||b.add(this.quote,this.currentFileInfo,this.index),b.add(this.value),this.escaped||b.add(this.quote)},f.prototype.containsVariables=function(){return this.value.match(/(`([^`]+)`)|@\{([\w-]+)\}/)},f.prototype.eval=function(a){function b(a,b,c){var d=a;do a=d,d=a.replace(b,c);while(a!==d);return d}var c=this,d=this.value,g=function(b,d){return String(c.evaluateJavaScript(d,a))},h=function(b,d){var g=new e("@"+d,c.index,c.currentFileInfo).eval(a,!0);return g instanceof f?g.value:g.toCSS()};return d=b(d,/`([^`]+)`/g,g),d=b(d,/@\{([\w-]+)\}/g,h),new f(this.quote+d+this.quote,d,this.escaped,this.index,this.currentFileInfo)},f.prototype.compare=function(a){return"Quoted"!==a.type||this.escaped||a.escaped?a.toCSS&&this.toCSS()===a.toCSS()?0:void 0:c.numericCompare(this.value,a.value)},b.exports=f},{"./js-eval-node":60,"./node":66,"./variable":78}],70:[function(a,b){function c(a,b){var c,d="",e=b.length,f={add:function(a){d+=a}};for(c=0;e>c;c++)b[c].eval(a).genCSS(a,f);return d}var d=a("./node"),e=a("./value"),f=a("./keyword"),g=function(a,b,c,f,g,h,i,j){this.name=a,this.value=b instanceof d?b:new e([b]),this.important=c?" "+c.trim():"",this.merge=f,this.index=g,this.currentFileInfo=h,this.inline=i||!1,this.variable=void 0!==j?j:a.charAt&&"@"===a.charAt(0)};g.prototype=new d,g.prototype.type="Rule",g.prototype.genCSS=function(a,b){b.add(this.name+(a.compress?":":": "),this.currentFileInfo,this.index);try{this.value.genCSS(a,b)}catch(c){throw c.index=this.index,c.filename=this.currentFileInfo.filename,c}b.add(this.important+(this.inline||a.lastRule&&a.compress?"":";"),this.currentFileInfo,this.index)},g.prototype.eval=function(a){var b,d=!1,e=this.name,h=this.variable;"string"!=typeof e&&(e=1===e.length&&e[0]instanceof f?e[0].value:c(a,e),h=!1),"font"!==e||a.strictMath||(d=!0,a.strictMath=!0);try{if(b=this.value.eval(a),!this.variable&&"DetachedRuleset"===b.type)throw{message:"Rulesets cannot be evaluated on a property.",index:this.index,filename:this.currentFileInfo.filename};return new g(e,b,this.important,this.merge,this.index,this.currentFileInfo,this.inline,h)}catch(i){throw"number"!=typeof i.index&&(i.index=this.index,i.filename=this.currentFileInfo.filename),i}finally{d&&(a.strictMath=!1)}},g.prototype.makeImportant=function(){return new g(this.name,this.value,"!important",this.merge,this.index,this.currentFileInfo,this.inline)},b.exports=g},{"./keyword":61,"./node":66,"./value":77}],71:[function(a,b){var c=a("./node"),d=a("./variable"),e=function(a){this.variable=a};e.prototype=new c,e.prototype.type="RulesetCall",e.prototype.eval=function(a){var b=new d(this.variable).eval(a);
return b.callEval(a)},b.exports=e},{"./node":66,"./variable":78}],72:[function(a,b){var c=a("./node"),d=a("./rule"),e=a("./selector"),f=a("./element"),g=a("../contexts"),h=a("../functions/default"),i=a("./debug-info"),j=function(a,b,c){this.selectors=a,this.rules=b,this._lookups={},this.strictImports=c};j.prototype=new c,j.prototype.type="Ruleset",j.prototype.isRuleset=!0,j.prototype.isRulesetLike=!0,j.prototype.accept=function(a){this.paths?a.visitArray(this.paths,!0):this.selectors&&(this.selectors=a.visitArray(this.selectors)),this.rules&&this.rules.length&&(this.rules=a.visitArray(this.rules))},j.prototype.eval=function(a){var b,c,e,f,g=this.selectors,i=!1;if(g&&(c=g.length)){for(b=[],h.error({type:"Syntax",message:"it is currently only allowed in parametric mixin guards,"}),f=0;c>f;f++)e=g[f].eval(a),b.push(e),e.evaldCondition&&(i=!0);h.reset()}else i=!0;var k,l,m=this.rules?this.rules.slice(0):null,n=new j(b,m,this.strictImports);n.originalRuleset=this,n.root=this.root,n.firstRoot=this.firstRoot,n.allowImports=this.allowImports,this.debugInfo&&(n.debugInfo=this.debugInfo),i||(m.length=0);var o=a.frames;o.unshift(n);var p=a.selectors;p||(a.selectors=p=[]),p.unshift(this.selectors),(n.root||n.allowImports||!n.strictImports)&&n.evalImports(a);var q=n.rules,r=q?q.length:0;for(f=0;r>f;f++)q[f].evalFirst&&(q[f]=q[f].eval(a));var s=a.mediaBlocks&&a.mediaBlocks.length||0;for(f=0;r>f;f++)"MixinCall"===q[f].type?(m=q[f].eval(a).filter(function(a){return a instanceof d&&a.variable?!n.variable(a.name):!0}),q.splice.apply(q,[f,1].concat(m)),r+=m.length-1,f+=m.length-1,n.resetCache()):"RulesetCall"===q[f].type&&(m=q[f].eval(a).rules.filter(function(a){return a instanceof d&&a.variable?!1:!0}),q.splice.apply(q,[f,1].concat(m)),r+=m.length-1,f+=m.length-1,n.resetCache());for(f=0;f<q.length;f++)k=q[f],k.evalFirst||(q[f]=k=k.eval?k.eval(a):k);for(f=0;f<q.length;f++)if(k=q[f],k instanceof j&&k.selectors&&1===k.selectors.length&&k.selectors[0].isJustParentSelector()){q.splice(f--,1);for(var t=0;t<k.rules.length;t++)l=k.rules[t],l instanceof d&&l.variable||q.splice(++f,0,l)}if(o.shift(),p.shift(),a.mediaBlocks)for(f=s;f<a.mediaBlocks.length;f++)a.mediaBlocks[f].bubbleSelectors(b);return n},j.prototype.evalImports=function(a){var b,c,d=this.rules;if(d)for(b=0;b<d.length;b++)"Import"===d[b].type&&(c=d[b].eval(a),c&&c.length?(d.splice.apply(d,[b,1].concat(c)),b+=c.length-1):d.splice(b,1,c),this.resetCache())},j.prototype.makeImportant=function(){return new j(this.selectors,this.rules.map(function(a){return a.makeImportant?a.makeImportant():a}),this.strictImports)},j.prototype.matchArgs=function(a){return!a||0===a.length},j.prototype.matchCondition=function(a,b){var c=this.selectors[this.selectors.length-1];return c.evaldCondition?c.condition&&!c.condition.eval(new g.Eval(b,b.frames))?!1:!0:!1},j.prototype.resetCache=function(){this._rulesets=null,this._variables=null,this._lookups={}},j.prototype.variables=function(){return this._variables||(this._variables=this.rules?this.rules.reduce(function(a,b){if(b instanceof d&&b.variable===!0&&(a[b.name]=b),"Import"===b.type&&b.root){var c=b.root.variables();for(var e in c)c.hasOwnProperty(e)&&(a[e]=c[e])}return a},{}):{}),this._variables},j.prototype.variable=function(a){return this.variables()[a]},j.prototype.rulesets=function(){if(!this.rules)return null;var a,b,c=[],d=this.rules,e=d.length;for(a=0;e>a;a++)b=d[a],b.isRuleset&&c.push(b);return c},j.prototype.prependRule=function(a){var b=this.rules;b?b.unshift(a):this.rules=[a]},j.prototype.find=function(a,b,c){b=b||this;var d,f,g=[],h=a.toCSS();return h in this._lookups?this._lookups[h]:(this.rulesets().forEach(function(h){if(h!==b)for(var i=0;i<h.selectors.length;i++)if(d=a.match(h.selectors[i])){if(a.elements.length>d){if(!c||c(h)){f=h.find(new e(a.elements.slice(d)),b,c);for(var j=0;j<f.length;++j)f[j].path.push(h);Array.prototype.push.apply(g,f)}}else g.push({rule:h,path:[]});break}}),this._lookups[h]=g,g)},j.prototype.genCSS=function(a,b){function c(a,b){return"boolean"==typeof a.isRulesetLike?a.isRulesetLike:"function"==typeof a.isRulesetLike?a.isRulesetLike(b):!1}var d,e,f,g,h,j,k=[],l=[],m=[];a.tabLevel=a.tabLevel||0,this.root||a.tabLevel++;var n,o=a.compress?"":Array(a.tabLevel+1).join("  "),p=a.compress?"":Array(a.tabLevel).join("  ");for(d=0;d<this.rules.length;d++)h=this.rules[d],c(h,this.root)?m.push(h):h.isCharset&&h.isCharset()?k.push(h):l.push(h);if(l=k.concat(l),!this.root){g=i(a,this,p),g&&(b.add(g),b.add(p));var q,r=this.paths,s=r.length;for(n=a.compress?",":",\n"+p,d=0;s>d;d++)if(j=r[d],q=j.length)for(d>0&&b.add(n),a.firstSelector=!0,j[0].genCSS(a,b),a.firstSelector=!1,e=1;q>e;e++)j[e].genCSS(a,b);b.add((a.compress?"{":" {\n")+o)}for(d=0;d<l.length;d++)h=l[d],d+1!==l.length||this.root&&0!==m.length&&!this.firstRoot||(a.lastRule=!0),h.genCSS?h.genCSS(a,b):h.value&&b.add(h.value.toString()),a.lastRule?a.lastRule=!1:b.add(a.compress?"":"\n"+o);if(this.root||(b.add(a.compress?"}":"\n"+p+"}"),a.tabLevel--),n=(a.compress?"":"\n")+(this.root?o:p),f=m.length)for(l.length&&n&&b.add(n),m[0].genCSS(a,b),d=1;f>d;d++)n&&b.add(n),m[d].genCSS(a,b);b.isEmpty()||a.compress||!this.firstRoot||b.add("\n")},j.prototype.markReferenced=function(){if(this.selectors)for(var a=0;a<this.selectors.length;a++)this.selectors[a].markReferenced()},j.prototype.joinSelectors=function(a,b,c){for(var d=0;d<c.length;d++)this.joinSelector(a,b,c[d])},j.prototype.joinSelector=function(a,b,c){var d,e,g,h,i,j,k,l,m,n,o,p,q,r,s;for(d=0;d<c.elements.length;d++)j=c.elements[d],"&"===j.value&&(h=!0);if(h){for(r=[],i=[[]],d=0;d<c.elements.length;d++)if(j=c.elements[d],"&"!==j.value)r.push(j);else{for(s=[],r.length>0&&this.mergeElementsOnToSelectors(r,i),e=0;e<i.length;e++)if(k=i[e],0===b.length)k.length>0&&(k[0].elements=k[0].elements.slice(0),k[0].elements.push(new f(j.combinator,"",j.index,j.currentFileInfo))),s.push(k);else for(g=0;g<b.length;g++){if(l=b[g],m=[],n=[],p=!0,k.length>0?(m=k.slice(0),q=m.pop(),o=c.createDerived(q.elements.slice(0)),p=!1):o=c.createDerived([]),l.length>1&&(n=n.concat(l.slice(1))),l.length>0){p=!1;var t=j.combinator,u=l[0].elements[0];t.emptyOrWhitespace&&!u.combinator.emptyOrWhitespace&&(t=u.combinator),o.elements.push(new f(t,u.value,j.index,j.currentFileInfo)),o.elements=o.elements.concat(l[0].elements.slice(1))}p||m.push(o),m=m.concat(n),s.push(m)}i=s,r=[]}for(r.length>0&&this.mergeElementsOnToSelectors(r,i),d=0;d<i.length;d++)i[d].length>0&&a.push(i[d])}else if(b.length>0)for(d=0;d<b.length;d++)a.push(b[d].concat(c));else a.push([c])},j.prototype.mergeElementsOnToSelectors=function(a,b){var c,d;if(0===b.length)return void b.push([new e(a)]);for(c=0;c<b.length;c++)d=b[c],d.length>0?d[d.length-1]=d[d.length-1].createDerived(d[d.length-1].elements.concat(a)):d.push(new e(a))},b.exports=j},{"../contexts":10,"../functions/default":19,"./debug-info":50,"./element":54,"./node":66,"./rule":70,"./selector":73}],73:[function(a,b){var c=a("./node"),d=function(a,b,c,d,e,f){this.elements=a,this.extendList=b,this.condition=c,this.currentFileInfo=e||{},this.isReferenced=f,c||(this.evaldCondition=!0)};d.prototype=new c,d.prototype.type="Selector",d.prototype.accept=function(a){this.elements&&(this.elements=a.visitArray(this.elements)),this.extendList&&(this.extendList=a.visitArray(this.extendList)),this.condition&&(this.condition=a.visit(this.condition))},d.prototype.createDerived=function(a,b,c){c=null!=c?c:this.evaldCondition;var e=new d(a,b||this.extendList,null,this.index,this.currentFileInfo,this.isReferenced);return e.evaldCondition=c,e.mediaEmpty=this.mediaEmpty,e},d.prototype.match=function(a){var b,c,d=this.elements,e=d.length;if(a.CacheElements(),b=a._elements.length,0===b||b>e)return 0;for(c=0;b>c;c++)if(d[c].value!==a._elements[c])return 0;return b},d.prototype.CacheElements=function(){if(!this._elements){var a=this.elements.map(function(a){return a.combinator.value+(a.value.value||a.value)}).join("").match(/[,&#\*\.\w-]([\w-]|(\\.))*/g);a?"&"===a[0]&&a.shift():a=[],this._elements=a}},d.prototype.isJustParentSelector=function(){return!this.mediaEmpty&&1===this.elements.length&&"&"===this.elements[0].value&&(" "===this.elements[0].combinator.value||""===this.elements[0].combinator.value)},d.prototype.eval=function(a){var b=this.condition&&this.condition.eval(a),c=this.elements,d=this.extendList;return c=c&&c.map(function(b){return b.eval(a)}),d=d&&d.map(function(b){return b.eval(a)}),this.createDerived(c,d,b)},d.prototype.genCSS=function(a,b){var c,d;if(a&&a.firstSelector||""!==this.elements[0].combinator.value||b.add(" ",this.currentFileInfo,this.index),!this._css)for(c=0;c<this.elements.length;c++)d=this.elements[c],d.genCSS(a,b)},d.prototype.markReferenced=function(){this.isReferenced=!0},d.prototype.getIsReferenced=function(){return!this.currentFileInfo.reference||this.isReferenced},d.prototype.getIsOutput=function(){return this.evaldCondition},b.exports=d},{"./node":66}],74:[function(a,b){var c=a("./node"),d=function(a){this.value=a};d.prototype=new c,d.prototype.type="UnicodeDescriptor",b.exports=d},{"./node":66}],75:[function(a,b){var c=a("./node"),d=a("../data/unit-conversions"),e=function(a,b,c){this.numerator=a?a.slice(0).sort():[],this.denominator=b?b.slice(0).sort():[],this.backupUnit=c};e.prototype=new c,e.prototype.type="Unit",e.prototype.clone=function(){return new e(this.numerator.slice(0),this.denominator.slice(0),this.backupUnit)},e.prototype.genCSS=function(a,b){this.numerator.length>=1?b.add(this.numerator[0]):this.denominator.length>=1?b.add(this.denominator[0]):a&&a.strictUnits||!this.backupUnit||b.add(this.backupUnit)},e.prototype.toString=function(){var a,b=this.numerator.join("*");for(a=0;a<this.denominator.length;a++)b+="/"+this.denominator[a];return b},e.prototype.compare=function(a){return this.is(a.toString())?0:void 0},e.prototype.is=function(a){return this.toString().toUpperCase()===a.toUpperCase()},e.prototype.isLength=function(){return Boolean(this.toCSS().match(/px|em|%|in|cm|mm|pc|pt|ex/))},e.prototype.isEmpty=function(){return 0===this.numerator.length&&0===this.denominator.length},e.prototype.isSingular=function(){return this.numerator.length<=1&&0===this.denominator.length},e.prototype.map=function(a){var b;for(b=0;b<this.numerator.length;b++)this.numerator[b]=a(this.numerator[b],!1);for(b=0;b<this.denominator.length;b++)this.denominator[b]=a(this.denominator[b],!0)},e.prototype.usedUnits=function(){var a,b,c={};b=function(b){return a.hasOwnProperty(b)&&!c[e]&&(c[e]=b),b};for(var e in d)d.hasOwnProperty(e)&&(a=d[e],this.map(b));return c},e.prototype.cancel=function(){var a,b,c,d={};for(b=0;b<this.numerator.length;b++)a=this.numerator[b],c||(c=a),d[a]=(d[a]||0)+1;for(b=0;b<this.denominator.length;b++)a=this.denominator[b],c||(c=a),d[a]=(d[a]||0)-1;this.numerator=[],this.denominator=[];for(a in d)if(d.hasOwnProperty(a)){var e=d[a];if(e>0)for(b=0;e>b;b++)this.numerator.push(a);else if(0>e)for(b=0;-e>b;b++)this.denominator.push(a)}0===this.numerator.length&&0===this.denominator.length&&c&&(this.backupUnit=c),this.numerator.sort(),this.denominator.sort()},b.exports=e},{"../data/unit-conversions":13,"./node":66}],76:[function(a,b){var c=a("./node"),d=function(a,b,c,d){this.value=a,this.currentFileInfo=c,this.index=b,this.isEvald=d};d.prototype=new c,d.prototype.type="Url",d.prototype.accept=function(a){this.value=a.visit(this.value)},d.prototype.genCSS=function(a,b){b.add("url("),this.value.genCSS(a,b),b.add(")")},d.prototype.eval=function(a){var b,c=this.value.eval(a);if(!this.isEvald&&(b=this.currentFileInfo&&this.currentFileInfo.rootpath,b&&"string"==typeof c.value&&a.isPathRelative(c.value)&&(c.quote||(b=b.replace(/[\(\)'"\s]/g,function(a){return"\\"+a})),c.value=b+c.value),c.value=a.normalizePath(c.value),a.urlArgs&&!c.value.match(/^\s*data:/))){var e=-1===c.value.indexOf("?")?"?":"&",f=e+a.urlArgs;-1!==c.value.indexOf("#")?c.value=c.value.replace("#",f+"#"):c.value+=f}return new d(c,this.index,this.currentFileInfo,!0)},b.exports=d},{"./node":66}],77:[function(a,b){var c=a("./node"),d=function(a){if(this.value=a,!a)throw new Error("Value requires an array argument")};d.prototype=new c,d.prototype.type="Value",d.prototype.accept=function(a){this.value&&(this.value=a.visitArray(this.value))},d.prototype.eval=function(a){return 1===this.value.length?this.value[0].eval(a):new d(this.value.map(function(b){return b.eval(a)}))},d.prototype.genCSS=function(a,b){var c;for(c=0;c<this.value.length;c++)this.value[c].genCSS(a,b),c+1<this.value.length&&b.add(a&&a.compress?",":", ")},b.exports=d},{"./node":66}],78:[function(a,b){var c=a("./node"),d=function(a,b,c){this.name=a,this.index=b,this.currentFileInfo=c||{}};d.prototype=new c,d.prototype.type="Variable",d.prototype.eval=function(a){var b,c=this.name;if(0===c.indexOf("@@")&&(c="@"+new d(c.slice(1),this.index,this.currentFileInfo).eval(a).value),this.evaluating)throw{type:"Name",message:"Recursive variable definition for "+c,filename:this.currentFileInfo.filename,index:this.index};if(this.evaluating=!0,b=this.find(a.frames,function(b){var d=b.variable(c);return d?d.value.eval(a):void 0}))return this.evaluating=!1,b;throw{type:"Name",message:"variable "+c+" is undefined",filename:this.currentFileInfo.filename,index:this.index}},d.prototype.find=function(a,b){for(var c,d=0;d<a.length;d++)if(c=b.call(a,a[d]))return c;return null},b.exports=d},{"./node":66}],79:[function(a,b){b.exports={getLocation:function(a,b){for(var c=a+1,d=null,e=-1;--c>=0&&"\n"!==b.charAt(c);)e++;return"number"==typeof a&&(d=(b.slice(0,a).match(/\n/g)||"").length),{line:d,column:e}}}},{}],80:[function(a,b){var c=a("../tree"),d=a("./visitor"),e=function(){this._visitor=new d(this),this.contexts=[],this.allExtendsStack=[[]]};e.prototype={run:function(a){return a=this._visitor.visit(a),a.allExtends=this.allExtendsStack[0],a},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){if(!a.root){var b,d,e,f,g=[],h=a.rules,i=h?h.length:0;for(b=0;i>b;b++)a.rules[b]instanceof c.Extend&&(g.push(h[b]),a.extendOnEveryPath=!0);var j=a.paths;for(b=0;b<j.length;b++){var k=j[b],l=k[k.length-1],m=l.extendList;for(f=m?m.slice(0).concat(g):g,f&&(f=f.map(function(a){return a.clone()})),d=0;d<f.length;d++)this.foundExtends=!0,e=f[d],e.findSelfSelectors(k),e.ruleset=a,0===d&&(e.firstExtendOnThisSelectorPath=!0),this.allExtendsStack[this.allExtendsStack.length-1].push(e)}this.contexts.push(a.selectors)}},visitRulesetOut:function(a){a.root||(this.contexts.length=this.contexts.length-1)},visitMedia:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitMediaOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1},visitDirective:function(a){a.allExtends=[],this.allExtendsStack.push(a.allExtends)},visitDirectiveOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1}};var f=function(){this._visitor=new d(this)};f.prototype={run:function(a){var b=new e;return b.run(a),b.foundExtends?(a.allExtends=a.allExtends.concat(this.doExtendChaining(a.allExtends,a.allExtends)),this.allExtendsStack=[a.allExtends],this._visitor.visit(a)):a},doExtendChaining:function(a,b,d){var e,f,g,h,i,j,k,l,m=[],n=this;for(d=d||0,e=0;e<a.length;e++)for(f=0;f<b.length;f++)j=a[e],k=b[f],j.parent_ids.indexOf(k.object_id)>=0||(i=[k.selfSelectors[0]],g=n.findMatch(j,i),g.length&&j.selfSelectors.forEach(function(a){h=n.extendSelector(g,i,a),l=new c.Extend(k.selector,k.option,0),l.selfSelectors=h,h[h.length-1].extendList=[l],m.push(l),l.ruleset=k.ruleset,l.parent_ids=l.parent_ids.concat(k.parent_ids,j.parent_ids),k.firstExtendOnThisSelectorPath&&(l.firstExtendOnThisSelectorPath=!0,k.ruleset.paths.push(h))}));if(m.length){if(this.extendChainCount++,d>100){var o="{unable to calculate}",p="{unable to calculate}";try{o=m[0].selfSelectors[0].toCSS(),p=m[0].selector.toCSS()}catch(q){}throw{message:"extend circular reference detected. One of the circular extends is currently:"+o+":extend("+p+")"}}return m.concat(n.doExtendChaining(m,b,d+1))}return m},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitSelector:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){if(!a.root){var b,c,d,e,f=this.allExtendsStack[this.allExtendsStack.length-1],g=[],h=this;for(d=0;d<f.length;d++)for(c=0;c<a.paths.length;c++)if(e=a.paths[c],!a.extendOnEveryPath){var i=e[e.length-1].extendList;i&&i.length||(b=this.findMatch(f[d],e),b.length&&f[d].selfSelectors.forEach(function(a){g.push(h.extendSelector(b,e,a))}))}a.paths=a.paths.concat(g)}},findMatch:function(a,b){var c,d,e,f,g,h,i,j=this,k=a.selector.elements,l=[],m=[];for(c=0;c<b.length;c++)for(d=b[c],e=0;e<d.elements.length;e++)for(f=d.elements[e],(a.allowBefore||0===c&&0===e)&&l.push({pathIndex:c,index:e,matched:0,initialCombinator:f.combinator}),h=0;h<l.length;h++)i=l[h],g=f.combinator.value,""===g&&0===e&&(g=" "),!j.isElementValuesEqual(k[i.matched].value,f.value)||i.matched>0&&k[i.matched].combinator.value!==g?i=null:i.matched++,i&&(i.finished=i.matched===k.length,i.finished&&!a.allowAfter&&(e+1<d.elements.length||c+1<b.length)&&(i=null)),i?i.finished&&(i.length=k.length,i.endPathIndex=c,i.endPathElementIndex=e+1,l.length=0,m.push(i)):(l.splice(h,1),h--);return m},isElementValuesEqual:function(a,b){if("string"==typeof a||"string"==typeof b)return a===b;if(a instanceof c.Attribute)return a.op!==b.op||a.key!==b.key?!1:a.value&&b.value?(a=a.value.value||a.value,b=b.value.value||b.value,a===b):a.value||b.value?!1:!0;if(a=a.value,b=b.value,a instanceof c.Selector){if(!(b instanceof c.Selector)||a.elements.length!==b.elements.length)return!1;for(var d=0;d<a.elements.length;d++){if(a.elements[d].combinator.value!==b.elements[d].combinator.value&&(0!==d||(a.elements[d].combinator.value||" ")!==(b.elements[d].combinator.value||" ")))return!1;if(!this.isElementValuesEqual(a.elements[d].value,b.elements[d].value))return!1}return!0}return!1},extendSelector:function(a,b,d){var e,f,g,h,i,j=0,k=0,l=[];for(e=0;e<a.length;e++)h=a[e],f=b[h.pathIndex],g=new c.Element(h.initialCombinator,d.elements[0].value,d.elements[0].index,d.elements[0].currentFileInfo),h.pathIndex>j&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(b[j].elements.slice(k)),k=0,j++),i=f.elements.slice(k,h.index).concat([g]).concat(d.elements.slice(1)),j===h.pathIndex&&e>0?l[l.length-1].elements=l[l.length-1].elements.concat(i):(l=l.concat(b.slice(j,h.pathIndex)),l.push(new c.Selector(i))),j=h.endPathIndex,k=h.endPathElementIndex,k>=b[j].elements.length&&(k=0,j++);return j<b.length&&k>0&&(l[l.length-1].elements=l[l.length-1].elements.concat(b[j].elements.slice(k)),j++),l=l.concat(b.slice(j,b.length))},visitRulesetOut:function(){},visitMedia:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitMediaOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1},visitDirective:function(a){var b=a.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length-1]);b=b.concat(this.doExtendChaining(b,a.allExtends)),this.allExtendsStack.push(b)},visitDirectiveOut:function(){this.allExtendsStack.length=this.allExtendsStack.length-1}},b.exports=f},{"../tree":58,"./visitor":86}],81:[function(a,b){function c(a){this.imports=[],this.variableImports=[],this._onSequencerEmpty=a}c.prototype.addImport=function(a){var b=this,c={callback:a,args:null,isReady:!1};return this.imports.push(c),function(){c.args=Array.prototype.slice.call(arguments,0),c.isReady=!0,b.tryRun()}},c.prototype.addVariableImport=function(a){this.variableImports.push(a)},c.prototype.tryRun=function(){for(;;){for(;this.imports.length>0;){var a=this.imports[0];if(!a.isReady)return;this.imports=this.imports.slice(1),a.callback.apply(null,a.args)}if(0===this.variableImports.length)break;var b=this.variableImports[0];this.variableImports=this.variableImports.slice(1),b()}this._onSequencerEmpty&&this._onSequencerEmpty()},b.exports=c},{}],82:[function(a,b){var c=a("../contexts"),d=a("./visitor"),e=a("./import-sequencer"),f=function(a,b){this._visitor=new d(this),this._importer=a,this._finish=b,this.context=new c.Eval,this.importCount=0,this.onceFileDetectionMap={},this.recursionDetector={},this._sequencer=new e};f.prototype={isReplacing:!0,run:function(a){var b;try{this._visitor.visit(a)}catch(c){b=c}this.isFinished=!0,this._sequencer.tryRun(),0===this.importCount&&this._finish(b||this.error)},visitImport:function(a,b){var d=a.options.inline;if(!a.css||d){var e=new c.Eval(this.context,this.context.frames.slice(0)),f=e.frames[0];this.importCount++,a.isVariableImport()?this._sequencer.addVariableImport(this.processImportNode.bind(this,a,e,f)):a=this.processImportNode(a,e,f)}return b.visitDeeper=!1,a},processImportNode:function(a,b,c){var d,e=a.options.inline;try{d=a.evalForImport(b)}catch(f){f.filename||(f.index=a.index,f.filename=a.currentFileInfo.filename),a.css=!0,a.error=f}if(!d||d.css&&!e)this.importCount--;else{d.options.multiple&&(b.importMultiple=!0);var g=void 0===d.css,h=this.onImported.bind(this,d,b),i=this._sequencer.addImport(h);this._importer.push(d.getPath(),g,d.currentFileInfo,d.options,i);for(var j=0;j<c.rules.length;j++)if(c.rules[j]===a){c.rules[j]=d;break}a=d}return a},onImported:function(a,b,c,d,e,f){c&&(c.filename||(c.index=a.index,c.filename=a.currentFileInfo.filename),this.error=c);var g=this,h=a.options.inline,i=e||f in g.recursionDetector;if(b.importMultiple||(a.skip=i?!0:function(){return f in g.onceFileDetectionMap?!0:(g.onceFileDetectionMap[f]=!0,!1)}),d&&(a.root=d,a.importedFilename=f,!h&&(b.importMultiple||!i))){g.recursionDetector[f]=!0;var j=this.context;this.context=b;try{this._visitor.visit(d)}catch(c){this.error=c}this.context=j}g.importCount--,g.isFinished&&(this._sequencer.tryRun(),0===g.importCount&&g._finish(g.error))},visitRule:function(a,b){return b.visitDeeper=!1,a},visitDirective:function(a){return this.context.frames.unshift(a),a},visitDirectiveOut:function(){this.context.frames.shift()},visitMixinDefinition:function(a){return this.context.frames.unshift(a),a},visitMixinDefinitionOut:function(){this.context.frames.shift()},visitRuleset:function(a){return this.context.frames.unshift(a),a},visitRulesetOut:function(){this.context.frames.shift()},visitMedia:function(a){return this.context.frames.unshift(a.rules[0]),a},visitMediaOut:function(){this.context.frames.shift()}},b.exports=f},{"../contexts":10,"./import-sequencer":81,"./visitor":86}],83:[function(a,b){var c={Visitor:a("./visitor"),ImportVisitor:a("./import-visitor"),ExtendVisitor:a("./extend-visitor"),JoinSelectorVisitor:a("./join-selector-visitor"),ToCSSVisitor:a("./to-css-visitor")};b.exports=c},{"./extend-visitor":80,"./import-visitor":82,"./join-selector-visitor":84,"./to-css-visitor":85,"./visitor":86}],84:[function(a,b){var c=a("./visitor"),d=function(){this.contexts=[[]],this._visitor=new c(this)};d.prototype={run:function(a){return this._visitor.visit(a)},visitRule:function(a,b){b.visitDeeper=!1},visitMixinDefinition:function(a,b){b.visitDeeper=!1},visitRuleset:function(a){var b,c=this.contexts[this.contexts.length-1],d=[];this.contexts.push(d),a.root||(b=a.selectors,b&&(b=b.filter(function(a){return a.getIsOutput()}),a.selectors=b.length?b:b=null,b&&a.joinSelectors(d,c,b)),b||(a.rules=null),a.paths=d)},visitRulesetOut:function(){this.contexts.length=this.contexts.length-1},visitMedia:function(a){var b=this.contexts[this.contexts.length-1];a.rules[0].root=0===b.length||b[0].multiMedia}},b.exports=d},{"./visitor":86}],85:[function(a,b){var c=a("../tree"),d=a("./visitor"),e=function(a){this._visitor=new d(this),this._context=a};e.prototype={isReplacing:!0,run:function(a){return this._visitor.visit(a)},visitRule:function(a){return a.variable?void 0:a},visitMixinDefinition:function(a){a.frames=[]},visitExtend:function(){},visitComment:function(a){return a.isSilent(this._context)?void 0:a},visitMedia:function(a,b){return a.accept(this._visitor),b.visitDeeper=!1,a.rules.length?a:void 0},visitDirective:function(a){if(!a.currentFileInfo.reference||a.isReferenced){if("@charset"===a.name){if(this.charset){if(a.debugInfo){var b=new c.Comment("/* "+a.toCSS(this._context).replace(/\n/g,"")+" */\n");return b.debugInfo=a.debugInfo,this._visitor.visit(b)}return}this.charset=!0}return a.rules&&a.rules.rules&&this._mergeRules(a.rules.rules),a}},checkPropertiesInRoot:function(a){for(var b,d=0;d<a.length;d++)if(b=a[d],b instanceof c.Rule&&!b.variable)throw{message:"properties must be inside selector blocks, they cannot be in the root.",index:b.index,filename:b.currentFileInfo?b.currentFileInfo.filename:null}},visitRuleset:function(a,b){var d,e=[];if(a.firstRoot&&this.checkPropertiesInRoot(a.rules),a.root)a.accept(this._visitor),b.visitDeeper=!1,(a.firstRoot||a.rules&&a.rules.length>0)&&e.splice(0,0,a);else{a.paths&&(a.paths=a.paths.filter(function(a){var b;for(" "===a[0].elements[0].combinator.value&&(a[0].elements[0].combinator=new c.Combinator("")),b=0;b<a.length;b++)if(a[b].getIsReferenced()&&a[b].getIsOutput())return!0;return!1}));for(var f=a.rules,g=f?f.length:0,h=0;g>h;)d=f[h],d&&d.rules?(e.push(this._visitor.visit(d)),f.splice(h,1),g--):h++;g>0?a.accept(this._visitor):a.rules=null,b.visitDeeper=!1,f=a.rules,f&&(this._mergeRules(f),f=a.rules),f&&(this._removeDuplicateRules(f),f=a.rules),f&&f.length>0&&a.paths.length>0&&e.splice(0,0,a)}return 1===e.length?e[0]:e},_removeDuplicateRules:function(a){if(a){var b,d,e,f={};for(e=a.length-1;e>=0;e--)if(d=a[e],d instanceof c.Rule)if(f[d.name]){b=f[d.name],b instanceof c.Rule&&(b=f[d.name]=[f[d.name].toCSS(this._context)]);var g=d.toCSS(this._context);-1!==b.indexOf(g)?a.splice(e,1):b.push(g)}else f[d.name]=d}},_mergeRules:function(a){if(a){for(var b,d,e,f={},g=0;g<a.length;g++)d=a[g],d instanceof c.Rule&&d.merge&&(e=[d.name,d.important?"!":""].join(","),f[e]?a.splice(g--,1):f[e]=[],f[e].push(d));Object.keys(f).map(function(a){function e(a){return new c.Expression(a.map(function(a){return a.value}))}function g(a){return new c.Value(a.map(function(a){return a}))}if(b=f[a],b.length>1){d=b[0];var h=[],i=[];b.map(function(a){"+"===a.merge&&(i.length>0&&h.push(e(i)),i=[]),i.push(a)}),h.push(e(i)),d.value=g(h)}})}}},b.exports=e},{"../tree":58,"./visitor":86}],86:[function(a,b){function c(a){return a}function d(a,b){var c,e;for(c in a)if(a.hasOwnProperty(c))switch(e=a[c],typeof e){case"function":e.prototype&&e.prototype.type&&(e.prototype.typeIndex=b++);break;case"object":b=d(e,b)}return b}var e=a("../tree"),f={visitDeeper:!0},g=!1,h=function(a){this._implementation=a,this._visitFnCache=[],g||(d(e,1),g=!0)};h.prototype={visit:function(a){if(!a)return a;var b=a.typeIndex;if(!b)return a;var d,e=this._visitFnCache,g=this._implementation,h=b<<1,i=1|h,j=e[h],k=e[i],l=f;if(l.visitDeeper=!0,j||(d="visit"+a.type,j=g[d]||c,k=g[d+"Out"]||c,e[h]=j,e[i]=k),j!==c){var m=j.call(g,a,l);g.isReplacing&&(a=m)}return l.visitDeeper&&a&&a.accept&&a.accept(this),k!=c&&k.call(g,a),a},visitArray:function(a,b){if(!a)return a;var c,d=a.length;if(b||!this._implementation.isReplacing){for(c=0;d>c;c++)this.visit(a[c]);return a}var e=[];for(c=0;d>c;c++){var f=this.visit(a[c]);void 0!==f&&(f.splice?f.length&&this.flatten(f,e):e.push(f))}return e},flatten:function(a,b){b||(b=[]);var c,d,e,f,g,h;for(d=0,c=a.length;c>d;d++)if(e=a[d],void 0!==e)if(e.splice)for(g=0,f=e.length;f>g;g++)h=e[g],void 0!==h&&(h.splice?h.length&&this.flatten(h,b):b.push(h));else b.push(e);return b}},b.exports=h},{"../tree":58}],87:[function(a,b){function c(){}var d=b.exports={};d.nextTick=function(){var a="undefined"!=typeof window&&window.setImmediate,b="undefined"!=typeof window&&window.MutationObserver,c="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(a)return function(a){return window.setImmediate(a)};var d=[];if(b){var e=document.createElement("div"),f=new MutationObserver(function(){var a=d.slice();d.length=0,a.forEach(function(a){a()})});return f.observe(e,{attributes:!0}),function(a){d.length||e.setAttribute("yes","no"),d.push(a)}}return c?(window.addEventListener("message",function(a){var b=a.source;if((b===window||null===b)&&"process-tick"===a.data&&(a.stopPropagation(),d.length>0)){var c=d.shift();c()}},!0),function(a){d.push(a),window.postMessage("process-tick","*")}):function(a){setTimeout(a,0)}}(),d.title="browser",d.browser=!0,d.env={},d.argv=[],d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.binding=function(){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(){throw new Error("process.chdir is not supported")}},{}],88:[function(a,b){"use strict";function c(a){function b(a){return null===i?void k.push(a):void f(function(){var b=i?a.onFulfilled:a.onRejected;if(null===b)return void(i?a.resolve:a.reject)(j);var c;try{c=b(j)}catch(d){return void a.reject(d)}a.resolve(c)})}function c(a){try{if(a===l)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"==typeof a||"function"==typeof a)){var b=a.then;if("function"==typeof b)return void e(b.bind(a),c,g)}i=!0,j=a,h()}catch(d){g(d)}}function g(a){i=!1,j=a,h()}function h(){for(var a=0,c=k.length;c>a;a++)b(k[a]);k=null}if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof a)throw new TypeError("not a function");var i=null,j=null,k=[],l=this;this.then=function(a,c){return new l.constructor(function(e,f){b(new d(a,c,e,f))})},e(a,c,g)}function d(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function e(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var f=a("asap");b.exports=c},{asap:90}],89:[function(a,b){"use strict";function c(a){this.then=function(b){return"function"!=typeof b?this:new d(function(c,d){e(function(){try{c(b(a))}catch(e){d(e)}})})}}var d=a("./core.js"),e=a("asap");b.exports=d,c.prototype=d.prototype;var f=new c(!0),g=new c(!1),h=new c(null),i=new c(void 0),j=new c(0),k=new c("");d.resolve=function(a){if(a instanceof d)return a;if(null===a)return h;if(void 0===a)return i;if(a===!0)return f;if(a===!1)return g;if(0===a)return j;if(""===a)return k;if("object"==typeof a||"function"==typeof a)try{var b=a.then;if("function"==typeof b)return new d(b.bind(a))}catch(e){return new d(function(a,b){b(e)})}return new c(a)},d.all=function(a){var b=Array.prototype.slice.call(a);return new d(function(a,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}b[f]=g,0===--e&&a(b)}catch(i){c(i)}}if(0===b.length)return a([]);for(var e=b.length,f=0;f<b.length;f++)d(f,b[f])})},d.reject=function(a){return new d(function(b,c){c(a)})},d.race=function(a){return new d(function(b,c){a.forEach(function(a){d.resolve(a).then(b,c)})})},d.prototype["catch"]=function(a){return this.then(null,a)}},{"./core.js":88,asap:90}],90:[function(a,b){(function(a){function c(){for(;e.next;){e=e.next;var a=e.task;e.task=void 0;var b=e.domain;b&&(e.domain=void 0,b.enter());try{a()}catch(d){if(i)throw b&&b.exit(),setTimeout(c,0),b&&b.enter(),d;setTimeout(function(){throw d},0)}b&&b.exit()}g=!1}function d(b){f=f.next={task:b,domain:i&&a.domain,next:null},g||(g=!0,h())}var e={task:void 0,next:null},f=e,g=!1,h=void 0,i=!1;if("undefined"!=typeof a&&a.nextTick)i=!0,h=function(){a.nextTick(c)};else if("function"==typeof setImmediate)h="undefined"!=typeof window?setImmediate.bind(window,c):function(){setImmediate(c)};else if("undefined"!=typeof MessageChannel){var j=new MessageChannel;j.port1.onmessage=c,h=function(){j.port2.postMessage(0)}}else h=function(){setTimeout(c,0)};b.exports=d}).call(this,a("_process"))},{_process:87}],91:[function(){"function"!=typeof Promise.prototype.done&&(Promise.prototype.done=function(){var a=arguments.length?this.then.apply(this,arguments):this;
a.then(null,function(a){setTimeout(function(){throw a},0)})})},{}],"promise/polyfill.js":[function(a){a("asap");"undefined"==typeof Promise&&(Promise=a("./lib/core.js"),a("./lib/es6-extensions.js")),a("./polyfill-done.js")},{"./lib/core.js":88,"./lib/es6-extensions.js":89,"./polyfill-done.js":91,asap:90}]},{},[2])(2)});
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ui.router',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers',
]).run(['$rootScope', '$state', '$stateParams',
	function($rootScope, $state, $stateParams) {

		// It's very handy to add references to $state and $stateParams to the $rootScope
		// so that you can access them from any scope within your applications.For example,
		// <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
		// to active whenever 'contacts.list' or one of its decendents is active.
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

	}
]).config(
	['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');			

			$stateProvider.state('home', {
				url: "/home",
				templateUrl: 'app/partials/layout/layout.html',
				controller: 'layoutController'
			});

		}
	]);

/*controllers*/
angular.module('myApp.controllers', []);
/* Directives */
angular.module('myApp.directives', []);
/* Services */
angular.module('myApp.services', []);


angular.module('myApp.controllers')
	.controller('homeController', ['$scope',
		function($scope) {
			
		}
	]);
angular.module('myApp.controllers')
	.controller('layoutController', ['$scope',
		function($scope) {
			$scope.data = [{
				status: 'pending',
				type: 'build',
				name: "Tenrox-R1_1235",
				owner: "",
				time: "",
				boxes: [{
					color: "",
					percent: ""
				}, {
					color: "",
					percent: ""
				},
				{
					color: "",
					percent: ""
				},
				{
					color: "",
					percent: ""
				}]
			},
			{
				status: 'running',
				type: 'firewall',
				name: "432462",
				owner: "jtuck",
				time: "4/18/2014 12:12pm",
				boxes: [{
					color: "blue",
					percent: "75"
				},{
					color: "",
					percent: ""
				},
				{
					color: "",
					percent: ""
				},
				{
					color: "",
					percent: ""
				}]
			},
			{
				status: 'rejected',
				type: 'firewall',
				name: "432461",
				owner: "samy",
				time: "4/18/2014 10:53am",
				boxes: [{
					color: "red",
					percent: "100"
				},{
					color: "green",
					percent: "100"
				},
				{
					color: "green",
					percent: "100"
				},
				{
					color: "green",
					percent: "100"
				}]
			},
			{
				status: 'complete',
				type: 'build',
				name: "Tenrox-R1_1235",
				owner: "",
				time: "4/18/2014 12:12pm",
				boxes: [{
					color: "green",
					percent: "100"
				},{
					color: "green",
					percent: "100"
				},
				{
					color: "green",
					percent: "100"
				},
				{
					color: "green",
					percent: "100"
				}]
			},
			{
				status: 'rejected',
				type: 'firewall',
				name: "432460",
				owner: "samy",
				time: "4/17/2014 7:51am",
				boxes: [{
					color: "red",
					percent: "100"
				},{
					color: "",
					percent: ""
				},
				{
					color: "",
					percent: ""
				},
				{
					color: "",
					percent: ""
				}]
			},
			{
				status: 'accepted',
				type: 'firewall',
				name: "432459",
				owner: "samy",
				time: "4/16/2014 6:43pm",
				boxes: [{
					color: "green",
					percent: "100"
				},{
					color: "green",
					percent: "100"
				},
				{
					color: "green",
					percent: "100"
				},
				{
					color: "green",
					percent: "100"
				}]
			}]	
		}
	]);
angular.module('myApp.directives')
	.directive('box', function() {
		return {
			replace: 'true',
			restrict: 'E',
			templateUrl: 'app/partials/elements/box.html',
			link: function(scope, element, attrs) {

				element = $(element);

				element.find('.fill').addClass(attrs.color);
				element.find('.fill').css('right', (100 - attrs.percent) + "%" );

			}
		};
	});
angular.module('myApp.directives')
	.directive('row', ['rowService',
		function(rowService) {
			return {
				replace: 'true',
				restrict: 'E',
				templateUrl: 'app/partials/elements/row.html',
				scope: {
			        details: '=',
			    },
				link: function(scope, element, attrs) {

					scope.index = attrs.index;

					var type = attrs.type == 'build' ? 'fa-desktop' : 'fa-square';  

					element.addClass(attrs.status);
					$(element).find('.icon i').addClass(type);

					element.bind("click", function() {

						
						if (!element.hasClass('open')) {
							//All Rows Actions
							$('.row').removeClass('open');
							$('.name').removeClass("clicked");
							$('.calc').fadeIn(300);
							$('.tiles').removeClass("open");

							element.addClass("open");
							$(element).find('.name').addClass("clicked");
							$(element).find('.tiles').addClass("open");
							$(element).find(".calc").fadeOut(300);

						} else {
							element.removeClass("open");
							$(element).find('.name').removeClass("clicked");
							$(element).find('.tiles').removeClass("open");
							$(element).find(".calc").fadeIn(300);
						}


					});
				}
			};
		}
	]);
angular.module('myApp.services')
	.service('rowService', function() {
		
	});