import{Ba as M,Qb as D,V as d,Xb as S,Zb as C,_ as y,_b as I,ra as j,sa as F,vb as w,wb as x,zb as B}from"./chunk-KYGIZ5HK.js";import{e as A}from"./chunk-FDERIQAA.js";function ue(){let r=window,l=document,g="hljs-ln",b="hljs-ln-line",f="hljs-ln-code",H="hljs-ln-numbers",L="hljs-ln-n",m="data-line-number",p=/\r\n|\r|\n/g;r.hljs?(r.hljs.initLineNumbersOnLoad=G,r.hljs.lineNumbersBlock=O,r.hljs.lineNumbersValue=K,k()):r.console.error("highlight.js not detected!");function R(e){let t=e;for(;t;){if(t.className&&t.className.indexOf("hljs-ln-code")!==-1)return!0;t=t.parentNode}return!1}function P(e){let t=e;for(;t.nodeName!=="TABLE";)t=t.parentNode;return t}function V(e){let t=e.toString(),n=e.anchorNode;for(;n.nodeName!=="TD";)n=n.parentNode;let i=e.focusNode;for(;i.nodeName!=="TD";)i=i.parentNode;let s=parseInt(n.dataset.lineNumber),o=parseInt(i.dataset.lineNumber);if(s!=o){let u=n.textContent,c=i.textContent;if(s>o){let a=s;s=o,o=a,a=u,u=c,c=a}for(;t.indexOf(u)!==0;)u=u.slice(1);for(;t.lastIndexOf(c)===-1;)c=c.slice(0,-1);let N=u,ee=P(n);for(let a=s+1;a<o;++a){let te=h('.{0}[{1}="{2}"]',[f,m,a]),ne=ee.querySelector(te);N+=`
`+ne.textContent}return N+=`
`+c,N}else return t}document.addEventListener("copy",function(e){let t=window.getSelection();if(R(t.anchorNode)){let n;window.navigator.userAgent.indexOf("Edge")!==-1?n=V(t):n=t.toString(),e.clipboardData.setData("text/plain",n),e.preventDefault()}});function k(){let e=l.createElement("style");e.type="text/css",e.innerHTML=h(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[g,L,m]),l.getElementsByTagName("head")[0].appendChild(e)}function G(e){l.readyState==="interactive"||l.readyState==="complete"?E(e):r.addEventListener("DOMContentLoaded",function(){E(e)})}function E(e){try{let t=l.querySelectorAll("code.hljs,code.nohighlight");for(let n in t)t.hasOwnProperty(n)&&(q(t[n])||O(t[n],e))}catch(t){r.console.error("LineNumbers error: ",t)}}function q(e){return e.classList.contains("nohljsln")}function O(e,t){typeof e=="object"&&Y(function(){e.innerHTML=T(e,t)})}function K(e,t){if(typeof e!="string")return;let n=document.createElement("code");return n.innerHTML=e,T(n,t)}function T(e,t){let n=J(e,t);return _(e),U(e.innerHTML,n)}function U(e,t){let n=v(e);if(n[n.length-1].trim()===""&&n.pop(),n.length>1||t.singleLine){let i="";for(let s=0,o=n.length;s<o;s++)i+=h('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[b,H,L,m,f,s+t.startFrom,n[s].length>0?n[s]:" "]);return h('<table class="{0}">{1}</table>',[g,i])}return e}function J(e,t){return t=t||{},{singleLine:X(t),startFrom:z(e,t)}}function X(e){return e.singleLine?e.singleLine:!1}function z(e,t){let i=1;isFinite(t.startFrom)&&(i=t.startFrom);let s=Z(e,"data-ln-start-from");return s!==null&&(i=$(s,1)),i}function _(e){let t=e.childNodes;for(let n in t)if(t.hasOwnProperty(n)){let i=t[n];W(i.textContent)>0&&(i.childNodes.length>0?_(i):Q(i.parentNode))}}function Q(e){let t=e.className;if(!/hljs-/.test(t))return;let n=v(e.innerHTML),i="";for(let s=0;s<n.length;s++){let o=n[s].length>0?n[s]:" ";i+=h(`<span class="{0}">{1}</span>
`,[t,o])}e.innerHTML=i.trim()}function v(e){return e.length===0?[]:e.split(p)}function W(e){return(e.trim().match(p)||[]).length}function Y(e){r.setTimeout(e,0)}function h(e,t){return e.replace(/\{(\d+)\}/g,function(n,i){return t[i]!==void 0?t[i]:n})}function Z(e,t){return e.hasAttribute(t)?e.getAttribute(t):null}function $(e,t){if(!e)return t;let n=Number(e);return isFinite(n)?n:t}}var ce=(()=>{let l=class l{constructor(){this._platform=d(F),this.options=d(S)?.lineNumbersOptions,this._hljs=d(C),this._highlight=d(I),this._nativeElement=d(j).nativeElement,this.startFrom=this.options?.startFrom,this.singleLine=this.options?.singleLine,D(this._platform)&&B(()=>{this._highlight.highlightResult()&&this.addLineNumbers()})}addLineNumbers(){this.destroyLineNumbersObserver(),requestAnimationFrame(()=>A(this,null,function*(){yield this._hljs.lineNumbersBlock(this._nativeElement,{startFrom:this.startFrom,singleLine:this.singleLine}),this._lineNumbersObs=new MutationObserver(()=>{this._nativeElement.firstElementChild?.tagName.toUpperCase()==="TABLE"&&this._nativeElement.classList.add("hljs-line-numbers"),this.destroyLineNumbersObserver()}),this._lineNumbersObs.observe(this._nativeElement,{childList:!0})}))}destroyLineNumbersObserver(){this._lineNumbersObs&&(this._lineNumbersObs.disconnect(),this._lineNumbersObs=null)}};l.\u0275fac=function(f){return new(f||l)},l.\u0275dir=y({type:l,selectors:[["","highlight","","lineNumbers",""],["","highlightAuto","","lineNumbers",""]],inputs:{startFrom:[2,"startFrom","startFrom",x],singleLine:[2,"singleLine","singleLine",w]},standalone:!0,features:[M]});let r=l;return r})();export{ce as HighlightLineNumbers,ue as activateLineNumbers};
