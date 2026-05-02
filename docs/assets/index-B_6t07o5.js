var $=Object.defineProperty;var P=(t,e,s)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var r=(t,e,s)=>P(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();var k="1.3.23";function R(t,e,s){return Math.max(t,Math.min(e,s))}function A(t,e,s){return(1-s)*t+s*e}function D(t,e,s,o){return A(t,e,1-Math.exp(-s*o))}function Y(t,e){return(t%e+e)%e}var X=class{constructor(){r(this,"isRunning",!1);r(this,"value",0);r(this,"from",0);r(this,"to",0);r(this,"currentTime",0);r(this,"lerp");r(this,"duration");r(this,"easing");r(this,"onUpdate")}advance(t){var s;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const o=R(0,this.currentTime/this.duration,1);e=o>=1;const i=e?1:this.easing(o);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=D(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(s=this.onUpdate)==null||s.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:s,duration:o,easing:i,onStart:a,onUpdate:h}){this.from=this.value=t,this.to=e,this.lerp=s,this.duration=o,this.easing=i,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=h}};function j(t,e){let s;return function(...o){clearTimeout(s),s=setTimeout(()=>{s=void 0,t.apply(this,o)},e)}}var B=class{constructor(t,e,{autoResize:s=!0,debounce:o=250}={}){r(this,"width",0);r(this,"height",0);r(this,"scrollHeight",0);r(this,"scrollWidth",0);r(this,"debouncedResize");r(this,"wrapperResizeObserver");r(this,"contentResizeObserver");r(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});r(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});r(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,s&&(this.debouncedResize=j(this.resize,o),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},W=class{constructor(){r(this,"events",{})}emit(t,...e){var o;const s=this.events[t]||[];for(let i=0,a=s.length;i<a;i++)(o=s[i])==null||o.call(s,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var s;this.events[t]=(s=this.events[t])==null?void 0:s.filter(o=>e!==o)}}off(t,e){var s;this.events[t]=(s=this.events[t])==null?void 0:s.filter(o=>e!==o)}destroy(){this.events={}}};const I=100/6,E={passive:!1};function T(t,e){return t===1?I:t===2?e:1}var q=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){r(this,"touchStart",{x:0,y:0});r(this,"lastDelta",{x:0,y:0});r(this,"window",{width:0,height:0});r(this,"emitter",new W);r(this,"onTouchStart",t=>{const{clientX:e,clientY:s}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=s,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});r(this,"onTouchMove",t=>{const{clientX:e,clientY:s}=t.targetTouches?t.targetTouches[0]:t,o=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(s-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=s,this.lastDelta={x:o,y:i},this.emitter.emit("scroll",{deltaX:o,deltaY:i,event:t})});r(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});r(this,"onWheel",t=>{let{deltaX:e,deltaY:s,deltaMode:o}=t;const i=T(o,this.window.width),a=T(o,this.window.height);e*=i,s*=a,e*=this.options.wheelMultiplier,s*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:s,event:t})});r(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,E),this.element.addEventListener("touchstart",this.onTouchStart,E),this.element.addEventListener("touchmove",this.onTouchMove,E),this.element.addEventListener("touchend",this.onTouchEnd,E)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,E),this.element.removeEventListener("touchstart",this.onTouchStart,E),this.element.removeEventListener("touchmove",this.onTouchMove,E),this.element.removeEventListener("touchend",this.onTouchEnd,E)}};const N=t=>Math.min(1,1.001-2**(-10*t));var F=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:s=t,smoothWheel:o=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:h=1.7,duration:u,easing:d,lerp:p=.1,infinite:w=!1,orientation:c="vertical",gestureOrientation:n=c==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:l=1,autoResize:f=!0,prevent:v,virtualScroll:g,overscroll:y=!0,autoRaf:S=!1,anchors:b=!1,autoToggle:L=!1,allowNestedScroll:z=!1,__experimental__naiveDimensions:H=!1,naiveDimensions:M=H,stopInertiaOnNavigate:_=!1}={}){r(this,"_isScrolling",!1);r(this,"_isStopped",!1);r(this,"_isLocked",!1);r(this,"_preventNextNativeScrollEvent",!1);r(this,"_resetVelocityTimeout",null);r(this,"_rafId",null);r(this,"isTouching");r(this,"time",0);r(this,"userData",{});r(this,"lastVelocity",0);r(this,"velocity",0);r(this,"direction",0);r(this,"options");r(this,"targetScroll");r(this,"animatedScroll");r(this,"animate",new X);r(this,"emitter",new W);r(this,"dimensions");r(this,"virtualScroll");r(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});r(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});r(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});r(this,"onClick",t=>{const e=t.composedPath().filter(o=>o instanceof HTMLAnchorElement&&o.href).map(o=>new URL(o.href)),s=new URL(window.location.href);if(this.options.anchors){const o=e.find(i=>s.host===i.host&&s.pathname===i.pathname&&i.hash);if(o){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${o.hash.split("#")[1]}`;this.scrollTo(a,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(o=>s.host===o.host&&s.pathname!==o.pathname)){this.reset();return}});r(this,"onPointerDown",t=>{t.button===1&&this.reset()});r(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:s,event:o}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:s,event:o}),o.ctrlKey||o.lenisStopPropagation)return;const i=o.type.includes("touch"),a=o.type.includes("wheel");this.isTouching=o.type==="touchstart"||o.type==="touchmove";const h=e===0&&s===0;if(this.options.syncTouch&&i&&o.type==="touchstart"&&h&&!this.isStopped&&!this.isLocked){this.reset();return}const u=this.options.gestureOrientation==="vertical"&&s===0||this.options.gestureOrientation==="horizontal"&&e===0;if(h||u)return;let d=o.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const p=this.options.prevent,w=Math.abs(e)>=Math.abs(s)?"horizontal":"vertical";if(d.find(l=>{var f,v,g,y,S;return l instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(l))||((f=l.hasAttribute)==null?void 0:f.call(l,"data-lenis-prevent"))||w==="vertical"&&((v=l.hasAttribute)==null?void 0:v.call(l,"data-lenis-prevent-vertical"))||w==="horizontal"&&((g=l.hasAttribute)==null?void 0:g.call(l,"data-lenis-prevent-horizontal"))||i&&((y=l.hasAttribute)==null?void 0:y.call(l,"data-lenis-prevent-touch"))||a&&((S=l.hasAttribute)==null?void 0:S.call(l,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(l,{deltaX:e,deltaY:s}))}))return;if(this.isStopped||this.isLocked){o.cancelable&&o.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),o.lenisStopPropagation=!0;return}let c=s;this.options.gestureOrientation==="both"?c=Math.abs(s)>Math.abs(e)?s:e:this.options.gestureOrientation==="horizontal"&&(c=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&s>0||this.animatedScroll===this.limit&&s<0))&&(o.lenisStopPropagation=!0),o.cancelable&&o.preventDefault();const n=i&&this.options.syncTouch,m=i&&o.type==="touchend";m&&(c=Math.sign(c)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+c,{programmatic:!1,...n?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});r(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});r(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=k,window.lenis||(window.lenis={}),window.lenis.version=k,c==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!t||t===document.documentElement)&&(t=window),typeof u=="number"&&typeof d!="function"?d=N:typeof d=="function"&&typeof u!="number"&&(u=1),this.options={wrapper:t,content:e,eventsTarget:s,smoothWheel:o,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:h,duration:u,easing:d,lerp:p,infinite:w,gestureOrientation:n,orientation:c,touchMultiplier:m,wheelMultiplier:l,autoResize:f,prevent:v,virtualScroll:g,overscroll:y,autoRaf:S,anchors:b,autoToggle:L,allowNestedScroll:z,naiveDimensions:M,stopInertiaOnNavigate:_},this.dimensions=new B(t,e,{autoResize:f}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new q(s,{touchMultiplier:m,wheelMultiplier:l}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:s=!1,lock:o=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:h=i?this.options.duration:void 0,easing:u=i?this.options.easing:void 0,onStart:d,onComplete:p,force:w=!1,userData:c}={}){if((this.isStopped||this.isLocked)&&!w)return;let n=t,m=e;if(typeof n=="string"&&["top","left","start","#"].includes(n))n=0;else if(typeof n=="string"&&["bottom","right","end"].includes(n))n=this.limit;else{let l=null;if(typeof n=="string"?(l=document.querySelector(n),l||(n==="#top"?n=0:console.warn("Lenis: Target not found",n))):n instanceof HTMLElement&&(n!=null&&n.nodeType)&&(l=n),l){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?b.left:b.top}const f=l.getBoundingClientRect(),v=getComputedStyle(l),g=this.isHorizontal?Number.parseFloat(v.scrollMarginLeft):Number.parseFloat(v.scrollMarginTop),y=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);n=(this.isHorizontal?f.left:f.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(S)?0:S)}}if(typeof n=="number"){if(n+=m,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const l=n-this.animatedScroll;l>this.limit/2?n-=this.limit:l<-this.limit/2&&(n+=this.limit)}}else n=R(0,n,this.limit);if(n===this.targetScroll){d==null||d(this),p==null||p(this);return}if(this.userData=c??{},s){this.animatedScroll=this.targetScroll=n,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=n),typeof h=="number"&&typeof u!="function"?u=N:typeof u=="function"&&typeof h!="number"&&(h=1),this.animate.fromTo(this.animatedScroll,n,{duration:h,easing:u,lerp:a,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling="smooth",d==null||d(this)},onUpdate:(l,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=l-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=l,this.setScroll(this.scroll),i&&(this.targetScroll=l),f||this.emit(),f&&(this.reset(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:s}){const o=Date.now();t._lenis||(t._lenis={});const i=t._lenis;let a,h,u,d,p,w,c,n,m,l;if(o-(i.time??0)>2e3){i.time=Date.now();const z=window.getComputedStyle(t);if(i.computedStyle=z,a=["auto","overlay","scroll"].includes(z.overflowX),h=["auto","overlay","scroll"].includes(z.overflowY),p=["auto"].includes(z.overscrollBehaviorX),w=["auto"].includes(z.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=h,!(a||h))return!1;c=t.scrollWidth,n=t.scrollHeight,m=t.clientWidth,l=t.clientHeight,u=c>m,d=n>l,i.isScrollableX=u,i.isScrollableY=d,i.scrollWidth=c,i.scrollHeight=n,i.clientWidth=m,i.clientHeight=l,i.hasOverscrollBehaviorX=p,i.hasOverscrollBehaviorY=w}else u=i.isScrollableX,d=i.isScrollableY,a=i.hasOverflowX,h=i.hasOverflowY,c=i.scrollWidth,n=i.scrollHeight,m=i.clientWidth,l=i.clientHeight,p=i.hasOverscrollBehaviorX,w=i.hasOverscrollBehaviorY;if(!(a&&u||h&&d))return!1;const f=Math.abs(e)>=Math.abs(s)?"horizontal":"vertical";let v,g,y,S,b,L;if(f==="horizontal")v=Math.round(t.scrollLeft),g=c-m,y=e,S=a,b=u,L=p;else if(f==="vertical")v=Math.round(t.scrollTop),g=n-l,y=s,S=h,b=d,L=w;else return!1;return!L&&(v>=g||v<=0)?!0:(y>0?v<g:v>0)&&S&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Y(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};const V=()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0)return;const e=document.createElement("div");e.classList.add("custom-cursor"),document.body.appendChild(e);let s=0,o=0,i=0,a=0;const h=()=>{const c=s-i,n=o-a;i+=c*.2,a+=n*.2,e.style.transform=`translate(calc(${i}px - 50%), calc(${a}px - 50%))`,requestAnimationFrame(h)};document.addEventListener("mousemove",c=>{s=c.clientX,o=c.clientY});const u=()=>e.classList.add("hover"),d=()=>e.classList.remove("hover"),p=()=>{document.querySelectorAll("a, button, input, textarea").forEach(n=>{n.addEventListener("mouseenter",u),n.addEventListener("mouseleave",d)})};p(),new MutationObserver(c=>{let n=!1;for(const m of c)if(m.addedNodes.length>0){n=!0;break}n&&p()}).observe(document.body,{childList:!0,subtree:!0}),requestAnimationFrame(h)},x={contact:{phone:"+48 123 456 789",phoneLink:"tel:+48123456789",email:"kontakt@premium-bikes.pl",emailLink:"mailto:kontakt@premium-bikes.pl",location:"Warszawa, Polska"},navigation:[{name:"Strona Główna",href:"#home"},{name:"O nas",href:"#about"},{name:"Kontakt",href:"#contact"}],hero:{title:"OBORA",subtitle:"SERWIS ROWEROWY"},about:{title:"Pasja i Precyzja",description1:"Jesteśmy ekspertami, dla których rower to coś więcej niż środek transportu. Do każdego zlecenia podchodzimy z inżynieryjną dokładnością.",description2:"Nasze standardy to absolutny brak kompromisów. Każda śruba, każdy mechanizm muszą działać perfekcyjnie.",imagePath:"/bike_service_website/img/ft1.png",imagePath2:"/bike_service_website/img/ft2.jpeg"},footer:{copyright:"© 2026 OBORA Serwis Rowerowy. Wszelkie prawa zastrzeżone.",developerEmail:"awalicki04@gmail.com"}},C=()=>{const{contact:t,navigation:e}=x,s=e.map(o=>`<a href="${o.href}" class="nav-link">${o.name}</a>`).join("");return`
    <header class="header">
      <div class="top-bar">
        <div class="top-bar-content">
          <a href="${t.phoneLink}">${t.phone}</a>
          <span class="separator">/</span>
          <a href="${t.emailLink}">${t.email}</a>
          <span class="separator">/</span>
          <span>${t.location}</span>
        </div>
      </div>
      <nav class="main-nav" aria-label="Główna nawigacja">
        <div class="nav-content">
          <div class="logo">OBORA.</div>
          <div class="nav-links">
            ${s}
          </div>
        </div>
      </nav>
    </header>
  `},U=()=>{const{hero:t}=x;return`
    <section id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">${t.title}</h1>
        <h2 class="hero-subtitle">${t.subtitle}</h2>
      </div>
      
      <div class="hero-bg">
        <svg aria-hidden="true" viewBox="0 0 800 600" class="bike-svg" fill="none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
          <!-- Koła -->
          <circle cx="200" cy="400" r="130" />
          <circle cx="600" cy="400" r="130" />
          
          <!-- Rama główna -->
          <line x1="200" y1="400" x2="350" y2="400" />
          <line x1="200" y1="400" x2="300" y2="200" />
          <line x1="300" y1="200" x2="350" y2="400" />
          <line x1="300" y1="200" x2="520" y2="200" />
          <line x1="520" y1="200" x2="350" y2="400" />
          
          <!-- Widelec i stery -->
          <line x1="505" y1="162" x2="600" y2="400" />

          <!-- mostek -->
           <!-- <line x1="505" y1="162" x2="570" y2="162" /> -->
          
          <!-- Kierownica szosowa (baranek) -->
          <path d="M 520 160 Q 590 160 540 210" />
          <path d="M 560 160 Q 610 160 570 210" />
          
            <!-- <path d="M 570 160 A 400 60 0 0 1 570 200"/> -->
  

          
          <!-- Sztyca i siodło -->
          <line x1="300" y1="200" x2="280" y2="150" />
          <path d="M240 150 L 310 150 Q 320 150 320 160 L 250 160 Z" class="bike-saddle" />
          
          <!-- Napęd (korba, zębatka, geje) -->
          <circle cx="350" cy="400" r="35" />
          <line x1="350" y1="400" x2="340" y2="450" />
          <line x1="330" y1="450" x2="350" y2="450" />
          
          <line x1="350" y1="400" x2="360" y2="350" />
          <line x1="350" y1="350" x2="370" y2="350" />
        </svg>
    </div>
    </section>
  `},K=()=>{const{about:t}=x;return`
    <section id="about" class="about">
      <div class="about-container">
        <div class="about-content">
          <h2 class="section-title">${t.title}</h2>
          <p class="about-text">${t.description1}</p>
          <p class="about-text">${t.description2}</p>
        </div>
        <div class="about-images">
          <div class="about-image-wrapper img-1">
            <img src="${t.imagePath}" alt="Obora Detale" loading="lazy" class="about-image" />
          </div>
          <div class="about-image-wrapper img-2">
            <img src="${t.imagePath2}" alt="Obora Praca" loading="lazy" class="about-image" />
          </div>
        </div>
      </div>
    </section>
  `},G=()=>{const{contact:t}=x;return`
    <section id="contact" class="contact">
      <div class="contact-container">
        <div class="contact-map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.3543850604!2d20.9211124!3d52.2330653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            class="contact-map"
            data-lenis-prevent
            title="Google Maps - Lokalizacja naszego serwisu"
          ></iframe>
          <div class="map-overlay"></div>
        </div>
        
        <div class="contact-form-wrapper">
          <h2 class="section-title">Napisz do nas</h2>
          <form class="minimal-form" onsubmit="event.preventDefault();">
            <div class="form-group">
              <input type="text" id="name" required placeholder=" " />
              <label for="name">Imię i nazwisko</label>
            </div>
            <div class="form-group">
              <input type="email" id="email" required placeholder=" " />
              <label for="email">Adres e-mail</label>
            </div>
            <div class="form-group">
              <textarea id="message" required placeholder=" " rows="4"></textarea>
              <label for="message">Twoja wiadomość</label>
            </div>
            <button type="submit" class="submit-btn">Wyślij wiadomość</button>
          </form>
          
          <div class="contact-direct">
            <p>Lub skontaktuj się bezpośrednio:</p>
            <a href="${t.phoneLink}" class="direct-link">${t.phone}</a>
            <a href="${t.emailLink}" class="direct-link">${t.email}</a>
          </div>
        </div>
      </div>
    </section>
  `},Q=()=>{const{footer:t}=x;return`
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">${t.copyright}</p>
        <div class="developer-credit">
          <p>Chcesz podobną stronę internetową? Napisz na: <a href="mailto:${t.developerEmail}">${t.developerEmail}</a></p>
        </div>
      </div>
    </footer>
  `},O=document.querySelector("#app");O&&(O.innerHTML=`
    ${C()}
    <main>
      ${U()}
      ${K()}
      ${G()}
    </main>
    ${Q()}
  `);new F({autoRaf:!0,smoothWheel:!0});V();
