var j=Object.defineProperty;var _=(t,e,i)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var r=(t,e,i)=>_(t,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();var T="1.3.23";function R(t,e,i){return Math.max(t,Math.min(e,i))}function A(t,e,i){return(1-i)*t+i*e}function D(t,e,i,o){return A(t,e,1-Math.exp(-i*o))}function Y(t,e){return(t%e+e)%e}var X=class{constructor(){r(this,"isRunning",!1);r(this,"value",0);r(this,"from",0);r(this,"to",0);r(this,"currentTime",0);r(this,"lerp");r(this,"duration");r(this,"easing");r(this,"onUpdate")}advance(t){var i;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const o=R(0,this.currentTime/this.duration,1);e=o>=1;const s=e?1:this.easing(o);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=D(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(i=this.onUpdate)==null||i.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i,duration:o,easing:s,onStart:a,onUpdate:c}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=o,this.easing=s,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=c}};function B(t,e){let i;return function(...o){clearTimeout(i),i=setTimeout(()=>{i=void 0,t.apply(this,o)},e)}}var F=class{constructor(t,e,{autoResize:i=!0,debounce:o=250}={}){r(this,"width",0);r(this,"height",0);r(this,"scrollHeight",0);r(this,"scrollWidth",0);r(this,"debouncedResize");r(this,"wrapperResizeObserver");r(this,"contentResizeObserver");r(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});r(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});r(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,i&&(this.debouncedResize=B(this.resize,o),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},H=class{constructor(){r(this,"events",{})}emit(t,...e){var o;const i=this.events[t]||[];for(let s=0,a=i.length;s<a;s++)(o=i[s])==null||o.call(i,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var i;this.events[t]=(i=this.events[t])==null?void 0:i.filter(o=>e!==o)}}off(t,e){var i;this.events[t]=(i=this.events[t])==null?void 0:i.filter(o=>e!==o)}destroy(){this.events={}}};const I=100/6,z={passive:!1};function O(t,e){return t===1?I:t===2?e:1}var q=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){r(this,"touchStart",{x:0,y:0});r(this,"lastDelta",{x:0,y:0});r(this,"window",{width:0,height:0});r(this,"emitter",new H);r(this,"onTouchStart",t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});r(this,"onTouchMove",t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,o=-(e-this.touchStart.x)*this.options.touchMultiplier,s=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:o,y:s},this.emitter.emit("scroll",{deltaX:o,deltaY:s,event:t})});r(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});r(this,"onWheel",t=>{let{deltaX:e,deltaY:i,deltaMode:o}=t;const s=O(o,this.window.width),a=O(o,this.window.height);e*=s,i*=a,e*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})});r(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,z),this.element.addEventListener("touchstart",this.onTouchStart,z),this.element.addEventListener("touchmove",this.onTouchMove,z),this.element.addEventListener("touchend",this.onTouchEnd,z)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,z),this.element.removeEventListener("touchstart",this.onTouchStart,z),this.element.removeEventListener("touchmove",this.onTouchMove,z),this.element.removeEventListener("touchend",this.onTouchEnd,z)}};const N=t=>Math.min(1,1.001-2**(-10*t));var C=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:i=t,smoothWheel:o=!0,syncTouch:s=!1,syncTouchLerp:a=.075,touchInertiaExponent:c=1.7,duration:u,easing:d,lerp:p=.1,infinite:g=!1,orientation:h="vertical",gestureOrientation:n=h==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:l=1,autoResize:f=!0,prevent:v,virtualScroll:w,overscroll:y=!0,autoRaf:S=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:W=!1,naiveDimensions:M=W,stopInertiaOnNavigate:P=!1}={}){r(this,"_isScrolling",!1);r(this,"_isStopped",!1);r(this,"_isLocked",!1);r(this,"_preventNextNativeScrollEvent",!1);r(this,"_resetVelocityTimeout",null);r(this,"_rafId",null);r(this,"isTouching");r(this,"time",0);r(this,"userData",{});r(this,"lastVelocity",0);r(this,"velocity",0);r(this,"direction",0);r(this,"options");r(this,"targetScroll");r(this,"animatedScroll");r(this,"animate",new X);r(this,"emitter",new H);r(this,"dimensions");r(this,"virtualScroll");r(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});r(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});r(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});r(this,"onClick",t=>{const e=t.composedPath().filter(o=>o instanceof HTMLAnchorElement&&o.href).map(o=>new URL(o.href)),i=new URL(window.location.href);if(this.options.anchors){const o=e.find(s=>i.host===s.host&&i.pathname===s.pathname&&s.hash);if(o){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=`#${o.hash.split("#")[1]}`;this.scrollTo(a,s);return}}if(this.options.stopInertiaOnNavigate&&e.some(o=>i.host===o.host&&i.pathname!==o.pathname)){this.reset();return}});r(this,"onPointerDown",t=>{t.button===1&&this.reset()});r(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:i,event:o}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:o}),o.ctrlKey||o.lenisStopPropagation)return;const s=o.type.includes("touch"),a=o.type.includes("wheel");this.isTouching=o.type==="touchstart"||o.type==="touchmove";const c=e===0&&i===0;if(this.options.syncTouch&&s&&o.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const u=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&e===0;if(c||u)return;let d=o.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const p=this.options.prevent,g=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical";if(d.find(l=>{var f,v,w,y,S;return l instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(l))||((f=l.hasAttribute)==null?void 0:f.call(l,"data-lenis-prevent"))||g==="vertical"&&((v=l.hasAttribute)==null?void 0:v.call(l,"data-lenis-prevent-vertical"))||g==="horizontal"&&((w=l.hasAttribute)==null?void 0:w.call(l,"data-lenis-prevent-horizontal"))||s&&((y=l.hasAttribute)==null?void 0:y.call(l,"data-lenis-prevent-touch"))||a&&((S=l.hasAttribute)==null?void 0:S.call(l,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(l,{deltaX:e,deltaY:i}))}))return;if(this.isStopped||this.isLocked){o.cancelable&&o.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),o.lenisStopPropagation=!0;return}let h=i;this.options.gestureOrientation==="both"?h=Math.abs(i)>Math.abs(e)?i:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&i>0||this.animatedScroll===this.limit&&i<0))&&(o.lenisStopPropagation=!0),o.cancelable&&o.preventDefault();const n=s&&this.options.syncTouch,m=s&&o.type==="touchend";m&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...n?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});r(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});r(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=T,window.lenis||(window.lenis={}),window.lenis.version=T,h==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),(!t||t===document.documentElement)&&(t=window),typeof u=="number"&&typeof d!="function"?d=N:typeof d=="function"&&typeof u!="number"&&(u=1),this.options={wrapper:t,content:e,eventsTarget:i,smoothWheel:o,syncTouch:s,syncTouchLerp:a,touchInertiaExponent:c,duration:u,easing:d,lerp:p,infinite:g,gestureOrientation:n,orientation:h,touchMultiplier:m,wheelMultiplier:l,autoResize:f,prevent:v,virtualScroll:w,overscroll:y,autoRaf:S,anchors:b,autoToggle:x,allowNestedScroll:L,naiveDimensions:M,stopInertiaOnNavigate:P},this.dimensions=new F(t,e,{autoResize:f}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new q(i,{touchMultiplier:m,wheelMultiplier:l}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:i=!1,lock:o=!1,programmatic:s=!0,lerp:a=s?this.options.lerp:void 0,duration:c=s?this.options.duration:void 0,easing:u=s?this.options.easing:void 0,onStart:d,onComplete:p,force:g=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!g)return;let n=t,m=e;if(typeof n=="string"&&["top","left","start","#"].includes(n))n=0;else if(typeof n=="string"&&["bottom","right","end"].includes(n))n=this.limit;else{let l=null;if(typeof n=="string"?(l=document.querySelector(n),l||(n==="#top"?n=0:console.warn("Lenis: Target not found",n))):n instanceof HTMLElement&&(n!=null&&n.nodeType)&&(l=n),l){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?b.left:b.top}const f=l.getBoundingClientRect(),v=getComputedStyle(l),w=this.isHorizontal?Number.parseFloat(v.scrollMarginLeft):Number.parseFloat(v.scrollMarginTop),y=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);n=(this.isHorizontal?f.left:f.top)+this.animatedScroll-(Number.isNaN(w)?0:w)-(Number.isNaN(S)?0:S)}}if(typeof n=="number"){if(n+=m,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;const l=n-this.animatedScroll;l>this.limit/2?n-=this.limit:l<-this.limit/2&&(n+=this.limit)}}else n=R(0,n,this.limit);if(n===this.targetScroll){d==null||d(this),p==null||p(this);return}if(this.userData=h??{},i){this.animatedScroll=this.targetScroll=n,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=n),typeof c=="number"&&typeof u!="function"?u=N:typeof u=="function"&&typeof c!="number"&&(c=1),this.animate.fromTo(this.animatedScroll,n,{duration:c,easing:u,lerp:a,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling="smooth",d==null||d(this)},onUpdate:(l,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=l-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=l,this.setScroll(this.scroll),s&&(this.targetScroll=l),f||this.emit(),f&&(this.reset(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:i}){const o=Date.now();t._lenis||(t._lenis={});const s=t._lenis;let a,c,u,d,p,g,h,n,m,l;if(o-(s.time??0)>2e3){s.time=Date.now();const L=window.getComputedStyle(t);if(s.computedStyle=L,a=["auto","overlay","scroll"].includes(L.overflowX),c=["auto","overlay","scroll"].includes(L.overflowY),p=["auto"].includes(L.overscrollBehaviorX),g=["auto"].includes(L.overscrollBehaviorY),s.hasOverflowX=a,s.hasOverflowY=c,!(a||c))return!1;h=t.scrollWidth,n=t.scrollHeight,m=t.clientWidth,l=t.clientHeight,u=h>m,d=n>l,s.isScrollableX=u,s.isScrollableY=d,s.scrollWidth=h,s.scrollHeight=n,s.clientWidth=m,s.clientHeight=l,s.hasOverscrollBehaviorX=p,s.hasOverscrollBehaviorY=g}else u=s.isScrollableX,d=s.isScrollableY,a=s.hasOverflowX,c=s.hasOverflowY,h=s.scrollWidth,n=s.scrollHeight,m=s.clientWidth,l=s.clientHeight,p=s.hasOverscrollBehaviorX,g=s.hasOverscrollBehaviorY;if(!(a&&u||c&&d))return!1;const f=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical";let v,w,y,S,b,x;if(f==="horizontal")v=Math.round(t.scrollLeft),w=h-m,y=e,S=a,b=u,x=p;else if(f==="vertical")v=Math.round(t.scrollTop),w=n-l,y=i,S=c,b=d,x=g;else return!1;return!x&&(v>=w||v<=0)?!0:(y>0?v<w:v>0)&&S&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?Y(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};const U=()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0)return;const e=document.createElement("div");e.classList.add("custom-cursor"),document.body.appendChild(e);let i=0,o=0,s=0,a=0;const c=()=>{const h=i-s,n=o-a;s+=h*.2,a+=n*.2,e.style.transform=`translate(calc(${s}px - 50%), calc(${a}px - 50%))`,requestAnimationFrame(c)};document.addEventListener("mousemove",h=>{i=h.clientX,o=h.clientY});const u=()=>e.classList.add("hover"),d=()=>e.classList.remove("hover"),p=()=>{document.querySelectorAll("a, button, input, textarea").forEach(n=>{n.addEventListener("mouseenter",u),n.addEventListener("mouseleave",d)})};p(),new MutationObserver(h=>{let n=!1;for(const m of h)if(m.addedNodes.length>0){n=!0;break}n&&p()}).observe(document.body,{childList:!0,subtree:!0}),requestAnimationFrame(c)},E="/bike_service_website/",k={contact:{phone:"+48 123 456 789",phoneLink:"tel:+48123456789",email:"kontakt@oborabikes.pl",emailLink:"mailto:kontakt@oborabikes.pl",location:"Warszawa, Polska"},navigation:[{name:"Strona Główna",href:"#home"},{name:"O Nas",href:"#about"},{name:"Usługi",href:"#services"},{name:"Kontakt",href:"#contact"}],hero:{title:"OBORA",subtitle:"SERWIS ROWEROWY",teaserPanels:[{label:"Poznaj nasze usługi",cta:"Usługi",href:"#services",imagePath:`${E}img/ft2.jpeg`},{label:"Kim jesteśmy",cta:"O Nas",href:"#about",imagePath:`${E}img/ft9.jpg`}]},about:{values:[{title:"Precyzja",text:"Każdy element sprawdzamy dwukrotnie. Nasze standardy nie znają kompromisów.",imagePath:`${E}img/ft10.jpg`},{title:"Doświadczenie",text:"Lata pracy z rowerami wszystkich marek i typów. Od szosowych po górskie.",imagePath:`${E}img/ft11.jpg`}]},services:[{title:"Przegląd i Diagnostyka",description:"Kompleksowa ocena stanu technicznego roweru. Sprawdzamy każdy układ i dostarczamy pełny raport.",imagePath:`${E}img/ft12.jpg`},{title:"Serwis Napędowy",description:"Czyszczenie, regulacja i wymiana komponentów napędu. Łańcuch, kaseta, przerzutki, korby.",imagePath:`${E}img/ft7.jpg`},{title:"Układy Hamulcowe",description:"Regulacja i serwis hamulców hydraulicznych oraz mechanicznych. Wymiana klocków i okładzin.",imagePath:`${E}img/ft5.jpg`},{title:"Tuning i Customizacja",description:"Personalizacja roweru według Twoich potrzeb. Dobór komponentów, pozycja jazdy, ustawienia.",imagePath:`${E}img/ft6.jpg`}],footer:{copyright:"© 2026 OBORA Serwis Rowerowy. Wszelkie prawa zastrzeżone.",developerEmail:"awalicki04@gmail.com"}},V=()=>{const{contact:t,navigation:e}=k,i=e.map(o=>`<a href="${o.href}" class="nav-link">${o.name}</a>`).join("");return`
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
          <a href="#home" class="logo">OBORA.</a>
          <div class="nav-links" id="nav-links">
            ${i}
          </div>
          <button class="hamburger" id="hamburger" aria-label="Otwórz menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </nav>
    </header>
  `},K=()=>{const t=document.getElementById("hamburger"),e=document.getElementById("nav-links");t==null||t.addEventListener("click",()=>{const i=(e==null?void 0:e.classList.toggle("nav-links--open"))??!1;t.setAttribute("aria-expanded",String(i)),t.classList.toggle("hamburger--open",i)}),e==null||e.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",()=>{e.classList.remove("nav-links--open"),t==null||t.classList.remove("hamburger--open"),t==null||t.setAttribute("aria-expanded","false")})})},G=()=>{const{hero:t}=k,e=t.teaserPanels.map(i=>`
      <a href="${i.href}" class="teaser-panel" style="background-image: url('${i.imagePath}')">
        <div class="teaser-overlay"></div>
        <div class="teaser-content">
          <span class="teaser-label">${i.label}</span>
          <span class="teaser-cta">${i.cta} →</span>
        </div>
      </a>
    `).join("");return`
    <section id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">${t.title}</h1>
        <h2 class="hero-subtitle">${t.subtitle}</h2>
      </div>
      <div class="hero-bg">
        <svg aria-hidden="true" viewBox="0 0 800 600" class="bike-svg" fill="none" stroke="#FF4D00" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="200" cy="400" r="130" />
          <circle cx="600" cy="400" r="130" />
          <line x1="200" y1="400" x2="350" y2="400" />
          <line x1="200" y1="400" x2="300" y2="200" />
          <line x1="300" y1="200" x2="350" y2="400" />
          <line x1="300" y1="200" x2="520" y2="200" />
          <line x1="520" y1="200" x2="350" y2="400" />
          <line x1="505" y1="162" x2="600" y2="400" />
          <path d="M 520 160 Q 590 160 540 210" />
          <path d="M 560 160 Q 610 160 570 210" />
          <line x1="300" y1="200" x2="280" y2="150" />
          <path d="M240 150 L 310 150 Q 320 150 320 160 L 250 160 Z" fill="#FF4D00" />
          <circle cx="350" cy="400" r="35" />
          <line x1="350" y1="400" x2="340" y2="450" />
          <line x1="330" y1="450" x2="350" y2="450" />
          <line x1="350" y1="400" x2="360" y2="350" />
          <line x1="350" y1="350" x2="370" y2="350" />
        </svg>
      </div>
    </section>

    <section class="teaser" aria-label="Odkryj więcej">
      ${e}
    </section>
  `},Q=()=>{const{about:t}=k;return`
    <section id="about" class="about">
      <div class="values-header">
        <h2 class="section-title">Nasze Wartości</h2>
      </div>
      <div class="values-grid">
        ${t.values.map(i=>`
    <div class="value-card" style="background-image: url('${i.imagePath}')">
      <div class="value-overlay"></div>
      <div class="value-content">
        <h3 class="value-title">${i.title}</h3>
        <p class="value-text">${i.text}</p>
      </div>
    </div>
  `).join("")}
      </div>
    </section>
  `},Z=()=>{const{services:t}=k;return`
    <section id="services" class="services">
      <div class="services-header">
        <h2 class="section-title">Nasze Usługi</h2>
        <p class="services-intro">Profesjonalny serwis rowerowy z pasją do każdego detalu.</p>
      </div>
      <div class="services-grid">
        ${t.map((i,o)=>`
    <article class="service-card" style="background-image: url('${i.imagePath}')" aria-label="${i.title}">
      <div class="service-overlay"></div>
      <div class="service-content">
        <span class="service-num">0${o+1}</span>
        <h3 class="service-title">${i.title}</h3>
        <p class="service-desc">${i.description}</p>
      </div>
    </article>
  `).join("")}
      </div>
    </section>
  `},J=()=>{const{contact:t}=k;return`
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
            title="Google Maps — Lokalizacja serwisu OBORA"
          ></iframe>
          <div class="map-overlay"></div>
        </div>

        <div class="contact-form-wrapper">
          <h2 class="section-title">Napisz do nas</h2>
          <form class="minimal-form" onsubmit="event.preventDefault();">
            <div class="form-group">
              <input type="text" id="contact-name" required placeholder=" " />
              <label for="contact-name">Imię i nazwisko</label>
            </div>
            <div class="form-group">
              <input type="email" id="contact-email" required placeholder=" " />
              <label for="contact-email">Adres e-mail</label>
            </div>
            <div class="form-group">
              <textarea id="contact-message" required placeholder=" " rows="4"></textarea>
              <label for="contact-message">Twoja wiadomość</label>
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
  `},tt=()=>{const{footer:t}=k;return`
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">${t.copyright}</p>
        <div class="developer-credit">
          <p>Chcesz podobną stronę internetową? Napisz na: <a href="mailto:${t.developerEmail}">${t.developerEmail}</a></p>
        </div>
      </div>
    </footer>
  `},$=document.querySelector("#app");$&&($.innerHTML=`
    ${V()}
    <main>
      ${G()}
      ${Q()}
      ${Z()}
      ${J()}
    </main>
    ${tt()}
  `,K());new C({autoRaf:!0,smoothWheel:!0});U();
