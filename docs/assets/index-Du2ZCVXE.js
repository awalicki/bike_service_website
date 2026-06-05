var W=Object.defineProperty;var A=(e,t,i)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var a=(e,t,i)=>A(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();var T="1.3.23";function P(e,t,i){return Math.max(e,Math.min(t,i))}function _(e,t,i){return(1-i)*e+i*t}function D(e,t,i,o){return _(e,t,1-Math.exp(-i*o))}function B(e,t){return(e%t+t)%t}var I=class{constructor(){a(this,"isRunning",!1);a(this,"value",0);a(this,"from",0);a(this,"to",0);a(this,"currentTime",0);a(this,"lerp");a(this,"duration");a(this,"easing");a(this,"onUpdate")}advance(e){var i;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;const o=P(0,this.currentTime/this.duration,1);t=o>=1;const s=t?1:this.easing(o);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=D(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(i=this.onUpdate)==null||i.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i,duration:o,easing:s,onStart:n,onUpdate:c}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=o,this.easing=s,this.currentTime=0,this.isRunning=!0,n==null||n(),this.onUpdate=c}};function C(e,t){let i;return function(...o){clearTimeout(i),i=setTimeout(()=>{i=void 0,e.apply(this,o)},t)}}var U=class{constructor(e,t,{autoResize:i=!0,debounce:o=250}={}){a(this,"width",0);a(this,"height",0);a(this,"scrollHeight",0);a(this,"scrollWidth",0);a(this,"debouncedResize");a(this,"wrapperResizeObserver");a(this,"contentResizeObserver");a(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});a(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});a(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=C(this.resize,o),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$=class{constructor(){a(this,"events",{})}emit(e,...t){var o;const i=this.events[e]||[];for(let s=0,n=i.length;s<n;s++)(o=i[s])==null||o.call(i,...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(o=>t!==o)}}off(e,t){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(o=>t!==o)}destroy(){this.events={}}};const Y=100/6,k={passive:!1};function O(e,t){return e===1?Y:e===2?t:1}var X=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){a(this,"touchStart",{x:0,y:0});a(this,"lastDelta",{x:0,y:0});a(this,"window",{width:0,height:0});a(this,"emitter",new $);a(this,"onTouchStart",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});a(this,"onTouchMove",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,o=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:o,y:s},this.emitter.emit("scroll",{deltaX:o,deltaY:s,event:e})});a(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});a(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:o}=e;const s=O(o,this.window.width),n=O(o,this.window.height);t*=s,i*=n,t*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});a(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,k),this.element.addEventListener("touchstart",this.onTouchStart,k),this.element.addEventListener("touchmove",this.onTouchMove,k),this.element.addEventListener("touchend",this.onTouchEnd,k)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,k),this.element.removeEventListener("touchstart",this.onTouchStart,k),this.element.removeEventListener("touchmove",this.onTouchMove,k),this.element.removeEventListener("touchend",this.onTouchEnd,k)}};const N=e=>Math.min(1,1.001-2**(-10*e));var F=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:i=e,smoothWheel:o=!0,syncTouch:s=!1,syncTouchLerp:n=.075,touchInertiaExponent:c=1.7,duration:u,easing:d,lerp:p=.1,infinite:y=!1,orientation:h="vertical",gestureOrientation:r=h==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:l=1,autoResize:v=!0,prevent:f,virtualScroll:w,overscroll:g=!0,autoRaf:z=!1,anchors:b=!1,autoToggle:L=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:M=R,stopInertiaOnNavigate:H=!1}={}){a(this,"_isScrolling",!1);a(this,"_isStopped",!1);a(this,"_isLocked",!1);a(this,"_preventNextNativeScrollEvent",!1);a(this,"_resetVelocityTimeout",null);a(this,"_rafId",null);a(this,"isTouching");a(this,"time",0);a(this,"userData",{});a(this,"lastVelocity",0);a(this,"velocity",0);a(this,"direction",0);a(this,"options");a(this,"targetScroll");a(this,"animatedScroll");a(this,"animate",new I);a(this,"emitter",new $);a(this,"dimensions");a(this,"virtualScroll");a(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});a(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});a(this,"onTransitionEnd",e=>{var t;(t=e.propertyName)!=null&&t.includes("overflow")&&e.target===this.rootElement&&this.checkOverflow()});a(this,"onClick",e=>{const t=e.composedPath().filter(o=>o instanceof HTMLAnchorElement&&o.href).map(o=>new URL(o.href)),i=new URL(window.location.href);if(this.options.anchors){const o=t.find(s=>i.host===s.host&&i.pathname===s.pathname&&s.hash);if(o){const s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,n=`#${o.hash.split("#")[1]}`;this.scrollTo(n,s);return}}if(this.options.stopInertiaOnNavigate&&t.some(o=>i.host===o.host&&i.pathname!==o.pathname)){this.reset();return}});a(this,"onPointerDown",e=>{e.button===1&&this.reset()});a(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;const{deltaX:t,deltaY:i,event:o}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:i,event:o}),o.ctrlKey||o.lenisStopPropagation)return;const s=o.type.includes("touch"),n=o.type.includes("wheel");this.isTouching=o.type==="touchstart"||o.type==="touchmove";const c=t===0&&i===0;if(this.options.syncTouch&&s&&o.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const u=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&t===0;if(c||u)return;let d=o.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const p=this.options.prevent,y=Math.abs(t)>=Math.abs(i)?"horizontal":"vertical";if(d.find(l=>{var v,f,w,g,z;return l instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(l))||((v=l.hasAttribute)==null?void 0:v.call(l,"data-lenis-prevent"))||y==="vertical"&&((f=l.hasAttribute)==null?void 0:f.call(l,"data-lenis-prevent-vertical"))||y==="horizontal"&&((w=l.hasAttribute)==null?void 0:w.call(l,"data-lenis-prevent-horizontal"))||s&&((g=l.hasAttribute)==null?void 0:g.call(l,"data-lenis-prevent-touch"))||n&&((z=l.hasAttribute)==null?void 0:z.call(l,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(l,{deltaX:t,deltaY:i}))}))return;if(this.isStopped||this.isLocked){o.cancelable&&o.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&n)){this.isScrolling="native",this.animate.stop(),o.lenisStopPropagation=!0;return}let h=i;this.options.gestureOrientation==="both"?h=Math.abs(i)>Math.abs(t)?i:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&i>0||this.animatedScroll===this.limit&&i<0))&&(o.lenisStopPropagation=!0),o.cancelable&&o.preventDefault();const r=s&&this.options.syncTouch,m=s&&o.type==="touchend";m&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...r?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});a(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});a(this,"raf",e=>{const t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=T,window.lenis||(window.lenis={}),window.lenis.version=T,h==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),(!e||e===document.documentElement)&&(e=window),typeof u=="number"&&typeof d!="function"?d=N:typeof d=="function"&&typeof u!="number"&&(u=1),this.options={wrapper:e,content:t,eventsTarget:i,smoothWheel:o,syncTouch:s,syncTouchLerp:n,touchInertiaExponent:c,duration:u,easing:d,lerp:p,infinite:y,gestureOrientation:r,orientation:h,touchMultiplier:m,wheelMultiplier:l,autoResize:v,prevent:f,virtualScroll:w,overscroll:g,autoRaf:z,anchors:b,autoToggle:L,allowNestedScroll:E,naiveDimensions:M,stopInertiaOnNavigate:H},this.dimensions=new U(e,t,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new X(i,{touchMultiplier:m,wheelMultiplier:l}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}get overflow(){const e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:i=!1,lock:o=!1,programmatic:s=!0,lerp:n=s?this.options.lerp:void 0,duration:c=s?this.options.duration:void 0,easing:u=s?this.options.easing:void 0,onStart:d,onComplete:p,force:y=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!y)return;let r=e,m=t;if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let l=null;if(typeof r=="string"?(l=document.querySelector(r),l||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(l=r),l){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?b.left:b.top}const v=l.getBoundingClientRect(),f=getComputedStyle(l),w=this.isHorizontal?Number.parseFloat(f.scrollMarginLeft):Number.parseFloat(f.scrollMarginTop),g=getComputedStyle(this.rootElement),z=this.isHorizontal?Number.parseFloat(g.scrollPaddingLeft):Number.parseFloat(g.scrollPaddingTop);r=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(w)?0:w)-(Number.isNaN(z)?0:z)}}if(typeof r=="number"){if(r+=m,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;const l=r-this.animatedScroll;l>this.limit/2?r-=this.limit:l<-this.limit/2&&(r+=this.limit)}}else r=P(0,r,this.limit);if(r===this.targetScroll){d==null||d(this),p==null||p(this);return}if(this.userData=h??{},i){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=r),typeof c=="number"&&typeof u!="function"?u=N:typeof u=="function"&&typeof c!="number"&&(c=1),this.animate.fromTo(this.animatedScroll,r,{duration:c,easing:u,lerp:n,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling="smooth",d==null||d(this)},onUpdate:(l,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=l-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=l,this.setScroll(this.scroll),s&&(this.targetScroll=l),v||this.emit(),v&&(this.reset(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:i}){const o=Date.now();e._lenis||(e._lenis={});const s=e._lenis;let n,c,u,d,p,y,h,r,m,l;if(o-(s.time??0)>2e3){s.time=Date.now();const E=window.getComputedStyle(e);if(s.computedStyle=E,n=["auto","overlay","scroll"].includes(E.overflowX),c=["auto","overlay","scroll"].includes(E.overflowY),p=["auto"].includes(E.overscrollBehaviorX),y=["auto"].includes(E.overscrollBehaviorY),s.hasOverflowX=n,s.hasOverflowY=c,!(n||c))return!1;h=e.scrollWidth,r=e.scrollHeight,m=e.clientWidth,l=e.clientHeight,u=h>m,d=r>l,s.isScrollableX=u,s.isScrollableY=d,s.scrollWidth=h,s.scrollHeight=r,s.clientWidth=m,s.clientHeight=l,s.hasOverscrollBehaviorX=p,s.hasOverscrollBehaviorY=y}else u=s.isScrollableX,d=s.isScrollableY,n=s.hasOverflowX,c=s.hasOverflowY,h=s.scrollWidth,r=s.scrollHeight,m=s.clientWidth,l=s.clientHeight,p=s.hasOverscrollBehaviorX,y=s.hasOverscrollBehaviorY;if(!(n&&u||c&&d))return!1;const v=Math.abs(t)>=Math.abs(i)?"horizontal":"vertical";let f,w,g,z,b,L;if(v==="horizontal")f=Math.round(e.scrollLeft),w=h-m,g=t,z=n,b=u,L=p;else if(v==="vertical")f=Math.round(e.scrollTop),w=r-l,g=i,z=c,b=d,L=y;else return!1;return!L&&(f>=w||f<=0)?!0:(g>0?f<w:f>0)&&z&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?B(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(const e of Array.from(this.rootElement.classList))(e==="lenis"||e.startsWith("lenis-"))&&this.rootElement.classList.remove(e)}};const q=()=>{if("ontouchstart"in window||navigator.maxTouchPoints>0)return;const t=document.createElement("div");t.classList.add("custom-cursor"),document.body.appendChild(t);let i=0,o=0,s=0,n=0;const c=()=>{const h=i-s,r=o-n;s+=h*.2,n+=r*.2,t.style.transform=`translate(calc(${s}px - 50%), calc(${n}px - 50%))`,requestAnimationFrame(c)};document.addEventListener("mousemove",h=>{i=h.clientX,o=h.clientY});const u=()=>t.classList.add("hover"),d=()=>t.classList.remove("hover"),p=()=>{document.querySelectorAll("a, button, input, textarea").forEach(r=>{r.addEventListener("mouseenter",u),r.addEventListener("mouseleave",d)})};p(),new MutationObserver(h=>{let r=!1;for(const m of h)if(m.addedNodes.length>0){r=!0;break}r&&p()}).observe(document.body,{childList:!0,subtree:!0}),requestAnimationFrame(c)},S="/",j={contact:{phone:"+48 664 474 610",phoneLink:"tel:+48664474610",email:"oborabikeservice@gmail.com",emailLink:"mailto:oborabikeservice@gmail.com",location:"Bielina 3, 97-225 Ujazd"},navigation:[{name:"Strona Główna",href:"#home"},{name:"O Nas",href:"#about"},{name:"Usługi",href:"#services"},{name:"Kontakt",href:"#contact"}],hero:{title:"OBORA",subtitle:"SERWIS ROWEROWY",teaserPanels:[{label:"Poznaj nasze usługi",cta:"Usługi",href:"#services",imagePath:`${S}img/ft2.jpeg`},{label:"Kim jesteśmy",cta:"O Nas",href:"#about",imagePath:`${S}img/ft9.jpg`}]},about:{values:[{title:"Precyzja",text:"Wiemy, że na trasie liczy się każdy detal. Zwracamy uwagę na odpowiedni moment dokręcenia śrub i likwidujemy nawet najmniejsze luzy. Nie wypuścimy sprzętu, dopóki wszystko nie będzie działać idealnie.",imagePath:`${S}img/ft10.jpg`},{title:"Doświadczenie",text:"Przez nasze stojaki serwisowe przeszły dziesiątki jednośladów. Niezależnie czy serwisujemy wyścigową szosę, enduro czy rower miejski – znamy ich bolączki i wiemy, jak je rozwiązać.",imagePath:`${S}img/ft11.jpg`}]},services:[{title:"Przegląd i Diagnostyka",description:"Bierzemy Twój rower pod lupę. Rzetelnie oceniamy stan techniczny, wyłapujemy zużyte części i sprawdzamy bezpieczeństwo konstrukcji, żeby nic nie zaskoczyło Cię na trasie.",imagePath:`${S}img/ft12.jpg`},{title:"Serwis Napędowy",description:"Cisza i płynność to podstawa. Precyzyjnie czyścimy napęd, dobieramy odpowiednie smary i regulujemy przerzutki tak, aby biegi wchodziły gładko i bez zająknięcia.",imagePath:`${S}img/ft7.jpg`},{title:"Układy Hamulcowe",description:"Zadbamy o to, żebyś zawsze mógł zatrzymać się w porę. Odpowietrzamy układy hydrauliczne, wymieniamy płyny i klocki oraz centrujemy tarcze. Hamulce mają działać w punkt.",imagePath:`${S}img/ft5.jpg`},{title:"Tuning i Customizacja",description:"Pomagamy wyciągnąć maksimum z Twojej maszyny. Składamy rowery na zamówienie, doradzamy przy upgrade'ach sprzętowych i dobieramy części pod Twój styl jazdy.",imagePath:`${S}img/ft6.jpg`}],footer:{copyright:"© 2026 OBORA Serwis Rowerowy. Wszelkie prawa zastrzeżone.",developerEmail:"awalicki04@gmail.com",address:"Bielina 3, 97-225 Ujazd"}},G=()=>{const{contact:e,navigation:t}=j,i=t.map(o=>`<a href="javascript:void(0)" data-scroll="${o.href.replace("#","")}" class="nav-link">${o.name}</a>`).join("");return`
    <header class="header">
      <div class="top-bar">
        <div class="top-bar-content">
          <a href="${e.phoneLink}">${e.phone}</a>
          <span class="separator">/</span>
          <a href="${e.emailLink}">${e.email}</a>
          <span class="separator">/</span>
          <span>${e.location}</span>
        </div>
      </div>
      <nav class="main-nav" aria-label="Główna nawigacja">
        <div class="nav-content">
          <a href="javascript:void(0)" data-scroll="home" class="logo">OBORA.</a>
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
  `},V=()=>{const e=document.getElementById("hamburger"),t=document.getElementById("nav-links");e==null||e.addEventListener("click",()=>{const i=(t==null?void 0:t.classList.toggle("nav-links--open"))??!1;e.setAttribute("aria-expanded",String(i)),e.classList.toggle("hamburger--open",i)}),t==null||t.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",()=>{t.classList.remove("nav-links--open"),e==null||e.classList.remove("hamburger--open"),e==null||e.setAttribute("aria-expanded","false")})})},Z=()=>{const{hero:e}=j,t=e.teaserPanels.map(i=>`
        <a href="javascript:void(0)" data-scroll="${i.href.replace("#","")}" class="teaser-panel" style="background-image: url('${i.imagePath}')">
          <div class="teaser-overlay"></div>
          <div class="teaser-content">
            <span class="teaser-label">${i.label}</span>
            <span class="teaser-cta">${i.cta} →</span>
          </div>
        </a>
      `).join("");return`
    <section id="home" class="hero">
      <div class="hero-content">
        <h1 class="hero-title">${e.title}</h1>
        <h2 class="hero-subtitle">${e.subtitle}</h2>
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
      ${t}
    </section>
  `},K=()=>{const{about:e}=j;return`
    <section id="about" class="about">
      <div class="values-header">
        <h2 class="section-title">Nasze Wartości</h2>
      </div>
      <div class="values-grid">
        ${e.values.map(i=>`
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
  `},Q=()=>{const{services:e}=j;return`
    <section id="services" class="services">
      <div class="services-header">
        <h2 class="section-title">Nasze Usługi</h2>
        <p class="services-intro">Twój rower w dobrych rękach. Naprawiamy, regulujemy i doradzamy, żebyś mógł po prostu cieszyć się jazdą.</p>
      </div>
      <div class="services-grid">
        ${e.map((i,o)=>`
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
  `},J=()=>{const{contact:e}=j;return`
    <section id="contact" class="contact">
      <div class="contact-container">
        <div class="contact-map-wrapper" id="contact-map-wrapper">
          <iframe
            class="contact-map-iframe"
            src="https://maps.google.com/maps?q=51.56843033546453,19.91328672594859&z=15&output=embed"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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

          <p class="form-rodo">
            Wysyłając wiadomość, przekazujesz nam swoje imię, adres e-mail i treść zapytania w celu udzielenia odpowiedzi (art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;f RODO). Dane przechowujemy przez 12&nbsp;miesięcy. Szczegóły w <button class="rodo-link" data-privacy="open">Polityce Prywatności</button>.
          </p>

          <div class="contact-direct">
            <p>Lub skontaktuj się bezpośrednio:</p>
            <a href="${e.phoneLink}" class="direct-link">${e.phone}</a>
            <a href="${e.emailLink}" class="direct-link">${e.email}</a>
          </div>
        </div>
      </div>
    </section>
  `},ee=()=>{const{footer:e,contact:t}=j;return`
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="footer-logo">OBORA.</span>
          <p class="footer-tagline">Serwis Rowerowy — Ujazd</p>
        </div>
        <div class="footer-contact-info">
          <a href="${t.phoneLink}" class="footer-info-link">${t.phone}</a>
          <a href="${t.emailLink}" class="footer-info-link">${t.email}</a>
          <span class="footer-info-link">${t.location}</span>
        </div>
      </div>

      <div class="footer-legal-bar">
        <div class="footer-legal-left">
          <p class="copyright">${e.copyright}</p>
          <p class="footer-company-data">
            ${e.address}
          </p>
        </div>
        <div class="footer-legal-links">
          <button class="footer-legal-link" data-privacy="open">Polityka Prywatności</button>
          <span class="footer-sep">·</span>
          <button class="footer-legal-link" data-privacy="open">Polityka Cookies</button>
        </div>
      </div>

      <div class="developer-credit">
        <p>Chcesz podobną stronę internetową? Napisz na: <a href="mailto:${e.developerEmail}">${e.developerEmail}</a></p>
      </div>
    </footer>
  `},te=()=>`
  <div class="cookie-banner" id="cookie-banner" role="dialog" aria-live="polite" aria-label="Informacja o plikach cookie">
    <div class="cookie-inner">
      <div class="cookie-text">
        <p class="cookie-title">Pliki cookie</p>
        <p class="cookie-desc">
          Używamy plików cookie wyłącznie gdy wyświetlasz mapę Google Maps.
          Nie prowadzimy śledzenia analitycznego.
          Więcej w <button class="cookie-policy-link" data-privacy="open">Polityce Prywatności</button>.
        </p>
      </div>
      <div class="cookie-actions">
        <button class="cookie-btn cookie-btn--reject" id="cookie-reject">Tylko niezbędne</button>
        <button class="cookie-btn cookie-btn--accept" id="cookie-accept">Akceptuję</button>
      </div>
    </div>
  </div>
`,ie=()=>{var i,o;if(localStorage.getItem("obora_cookie_consent"))return;const e=document.getElementById("cookie-banner");if(!e)return;setTimeout(()=>e.classList.add("cookie-banner--visible"),1400);const t=()=>{e.classList.remove("cookie-banner--visible"),setTimeout(()=>e.remove(),400)};(i=document.getElementById("cookie-accept"))==null||i.addEventListener("click",()=>{localStorage.setItem("obora_cookie_consent","accepted"),t()}),(o=document.getElementById("cookie-reject"))==null||o.addEventListener("click",()=>{localStorage.setItem("obora_cookie_consent","rejected"),t()})},se=`
  <h2>Polityka Prywatności</h2>
  <p class="policy-date">Ostatnia aktualizacja: czerwiec 2026</p>

  <h3>1. Administrator danych osobowych</h3>
  <p>Administratorem Twoich danych osobowych jest <strong>Arkadiusz Pytlewski</strong>, prowadzący działalność pod nazwą OBORA Serwis Rowerowy, adres: Bielina 3, 97-225 Ujazd, adres e-mail: <a href="mailto:oborabikeservice@gmail.com">oborabikeservice@gmail.com</a>, telefon: +48 664 474 610.</p>

  <h3>2. Jakie dane zbieramy i w jakim celu</h3>
  <h4>Formularz kontaktowy</h4>
  <p>Zbieramy: imię i nazwisko, adres e-mail, treść wiadomości. Celem jest odpowiedź na Twoje zapytanie. Podstawa prawna: art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora).</p>
  <h4>Google Maps</h4>
  <p>Na stronie kontaktowej osadzamy mapę Google Maps, która ładuje się automatycznie. Usługa ta może ustawiać własne pliki cookie oraz przetwarzać Twój adres&nbsp;IP. Administratorem tych danych jest Google LLC. Szczegóły: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</p>

  <h3>3. Jak długo przechowujemy dane</h3>
  <p>Dane z formularza kontaktowego przechowujemy przez okres niezbędny do obsługi zapytania, nie dłużej niż 12 miesięcy od ostatniego kontaktu.</p>

  <h3>4. Odbiorcy danych</h3>
  <p>Twoje dane mogą być przekazywane: dostawcy hostingu (GitHub Pages / Fastly), Google LLC (usługa Google Maps – siedziba w USA, transfer na podstawie Standardowych Klauzul Umownych).</p>

  <h3>5. Twoje prawa</h3>
  <p>Na podstawie RODO przysługują Ci prawa do:</p>
  <ul>
    <li>dostępu do swoich danych,</li>
    <li>sprostowania danych,</li>
    <li>usunięcia danych („prawo do bycia zapomnianym"),</li>
    <li>ograniczenia przetwarzania,</li>
    <li>przenoszenia danych,</li>
    <li>wniesienia sprzeciwu wobec przetwarzania,</li>
    <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO), ul. Stawki 2, 00-193 Warszawa.</li>
  </ul>
  <p>Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem: <a href="mailto:oborabikeservice@gmail.com">oborabikeservice@gmail.com</a>.</p>

  <h3>6. Pliki cookie</h3>
  <p>Strona samodzielnie hostuje wszystkie czcionki i zasoby. Na stronie kontaktowej osadzamy mapę Google Maps, która może ustawiać pliki cookie stron trzecich (Google LLC).</p>
  <p>Możesz zarządzać plikami cookie w ustawieniach swojej przeglądarki.</p>

  <h3>7. Zautomatyzowane podejmowanie decyzji</h3>
  <p>Nie stosujemy zautomatyzowanego podejmowania decyzji ani profilowania wobec użytkowników.</p>

  <h3>8. Zmiany polityki prywatności</h3>
  <p>Zastrzegamy sobie prawo do zmiany niniejszej polityki. Aktualna wersja zawsze dostępna jest na tej stronie.</p>
`,oe=()=>`
  <div class="privacy-modal" id="privacy-modal" role="dialog" aria-modal="true" aria-label="Polityka Prywatności">
    <div class="privacy-backdrop" id="privacy-backdrop"></div>
    <div class="privacy-content">
      <button class="privacy-close" id="privacy-close" aria-label="Zamknij politykę prywatności">✕</button>
      <div class="privacy-body">
        ${se}
      </div>
    </div>
  </div>
`,ae=()=>{const e=document.getElementById("privacy-modal"),t=document.getElementById("privacy-backdrop"),i=document.getElementById("privacy-close"),o=()=>e==null?void 0:e.classList.add("privacy-modal--open"),s=()=>e==null?void 0:e.classList.remove("privacy-modal--open");i==null||i.addEventListener("click",s),t==null||t.addEventListener("click",s),document.addEventListener("keydown",n=>{n.key==="Escape"&&s()}),document.addEventListener("click",n=>{n.target.closest('[data-privacy="open"]')&&(n.preventDefault(),o())})},x=document.querySelector("#app");x&&(x.innerHTML=`
    ${G()}
    <main>
      ${Z()}
      ${K()}
      ${Q()}
      ${J()}
    </main>
    ${ee()}
    ${oe()}
    ${te()}
  `,V(),ae(),ie());document.addEventListener("click",e=>{const t=e.target.closest("[data-scroll]");if(!t)return;e.preventDefault();const i=t.getAttribute("data-scroll");if(!i)return;const o=document.getElementById(i);if(o){const s=o.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:s,behavior:"smooth"})}});new F({autoRaf:!0,smoothWheel:!0});q();
