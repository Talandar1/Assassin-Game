(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const al="170",Lu=0,Vl=1,Iu=2,mh=1,gh=2,On=3,oi=0,He=1,Ke=2,Gn=0,es=1,qe=2,Wl=3,Xl=4,zu=5,vi=100,Du=101,Uu=102,Nu=103,Fu=104,Ou=200,Bu=201,ku=202,Hu=203,aa=204,la=205,Gu=206,Vu=207,Wu=208,Xu=209,qu=210,Yu=211,Zu=212,Ku=213,$u=214,ca=0,ha=1,ua=2,ls=3,da=4,fa=5,pa=6,ma=7,xh=0,Ju=1,ju=2,ii=0,_h=1,vh=2,Mh=3,ll=4,Qu=5,wh=6,yh=7,Sh=300,cs=301,hs=302,ga=303,xa=304,or=306,ri=1e3,wi=1001,_a=1002,en=1003,td=1004,no=1005,Sn=1006,pr=1007,yi=1008,Yn=1009,Th=1010,Eh=1011,Xs=1012,cl=1013,Ti=1014,Tn=1015,Vn=1016,hl=1017,ul=1018,us=1020,bh=35902,Ah=1021,Ch=1022,gn=1023,Rh=1024,Ph=1025,ns=1026,ds=1027,dl=1028,fl=1029,Lh=1030,pl=1031,ml=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,va=35840,Ma=35841,wa=35842,ya=35843,Sa=36196,Ta=37492,Ea=37496,ba=37808,Aa=37809,Ca=37810,Ra=37811,Pa=37812,La=37813,Ia=37814,za=37815,Da=37816,Ua=37817,Na=37818,Fa=37819,Oa=37820,Ba=37821,ko=36492,ka=36494,Ha=36495,Ih=36283,Ga=36284,Va=36285,Wa=36286,ed=3200,nd=3201,zh=0,id=1,kn="",Le="srgb",xs="srgb-linear",rr="linear",fe="srgb",Ri=7680,ql=519,sd=512,od=513,rd=514,Dh=515,ad=516,ld=517,cd=518,hd=519,Xa=35044,Yl="300 es",Hn=2e3,Xo=2001;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mr=Math.PI/180,qa=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function ud(i,t){return(i%t+t)%t}function gr(i,t,e){return(1-e)*i+e*t}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,o,r,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],w=s[1],v=s[4],x=s[7],T=s[2],P=s[5],A=s[8];return o[0]=r*_+a*w+l*T,o[3]=r*m+a*v+l*P,o[6]=r*p+a*x+l*A,o[1]=c*_+h*w+u*T,o[4]=c*m+h*v+u*P,o[7]=c*p+h*x+u*A,o[2]=d*_+f*w+g*T,o[5]=d*m+f*v+g*P,o[8]=d*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new Jt;function Uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){const i=qo("canvas");return i.style.display="block",i}const Zl={};function Fs(i){i in Zl||(Zl[i]=!0,console.warn(i))}function fd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function pd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function md(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?rr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kl=[.64,.33,.3,.6,.15,.06],$l=[.2126,.7152,.0722],Jl=[.3127,.329],jl=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[xs]:{primaries:Kl,whitePoint:Jl,transfer:rr,toXYZ:jl,fromXYZ:Ql,luminanceCoefficients:$l,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:Kl,whitePoint:Jl,transfer:fe,toXYZ:jl,fromXYZ:Ql,luminanceCoefficients:$l,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});let Pi;class gd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=qo("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Xn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xd=0;class Nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(_r(s[r].image)):o.push(_r(s[r]))}else o=_r(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;class Ge extends _s{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=wi,s=wi,o=Sn,r=yi,a=gn,l=Yn,c=Ge.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Wn(),this.name="",this.source=new Nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ri:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ri:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Sh;Ge.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(f+1)/2,T=(p+1)/2,P=(h+d)/4,A=(u+_)/4,R=(g+m)/4;return v>x&&v>T?v<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(v),s=P/n,o=A/n):x>T?x<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(x),n=P/s,o=R/s):T<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),n=A/o,s=R/o),this.set(n,s,o,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends _s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends vd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fh extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],f=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,w=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),P=Math.atan2(T,p*w);m=Math.sin(m*P)/T,a=Math.sin(a*P)/T}const x=a*w;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],d=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),d=l(n/2),f=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vr.copy(this).projectOnVector(t),this.sub(vr)}reflect(t){return this.sub(vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new z,tc=new vs;class bi{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,un):un.fromBufferAttribute(o,r),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),so.subVectors(this.max,Es),Li.subVectors(t.a,Es),Ii.subVectors(t.b,Es),zi.subVectors(t.c,Es),$n.subVectors(Ii,Li),Jn.subVectors(zi,Ii),ci.subVectors(Li,zi);let e=[0,-$n.z,$n.y,0,-Jn.z,Jn.y,0,-ci.z,ci.y,$n.z,0,-$n.x,Jn.z,0,-Jn.x,ci.z,0,-ci.x,-$n.y,$n.x,0,-Jn.y,Jn.x,0,-ci.y,ci.x,0];return!Mr(e,Li,Ii,zi,so)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,Li,Ii,zi,so))?!1:(oo.crossVectors($n,Jn),e=[oo.x,oo.y,oo.z],Mr(e,Li,Ii,zi,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const zn=[new z,new z,new z,new z,new z,new z,new z,new z],un=new z,io=new bi,Li=new z,Ii=new z,zi=new z,$n=new z,Jn=new z,ci=new z,Es=new z,so=new z,oo=new z,hi=new z;function Mr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){hi.fromArray(i,o);const a=s.x*Math.abs(hi.x)+s.y*Math.abs(hi.y)+s.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wd=new bi,bs=new z,wr=new z;class Ai{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(wr)),this.expandByPoint(bs.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new z,yr=new z,ro=new z,jn=new z,Sr=new z,ao=new z,Tr=new z;class gl{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yr.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(yr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ro),a=jn.dot(this.direction),l=-jn.dot(ro),c=jn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yr).addScaledVector(ro,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,o){Sr.subVectors(e,t),ao.subVectors(n,t),Tr.crossVectors(Sr,ao);let r=this.direction.dot(Tr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;jn.subVectors(this.origin,t);const l=a*this.direction.dot(ao.crossVectors(jn,ao));if(l<0)return null;const c=a*this.direction.dot(Sr.cross(jn));if(c<0||l+c>r)return null;const h=-a*jn.dot(Tr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,o,r,a,l,c,h,u,d,f,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,o,r,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),o=1/Di.setFromMatrixColumn(t,1).length(),r=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-r*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=_-d*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,f=r*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,f=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*l,f=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=r*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yd,t,Sd)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Qn.crossVectors(n,je),Qn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Qn.crossVectors(n,je)),Qn.normalize(),lo.crossVectors(je,Qn),s[0]=Qn.x,s[4]=lo.x,s[8]=je.x,s[1]=Qn.y,s[5]=lo.y,s[9]=je.y,s[2]=Qn.z,s[6]=lo.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],v=n[7],x=n[11],T=n[15],P=s[0],A=s[4],R=s[8],y=s[12],M=s[1],I=s[5],N=s[9],U=s[13],F=s[2],G=s[6],H=s[10],J=s[14],q=s[3],pt=s[7],gt=s[11],it=s[15];return o[0]=r*P+a*M+l*F+c*q,o[4]=r*A+a*I+l*G+c*pt,o[8]=r*R+a*N+l*H+c*gt,o[12]=r*y+a*U+l*J+c*it,o[1]=h*P+u*M+d*F+f*q,o[5]=h*A+u*I+d*G+f*pt,o[9]=h*R+u*N+d*H+f*gt,o[13]=h*y+u*U+d*J+f*it,o[2]=g*P+_*M+m*F+p*q,o[6]=g*A+_*I+m*G+p*pt,o[10]=g*R+_*N+m*H+p*gt,o[14]=g*y+_*U+m*J+p*it,o[3]=w*P+v*M+x*F+T*q,o[7]=w*A+v*I+x*G+T*pt,o[11]=w*R+v*N+x*H+T*gt,o[15]=w*y+v*U+x*J+T*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+o*l*u-s*c*u-o*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+o*r*d-s*r*f+s*c*h-o*l*h)+m*(+e*c*u-e*a*f-o*r*u+n*r*f+o*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*r*u-n*r*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+r*m*f+h*l*p-r*d*p,x=h*_*c-g*u*c+g*a*f-r*_*f-h*a*p+r*u*p,T=g*u*l-h*_*l-g*a*d+r*_*d+h*a*m-r*u*m,P=e*w+n*v+s*x+o*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return t[0]=w*A,t[1]=(_*d*o-u*m*o-_*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(a*m*o-_*l*o+_*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(u*l*o-a*d*o-u*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=v*A,t[5]=(h*m*o-g*d*o+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*p-e*l*p)*A,t[7]=(r*d*o-h*l*o+h*s*c-e*d*c-r*s*f+e*l*f)*A,t[8]=x*A,t[9]=(g*u*o-h*_*o-g*n*f+e*_*f+h*n*p-e*u*p)*A,t[10]=(r*_*o-g*a*o+g*n*c-e*_*c-r*n*p+e*a*p)*A,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*f-e*a*f)*A,t[12]=T*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-r*_*s-g*n*l+e*_*l+r*n*m-e*a*m)*A,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,g=o*u,_=r*h,m=r*u,p=a*u,w=l*c,v=l*h,x=l*u,T=n.x,P=n.y,A=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+x)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(f-x)*P,s[5]=(1-(d+p))*P,s[6]=(m+w)*P,s[7]=0,s[8]=(g+v)*A,s[9]=(m-w)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Di.set(s[0],s[1],s[2]).length();const r=Di.set(s[4],s[5],s[6]).length(),a=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const c=1/o,h=1/r,u=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,e.setFromRotationMatrix(dn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Hn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Hn)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Xo)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Hn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*c,f=(n+s)*h;let g,_;if(a===Hn)g=(r+o)*u,_=-2*u;else if(a===Xo)g=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new z,dn=new ue,yd=new z(0,0,0),Sd=new z(1,1,1),Qn=new z,lo=new z,je=new z,ec=new ue,nc=new vs;class Rn{constructor(t=0,e=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nc.setFromEuler(this),this.setFromQuaternion(nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Td=0;const ic=new z,Ui=new vs,Un=new ue,co=new z,As=new z,Ed=new z,bd=new vs,sc=new z(1,0,0),oc=new z(0,1,0),rc=new z(0,0,1),ac={type:"added"},Ad={type:"removed"},Ni={type:"childadded",child:null},Er={type:"childremoved",child:null};class be extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new z,e=new Rn,n=new vs,s=new z(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Jt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(sc,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return ic.copy(t).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sc,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?co.copy(t):co.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(As,co,this.up):Un.lookAt(co,As,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Un),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ac),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ad),Er.child=t,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ac),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,Ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new z(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new z,Nn=new z,br=new z,Fn=new z,Fi=new z,Oi=new z,lc=new z,Ar=new z,Cr=new z,Rr=new z,Pr=new me,Lr=new me,Ir=new me;class ln{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){fn.subVectors(s,e),Nn.subVectors(n,e),br.subVectors(t,e);const r=fn.dot(fn),a=fn.dot(Nn),l=fn.dot(br),c=Nn.dot(Nn),h=Nn.dot(br),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Fn.x),l.addScaledVector(r,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Pr.setScalar(0),Lr.setScalar(0),Ir.setScalar(0),Pr.fromBufferAttribute(t,e),Lr.fromBufferAttribute(t,n),Ir.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Pr,o.x),r.addScaledVector(Lr,o.y),r.addScaledVector(Ir,o.z),r}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Nn.subVectors(t,e),fn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),fn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Fi.subVectors(s,n),Oi.subVectors(o,n),Ar.subVectors(t,n);const l=Fi.dot(Ar),c=Oi.dot(Ar);if(l<=0&&c<=0)return e.copy(n);Cr.subVectors(t,s);const h=Fi.dot(Cr),u=Oi.dot(Cr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Fi,r);Rr.subVectors(t,o);const f=Fi.dot(Rr),g=Oi.dot(Rr);if(g>=0&&f<=g)return e.copy(o);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Oi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return lc.subVectors(o,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(lc,a);const p=1/(m+_+d);return r=_*p,a=d*p,e.copy(n).addScaledVector(Fi,r).addScaledVector(Oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ho={h:0,s:0,l:0};function zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=ud(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=zr(r,o,t+1/3),this.g=zr(r,o,t),this.b=zr(r,o,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return oe.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ne(Be.r*255,0,255))*65536+Math.round(Ne(Be.g*255,0,255))*256+Math.round(Ne(Be.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,o=Be.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Le){oe.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(ho);const n=gr(ti.h,ho.h,e),s=gr(ti.s,ho.s,e),o=gr(ti.l,ho.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Wt;Wt.NAMES=Bh;let Cd=0;class ai extends _s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Wn(),this.name="",this.blending=es,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=la,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==la&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Se extends ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new z,uo=new at;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),o=pe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}}class kh extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hh extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rd=0;const sn=new ue,Dr=new be,Bi=new z,Qe=new bi,Cs=new bi,De=new z;class he extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uh(t)?Hh:kh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Dr.lookAt(t),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Qe.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(Qe.min,Cs.min),Qe.expandByPoint(De),De.addVectors(Qe.max,Cs.max),Qe.expandByPoint(De)):(Qe.expandByPoint(Cs.min),Qe.expandByPoint(Cs.max))}Qe.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)De.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(De));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(Bi.fromBufferAttribute(t,c),De.add(Bi)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new z,l[R]=new z;const c=new z,h=new z,u=new z,d=new at,f=new at,g=new at,_=new z,m=new z;function p(R,y,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(o,R),f.fromBufferAttribute(o,y),g.fromBufferAttribute(o,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[R].add(_),a[y].add(_),a[M].add(_),l[R].add(m),l[y].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,y=w.length;R<y;++R){const M=w[R],I=M.start,N=M.count;for(let U=I,F=I+N;U<F;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new z,x=new z,T=new z,P=new z;function A(R){T.fromBufferAttribute(s,R),P.copy(T);const y=a[R];v.copy(y),v.sub(T.multiplyScalar(T.dot(y))).normalize(),x.crossVectors(P,y);const I=x.dot(l[R])<0?-1:1;r.setXYZW(R,v.x,v.y,v.z,I)}for(let R=0,y=w.length;R<y;++R){const M=w[R],I=M.start,N=M.count;for(let U=I,F=I+N;U<F;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new z,o=new z,r=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Te(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new ue,ui=new gl,fo=new Ai,hc=new z,po=new z,mo=new z,go=new z,Ur=new z,xo=new z,uc=new z,_o=new z;class b extends be{constructor(t=new he,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){xo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Ur.fromBufferAttribute(u,t),r?xo.addScaledVector(Ur,h):xo.addScaledVector(Ur.sub(e),h))}e.add(xo)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(o),ui.copy(t.ray).recast(t.near),!(fo.containsPoint(ui.origin)===!1&&(ui.intersectSphere(fo,hc)===null||ui.origin.distanceToSquared(hc)>(t.far-t.near)**2))&&(cc.copy(o).invert(),ui.copy(t.ray).applyMatrix4(cc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,T=v;x<T;x+=3){const P=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);s=vo(this,p,t,n,c,h,u,P,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);s=vo(this,r,t,n,c,h,u,w,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],w=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,T=v;x<T;x+=3){const P=x,A=x+1,R=x+2;s=vo(this,p,t,n,c,h,u,P,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,v=m+1,x=m+2;s=vo(this,r,t,n,c,h,u,w,v,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Pd(i,t,e,n,s,o,r,a){let l;if(t.side===He?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===oi,a),l===null)return null;_o.copy(a),_o.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(_o);return c<e.near||c>e.far?null:{distance:c,point:_o.clone(),object:i}}function vo(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,po),i.getVertexPosition(l,mo),i.getVertexPosition(c,go);const h=Pd(i,t,e,n,po,mo,go,uc);if(h){const u=new z;ln.getBarycoord(uc,po,mo,go,u),s&&(h.uv=ln.getInterpolatedAttribute(s,a,l,c,u,new at)),o&&(h.uv1=ln.getInterpolatedAttribute(o,a,l,c,u,new at)),r&&(h.normal=ln.getInterpolatedAttribute(r,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};ln.getNormal(po,mo,go,d.normal),h.face=d,h.barycoord=u}return h}class V extends he{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,m,p,w,v,x,T,P,A,R,y){const M=x/A,I=T/R,N=x/2,U=T/2,F=P/2,G=A+1,H=R+1;let J=0,q=0;const pt=new z;for(let gt=0;gt<H;gt++){const it=gt*I-U;for(let xt=0;xt<G;xt++){const kt=xt*M-N;pt[_]=kt*w,pt[m]=it*v,pt[p]=F,c.push(pt.x,pt.y,pt.z),pt[_]=0,pt[m]=0,pt[p]=P>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(xt/A),u.push(1-gt/R),J+=1}}for(let gt=0;gt<R;gt++)for(let it=0;it<A;it++){const xt=d+it+G*gt,kt=d+it+G*(gt+1),$=d+(it+1)+G*(gt+1),rt=d+(it+1)+G*gt;l.push(xt,kt,rt),l.push(kt,$,rt),q+=6}a.addGroup(f,q,y),f+=q,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new V(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=fs(i[e]);for(const s in n)t[s]=n[s]}return t}function Ld(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const qs={clone:fs,merge:Xe};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vh extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new z,dc=new at,fc=new at;class tn extends Vh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,dc,fc),e.subVectors(fc,dc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(mr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Hi=1;class Dd extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(ki,Hi,t,e);s.layers=this.layers,this.add(s);const o=new tn(ki,Hi,t,e);o.layers=this.layers,this.add(o);const r=new tn(ki,Hi,t,e);r.layers=this.layers,this.add(r);const a=new tn(ki,Hi,t,e);a.layers=this.layers,this.add(a);const l=new tn(ki,Hi,t,e);l.layers=this.layers,this.add(l);const c=new tn(ki,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wh extends Ge{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ud extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new V(5,5,5),o=new ke({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Gn});o.uniforms.tEquirect.value=e;const r=new b(s,o),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Sn),new Dd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Nr=new z,Nd=new z,Fd=new Jt;class xi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Nr.subVectors(n,e).cross(Nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fd.getNormalMatrix(t),s=this.coplanarPoint(Nr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ai,Mo=new z;class xl{constructor(t=new xi,e=new xi,n=new xi,s=new xi,o=new xi,r=new xi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],w=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-o,d-c,m-f,x-p).normalize(),n[1].setComponents(l+o,d+c,m+f,x+p).normalize(),n[2].setComponents(l+r,d+h,m+g,x+w).normalize(),n[3].setComponents(l-r,d-h,m-g,x-w).normalize(),n[4].setComponents(l-a,d-u,m-_,x-v).normalize(),e===Hn)n[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(e===Xo)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Mo.x=s.normal.x>0?t.max.x:t.min.x,Mo.y=s.normal.y>0?t.max.y:t.min.y,Mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xh(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Od(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class rn extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*d-r;for(let v=0;v<c;v++){const x=v*u-o;g.push(x,-w,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const v=w+c*p,x=w+c*(p+1),T=w+1+c*(p+1),P=w+1+c*p;f.push(v,x,P),f.push(x,T,P)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,If=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Df=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ff=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Of=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Bd,alphahash_pars_fragment:kd,alphamap_fragment:Hd,alphamap_pars_fragment:Gd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:Zd,begin_vertex:Kd,beginnormal_vertex:$d,bsdfs:Jd,iridescence_fragment:jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:tf,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:nf,clipping_planes_vertex:sf,color_fragment:of,color_pars_fragment:rf,color_pars_vertex:af,color_vertex:lf,common:cf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:uf,displacementmap_pars_vertex:df,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,colorspace_fragment:gf,colorspace_pars_fragment:xf,envmap_fragment:_f,envmap_common_pars_fragment:vf,envmap_pars_fragment:Mf,envmap_pars_vertex:wf,envmap_physical_pars_fragment:If,envmap_vertex:yf,fog_vertex:Sf,fog_pars_vertex:Tf,fog_fragment:Ef,fog_pars_fragment:bf,gradientmap_pars_fragment:Af,lightmap_pars_fragment:Cf,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Lf,lights_toon_fragment:zf,lights_toon_pars_fragment:Df,lights_phong_fragment:Uf,lights_phong_pars_fragment:Nf,lights_physical_fragment:Ff,lights_physical_pars_fragment:Of,lights_fragment_begin:Bf,lights_fragment_maps:kf,lights_fragment_end:Hf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:Zf,map_particle_pars_fragment:Kf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:Jf,morphinstance_vertex:jf,morphcolor_vertex:Qf,morphnormal_vertex:tp,morphtarget_pars_vertex:ep,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:sp,normal_pars_fragment:op,normal_pars_vertex:rp,normal_vertex:ap,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:up,iridescence_pars_fragment:dp,opaque_fragment:fp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:gp,dithering_fragment:xp,dithering_pars_fragment:_p,roughnessmap_fragment:vp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:wp,shadowmap_pars_vertex:yp,shadowmap_vertex:Sp,shadowmask_pars_fragment:Tp,skinbase_vertex:Ep,skinning_pars_vertex:bp,skinning_vertex:Ap,skinnormal_vertex:Cp,specularmap_fragment:Rp,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Ip,transmission_fragment:zp,transmission_pars_fragment:Dp,uv_pars_fragment:Up,uv_pars_vertex:Np,uv_vertex:Fp,worldpos_vertex:Op,background_vert:Bp,background_frag:kp,backgroundCube_vert:Hp,backgroundCube_frag:Gp,cube_vert:Vp,cube_frag:Wp,depth_vert:Xp,depth_frag:qp,distanceRGBA_vert:Yp,distanceRGBA_frag:Zp,equirect_vert:Kp,equirect_frag:$p,linedashed_vert:Jp,linedashed_frag:jp,meshbasic_vert:Qp,meshbasic_frag:t0,meshlambert_vert:e0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:o0,meshnormal_frag:r0,meshphong_vert:a0,meshphong_frag:l0,meshphysical_vert:c0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:d0,points_vert:f0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:x0,sprite_frag:_0},vt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},wn={basic:{uniforms:Xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Xe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Xe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Xe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Xe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Xe([vt.points,vt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Xe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Xe([vt.common,vt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Xe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Xe([vt.sprite,vt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Xe([vt.common,vt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Xe([vt.lights,vt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};wn.physical={uniforms:Xe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const wo={r:0,b:0,g:0},fi=new Rn,v0=new ue;function M0(i,t,e,n,s,o,r){const a=new Wt(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let v=w.isScene===!0?w.background:null;return v&&v.isTexture&&(v=(w.backgroundBlurriness>0?e:t).get(v)),v}function _(w){let v=!1;const x=g(w);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===or)?(h===void 0&&(h=new b(new V(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:fs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fi.copy(v.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(fi)),h.material.toneMapped=oe.getTransfer(x.colorSpace)!==fe,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new b(new rn(2,2),new ke({name:"BackgroundMaterial",uniforms:fs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=oe.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,v){w.getRGB(wo,Gh(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,v,r)}return{getClearColor:function(){return a},setClearColor:function(w,v=1){a.set(w),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:_,addToRenderList:m}}function w0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(M,I,N,U,F){let G=!1;const H=u(U,N,I);o!==H&&(o=H,c(o.object)),G=f(M,U,N,F),G&&g(M,U,N,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,x(M,I,N,U),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,N){const U=N.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let G=F[I.id];G===void 0&&(G={},F[I.id]=G);let H=G[U];return H===void 0&&(H=d(l()),G[U]=H),H}function d(M){const I=[],N=[],U=[];for(let F=0;F<e;F++)I[F]=0,N[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,I,N,U){const F=o.attributes,G=I.attributes;let H=0;const J=N.getAttributes();for(const q in J)if(J[q].location>=0){const gt=F[q];let it=G[q];if(it===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),gt===void 0||gt.attribute!==it||it&&gt.data!==it.data)return!0;H++}return o.attributesNum!==H||o.index!==U}function g(M,I,N,U){const F={},G=I.attributes;let H=0;const J=N.getAttributes();for(const q in J)if(J[q].location>=0){let gt=G[q];gt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor));const it={};it.attribute=gt,gt&&gt.data&&(it.data=gt.data),F[q]=it,H++}o.attributes=F,o.attributesNum=H,o.index=U}function _(){const M=o.newAttributes;for(let I=0,N=M.length;I<N;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const N=o.newAttributes,U=o.enabledAttributes,F=o.attributeDivisors;N[M]=1,U[M]===0&&(i.enableVertexAttribArray(M),U[M]=1),F[M]!==I&&(i.vertexAttribDivisor(M,I),F[M]=I)}function w(){const M=o.newAttributes,I=o.enabledAttributes;for(let N=0,U=I.length;N<U;N++)I[N]!==M[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function v(M,I,N,U,F,G,H){H===!0?i.vertexAttribIPointer(M,I,N,F,G):i.vertexAttribPointer(M,I,N,U,F,G)}function x(M,I,N,U){_();const F=U.attributes,G=N.getAttributes(),H=I.defaultAttributeValues;for(const J in G){const q=G[J];if(q.location>=0){let pt=F[J];if(pt===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),pt!==void 0){const gt=pt.normalized,it=pt.itemSize,xt=t.get(pt);if(xt===void 0)continue;const kt=xt.buffer,$=xt.type,rt=xt.bytesPerElement,St=$===i.INT||$===i.UNSIGNED_INT||pt.gpuType===cl;if(pt.isInterleavedBufferAttribute){const ht=pt.data,Ft=ht.stride,Gt=pt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ot=0;Ot<q.locationSize;Ot++)p(q.location+Ot,ht.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ot=0;Ot<q.locationSize;Ot++)m(q.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Ot=0;Ot<q.locationSize;Ot++)v(q.location+Ot,it/q.locationSize,$,gt,Ft*rt,(Gt+it/q.locationSize*Ot)*rt,St)}else{if(pt.isInstancedBufferAttribute){for(let ht=0;ht<q.locationSize;ht++)p(q.location+ht,pt.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ht=0;ht<q.locationSize;ht++)m(q.location+ht);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let ht=0;ht<q.locationSize;ht++)v(q.location+ht,it/q.locationSize,$,gt,it*rt,it/q.locationSize*ht*rt,St)}}else if(H!==void 0){const gt=H[J];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(q.location,gt);break;case 3:i.vertexAttrib3fv(q.location,gt);break;case 4:i.vertexAttrib4fv(q.location,gt);break;default:i.vertexAttrib1fv(q.location,gt)}}}}w()}function T(){R();for(const M in n){const I=n[M];for(const N in I){const U=I[N];for(const F in U)h(U[F].object),delete U[F];delete I[N]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const N in I){const U=I[N];for(const F in U)h(U[F].object),delete U[F];delete I[N]}delete n[M.id]}function A(M){for(const I in n){const N=n[I];if(N[M.id]===void 0)continue;const U=N[M.id];for(const F in U)h(U[F].object),delete U[F];delete N[M.id]}}function R(){y(),r=!0,o!==s&&(o=s,c(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function y0(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function S0(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:P}}function T0(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new xi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{const w=o?0:n,v=w*4;let x=p.clippingState||null;l.value=x,x=h(g,d,v,f);for(let T=0;T!==v;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)r.copy(u[v]).applyMatrix4(w,a),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function E0(i){let t=new WeakMap;function e(r,a){return a===ga?r.mapping=cs:a===xa&&(r.mapping=hs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ga||a===xa)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ud(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class _l extends Vh{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,pc=[.125,.215,.35,.446,.526,.582],Mi=20,Fr=new _l,mc=new Wt;let Or=null,Br=0,kr=0,Hr=!1;const _i=(1+Math.sqrt(5))/2,Gi=1/_i,gc=[new z(-_i,Gi,0),new z(_i,Gi,0),new z(-Gi,0,_i),new z(Gi,0,_i),new z(0,_i,-Gi),new z(0,_i,Gi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Or=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,Br,kr),this._renderer.xr.enabled=Hr,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),Br=this._renderer.getActiveCubeFace(),kr=this._renderer.getActiveMipmapLevel(),Hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Vn,format:gn,colorSpace:xs,depthBuffer:!1},s=xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b0(o)),this._blurMaterial=A0(o,t,e)}return s}_compileMaterial(t){const e=new b(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,n,s){const a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mc),h.toneMapping=ii,h.autoClear=!1;const f=new Se({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new b(new V,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(mc),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):w===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;yo(s,w*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cs||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new b(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;yo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=gc[(s-o-1)%gc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new b(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),_=o/g,m=isFinite(o)?1+Math.floor(h*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let w=0;for(let A=0;A<Mi;++A){const R=A/_,y=Math.exp(-R*R/2);p.push(y),A===0?w+=y:A<m&&(w+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[s],T=3*x*(s>v-Ji?s-v+Ji:0),P=4*(this._cubeSize-x);yo(e,T,P,3*x,2*x),l.setRenderTarget(e),l.render(u,Fr)}}function b0(i){const t=[],e=[],n=[];let s=i;const o=i-Ji+1+pc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Ji?l=pc[r-i+Ji-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let P=0;P<f;P++){const A=P%3*2/3-1,R=P>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];w.set(y,_*g*P),v.set(d,m*g*P);const M=[P,P,P,P,P,P];x.set(M,p*g*P)}const T=new he;T.setAttribute("position",new Te(w,_)),T.setAttribute("uv",new Te(v,m)),T.setAttribute("faceIndex",new Te(x,p)),t.push(T),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xc(i,t,e){const n=new _n(i,t,e);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function A0(i,t,e){const n=new Float32Array(Mi),s=new z(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function _c(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vc(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ga||l===xa,h=l===cs||l===hs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ya(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ya(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function R0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function P0(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let v=0,x=w.length;v<x;v+=3){const T=w[v+0],P=w[v+1],A=w[v+2];d.push(T,P,P,A,A,T)}}else if(g!==void 0){const w=g.array;_=g.version;for(let v=0,x=w.length/3-1;v<x;v+=3){const T=v+0,P=v+1,A=v+2;d.push(T,P,P,A,A,T)}}else return;const m=new(Uh(d)?Hh:kh)(d,1);m.version=_;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function L0(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,d*r,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function I0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,t,e){const n=new WeakMap,s=new me;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let T=a.attributes.position.count*x,P=1;T>t.maxTextureSize&&(P=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*P*4*u),R=new Fh(A,T,P,u);R.type=Tn,R.needsUpdate=!0;const y=x*4;for(let I=0;I<u;I++){const N=p[I],U=w[I],F=v[I],G=T*P*4*I;for(let H=0;H<N.count;H++){const J=H*y;g===!0&&(s.fromBufferAttribute(N,H),A[G+J+0]=s.x,A[G+J+1]=s.y,A[G+J+2]=s.z,A[G+J+3]=0),_===!0&&(s.fromBufferAttribute(U,H),A[G+J+4]=s.x,A[G+J+5]=s.y,A[G+J+6]=s.z,A[G+J+7]=0),m===!0&&(s.fromBufferAttribute(F,H),A[G+J+8]=s.x,A[G+J+9]=s.y,A[G+J+10]=s.z,A[G+J+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new at(T,P)},n.set(a,d),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function D0(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class qh extends Ge{constructor(t,e,n,s,o,r,a,l,c,h=ns){if(h!==ns&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ti),n===void 0&&h===ds&&(n=us),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yh=new Ge,Mc=new qh(1,1),Zh=new Fh,Kh=new Md,$h=new Wh,wc=[],yc=[],Sc=new Float32Array(16),Tc=new Float32Array(9),Ec=new Float32Array(4);function Ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=wc[s];if(o===void 0&&(o=new Float32Array(s),wc[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ar(i,t){let e=yc[t];e===void 0&&(e=new Int32Array(t),yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function U0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function B0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Ie(e,n))return;Ec.set(n),i.uniformMatrix2fv(this.addr,!1,Ec),ze(e,n)}}function k0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Ie(e,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),ze(e,n)}}function H0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Ie(e,n))return;Sc.set(n),i.uniformMatrix4fv(this.addr,!1,Sc),ze(e,n)}}function G0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function $0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=Dh,o=Mc):o=Yh,e.setTexture2D(t||o,s)}function J0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kh,s)}function j0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$h,s)}function Q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zh,s)}function tm(i){switch(i){case 5126:return U0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return k0;case 35676:return H0;case 5124:case 35670:return G0;case 35667:case 35671:return V0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return Z0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return Q0}}function em(i,t){i.uniform1fv(this.addr,t)}function nm(i,t){const e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function im(i,t){const e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function sm(i,t){const e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function om(i,t){const e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rm(i,t){const e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function am(i,t){const e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lm(i,t){i.uniform1iv(this.addr,t)}function cm(i,t){i.uniform2iv(this.addr,t)}function hm(i,t){i.uniform3iv(this.addr,t)}function um(i,t){i.uniform4iv(this.addr,t)}function dm(i,t){i.uniform1uiv(this.addr,t)}function fm(i,t){i.uniform2uiv(this.addr,t)}function pm(i,t){i.uniform3uiv(this.addr,t)}function mm(i,t){i.uniform4uiv(this.addr,t)}function gm(i,t,e){const n=this.cache,s=t.length,o=ar(e,s);Ie(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Yh,o[r])}function xm(i,t,e){const n=this.cache,s=t.length,o=ar(e,s);Ie(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Kh,o[r])}function _m(i,t,e){const n=this.cache,s=t.length,o=ar(e,s);Ie(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||$h,o[r])}function vm(i,t,e){const n=this.cache,s=t.length,o=ar(e,s);Ie(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Zh,o[r])}function Mm(i){switch(i){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return om;case 35675:return rm;case 35676:return am;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return vm}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tm(e.type)}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mm(e.type)}}class Sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Gr=/(\w+)(\])?(\[|\.)?/g;function bc(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){const n=i.name,s=n.length;for(Gr.lastIndex=0;;){const o=Gr.exec(n),r=Gr.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){bc(e,c===void 0?new wm(a,i,t):new ym(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Sm(a),bc(e,u)),e=u}}}class Ho{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Tm(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Em=37297;let bm=0;function Am(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Cc=new Jt;function Cm(i){oe._getMatrix(Cc,oe.workingColorSpace,i);const t=`mat3( ${Cc.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Am(i.getShaderSource(t),r)}else return s}function Rm(i,t){const e=Cm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pm(i,t){let e;switch(t){case _h:e="Linear";break;case vh:e="Reinhard";break;case Mh:e="Cineon";break;case ll:e="ACESFilmic";break;case wh:e="AgX";break;case yh:e="Neutral";break;case Qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const So=new z;function Lm(){oe.getLuminanceCoefficients(So);const i=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function zm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Os(i){return i!==""}function Pc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Za(i){return i.replace(Um,Fm)}const Nm=new Map;function Fm(i,t){let e=Qt[t];if(e===void 0){const n=Nm.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Za(e)}const Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(Om,Bm)}function Bm(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function zc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function km(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Hm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Vm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xh:t="ENVMAP_BLENDING_MULTIPLY";break;case Ju:t="ENVMAP_BLENDING_MIX";break;case ju:t="ENVMAP_BLENDING_ADD";break}return t}function Wm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xm(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=km(e),c=Hm(e),h=Gm(e),u=Vm(e),d=Wm(e),f=Im(e),g=zm(o),_=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ii?Pm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Rm("linearToOutputTexel",e.outputColorSpace),Lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),r=Za(r),r=Pc(r,e),r=Lc(r,e),a=Za(a),a=Pc(a,e),a=Lc(a,e),r=Ic(r),a=Ic(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=w+m+r,x=w+p+a,T=Ac(s,s.VERTEX_SHADER,v),P=Ac(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(I){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(P).trim();let G=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,P);else{const J=Rc(s,T,"vertex"),q=Rc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+J+`
`+q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||F==="")&&(H=!1);H&&(I.diagnostics={runnable:G,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(T),s.deleteShader(P),R=new Ho(s,_),y=Dm(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Em)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=P,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Zm(t),e.set(t,n)),n}}class Zm{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}}function Km(i,t,e,n,s,o,r){const a=new Oh,l=new Ym,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,I,N,U){const F=N.fog,G=U.geometry,H=y.isMeshStandardMaterial?N.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),q=J&&J.mapping===or?J.image.height:null,pt=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const gt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=gt!==void 0?gt.length:0;let xt=0;G.morphAttributes.position!==void 0&&(xt=1),G.morphAttributes.normal!==void 0&&(xt=2),G.morphAttributes.color!==void 0&&(xt=3);let kt,$,rt,St;if(pt){const de=wn[pt];kt=de.vertexShader,$=de.fragmentShader}else kt=y.vertexShader,$=y.fragmentShader,l.update(y),rt=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);const ht=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),Gt=U.isInstancedMesh===!0,Ot=U.isBatchedMesh===!0,ie=!!y.map,nt=!!y.matcap,ut=!!J,D=!!y.aoMap,Pt=!!y.lightMap,X=!!y.bumpMap,ct=!!y.normalMap,et=!!y.displacementMap,_t=!!y.emissiveMap,dt=!!y.metalnessMap,L=!!y.roughnessMap,S=y.anisotropy>0,W=y.clearcoat>0,Q=y.dispersion>0,ot=y.iridescence>0,tt=y.sheen>0,Lt=y.transmission>0,wt=S&&!!y.anisotropyMap,At=W&&!!y.clearcoatMap,te=W&&!!y.clearcoatNormalMap,ft=W&&!!y.clearcoatRoughnessMap,Ct=ot&&!!y.iridescenceMap,Vt=ot&&!!y.iridescenceThicknessMap,Yt=tt&&!!y.sheenColorMap,Rt=tt&&!!y.sheenRoughnessMap,se=!!y.specularMap,jt=!!y.specularColorMap,ge=!!y.specularIntensityMap,O=Lt&&!!y.transmissionMap,yt=Lt&&!!y.thicknessMap,j=!!y.gradientMap,st=!!y.alphaMap,bt=y.alphaTest>0,Tt=!!y.alphaHash,Kt=!!y.extensions;let ye=ii;y.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ye=i.toneMapping);const Fe={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:kt,fragmentShader:$,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&U._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&U.instanceColor!==null,instancingMorph:Gt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:xs,alphaToCoverage:!!y.alphaToCoverage,map:ie,matcap:nt,envMap:ut,envMapMode:ut&&J.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:Pt,bumpMap:X,normalMap:ct,displacementMap:d&&et,emissiveMap:_t,normalMapObjectSpace:ct&&y.normalMapType===id,normalMapTangentSpace:ct&&y.normalMapType===zh,metalnessMap:dt,roughnessMap:L,anisotropy:S,anisotropyMap:wt,clearcoat:W,clearcoatMap:At,clearcoatNormalMap:te,clearcoatRoughnessMap:ft,dispersion:Q,iridescence:ot,iridescenceMap:Ct,iridescenceThicknessMap:Vt,sheen:tt,sheenColorMap:Yt,sheenRoughnessMap:Rt,specularMap:se,specularColorMap:jt,specularIntensityMap:ge,transmission:Lt,transmissionMap:O,thicknessMap:yt,gradientMap:j,opaque:y.transparent===!1&&y.blending===es&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:bt,alphaHash:Tt,combine:y.combine,mapUv:ie&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:Pt&&_(y.lightMap.channel),bumpMapUv:X&&_(y.bumpMap.channel),normalMapUv:ct&&_(y.normalMap.channel),displacementMapUv:et&&_(y.displacementMap.channel),emissiveMapUv:_t&&_(y.emissiveMap.channel),metalnessMapUv:dt&&_(y.metalnessMap.channel),roughnessMapUv:L&&_(y.roughnessMap.channel),anisotropyMapUv:wt&&_(y.anisotropyMap.channel),clearcoatMapUv:At&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(y.sheenRoughnessMap.channel),specularMapUv:se&&_(y.specularMap.channel),specularColorMapUv:jt&&_(y.specularColorMap.channel),specularIntensityMapUv:ge&&_(y.specularIntensityMap.channel),transmissionMapUv:O&&_(y.transmissionMap.channel),thicknessMapUv:yt&&_(y.thicknessMap.channel),alphaMapUv:st&&_(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ct||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(ie||st),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:ie&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:_t&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===He,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&y.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(w(M,y),v(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function v(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=g[y.type];let I;if(M){const N=wn[M];I=qs.clone(N.uniforms)}else I=y.uniforms;return I}function T(y,M){let I;for(let N=0,U=h.length;N<U;N++){const F=h[N];if(F.cacheKey===M){I=F,++I.usedTimes;break}}return I===void 0&&(I=new Xm(i,M,y,o),h.push(I)),I}function P(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:P,releaseShaderCache:A,programs:h,dispose:R}}function $m(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Jm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uc(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Jm),n.length>1&&n.sort(d||Dc),s.length>1&&s.sort(d||Dc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function jm(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Uc,i.set(n,[r])):s>=o.length?(r=new Uc,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Wt};break;case"SpotLight":e={position:new z,direction:new z,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function tg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let eg=0;function ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ig(i){const t=new Qm,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,o=new ue,r=new ue;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,v=0,x=0,T=0,P=0,A=0;c.sort(ng);for(let y=0,M=c.length;y<M;y++){const I=c[y],N=I.color,U=I.intensity,F=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*U,u+=N.g*U,d+=N.b*U;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],U);A++}else if(I.isDirectionalLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,q=e.get(I);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=I.shadow.matrix,w++}n.directional[f]=H,f++}else if(I.isSpotLight){const H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(N).multiplyScalar(U),H.distance=F,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[_]=H;const J=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,J.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[_]=J.matrix,I.castShadow){const q=e.get(I);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=G,x++}_++}else if(I.isRectAreaLight){const H=t.get(I);H.color.copy(N).multiplyScalar(U),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){const H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const J=I.shadow,q=e.get(I);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=H,g++}else if(I.isHemisphereLight){const H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(U),H.groundColor.copy(I.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==w||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==T||R.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-P,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=w,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=T,R.numLightProbes=A,n.version=eg++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const v=c[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),r.identity(),o.copy(v.matrixWorld),o.premultiply(m),r.extractRotation(o),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Nc(i){const t=new ig(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function sg(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Nc(i),t.set(s,[a])):o>=r.length?(a=new Nc(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class og extends ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rg extends ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cg(i,t,e){let n=new xl;const s=new at,o=new at,r=new me,a=new og({depthPacking:nd}),l=new rg,c={},h=e.maxTextureSize,u={[oi]:He,[He]:oi,[Ke]:Ke},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:ag,fragmentShader:lg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new he;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new b(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let p=this.type;this.render=function(P,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Gn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==On&&this.type===On,F=p===On&&this.type!==On;for(let G=0,H=P.length;G<H;G++){const J=P[G],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const pt=q.getFrameExtents();if(s.multiply(pt),o.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/pt.x),s.x=o.x*pt.x,q.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/pt.y),s.y=o.y*pt.y,q.mapSize.y=o.y)),q.map===null||U===!0||F===!0){const it=this.type!==On?{minFilter:en,magFilter:en}:{};q.map!==null&&q.map.dispose(),q.map=new _n(s.x,s.y,it),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const gt=q.getViewportCount();for(let it=0;it<gt;it++){const xt=q.getViewport(it);r.set(o.x*xt.x,o.y*xt.y,o.x*xt.z,o.y*xt.w),N.viewport(r),q.updateMatrices(J,it),n=q.getFrustum(),x(A,R,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===On&&w(q,R),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,I)};function w(P,A){const R=t.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new _n(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(A,null,R,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(A,null,R,f,_,null)}function v(P,A,R,y){let M=null;const I=R.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,U=A.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let G=F[U];G===void 0&&(G=M.clone(),F[U]=G,A.addEventListener("dispose",T)),M=G}if(M.visible=A.visible,M.wireframe=A.wireframe,y===On?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=R}return M}function x(P,A,R,y,M){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===On)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,P.matrixWorld);const U=t.update(P),F=P.material;if(Array.isArray(F)){const G=U.groups;for(let H=0,J=G.length;H<J;H++){const q=G[H],pt=F[q.materialIndex];if(pt&&pt.visible){const gt=v(P,pt,y,M);P.onBeforeShadow(i,P,A,R,U,gt,q),i.renderBufferDirect(R,null,U,gt,P,q),P.onAfterShadow(i,P,A,R,U,gt,q)}}}else if(F.visible){const G=v(P,F,y,M);P.onBeforeShadow(i,P,A,R,U,G,null),i.renderBufferDirect(R,null,U,G,P,null),P.onAfterShadow(i,P,A,R,U,G,null)}}const N=P.children;for(let U=0,F=N.length;U<F;U++)x(N[U],A,R,y,M)}function T(P){P.target.removeEventListener("dispose",T);for(const R in c){const y=c[R],M=P.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const hg={[ca]:ha,[ua]:pa,[da]:ma,[ls]:fa,[ha]:ca,[pa]:ua,[ma]:da,[fa]:ls};function ug(i,t){function e(){let O=!1;const yt=new me;let j=null;const st=new me(0,0,0,0);return{setMask:function(bt){j!==bt&&!O&&(i.colorMask(bt,bt,bt,bt),j=bt)},setLocked:function(bt){O=bt},setClear:function(bt,Tt,Kt,ye,Fe){Fe===!0&&(bt*=ye,Tt*=ye,Kt*=ye),yt.set(bt,Tt,Kt,ye),st.equals(yt)===!1&&(i.clearColor(bt,Tt,Kt,ye),st.copy(yt))},reset:function(){O=!1,j=null,st.set(-1,0,0,0)}}}function n(){let O=!1,yt=!1,j=null,st=null,bt=null;return{setReversed:function(Tt){if(yt!==Tt){const Kt=t.get("EXT_clip_control");yt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);const ye=bt;bt=null,this.setClear(ye)}yt=Tt},getReversed:function(){return yt},setTest:function(Tt){Tt?ht(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(Tt){j!==Tt&&!O&&(i.depthMask(Tt),j=Tt)},setFunc:function(Tt){if(yt&&(Tt=hg[Tt]),st!==Tt){switch(Tt){case ca:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case da:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=Tt}},setLocked:function(Tt){O=Tt},setClear:function(Tt){bt!==Tt&&(yt&&(Tt=1-Tt),i.clearDepth(Tt),bt=Tt)},reset:function(){O=!1,j=null,st=null,bt=null,yt=!1}}}function s(){let O=!1,yt=null,j=null,st=null,bt=null,Tt=null,Kt=null,ye=null,Fe=null;return{setTest:function(de){O||(de?ht(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(de){yt!==de&&!O&&(i.stencilMask(de),yt=de)},setFunc:function(de,cn,Ln){(j!==de||st!==cn||bt!==Ln)&&(i.stencilFunc(de,cn,Ln),j=de,st=cn,bt=Ln)},setOp:function(de,cn,Ln){(Tt!==de||Kt!==cn||ye!==Ln)&&(i.stencilOp(de,cn,Ln),Tt=de,Kt=cn,ye=Ln)},setLocked:function(de){O=de},setClear:function(de){Fe!==de&&(i.clearStencil(de),Fe=de)},reset:function(){O=!1,yt=null,j=null,st=null,bt=null,Tt=null,Kt=null,ye=null,Fe=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,v=null,x=null,T=null,P=null,A=new Wt(0,0,0),R=0,y=!1,M=null,I=null,N=null,U=null,F=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=J>=2);let pt=null,gt={};const it=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),kt=new me().fromArray(it),$=new me().fromArray(xt);function rt(O,yt,j,st){const bt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(O,Tt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<j;Kt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(yt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Tt}const St={};St[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),r.setFunc(ls),X(!1),ct(Vl),ht(i.CULL_FACE),D(Gn);function ht(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ft(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Gt(O,yt){return u[O]!==yt?(i.bindFramebuffer(O,yt),u[O]=yt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function Ot(O,yt){let j=f,st=!1;if(O){j=d.get(yt),j===void 0&&(j=[],d.set(yt,j));const bt=O.textures;if(j.length!==bt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Kt=bt.length;Tt<Kt;Tt++)j[Tt]=i.COLOR_ATTACHMENT0+Tt;j.length=bt.length,st=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,st=!0);st&&i.drawBuffers(j)}function ie(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const nt={[vi]:i.FUNC_ADD,[Du]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};nt[Nu]=i.MIN,nt[Fu]=i.MAX;const ut={[Ou]:i.ZERO,[Bu]:i.ONE,[ku]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[qu]:i.SRC_ALPHA_SATURATE,[Wu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Hu]:i.ONE_MINUS_SRC_COLOR,[la]:i.ONE_MINUS_SRC_ALPHA,[Xu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[Zu]:i.ONE_MINUS_CONSTANT_COLOR,[Ku]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,yt,j,st,bt,Tt,Kt,ye,Fe,de){if(O===Gn){_===!0&&(Ft(i.BLEND),_=!1);return}if(_===!1&&(ht(i.BLEND),_=!0),O!==zu){if(O!==m||de!==y){if((p!==vi||x!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,x=vi),de)switch(O){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qe:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qe:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,v=null,T=null,P=null,A.set(0,0,0),R=0,m=O,y=de}return}bt=bt||yt,Tt=Tt||j,Kt=Kt||st,(yt!==p||bt!==x)&&(i.blendEquationSeparate(nt[yt],nt[bt]),p=yt,x=bt),(j!==w||st!==v||Tt!==T||Kt!==P)&&(i.blendFuncSeparate(ut[j],ut[st],ut[Tt],ut[Kt]),w=j,v=st,T=Tt,P=Kt),(ye.equals(A)===!1||Fe!==R)&&(i.blendColor(ye.r,ye.g,ye.b,Fe),A.copy(ye),R=Fe),m=O,y=!1}function Pt(O,yt){O.side===Ke?Ft(i.CULL_FACE):ht(i.CULL_FACE);let j=O.side===He;yt&&(j=!j),X(j),O.blending===es&&O.transparent===!1?D(Gn):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const st=O.stencilWrite;a.setTest(st),st&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),_t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function ct(O){O!==Lu?(ht(i.CULL_FACE),O!==I&&(O===Vl?i.cullFace(i.BACK):O===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),I=O}function et(O){O!==N&&(H&&i.lineWidth(O),N=O)}function _t(O,yt,j){O?(ht(i.POLYGON_OFFSET_FILL),(U!==yt||F!==j)&&(i.polygonOffset(yt,j),U=yt,F=j)):Ft(i.POLYGON_OFFSET_FILL)}function dt(O){O?ht(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+G-1),pt!==O&&(i.activeTexture(O),pt=O)}function S(O,yt,j){j===void 0&&(pt===null?j=i.TEXTURE0+G-1:j=pt);let st=gt[j];st===void 0&&(st={type:void 0,texture:void 0},gt[j]=st),(st.type!==O||st.texture!==yt)&&(pt!==j&&(i.activeTexture(j),pt=j),i.bindTexture(O,yt||St[O]),st.type=O,st.texture=yt)}function W(){const O=gt[pt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(O){kt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),kt.copy(O))}function Rt(O){$.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function se(O,yt){let j=c.get(yt);j===void 0&&(j=new WeakMap,c.set(yt,j));let st=j.get(O);st===void 0&&(st=i.getUniformBlockIndex(yt,O.name),j.set(O,st))}function jt(O,yt){const st=c.get(yt).get(O);l.get(yt)!==st&&(i.uniformBlockBinding(yt,st,O.__bindingPointIndex),l.set(yt,st))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,gt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,v=null,x=null,T=null,P=null,A=new Wt(0,0,0),R=0,y=!1,M=null,I=null,N=null,U=null,F=null,kt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ht,disable:Ft,bindFramebuffer:Gt,drawBuffers:Ot,useProgram:ie,setBlending:D,setMaterial:Pt,setFlipSided:X,setCullFace:ct,setLineWidth:et,setPolygonOffset:_t,setScissorTest:dt,activeTexture:L,bindTexture:S,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:ot,texImage2D:Ct,texImage3D:Vt,updateUBOMapping:se,uniformBlockBinding:jt,texStorage2D:te,texStorage3D:ft,texSubImage2D:tt,texSubImage3D:Lt,compressedTexSubImage2D:wt,compressedTexSubImage3D:At,scissor:Yt,viewport:Rt,reset:ge}}function Fc(i,t,e,n){const s=dg(n);switch(e){case Ah:return i*t;case Rh:return i*t;case Ph:return i*t*2;case dl:return i*t/s.components*s.byteLength;case fl:return i*t/s.components*s.byteLength;case Lh:return i*t*2/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case Ch:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case ml:return i*t*4/s.components*s.byteLength;case No:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:case ya:return Math.max(i,16)*Math.max(t,8)/4;case va:case wa:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ko:case ka:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ih:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case Yn:case Th:return{byteLength:1,components:1};case Xs:case Eh:case Vn:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case Ti:case cl:case Tn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fg(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return f?new OffscreenCanvas(L,S):qo("canvas")}function _(L,S,W){let Q=1;const ot=dt(L);if((ot.width>W||ot.height>W)&&(Q=W/Math.max(ot.width,ot.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const tt=Math.floor(Q*ot.width),Lt=Math.floor(Q*ot.height);u===void 0&&(u=g(tt,Lt));const wt=S?g(tt,Lt):u;return wt.width=tt,wt.height=Lt,wt.getContext("2d").drawImage(L,0,0,tt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+tt+"x"+Lt+")."),wt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(L,S,W,Q,ot=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let tt=S;if(S===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),S===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),W===i.UNSIGNED_INT&&(tt=i.RGB32UI),W===i.BYTE&&(tt=i.RGB8I),W===i.SHORT&&(tt=i.RGB16I),W===i.INT&&(tt=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),W===i.UNSIGNED_INT&&(tt=i.RGBA32UI),W===i.BYTE&&(tt=i.RGBA8I),W===i.SHORT&&(tt=i.RGBA16I),W===i.INT&&(tt=i.RGBA32I)),S===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),S===i.RGBA){const Lt=ot?rr:oe.getTransfer(Q);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=Lt===fe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(L,S){let W;return L?S===null||S===Ti||S===us?W=i.DEPTH24_STENCIL8:S===Tn?W=i.DEPTH32F_STENCIL8:S===Xs&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ti||S===us?W=i.DEPTH_COMPONENT24:S===Tn?W=i.DEPTH_COMPONENT32F:S===Xs&&(W=i.DEPTH_COMPONENT16),W}function T(L,S){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==en&&L.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function P(L){const S=L.target;S.removeEventListener("dispose",P),R(S),S.isVideoTexture&&h.delete(S)}function A(L){const S=L.target;S.removeEventListener("dispose",A),M(S)}function R(L){const S=n.get(L);if(S.__webglInit===void 0)return;const W=L.source,Q=d.get(W);if(Q){const ot=Q[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(L),Object.keys(Q).length===0&&d.delete(W)}n.remove(L)}function y(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const W=L.source,Q=d.get(W);delete Q[S.__cacheKey],r.memory.textures--}function M(L){const S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ot=0;ot<S.__webglFramebuffer[Q].length;ot++)i.deleteFramebuffer(S.__webglFramebuffer[Q][ot]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=L.textures;for(let Q=0,ot=W.length;Q<ot;Q++){const tt=n.get(W[Q]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),r.memory.textures--),n.remove(W[Q])}n.remove(L)}let I=0;function N(){I=0}function U(){const L=I;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function F(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function G(L,S){const W=n.get(L);if(L.isVideoTexture&&et(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,L,S);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function H(L,S){const W=n.get(L);if(L.version>0&&W.__version!==L.version){$(W,L,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function J(L,S){const W=n.get(L);if(L.version>0&&W.__version!==L.version){$(W,L,S);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function q(L,S){const W=n.get(L);if(L.version>0&&W.__version!==L.version){rt(W,L,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const pt={[ri]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},gt={[en]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[no]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[pr]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},it={[sd]:i.NEVER,[hd]:i.ALWAYS,[od]:i.LESS,[Dh]:i.LEQUAL,[rd]:i.EQUAL,[cd]:i.GEQUAL,[ad]:i.GREATER,[ld]:i.NOTEQUAL};function xt(L,S){if(S.type===Tn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===pr||S.magFilter===no||S.magFilter===yi||S.minFilter===Sn||S.minFilter===pr||S.minFilter===no||S.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,pt[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,pt[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,pt[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,gt[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,gt[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,it[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==no&&S.minFilter!==yi||S.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function kt(L,S){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",P));const Q=S.source;let ot=d.get(Q);ot===void 0&&(ot={},d.set(Q,ot));const tt=F(S);if(tt!==L.__cacheKey){ot[tt]===void 0&&(ot[tt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,W=!0),ot[tt].usedTimes++;const Lt=ot[L.__cacheKey];Lt!==void 0&&(ot[L.__cacheKey].usedTimes--,Lt.usedTimes===0&&y(S)),L.__cacheKey=tt,L.__webglTexture=ot[tt].texture}return W}function $(L,S,W){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);const ot=kt(L,S),tt=S.source;e.bindTexture(Q,L.__webglTexture,i.TEXTURE0+W);const Lt=n.get(tt);if(tt.version!==Lt.__version||ot===!0){e.activeTexture(i.TEXTURE0+W);const wt=oe.getPrimaries(oe.workingColorSpace),At=S.colorSpace===kn?null:oe.getPrimaries(S.colorSpace),te=S.colorSpace===kn||wt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ft=_(S.image,!1,s.maxTextureSize);ft=_t(S,ft);const Ct=o.convert(S.format,S.colorSpace),Vt=o.convert(S.type);let Yt=v(S.internalFormat,Ct,Vt,S.colorSpace,S.isVideoTexture);xt(Q,S);let Rt;const se=S.mipmaps,jt=S.isVideoTexture!==!0,ge=Lt.__version===void 0||ot===!0,O=tt.dataReady,yt=T(S,ft);if(S.isDepthTexture)Yt=x(S.format===ds,S.type),ge&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Yt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Yt,ft.width,ft.height,0,Ct,Vt,null));else if(S.isDataTexture)if(se.length>0){jt&&ge&&e.texStorage2D(i.TEXTURE_2D,yt,Yt,se[0].width,se[0].height);for(let j=0,st=se.length;j<st;j++)Rt=se[j],jt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Rt.width,Rt.height,Ct,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,j,Yt,Rt.width,Rt.height,0,Ct,Vt,Rt.data);S.generateMipmaps=!1}else jt?(ge&&e.texStorage2D(i.TEXTURE_2D,yt,Yt,ft.width,ft.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,Ct,Vt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,ft.width,ft.height,0,Ct,Vt,ft.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){jt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Yt,se[0].width,se[0].height,ft.depth);for(let j=0,st=se.length;j<st;j++)if(Rt=se[j],S.format!==gn)if(Ct!==null)if(jt){if(O)if(S.layerUpdates.size>0){const bt=Fc(Rt.width,Rt.height,S.format,S.type);for(const Tt of S.layerUpdates){const Kt=Rt.data.subarray(Tt*bt/Rt.data.BYTES_PER_ELEMENT,(Tt+1)*bt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Tt,Rt.width,Rt.height,1,Ct,Kt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Rt.width,Rt.height,ft.depth,Ct,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Yt,Rt.width,Rt.height,ft.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Rt.width,Rt.height,ft.depth,Ct,Vt,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Yt,Rt.width,Rt.height,ft.depth,0,Ct,Vt,Rt.data)}else{jt&&ge&&e.texStorage2D(i.TEXTURE_2D,yt,Yt,se[0].width,se[0].height);for(let j=0,st=se.length;j<st;j++)Rt=se[j],S.format!==gn?Ct!==null?jt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Yt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Rt.width,Rt.height,Ct,Vt,Rt.data):e.texImage2D(i.TEXTURE_2D,j,Yt,Rt.width,Rt.height,0,Ct,Vt,Rt.data)}else if(S.isDataArrayTexture)if(jt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Yt,ft.width,ft.height,ft.depth),O)if(S.layerUpdates.size>0){const j=Fc(ft.width,ft.height,S.format,S.type);for(const st of S.layerUpdates){const bt=ft.data.subarray(st*j/ft.data.BYTES_PER_ELEMENT,(st+1)*j/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ft.width,ft.height,1,Ct,Vt,bt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Vt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,ft.width,ft.height,ft.depth,0,Ct,Vt,ft.data);else if(S.isData3DTexture)jt?(ge&&e.texStorage3D(i.TEXTURE_3D,yt,Yt,ft.width,ft.height,ft.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Vt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,ft.width,ft.height,ft.depth,0,Ct,Vt,ft.data);else if(S.isFramebufferTexture){if(ge)if(jt)e.texStorage2D(i.TEXTURE_2D,yt,Yt,ft.width,ft.height);else{let j=ft.width,st=ft.height;for(let bt=0;bt<yt;bt++)e.texImage2D(i.TEXTURE_2D,bt,Yt,j,st,0,Ct,Vt,null),j>>=1,st>>=1}}else if(se.length>0){if(jt&&ge){const j=dt(se[0]);e.texStorage2D(i.TEXTURE_2D,yt,Yt,j.width,j.height)}for(let j=0,st=se.length;j<st;j++)Rt=se[j],jt?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Ct,Vt,Rt):e.texImage2D(i.TEXTURE_2D,j,Yt,Ct,Vt,Rt);S.generateMipmaps=!1}else if(jt){if(ge){const j=dt(ft);e.texStorage2D(i.TEXTURE_2D,yt,Yt,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Vt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Ct,Vt,ft);m(S)&&p(Q),Lt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function rt(L,S,W){if(S.image.length!==6)return;const Q=kt(L,S),ot=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);const tt=n.get(ot);if(ot.version!==tt.__version||Q===!0){e.activeTexture(i.TEXTURE0+W);const Lt=oe.getPrimaries(oe.workingColorSpace),wt=S.colorSpace===kn?null:oe.getPrimaries(S.colorSpace),At=S.colorSpace===kn||Lt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const te=S.isCompressedTexture||S.image[0].isCompressedTexture,ft=S.image[0]&&S.image[0].isDataTexture,Ct=[];for(let st=0;st<6;st++)!te&&!ft?Ct[st]=_(S.image[st],!0,s.maxCubemapSize):Ct[st]=ft?S.image[st].image:S.image[st],Ct[st]=_t(S,Ct[st]);const Vt=Ct[0],Yt=o.convert(S.format,S.colorSpace),Rt=o.convert(S.type),se=v(S.internalFormat,Yt,Rt,S.colorSpace),jt=S.isVideoTexture!==!0,ge=tt.__version===void 0||Q===!0,O=ot.dataReady;let yt=T(S,Vt);xt(i.TEXTURE_CUBE_MAP,S);let j;if(te){jt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,se,Vt.width,Vt.height);for(let st=0;st<6;st++){j=Ct[st].mipmaps;for(let bt=0;bt<j.length;bt++){const Tt=j[bt];S.format!==gn?Yt!==null?jt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,0,0,Tt.width,Tt.height,Yt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,se,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,0,0,Tt.width,Tt.height,Yt,Rt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,se,Tt.width,Tt.height,0,Yt,Rt,Tt.data)}}}else{if(j=S.mipmaps,jt&&ge){j.length>0&&yt++;const st=dt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,se,st.width,st.height)}for(let st=0;st<6;st++)if(ft){jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ct[st].width,Ct[st].height,Yt,Rt,Ct[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,se,Ct[st].width,Ct[st].height,0,Yt,Rt,Ct[st].data);for(let bt=0;bt<j.length;bt++){const Kt=j[bt].image[st].image;jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,0,0,Kt.width,Kt.height,Yt,Rt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,se,Kt.width,Kt.height,0,Yt,Rt,Kt.data)}}else{jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Yt,Rt,Ct[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,se,Yt,Rt,Ct[st]);for(let bt=0;bt<j.length;bt++){const Tt=j[bt];jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,0,0,Yt,Rt,Tt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,se,Yt,Rt,Tt.image[st])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),tt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function St(L,S,W,Q,ot,tt){const Lt=o.convert(W.format,W.colorSpace),wt=o.convert(W.type),At=v(W.internalFormat,Lt,wt,W.colorSpace),te=n.get(S),ft=n.get(W);if(ft.__renderTarget=S,!te.__hasExternalTextures){const Ct=Math.max(1,S.width>>tt),Vt=Math.max(1,S.height>>tt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,tt,At,Ct,Vt,S.depth,0,Lt,wt,null):e.texImage2D(ot,tt,At,Ct,Vt,0,Lt,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ct(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ot,ft.__webglTexture,0,X(S)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ot,ft.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(L,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){const Q=S.depthTexture,ot=Q&&Q.isDepthTexture?Q.type:null,tt=x(S.stencilBuffer,ot),Lt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=X(S);ct(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,tt,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,tt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,tt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,L)}else{const Q=S.textures;for(let ot=0;ot<Q.length;ot++){const tt=Q[ot],Lt=o.convert(tt.format,tt.colorSpace),wt=o.convert(tt.type),At=v(tt.internalFormat,Lt,wt,tt.colorSpace),te=X(S);W&&ct(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,At,S.width,S.height):ct(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const ot=Q.__webglTexture,tt=X(S);if(S.depthTexture.format===ns)ct(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(S.depthTexture.format===ds)ct(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Gt(L){const S=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const Q=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const ot=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ot)};Q.addEventListener("dispose",ot),S.__depthDisposeCallback=ot}S.__boundDepthTexture=Q}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ft(S.__webglFramebuffer,L)}else if(W){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[Q],L,!1);else{const ot=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(L,S,W){const Q=n.get(L);S!==void 0&&St(Q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Gt(L)}function ie(L){const S=L.texture,W=n.get(L),Q=n.get(S);L.addEventListener("dispose",A);const ot=L.textures,tt=L.isWebGLCubeRenderTarget===!0,Lt=ot.length>1;if(Lt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,r.memory.textures++),tt){W.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[wt]=[];for(let At=0;At<S.mipmaps.length;At++)W.__webglFramebuffer[wt][At]=i.createFramebuffer()}else W.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let wt=0;wt<S.mipmaps.length;wt++)W.__webglFramebuffer[wt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let wt=0,At=ot.length;wt<At;wt++){const te=n.get(ot[wt]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),r.memory.textures++)}if(L.samples>0&&ct(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let wt=0;wt<ot.length;wt++){const At=ot[wt];W.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[wt]);const te=o.convert(At.format,At.colorSpace),ft=o.convert(At.type),Ct=v(At.internalFormat,te,ft,At.colorSpace,L.isXRRenderTarget===!0),Vt=X(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Ct,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,W.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(W.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),xt(i.TEXTURE_CUBE_MAP,S);for(let wt=0;wt<6;wt++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)St(W.__webglFramebuffer[wt][At],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,At);else St(W.__webglFramebuffer[wt],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let wt=0,At=ot.length;wt<At;wt++){const te=ot[wt],ft=n.get(te);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),xt(i.TEXTURE_2D,te),St(W.__webglFramebuffer,L,te,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),m(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Q.__webglTexture),xt(wt,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)St(W.__webglFramebuffer[At],L,S,i.COLOR_ATTACHMENT0,wt,At);else St(W.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,wt,0);m(S)&&p(wt),e.unbindTexture()}L.depthBuffer&&Gt(L)}function nt(L){const S=L.textures;for(let W=0,Q=S.length;W<Q;W++){const ot=S[W];if(m(ot)){const tt=w(L),Lt=n.get(ot).__webglTexture;e.bindTexture(tt,Lt),p(tt),e.unbindTexture()}}}const ut=[],D=[];function Pt(L){if(L.samples>0){if(ct(L)===!1){const S=L.textures,W=L.width,Q=L.height;let ot=i.COLOR_BUFFER_BIT;const tt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(L),wt=S.length>1;if(wt)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const te=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,W,Q,0,0,W,Q,ot,i.NEAREST),l===!0&&(ut.length=0,D.length=0,ut.push(i.COLOR_ATTACHMENT0+At),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ut.push(tt),D.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[At]);const te=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function X(L){return Math.min(s.maxSamples,L.samples)}function ct(L){const S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function et(L){const S=r.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function _t(L,S){const W=L.colorSpace,Q=L.format,ot=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==xs&&W!==kn&&(oe.getTransfer(W)===fe?(Q!==gn||ot!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function dt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=Ot,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ct}function pg(i,t){function e(n,s=kn){let o;const r=oe.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Th)return i.BYTE;if(n===Eh)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===cl)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===Ch)return i.RGB;if(n===gn)return i.RGBA;if(n===Rh)return i.LUMINANCE;if(n===Ph)return i.LUMINANCE_ALPHA;if(n===ns)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===dl)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===Lh)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===No||n===Fo||n===Oo||n===Bo)if(r===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===No)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===No)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===Ma||n===wa||n===ya)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===va)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===Ta||n===Ea)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Sa||n===Ta)return r===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ea)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Aa||n===Ca||n===Ra||n===Pa||n===La||n===Ia||n===za||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ba)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return r===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===ka||n===Ha)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ko)return r===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===Ga||n===Va||n===Wa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ko)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class mg extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xt extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gg={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ke({vertexShader:xg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new b(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mg extends _s{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new vg,m=e.getContextAttributes();let p=null,w=null;const v=[],x=[],T=new at;let P=null;const A=new tn;A.viewport=new me;const R=new tn;R.viewport=new me;const y=[A,R],M=new mg;let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=v[$];return rt===void 0&&(rt=new Vr,v[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=v[$];return rt===void 0&&(rt=new Vr,v[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=v[$];return rt===void 0&&(rt=new Vr,v[$]=rt),rt.getHandSpace()};function U($){const rt=x.indexOf($.inputSource);if(rt===-1)return;const St=v[rt];St!==void 0&&(St.update($.inputSource,$.frame,c||r),St.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",G);for(let $=0;$<v.length;$++){const rt=x[$];rt!==null&&(x[$]=null,v[$].disconnect(rt))}I=null,N=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,w=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new _n(f.framebufferWidth,f.framebufferHeight,{format:gn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,St=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?ds:ns,St=m.stencil?us:Ti);const Ft={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new _n(d.textureWidth,d.textureHeight,{format:gn,type:Yn,depthTexture:new qh(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G($){for(let rt=0;rt<$.removed.length;rt++){const St=$.removed[rt],ht=x.indexOf(St);ht>=0&&(x[ht]=null,v[ht].disconnect(St))}for(let rt=0;rt<$.added.length;rt++){const St=$.added[rt];let ht=x.indexOf(St);if(ht===-1){for(let Gt=0;Gt<v.length;Gt++)if(Gt>=x.length){x.push(St),ht=Gt;break}else if(x[Gt]===null){x[Gt]=St,ht=Gt;break}if(ht===-1)break}const Ft=v[ht];Ft&&Ft.connect(St)}}const H=new z,J=new z;function q($,rt,St){H.setFromMatrixPosition(rt.matrixWorld),J.setFromMatrixPosition(St.matrixWorld);const ht=H.distanceTo(J),Ft=rt.projectionMatrix.elements,Gt=St.projectionMatrix.elements,Ot=Ft[14]/(Ft[10]-1),ie=Ft[14]/(Ft[10]+1),nt=(Ft[9]+1)/Ft[5],ut=(Ft[9]-1)/Ft[5],D=(Ft[8]-1)/Ft[0],Pt=(Gt[8]+1)/Gt[0],X=Ot*D,ct=Ot*Pt,et=ht/(-D+Pt),_t=et*-D;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_t),$.translateZ(et),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ft[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const dt=Ot+et,L=ie+et,S=X-_t,W=ct+(ht-_t),Q=nt*ie/L*dt,ot=ut*ie/L*dt;$.projectionMatrix.makePerspective(S,W,Q,ot,dt,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pt($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let rt=$.near,St=$.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),M.near=R.near=A.near=rt,M.far=R.far=A.far=St,(I!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,N=M.far),A.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;const ht=$.parent,Ft=M.cameras;pt(M,ht);for(let Gt=0;Gt<Ft.length;Gt++)pt(Ft[Gt],ht);Ft.length===2?q(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),gt($,M,ht)};function gt($,rt,St){St===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(St.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=qa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let it=null;function xt($,rt){if(h=rt.getViewerPose(c||r),g=rt,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ht=!1;St.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Gt=0;Gt<St.length;Gt++){const Ot=St[Gt];let ie=null;if(f!==null)ie=f.getViewport(Ot);else{const ut=u.getViewSubImage(d,Ot);ie=ut.viewport,Gt===0&&(t.setRenderTargetTextures(w,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(w))}let nt=y[Gt];nt===void 0&&(nt=new tn,nt.layers.enable(Gt),nt.viewport=new me,y[Gt]=nt),nt.matrix.fromArray(Ot.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ot.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ie.x,ie.y,ie.width,ie.height),Gt===0&&(M.matrix.copy(nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(nt)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Gt=u.getDepthInformation(St[0]);Gt&&Gt.isValid&&Gt.texture&&_.init(t,Gt,s.renderState)}}for(let St=0;St<v.length;St++){const ht=x[St],Ft=v[St];ht!==null&&Ft!==void 0&&Ft.update(ht,rt,c||r)}it&&it($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const kt=new Xh;kt.setAnimationLoop(xt),this.setAnimationLoop=function($){it=$},this.dispose=function(){}}}const pi=new Rn,wg=new ue;function yg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),_(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),v=w.envMap,x=w.envMapRotation;v&&(m.envMap.value=v,pi.copy(x),pi.x*=-1,pi.y*=-1,pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(pi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sg(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,v){const x=v.program;n.uniformBlockBinding(w,x)}function c(w,v){let x=s[w.id];x===void 0&&(g(w),x=h(w),s[w.id]=x,w.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(w,T);const P=t.render.frame;o[w.id]!==P&&(d(w),o[w.id]=P)}function h(w){const v=u();w.__bindingPointIndex=v;const x=i.createBuffer(),T=w.__size,P=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function u(){for(let w=0;w<a;w++)if(r.indexOf(w)===-1)return r.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const v=s[w.id],x=w.uniforms,T=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let P=0,A=x.length;P<A;P++){const R=Array.isArray(x[P])?x[P]:[x[P]];for(let y=0,M=R.length;y<M;y++){const I=R[y];if(f(I,P,y,T)===!0){const N=I.__offset,U=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let G=0;G<U.length;G++){const H=U[G],J=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+F,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,F),F+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,v,x,T){const P=w.value,A=v+"_"+x;if(T[A]===void 0)return typeof P=="number"||typeof P=="boolean"?T[A]=P:T[A]=P.clone(),!0;{const R=T[A];if(typeof P=="number"||typeof P=="boolean"){if(R!==P)return T[A]=P,!0}else if(R.equals(P)===!1)return R.copy(P),!0}return!1}function g(w){const v=w.uniforms;let x=0;const T=16;for(let A=0,R=v.length;A<R;A++){const y=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,I=y.length;M<I;M++){const N=y[M],U=Array.isArray(N.value)?N.value:[N.value];for(let F=0,G=U.length;F<G;F++){const H=U[F],J=_(H),q=x%T,pt=q%J.boundary,gt=q+pt;x+=pt,gt!==0&&T-gt<J.storage&&(x+=T-gt),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=J.storage}}}const P=x%T;return P>0&&(x+=T-P),w.__size=x,w.__cache={},this}function _(w){const v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function m(w){const v=w.target;v.removeEventListener("dispose",m);const x=r.indexOf(v.__bindingPointIndex);r.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete o[v.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class Tg{constructor(t={}){const{canvas:e=dd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=ii,this.toneMappingExposure=1;const x=this;let T=!1,P=0,A=0,R=null,y=-1,M=null;const I=new me,N=new me;let U=null;const F=new Wt(0);let G=0,H=e.width,J=e.height,q=1,pt=null,gt=null;const it=new me(0,0,H,J),xt=new me(0,0,H,J);let kt=!1;const $=new xl;let rt=!1,St=!1;const ht=new ue,Ft=new ue,Gt=new z,Ot=new me,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function ut(){return R===null?q:1}let D=n;function Pt(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),D===null){const B="webgl2";if(D=Pt(B,E),D===null)throw Pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let X,ct,et,_t,dt,L,S,W,Q,ot,tt,Lt,wt,At,te,ft,Ct,Vt,Yt,Rt,se,jt,ge,O;function yt(){X=new R0(D),X.init(),jt=new pg(D,X),ct=new S0(D,X,t,jt),et=new ug(D,X),ct.reverseDepthBuffer&&d&&et.buffers.depth.setReversed(!0),_t=new I0(D),dt=new $m,L=new fg(D,X,et,dt,ct,jt,_t),S=new E0(x),W=new C0(x),Q=new Od(D),ge=new w0(D,Q),ot=new P0(D,Q,_t,ge),tt=new D0(D,ot,Q,_t),Yt=new z0(D,ct,L),ft=new T0(dt),Lt=new Km(x,S,W,X,ct,ge,ft),wt=new yg(x,dt),At=new jm,te=new sg(X),Vt=new M0(x,S,W,et,tt,f,l),Ct=new cg(x,tt,ct),O=new Sg(D,_t,ct,et),Rt=new y0(D,X,_t),se=new L0(D,X,_t),_t.programs=Lt.programs,x.capabilities=ct,x.extensions=X,x.properties=dt,x.renderLists=At,x.shadowMap=Ct,x.state=et,x.info=_t}yt();const j=new Mg(x,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=X.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=X.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(H,J,!1))},this.getSize=function(E){return E.set(H,J)},this.setSize=function(E,B,Y=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,J=B,e.width=Math.floor(E*q),e.height=Math.floor(B*q),Y===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(H*q,J*q).floor()},this.setDrawingBufferSize=function(E,B,Y){H=E,J=B,q=Y,e.width=Math.floor(E*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(it)},this.setViewport=function(E,B,Y,Z){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,B,Y,Z),et.viewport(I.copy(it).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,B,Y,Z){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,B,Y,Z),et.scissor(N.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(E){et.setScissorTest(kt=E)},this.setOpaqueSort=function(E){pt=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(E=!0,B=!0,Y=!0){let Z=0;if(E){let k=!1;if(R!==null){const mt=R.texture.format;k=mt===ml||mt===pl||mt===fl}if(k){const mt=R.texture.type,Et=mt===Yn||mt===Ti||mt===Xs||mt===us||mt===hl||mt===ul,It=Vt.getClearColor(),zt=Vt.getClearAlpha(),Zt=It.r,$t=It.g,Dt=It.b;Et?(g[0]=Zt,g[1]=$t,g[2]=Dt,g[3]=zt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Zt,_[1]=$t,_[2]=Dt,_[3]=zt,D.clearBufferiv(D.COLOR,0,_))}else Z|=D.COLOR_BUFFER_BIT}B&&(Z|=D.DEPTH_BUFFER_BIT),Y&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),At.dispose(),te.dispose(),dt.dispose(),S.dispose(),W.dispose(),tt.dispose(),ge.dispose(),O.dispose(),Lt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ul),j.removeEventListener("sessionend",Nl),li.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=_t.autoReset,B=Ct.enabled,Y=Ct.autoUpdate,Z=Ct.needsUpdate,k=Ct.type;yt(),_t.autoReset=E,Ct.enabled=B,Ct.autoUpdate=Y,Ct.needsUpdate=Z,Ct.type=k}function Tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Kt(E){const B=E.target;B.removeEventListener("dispose",Kt),ye(B)}function ye(E){Fe(E),dt.remove(E)}function Fe(E){const B=dt.get(E).programs;B!==void 0&&(B.forEach(function(Y){Lt.releaseProgram(Y)}),E.isShaderMaterial&&Lt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Y,Z,k,mt){B===null&&(B=ie);const Et=k.isMesh&&k.matrixWorld.determinant()<0,It=Cu(E,B,Y,Z,k);et.setMaterial(Z,Et);let zt=Y.index,Zt=1;if(Z.wireframe===!0){if(zt=ot.getWireframeAttribute(Y),zt===void 0)return;Zt=2}const $t=Y.drawRange,Dt=Y.attributes.position;let re=$t.start*Zt,xe=($t.start+$t.count)*Zt;mt!==null&&(re=Math.max(re,mt.start*Zt),xe=Math.min(xe,(mt.start+mt.count)*Zt)),zt!==null?(re=Math.max(re,0),xe=Math.min(xe,zt.count)):Dt!=null&&(re=Math.max(re,0),xe=Math.min(xe,Dt.count));const _e=xe-re;if(_e<0||_e===1/0)return;ge.setup(k,Z,It,Y,zt);let Ye,le=Rt;if(zt!==null&&(Ye=Q.get(zt),le=se,le.setIndex(Ye)),k.isMesh)Z.wireframe===!0?(et.setLineWidth(Z.wireframeLinewidth*ut()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(k.isLine){let Nt=Z.linewidth;Nt===void 0&&(Nt=1),et.setLineWidth(Nt*ut()),k.isLineSegments?le.setMode(D.LINES):k.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else k.isPoints?le.setMode(D.POINTS):k.isSprite&&le.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)le.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Nt=k._multiDrawStarts,In=k._multiDrawCounts,ce=k._multiDrawCount,hn=zt?Q.get(zt).bytesPerElement:1,Ci=dt.get(Z).currentProgram.getUniforms();for(let Je=0;Je<ce;Je++)Ci.setValue(D,"_gl_DrawID",Je),le.render(Nt[Je]/hn,In[Je])}else if(k.isInstancedMesh)le.renderInstances(re,_e,k.count);else if(Y.isInstancedBufferGeometry){const Nt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,In=Math.min(Y.instanceCount,Nt);le.renderInstances(re,_e,In)}else le.render(re,_e)};function de(E,B,Y){E.transparent===!0&&E.side===Ke&&E.forceSinglePass===!1?(E.side=He,E.needsUpdate=!0,eo(E,B,Y),E.side=oi,E.needsUpdate=!0,eo(E,B,Y),E.side=Ke):eo(E,B,Y)}this.compile=function(E,B,Y=null){Y===null&&(Y=E),p=te.get(Y),p.init(B),v.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==Y&&E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Z=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const mt=k.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const It=mt[Et];de(It,Y,k),Z.add(It)}else de(mt,Y,k),Z.add(mt)}),v.pop(),p=null,Z},this.compileAsync=function(E,B,Y=null){const Z=this.compile(E,B,Y);return new Promise(k=>{function mt(){if(Z.forEach(function(Et){dt.get(Et).currentProgram.isReady()&&Z.delete(Et)}),Z.size===0){k(E);return}setTimeout(mt,10)}X.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let cn=null;function Ln(E){cn&&cn(E)}function Ul(){li.stop()}function Nl(){li.start()}const li=new Xh;li.setAnimationLoop(Ln),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(E){cn=E,j.setAnimationLoop(E),E===null?li.stop():li.start()},j.addEventListener("sessionstart",Ul),j.addEventListener("sessionend",Nl),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,R),p=te.get(E,v.length),p.init(B),v.push(p),Ft.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$.setFromProjectionMatrix(Ft),St=this.localClippingEnabled,rt=ft.init(this.clippingPlanes,St),m=At.get(E,w.length),m.init(),w.push(m),j.enabled===!0&&j.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&fr(mt,B,-1/0,x.sortObjects)}fr(E,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pt,gt),nt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,nt&&Vt.addToRenderList(m,E),this.info.render.frame++,rt===!0&&ft.beginShadows();const Y=p.state.shadowsArray;Ct.render(Y,E,B),rt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const mt=B.cameras;if(k.length>0)for(let Et=0,It=mt.length;Et<It;Et++){const zt=mt[Et];Ol(Z,k,E,zt)}nt&&Vt.render(E);for(let Et=0,It=mt.length;Et<It;Et++){const zt=mt[Et];Fl(m,E,zt,zt.viewport)}}else k.length>0&&Ol(Z,k,E,B),nt&&Vt.render(E),Fl(m,E,B);R!==null&&(L.updateMultisampleRenderTarget(R),L.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,B),ge.resetDefaultState(),y=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],rt===!0&&ft.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function fr(E,B,Y,Z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){Z&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ft);const Et=tt.update(E),It=E.material;It.visible&&m.push(E,Et,It,Y,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const Et=tt.update(E),It=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ot.copy(Et.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Ft)),Array.isArray(It)){const zt=Et.groups;for(let Zt=0,$t=zt.length;Zt<$t;Zt++){const Dt=zt[Zt],re=It[Dt.materialIndex];re&&re.visible&&m.push(E,Et,re,Y,Ot.z,Dt)}}else It.visible&&m.push(E,Et,It,Y,Ot.z,null)}}const mt=E.children;for(let Et=0,It=mt.length;Et<It;Et++)fr(mt[Et],B,Y,Z)}function Fl(E,B,Y,Z){const k=E.opaque,mt=E.transmissive,Et=E.transparent;p.setupLightsView(Y),rt===!0&&ft.setGlobalState(x.clippingPlanes,Y),Z&&et.viewport(I.copy(Z)),k.length>0&&to(k,B,Y),mt.length>0&&to(mt,B,Y),Et.length>0&&to(Et,B,Y),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Ol(E,B,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new _n(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Vn:Yn,minFilter:yi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const mt=p.state.transmissionRenderTarget[Z.id],Et=Z.viewport||I;mt.setSize(Et.z,Et.w);const It=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(F),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),nt&&Vt.render(Y);const zt=x.toneMapping;x.toneMapping=ii;const Zt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),rt===!0&&ft.setGlobalState(x.clippingPlanes,Z),to(E,Y,Z),L.updateMultisampleRenderTarget(mt),L.updateRenderTargetMipmap(mt),X.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Dt=0,re=B.length;Dt<re;Dt++){const xe=B[Dt],_e=xe.object,Ye=xe.geometry,le=xe.material,Nt=xe.group;if(le.side===Ke&&_e.layers.test(Z.layers)){const In=le.side;le.side=He,le.needsUpdate=!0,Bl(_e,Y,Z,Ye,le,Nt),le.side=In,le.needsUpdate=!0,$t=!0}}$t===!0&&(L.updateMultisampleRenderTarget(mt),L.updateRenderTargetMipmap(mt))}x.setRenderTarget(It),x.setClearColor(F,G),Zt!==void 0&&(Z.viewport=Zt),x.toneMapping=zt}function to(E,B,Y){const Z=B.isScene===!0?B.overrideMaterial:null;for(let k=0,mt=E.length;k<mt;k++){const Et=E[k],It=Et.object,zt=Et.geometry,Zt=Z===null?Et.material:Z,$t=Et.group;It.layers.test(Y.layers)&&Bl(It,B,Y,zt,Zt,$t)}}function Bl(E,B,Y,Z,k,mt){E.onBeforeRender(x,B,Y,Z,k,mt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,B,Y,Z,E,mt),k.transparent===!0&&k.side===Ke&&k.forceSinglePass===!1?(k.side=He,k.needsUpdate=!0,x.renderBufferDirect(Y,B,Z,k,E,mt),k.side=oi,k.needsUpdate=!0,x.renderBufferDirect(Y,B,Z,k,E,mt),k.side=Ke):x.renderBufferDirect(Y,B,Z,k,E,mt),E.onAfterRender(x,B,Y,Z,k,mt)}function eo(E,B,Y){B.isScene!==!0&&(B=ie);const Z=dt.get(E),k=p.state.lights,mt=p.state.shadowsArray,Et=k.state.version,It=Lt.getParameters(E,k.state,mt,B,Y),zt=Lt.getProgramCacheKey(It);let Zt=Z.programs;Z.environment=E.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(E.isMeshStandardMaterial?W:S).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Zt===void 0&&(E.addEventListener("dispose",Kt),Zt=new Map,Z.programs=Zt);let $t=Zt.get(zt);if($t!==void 0){if(Z.currentProgram===$t&&Z.lightsStateVersion===Et)return Hl(E,It),$t}else It.uniforms=Lt.getUniforms(E),E.onBeforeCompile(It,x),$t=Lt.acquireProgram(It,zt),Zt.set(zt,$t),Z.uniforms=It.uniforms;const Dt=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=ft.uniform),Hl(E,It),Z.needsLights=Pu(E),Z.lightsStateVersion=Et,Z.needsLights&&(Dt.ambientLightColor.value=k.state.ambient,Dt.lightProbe.value=k.state.probe,Dt.directionalLights.value=k.state.directional,Dt.directionalLightShadows.value=k.state.directionalShadow,Dt.spotLights.value=k.state.spot,Dt.spotLightShadows.value=k.state.spotShadow,Dt.rectAreaLights.value=k.state.rectArea,Dt.ltc_1.value=k.state.rectAreaLTC1,Dt.ltc_2.value=k.state.rectAreaLTC2,Dt.pointLights.value=k.state.point,Dt.pointLightShadows.value=k.state.pointShadow,Dt.hemisphereLights.value=k.state.hemi,Dt.directionalShadowMap.value=k.state.directionalShadowMap,Dt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Dt.spotShadowMap.value=k.state.spotShadowMap,Dt.spotLightMatrix.value=k.state.spotLightMatrix,Dt.spotLightMap.value=k.state.spotLightMap,Dt.pointShadowMap.value=k.state.pointShadowMap,Dt.pointShadowMatrix.value=k.state.pointShadowMatrix),Z.currentProgram=$t,Z.uniformsList=null,$t}function kl(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Ho.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Hl(E,B){const Y=dt.get(E);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Cu(E,B,Y,Z,k){B.isScene!==!0&&(B=ie),L.resetTextureUnits();const mt=B.fog,Et=Z.isMeshStandardMaterial?B.environment:null,It=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xs,zt=(Z.isMeshStandardMaterial?W:S).get(Z.envMap||Et),Zt=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$t=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Dt=!!Y.morphAttributes.position,re=!!Y.morphAttributes.normal,xe=!!Y.morphAttributes.color;let _e=ii;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=x.toneMapping);const Ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,le=Ye!==void 0?Ye.length:0,Nt=dt.get(Z),In=p.state.lights;if(rt===!0&&(St===!0||E!==M)){const nn=E===M&&Z.id===y;ft.setState(Z,E,nn)}let ce=!1;Z.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==In.state.version||Nt.outputColorSpace!==It||k.isBatchedMesh&&Nt.batching===!1||!k.isBatchedMesh&&Nt.batching===!0||k.isBatchedMesh&&Nt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Nt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Nt.instancing===!1||!k.isInstancedMesh&&Nt.instancing===!0||k.isSkinnedMesh&&Nt.skinning===!1||!k.isSkinnedMesh&&Nt.skinning===!0||k.isInstancedMesh&&Nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Nt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Nt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Nt.instancingMorph===!1&&k.morphTexture!==null||Nt.envMap!==zt||Z.fog===!0&&Nt.fog!==mt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ft.numPlanes||Nt.numIntersection!==ft.numIntersection)||Nt.vertexAlphas!==Zt||Nt.vertexTangents!==$t||Nt.morphTargets!==Dt||Nt.morphNormals!==re||Nt.morphColors!==xe||Nt.toneMapping!==_e||Nt.morphTargetsCount!==le)&&(ce=!0):(ce=!0,Nt.__version=Z.version);let hn=Nt.currentProgram;ce===!0&&(hn=eo(Z,B,k));let Ci=!1,Je=!1,Ss=!1;const ve=hn.getUniforms(),vn=Nt.uniforms;if(et.useProgram(hn.program)&&(Ci=!0,Je=!0,Ss=!0),Z.id!==y&&(y=Z.id,Je=!0),Ci||M!==E){et.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),pd(ht),md(ht),ve.setValue(D,"projectionMatrix",ht)):ve.setValue(D,"projectionMatrix",E.projectionMatrix),ve.setValue(D,"viewMatrix",E.matrixWorldInverse);const Zn=ve.map.cameraPosition;Zn!==void 0&&Zn.setValue(D,Gt.setFromMatrixPosition(E.matrixWorld)),ct.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ve.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Je=!0,Ss=!0)}if(k.isSkinnedMesh){ve.setOptional(D,k,"bindMatrix"),ve.setOptional(D,k,"bindMatrixInverse");const nn=k.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ve.setValue(D,"boneTexture",nn.boneTexture,L))}k.isBatchedMesh&&(ve.setOptional(D,k,"batchingTexture"),ve.setValue(D,"batchingTexture",k._matricesTexture,L),ve.setOptional(D,k,"batchingIdTexture"),ve.setValue(D,"batchingIdTexture",k._indirectTexture,L),ve.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(D,"batchingColorTexture",k._colorsTexture,L));const Ts=Y.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Yt.update(k,Y,hn),(Je||Nt.receiveShadow!==k.receiveShadow)&&(Nt.receiveShadow=k.receiveShadow,ve.setValue(D,"receiveShadow",k.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(vn.envMap.value=zt,vn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(vn.envMapIntensity.value=B.environmentIntensity),Je&&(ve.setValue(D,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&Ru(vn,Ss),mt&&Z.fog===!0&&wt.refreshFogUniforms(vn,mt),wt.refreshMaterialUniforms(vn,Z,q,J,p.state.transmissionRenderTarget[E.id]),Ho.upload(D,kl(Nt),vn,L)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ho.upload(D,kl(Nt),vn,L),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ve.setValue(D,"center",k.center),ve.setValue(D,"modelViewMatrix",k.modelViewMatrix),ve.setValue(D,"normalMatrix",k.normalMatrix),ve.setValue(D,"modelMatrix",k.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const nn=Z.uniformsGroups;for(let Zn=0,Kn=nn.length;Zn<Kn;Zn++){const Gl=nn[Zn];O.update(Gl,hn),O.bind(Gl,hn)}}return hn}function Ru(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Pu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,B,Y){dt.get(E.texture).__webglTexture=B,dt.get(E.depthTexture).__webglTexture=Y;const Z=dt.get(E);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const Y=dt.get(E);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Y=0){R=E,P=B,A=Y;let Z=!0,k=null,mt=!1,Et=!1;if(E){const zt=dt.get(E);if(zt.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(E);else if(zt.__hasExternalTextures)L.rebindTextures(E,dt.get(E.texture).__webglTexture,dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Dt=E.depthTexture;if(zt.__boundDepthTexture!==Dt){if(Dt!==null&&dt.has(Dt)&&(E.width!==Dt.image.width||E.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(E)}}const Zt=E.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Et=!0);const $t=dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($t[B])?k=$t[B][Y]:k=$t[B],mt=!0):E.samples>0&&L.useMultisampledRTT(E)===!1?k=dt.get(E).__webglMultisampledFramebuffer:Array.isArray($t)?k=$t[Y]:k=$t,I.copy(E.viewport),N.copy(E.scissor),U=E.scissorTest}else I.copy(it).multiplyScalar(q).floor(),N.copy(xt).multiplyScalar(q).floor(),U=kt;if(et.bindFramebuffer(D.FRAMEBUFFER,k)&&Z&&et.drawBuffers(E,k),et.viewport(I),et.scissor(N),et.setScissorTest(U),mt){const zt=dt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,zt.__webglTexture,Y)}else if(Et){const zt=dt.get(E.texture),Zt=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.__webglTexture,Y||0,Zt)}y=-1},this.readRenderTargetPixels=function(E,B,Y,Z,k,mt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It){et.bindFramebuffer(D.FRAMEBUFFER,It);try{const zt=E.texture,Zt=zt.format,$t=zt.type;if(!ct.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Z&&Y>=0&&Y<=E.height-k&&D.readPixels(B,Y,Z,k,jt.convert(Zt),jt.convert($t),mt)}finally{const zt=R!==null?dt.get(R).__webglFramebuffer:null;et.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,B,Y,Z,k,mt,Et){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(It=It[Et]),It){const zt=E.texture,Zt=zt.format,$t=zt.type;if(!ct.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-Z&&Y>=0&&Y<=E.height-k){et.bindFramebuffer(D.FRAMEBUFFER,It);const Dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(B,Y,Z,k,jt.convert(Zt),jt.convert($t),0);const re=R!==null?dt.get(R).__webglFramebuffer:null;et.bindFramebuffer(D.FRAMEBUFFER,re);const xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await fd(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.deleteBuffer(Dt),D.deleteSync(xe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,Y=0){E.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const Z=Math.pow(2,-Y),k=Math.floor(E.image.width*Z),mt=Math.floor(E.image.height*Z),Et=B!==null?B.x:0,It=B!==null?B.y:0;L.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Et,It,k,mt),et.unbindTexture()},this.copyTextureToTexture=function(E,B,Y=null,Z=null,k=0){E.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,E=arguments[1],B=arguments[2],k=arguments[3]||0,Y=null);let mt,Et,It,zt,Zt,$t,Dt,re,xe;const _e=E.isCompressedTexture?E.mipmaps[k]:E.image;Y!==null?(mt=Y.max.x-Y.min.x,Et=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,zt=Y.min.x,Zt=Y.min.y,$t=Y.isBox3?Y.min.z:0):(mt=_e.width,Et=_e.height,It=_e.depth||1,zt=0,Zt=0,$t=0),Z!==null?(Dt=Z.x,re=Z.y,xe=Z.z):(Dt=0,re=0,xe=0);const Ye=jt.convert(B.format),le=jt.convert(B.type);let Nt;B.isData3DTexture?(L.setTexture3D(B,0),Nt=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Nt=D.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Nt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const In=D.getParameter(D.UNPACK_ROW_LENGTH),ce=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ci=D.getParameter(D.UNPACK_SKIP_ROWS),Je=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_e.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$t);const Ss=E.isDataArrayTexture||E.isData3DTexture,ve=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const vn=dt.get(E),Ts=dt.get(B),nn=dt.get(vn.__renderTarget),Zn=dt.get(Ts.__renderTarget);et.bindFramebuffer(D.READ_FRAMEBUFFER,nn.__webglFramebuffer),et.bindFramebuffer(D.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Kn=0;Kn<It;Kn++)Ss&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.get(E).__webglTexture,k,$t+Kn),E.isDepthTexture?(ve&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.get(B).__webglTexture,k,xe+Kn),D.blitFramebuffer(zt,Zt,mt,Et,Dt,re,mt,Et,D.DEPTH_BUFFER_BIT,D.NEAREST)):ve?D.copyTexSubImage3D(Nt,k,Dt,re,xe+Kn,zt,Zt,mt,Et):D.copyTexSubImage2D(Nt,k,Dt,re,xe+Kn,zt,Zt,mt,Et);et.bindFramebuffer(D.READ_FRAMEBUFFER,null),et.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Nt,k,Dt,re,xe,mt,Et,It,Ye,le,_e.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,k,Dt,re,xe,mt,Et,It,Ye,_e.data):D.texSubImage3D(Nt,k,Dt,re,xe,mt,Et,It,Ye,le,_e):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Dt,re,mt,Et,Ye,le,_e.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Dt,re,_e.width,_e.height,Ye,_e.data):D.texSubImage2D(D.TEXTURE_2D,k,Dt,re,mt,Et,Ye,le,_e);D.pixelStorei(D.UNPACK_ROW_LENGTH,In),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ci),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Je),k===0&&B.generateMipmaps&&D.generateMipmap(Nt),et.unbindTexture()},this.copyTextureToTexture3D=function(E,B,Y=null,Z=null,k=0){return E.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,E=arguments[2],B=arguments[3],k=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,Y,Z,k)},this.initRenderTarget=function(E){dt.get(E).__webglFramebuffer===void 0&&L.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?L.setTextureCube(E,0):E.isData3DTexture?L.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?L.setTexture2DArray(E,0):L.setTexture2D(E,0),et.unbindTexture()},this.resetState=function(){P=0,A=0,R=null,et.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Ml{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Wt(t),this.density=e}clone(){return new Ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Wr extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Eg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new z;class Yo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),o=pe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ss extends ai{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vi;const Rs=new z,Wi=new z,Xi=new z,qi=new at,Ps=new at,Jh=new ue,To=new z,Ls=new z,Eo=new z,Oc=new at,Xr=new at,Bc=new at;class Ue extends be{constructor(t=new ss){if(super(),this.isSprite=!0,this.type="Sprite",Vi===void 0){Vi=new he;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eg(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Yo(n,3,0,!1)),Vi.setAttribute("uv",new Yo(n,2,3,!1))}this.geometry=Vi,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Wi.setFromMatrixScale(this.matrixWorld),Jh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Wi.multiplyScalar(-Xi.z);const n=this.material.rotation;let s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));const r=this.center;bo(To.set(-.5,-.5,0),Xi,r,Wi,s,o),bo(Ls.set(.5,-.5,0),Xi,r,Wi,s,o),bo(Eo.set(.5,.5,0),Xi,r,Wi,s,o),Oc.set(0,0),Xr.set(1,0),Bc.set(1,1);let a=t.ray.intersectTriangle(To,Ls,Eo,!1,Rs);if(a===null&&(bo(Ls.set(-.5,.5,0),Xi,r,Wi,s,o),Xr.set(0,1),a=t.ray.intersectTriangle(To,Eo,Ls,!1,Rs),a===null))return;const l=t.ray.origin.distanceTo(Rs);l<t.near||l>t.far||e.push({distance:l,point:Rs.clone(),uv:ln.getInterpolation(Rs,To,Ls,Eo,Oc,Xr,Bc,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function bo(i,t,e,n,s,o){qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ps.x=o*qi.x-s*qi.y,Ps.y=s*qi.x+o*qi.y):Ps.copy(qi),i.copy(t),i.x+=Ps.x,i.y+=Ps.y,i.applyMatrix4(Jh)}class bg extends Ge{constructor(t=null,e=1,n=1,s,o,r,a,l,c=en,h=en,u,d){super(null,r,a,l,c,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kc extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new ue,Hc=new ue,Ao=[],Gc=new bi,Ag=new ue,Is=new b,zs=new Ai;class Re extends b{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ag)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Gc.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Gc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),zs.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Yi),Hc.multiplyMatrices(n,Yi),Is.matrixWorld=Hc,Is.raycast(t,Ao);for(let r=0,a=Ao.length;r<a;r++){const l=Ao[r];l.instanceId=o,l.object=this,e.push(l)}Ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new kc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bg(new Float32Array(s*this.count),s,this.count,dl,Tn));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Zo extends ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ko=new z,$o=new z,Vc=new ue,Ds=new gl,Co=new Ai,qr=new z,Wc=new z;class Ka extends be{constructor(t=new he,e=new Zo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Ko.fromBufferAttribute(e,s-1),$o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ko.distanceTo($o);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Co.radius+=o,t.ray.intersectsSphere(Co)===!1)return;Vc.copy(s).invert(),Ds.copy(t.ray).applyMatrix4(Vc);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),w=h.getX(_+1),v=Ro(this,t,Ds,l,p,w);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ro(this,t,Ds,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ro(this,t,Ds,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Ro(this,t,Ds,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ro(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Ko.fromBufferAttribute(r,s),$o.fromBufferAttribute(r,o),e.distanceSqToSegment(Ko,$o,qr,Wc)>n)return;qr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qr);if(!(l<t.near||l>t.far))return{distance:l,point:Wc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Si extends ai{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xc=new ue,$a=new gl,Po=new Ai,Lo=new z;class ji extends be{constructor(t=new he,e=new Si){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=o,t.ray.intersectsSphere(Po)===!1)return;Xc.copy(s).invert(),$a.copy(t.ray).applyMatrix4(Xc);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Lo.fromBufferAttribute(u,m),qc(Lo,m,l,s,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,_=f;g<_;g++)Lo.fromBufferAttribute(u,g),qc(Lo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function qc(i,t,e,n,s,o,r){const a=$a.distanceSqToPoint(i);if(a<e){const l=new z;$a.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class ps extends Ge{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new at:new z);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new z,s=[],o=[],r=[],a=new z,l=new ue;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new z)}o[0]=new z,r[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ne(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wl extends Pn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cg extends wl{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function yl(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Io=new z,Yr=new yl,Zr=new yl,Kr=new yl;class Go extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Io.subVectors(s[0],s[1]).add(s[0]),c=Io);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Io.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Io),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Yr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Zr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Kr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Yr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Zr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Kr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Yr.calc(l),Zr.calc(l),Kr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yc(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Rg(i,t){const e=1-i;return e*e*t}function Pg(i,t){return 2*(1-i)*i*t}function Lg(i,t){return i*i*t}function Bs(i,t,e,n){return Rg(i,t)+Pg(i,e)+Lg(i,n)}function Ig(i,t){const e=1-i;return e*e*e*t}function zg(i,t){const e=1-i;return 3*e*e*i*t}function Dg(i,t){return 3*(1-i)*i*i*t}function Ug(i,t){return i*i*i*t}function ks(i,t,e,n,s){return Ig(i,t)+zg(i,e)+Dg(i,n)+Ug(i,s)}class jh extends Pn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ks(t,s.x,o.x,r.x,a.x),ks(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ng extends Pn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ks(t,s.x,o.x,r.x,a.x),ks(t,s.y,o.y,r.y,a.y),ks(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qh extends Pn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fg extends Pn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends Pn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Bs(t,s.x,o.x,r.x),Bs(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eu extends Pn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Bs(t,s.x,o.x,r.x),Bs(t,s.y,o.y,r.y),Bs(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nu extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Yc(a,l.x,c.x,h.x,u.x),Yc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Jo=Object.freeze({__proto__:null,ArcCurve:Cg,CatmullRomCurve3:Go,CubicBezierCurve:jh,CubicBezierCurve3:Ng,EllipseCurve:wl,LineCurve:Qh,LineCurve3:Fg,QuadraticBezierCurve:tu,QuadraticBezierCurve3:eu,SplineCurve:nu});class Og extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Jo[s.type]().fromJSON(s))}return this}}class Ja extends Og{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Qh(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new tu(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new jh(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new wl(t,e,n,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Sl extends he{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,u=new z,d=new at,f=new z,g=new z,_=new z;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let w=0;w<=e;w++){const v=n+w*h*s,x=Math.sin(v),T=Math.cos(v);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*x,u.y=t[P].y,u.z=t[P].x*T,r.push(u.x,u.y,u.z),d.x=w/e,d.y=P/(t.length-1),a.push(d.x,d.y);const A=l[3*P+0]*x,R=l[3*P+1],y=l[3*P+0]*T;c.push(A,R,y)}}for(let w=0;w<e;w++)for(let v=0;v<t.length-1;v++){const x=v+w*t.length,T=x,P=x+t.length,A=x+t.length+1,R=x+1;o.push(T,P,R),o.push(A,R,P)}this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.points,t.segments,t.phiStart,t.phiLength)}}class Hs extends Sl{constructor(t=1,e=1,n=4,s=8){const o=new Ja;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Hs(t.radius,t.length,t.capSegments,t.radialSegments)}}class bn extends he{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new z,h=new at;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Mt extends he{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),r===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function w(){const x=new z,T=new z;let P=0;const A=(e-t)/n;for(let R=0;R<=o;R++){const y=[],M=R/o,I=M*(e-t)+t;for(let N=0;N<=s;N++){const U=N/s,F=U*l+a,G=Math.sin(F),H=Math.cos(F);T.x=I*G,T.y=-M*n+m,T.z=I*H,u.push(T.x,T.y,T.z),x.set(G,A,H).normalize(),d.push(x.x,x.y,x.z),f.push(U,1-M),y.push(g++)}_.push(y)}for(let R=0;R<s;R++)for(let y=0;y<o;y++){const M=_[y][R],I=_[y+1][R],N=_[y+1][R+1],U=_[y][R+1];(t>0||y!==0)&&(h.push(M,I,U),P+=3),(e>0||y!==o-1)&&(h.push(I,N,U),P+=3)}c.addGroup(p,P,0),p+=P}function v(x){const T=g,P=new at,A=new z;let R=0;const y=x===!0?t:e,M=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const I=g;for(let N=0;N<=s;N++){const F=N/s*l+a,G=Math.cos(F),H=Math.sin(F);A.x=y*H,A.y=m*M,A.z=y*G,u.push(A.x,A.y,A.z),d.push(0,M,0),P.x=G*.5+.5,P.y=H*.5*M+.5,f.push(P.x,P.y),g++}for(let N=0;N<s;N++){const U=T+N,F=I+N;x===!0?h.push(F,F+1,U):h.push(F+1,F,U),R+=3}c.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Me extends Mt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Me(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qs extends he{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(o.slice(),3)),this.setAttribute("uv",new ne(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const v=new z,x=new z,T=new z;for(let P=0;P<e.length;P+=3)f(e[P+0],v),f(e[P+1],x),f(e[P+2],T),l(v,x,T,w)}function l(w,v,x,T){const P=T+1,A=[];for(let R=0;R<=P;R++){A[R]=[];const y=w.clone().lerp(x,R/P),M=v.clone().lerp(x,R/P),I=P-R;for(let N=0;N<=I;N++)N===0&&R===P?A[R][N]=y:A[R][N]=y.clone().lerp(M,N/I)}for(let R=0;R<P;R++)for(let y=0;y<2*(P-R)-1;y++){const M=Math.floor(y/2);y%2===0?(d(A[R][M+1]),d(A[R+1][M]),d(A[R][M])):(d(A[R][M+1]),d(A[R+1][M+1]),d(A[R+1][M]))}}function c(w){const v=new z;for(let x=0;x<o.length;x+=3)v.x=o[x+0],v.y=o[x+1],v.z=o[x+2],v.normalize().multiplyScalar(w),o[x+0]=v.x,o[x+1]=v.y,o[x+2]=v.z}function h(){const w=new z;for(let v=0;v<o.length;v+=3){w.x=o[v+0],w.y=o[v+1],w.z=o[v+2];const x=m(w)/2/Math.PI+.5,T=p(w)/Math.PI+.5;r.push(x,1-T)}g(),u()}function u(){for(let w=0;w<r.length;w+=6){const v=r[w+0],x=r[w+2],T=r[w+4],P=Math.max(v,x,T),A=Math.min(v,x,T);P>.9&&A<.1&&(v<.2&&(r[w+0]+=1),x<.2&&(r[w+2]+=1),T<.2&&(r[w+4]+=1))}}function d(w){o.push(w.x,w.y,w.z)}function f(w,v){const x=w*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const w=new z,v=new z,x=new z,T=new z,P=new at,A=new at,R=new at;for(let y=0,M=0;y<o.length;y+=9,M+=6){w.set(o[y+0],o[y+1],o[y+2]),v.set(o[y+3],o[y+4],o[y+5]),x.set(o[y+6],o[y+7],o[y+8]),P.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),R.set(r[M+4],r[M+5]),T.copy(w).add(v).add(x).divideScalar(3);const I=m(T);_(P,M+0,w,I),_(A,M+2,v,I),_(R,M+4,x,I)}}function _(w,v,x,T){T<0&&w.x===1&&(r[v]=w.x-1),x.x===0&&x.z===0&&(r[v]=T/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.vertices,t.indices,t.radius,t.details)}}class Tl extends Qs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Tl(t.radius,t.detail)}}class Ys extends Ja{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ja().fromJSON(s))}return this}}const Bg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=iu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,d,f;if(n&&(o=Wg(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Zs(o,r,e,a,l,f,0),r}};function iu(i,t,e,n,s){let o,r;if(s===ex(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Zc(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Zc(o,i[o],i[o+1],r);return r&&lr(r,r.next)&&($s(r),r=r.next),r}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(lr(e,e.next)||we(e.prev,e,e.next)===0)){if($s(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Kg(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?Hg(i,n,s,o):kg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),$s(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Gg(Ei(i),t,e),Zs(i,t,e,n,s,o,2)):r===2&&Vg(i,t,e,n,s,o):Zs(Ei(i),t,e,n,s,o,1);break}}}function kg(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,d=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Qi(s,a,o,l,r,c,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hg(i,t,e,n){const s=i.prev,o=i,r=i.next;if(we(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,u=o.y,d=r.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=ja(f,g,t,e,n),w=ja(_,m,t,e,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=p&&x&&x.z<=w;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Qi(a,h,l,u,c,d,v.x,v.y)&&we(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==r&&Qi(a,h,l,u,c,d,x.x,x.y)&&we(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Qi(a,h,l,u,c,d,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==r&&Qi(a,h,l,u,c,d,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Gg(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!lr(s,o)&&su(s,n,n.next,o)&&Ks(s,o)&&Ks(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),$s(n),$s(n.next),n=i=o),n=n.next}while(n!==i);return Ei(n)}function Vg(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&jg(r,a)){let l=ou(r,a);r=Ei(r,r.next),l=Ei(l,l.next),Zs(r,t,e,n,s,o,0),Zs(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Wg(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=iu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Jg(c));for(s.sort(Xg),o=0;o<s.length;o++)e=qg(s[o],e);return e}function Xg(i,t){return i.x-t.x}function qg(i,t){const e=Yg(i,t);if(!e)return t;const n=ou(e,i);return Ei(n,n.next),Ei(e,e.next)}function Yg(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Qi(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Ks(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Zg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Zg(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function Kg(i,t,e,n){let s=i;do s.z===0&&(s.z=ja(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$g(s)}function $g(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function ja(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Qi(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function jg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Qg(i,t)&&(Ks(i,t)&&Ks(t,i)&&tx(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||lr(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function lr(i,t){return i.x===t.x&&i.y===t.y}function su(i,t,e,n){const s=Do(we(i,t,e)),o=Do(we(i,t,n)),r=Do(we(e,n,i)),a=Do(we(e,n,t));return!!(s!==o&&r!==a||s===0&&zo(i,e,t)||o===0&&zo(i,n,t)||r===0&&zo(e,i,n)||a===0&&zo(e,t,n))}function zo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Do(i){return i>0?1:i<0?-1:0}function Qg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&su(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function tx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ou(i,t){const e=new Qa(i.i,i.x,i.y),n=new Qa(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Zc(i,t,e,n){const s=new Qa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function $s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ex(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class si{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return si.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Kc(t),$c(n,t);let r=t.length;e.forEach(Kc);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,$c(n,e[l]);const a=Bg.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Kc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function $c(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class El extends he{constructor(t=new Ys([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:nx;let v,x=!1,T,P,A,R;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,T=p.computeFrenetFrames(h,!1),P=new z,A=new z,R=new z),d||(m=0,f=0,g=0,_=0);const y=a.extractPoints(c);let M=y.shape;const I=y.holes;if(!si.isClockWise(M)){M=M.reverse();for(let nt=0,ut=I.length;nt<ut;nt++){const D=I[nt];si.isClockWise(D)&&(I[nt]=D.reverse())}}const U=si.triangulateShape(M,I),F=M;for(let nt=0,ut=I.length;nt<ut;nt++){const D=I[nt];M=M.concat(D)}function G(nt,ut,D){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ut,D)}const H=M.length,J=U.length;function q(nt,ut,D){let Pt,X,ct;const et=nt.x-ut.x,_t=nt.y-ut.y,dt=D.x-nt.x,L=D.y-nt.y,S=et*et+_t*_t,W=et*L-_t*dt;if(Math.abs(W)>Number.EPSILON){const Q=Math.sqrt(S),ot=Math.sqrt(dt*dt+L*L),tt=ut.x-_t/Q,Lt=ut.y+et/Q,wt=D.x-L/ot,At=D.y+dt/ot,te=((wt-tt)*L-(At-Lt)*dt)/(et*L-_t*dt);Pt=tt+et*te-nt.x,X=Lt+_t*te-nt.y;const ft=Pt*Pt+X*X;if(ft<=2)return new at(Pt,X);ct=Math.sqrt(ft/2)}else{let Q=!1;et>Number.EPSILON?dt>Number.EPSILON&&(Q=!0):et<-Number.EPSILON?dt<-Number.EPSILON&&(Q=!0):Math.sign(_t)===Math.sign(L)&&(Q=!0),Q?(Pt=-_t,X=et,ct=Math.sqrt(S)):(Pt=et,X=_t,ct=Math.sqrt(S/2))}return new at(Pt/ct,X/ct)}const pt=[];for(let nt=0,ut=F.length,D=ut-1,Pt=nt+1;nt<ut;nt++,D++,Pt++)D===ut&&(D=0),Pt===ut&&(Pt=0),pt[nt]=q(F[nt],F[D],F[Pt]);const gt=[];let it,xt=pt.concat();for(let nt=0,ut=I.length;nt<ut;nt++){const D=I[nt];it=[];for(let Pt=0,X=D.length,ct=X-1,et=Pt+1;Pt<X;Pt++,ct++,et++)ct===X&&(ct=0),et===X&&(et=0),it[Pt]=q(D[Pt],D[ct],D[et]);gt.push(it),xt=xt.concat(it)}for(let nt=0;nt<m;nt++){const ut=nt/m,D=f*Math.cos(ut*Math.PI/2),Pt=g*Math.sin(ut*Math.PI/2)+_;for(let X=0,ct=F.length;X<ct;X++){const et=G(F[X],pt[X],Pt);ht(et.x,et.y,-D)}for(let X=0,ct=I.length;X<ct;X++){const et=I[X];it=gt[X];for(let _t=0,dt=et.length;_t<dt;_t++){const L=G(et[_t],it[_t],Pt);ht(L.x,L.y,-D)}}}const kt=g+_;for(let nt=0;nt<H;nt++){const ut=d?G(M[nt],xt[nt],kt):M[nt];x?(A.copy(T.normals[0]).multiplyScalar(ut.x),P.copy(T.binormals[0]).multiplyScalar(ut.y),R.copy(v[0]).add(A).add(P),ht(R.x,R.y,R.z)):ht(ut.x,ut.y,0)}for(let nt=1;nt<=h;nt++)for(let ut=0;ut<H;ut++){const D=d?G(M[ut],xt[ut],kt):M[ut];x?(A.copy(T.normals[nt]).multiplyScalar(D.x),P.copy(T.binormals[nt]).multiplyScalar(D.y),R.copy(v[nt]).add(A).add(P),ht(R.x,R.y,R.z)):ht(D.x,D.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){const ut=nt/m,D=f*Math.cos(ut*Math.PI/2),Pt=g*Math.sin(ut*Math.PI/2)+_;for(let X=0,ct=F.length;X<ct;X++){const et=G(F[X],pt[X],Pt);ht(et.x,et.y,u+D)}for(let X=0,ct=I.length;X<ct;X++){const et=I[X];it=gt[X];for(let _t=0,dt=et.length;_t<dt;_t++){const L=G(et[_t],it[_t],Pt);x?ht(L.x,L.y+v[h-1].y,v[h-1].x+D):ht(L.x,L.y,u+D)}}}$(),rt();function $(){const nt=s.length/3;if(d){let ut=0,D=H*ut;for(let Pt=0;Pt<J;Pt++){const X=U[Pt];Ft(X[2]+D,X[1]+D,X[0]+D)}ut=h+m*2,D=H*ut;for(let Pt=0;Pt<J;Pt++){const X=U[Pt];Ft(X[0]+D,X[1]+D,X[2]+D)}}else{for(let ut=0;ut<J;ut++){const D=U[ut];Ft(D[2],D[1],D[0])}for(let ut=0;ut<J;ut++){const D=U[ut];Ft(D[0]+H*h,D[1]+H*h,D[2]+H*h)}}n.addGroup(nt,s.length/3-nt,0)}function rt(){const nt=s.length/3;let ut=0;St(F,ut),ut+=F.length;for(let D=0,Pt=I.length;D<Pt;D++){const X=I[D];St(X,ut),ut+=X.length}n.addGroup(nt,s.length/3-nt,1)}function St(nt,ut){let D=nt.length;for(;--D>=0;){const Pt=D;let X=D-1;X<0&&(X=nt.length-1);for(let ct=0,et=h+m*2;ct<et;ct++){const _t=H*ct,dt=H*(ct+1),L=ut+Pt+_t,S=ut+X+_t,W=ut+X+dt,Q=ut+Pt+dt;Gt(L,S,W,Q)}}}function ht(nt,ut,D){l.push(nt),l.push(ut),l.push(D)}function Ft(nt,ut,D){Ot(nt),Ot(ut),Ot(D);const Pt=s.length/3,X=w.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ie(X[0]),ie(X[1]),ie(X[2])}function Gt(nt,ut,D,Pt){Ot(nt),Ot(ut),Ot(Pt),Ot(ut),Ot(D),Ot(Pt);const X=s.length/3,ct=w.generateSideWallUV(n,s,X-6,X-3,X-2,X-1);ie(ct[0]),ie(ct[1]),ie(ct[3]),ie(ct[1]),ie(ct[2]),ie(ct[3])}function Ot(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function ie(nt){o.push(nt.x),o.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ix(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jo[s.type]().fromJSON(s)),new El(n,t.options)}}const nx={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(o,r),new at(a,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new at(r,1-l),new at(c,1-u),new at(d,1-g),new at(_,1-p)]:[new at(a,1-l),new at(h,1-u),new at(f,1-g),new at(m,1-p)]}};function ix(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class os extends Qs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new os(t.radius,t.detail)}}class rs extends Qs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rs(t.radius,t.detail)}}class jo extends he{constructor(t=new Ys([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(r,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;si.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const w=g[m];si.isClockWise(w)===!0&&(g[m]=w.reverse())}const _=si.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const w=g[m];f=f.concat(w)}for(let m=0,p=f.length;m<p;m++){const w=f[m];s.push(w.x,w.y,0),o.push(0,0,1),r.push(w.x,w.y)}for(let m=0,p=_.length;m<p;m++){const w=_[m],v=w[0]+u,x=w[1]+u,T=w[2]+u;n.push(v,x,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return sx(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new jo(n,t.curveSegments)}}function sx(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ee extends he{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new z,d=new z,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],v=p/n;let x=0;p===0&&r===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const P=T/e;u.x=-t*Math.cos(s+P*o)*Math.sin(r+v*a),u.y=t*Math.cos(r+v*a),u.z=t*Math.sin(s+P*o)*Math.sin(r+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(P+x,1-v),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const v=h[p][w+1],x=h[p][w],T=h[p+1][w],P=h[p+1][w+1];(p!==0||r>0)&&f.push(v,x,P),(p!==n-1||l<Math.PI)&&f.push(x,T,P)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class an extends he{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new z,u=new z,d=new z;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*o,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;r.push(_,m,w),r.push(m,p,w)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gs extends he{constructor(t=new eu(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new z,l=new z,c=new at;let h=new z;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function _(){for(let v=0;v<e;v++)m(v);m(o===!1?e:0),w(),p()}function m(v){h=t.getPointAt(v/e,h);const x=r.normals[v],T=r.binormals[v];for(let P=0;P<=s;P++){const A=P/s*Math.PI*2,R=Math.sin(A),y=-Math.cos(A);l.x=y*x.x+R*T.x,l.y=y*x.y+R*T.y,l.z=y*x.z+R*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=s;x++){const T=(s+1)*(v-1)+(x-1),P=(s+1)*v+(x-1),A=(s+1)*v+x,R=(s+1)*(v-1)+x;g.push(T,P,R),g.push(P,A,R)}}function w(){for(let v=0;v<=e;v++)for(let x=0;x<=s;x++)c.x=v/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Gs(new Jo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ox extends ke{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Ve extends ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bl extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rx extends bl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $r=new ue,Jc=new z,jc=new z;class ru{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xl,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jc),jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jc),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qc=new ue,Us=new z,Jr=new z;class ax extends ru{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Us.setFromMatrixPosition(t.matrixWorld),n.position.copy(Us),Jr.copy(n.position),Jr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Jr),n.updateMatrixWorld(),s.makeTranslation(-Us.x,-Us.y,-Us.z),Qc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc)}}class Mn extends bl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ax}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lx extends ru{constructor(){super(new _l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class th extends bl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new lx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class au{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);const lu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cx=new _l(-1,1,1,-1,0,1);class hx extends he{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const ux=new hx;class Al{constructor(t){this._mesh=new b(ux,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class cu extends ws{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qs.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Al(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nh extends ws{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class dx extends ws{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class fx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cu(lu),this.copyPass.material.blending=Gn,this.clock=new au}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}nh!==void 0&&(r instanceof nh?n=!0:r instanceof dx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class px extends ws{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Wt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const mx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Wt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ms extends ws{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(o,r,{type:Vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new _n(o,r,{type:Vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new _n(o,r,{type:Vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=mx;this.highPassUniforms=qs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=lu;this.copyUniforms=qs.clone(h.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Wt,this.oldClearAlpha=1,this.basic=new Se,this.fsQuad=new Al(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ms.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ms.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ms.BlurDirectionX=new at(1,0);ms.BlurDirectionY=new at(0,1);const gx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class xx extends ws{constructor(){super();const t=gx;this.uniforms=qs.clone(t.uniforms),this.material=new ox({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Al(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_h?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function _x(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new he;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in o){const u=ih(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<r[h].length;++_)f.push(r[h][_][d]);const g=ih(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ih(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Te(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const qn=new Map,jr=i=>i<0?0:i>255?255:i;function xn(i,t,e){const n=Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453123;return n-Math.floor(n)}function vx(i,t,e){const n=Math.floor(i),s=Math.floor(t),o=i-n,r=t-s,a=o*o*(3-2*o),l=r*r*(3-2*r),c=xn(n,s,e),h=xn(n+1,s,e),u=xn(n,s+1,e),d=xn(n+1,s+1,e);return c*(1-a)*(1-l)+h*a*(1-l)+u*(1-a)*l+d*a*l}function ae(i,t,e,n=4){let s=.5,o=1,r=0,a=0;for(let l=0;l<n;l++)r+=vx(i*o,t*o,e+l*17.31)*s,a+=s,s*=.5,o*=2.03;return r/a}function Ae(i,t,e,{srgb:n=!0,repeat:s=[1,1]}={}){if(qn.has(i))return qn.get(i);const o=document.createElement("canvas");o.width=o.height=t;const r=o.getContext("2d"),a=r.createImageData(t,t),l=a.data;for(let h=0;h<t;h++)for(let u=0;u<t;u++){const d=e(u/t,h/t,u,h),f=(h*t+u)*4;l[f]=jr(d[0]),l[f+1]=jr(d[1]),l[f+2]=jr(d[2]),l[f+3]=255}r.putImageData(a,0,0);const c=new ps(o);return c.wrapS=c.wrapT=ri,c.repeat.set(s[0],s[1]),c.colorSpace=n?Le:kn,c.anisotropy=8,qn.set(i,c),c}function ys(i,t,e){if(qn.has(i))return qn.get(i);const n=document.createElement("canvas");n.width=t,n.height=t;const s=n.getContext("2d");e(s,t);const o=new ps(n);return o.colorSpace=Le,o.anisotropy=8,qn.set(i,o),o}function Ht(i,t,e){const n=i.clone();return n.wrapS=n.wrapT=ri,n.repeat.set(t,e),n.needsUpdate=!0,n}const Mx=Ae("snow",512,(i,t)=>{const e=ae(i*9,t*9,3,5),n=ae(i*44,t*44,11,3),s=xn(Math.floor(i*512),Math.floor(t*512),5)>.995?28:0,o=212+e*28+n*12;return[o*.94+s,o*.975+s,o+14+s]}),wx=Ae("snow-bump",512,(i,t)=>{const n=60+(ae(i*13,t*13,2,4)*.7+ae(i*56,t*56,7,3)*.3)*195;return[n,n,n]},{srgb:!1}),yx=Ae("pine",512,(i,t)=>{const e=ae(i*95,t*95,33,2),s=22+ae(i*22,t*22,21,4)*34+e*26;return[s*.36,s*.98,s*.52]}),Sx=Ae("pine-bump",512,(i,t)=>{const n=ae(i*80,t*80,33,3)*255;return[n,n,n]},{srgb:!1}),Tx=Ae("wood",512,(i,t)=>{const e=Math.floor(t*6),n=xn(e,3,7),s=t*6%1,o=.5+.5*Math.sin(i*52+n*11+ae(i*3,t*24,4,3)*8),r=ae(i*24,t*96,9,3),a=s<.025?.42:1,l=(36+o*17+r*15)*a;return[l*1.32,l*.8,l*.49]}),Ex=Ae("wood-bump",512,(i,t)=>{const n=70+(.5+.5*Math.sin(i*60+ae(i*4,t*30,4,3)*9))*105+ae(i*30,t*110,9,2)*60;return[n,n,n]},{srgb:!1}),bx=Ae("bark",512,(i,t)=>{const e=.5+.5*Math.sin(i*72+ae(i*8,t*5,81,3)*11),n=ae(i*34,t*118,83,3),s=ae(i*7,t*2.6,85,4),o=s<.34?.5:s>.7?.78:1,r=(38+e*42+n*22)*o;return[r*.94,r*.69,r*.47]}),Ax=Ae("bark-bump",512,(i,t)=>{const e=.5+.5*Math.sin(i*72+ae(i*8,t*5,81,3)*11),n=ae(i*42,t*150,83,2),s=ae(i*7,t*2.6,85,4)<.34?46:180,o=(70+e*100+n*50)*(s/180);return[o,o,o]},{srgb:!1}),Cx=Ae("brick",512,(i,t)=>{const s=t*14,o=Math.floor(s),r=i*7+o%2*.5,a=Math.floor(r),l=Math.min(r-a,1-(r-a)),c=Math.min(s-o,1-(s-o));if(l<.035||c<.07){const f=105+ae(i*80,t*80,15,2)*38;return[f,f*.95,f*.9]}const h=xn(a,o,4),u=ae(i*90,t*90,6,2);return[92+h*44+u*18,39+h*16+u*10,33+h*14+u*8]}),Rx=Ae("brick-bump",512,(i,t)=>{const s=t*14,o=Math.floor(s),r=i*7+o%2*.5,a=Math.floor(r),l=Math.min(r-a,1-(r-a)),c=Math.min(s-o,1-(s-o)),h=l<.035||c<.07?45:210;return[h,h,h]},{srgb:!1}),Px=Ae("stone",512,(i,t)=>{const n=t*7,s=Math.floor(n),o=i*7+s%2*.5,r=Math.floor(o),a=Math.min(o-r,1-(o-r)),l=Math.min(n-s,1-(n-s));if(a<.03||l<.05)return[52,56,64];const c=xn(r,s,9),h=ae(i*64,t*64,14,3),u=74+c*32+h*26;return[u*.94,u*.99,u*1.08]}),Lx=Ae("stone-bump",512,(i,t)=>{const n=t*7,s=Math.floor(n),o=i*7+s%2*.5,r=Math.floor(o),a=Math.min(o-r,1-(o-r)),l=Math.min(n-s,1-(n-s)),c=a<.03||l<.05?40:150+xn(r,s,9)*90;return[c,c,c]},{srgb:!1}),Ix=Ae("plaster",512,(i,t)=>{const e=ae(i*12,t*12,17,5),n=ae(i*74,t*74,19,2),s=ae(i*4,t*4,71,3),o=176+e*26+n*9-Math.max(0,s-.62)*55;return[o,o*.945,o*.82]}),zx=Ae("plaster-bump",512,(i,t)=>{const n=100+ae(i*40,t*40,17,4)*90;return[n,n,n]},{srgb:!1}),Dx=Ae("roof",512,(i,t)=>{const s=t*17,o=Math.floor(s),r=i*9+o%2*.5,a=Math.floor(r),l=Math.min(r-a,1-(r-a)),c=ae(i*40,t*40,23,2),h=xn(a,o,2);if(l<.03)return[22,20,22];if(s-o>.82)return[30,25,25];const u=50+h*20+c*12;return[u*1.24,u*.71,u*.65]}),Ux=Ae("roof-bump",512,(i,t)=>{const n=t*17,s=Math.floor(n),o=n-s>.82||t*17%1<.03?55:175;return[o,o,o]},{srgb:!1}),Nx=Ae("ice",512,(i,t)=>{const e=ae(i*6,t*6,31,5),s=Math.abs(ae(i*8,t*8,37,4)-.5)<.012?.58:1,o=(176+e*50)*s;return[o*.8,o*.93,o*1.06]}),Fx=Ae("metal",512,(i,t)=>{const e=.5+.5*Math.sin(t*900+ae(i*10,t*60,41,2)*7),n=ae(i*18,t*18,43,3),s=88+e*30+n*20;return[s,s*1.02,s*1.07]}),Ox=Ae("metal-bump",512,(i,t)=>{const n=90+(.5+.5*Math.sin(t*900))*80;return[n,n,n]},{srgb:!1}),Bx=Ae("asphalt",512,(i,t)=>{const e=ae(i*16,t*16,51,4),n=xn(Math.floor(i*512),Math.floor(t*512),9);let s=32+e*22+(n>.965?36:0);const o=ae(i*4,t*4,55,4);return o>.6?(s=118+(o-.6)*300,[s*.92,s*.96,s]):[s,s*1.03,s*1.09]}),kx=Ae("asphalt-bump",512,(i,t)=>{const n=ae(i*60,t*60,51,3)*190;return[n,n,n]},{srgb:!1});function Hx(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Gx(i=1){const t=`facade-${i}`;if(qn.has(t))return qn.get(t);const e=512,n=document.createElement("canvas"),s=document.createElement("canvas");n.width=n.height=e,s.width=s.height=e;const o=n.getContext("2d"),r=s.getContext("2d"),a=Hx(i*977+13),l=["#242b38","#282a31","#1f2833","#2b2724"];o.fillStyle=l[i%l.length],o.fillRect(0,0,e,e);for(let _=0;_<3200;_++){const m=20+Math.floor(a()*34);o.fillStyle=`rgba(${m},${m+3},${m+8},${.08+a()*.16})`,o.fillRect(a()*e,a()*e,1+a()*3,1+a()*3)}o.fillStyle="#3a3f49",o.fillRect(0,e-54,e,54),o.fillStyle="rgba(12,15,20,0.5)";for(let _=e-54;_<e;_+=13)o.fillRect(0,_,e,2);for(let _=0;_<e;_+=62)o.fillRect(_,e-54,2,54);o.fillStyle="rgba(255,255,255,0.06)",o.fillRect(0,e-57,e,3),o.fillStyle="#39404c",o.fillRect(0,0,e,26),o.fillStyle="#171c24",o.fillRect(0,26,e,5);for(let _=0;_<4;_++){const m=30+_*126;o.fillStyle="rgba(10,14,20,0.32)",o.fillRect(m,31,9,e-88),o.fillStyle="rgba(190,205,225,0.06)",o.fillRect(m+9,31,3,e-88)}r.fillStyle="#000",r.fillRect(0,0,e,e);const c=5,h=9,u=[];for(let _=0;_<h;_++)u.push(.14+a()*.72);for(let _=0;_<h;_++){const m=44+_*48;o.fillStyle="rgba(255,255,255,0.034)",o.fillRect(0,m+34,e,2),o.fillStyle="rgba(8,10,14,0.42)",o.fillRect(0,m+37,e,3);for(let p=0;p<c;p++){const w=34+p*94,v=m,x=58,T=30,P=a()<u[_];if(o.fillStyle="rgba(8,11,16,0.92)",o.fillRect(w-6,v-6,x+12,T+12),P){const A=a()<.78,R=A?232+Math.floor(a()*22):150+Math.floor(a()*24),y=A?158+Math.floor(a()*52):192+Math.floor(a()*26),M=A?74+Math.floor(a()*56):236,I=`rgb(${R},${y},${M})`;o.fillStyle=I,o.fillRect(w,v,x,T),r.fillStyle=I,r.fillRect(w,v,x,T);const N=a();if(N<.22){o.fillStyle="rgba(20,14,12,0.5)";for(let U=0;U<5;U++)o.fillRect(w,v+U*6,x,2);r.fillStyle="rgba(0,0,0,0.55)";for(let U=0;U<5;U++)r.fillRect(w,v+U*6,x,2)}else if(N<.44)o.fillStyle="rgba(24,16,14,0.45)",o.fillRect(w,v,x*(.18+a()*.2),T),r.fillStyle="rgba(0,0,0,0.7)",r.fillRect(w,v,x*.26,T),o.fillStyle="rgba(24,16,14,0.32)",o.fillRect(w+x*.78,v,x*.22,T),r.fillStyle="rgba(0,0,0,0.5)",r.fillRect(w+x*.8,v,x*.2,T);else if(N<.56){const U=o.createRadialGradient(w+x*.5,v+T*.2,2,w+x*.5,v+T*.45,x*.7);U.addColorStop(0,"rgba(255,248,225,0.5)"),U.addColorStop(1,"rgba(255,248,225,0)"),o.fillStyle=U,o.fillRect(w,v,x,T)}a()<.3&&(o.fillStyle="rgba(16,16,18,0.6)",o.fillRect(w+x*(.2+a()*.5),v+T*.34,x*.11,T*.36)),o.strokeStyle="rgba(12,15,20,0.9)",o.lineWidth=3,o.beginPath(),o.moveTo(w+x/2,v),o.lineTo(w+x/2,v+T),o.moveTo(w,v+T*.56),o.lineTo(w+x,v+T*.56),o.stroke(),r.strokeStyle="#000",r.lineWidth=3,r.beginPath(),r.moveTo(w+x/2,v),r.lineTo(w+x/2,v+T),r.moveTo(w,v+T*.56),r.lineTo(w+x,v+T*.56),r.stroke()}else{const A=o.createLinearGradient(w,v,w+x,v+T);if(A.addColorStop(0,"#1d2732"),A.addColorStop(.45,"#141b24"),A.addColorStop(1,"#0d1218"),o.fillStyle=A,o.fillRect(w,v,x,T),o.fillStyle="rgba(140,175,215,0.07)",o.beginPath(),o.moveTo(w,v+T),o.lineTo(w+x*.55,v),o.lineTo(w+x*.78,v),o.lineTo(w+x*.24,v+T),o.closePath(),o.fill(),a()<.16){o.fillStyle="rgba(30,34,40,0.92)",o.fillRect(w-4,v+T-2,x+8,2);for(let R=0;R<=6;R++)o.fillRect(w-4+R*(x+8)/6,v+T-13,1.5,13)}r.fillStyle="#000",r.fillRect(w,v,x,T)}if(o.fillStyle="rgba(210,222,238,0.16)",o.fillRect(w-7,v+T+4,x+14,3),o.fillStyle="rgba(0,0,0,0.45)",o.fillRect(w-7,v-9,x+14,3),o.strokeStyle="rgba(72,80,94,0.8)",o.lineWidth=2,o.strokeRect(w-3,v-3,x+6,T+6),a()<.45){const A=w+a()*x,R=o.createLinearGradient(0,v+T,0,v+T+26);R.addColorStop(0,"rgba(6,9,13,0.32)"),R.addColorStop(1,"rgba(6,9,13,0)"),o.fillStyle=R,o.fillRect(A-2,v+T,4+a()*4,26)}}}const d=new ps(n);d.wrapS=d.wrapT=ri,d.colorSpace=Le,d.anisotropy=8;const f=new ps(s);f.wrapS=f.wrapT=ri,f.colorSpace=Le,f.anisotropy=8;const g={map:d,emissive:f};return qn.set(t,g),g}const Vx=ys("window",256,(i,t)=>{const e=i.createLinearGradient(0,0,0,t);e.addColorStop(0,"#ffe6b4"),e.addColorStop(.45,"#ffc078"),e.addColorStop(1,"#9a5320"),i.fillStyle=e,i.fillRect(0,0,t,t);const n=i.createRadialGradient(t*.5,t*.62,10,t*.5,t*.62,t*.55);n.addColorStop(0,"rgba(255,239,205,0.75)"),n.addColorStop(1,"rgba(255,239,205,0)"),i.fillStyle=n,i.fillRect(0,0,t,t),i.fillStyle="rgba(88,28,20,0.5)",i.beginPath(),i.moveTo(0,0),i.lineTo(t*.26,0),i.lineTo(t*.17,t),i.lineTo(0,t),i.closePath(),i.fill(),i.beginPath(),i.moveTo(t,0),i.lineTo(t*.82,0),i.lineTo(t*.9,t),i.lineTo(t,t),i.closePath(),i.fill(),i.strokeStyle="#24160c",i.lineWidth=22,i.strokeRect(11,11,t-22,t-22),i.lineWidth=11,i.beginPath(),i.moveTo(t/2,0),i.lineTo(t/2,t),i.moveTo(0,t/2),i.lineTo(t,t/2),i.stroke(),i.strokeStyle="rgba(210,225,240,0.22)",i.lineWidth=4,i.strokeRect(22,22,t-44,t-44)}),Wx=ys("flake",64,(i,t)=>{const e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(245,250,255,0.92)"),e.addColorStop(.7,"rgba(220,235,255,0.25)"),e.addColorStop(1,"rgba(220,235,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),Xx=ys("glow",128,(i,t)=>{const e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,238,200,0.95)"),e.addColorStop(.2,"rgba(255,205,140,0.55)"),e.addColorStop(.55,"rgba(255,170,90,0.14)"),e.addColorStop(1,"rgba(255,160,80,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),qx=ys("moon",256,(i,t)=>{const e=i.createRadialGradient(t/2,t/2,t*.16,t/2,t/2,t/2);e.addColorStop(0,"rgba(250,252,255,1)"),e.addColorStop(.19,"rgba(238,246,255,0.95)"),e.addColorStop(.28,"rgba(205,225,255,0.35)"),e.addColorStop(.62,"rgba(160,195,255,0.08)"),e.addColorStop(1,"rgba(140,180,255,0)"),i.fillStyle=e,i.fillRect(0,0,t,t),i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0,0,0,0.25)",i.beginPath(),i.arc(t*.44,t*.45,t*.035,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(t*.55,t*.55,t*.05,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(t*.47,t*.61,t*.028,0,Math.PI*2),i.fill()}),Yx=ys("marker",128,(i,t)=>{i.translate(t/2,t/2),i.rotate(Math.PI/4),i.shadowColor="rgba(226,72,56,0.95)",i.shadowBlur=18,i.strokeStyle="rgba(255,225,190,0.95)",i.lineWidth=4,i.strokeRect(-20,-20,40,40),i.shadowBlur=0,i.fillStyle="rgba(210,52,40,0.85)",i.fillRect(-7,-7,14,14)}),Zx=ys("smoke",128,(i,t)=>{const e=i.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(200,205,215,0.5)"),e.addColorStop(.5,"rgba(150,158,172,0.2)"),e.addColorStop(1,"rgba(120,130,145,0)"),i.fillStyle=e,i.fillRect(0,0,t,t)}),Qr=new Map;function ta(i,t="#ffd9a0",e={}){const{width:n=640,height:s=200,font:o="600 94px Georgia",glow:r=26}=e,a=`${i}|${t}|${n}|${s}|${o}|${r}`;if(Qr.has(a))return Qr.get(a);const l=document.createElement("canvas");l.width=n,l.height=s;const c=l.getContext("2d");c.clearRect(0,0,n,s),c.font=o,c.textAlign="center",c.textBaseline="middle",c.shadowColor=t,c.shadowBlur=r,c.fillStyle=t,c.fillText(i,n/2,s/2+4),c.shadowBlur=r*2.2,c.globalAlpha=.6,c.fillText(i,n/2,s/2+4);const h=new ps(l);return h.colorSpace=Le,h.anisotropy=8,Qr.set(a,h),h}const ea=new Map;function na(i="#f3ede1",t="#b63035",e=7){const n=`${i}|${t}|${e}`;if(ea.has(n))return ea.get(n);const s=256,o=document.createElement("canvas");o.width=o.height=s;const r=o.getContext("2d");r.fillStyle=i,r.fillRect(0,0,s,s),r.fillStyle=t;const a=s/e;for(let c=0;c<e;c+=2)r.fillRect(c*a,0,a,s);r.fillStyle="rgba(255,255,255,0.06)";for(let c=0;c<500;c++)r.fillRect(Math.random()*s,Math.random()*s,1+Math.random()*2,1);const l=new ps(o);return l.wrapS=l.wrapT=ri,l.colorSpace=Le,l.anisotropy=8,ea.set(n,l),l}const Ut={snow:Mx,snowBump:wx,pine:yx,pineBump:Sx,wood:Tx,woodBump:Ex,bark:bx,barkBump:Ax,brick:Cx,brickBump:Rx,stone:Px,stoneBump:Lx,plaster:Ix,plasterBump:zx,roof:Dx,roofBump:Ux,ice:Nx,metal:Fx,metalBump:Ox,asphalt:Bx,asphaltBump:kx,window:Vx,flake:Wx,glow:Xx,moon:qx,marker:Yx,smoke:Zx},Bt=i=>new Ve(i),Pe=i=>new Se(i),K=(i,t=!0)=>(i.castShadow=t,i.receiveShadow=!0,i),sh=(i=3)=>Bt({map:Ht(Ut.snow,i,i),bumpMap:Ht(Ut.snowBump,i,i),bumpScale:.25,roughness:.95,metalness:0,color:16054527}),C={snow:sh(2.5),groundSnow:Bt({map:Ht(Ut.snow,34,34),bumpMap:Ht(Ut.snowBump,34,34),bumpScale:.5,roughness:.92,color:15397631}),pine:Bt({map:Ht(Ut.pine,4,2.6),bumpMap:Ht(Ut.pineBump,4,2.6),bumpScale:.9,roughness:.84,metalness:.02,envMapIntensity:.35,color:13951438}),pineDark:Bt({map:Ht(Ut.pine,3,2),bumpMap:Ht(Ut.pineBump,3,2),bumpScale:.85,roughness:.89,color:4151621}),bark:Bt({map:Ht(Ut.bark,1.3,2.2),bumpMap:Ht(Ut.barkBump,1.3,2.2),bumpScale:.65,roughness:.94,color:12957092}),wood:Bt({map:Ht(Ut.wood,2,2),bumpMap:Ht(Ut.woodBump,2,2),bumpScale:.25,roughness:.82}),woodDark:Bt({map:Ht(Ut.wood,1,1),bumpMap:Ht(Ut.woodBump,1,1),bumpScale:.3,roughness:.72,color:8018760}),brick:Bt({map:Ht(Ut.brick,3,3),bumpMap:Ht(Ut.brickBump,3,3),bumpScale:.3,roughness:.9}),stoneWall:Bt({map:Ht(Ut.stone,3,3),bumpMap:Ht(Ut.stoneBump,3,3),bumpScale:.4,roughness:.9,color:11844808}),pathStone:Bt({map:Ht(Ut.stone,8,8),bumpMap:Ht(Ut.stoneBump,8,8),bumpScale:.28,roughness:.78,color:11643294}),sidewalk:Bt({map:Ht(Ut.stone,3,22),bumpMap:Ht(Ut.stoneBump,3,22),bumpScale:.22,roughness:.86,color:12173516}),plaster:Bt({map:Ht(Ut.plaster,2,2),bumpMap:Ht(Ut.plasterBump,2,2),bumpScale:.18,roughness:.88,color:15195334}),plasterWarm:Bt({map:Ht(Ut.plaster,2,2),bumpMap:Ht(Ut.plasterBump,2,2),bumpScale:.18,roughness:.9,color:14205347}),roof:Bt({map:Ht(Ut.roof,2.5,2),bumpMap:Ht(Ut.roofBump,2.5,2),bumpScale:.3,roughness:.8,color:12891826}),roofFlat:Bt({color:2304310,roughness:.85}),cityStone:Bt({map:Ht(Ut.stone,2.6,2.6),bumpMap:Ht(Ut.stoneBump,2.6,2.6),bumpScale:.34,roughness:.88,color:9082020}),cityStoneDark:Bt({map:Ht(Ut.stone,2,2),bumpMap:Ht(Ut.stoneBump,2,2),bumpScale:.3,roughness:.9,color:5857903}),citySteel:Bt({map:Ht(Ut.metal,2,2),bumpMap:Ht(Ut.metalBump,2,2),bumpScale:.18,color:9213604,metalness:.7,roughness:.44}),roofTrim:Pe({color:16766882,toneMapped:!1}),icePatch:Bt({color:9680332,roughness:.14,metalness:.45,transparent:!0,opacity:.5,envMapIntensity:1.6}),binGreen:Bt({color:1980972,metalness:.45,roughness:.6}),ice:Bt({map:Ut.ice,roughness:.06,metalness:.25,color:12574975,envMapIntensity:1.5}),metal:Bt({map:Ht(Ut.metal,2,2),bumpMap:Ht(Ut.metalBump,2,2),bumpScale:.2,metalness:.75,roughness:.42,color:11450825}),iron:Bt({color:1843755,metalness:.85,roughness:.52}),brass:Bt({color:12029779,metalness:.9,roughness:.3}),gold:Bt({color:14858084,metalness:.95,roughness:.24}),roofSnow:sh(4),asphalt:Bt({map:Ht(Ut.asphalt,26,26),bumpMap:Ht(Ut.asphaltBump,26,26),bumpScale:.4,roughness:.86,color:13226719}),roadLine:Bt({color:14212579,roughness:.68,metalness:.05}),roadLineWarm:Bt({color:13217124,roughness:.7,metalness:.04}),hydrantRed:Bt({map:Ht(Ut.metal,1,1),color:10234660,roughness:.56,metalness:.35}),grassSnow:Bt({map:Ht(Ut.snow,24,24),bumpMap:Ht(Ut.snowBump,24,24),bumpScale:.4,roughness:.94,color:14280434}),windowFrame:Bt({color:2957592,roughness:.8}),glassWarm:Pe({map:Ut.window,toneMapped:!1}),glassCool:Pe({color:13624319,toneMapped:!1}),glassDark:Bt({color:659737,roughness:.12,metalness:.7}),lampGlass:Pe({color:16763275,toneMapped:!1}),lampGlassOff:Bt({color:3877663,emissive:1379334,emissiveIntensity:.8,metalness:.18,roughness:.28}),headlight:Pe({color:16773576,toneMapped:!1}),taillight:Pe({color:16732224,toneMapped:!1}),wreath:Bt({color:2050603,roughness:.88,map:Ht(Ut.pine,2,1)}),bow:Bt({color:10362920,roughness:.62}),fabricRed:Bt({color:8133409,roughness:.92}),fabricGreen:Bt({color:1850666,roughness:.92}),fabricCream:Bt({color:14142390,roughness:.95}),coal:Bt({color:526346,roughness:.95}),carrot:Bt({color:13858348,roughness:.78}),candy:Bt({map:Ht(na("#f4efe4","#b72f36",7),1,3),roughness:.42,metalness:.02}),stallRed:Bt({map:Ht(na("#e9dfcd","#8f2429",8),1,1),roughness:.85}),stallGreen:Bt({map:Ht(na("#e9dfcd","#22492f",8),1,1),roughness:.85}),statueStone:Bt({map:Ht(Ut.stone,2,2),bumpMap:Ht(Ut.stoneBump,2,2),bumpScale:.35,roughness:.88,color:5857645}),mansionStone:Bt({map:Ht(Ut.stone,5,4),bumpMap:Ht(Ut.stoneBump,5,4),bumpScale:.42,roughness:.9,color:9410211}),flame:Pe({color:16751674,transparent:!0,opacity:.82,toneMapped:!1,blending:qe,depthWrite:!1}),flameCore:Pe({color:16770982,transparent:!0,opacity:.9,toneMapped:!1,blending:qe,depthWrite:!1}),ember:Pe({color:16756838,toneMapped:!1})},ia=new Map;function Uo(i){return ia.has(i)||ia.set(i,Bt({color:i,roughness:.48,metalness:.08})),ia.get(i)}const sa=new Map;function oa(i,t,e){const n=`${i}:${t.toFixed(2)}:${e.toFixed(2)}`;if(sa.has(n))return sa.get(n);const s=Gx(i),o=s.map.clone();o.needsUpdate=!0,o.repeat.set(t,e);const r=s.emissive.clone();r.needsUpdate=!0,r.repeat.set(t,e);const a=Bt({map:o,emissiveMap:r,emissive:16777215,emissiveIntensity:1.5,roughness:.9,metalness:.04,color:12108757});return sa.set(n,a),a}const on=(i=16777215,t=.55)=>new ss({map:Ut.glow,color:i,transparent:!0,opacity:t,depthWrite:!1,blending:qe}),Kx=()=>new ss({map:Ut.smoke,transparent:!0,opacity:.3,depthWrite:!1}),$x=new Me(.065,.4,5),lt=new be,Ze=new Wt,oh=i=>{let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}};function mi(i,t,e=!0){if(!i.length)return null;const n=_x(i,!1);for(const o of i)o.dispose();if(!n)return null;const s=new b(n,t);return s.castShadow=e,s.receiveShadow=!0,s}const Zi=[0,1,2].map(i=>{const t=new Me(1,1,24,4,!1),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getX(n),o=e.getY(n),r=e.getZ(n),a=Math.atan2(r,s),l=1-(o+.5)*.24,c=1+Math.sin(a*7+i*1.7)*.1+Math.sin(a*13+i*2.3)*.06+Math.sin(a*23+i*4.1)*.022-Math.cos((o+.5)*5.4+i)*.045;e.setX(n,s*c*l),e.setZ(n,r*c*l),e.setY(n,o+Math.sin(a*9+i)*.02)}return t.computeVertexNormals(),t}),Ns=[0,1,2].map(i=>{const t=new Me(1,1,24,2,!0),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getX(n),o=e.getZ(n),r=e.getY(n),a=Math.atan2(o,s),l=1+Math.sin(a*11+i*2.6)*.11+Math.sin(a*19+i*4.3)*.055-Math.cos((r+.5)*8+i)*.035;e.setX(n,s*l),e.setZ(n,o*l),e.setY(n,r-Math.max(0,1-l)*.08)}return t.computeVertexNormals(),t}),hu=new Me(.1,.82,5);hu.translate(0,.41,0);const rh=new os(.16,0),Jx=new Mt(.22,.5,.52,9),jx=new Me(.86,.24,12),Qx=new z(0,1,0),ah=new z,lh=new vs;class t1{constructor(t){this.scene=t,this.colliders=[],this.animated=[],this.traffic=[],this.time=0}update(t,e){for(const n of this.animated)n(t,e)}add(t){return this.scene.add(t),t}solid(t,e,n,s,o=3,r=0){let a=n,l=s;if(r){const c=Math.abs(Math.cos(r)),h=Math.abs(Math.sin(r));a=n*c+s*h,l=n*h+s*c}this.colliders.push({minX:t-a/2,maxX:t+a/2,minZ:e-l/2,maxZ:e+l/2,height:o})}mesh(t,e,n,s,o,r=0){const a=new b(t,e);return a.position.set(n,s,o),a.rotation.y=r,a.castShadow=!0,a.receiveShadow=!0,this.add(a)}box(t,e,n,s,o,r,a,l=0,c=!0){const h=K(new b(new V(t,e,n),s),c);return h.position.set(o,r,a),h.rotation.y=l,this.add(h)}cyl(t,e,n,s,o,r,a,l){const c=K(new b(new Mt(t,e,n,s),o));return c.position.set(r,a,l),this.add(c)}ground(t=C.groundSnow,e=150){const n=new b(new rn(e,e),t);return n.rotation.x=-Math.PI/2,n.position.y=0,n.receiveShadow=!0,this.add(n),n}pathCircle(t,e=0,n=0,s=C.pathStone){const o=new b(new bn(t,64),s);return o.rotation.x=-Math.PI/2,o.position.set(e,.025,n),o.receiveShadow=!0,this.add(o),o}pathRect(t,e,n,s,o=C.pathStone){const r=new b(new rn(t,e),o);return r.rotation.x=-Math.PI/2,r.position.set(n,.026,s),r.receiveShadow=!0,this.add(r),r}house(t={}){const{x:e=0,z:n=0,rot:s=0,w:o=6.4,d:r=7.4,h:a=4.4,wall:l=C.plaster,roofMat:c=C.roof,lit:h=!1}=t,u=new Xt;u.position.set(e,0,n),u.rotation.y=s,this.add(u);const d=K(new b(new V(o+.3,.7,r+.3),C.stoneWall));d.position.y=.35,u.add(d);const f=K(new b(new V(o,a,r),l));f.position.y=a/2+.1,u.add(f);const g=Math.min(2.7,o*.29),_=.6,m=o/2+_,p=Math.hypot(m,g)+.3,w=Math.atan2(g,m),v=l.clone();v.side=Ke;const x=new Ys;x.moveTo(-o/2,0),x.lineTo(o/2,0),x.lineTo(0,g),x.closePath();const T=new jo(x);for(const H of[-1,1]){const J=K(new b(new V(p,.22,r+_*1.7),c));J.position.set(H*(m/2),a+.1+g/2,0),J.rotation.z=-H*w,u.add(J);const q=K(new b(new V(p*.97,.1,r+_*1.5),C.snow),!1);q.position.set(H*(m/2),a+.24+g/2,0),q.rotation.z=-H*w,u.add(q)}for(const H of[-1,1]){const J=new b(T,v);J.position.set(0,a+.1,H*(r/2-.02)),H<0&&(J.rotation.y=Math.PI),J.castShadow=!0,J.receiveShadow=!0,u.add(J)}const P=a*.55+.1,A=(H,J,q,pt,gt=1.06,it=1.3)=>{const xt=new Xt;xt.position.set(H,J,q),xt.rotation.y=pt;const kt=K(new b(new V(gt+.22,it+.22,.1),C.windowFrame),!1),$=new b(new V(gt,it,.08),C.glassWarm);$.position.z=.04,xt.add(kt,$),u.add(xt)};A(-o*.26,P,r/2+.05,0),A(o*.26,P,r/2+.05,0),A(-o/2-.05,P,0,-Math.PI/2),A(o/2+.05,P,0,Math.PI/2),a>4.8&&(A(-o*.26,a*.8,r/2+.05,0,.8,.9),A(o*.26,a*.8,r/2+.05,0,.8,.9));const R=K(new b(new V(1.24,2.2,.16),C.woodDark));R.position.set(0,1.2,r/2+.06),u.add(R);const y=K(new b(new V(1.5,2.38,.12),C.windowFrame),!1);y.position.set(0,1.25,r/2+.02),u.add(y);const M=new b(new an(.3,.08,8,20),C.wreath);M.position.set(0,1.66,r/2+.18),M.castShadow=!0,u.add(M);const I=K(new b(new V(.18,.09,.05),C.bow));I.position.set(-.11,1.4,r/2+.2),I.rotation.z=.45;const N=K(new b(new V(.18,.09,.05),C.bow));N.position.set(.11,1.4,r/2+.2),N.rotation.z=-.45,u.add(I,N);const U=new b(new V(.24,.36,.24),C.lampGlass);if(U.position.set(o*.32,2.75,r/2+.28),u.add(U),h){const H=new Mn(16756838,18,11,2);H.position.set(o*.32,2.65,r/2+.7),u.add(H);const J=new Ue(on(16758647,.5));J.scale.set(1.6,1.6,1),J.position.copy(U.position),u.add(J)}const F=K(new b(new V(.82,2.2,.82),C.stoneWall));F.position.set(-o*.26,a+g*.72,-r*.2),u.add(F);const G=new b(new V(.98,.13,.98),C.snow);G.position.set(-o*.26,a+g*.72+1.16,-r*.2),u.add(G);for(let H=0;H<7;H++){const J=new b($x,C.ice);J.position.set(-o*.4+H*o*.8/6,a+.02,r/2+_*.65),J.rotation.x=Math.PI,u.add(J)}return this.solid(e,n,o+.5,r+.5,a+g,s),u}mansion(t={}){const{x:e=0,z:n=-26,rot:s=0,w:o=30,d:r=13,h:a=9}=t,l=new Xt;l.position.set(e,0,n),l.rotation.y=s,this.add(l);const c=C.mansionStone,h=K(new b(new V(o+.7,.9,r+.7),C.stoneWall));h.position.y=.45,l.add(h);const u=K(new b(new V(o,a,r),c));u.position.y=a/2+.3,l.add(u);const d=K(new b(new V(o+1.1,.5,r+1.1),C.mansionStone));d.position.y=a+.5,l.add(d);const f=new b(new V(o+.8,.35,r+.8),C.roofSnow);f.position.y=a+.9,f.receiveShadow=!0,l.add(f);const g=K(new b(new V(o*.36,2.6,r*.72),C.mansionStone));g.position.set(0,a+2,-r*.06),l.add(g);const _=new b(new V(o*.38,.3,r*.76),C.roofSnow);_.position.set(0,a+3.35,-r*.06),l.add(_);for(const N of[-11.5,-8,8,11.5])for(const U of[3.4,6.9]){const F=K(new b(new V(1.55,2.7,.14),C.windowFrame),!1);F.position.set(N,U,r/2+.05),l.add(F);const G=new b(new V(1.28,2.42,.1),C.glassWarm);G.position.set(N,U,r/2+.12),l.add(G)}for(const N of[-13.2,13.2])for(const U of[-4,1.8]){const F=K(new b(new V(.14,2.4,1.4),C.windowFrame),!1);F.position.set(N,5.2,U),l.add(F);const G=new b(new V(.1,2.1,1.16),C.glassWarm);G.position.set(N+Math.sign(N)*.07,5.2,U),l.add(G)}const m=K(new b(new V(5.6,5.4,.3),C.stoneWall),!1);m.position.set(0,2.9,r/2+.1),l.add(m);const p=K(new b(new V(3.4,4.6,.22),C.woodDark));p.position.set(0,2.5,r/2+.3),l.add(p);const w=new b(new an(.72,.16,8,24),C.wreath);w.position.set(0,3.2,r/2+.46),w.castShadow=!0,l.add(w);const v=new b(new ee(.08,10,8),C.gold);v.position.set(-.55,2.3,r/2+.45);const x=v.clone();x.position.x=.55,l.add(v,x);for(const N of[-5,-1.7,1.7,5]){const U=K(new b(new V(1.25,1.1,1.25),C.stoneWall));U.position.set(N,.85,r/2+2.6),l.add(U);const F=K(new b(new Mt(.42,.47,5.4,14),C.mansionStone));F.position.set(N,4,r/2+2.6),l.add(F);const G=K(new b(new V(1.2,.4,1.2),C.stoneWall));G.position.set(N,6.75,r/2+2.6),l.add(G)}const T=K(new b(new V(13.2,.7,4.3),C.mansionStone));T.position.set(0,7.15,r/2+1.8),l.add(T);const P=new b(new V(13.4,.22,4.5),C.roofSnow);P.position.set(0,7.6,r/2+1.8),l.add(P);const A=new Ys;A.moveTo(-6.6,0),A.lineTo(6.6,0),A.lineTo(0,2.2),A.closePath();const R=new b(new jo(A),C.mansionStone);R.position.set(0,7.55,r/2+3.98),R.castShadow=!0,l.add(R);for(let N=0;N<3;N++){const U=K(new b(new V(14-N*.8,.22,1.2),C.stoneWall));U.position.set(0,.14+N*.2,r/2+3.6+N*.9),l.add(U)}const y=new b(new V(.3,.44,.3),C.lampGlass);y.position.set(-3.8,3.4,r/2+.45);const M=y.clone();M.position.x=3.8,l.add(y,M);const I=new Mn(16758906,30,15,2);return I.position.set(0,3.8,r/2+1.8),l.add(I),this.solid(e,n,o+.8,r+.8,a+3,s),this.stringLights([{x:-5.4,y:6.5,z:r/2+2.9},{x:0,y:6.1,z:r/2+2.9},{x:5.4,y:6.5,z:r/2+2.9}],{count:16,sag:.35,radius:.055}),l}workshop(t={}){const{x:e=0,z:n=-28,rot:s=0,w:o=30,d:r=16,h:a=12}=t,l=new Xt;l.position.set(e,0,n),l.rotation.y=s,this.add(l);const c=K(new b(new V(o+.4,.7,r+.4),C.stoneWall));c.position.y=.35,l.add(c);const h=K(new b(new V(o,a,r),C.brick));h.position.y=a/2+.2,l.add(h);for(const w of[-o/2,-o/6,o/6,o/2]){const v=K(new b(new V(.45,a,.45),C.iron));v.position.set(w,a/2+.2,r/2+.14),l.add(v)}for(const w of[3.8,8.2]){const v=K(new b(new V(o,.3,.3),C.iron));v.position.set(0,w,r/2+.14),l.add(v)}const u=K(new b(new V(o+1.2,.7,r+1.2),C.metal));u.position.y=a+.6,l.add(u);const d=new b(new V(o+1.3,.25,r+1.3),C.roofSnow);d.position.y=a+1.05,l.add(d);const f=K(new b(new V(7.4,7.1,.3),C.iron),!1);f.position.set(0,3.7,r/2+.16),l.add(f);const g=K(new b(new V(6.2,6.2,.2),C.metal));g.position.set(0,3.4,r/2+.35),l.add(g);const _=new b(new V(6.4,.2,.2),C.lampGlass);_.position.set(0,6.7,r/2+.5),l.add(_);for(const w of[-12,-9.5,8.8,11.5])for(const v of[5.2,8.8]){const x=K(new b(new V(1.7,2.1,.16),C.windowFrame),!1);x.position.set(w,v,r/2+.06),l.add(x);const T=new b(new V(1.45,1.85,.1),C.glassWarm);T.position.set(w,v,r/2+.13),l.add(T)}const m=K(new b(new V(8,.18,2.4),C.metal));m.position.set(0,7.9,r/2+1.2),m.rotation.x=.18,l.add(m);const p=K(new b(new V(o*.5,.8,3.2),C.woodDark));return p.position.set(-o*.2,.4,r/2+2.6),l.add(p),this.solid(e,n,o+.6,r+.6,a,s),l}cityBlock(t={}){const{x:e=18,z:n=0,w:s=11,d:o=14,h:r=26,seed:a=1,facing:l=-1,light:c=!0,name:h=null,detail:u=!0}=t,d=new Xt;d.position.set(e,0,n),this.add(d);const f=oh(a*977+41),g=Math.max(.5,s/13),_=Math.max(.7,r/22),m=oa(a,g,_),p=l*(s/2),w=u!==!1,v=new b(new V(s,r,o),[m,m,C.roofFlat,C.roofFlat,m,m]);v.position.y=r/2,v.castShadow=!0,v.receiveShadow=!0,d.add(v);const x=[],T=[],P=[],A=[],R=[],y=[],M=(X,ct,et,_t,dt,L,S)=>{const W=new V(ct,et,_t);W.translate(dt,L,S),X.push(W)};M(x,s+.9,1.15,o+.9,0,.575,0),M(x,s+1.12,.18,o+1.12,0,1.13,0),M(P,s+1.16,.09,o+1.16,0,1.23,0);for(let X=0;X<3;X++){const ct=3.8-X*.35,et=p+l*(.58+X*.42),_t=.36-X*.12;M(x,.62,.22,ct,et,_t,0),M(P,.6,.055,ct-.18,et,_t+.14,0)}const I=.85;for(const X of[-1,1])for(const ct of[-1,1])M(x,I,r-.2,I,X*(s/2-I/2+.16),r/2,ct*(o/2-I/2+.16));const N=r>34?4.6:4;let U=0;for(let X=5.4;X<r-2.6;X+=N){const ct=U%3===2?.34:.18;M(x,s+.46,ct,o+.46,0,X,0),f()<.8&&M(P,s+.6,.07,o+.6,0,X+ct/2+.03,0),U++}M(x,s+1,.55,o+1,0,r-.28,0),M(x,s+1.3,.2,o+1.3,0,r+.06,0),M(P,s+1.34,.11,o+1.34,0,r+.22,0);for(const X of[-1,1])M(x,s+.7,.9,.34,0,r+.45,X*(o/2+.18)),M(P,s+.74,.1,.4,0,r+.95,X*(o/2+.18));for(const X of[-1,1])M(x,.34,.9,o+.7,X*(s/2+.18),r+.45,0),M(P,.4,.1,o+.74,X*(s/2+.18),r+.95,0);let F=r,G=0,H=0;if(r>=24&&a%7!==3){G=s*(.52+f()*.16),H=o*(.56+f()*.14);const X=5+f()*(r>34?13:8),ct=oa(a+201,Math.max(.4,G/13),Math.max(.45,X/22)),et=new b(new V(G,X,H),[ct,ct,C.roofFlat,C.roofFlat,ct,ct]);et.position.y=r+X/2,et.castShadow=!0,et.receiveShadow=!0,d.add(et),M(x,G+.7,.4,H+.7,0,r+.1,0),M(x,G+.82,.45,H+.82,0,r+X-.18,0),M(P,G+.9,.12,H+.9,0,r+X+.08,0),F=r+X;for(const _t of[-1,1])M(R,G+.88,.1,.1,0,r+X-.68,_t*(H/2+.26));for(const _t of[-1,1])M(R,.1,.1,H+.88,_t*(G/2+.26),r+X-.68,0);if(r>36){const _t=2.6+f()*3.2,dt=G*.54,L=H*.54;M(x,dt,_t,L,0,F+_t/2,0),M(x,dt+.42,.28,L+.42,0,F+_t,0),M(P,dt+.5,.1,L+.5,0,F+_t+.2,0),M(R,dt*.4,.1,L*.4,0,F+_t+.28,0),F+=_t}}if(w){M(x,3.2,2.8,2.4,s*.06,r+2.8/2,-o*.04),M(P,3.2+.3,.16,2.4+.3,s*.06,r+2.8+.08,-o*.04),M(T,.9,2,.08,s*.06-.7,r+1,-o*.04+2.4/2+.03),M(R,.7,.55,.07,s*.06+.85,r+2.1,-o*.04+2.4/2+.03);for(let _t=0;_t<3;_t++){const dt=-s*.3+_t*(s*.2);M(T,1.5,.65,1.1,dt,r+.42,-o*.34),M(P,1.56,.08,1.16,dt,r+.78,-o*.34),M(T,.52,.1,.52,dt,r+.83,-o*.34)}M(T,.16,.16,o*.5,s*.3,r+.18,0),M(T,.14,.14,o*.36,-s*.34,r+.18,0);for(const _t of[-.48,.48])for(const dt of[-.48,.48])M(T,.1,1.4,.1,s*.24+_t,r+.7,o*.2+dt);for(let _t=0;_t<6;_t++){const dt=6.5+f()*Math.max(2,r-10),L=(f()-.5)*(o*.68);M(T,.42,.48,.7,p+l*.26,dt,L)}if(r>13){const _t=r>24?[7.6,14.6,21.6]:[7.6,14.6];for(const dt of _t)if(!(dt>r-4)){M(T,1.2,.1,o*.46,p+l*.58,dt,0),M(T,.08,.72,o*.46,p+l*1.14,dt+.4,0),M(T,.1,6.6,.4,p+l*1.04,dt-3,o*.2);for(let L=0;L<7;L++)M(T,.06,.72,.06,p+l*1.14,dt+.4,-o*.21+L*(o*.07))}}}if(w){const X=p+l*.06,ct=o*.3;for(const et of[-ct,ct])M(c?A:y,.14,2.3,o*.22,X,2.2,et),M(T,.24,3.05,.14,X+l*.02,2.3,et-o*.115),M(T,.24,3.05,.14,X+l*.02,2.3,et+o*.115),M(T,.24,.18,o*.24,X+l*.02,3.28,et);if(M(y,.16,2.6,1.6,X,1.6,0),c&&M(A,.1,1.1,.8,X+l*.07,2.05,0),M(T,.3,2.9,.18,X+l*.06,1.75,-.86),M(T,.3,2.9,.18,X+l*.06,1.75,.86),M(T,.3,.2,1.9,X+l*.06,3.14,0),M(R,.18,.2,o*.7,X+l*.03,3.26,0),c){for(const _t of[-o*.47,o*.47])M(R,.3,.5,.24,X+l*.18,3.62,_t);const et=new Mn(16756326,16,14,2);et.position.set(p+l*1.6,2.7,0),d.add(et)}}const q=4+f()*5.5,pt=s*(.2+f()*.16),gt=-o*.3;M(T,1.5,.06,.06,pt,F+q*.55,gt),M(T,1,.06,.06,pt,F+q*.8,gt),M(T,.06,q*.55,.06,pt,F+q*.3,gt);const it=mi(x,C.cityStone);it&&d.add(it);const xt=mi(T,C.iron);xt&&d.add(xt);const kt=mi(P,C.snow,!1);kt&&d.add(kt);const $=mi(A,C.glassWarm,!1);$&&d.add($);const rt=mi(R,C.roofTrim,!1);rt&&d.add(rt);const St=mi(y,C.glassDark);if(St&&d.add(St),w){const X=K(new b(new V(1.5,.16,o*.72),C.fabricRed));X.position.set(p+l*.78,3.52,0),X.rotation.z=l*.16,d.add(X);const ct=new b(new V(1.52,.09,o*.72),C.snow);ct.position.set(p+l*.79,3.62,0),ct.rotation.z=l*.16,d.add(ct);const et=new b(new V(.08,.26,o*.72),C.fabricRed);et.position.set(p+l*1.16,3.3,0),d.add(et);const _t=["NOEL","DELI","HOTEL","CAFE","BOOKS","TAILOR","PHARMACY","THEATRE","BAKERY","GIFTS"],dt=h||_t[a%_t.length],L=ta(dt,c?"#ffd6a2":"#93a0b2",{width:512,height:160,font:"700 92px Georgia",glow:20}),S=Math.min(o*.6,6.2),W=Math.max(1.05,S/3.4),Q=new b(new V(.14,W+.26,S+.34),C.iron);Q.position.set(p+l*.9,4.62,0),Q.castShadow=!0,d.add(Q);const ot=new b(new rn(S,W),Pe({map:L,transparent:!0,toneMapped:!1,depthWrite:!1}));ot.position.set(p+l*.99,4.62,0),ot.rotation.y=l>0?Math.PI/2:-Math.PI/2,d.add(ot)}if(w){const X=K(new b(new Mt(.72,.82,1.5,12),C.woodDark));X.position.set(s*.24,r+2.1,o*.2),d.add(X);const ct=K(new b(new Me(.86,.36,12),C.iron));ct.position.set(s*.24,r+3,o*.2),d.add(ct);const et=new b(new Me(.8,.22,12),C.snow);et.position.set(s*.24,r+3.16,o*.2),d.add(et)}const ht=K(new b(new Mt(.06,.12,q,6),C.iron));ht.position.set(pt,F+q/2,gt),d.add(ht);const Ft=Pe({color:16729654,transparent:!0,opacity:1,toneMapped:!1}),Gt=new b(new ee(.15,8,6),Ft);Gt.position.set(pt,F+q+.08,gt),d.add(Gt);const Ot=new Ue(on(16729654,.45));Ot.scale.set(1.5,1.5,1),Ot.position.copy(Gt.position),d.add(Ot);const ie=f()*10;this.animated.push(X=>{const et=(X*.7+ie)%1<.42?1:.08;Ft.opacity=et,Ot.material.opacity=.45*et});const nt=new Re(new os(1,0),C.snow,9);for(let X=0;X<9;X++){if(X<5)lt.position.set((f()-.5)*(s-2.5),r+.02,(f()-.5)*(o-2.5)),lt.scale.set(.7+f()*.9,.28+f()*.22,.7+f()*.8);else{const ct=f()<.5?-1:1;lt.position.set(ct*(s/2+.5),.1,(f()-.5)*(o+1)),lt.scale.set(.9+f()*.7,.3+f()*.2,.5+f()*.5)}lt.rotation.set(f(),f()*3,f()),lt.updateMatrix(),nt.setMatrixAt(X,lt.matrix)}nt.instanceMatrix.needsUpdate=!0,nt.castShadow=!1,nt.receiveShadow=!0,d.add(nt);const ut=26,D=new Re(new ee(.085,5,4),Pe({toneMapped:!1}),ut),Pt=[16767392,16758903,16773328];for(let X=0;X<ut;X++){const ct=(X+.5)/ut;lt.position.set(p+l*.68,r+.02,-o/2-.32+ct*(o+.64)),lt.rotation.set(0,0,0),lt.scale.setScalar(.85+X%3*.15),lt.updateMatrix(),D.setMatrixAt(X,lt.matrix),Ze.setHex(Pt[X%Pt.length]),D.setColorAt(X,Ze)}if(D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0),d.add(D),w){const ct=new Re(new Me(.055,.5,5),C.ice,16);for(let et=0;et<16;et++)lt.position.set(p+l*.6,r-.26,-o/2+(et+.5)*(o/16)),lt.rotation.set(Math.PI,0,0),lt.scale.set(1,.6+et*7%5*.18,1),lt.updateMatrix(),ct.setMatrixAt(et,lt.matrix);ct.instanceMatrix.needsUpdate=!0,d.add(ct)}return this.solid(e,n,s,o,r),d}snowDrift(t={}){const{x:e=0,z:n=0,w:s=3.2,d:o=1.8,h:r=.45,rot:a=0}=t,l=new b(new os(1,1),C.snow);return l.position.set(e,r*.34,n),l.scale.set(s*.5,r,o*.5),l.rotation.y=a,l.receiveShadow=!0,this.add(l),l}icePatch(t={}){const{x:e=0,z:n=0,r:s=2.4,rot:o=0}=t,r=new b(new bn(s,14),C.icePatch);return r.rotation.x=-Math.PI/2,r.rotation.z=o,r.position.set(e,.052,n),this.add(r),r}bollard(t={}){const{x:e=0,z:n=0}=t,s=new Xt;s.position.set(e,0,n),this.add(s);const o=K(new b(new Mt(.13,.16,1,10),C.iron));o.position.y=.5,s.add(o);const r=new b(new Mt(.17,.17,.08,10),C.brass);r.position.y=.84,s.add(r);const a=new b(new ee(.13,10,6),C.snow);return a.position.y=1.03,a.scale.y=.5,s.add(a),this.solid(e,n,.45,.45,1.1),s}streetBin(t={}){const{x:e=0,z:n=0,rot:s=0}=t,o=new Xt;o.position.set(e,0,n),o.rotation.y=s,this.add(o);const r=K(new b(new Mt(.32,.27,.92,10),C.binGreen));r.position.y=.5,o.add(r);const a=new b(new Mt(.35,.35,.08,10),C.iron);a.position.y=.96,o.add(a);const l=new b(new Mt(.3,.33,.1,10),C.iron);l.position.y=1.03,o.add(l);const c=new b(new ee(.31,10,6),C.snow);return c.position.y=1.09,c.scale.y=.35,o.add(c),this.solid(e,n,.8,.8,1.1),o}planter(t={}){const{x:e=0,z:n=0,rot:s=0,size:o=1.7}=t,r=new Xt;r.position.set(e,0,n),r.rotation.y=s,this.add(r);const a=K(new b(new V(o,.7,o),C.cityStoneDark));a.position.y=.35,r.add(a);const l=new b(new V(o+.16,.12,o+.16),C.cityStone);l.position.y=.72,r.add(l);const c=new b(new V(o-.2,.1,o-.2),C.snow);c.position.y=.78,r.add(c);const h=K(new b(Zi[1],C.pineDark));h.position.y=1.6,h.scale.set(o*.38,1.7,o*.38),r.add(h);const u=new b(Ns[1],C.snow);u.position.y=2.12,u.scale.set(o*.28,.5,o*.28),r.add(u);const d=K(new b(Zi[2],C.pineDark));return d.position.y=2.42,d.scale.set(o*.25,1.25,o*.25),r.add(d),this.solid(e,n,o+.2,o+.2,2.8,s),r}newsBox(t={}){const{x:e=0,z:n=0,rot:s=0,color:o=9380905}=t,r=new Xt;r.position.set(e,0,n),r.rotation.y=s,this.add(r);const a=K(new b(new V(.92,1.05,.72),Uo(o)));a.position.y=.62,r.add(a);const l=K(new b(new V(.98,.26,.78),C.iron));l.position.y=1.2,r.add(l);const c=new b(new V(.62,.5,.04),C.glassWarm);c.position.set(0,.8,.38),r.add(c);const h=new b(new V(1,.08,.82),C.snow);h.position.y=1.38,r.add(h);for(const u of[-.34,.34]){const d=new b(new V(.08,.24,.08),C.iron);d.position.set(u,.12,0),r.add(d)}return this.solid(e,n,1,.82,1.4,s),r}busShelter(t={}){const{x:e=0,z:n=0,rot:s=0,w:o=5.2,d:r=2.1,label:a="NOEL"}=t,l=new Xt;l.position.set(e,0,n),l.rotation.y=s,this.add(l);for(const v of[-o/2+.12,o/2-.12])for(const x of[-r/2+.1,r/2-.1]){const T=K(new b(new V(.14,2.9,.14),C.iron));T.position.set(v,1.45,x),l.add(T)}const c=K(new b(new V(o+.5,.16,r+.5),C.iron));c.position.y=2.95,l.add(c);const h=new b(new V(o+.52,.1,r+.52),C.snow);h.position.y=3.06,l.add(h);const u=new b(new V(o-.3,2.3,.08),C.glassDark);u.position.set(0,1.4,-r/2+.1),l.add(u);const d=new b(new V(o-.2,.12,.16),C.iron);d.position.set(0,2.58,-r/2+.1),l.add(d);const f=new b(new V(.08,2.3,r-.3),C.glassDark);f.position.set(o/2-.12,1.4,0),l.add(f);const g=ta(a,"#ffe0ad",{width:512,height:720,font:"700 104px Georgia",glow:24}),_=new b(new rn(1.15,1.78),Pe({map:g,transparent:!0,toneMapped:!1,depthWrite:!1}));_.position.set(o/2-.18,1.62,0),_.rotation.y=Math.PI/2,l.add(_);const m=new b(new V(.12,2,1.36),C.iron);m.position.set(o/2-.26,1.62,0),l.add(m);const p=K(new b(new V(o-2,.12,.55),C.wood));p.position.set(-.2,.62,-r/2+.5),l.add(p);const w=new b(new V(o-2.05,.06,.52),C.snow);w.position.set(-.2,.71,-r/2+.5),l.add(w);for(const v of[-o/2+.9,o/2-2.1]){const x=new b(new V(.1,.55,.42),C.iron);x.position.set(v,.3,-r/2+.5),l.add(x)}return this.solid(e,n,o,r,3,s),l}steamVent(t={}){const{x:e=0,z:n=0,size:s=2.2,count:o=16}=t,r=K(new b(new V(s*.75,.07,s*.5),C.iron),!1);r.position.set(e,.056,n),this.add(r);for(let d=0;d<5;d++){const f=new b(new V(s*.62,.03,.1),C.coal);f.position.set(e,.09,n-s*.2+d*(s*.1)),this.add(f)}const a=new Float32Array(o*3),l=[];for(let d=0;d<o;d++)l.push({t:Math.random(),a:Math.random()*Math.PI*2,s:.09+Math.random()*.07});const c=new he;c.setAttribute("position",new Te(a,3));const h=new Si({map:Ut.smoke,size:3.2,transparent:!0,opacity:.16,depthWrite:!1,sizeAttenuation:!0}),u=new ji(c,h);u.frustumCulled=!1,this.add(u),this.animated.push(d=>{for(let f=0;f<o;f++){const g=l[f],_=(d*g.s+g.t)%1,m=.15+_*1.4;a[f*3]=e+Math.cos(g.a+_*2.2)*m+_*.7,a[f*3+1]=.1+_*6.5,a[f*3+2]=n+Math.sin(g.a+_*1.7)*m}c.attributes.position.needsUpdate=!0,h.opacity=.13+Math.sin(d*.7)*.03})}skyline(t={}){const{count:e=40,radius:n=205,minHeight:s=55,maxHeight:o=145}=t,r=oh(4242),a=[311,312,313],l=new Map;for(let c=0;c<e;c++){const h=c/e*Math.PI*2+r()*.06,u=n*(.82+r()*.5),d=Math.cos(h)*u,f=Math.sin(h)*u,g=12+r()*20,_=12+r()*18,m=s+Math.pow(r(),1.6)*(o-s),p=Math.floor(r()*a.length);l.has(p)||l.set(p,[]);const w=new V(g,m,_);w.translate(d,m/2,f),l.get(p).push(w)}for(const[c,h]of l){const u=mi(h,oa(a[c],1.6,3.4),!1);u&&(u.receiveShadow=!1,this.add(u))}}christmasTree(t={}){const{x:e=0,z:n=0,scale:s=1,bulbs:o=120,ornaments:r=46}=t,a=new Xt;a.position.set(e,0,n),a.scale.setScalar(s),this.add(a);const l=K(new b(new Mt(.32,.48,1.9,12),C.bark));l.position.y=.95,a.add(l);const c=K(new b(new Mt(.28,.66,.34,12),C.bark));c.position.y=.17,a.add(c);const h=new b(new Mt(1.02,1.24,.16,20),C.snow);h.position.y=.06,h.receiveShadow=!0,a.add(h);const u=5;for(let it=0;it<u;it++){const xt=it/(u-1),kt=3.5*(1-xt*.7),$=2.75*(1-xt*.25),rt=1.25+it*1.34,St=K(new b(Zi[it%Zi.length],C.pine));St.position.y=rt+$/2,St.scale.set(kt,$,kt),St.rotation.y=it*.6,a.add(St);const ht=new b(Ns[it%Ns.length],C.snow);ht.position.y=rt+$*.81,ht.scale.set(kt*.74,$*.22,kt*.74),ht.rotation.y=it*.6,ht.receiveShadow=!0,a.add(ht)}const d=new Re(rh,C.snow,54);for(let it=0;it<54;it++){const xt=Math.pow(Math.random(),.72)*.94,kt=1.52+xt*8.05,$=Math.max(.36,3.26*(1-xt))+.1,rt=Math.random()*Math.PI*2;lt.position.set(Math.cos(rt)*$,kt,Math.sin(rt)*$),lt.rotation.set(Math.random()*.5,Math.random()*Math.PI,Math.random()*.5),lt.scale.setScalar(.25+Math.random()*.45),lt.updateMatrix(),d.setMatrixAt(it,lt.matrix)}d.instanceMatrix.needsUpdate=!0,d.castShadow=!1,a.add(d);const f=new ee(.075,7,6),g=Pe({toneMapped:!1}),_=new Re(f,g,o),m=[16769184,16756838,14960956,8249487,16773319,16765802],p=[],w=[];for(let it=0;it<o;it++){const xt=it/(o-1),kt=1.55+xt*8.1,$=Math.max(.25,3.3*(1-xt))+.22,rt=xt*Math.PI*2*8.5;lt.position.set(Math.cos(rt)*$,kt,Math.sin(rt)*$),lt.scale.setScalar(.8+Math.sin(it*12.7)*.2+.2),lt.rotation.set(0,0,0),lt.updateMatrix(),_.setMatrixAt(it,lt.matrix),Ze.setHex(m[it%m.length]),_.setColorAt(it,Ze),p.push(new z(lt.position.x,kt,lt.position.z)),w.push(Ze.clone())}_.instanceMatrix.needsUpdate=!0,_.instanceColor&&(_.instanceColor.needsUpdate=!0),a.add(_);const v=[];for(let it=0;it<=220;it++){const xt=it/220,kt=1.55+xt*8.1,$=Math.max(.25,3.3*(1-xt))+.22,rt=xt*Math.PI*2*8.5;v.push(new z(Math.cos(rt)*$*.985,kt,Math.sin(rt)*$*.985))}const x=new b(new Gs(new Go(v),220,.013,4,!1),Bt({color:1450009,roughness:.82,metalness:.08}));x.castShadow=!1,a.add(x);const T=new he,P=new Float32Array(o*3),A=new Float32Array(o*3);p.forEach((it,xt)=>{P[xt*3]=it.x,P[xt*3+1]=it.y,P[xt*3+2]=it.z,A[xt*3]=w[xt].r,A[xt*3+1]=w[xt].g,A[xt*3+2]=w[xt].b}),T.setAttribute("position",new Te(P,3)),T.setAttribute("color",new Te(A,3));const R=new Si({map:Ut.glow,color:16777215,size:.52,transparent:!0,opacity:.4,depthWrite:!1,alphaTest:.01,vertexColors:!0,sizeAttenuation:!0,blending:qe,toneMapped:!1}),y=new ji(T,R);y.frustumCulled=!1,a.add(y);const M=new ee(.14,9,7),I=Bt({metalness:.55,roughness:.24}),N=new Re(M,I,r),U=new Re(new Mt(.035,.046,.065,6),C.gold,r),F=[11739178,14068047,2976582,15261906,9117002];for(let it=0;it<r;it++){const xt=Math.pow(Math.random(),.7)*.9,kt=1.7+xt*7.4,$=Math.max(.4,3.15*(1-xt))+.18,rt=Math.random()*Math.PI*2,St=.8+Math.random()*.6;lt.position.set(Math.cos(rt)*$,kt,Math.sin(rt)*$),lt.scale.setScalar(St),lt.rotation.set(0,0,0),lt.updateMatrix(),N.setMatrixAt(it,lt.matrix),Ze.setHex(F[it%F.length]),N.setColorAt(it,Ze),lt.position.y=kt+.145*St,lt.scale.set(.9,1,.9),lt.rotation.y=Math.random()*Math.PI,lt.updateMatrix(),U.setMatrixAt(it,lt.matrix)}N.instanceMatrix.needsUpdate=!0,N.instanceColor&&(N.instanceColor.needsUpdate=!0),U.instanceMatrix.needsUpdate=!0,a.add(N,U);const G=new b(new rs(.46,0),Pe({color:16769953,toneMapped:!1}));G.position.y=10.2,G.scale.y=1.35,a.add(G);const H=new Ue(on(16769704,.9));H.scale.set(3.2,3.2,1),H.position.y=10.2,a.add(H);const J=new Ue(on(16766874,.3));J.scale.set(10,10,1),J.position.y=10.2,a.add(J);const q=new Mn(16761478,46,32,2);q.position.set(0,4.4,0),a.add(q);const pt=new Mn(16756842,15,16,2);pt.position.set(0,2.2,0),a.add(pt);const gt=Math.random()*10;return this.animated.push(it=>{const xt=Math.sin(it*1.7+gt)*.5+Math.sin(it*4.1+gt*.7)*.5;R.opacity=.34+xt*.055,J.material.opacity=.24+Math.max(0,Math.sin(it*1.4+gt))*.12,H.material.opacity=.76+Math.max(0,Math.sin(it*2.2+gt))*.18,q.intensity=44+xt*2.5}),this.solid(e,n,1.6,1.6,10),a}pines(t,e={}){const{minScale:n=.75,maxScale:s=1.45,base:o=1}=e,r=t.length;if(!r)return;const a=[{y:2.42,r:1.98,h:3.02},{y:3.68,r:1.56,h:2.75},{y:4.76,r:1.13,h:2.32},{y:5.68,r:.7,h:1.86}],l=8,c=5,h=a.map((v,x)=>{const T=new Re(Zi[x%Zi.length],C.pine,r);return T.castShadow=!0,T.receiveShadow=!0,this.add(T),T}),u=a.map((v,x)=>{const T=new Re(Ns[x%Ns.length],C.snow,r);return T.receiveShadow=!0,this.add(T),T}),d=new Re(hu,C.pineDark,r*a.length*l);d.receiveShadow=!0,d.castShadow=!1,this.add(d);const f=new Re(rh,C.snow,r*a.length*c);f.receiveShadow=!0,f.castShadow=!1,this.add(f);const g=new Re(new Mt(.14,.3,2.5,12),C.bark,r);g.castShadow=!0,g.receiveShadow=!0,this.add(g);const _=new Re(Jx,C.bark,r);_.castShadow=!0,_.receiveShadow=!0,this.add(_);const m=new Re(jx,C.snow,r);m.receiveShadow=!0,this.add(m);let p=0,w=0;t.forEach((v,x)=>{const T=(v.s??n+x*37%100/100*(s-n))*o,P=x*73%360*(Math.PI/180),A=.88+x*17%100/100*.22;a.forEach((R,y)=>{const M=.8+y*.055;Ze.setRGB(A*.78*M,A*M,A*.84*M),lt.position.set(v.x,R.y*T,v.z),lt.rotation.set(0,P+y*.37,0),lt.scale.set(R.r*T,R.h*T,R.r*T),lt.updateMatrix(),h[y].setMatrixAt(x,lt.matrix),h[y].setColorAt(x,Ze),lt.position.set(v.x,(R.y+R.h*.3)*T,v.z),lt.rotation.set(0,P+y*.37,0),lt.scale.set(R.r*.73*T,R.h*.22*T,R.r*.73*T),lt.updateMatrix(),u[y].setMatrixAt(x,lt.matrix);for(let I=0;I<l;I++){const N=P+y*.37+I/l*Math.PI*2+Math.sin(x*2.3+I*1.7)*.1,U=R.r*T*(.91+Math.sin(x+I*2.1)*.05),F=(R.y-R.h*.45)*T;lt.position.set(v.x+Math.cos(N)*U,F,v.z+Math.sin(N)*U),ah.set(Math.cos(N),-.32-Math.sin(x+I)*.06,Math.sin(N)).normalize(),lh.setFromUnitVectors(Qx,ah),lt.quaternion.copy(lh),lt.scale.setScalar(T*(.74+(x+I*3)%5*.055)),lt.updateMatrix(),d.setMatrixAt(p,lt.matrix),Ze.setRGB(A*.62*M,A*.8*M,A*.66*M),d.setColorAt(p,Ze),p++}for(let I=0;I<c;I++){const N=P+I/c*Math.PI*2+y*.71,U=R.r*T*(.48+(x+I)%4*.08);lt.position.set(v.x+Math.cos(N)*U,(R.y+R.h*(.08+(x+I)%3*.07))*T,v.z+Math.sin(N)*U),lt.rotation.set(0,N,0),lt.scale.setScalar(T*(.42+(x*2+I)%5*.07)),lt.updateMatrix(),f.setMatrixAt(w,lt.matrix),w++}}),lt.position.set(v.x,1.2*T,v.z),lt.rotation.set(0,P,0),lt.quaternion.setFromEuler(lt.rotation),lt.scale.set(T,T,T),lt.updateMatrix(),g.setMatrixAt(x,lt.matrix),lt.position.set(v.x,.25*T,v.z),lt.rotation.set(0,P,0),lt.quaternion.setFromEuler(lt.rotation),lt.scale.set(T,T,T),lt.updateMatrix(),_.setMatrixAt(x,lt.matrix),lt.position.set(v.x,.1*T,v.z),lt.rotation.set(0,P,0),lt.quaternion.setFromEuler(lt.rotation),lt.scale.set(T,T,T),lt.updateMatrix(),m.setMatrixAt(x,lt.matrix),this.solid(v.x,v.z,.9*T,.9*T,4)}),h.forEach(v=>{v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0)}),u.forEach(v=>{v.instanceMatrix.needsUpdate=!0}),d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),f.instanceMatrix.needsUpdate=!0,g.instanceMatrix.needsUpdate=!0,_.instanceMatrix.needsUpdate=!0,m.instanceMatrix.needsUpdate=!0}stall(t={}){const{x:e=0,z:n=0,rot:s=0,canopy:o=C.stallRed,light:r=!0}=t,a=new Xt;a.position.set(e,0,n),a.rotation.y=s,this.add(a);for(const g of[-1.7,1.7])for(const _ of[-1.1,1.1]){const m=K(new b(new V(.14,2.5,.14),C.woodDark));m.position.set(g,1.25,_),a.add(m)}const l=K(new b(new V(3.9,.18,2.7),o));l.position.y=2.55,l.rotation.z=.035,a.add(l);const c=K(new b(new V(3.95,.18,2.78),C.woodDark),!1);c.position.y=2.45,a.add(c);const h=K(new b(new V(3.5,.95,.85),C.wood));h.position.set(0,.48,.95),a.add(h);const u=K(new b(new V(3.5,1.5,.35),C.wood));u.position.set(0,1.2,-1.18),a.add(u);const d=[9379624,2052404,12821066,2966120];for(let g=0;g<5;g++){const _=-1.25+g*.62,m=.28+g%3*.09,p=K(new b(new V(m,m,m),Uo(d[g%4])),!1);p.position.set(_,1+m/2,.95),a.add(p);const w=new b(new V(m*.18,m*1.02,m*1.02),C.gold);w.position.copy(p.position),a.add(w)}for(let g=0;g<9;g++){const _=new b(new ee(.055,5,4),Pe({color:g%2?16760952:16770736,toneMapped:!1}));_.position.set(-1.8+g*.45,2.34,1.42),a.add(_)}const f=new b(new V(.22,.34,.22),C.lampGlass);if(f.position.set(0,2.05,1.35),a.add(f),r){const g=new Mn(16756838,12,8,2);g.position.set(0,2.1,1.9),a.add(g)}return this.solid(e,n,3.9,2.8,2.6,s),a}lamp(t={}){const{x:e=0,z:n=0,rot:s=0,color:o=16760954,light:r=!1,glow:a=!0}=t,l=new Xt;l.position.set(e,0,n),l.rotation.y=s,this.add(l);const c=r===!0,h=new Wt(o),u=K(new b(new Mt(.4,.45,.09,12),C.iron));u.position.y=.045,l.add(u);const d=K(new b(new Mt(.27,.34,.38,12),C.iron));d.position.y=.25,l.add(d);const f=K(new b(new an(.265,.032,6,16),C.brass));f.rotation.x=Math.PI/2,f.position.y=.43,l.add(f);const g=new b(new Mt(.43,.5,.055,14),C.snow);g.position.y=.035,g.receiveShadow=!0,l.add(g);const _=K(new b(new Mt(.06,.095,5.15,12),C.iron));_.position.y=2.85,l.add(_);for(const F of[.55,2.1,4.2,5.4]){const G=K(new b(new Mt(.1,.11,.07,12),C.brass),!1);G.position.y=F,l.add(G)}const m=new Go([new z(0,5.4,0),new z(.08,5.54,0),new z(.34,5.61,0),new z(.65,5.53,0),new z(.86,5.31,0),new z(.95,5.12,0)]),p=K(new b(new Gs(m,18,.045,7,!1),C.iron));l.add(p);const w=K(new b(new V(.48,.045,.045),C.iron));w.position.set(.3,5.17,0),w.rotation.z=-.55,l.add(w);const v=new b(new V(.58,.055,.1),C.snow);v.position.set(.42,5.52,0),v.rotation.z=-.17,v.receiveShadow=!0,l.add(v);const x=.95,T=4.82,P=new b(new Mt(.21,.25,.58,6),c?C.lampGlass:C.lampGlassOff);P.position.set(x,T,0),l.add(P);for(let F=0;F<6;F++){const G=F/6*Math.PI*2,H=K(new b(new V(.028,.64,.028),C.iron),!1);H.position.set(x+Math.cos(G)*.245,T,Math.sin(G)*.245),l.add(H)}for(const F of[T-.31,T+.31]){const G=K(new b(new Mt(.29,.29,.065,6),C.iron));G.position.set(x,F,0),l.add(G)}const A=K(new b(new Me(.36,.22,6),C.iron));A.position.set(x,T+.42,0),l.add(A);const R=new b(new Me(.3,.14,6),C.snow);R.position.set(x,T+.48,0),R.receiveShadow=!0,l.add(R);const y=K(new b(new Me(.06,.2,6),C.brass));y.position.set(x,T+.59,0),l.add(y);for(let F=0;F<4;F++){const G=new b(new Me(.035+F%2*.012,.22+F%3*.08,5),C.ice);G.position.set(x-.16+F*.11,T-.44,.05-F%2*.1),G.rotation.x=Math.PI,l.add(G)}const M=[];if(a&&c){const F=new Ue(on(o,.86));F.scale.set(1.5,1.5,1),F.position.set(x,T+.02,0),l.add(F),M.push(F);const G=new Ue(on(o,.3));G.scale.set(5.1,5.1,1),G.position.set(x,T,0),l.add(G),M.push(G)}let I=null,N=null,U=null;if(c){I=new Mn(o,42,22,2),I.position.set(x,T+.08,0),l.add(I);const F=new Se({color:o,transparent:!0,opacity:.03,blending:qe,side:Ke,depthWrite:!1,toneMapped:!1});U=new b(new Me(1.9,4.55,18,1,!0),F),U.position.set(x,T-2.27,0),U.renderOrder=2,l.add(U);const G=new Se({map:Ut.glow,color:h,transparent:!0,opacity:.18,blending:qe,depthWrite:!1,toneMapped:!1});N=new b(new rn(6.2,6.2),G),N.rotation.x=-Math.PI/2,N.position.set(x,.048,0),N.renderOrder=1,l.add(N)}if(c&&I){const F=Math.random()*10;this.animated.push(G=>{const H=.94+Math.sin(G*2.1+F)*.035+Math.sin(G*7.7+F*1.3)*.016;I.intensity=42*H,M[0]&&(M[0].material.opacity=.86*H),M[1]&&(M[1].material.opacity=.3*H),N&&(N.material.opacity=.18*H)})}return this.solid(e,n,.5,.5,5.7),l}snowBanks(t=44){const e=[{x:0,z:t,w:t*2+4,d:4},{x:0,z:-t,w:t*2+4,d:4},{x:t,z:0,w:4,d:t*2+4},{x:-t,z:0,w:4,d:t*2+4}];for(const n of e){const s=K(new b(new V(n.w,1.5,n.d),C.snow));s.position.set(n.x,.45,n.z),this.add(s);const o=K(new b(new V(n.w*.98,.8,n.d*.65),C.snow),!1);o.position.set(n.x,1.15,n.z),this.add(o),this.solid(n.x,n.z,n.w,n.d,2)}}snowman(t={}){const{x:e=0,z:n=0,rot:s=0,scale:o=1}=t,r=new Xt;r.position.set(e,0,n),r.rotation.y=s,r.scale.setScalar(o),this.add(r);const a=K(new b(new ee(.58,16,12),C.snow));a.position.y=.56,r.add(a);const l=K(new b(new ee(.4,16,12),C.snow));l.position.y=1.35,r.add(l);const c=K(new b(new ee(.29,16,12),C.snow));c.position.y=1.95,r.add(c);for(const g of[-.1,.1]){const _=new b(new ee(.033,6,5),C.coal);_.position.set(g,2.03,.26),r.add(_)}for(let g=0;g<3;g++){const _=new b(new ee(.035,6,5),C.coal);_.position.set(0,1.5-g*.18,.38-g*.02),r.add(_)}const h=K(new b(new Me(.06,.32,7),C.carrot));h.position.set(0,1.94,.42),h.rotation.x=Math.PI/2,r.add(h);const u=K(new b(new Mt(.34,.34,.06,14),C.coal));u.position.y=2.2,r.add(u);const d=K(new b(new Mt(.23,.23,.4,14),C.coal));d.position.y=2.42,r.add(d);const f=new b(new an(.27,.07,8,16),C.fabricRed);f.position.y=1.68,f.rotation.x=Math.PI/2,r.add(f);for(const g of[-1,1]){const _=K(new b(new Mt(.03,.03,.95,5),C.woodDark));_.position.set(g*.62,1.5,0),_.rotation.z=g*1.15,r.add(_)}return this.solid(e,n,1.1*o,1.1*o,2),r}gift(t={}){const{x:e=0,z:n=0,y:s=0,size:o=.7,color:r=9642795,rot:a=0,collide:l=!1}=t,c=new Xt;c.position.set(e,s,n),c.rotation.y=a,this.add(c);const h=K(new b(new V(o,o,o),Uo(r)));h.position.y=o/2,c.add(h);const u=K(new b(new V(o*.16,o*1.01,o*1.01),C.gold),!1);u.position.y=o/2;const d=K(new b(new V(o*1.01,o*1.01,o*.16),C.gold),!1);return d.position.y=o/2,c.add(u,d),l&&this.solid(e,n,o,o,o,a),c}bench(t={}){const{x:e=0,z:n=0,rot:s=0}=t,o=new Xt;o.position.set(e,0,n),o.rotation.y=s,this.add(o);for(const c of[-.65,.65]){const h=K(new b(new V(.1,.55,.48),C.iron));h.position.set(c,.27,0),o.add(h)}const r=K(new b(new V(1.7,.12,.55),C.wood));r.position.y=.58,o.add(r);const a=K(new b(new V(1.7,.12,.5),C.wood));a.position.set(0,.98,-.3),a.rotation.x=-.2,o.add(a);const l=new b(new V(1.68,.08,.52),C.snow);return l.position.y=.68,o.add(l),this.solid(e,n,1.9,.9,1.2,s),o}hedge(t={}){const{x:e=0,z:n=0,w:s=2,d:o=7,h:r=1.7,rot:a=0}=t,l=new Xt;l.position.set(e,0,n),l.rotation.y=a,this.add(l);const c=K(new b(new V(s,r,o),C.pineDark));c.position.y=r/2,l.add(c);const h=new b(new V(s*.95,.14,o*.98),C.snow);return h.position.y=r+.02,l.add(h),this.solid(e,n,s,o,r,a),l}ironFence(t,e,n,s,o={}){const{height:r=2.4,colorMat:a=C.iron}=o,l=n-t,c=s-e,h=Math.hypot(l,c),u=(t+n)/2,d=(e+s)/2,f=Math.atan2(-c,l),g=new Xt;g.position.set(u,0,d),g.rotation.y=f,this.add(g);const _=K(new b(new V(h,.35,.36),C.stoneWall));_.position.y=.17,g.add(_);const m=Math.max(2,Math.floor(h/.32)),p=new Mt(.032,.032,r,6),w=new Re(p,a,m);w.castShadow=!0;for(let y=0;y<m;y++)lt.position.set(-h/2+(y+.5)*(h/m),r/2+.3,0),lt.rotation.set(0,0,0),lt.scale.set(1,1,1),lt.updateMatrix(),w.setMatrixAt(y,lt.matrix);w.instanceMatrix.needsUpdate=!0,g.add(w);for(const y of[r*.22+.3,r*.78+.3]){const M=K(new b(new V(h,.06,.07),a));M.position.set(0,y,0),g.add(M)}const v=new Me(.06,.22,5),x=new Re(v,a,m);for(let y=0;y<m;y++)lt.position.set(-h/2+(y+.5)*(h/m),r+.42,0),lt.updateMatrix(),x.setMatrixAt(y,lt.matrix);x.instanceMatrix.needsUpdate=!0,g.add(x);const T=Math.min(t,n)-.25,P=Math.max(t,n)+.25,A=Math.min(e,s)-.25,R=Math.max(e,s)+.25;return this.colliders.push({minX:T,maxX:P,minZ:A,maxZ:R,height:r+.5}),g}fountain(t={}){const{x:e=0,z:n=0}=t,s=new Xt;s.position.set(e,0,n),this.add(s);const o=K(new b(new Mt(4.1,4.3,.7,32),C.stoneWall));o.position.y=.35,s.add(o);const r=K(new b(new an(3.9,.32,10,40),C.stoneWall));r.rotation.x=Math.PI/2,r.position.y=.7,s.add(r);const a=new b(new bn(3.75,48),C.ice);a.rotation.x=-Math.PI/2,a.position.y=.71,a.receiveShadow=!0,s.add(a);const l=K(new b(new Mt(.55,.8,1.6,12),C.stoneWall));l.position.y=1.4,s.add(l);const c=K(new b(new os(1.1,0),C.ice));c.position.y=3.1,c.rotation.set(.4,.8,.2),s.add(c);const h=new b(new Mt(4.05,4.12,.08,32),C.snow);h.position.y=.74,s.add(h);const u=new Mn(10473727,12,12,2);return u.position.set(0,2.6,0),s.add(u),this.solid(e,n,8.6,8.6,3),s}iceSculpture(t={}){const{x:e=0,z:n=0,scale:s=1}=t,o=new Xt;o.position.set(e,0,n),o.scale.setScalar(s),this.add(o);const r=K(new b(new V(1.4,1,1.4),C.stoneWall));r.position.y=.5,o.add(r);const a=K(new b(new rs(.8,0),C.ice));a.position.y=2,a.rotation.set(.3,.5,.15),a.scale.set(.8,1.9,.8),o.add(a);const l=K(new b(new rs(.5,0),C.ice));l.position.set(.7,2.6,-.2),l.rotation.z=.3,l.scale.set(.6,1.7,.6),o.add(l);const c=new b(new Mt(1.6,1.8,.14,12),C.snow);return c.position.y=.04,o.add(c),this.solid(e,n,1.6*s,1.6*s,3),o}car(t={}){const{x:e=0,z:n=0,rot:s=0,color:o=2767434,collide:r=!0,headlights:a=!0}=t,l=new Xt;l.position.set(e,0,n),l.rotation.y=s,this.add(l);const c=Bt({color:o,metalness:.62,roughness:.26,envMapIntensity:1.25}),h=Bt({color:1316893,metalness:.55,roughness:.42}),u=new Ve({color:723982,roughness:.96}),d=Bt({color:12108493,metalness:.92,roughness:.22}),f=K(new b(new V(1.9,.42,4.18),c));f.position.y=.61,l.add(f);const g=K(new b(new V(1.82,.24,.78),c));g.position.set(0,.87,1.64),l.add(g);const _=K(new b(new V(1.8,.2,.72),c));_.position.set(0,.86,-1.64),l.add(_);const m=K(new b(new V(1.62,.58,1.86),C.glassDark));m.position.set(0,1.16,-.08),l.add(m);const p=K(new b(new V(1.6,.11,1.74),c));p.position.set(0,1.5,-.08),l.add(p);const w=K(new b(new V(1.47,.46,.055),C.glassDark));w.position.set(0,1.16,.88),w.rotation.x=-.34,l.add(w);const v=K(new b(new V(1.44,.42,.055),C.glassDark));v.position.set(0,1.17,-1.02),v.rotation.x=.34,l.add(v);for(const I of[-1,1]){const N=K(new b(new V(.06,.5,.08),c));N.position.set(I*.8,1.17,-.08),l.add(N);const U=K(new b(new V(.18,.09,.07),h));U.position.set(I*1.02,1.08,.72),l.add(U)}for(const I of[-1,1])for(const N of[-1.36,1.36]){const U=K(new b(new Mt(.35,.35,.24,18),u));U.rotation.z=Math.PI/2,U.position.set(I*.93,.36,N),l.add(U);const F=new b(new Mt(.195,.195,.255,12),d);F.rotation.z=Math.PI/2,F.position.set(I*.94,.36,N),l.add(F)}const x=K(new b(new V(1.96,.16,.2),h));x.position.set(0,.42,2.13),l.add(x);const T=K(new b(new V(1.94,.15,.18),h));T.position.set(0,.43,-2.13),l.add(T);const P=new b(new V(1.04,.2,.075),new Ve({color:1053720,metalness:.65,roughness:.34}));P.position.set(0,.66,2.13),l.add(P);const A=new b(new V(.52,.14,.03),new Se({color:13226169}));A.position.set(0,.48,2.23),l.add(A);for(const I of[-.66,.66]){const N=new b(new V(.32,.14,.06),C.headlight);N.position.set(I,.79,2.2),l.add(N);const U=new b(new V(.3,.12,.06),C.taillight);if(U.position.set(I,.81,-2.2),l.add(U),a){const F=new Ue(on(16769967,.5));F.scale.set(.92,.92,1),F.position.set(I,.79,2.28),l.add(F)}}const R=K(new b(new V(1.57,.11,1.7),C.snow),!1);R.position.set(0,1.58,-.08),l.add(R);const y=K(new b(new V(1.72,.08,.74),C.snow),!1);y.position.set(0,.99,1.62),l.add(y);const M=K(new b(new V(1.7,.07,.62),C.snow),!1);return M.position.set(0,.97,-1.62),l.add(M),r&&this.solid(e,n,2.1,4.45,1.9,s),l}movingCar(t={}){const{axis:e="z",lane:n=6,start:s=0,min:o=-110,max:r=110,speed:a=8,dir:l=1,color:c=2767434}=t,h=e==="z"?l>0?0:Math.PI:l>0?Math.PI/2:-Math.PI/2,d={group:this.car({x:e==="z"?n:s,z:e==="z"?s:n,rot:h,color:c,collide:!1,headlights:!0}),axis:e,lane:n,pos:s,min:o,max:r,speed:a,dir:l,cooldown:0};return this.traffic.push(d),d}crosswalk(t={}){const{x:e=0,z:n=0,rot:s=0}=t,o=new Xt;o.position.set(e,0,n),o.rotation.y=s,this.add(o);for(let r=-3;r<=3;r++){const a=new b(new V(.46,.02,3.8),C.roadLine);a.position.set(r*1,.038,0),a.receiveShadow=!0,o.add(a)}return o}trafficLight(t={}){const{x:e=0,z:n=0,rot:s=0}=t,o=new Xt;o.position.set(e,0,n),o.rotation.y=s,this.add(o);const r=K(new b(new Mt(.09,.12,4.8,10),C.iron));r.position.y=2.4,o.add(r);const a=K(new b(new V(1.6,.12,.12),C.iron));a.position.set(.72,4.55,0),o.add(a);const l=K(new b(new V(.56,1.2,.055),C.iron));l.position.set(1.4,4.25,-.2),o.add(l);const c=K(new b(new V(.42,1.05,.36),C.iron));c.position.set(1.4,4.25,0),o.add(c);const h=[16731194,16757578,6160284],u=[4.55,4.25,3.95],d=[],f=[];h.forEach((m,p)=>{const w=new b(new ee(.1,10,8),new Se({color:m,toneMapped:!1}));w.position.set(1.4,u[p],.2),o.add(w),d.push(w);const v=new b(new an(.13,.022,5,14),C.iron);v.position.set(1.4,u[p],.22),o.add(v);const x=new Ue(on(m,.78));x.scale.set(.82,.82,1),x.position.set(1.4,u[p],.34),o.add(x),f.push(x)});const g=new b(new V(.48,.06,.4),C.snow);g.position.set(1.4,4.8,0),g.receiveShadow=!0,o.add(g);const _=Math.random();return this.animated.push(m=>{const p=(m*.17+_)%1,w=[p<.44,p>=.44&&p<.57,p>=.57];d.forEach((v,x)=>{v.visible=w[x],f[x].visible=w[x]})}),this.solid(e,n,.5,.5,4.8),o}hydrant(t={}){const{x:e=0,z:n=0,rot:s=0}=t,o=new Xt;o.position.set(e,0,n),o.rotation.y=s,this.add(o);const r=K(new b(new Mt(.2,.25,.22,10),C.hydrantRed));r.position.y=.11,o.add(r);const a=K(new b(new Mt(.15,.18,.56,10),C.hydrantRed));a.position.y=.5,o.add(a);const l=K(new b(new ee(.16,10,7),C.hydrantRed));l.position.y=.84,o.add(l);for(const c of[-1,1]){const h=K(new b(new Mt(.07,.08,.18,8),C.metal));h.rotation.z=Math.PI/2,h.position.set(c*.2,.58,0),o.add(h)}return this.solid(e,n,.5,.5,1),o}neon(t={}){const{x:e=0,y:n=4,z:s=0,rot:o=0,text:r="NOEL",color:a="#ffb46a",width:l=5}=t,c=l/3.2,h=ta(r,a),u=new Xt;u.position.set(e,n,s),u.rotation.y=o,this.add(u);const d=K(new b(new V(l+.4,c+.35,.12),C.iron),!1);u.add(d);const f=new b(new rn(l,c),Pe({map:h,transparent:!0,toneMapped:!1,depthWrite:!1,side:Ke}));f.position.z=.08,u.add(f);const g=new Ue(on(new Wt(a).getHex(),.28));return g.scale.set(l*1.1,c*2.4,1),g.position.z=.4,u.add(g),u}candyCane(t={}){const{x:e=0,z:n=0,scale:s=1,rot:o=0}=t,r=new Go([new z(0,0,0),new z(0,2.4,0),new z(0,4.7,0),new z(-.15,5.6,0),new z(-.85,5.9,0),new z(-1.55,5.55,0),new z(-1.75,4.9,0)]),a=K(new b(new Gs(r,48,.26,10,!1),C.candy));a.position.set(e,0,n),a.rotation.y=o,a.scale.setScalar(s),this.add(a);const l=new b(new Mt(.4,.5,.14,10),C.snow);return l.position.set(e,.06,n),l.scale.setScalar(s),this.add(l),this.solid(e,n,.9*s,.9*s,5),a}bonfire(t={}){const{x:e=0,z:n=0}=t,s=new Xt;s.position.set(e,0,n),this.add(s);for(let f=0;f<14;f++){const g=f/14*Math.PI*2,_=K(new b(new Tl(.32,0),C.stoneWall));_.position.set(Math.cos(g)*1.3,.2,Math.sin(g)*1.3),_.scale.set(1,.7,1),_.rotation.set(f,f*2,f),s.add(_)}for(let f=0;f<5;f++){const g=K(new b(new Mt(.16,.18,1.8,7),C.woodDark));g.rotation.z=Math.PI/2,g.rotation.y=f/5*Math.PI,g.position.y=.42,s.add(g)}const o=[];for(let f=0;f<4;f++){const g=new Me(.45-f*.07,1.5+f*.25,7),_=new b(g,f<2?C.flame:C.flameCore);_.position.set((f-1.5)*.18,1+f*.18,f%2*.14),s.add(_),o.push(_)}const r=new Mn(16747066,46,20,2);r.position.set(0,2.2,0),s.add(r);const a=new Ue(on(16750152,.7));a.scale.set(6,5,1),a.position.y=1.7,s.add(a);const l=30,c=new he,h=new Float32Array(l*3),u=[];for(let f=0;f<l;f++)u.push({t:Math.random(),speed:.3+Math.random()*.5,a:Math.random()*Math.PI*2});c.setAttribute("position",new Te(h,3));const d=new ji(c,new Si({color:16755548,size:.08,transparent:!0,opacity:.9,depthWrite:!1}));return s.add(d),this.animated.push(f=>{r.intensity=42+Math.sin(f*11.3)*7+Math.sin(f*23.7)*4,o.forEach((g,_)=>{const m=.82+Math.sin(f*(9+_*2.4)+_)*.18;g.scale.set(m,.9+Math.sin(f*(7+_)+_)*.16,m),g.rotation.y=f*(.6+_*.4)});for(let g=0;g<l;g++){const _=u[g],m=(f*_.speed+_.t)%1;h[g*3]=Math.cos(_.a+m*2)*(.4+m*1.2),h[g*3+1]=.9+m*5,h[g*3+2]=Math.sin(_.a+m*2)*(.4+m*1.2)}c.attributes.position.needsUpdate=!0}),this.solid(e,n,3,3,2),s}torch(t={}){const{x:e=0,z:n=0,y:s=2.3,rot:o=0}=t,r=new Xt;r.position.set(e,0,n),r.rotation.y=o,this.add(r);const a=K(new b(new Mt(.07,.09,s+.6,6),C.iron));a.position.y=(s+.6)/2,r.add(a);const l=K(new b(new Mt(.38,.2,.32,8),C.iron));l.position.y=s+.3,r.add(l);const c=new b(new Me(.3,.9,7),C.flame);c.position.y=s+.85,r.add(c);const h=new b(new Me(.14,.5,6),C.flameCore);h.position.y=s+.75,r.add(h);const u=new Mn(16749896,22,17,2);u.position.y=s+1.1,r.add(u);const d=new Ue(on(16752468,.55));d.scale.set(3.4,3.4,1),d.position.y=s+1,r.add(d);const f=Math.random()*10;return this.animated.push(g=>{u.intensity=20+Math.sin(g*12+f)*5,c.scale.y=.86+Math.sin(g*9+f)*.14,c.rotation.y=g*.8}),this.solid(e,n,.6,.6,2),r}statue(t={}){const{x:e=0,z:n=0,rot:s=0,scale:o=1}=t,r=new Xt;r.position.set(e,0,n),r.rotation.y=s,r.scale.setScalar(o),this.add(r);const a=K(new b(new Mt(1.15,1.35,1.2,8),C.stoneWall));a.position.y=.6,r.add(a);const l=K(new b(new Me(.9,3,8),C.statueStone));l.position.y=2.7,r.add(l);const c=K(new b(new Mt(.38,.48,1.1,8),C.statueStone));c.position.y=3.7,r.add(c);const h=K(new b(new ee(.36,12,10),C.statueStone));h.position.y=4.55,r.add(h);for(const d of[-1,1]){const f=K(new b(new Me(.12,.9,6),C.statueStone));f.position.set(d*.26,5.05,0),f.rotation.z=-d*.5,r.add(f);const g=K(new b(new Mt(.11,.13,1.5,6),C.statueStone));g.position.set(d*.72,3.4,.2),g.rotation.z=d*.55,r.add(g)}const u=new b(new Mt(1.25,1.35,.14,10),C.snow);return u.position.y=1.2,r.add(u),this.solid(e,n,2.2,2.2,4),r}deadTree(t={}){const{x:e=0,z:n=0,scale:s=1}=t,o=new Xt;o.position.set(e,0,n),o.scale.setScalar(s),this.add(o);const r=K(new b(new Mt(.2,.42,5.2,10),C.bark));r.position.y=2.6,o.add(r);const a=[{y:2,a:.9,len:2.1},{y:2.8,a:2.5,len:1.8},{y:3.5,a:4.6,len:1.6},{y:4.2,a:5.8,len:1.2},{y:4.6,a:1.9,len:1}];for(const l of a){const c=K(new b(new Mt(.045,.12,l.len,6),C.bark));c.position.set(Math.cos(l.a)*l.len*.35,l.y,Math.sin(l.a)*l.len*.35),c.rotation.z=1.2,c.rotation.y=l.a,o.add(c)}return this.solid(e,n,.9*s,.9*s,5),o}conveyor(t={}){const{x:e=0,z:n=0,length:s=24,rot:o=0}=t,r=new Xt;r.position.set(e,0,n),r.rotation.y=o,this.add(r);const a=K(new b(new V(s,.75,1.8),C.metal));a.position.y=.42,r.add(a);const l=new b(new V(s-.4,.08,1.45),C.coal);l.position.y=.84,l.receiveShadow=!0,r.add(l);for(const g of[-s*.4,s*.4]){const _=K(new b(new V(.3,.55,1.6),C.iron));_.position.set(g,.22,0),r.add(_)}const c=new Mt(.1,.1,1.5,8),h=Math.floor(s/1.4),u=new Re(c,C.iron,h);for(let g=0;g<h;g++)lt.position.set(-s/2+.9+g*1.4,.79,0),lt.rotation.set(Math.PI/2,0,0),lt.scale.set(1,1,1),lt.updateMatrix(),u.setMatrixAt(g,lt.matrix);u.instanceMatrix.needsUpdate=!0,r.add(u);const d=[],f=[9379624,2052404,12821066,2966120,7085640];for(let g=0;g<4;g++){const _=.55+g%2*.22,m=new Xt,p=K(new b(new V(_,_,_),Uo(f[g])),!1);p.position.y=_/2,m.add(p);const w=new b(new V(_*.18,_*1.02,_*1.02),C.gold);w.position.y=_/2,m.add(w),m.position.set(-s/2+2+g*4.5,.87,0),r.add(m),d.push({group:m,offset:g*4.5})}return this.animated.push(g=>{d.forEach(_=>{const m=(g*.9+_.offset)%(s-2)-(s-2)/2;_.group.position.x=m})}),this.solid(e,n,s,2.2,1.2,o),r}smokestack(t={}){const{x:e=0,z:n=0,height:s=16,radius:o=1.1}=t,r=new Xt;r.position.set(e,0,n),this.add(r);const a=K(new b(new Mt(o*.75,o,s,16),C.brick));a.position.y=s/2,r.add(a);for(let d=1;d<4;d++){const f=K(new b(new Mt(o*(1-d*.05),o*(1-d*.05)+.04,.3,16),C.iron));f.position.y=s/4*d,r.add(f)}const l=new b(new ee(.18,8,6),Pe({color:16726570,toneMapped:!1}));l.position.y=s+.2,r.add(l);const c=new Ue(on(16726570,.6));c.scale.set(3,3,1),c.position.y=s+.2,r.add(c);const h=[];for(let d=0;d<9;d++){const f=Kx(),g=new Ue(f);g.position.set(0,s+.5,0),r.add(g),h.push({sprite:g,offset:d/9})}const u=Math.random()*10;return this.animated.push(d=>{c.material.opacity=.3+Math.max(0,Math.sin(d*2.4+u))*.5,h.forEach(f=>{const g=(d*.07+f.offset)%1;f.sprite.position.set(Math.sin(d+f.offset*8)*g*2.4,s+.5+g*10,Math.cos(d*.8+f.offset*5)*g*2);const _=2.4+g*6.5;f.sprite.scale.set(_,_,1),f.sprite.material.opacity=(1-g)*.32})}),this.solid(e,n,o*2.1,o*2.1,s),r}stringLights(t,e={}){const{count:n=12,sag:s=.6,radius:o=.055}=e;if(t.length<2)return;const r=[16768416,16757350,14832196,9364122,16773316],a=(t.length-1)*n,l=new ee(o,7,6),c=Pe({toneMapped:!1}),h=new Re(l,c,a),u=new Re(new Mt(.02,.026,.06,5),C.iron,a),d=[],f=[],g=[];let _=0;for(let A=0;A<t.length-1;A++){const R=t[A],y=t[A+1];for(let M=0;M<n;M++){const I=(M+.5)/n,N=R.x+(y.x-R.x)*I,U=R.z+(y.z-R.z)*I,F=R.y+(y.y-R.y)*I-Math.sin(I*Math.PI)*s;lt.position.set(N,F,U),lt.rotation.set(0,0,0),lt.scale.setScalar(.9+M%3*.15),lt.updateMatrix(),h.setMatrixAt(_,lt.matrix),Ze.setHex(r[_%r.length]),h.setColorAt(_,Ze),d.push(new z(N,F,U)),f.push(Ze.clone()),lt.position.set(N,F+.07,U),lt.scale.set(1,1,1),lt.updateMatrix(),u.setMatrixAt(_,lt.matrix),_++}for(let M=0;M<=14;M++){const I=M/14;g.push(new z(R.x+(y.x-R.x)*I,R.y+(y.y-R.y)*I-Math.sin(I*Math.PI)*s,R.z+(y.z-R.z)*I))}}h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),u.instanceMatrix.needsUpdate=!0,this.add(h,u);const m=new he,p=new Float32Array(a*3),w=new Float32Array(a*3);d.forEach((A,R)=>{p[R*3]=A.x,p[R*3+1]=A.y,p[R*3+2]=A.z,w[R*3]=f[R].r,w[R*3+1]=f[R].g,w[R*3+2]=f[R].b}),m.setAttribute("position",new Te(p,3)),m.setAttribute("color",new Te(w,3));const v=new Si({map:Ut.glow,color:16777215,size:.42,transparent:!0,opacity:.38,depthWrite:!1,alphaTest:.01,vertexColors:!0,sizeAttenuation:!0,blending:qe,toneMapped:!1}),x=new ji(m,v);x.frustumCulled=!1,this.add(x);const T=new Ka(new he().setFromPoints(g),new Zo({color:1120786,transparent:!0,opacity:.82}));this.add(T);const P=Math.random()*10;this.animated.push(A=>{v.opacity=.33+Math.sin(A*1.9+P)*.04})}}const gi=(i=39)=>{const t=[];for(let n=0;n<26;n++){const s=n/26*Math.PI*2+.17,o=i-n%4*1.8;t.push({x:Math.cos(s)*o,z:Math.sin(s)*o,s:.85+n*29%60/100})}return t},An=[{id:"village",name:"Silent Night Square",location:"Sainte-Claire · French Alps",target:"Viktor Kringle",targetTitle:"The Coal Baron",difficulty:"LOW RISK",accent:"#e4c38c",fogColor:726308,fogDensity:.012,skyTop:264726,skyHorizon:1911877,moonColor:12769023,moonIntensity:1.7,hemiIntensity:.55,starOpacity:.75,snow:{speed:1,windX:.35,windZ:.15,count:4200},focus:{x:0,y:3.2,z:-1},build(i){return i.ground(C.groundSnow,200),i.pathCircle(11,0,1.5),i.pathRect(6,30,0,17),i.pathRect(6,34,0,50),i.pathRect(4,36,-40,-6),i.pathRect(4,32,44,16),i.snowBanks(73),i.christmasTree({x:0,z:-2,scale:1.18,bulbs:130,ornaments:48}),i.house({x:-22,z:-12,rot:.12,lit:!0,wall:C.plaster,w:6.8,d:7.6}),i.house({x:-24,z:7,rot:-.18,wall:C.plasterWarm,w:7,d:8}),i.house({x:22,z:-14,rot:-.12,lit:!0,wall:C.brick,w:7,d:7.8}),i.house({x:23,z:7,rot:.2,wall:C.plaster,w:7.2,d:8.4}),i.house({x:-7,z:23,rot:Math.PI,lit:!1,wall:C.plasterWarm,w:7,d:8}),i.house({x:8,z:24,rot:Math.PI,wall:C.plaster,w:6.6,d:8}),i.stall({x:-10,z:6,rot:.35,canopy:C.stallRed,light:!0}),i.stall({x:10,z:7,rot:-.35,canopy:C.stallGreen,light:!0}),i.stall({x:-12,z:-8,rot:1.15,canopy:C.stallGreen,light:!1}),i.stall({x:12,z:-9,rot:-1,canopy:C.stallRed,light:!1}),i.lamp({x:-7,z:13,light:!0}),i.lamp({x:7,z:12,light:!0}),i.lamp({x:-15,z:-3,rot:2.4}),i.lamp({x:15,z:-2,rot:-2.4}),i.snowman({x:18,z:1,rot:-.7}),i.snowman({x:-18,z:15,rot:.6,scale:.9}),i.bench({x:-4,z:12,rot:.1}),i.bench({x:4,z:10,rot:Math.PI}),i.gift({x:-1.7,z:8.2,size:.65,color:9379624}),i.gift({x:1.9,z:8.6,size:.5,color:2052404}),i.gift({x:2.4,z:9.2,size:.38,color:12821066}),i.stringLights([{x:-7,y:5.3,z:13},{x:0,y:4.9,z:15.5},{x:7,y:5.3,z:12}],{count:18,sag:.85}),i.house({x:-54,z:-40,rot:.3,wall:C.plasterWarm,w:7.4,d:8.2,lit:!0}),i.house({x:55,z:42,rot:-.35,wall:C.plaster,w:7.2,d:8,lit:!1}),i.house({x:-57,z:12,rot:.22,wall:C.brick,w:7,d:8}),i.house({x:56,z:-18,rot:-.2,wall:C.plasterWarm,w:7.6,d:8.4,lit:!0}),i.stall({x:-46,z:-26,rot:.45,canopy:C.stallGreen,light:!0}),i.stall({x:42,z:30,rot:-.5,canopy:C.stallRed,light:!0}),i.stall({x:-52,z:34,rot:1.1,canopy:C.stallRed,light:!1}),i.stall({x:52,z:-32,rot:-1.05,canopy:C.stallGreen,light:!1}),i.lamp({x:-40,z:40,light:!0}),i.lamp({x:40,z:-32,light:!0}),i.lamp({x:-58,z:-18,rot:1.3}),i.lamp({x:58,z:22,rot:-1.3}),i.lamp({x:-32,z:56,rot:.4,light:!0}),i.snowman({x:-33,z:48,rot:.8}),i.snowman({x:38,z:-44,rot:-.5,scale:.9}),i.bench({x:-43,z:40,rot:.2}),i.bench({x:44,z:-30,rot:Math.PI}),i.gift({x:-40,z:-20,size:.8,color:2052404}),i.gift({x:41,z:36,size:.7,color:9379624}),i.pines([...gi(39),...gi(71)]),{playerSpawn:{x:0,z:64,yaw:0},targetSpawn:{x:7,z:4},targetPath:[{x:7,z:4},{x:7,z:-8},{x:0,z:-13},{x:-7,z:-8},{x:-7,z:4},{x:0,z:9}],escape:{x:60,z:56},escort:{x:4.6,z:6.2},tasks:[{type:"relay",x:-47,z:-33},{type:"ledger",x:48,z:34}],guards:[{x:-12,z:9,path:[{x:-12,z:9},{x:-18,z:1},{x:-14,z:-9},{x:-6,z:-12}]},{x:12,z:9,path:[{x:12,z:9},{x:18,z:2},{x:14,z:-9},{x:6,z:-13}]},{x:0,z:-18,path:[{x:0,z:-18},{x:-9,z:-20},{x:0,z:-23},{x:9,z:-20}]},{x:-42,z:-26,path:[{x:-42,z:-26},{x:-50,z:-18},{x:-38,z:-14},{x:-34,z:-26}],coat:2306090},{x:46,z:30,path:[{x:46,z:30},{x:54,z:24},{x:62,z:34},{x:60,z:50},{x:46,z:48}],coat:2958368}]}}},{id:"estate",name:"Frostwood Estate",location:"Lake Geneva · Switzerland",target:"Helena Frost",targetTitle:"The Winter Widow",difficulty:"GUARDED",accent:"#a7c9e8",fogColor:1055275,fogDensity:.011,skyTop:330520,skyHorizon:2570836,moonColor:13689599,moonIntensity:1.9,hemiIntensity:.6,starOpacity:.85,snow:{speed:.85,windX:.18,windZ:.3,count:3800},focus:{x:0,y:3,z:0},build(i){return i.ground(C.groundSnow,200),i.pathCircle(5.2,0,0),i.pathRect(5.5,22,0,16),i.pathRect(5.5,12,0,-12),i.pathRect(5.5,36,0,48),i.pathRect(4,30,-42,12),i.pathRect(4,30,42,12),i.snowBanks(73),i.mansion({x:0,z:-27,w:30,d:13,h:9}),i.fountain({x:0,z:0}),i.hedge({x:-9,z:8,w:1.8,d:7}),i.hedge({x:9,z:8,w:1.8,d:7}),i.hedge({x:-9,z:-8,w:1.8,d:7}),i.hedge({x:9,z:-8,w:1.8,d:7}),i.hedge({x:-20,z:-1,w:7,d:1.8}),i.hedge({x:20,z:-1,w:7,d:1.8}),i.iceSculpture({x:-7,z:17,scale:1.1}),i.iceSculpture({x:7,z:17,scale:1.1}),i.iceSculpture({x:-18,z:7,scale:.9}),i.iceSculpture({x:18,z:7,scale:.9}),i.lamp({x:-13,z:13,light:!1}),i.lamp({x:13,z:13,light:!1}),i.lamp({x:-13,z:-13,light:!1}),i.lamp({x:13,z:-13,light:!1}),i.stringLights([{x:-13,y:5.2,z:13},{x:13,y:5.2,z:13},{x:13,y:5.2,z:-13},{x:-13,y:5.2,z:-13},{x:-13,y:5.2,z:13}],{count:20,sag:1.1}),i.lamp({x:-5.5,z:24,light:!0}),i.lamp({x:5.5,z:24,light:!0}),i.bench({x:-15,z:19,rot:.15}),i.bench({x:15,z:19,rot:-.15}),i.bench({x:12,z:-16,rot:Math.PI-.2}),i.house({x:-56,z:-40,rot:.25,wall:C.plasterWarm,w:7.2,d:8,lit:!0}),i.house({x:55,z:40,rot:-.3,wall:C.plaster,w:7.4,d:8.2,lit:!1}),i.house({x:-58,z:18,rot:-.2,wall:C.brick,w:7,d:8}),i.house({x:58,z:-16,rot:.22,wall:C.plasterWarm,w:7.2,d:8.4,lit:!0}),i.hedge({x:-34,z:28,w:14,d:1.8}),i.hedge({x:34,z:-26,w:14,d:1.8}),i.hedge({x:-34,z:-26,w:12,d:1.8}),i.hedge({x:34,z:30,w:12,d:1.8}),i.iceSculpture({x:-48,z:-22,scale:1.1}),i.iceSculpture({x:46,z:22,scale:1.1}),i.iceSculpture({x:-40,z:38,scale:.9}),i.iceSculpture({x:40,z:-38,scale:.9}),i.lamp({x:-50,z:-24,light:!0}),i.lamp({x:50,z:24,light:!0}),i.lamp({x:-42,z:42,rot:.6}),i.lamp({x:42,z:-42,rot:-.6}),i.bench({x:-42,z:30,rot:.4}),i.bench({x:42,z:-30,rot:Math.PI-.4}),i.pines([{x:-30,z:-14,s:1.2},{x:-33,z:2,s:1.4},{x:-31,z:20,s:1.1},{x:-25,z:30,s:1},{x:30,z:-16,s:1.3},{x:33,z:3,s:1.4},{x:30,z:22,s:1.1},{x:23,z:31,s:1},{x:-16,z:37,s:1.2},{x:16,z:37,s:1.2},{x:-37,z:28,s:1.3},{x:37,z:29,s:1.2},{x:-24,z:-26,s:1.1},{x:24,z:-26,s:1.1}],{minScale:.9,maxScale:1.3}),i.pines(gi(71)),{playerSpawn:{x:0,z:64,yaw:0},targetSpawn:{x:0,z:-9},targetPath:[{x:0,z:-9},{x:8,z:-7},{x:13,z:0},{x:8,z:8},{x:0,z:11},{x:-8,z:8},{x:-13,z:0},{x:-8,z:-7}],escape:{x:-63,z:58},escort:{x:2.6,z:-7.6},tasks:[{type:"relay",x:-48,z:-31},{type:"ledger",x:46,z:31}],guards:[{x:-17,z:12,path:[{x:-17,z:12},{x:-22,z:2},{x:-18,z:-8},{x:-10,z:-14}],coat:2240580},{x:17,z:12,path:[{x:17,z:12},{x:22,z:2},{x:18,z:-8},{x:10,z:-14}],coat:2240580},{x:0,z:10,path:[{x:-8,z:12},{x:0,z:8},{x:8,z:12},{x:0,z:16}],coat:1845818},{x:0,z:-17,path:[{x:-10,z:-17},{x:0,z:-15},{x:10,z:-17}],coat:1845818},{x:-44,z:-26,path:[{x:-44,z:-26},{x:-52,z:-20},{x:-42,z:-14},{x:-34,z:-24}],coat:2832973},{x:42,z:24,path:[{x:42,z:24},{x:50,z:18},{x:60,z:28},{x:54,z:34},{x:44,z:36}],coat:2832973}]}}},{id:"city",name:"Neon Noel",location:"Manhattan · New York",target:"Dominic Marchetti",targetTitle:"The Toy Smuggler",difficulty:"HIGH RISK",accent:"#ff9a72",fogColor:1185573,fogDensity:.015,skyTop:329743,skyHorizon:3351866,moonColor:13030128,moonIntensity:1.15,hemiIntensity:.5,starOpacity:.25,snow:{speed:1.15,windX:.55,windZ:.2,count:4800},focus:{x:0,y:4,z:4},build(i){i.ground(C.asphalt,200),i.box(5,.2,150,C.sidewalk,-10.5,.1,0,0,!1),i.box(5,.2,150,C.sidewalk,10.5,.1,0,0,!1),i.snowBanks(73),[{x:-18,z:-28,h:28,seed:11,facing:1,light:!1},{x:-18,z:-10,h:34,seed:12,facing:1,light:!0},{x:-18,z:8,h:24,seed:13,facing:1,light:!1},{x:-18,z:26,h:30,seed:14,facing:1,light:!1},{x:18,z:-28,h:30,seed:15,facing:-1,light:!1},{x:18,z:-10,h:22,seed:16,facing:-1,light:!1},{x:18,z:8,h:34,seed:17,facing:-1,light:!0},{x:18,z:26,h:26,seed:18,facing:-1,light:!1},{x:-18,z:52,h:27,seed:19,facing:1,light:!0},{x:18,z:52,h:21,seed:20,facing:-1,light:!1},{x:-18,z:-52,h:31,seed:21,facing:1,light:!1},{x:18,z:-52,h:24,seed:22,facing:-1,light:!0}].forEach(e=>{i.cityBlock({x:e.x,z:e.z,w:11,d:14,h:e.h,seed:e.seed,facing:e.facing,light:e.light})}),i.neon({x:-12.3,y:7.5,z:-10,rot:Math.PI/2,text:"NOEL",color:"#ffb277",width:5.4}),i.neon({x:12.3,y:8,z:8,rot:-Math.PI/2,text:"TOYS",color:"#ff8f9c",width:4.8}),i.neon({x:-12.3,y:6.5,z:26,rot:Math.PI/2,text:"COCOA",color:"#8fe3b0",width:5.2}),i.neon({x:12.3,y:7,z:-28,rot:-Math.PI/2,text:"OPEN",color:"#8fbcff",width:4.6}),i.neon({x:-12.3,y:7.2,z:52,rot:Math.PI/2,text:"NORTH",color:"#ffb277",width:5}),i.neon({x:12.3,y:6.8,z:52,rot:-Math.PI/2,text:"SLEIGH",color:"#ff8f9c",width:5.2}),i.neon({x:-12.3,y:7.4,z:-52,rot:Math.PI/2,text:"MIDNIGHT",color:"#8fbcff",width:5.6}),i.neon({x:12.3,y:6.6,z:-52,rot:-Math.PI/2,text:"ICE",color:"#8fe3b0",width:4});for(let e=0;e<24;e++){const n=-70+e*6;i.box(.22,.02,2.2,C.snow,0,.04,n,0,!1)}for(let e=0;e<7;e++)i.box(.9,.02,3.2,C.snow,-6+e*2,.04,17.5,0,!1);i.car({x:-7,z:23,rot:.02,color:1977148}),i.car({x:7,z:14,rot:Math.PI+.01,color:3874854}),i.car({x:-7,z:5,rot:-.02,color:2372134}),i.car({x:7,z:-9,rot:Math.PI,color:2894900}),i.car({x:-7,z:-23,rot:0,color:3813936}),i.car({x:7,z:44,rot:Math.PI+.02,color:2503746}),i.car({x:-7,z:58,rot:.01,color:3942954}),i.car({x:7,z:-58,rot:Math.PI-.01,color:2108206}),i.car({x:-7,z:-68,rot:.02,color:3288378}),i.lamp({x:-9.7,z:-20,rot:Math.PI/2,light:!1}),i.lamp({x:9.7,z:-20,rot:-Math.PI/2,light:!1}),i.lamp({x:-9.7,z:0,rot:Math.PI/2,light:!0}),i.lamp({x:9.7,z:0,rot:-Math.PI/2,light:!0}),i.lamp({x:-9.7,z:20,rot:Math.PI/2,light:!1}),i.lamp({x:9.7,z:20,rot:-Math.PI/2,light:!1}),i.lamp({x:-9.7,z:44,rot:Math.PI/2,light:!0}),i.lamp({x:9.7,z:44,rot:-Math.PI/2,light:!1}),i.lamp({x:-9.7,z:64,rot:Math.PI/2,light:!1}),i.lamp({x:9.7,z:64,rot:-Math.PI/2,light:!0}),i.lamp({x:-9.7,z:-44,rot:Math.PI/2,light:!1}),i.lamp({x:9.7,z:-44,rot:-Math.PI/2,light:!0}),i.lamp({x:-9.7,z:-64,rot:Math.PI/2,light:!0}),i.lamp({x:9.7,z:-64,rot:-Math.PI/2,light:!1}),i.christmasTree({x:-10.5,z:35,scale:.72,bulbs:70,ornaments:24}),i.christmasTree({x:10.5,z:35,scale:.72,bulbs:70,ornaments:24}),i.christmasTree({x:-10.5,z:-36,scale:.68,bulbs:60,ornaments:20}),i.christmasTree({x:10.5,z:-36,scale:.68,bulbs:60,ornaments:20});for(const e of[-1,1]){for(let n=0;n<3;n++)i.box(2.1,.35,2.8,C.snow,e*8.4,.14,-18+n*18,0,!1);for(let n=0;n<4;n++)i.box(2.2,.32,3.2,C.snow,e*8.4,.14,44+n*7,0,!1),i.box(2.2,.32,3.2,C.snow,e*8.4,.14,-44-n*7,0,!1)}return i.pines(gi(72)),{playerSpawn:{x:0,z:68,yaw:0},targetSpawn:{x:3.5,z:-10},targetPath:[{x:3.5,z:-10},{x:3.5,z:6},{x:3.5,z:22},{x:0,z:26},{x:-3.5,z:16},{x:-3.5,z:0},{x:-3.5,z:-18},{x:0,z:-28}],escape:{x:0,z:-72},escort:{x:1.4,z:-8.2},tasks:[{type:"relay",x:10.4,z:-55},{type:"ledger",x:-10.4,z:55}],guards:[{x:10.5,z:-16,path:[{x:10.5,z:-16},{x:10.5,z:-2},{x:10.5,z:12}],coat:1779507},{x:-10.5,z:18,path:[{x:-10.5,z:18},{x:-10.5,z:4},{x:-10.5,z:-10}],coat:2435896},{x:10.5,z:12,path:[{x:10.5,z:12},{x:10.5,z:2},{x:10.5,z:16}],coat:3351601},{x:-10.5,z:-26,path:[{x:-10.5,z:-26},{x:-10.5,z:-6},{x:-4,z:-10}],coat:2042163},{x:-11.6,z:-52,path:[{x:-11.6,z:-52},{x:-11.6,z:-68},{x:-11.6,z:-38}],coat:1779507},{x:11.6,z:52,path:[{x:11.6,z:52},{x:11.6,z:68},{x:11.6,z:40}],coat:2435896}]}}},{id:"krampus",name:"Krampusnacht",location:"The Black Forest · Germany",target:"Baron Albrecht Krampus",targetTitle:"The Collector",difficulty:"SEVERE",accent:"#d9846b",fogColor:658452,fogDensity:.018,skyTop:197899,skyHorizon:1775394,moonColor:13097215,moonIntensity:1.35,hemiIntensity:.36,starOpacity:.9,snow:{speed:.9,windX:.4,windZ:.1,count:3600},focus:{x:-2,y:3,z:0},build(i){i.ground(C.groundSnow,200),i.pathRect(6,34,0,12),i.pathRect(6,38,0,47),i.pathCircle(8,-3,3),i.pathRect(4,30,-44,4),i.pathRect(4,30,44,4),i.snowBanks(73),i.mansion({x:0,z:-29,w:28,d:13,h:10}),i.ironFence(-66,66,-7,66),i.ironFence(7,66,66,66),i.ironFence(-66,-66,66,-66),i.ironFence(-66,-66,-66,66),i.ironFence(66,-66,66,-6),i.ironFence(66,6,66,66),i.box(.9,3.8,.9,C.stoneWall,66,1.9,-6),i.box(.9,3.8,.9,C.stoneWall,66,1.9,6),i.box(.9,3.8,.9,C.stoneWall,7,1.9,66),i.box(.9,3.8,.9,C.stoneWall,-7,1.9,66);const t=new b(new bn(5.8,48),C.ice);t.rotation.x=-Math.PI/2,t.position.set(-16,.035,-9),t.receiveShadow=!0,i.add(t);const e=new b(new an(5.6,.35,8,40),C.stoneWall);return e.rotation.x=Math.PI/2,e.position.set(-16,.2,-9),i.add(e),i.bonfire({x:-9,z:9}),i.statue({x:10,z:1,rot:-.6,scale:1.05}),i.deadTree({x:-27,z:18,scale:1.25}),i.deadTree({x:27,z:16,scale:1.1}),i.deadTree({x:-24,z:-22,scale:.95}),i.deadTree({x:25,z:-20,scale:1.15}),i.torch({x:-4,z:18,rot:.2}),i.torch({x:4,z:18,rot:-.2}),i.torch({x:-15,z:-2,rot:.4}),i.torch({x:17,z:-2,rot:-.4}),i.iceSculpture({x:-22,z:-10,scale:1.2}),i.iceSculpture({x:21,z:9,scale:.8}),i.iceSculpture({x:-50,z:42,scale:1.3}),i.iceSculpture({x:46,z:-24,scale:1.1}),i.deadTree({x:-46,z:28,scale:1.35}),i.deadTree({x:44,z:38,scale:1.2}),i.deadTree({x:-44,z:-38,scale:1.15}),i.deadTree({x:40,z:-46,scale:1.3}),i.torch({x:-44,z:42,rot:.3}),i.torch({x:52,z:32,rot:-.3}),i.torch({x:44,z:-36,rot:.5}),i.torch({x:-52,z:-28,rot:-.5}),i.statue({x:-52,z:16,rot:.8,scale:.9}),i.statue({x:50,z:18,rot:-.8,scale:.9}),i.pines([{x:-30,z:-15,s:1.2},{x:-33,z:5,s:1.45},{x:-31,z:28,s:1.05},{x:-19,z:35,s:1.2},{x:30,z:-12,s:1.4},{x:33,z:6,s:1.2},{x:32,z:27,s:1.1},{x:20,z:34,s:1.3},{x:-12,z:36,s:1.1},{x:8,z:35,s:1.2},{x:-27,z:-26,s:1.3},{x:27,z:-26,s:1.2}],{minScale:.9,maxScale:1.4}),i.pines(gi(71)),{playerSpawn:{x:0,z:58,yaw:0},targetSpawn:{x:0,z:-10},targetPath:[{x:0,z:-10},{x:9,z:-4},{x:11,z:6},{x:0,z:12},{x:-10,z:6},{x:-10,z:-4}],escape:{x:60,z:52},escort:{x:2.4,z:-8.6},tasks:[{type:"relay",x:-48,z:38},{type:"ledger",x:48,z:-32}],guards:[{x:-14,z:14,path:[{x:-14,z:14},{x:-21,z:4},{x:-17,z:-6},{x:-7,z:-13}],coat:3806999,hat:1183764},{x:14,z:14,path:[{x:14,z:14},{x:21,z:4},{x:17,z:-6},{x:7,z:-13}],coat:3806999,hat:1183764},{x:0,z:14,path:[{x:-8,z:14},{x:0,z:12},{x:8,z:14},{x:0,z:16}],coat:2495514,hat:1183764},{x:0,z:-18,path:[{x:-10,z:-18},{x:0,z:-16},{x:10,z:-18},{x:0,z:-21}],coat:2495514,hat:1183764},{x:-42,z:34,path:[{x:-42,z:34},{x:-52,z:30},{x:-56,z:44},{x:-44,z:50}],coat:3806999,hat:1183764},{x:42,z:-28,path:[{x:42,z:-28},{x:52,z:-24},{x:56,z:-40},{x:44,z:-44}],coat:2495514,hat:1183764}]}}},{id:"workshop",name:"The North Pole Works",location:"Arctic Circle · 90° North",target:"Elias Toymaker",targetTitle:"The Workshop King",difficulty:"EXTREME",accent:"#93d8b6",fogColor:924196,fogDensity:.014,skyTop:331029,skyHorizon:2373959,moonColor:13492479,moonIntensity:1.7,hemiIntensity:.52,starOpacity:.8,snow:{speed:1.2,windX:.7,windZ:.25,count:4600},focus:{x:0,y:3.5,z:0},build(i){i.ground(C.groundSnow,200),i.pathRect(8,26,0,12),i.pathRect(8,38,0,48),i.pathRect(4,32,-42,8),i.pathRect(4,32,42,8),i.snowBanks(73),i.workshop({x:0,z:-29,w:31,d:16,h:12}),i.smokestack({x:-10,z:-31,height:19,radius:1.15}),i.smokestack({x:11,z:-32,height:22,radius:1.25}),i.conveyor({x:0,z:-4,length:26}),i.gift({x:-14,z:8,size:2.3,color:9379624,rot:.2,collide:!0}),i.gift({x:14,z:8,size:2.5,color:2052404,rot:-.25,collide:!0}),i.gift({x:0,z:14,size:2.2,color:2966120,rot:.1,collide:!0}),i.gift({x:-15.8,z:9.6,size:1.2,color:12821066,collide:!0}),i.gift({x:15.9,z:9.4,size:1.15,color:9379624,collide:!0}),i.candyCane({x:-7,z:21,scale:1.05}),i.candyCane({x:7,z:21,scale:1.05}),i.candyCane({x:-18,z:1,scale:.9}),i.candyCane({x:18,z:1,scale:.9}),i.lamp({x:-12,z:24,rot:.4,light:!0}),i.lamp({x:12,z:24,rot:-.4,light:!0}),i.lamp({x:-20,z:14,rot:Math.PI/2,light:!1}),i.lamp({x:20,z:14,rot:-Math.PI/2,light:!1}),i.lamp({x:-46,z:30,rot:Math.PI/2,light:!0}),i.lamp({x:46,z:-32,rot:-Math.PI/2,light:!0}),i.lamp({x:-42,z:50,rot:.4,light:!1}),i.lamp({x:42,z:-52,rot:Math.PI-.4,light:!1}),i.smokestack({x:-54,z:-42,height:24,radius:1.3}),i.smokestack({x:56,z:-46,height:27,radius:1.4}),i.smokestack({x:-58,z:44,height:21,radius:1.15}),i.smokestack({x:58,z:48,height:23,radius:1.2}),i.gift({x:-48,z:42,size:3.1,color:9379624,rot:.25,collide:!0}),i.gift({x:52,z:36,size:2.8,color:2966120,rot:-.2,collide:!0}),i.gift({x:44,z:-44,size:3.4,color:2052404,rot:.3,collide:!0}),i.gift({x:-40,z:-36,size:3,color:12821066,rot:-.3,collide:!0}),i.candyCane({x:-38,z:46,scale:1.2}),i.candyCane({x:46,z:26,scale:1.1}),i.candyCane({x:38,z:-34,scale:1.15}),i.candyCane({x:-36,z:-40,scale:1.05});for(const t of[{x:-54,z:20,s:2},{x:-52,z:22.5,s:1.4},{x:54,z:-20,s:2.1},{x:52,z:-22.5,s:1.5},{x:40,z:46,s:1.8},{x:-40,z:22,s:1.7}])i.box(t.s,t.s,t.s,C.woodDark,t.x,t.s/2,t.z,t.s*.15),i.solid(t.x,t.z,t.s,t.s,t.s);for(const t of[{x:18,z:-14,s:1.6},{x:19.4,z:-12.2,s:1.2},{x:17.2,z:-16.4,s:1.3},{x:-18,z:-14,s:1.5},{x:-19.6,z:-12.1,s:1.1},{x:-17.4,z:-16.3,s:1.2}])i.box(t.s,t.s,t.s,C.woodDark,t.x,t.s/2,t.z,t.s*.2),i.solid(t.x,t.z,t.s,t.s,t.s);for(const t of[{x:-21,z:17},{x:21,z:17},{x:20.5,z:19}])i.cyl(.55,.62,1.4,12,C.metal,t.x,.7,t.z),i.solid(t.x,t.z,1.2,1.2,1.4);return i.pines([...gi(40),...gi(71)]),{playerSpawn:{x:0,z:60,yaw:0},targetSpawn:{x:0,z:-12},targetPath:[{x:0,z:-12},{x:10,z:-12},{x:14,z:2},{x:0,z:8},{x:-14,z:2},{x:-12,z:-12}],escape:{x:-60,z:50},escort:{x:2.4,z:-10.6},tasks:[{type:"relay",x:50,z:-36},{type:"ledger",x:-48,z:34}],guards:[{x:-18,z:12,path:[{x:-18,z:12},{x:-23,z:4},{x:-18,z:-8},{x:-14,z:-16}],coat:1784362,hat:2824722},{x:18,z:12,path:[{x:18,z:12},{x:23,z:4},{x:18,z:-8},{x:14,z:-16}],coat:1784362,hat:2824722},{x:0,z:12,path:[{x:-8,z:12},{x:0,z:10},{x:8,z:12},{x:0,z:14}],coat:2307882,hat:2824722},{x:0,z:-17,path:[{x:-8,z:-17},{x:0,z:-19},{x:8,z:-17},{x:0,z:-14}],coat:2307882,hat:2824722},{x:19,z:-3,path:[{x:19,z:-3},{x:23,z:8},{x:16,z:5},{x:14,z:-5}],coat:1585702,hat:2824722},{x:44,z:-28,path:[{x:44,z:-28},{x:54,z:-24},{x:60,z:-36},{x:52,z:-44},{x:46,z:-50}],coat:1784362,hat:2824722},{x:-42,z:26,path:[{x:-42,z:26},{x:-52,z:24},{x:-58,z:48},{x:-46,z:50},{x:-44,z:46}],coat:2307882,hat:2824722}]}}},{id:"metropolis",name:"The Midnight Mile",location:"Chicago · Illinois",target:"Augustin Voss",targetTitle:"The City Boss",difficulty:"NIGHTMARE",accent:"#9cc8ff",fogColor:725536,fogDensity:.0085,skyTop:198417,skyHorizon:1516343,moonColor:12440831,moonIntensity:1.25,hemiIntensity:.46,starOpacity:.22,snow:{speed:1.15,windX:.55,windZ:.2,count:5600},focus:{x:0,y:5,z:0},bounds:120,shadowSpan:110,hint:"CITY RULES — WATCH THE TRAFFIC · E TALKS TO BYSTANDERS",build(i){i.ground(C.asphalt,300),i.box(8,.18,240,C.sidewalk,-15,.09,0,0,!1),i.box(8,.18,240,C.sidewalk,15,.09,0,0,!1),i.box(240,.18,8,C.sidewalk,0,.09,-15,0,!1),i.box(240,.18,8,C.sidewalk,0,.09,15,0,!1);for(let h=-112;h<=112;h+=8)Math.abs(h)<14||i.box(.15,.025,3.8,C.roadLineWarm,0,.045,h,0,!1);for(let h=-112;h<=112;h+=8)Math.abs(h)<14||i.box(3.8,.025,.15,C.roadLineWarm,h,.045,0,0,!1);for(let h=-106;h<=106;h+=6)Math.abs(h)<18||(i.box(.1,.02,2.4,C.roadLine,-2.8,.04,h,0,!1),i.box(.1,.02,2.4,C.roadLine,2.8,.04,h,0,!1));i.crosswalk({x:0,z:-14,rot:0}),i.crosswalk({x:0,z:14,rot:0}),i.crosswalk({x:-14,z:0,rot:Math.PI/2}),i.crosswalk({x:14,z:0,rot:Math.PI/2}),[{x:-42,z:-78,h:34,seed:61,light:!1},{x:-42,z:-38,h:24,seed:62,light:!0},{x:-42,z:38,h:30,seed:63,light:!1},{x:-42,z:78,h:26,seed:64,light:!0},{x:42,z:-78,h:28,seed:65,light:!0},{x:42,z:-38,h:36,seed:66,light:!1},{x:42,z:38,h:22,seed:67,light:!1},{x:42,z:78,h:32,seed:68,light:!0},{x:-90,z:-78,h:42,seed:69,light:!1},{x:-90,z:-38,h:30,seed:70,light:!0},{x:-90,z:38,h:38,seed:71,light:!1},{x:-90,z:78,h:26,seed:72,light:!1},{x:90,z:-78,h:31,seed:73,light:!0},{x:90,z:-38,h:40,seed:74,light:!1},{x:90,z:38,h:27,seed:75,light:!0},{x:90,z:78,h:35,seed:76,light:!1},{x:-107,z:-78,h:58,seed:77,w:14,d:16,light:!1,backdrop:!0},{x:-107,z:-38,h:46,seed:78,w:14,d:16,light:!0,backdrop:!0},{x:-107,z:38,h:52,seed:79,w:14,d:16,light:!1,backdrop:!0},{x:-107,z:78,h:44,seed:80,w:14,d:16,light:!1,backdrop:!0},{x:107,z:-78,h:50,seed:81,w:14,d:16,light:!1,backdrop:!0},{x:107,z:-38,h:62,seed:82,w:14,d:16,light:!1,backdrop:!0},{x:107,z:38,h:48,seed:83,w:14,d:16,light:!0,backdrop:!0},{x:107,z:78,h:56,seed:84,w:14,d:16,light:!1,backdrop:!0},{x:-42,z:-107,h:50,seed:85,w:16,d:16,light:!1,backdrop:!0},{x:42,z:-107,h:44,seed:86,w:16,d:16,light:!0,backdrop:!0},{x:-90,z:-107,h:58,seed:87,w:16,d:16,light:!1,backdrop:!0},{x:90,z:-107,h:48,seed:88,w:16,d:16,light:!1,backdrop:!0},{x:-42,z:107,h:46,seed:89,w:16,d:16,light:!1,backdrop:!0},{x:42,z:107,h:54,seed:90,w:16,d:16,light:!0,backdrop:!0},{x:-90,z:107,h:42,seed:91,w:16,d:16,light:!1,backdrop:!0},{x:90,z:107,h:60,seed:92,w:16,d:16,light:!1,backdrop:!0}].forEach((h,u)=>{const d=h.w??18,f=h.d??18;i.box(d+4,.16,f+4,C.sidewalk,h.x,.08+u*4e-4,h.z,0,!1),i.cityBlock({x:h.x,z:h.z,w:d,d:f,h:h.h,seed:h.seed,facing:h.x>0?-1:1,light:h.light,detail:!h.backdrop})}),[{x:-32.8,y:10,z:-38,rot:Math.PI/2,text:"VELVET",color:"#ff9f83",width:5.2},{x:32.8,y:9,z:-38,rot:-Math.PI/2,text:"MIDNIGHT",color:"#9cc8ff",width:6.2},{x:-32.8,y:8,z:38,rot:Math.PI/2,text:"NOCTURNE",color:"#8fe3b0",width:6},{x:32.8,y:9,z:38,rot:-Math.PI/2,text:"VOSS",color:"#ffb46a",width:4.4},{x:-80.8,y:11,z:-38,rot:Math.PI/2,text:"BLACK MILE",color:"#d19cff",width:6.4},{x:80.8,y:10,z:38,rot:-Math.PI/2,text:"LAST CALL",color:"#ff8f9c",width:6}].forEach(h=>i.neon(h)),i.trafficLight({x:-13,z:13,rot:Math.PI/2}),i.trafficLight({x:13,z:13,rot:-Math.PI/2}),i.trafficLight({x:-13,z:-13,rot:Math.PI}),i.trafficLight({x:13,z:-13,rot:0}),i.hydrant({x:18,z:26}),i.hydrant({x:-18,z:-46}),i.hydrant({x:18,z:72}),[-96,-72,-48,-24,28,52,76,100].forEach((h,u)=>{i.lamp({x:-18,z:h,rot:Math.PI/2,light:u%2===0}),i.lamp({x:18,z:h,rot:-Math.PI/2,light:u%2===1})}),i.lamp({x:-31,z:-38,rot:0,light:!0}),i.lamp({x:31,z:-38,rot:Math.PI,light:!1}),i.lamp({x:-31,z:38,rot:0,light:!1}),i.lamp({x:31,z:38,rot:Math.PI,light:!0}),i.lamp({x:-79,z:-78,rot:0,light:!1}),i.lamp({x:79,z:78,rot:Math.PI,light:!0});for(const h of[-72,-48,-24,28,52,76,100])i.stringLights([{x:-18,y:5.55,z:h},{x:0,y:5.95,z:h},{x:18,y:5.55,z:h}],{count:22,sag:.95,radius:.06});i.christmasTree({x:24,z:-8,scale:.92,bulbs:100,ornaments:34}),i.bench({x:16,z:4,rot:.4}),i.bench({x:32,z:4,rot:-.4}),i.bench({x:24,z:-24,rot:Math.PI}),i.lamp({x:14,z:-24,rot:Math.PI/2,light:!0}),i.box(18,.03,24,C.snow,60,.04,20,0,!1),i.pines([{x:55,z:13,s:1.05},{x:65,z:13,s:1.15},{x:55,z:27,s:1.1},{x:65,z:27,s:.98},{x:51.5,z:25.5,s:.9},{x:68.5,z:16.5,s:.95}]),i.bench({x:60,z:20,rot:.2}),i.bench({x:60,z:26.5,rot:Math.PI-.2}),i.snowman({x:63.4,z:26.4,scale:.9}),i.icePatch({x:60,z:20.5,r:3.4,rot:.4});for(let h=-96;h<=96;h+=12)Math.abs(h)<20||(i.box(2.2,.26,1.2,C.snow,-20.5,.13,h,.1,!1),i.box(2,.22,1.1,C.snow,20.5,.11,h,-.1,!1));const s=C.cityStoneDark;for(const h of[-1,1])i.box(.55,.16,230,s,h*11.15,.08,0,0,!1),i.box(.64,.075,230,C.snow,h*11.15,.18,0,0,!1),i.box(230,.16,.55,s,0,.08,h*11.15,0,!1),i.box(230,.075,.64,C.snow,0,.18,h*11.15,0,!1);for(let h=-104;h<=104;h+=16)Math.abs(h)<20||(i.snowDrift({x:-12.7,z:h,w:3.6,d:1.5,h:.34,rot:.08}),i.snowDrift({x:12.7,z:h+7,w:3.2,d:1.3,h:.3,rot:-.1}));for(let h=-100;h<=100;h+=20)Math.abs(h)<20||(i.snowDrift({x:h,z:-12.7,w:2.8,d:1.3,h:.28,rot:.5}),i.snowDrift({x:h+9,z:12.7,w:2.6,d:1.2,h:.26,rot:-.4}));[[-8,-62,2.4],[7.4,-18,1.9],[-4.2,34,2.7],[9,86,2.1],[-9.4,60,2.3],[3.4,112,1.8],[-6.4,-96,2],[6.2,6,1.6]].forEach(([h,u,d],f)=>i.icePatch({x:h,z:u,r:d,rot:f*.9})),[{x:-9.2,z:-88,rot:0,color:1845299},{x:-9.2,z:-44,rot:0,color:3351850},{x:-9.2,z:44,rot:0,color:2371626},{x:9.2,z:-66,rot:Math.PI,color:2829363},{x:9.2,z:30,rot:Math.PI,color:3159101},{x:9.2,z:92,rot:Math.PI,color:2760997},{x:-56,z:-9.2,rot:Math.PI/2,color:2502456},{x:24,z:9.2,rot:-Math.PI/2,color:3353382},{x:68,z:-9.2,rot:Math.PI/2,color:2041907},{x:-24,z:9.2,rot:-Math.PI/2,color:2896184}].forEach(h=>i.car({...h,collide:!0,headlights:!1})),i.busShelter({x:-14.6,z:-40,rot:0}),i.busShelter({x:14.8,z:68,rot:Math.PI,label:"MIDNIGHT"}),i.streetBin({x:17.6,z:14.6}),i.streetBin({x:-17.6,z:-14.6}),i.streetBin({x:17.6,z:-58}),i.streetBin({x:-17.4,z:42}),i.streetBin({x:17.4,z:96});for(const[h,u]of[[-17.6,-26],[17.8,46],[-17.6,66],[17.8,-76],[-17.6,102],[17.8,-96]])i.planter({x:h,z:u,size:1.6});i.newsBox({x:13.4,z:24,rot:-Math.PI/2,color:9380905}),i.newsBox({x:14.1,z:25.6,rot:-Math.PI/2,color:2047836}),i.newsBox({x:-13.6,z:-66,rot:Math.PI/2,color:3099180});for(const[h,u]of[[11.9,11.9],[-11.9,11.9],[11.9,-11.9],[-11.9,-11.9]])i.bollard({x:h,z:u});i.steamVent({x:-3.4,z:-58,size:2.4}),i.steamVent({x:3.6,z:24}),i.steamVent({x:-4.2,z:84}),i.skyline({count:44,radius:212,minHeight:60,maxHeight:152});const a=C.stoneWall;for(const h of[-1,1])i.box(8,42,260,a,h*118,21,0,0,!1),i.solid(h*118,0,8,260,42),i.box(270,42,8,a,0,21,h*118,0,!1),i.solid(0,h*118,270,8,42),i.box(8.8,.5,264,C.snow,h*118,42.1,0,0,!1),i.box(274,.5,8.8,C.snow,0,42.1,h*118,0,!1);const l=[1911613,3809318,2372134,2894900,3813936,2503746,3878186];i.movingCar({axis:"z",lane:-6,start:-92,min:-114,max:114,speed:9.4,dir:-1,color:l[0]}),i.movingCar({axis:"z",lane:-6,start:4,min:-114,max:114,speed:8.2,dir:-1,color:l[1]}),i.movingCar({axis:"z",lane:-6,start:72,min:-114,max:114,speed:10.1,dir:-1,color:l[2]}),i.movingCar({axis:"z",lane:6,start:-62,min:-114,max:114,speed:8.8,dir:1,color:l[3]}),i.movingCar({axis:"z",lane:6,start:24,min:-114,max:114,speed:9.8,dir:1,color:l[4]}),i.movingCar({axis:"x",lane:-6,start:-76,min:-114,max:114,speed:8.5,dir:1,color:l[5]}),i.movingCar({axis:"x",lane:6,start:48,min:-114,max:114,speed:9.1,dir:-1,color:l[6]});const c=(h,u,d,f,g,_,m)=>({x:h,z:u,path:d,name:f,coat:g,bag:m,lines:_,hat:1317152,scarf:5909298});return{playerSpawn:{x:16,z:104,yaw:0},targetSpawn:{x:24,z:-16},targetPath:[{x:24,z:-16},{x:32,z:-8},{x:24,z:0},{x:16,z:-8},{x:24,z:-16}],escape:{x:0,z:-108},escort:{x:21,z:-17},tasks:[{type:"relay",x:-42,z:94,label:"DISABLE SECURITY RELAY"},{type:"ledger",x:42,z:62,label:"RECOVER THE LEDGER"},{type:"relay",x:-92,z:20,label:"CUT THE SURVEILLANCE FEED"},{type:"ledger",x:92,z:-56,label:"STEAL THE BLACKMAIL FILE"},{type:"relay",x:-18,z:-92,label:"PLANT THE TRACKING BEACON"}],guards:[{x:18,z:-16,path:[{x:18,z:-16},{x:18,z:-2},{x:28,z:-2},{x:28,z:-16}],coat:2240574},{x:30,z:-2,path:[{x:30,z:-2},{x:30,z:-18},{x:20,z:-18}],coat:2503228},{x:18,z:2,path:[{x:18,z:2},{x:26,z:2},{x:26,z:-6}],coat:1911091},{x:16,z:40,path:[{x:16,z:40},{x:16,z:58},{x:16,z:18}],coat:2831682},{x:-16,z:20,path:[{x:-16,z:20},{x:-16,z:38},{x:-16,z:-2}],coat:2108214},{x:-34,z:88,path:[{x:-34,z:88},{x:-50,z:94},{x:-60,z:82},{x:-46,z:92}],coat:2306364},{x:84,z:-50,path:[{x:84,z:-50},{x:100,z:-50},{x:100,z:-64},{x:84,z:-64}],coat:2830394},{x:-84,z:8,path:[{x:-84,z:8},{x:-104,z:8},{x:-104,z:24},{x:-84,z:24}],coat:2042676}],civilians:[c(16,90,[{x:16,z:90},{x:16,z:74}],"NIGHT SHIFT COOK",4861483,["The boss keeps five locks between himself and the street. Five.","The relay tower out west feeds every camera in the district."],6965806),c(-16,72,[{x:-16,z:72},{x:-16,z:56}],"CAB DRIVER",3095861,["Cars do not stop after midnight. Use the crossings and keep moving.","I saw a black car circle the plaza twice. Voss is expecting trouble."],2829104),c(24,-22,[{x:24,z:-22},{x:32,z:-22},{x:32,z:-14}],"FLOWER SELLER",5913645,["He walks the plaza every night. The tree, the bench, the same circle.","The ledgers are not in one place. He is careful like that."],9379624),c(38,20,[{x:38,z:20},{x:38,z:8}],"DOOR MAN",2106412,["Five pieces of business before anyone gets near Voss. That is the rule.","The east side is watched. The west side is worse."],2039588),c(-38,20,[{x:-38,z:20},{x:-38,z:6}],"NEWS VENDOR",3879979,["The surveillance feed runs through the old relay. Cut it and the cameras go blind.","If a guard sees you drop one of his friends, the radio will sing."],5061159),c(57,23,[{x:57,z:23},{x:63,z:23}],"PARK WATCHER",2964269,["Quiet park. Loud city. Watch the avenue before you cross.","The blackmail file is in the east block. Do not ask how I know."],6958643),c(-60,20,[{x:-60,z:20},{x:-60,z:30}],"NIGHT NURSE",3358796,["Voss owns the plaza, the port, and half the cops. Be careful.","I heard the tracking beacon goes on the south relay. That is all I know."],2829107),c(16,-50,[{x:16,z:-50},{x:16,z:-66}],"STREET MUSICIAN",4926e3,["You can hear the traffic before you see it. Listen for the engines.","The boss does not run unless he knows. Make sure he does not know."],8133409),c(-16,-50,[{x:-16,z:-50},{x:-16,z:-34}],"DELIVERY COOK",3095085,["The south relay is past the last block. Nobody watches it but the snow.","Five objectives. Five chances to get caught."],4074530),c(24,88,[{x:24,z:88},{x:24,z:76}],"HOTEL CLERK",2895936,["The plaza tree is where he holds court. The bodyguard never leaves him.","The east file is in the block past the park. Mind the cars."],5914412),c(-24,88,[{x:-24,z:88},{x:-24,z:74}],"SLEIGH DRIVER",3944232,["I have seen the city from the river. There is no way out except the avenue.","When the radio crackles, every guard in the district comes running."],5059636),c(48,-62,[{x:48,z:-62},{x:56,z:-62}],"LATE COURIER",2634798,["The east block has a service door. The file is inside the second room.","Do not let the boss see you work. He remembers faces."],3092277)]}}}],ch=(i,t,e)=>i<t?t:i>e?e:i;function cr(i,t,e){for(const n of e){if(n.height<.35)continue;const s=ch(i.x,n.minX,n.maxX),o=ch(i.z,n.minZ,n.maxZ),r=i.x-s,a=i.z-o,l=r*r+a*a;if(l<t*t)if(l>1e-7){const c=Math.sqrt(l);i.x+=r/c*(t-c),i.z+=a/c*(t-c)}else{const c=i.x-n.minX+t,h=n.maxX-i.x+t,u=i.z-n.minZ+t,d=n.maxZ-i.z+t,f=Math.min(c,h,u,d);f===c?i.x=n.minX-t:f===h?i.x=n.maxX+t:f===u?i.z=n.minZ-t:i.z=n.maxZ+t}}}function e1(i,t,e,n,s){let o=0,r=1;const a=e-i,l=n-t;if(Math.abs(a)<1e-8){if(i<s.minX||i>s.maxX)return!1}else{let c=(s.minX-i)/a,h=(s.maxX-i)/a;if(c>h&&([c,h]=[h,c]),o=Math.max(o,c),r=Math.min(r,h),o>r)return!1}if(Math.abs(l)<1e-8){if(t<s.minZ||t>s.maxZ)return!1}else{let c=(s.minZ-t)/l,h=(s.maxZ-t)/l;if(c>h&&([c,h]=[h,c]),o=Math.max(o,c),r=Math.min(r,h),o>r)return!1}return r>.02&&o<.98}function ni(i,t,e,n,s){for(const o of s)if(!(o.height<1.25)&&!(i>=o.minX-.15&&i<=o.maxX+.15&&t>=o.minZ-.15&&t<=o.maxZ+.15)&&e1(i,t,e,n,o))return!1;return!0}function n1(i,t,e,n,s,o){return!ni(i,t,i+e*s,t+n*s,o)}const i1=(i,t,e)=>{let n=(t-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*e};class s1{constructor(){this.pos=new z(0,0,0),this.vel=new z,this.radius=.34,this.eyeHeight=1.66,this.crouchEye=1.12,this.crouching=!1,this.sprinting=!1,this.moving=!1,this.yaw=0,this.pitch=0,this.health=100,this.bob=0,this.stepTimer=0}reset(t){this.pos.set(t.x,0,t.z),this.vel.set(0,0,0),this.yaw=t.yaw??0,this.pitch=0,this.health=100,this.crouching=!1,this.sprinting=!1,this.moving=!1,this.bob=0,this.stepTimer=0}}const ra=new Ve({color:12819069,roughness:.86}),Ki=new Ve({color:1316636,roughness:.8});class Cl{constructor(t,e={}){this.scene=t,this.pos=new z(e.x??0,0,e.z??0),this.heading=e.heading??Math.PI,this.alive=!0,this.bulletHp=2,this.walkPhase=0,this.waypointIndex=0,this.wait=0,this.scanPhase=Math.random()*10,this.isTarget=!1;const n=e.coat??1911330,s=e.hat??1053206,o=e.scarf??7281953,r=new Ve({color:n,roughness:.88}),a=new Ve({color:s,roughness:.9}),l=new Ve({color:o,roughness:.92}),c=new Xt;c.position.copy(this.pos),c.rotation.y=this.heading,t.add(c),this.root=c;const h=(x,T)=>{const P=new b(x,T);return P.castShadow=!0,P.receiveShadow=!0,P},u=h(new Mt(.3,.36,.62,10),r);u.position.y=.92,c.add(u);const d=h(new Hs(.235,.44,4,12),r);d.position.y=1.23,d.scale.z=.82,c.add(d);const f=h(new Mt(.17,.22,.16,10),a);f.position.y=1.55,c.add(f);const g=h(new ee(.155,18,12),ra);g.position.y=1.66,g.scale.set(.92,1.02,.95),c.add(g),this.head=g;for(const x of[-1,1]){const T=new b(new ee(.018,5,4),Ki);T.position.set(x*.055,1.69,.137),c.add(T);const P=h(new ee(.036,8,6),ra);P.position.set(x*.151,1.66,0),P.scale.set(.45,1,.72),c.add(P);const A=new b(new V(.055,.012,.018),Ki);A.position.set(x*.057,1.724,.146),A.rotation.z=x*.08,c.add(A)}const _=h(new ee(.034,8,6),ra);_.position.set(0,1.651,.154),_.scale.set(.72,.95,1.35),c.add(_);const m=h(new Mt(.252,.258,.075,12),Ki);m.position.y=1.04,c.add(m);const p=new b(new V(.07,.05,.032),C.brass);if(p.position.set(0,1.04,.25),c.add(p),!e.targetStyle)for(let x=0;x<3;x++){const T=new b(new ee(.021,6,5),C.brass);T.position.set(.055,1.41-x*.12,.198),c.add(T)}const w=h(new an(.157,.05,7,16),l);w.position.y=1.51,w.rotation.x=Math.PI/2,c.add(w);const v=h(new V(.11,.38,.06),l);v.position.set(.11,1.33,.16),v.rotation.z=.18,c.add(v),this.parts={};for(const x of[-1,1]){const T=new Xt;T.position.set(x*.31,1.43,0);const P=h(new ee(.102,12,9),r);P.position.y=-.015,P.scale.set(1,.82,.92),T.add(P);const A=h(new Hs(.072,.42,4,8),r);A.position.y=-.24,T.add(A);const R=h(new Mt(.083,.076,.065,9),Ki);R.position.y=-.445,T.add(R);const y=h(new ee(.075,8,6),Ki);y.position.y=-.5,T.add(y),c.add(T),this.parts[x<0?"armL":"armR"]=T;const M=new Xt;M.position.set(x*.115,.9,0);const I=h(new Hs(.095,.56,4,8),a);I.position.y=-.32,M.add(I);const N=h(new V(.16,.13,.28),Ki);N.position.set(0,-.66,.05),M.add(N),c.add(M),this.parts[x<0?"legL":"legR"]=M}if(e.targetStyle){this.isTarget=!0;const x=h(new Mt(.27,.27,.035,18),a);x.position.y=1.81,c.add(x);const T=h(new Mt(.165,.18,.36,16),a);T.position.y=2,c.add(T);const P=h(new Mt(.182,.186,.07,16),l);P.position.y=1.85,c.add(P);for(let A=0;A<3;A++){const R=new b(new ee(.022,6,5),C.gold);R.position.set(0,1.36-A*.12,.19),c.add(R)}}else{const x=h(new ee(.166,16,10,0,Math.PI*2,0,Math.PI*.56),a);x.position.y=1.64,c.add(x);const T=h(new an(.158,.033,6,16),a);T.position.y=1.6,T.rotation.x=Math.PI/2,c.add(T)}this.coatMat=r,this.hatMat=a}setPosition(t,e){this.pos.set(t,0,e),this.root.position.x=t,this.root.position.z=e}syncVisual(t=0){this.root.position.x=this.pos.x,this.root.position.z=this.pos.z,this.root.position.y=t,this.root.rotation.y=this.heading}canSeePoint(t,e,n,s=24,o=.15){const r=t-this.pos.x,a=e-this.pos.z,l=Math.hypot(r,a);return l>s||l>2.1&&(r*Math.sin(this.heading)+a*Math.cos(this.heading))/l<o?!1:ni(this.pos.x,this.pos.z,t,e,n)}walk(t,e){this.walkPhase+=t*Math.max(.9,e)*1.7;const n=Math.min(1.2,e/2.4),s=Math.sin(this.walkPhase)*.52*n;this.parts.legL&&(this.parts.legL.rotation.x=s),this.parts.legR&&(this.parts.legR.rotation.x=-s),this.parts.armL&&(this.parts.armL.rotation.x=-s*.75),this.parts.armR&&(this.parts.armR.rotation.x=s*.55),this.syncVisual(Math.abs(Math.sin(this.walkPhase))*.035*n)}idle(t){const e=1-Math.exp(-t*9);this.parts.legL&&(this.parts.legL.rotation.x+=(0-this.parts.legL.rotation.x)*e),this.parts.legR&&(this.parts.legR.rotation.x+=(0-this.parts.legR.rotation.x)*e),this.parts.armL&&(this.parts.armL.rotation.x+=(0-this.parts.armL.rotation.x)*e),this.parts.armR&&(this.parts.armR.rotation.x+=(0-this.parts.armR.rotation.x)*e),this.syncVisual(0)}turnTowards(t,e,n=7){this.heading=i1(this.heading,t,1-Math.exp(-e*n)),this.root.rotation.y=this.heading}stepToward(t,e,n,s,o,r=.2){const a=t-this.pos.x,l=e-this.pos.z,c=Math.hypot(a,l);if(c<.001)return 0;if(this.turnTowards(Math.atan2(a,l),s),c>r){const h=Math.min(n*s,c-r);this.pos.x+=a/c*h,this.pos.z+=l/c*h,cr(this.pos,.33,o),this.walk(s,n)}else this.idle(s);return c}die(){this.alive&&(this.alive=!1,this.root.position.set(this.pos.x,.16,this.pos.z),this.root.rotation.set(.05,this.heading,Math.random()>.5?1.45:-1.45),this.beam&&(this.beam.visible=!1))}}const o1=new Me(1.25,9,14,1,!0),r1=new Se({color:16762762,transparent:!0,opacity:.055,blending:qe,depthWrite:!1,side:Ke});class hh extends Cl{constructor(t,e){super(t,{x:e.x,z:e.z,coat:e.coat??1780258,hat:e.hat??1053206,scarf:e.scarf??6035741}),this.waypoints=e.path&&e.path.length?e.path:[{x:e.x,z:e.z}],this.waypointIndex=0,this.speed=e.speed??1.5,this.state="patrol",this.awareness=0,this.searchTimer=0,this.fireTimer=1.2+Math.random()*1.4,this.investigatePos=new z(e.x,0,e.z),this.investigateTimer=0,this.lastSeen=new z(e.x,0,e.z),this.investigatedAlarm=!1,this.baseHeading=this.heading,this.scan=Math.random()*6,this.isGuard=!0,this.escort=!!e.escort,this.escortSide=Math.random()<.5?-1:1;const n=new b(new Mt(.036,.045,.24,8),C.iron);n.rotation.x=Math.PI/2,n.position.set(.02,-.5,.12),this.parts.armR.add(n);const s=new b(new bn(.045,12),new Se({color:16769710,toneMapped:!1}));s.position.set(.02,-.5,.25),this.parts.armR.add(s);const o=new b(o1,r1);o.rotation.x=-Math.PI/2,o.position.set(0,1.35,4.5),o.renderOrder=2,this.root.add(o),this.beam=o;const r=new Xt;r.position.set(.19,1.31,.17),r.rotation.z=-.08;const a=new b(new V(.11,.17,.055),C.iron);a.castShadow=!0,r.add(a);const l=new b(new V(.075,.062,.012),new Ve({color:658447,roughness:.38,metalness:.2}));l.position.set(0,.028,.034),r.add(l);const c=new b(new bn(.022,10),new Ve({color:6183760,roughness:.9}));c.position.set(-.018,-.025,.042),r.add(c);const h=new b(new Mt(.006,.01,.32,5),C.metal);h.position.set(.052,.2,-.012),h.rotation.z=-.12,r.add(h);const u=new b(new ee(.015,6,5),new Se({color:16735293,toneMapped:!1}));u.position.set(.036,.062,.041),u.visible=!1,r.add(u),this.root.add(r),this.radioLed=u,this.radioTimer=0;const d=new b(new V(.065,.035,.1),C.iron);d.position.set(0,-.5,.035),this.parts.armL.add(d)}startRadio(t=1.15){this.radioTimer=Math.max(this.radioTimer,t),this.state="radio",this.awareness=1}canSee(t,e){const n=t.pos.x-this.pos.x,s=t.pos.z-this.pos.z,o=Math.hypot(n,s);if(o<.001)return!0;const r=t.crouching?11:t.sprinting?19:16;if(o>r)return!1;if(o>2.4){const a=Math.sin(this.heading),l=Math.cos(this.heading);if((n*a+s*l)/o<.6)return!1}return ni(this.pos.x,this.pos.z,t.pos.x,t.pos.z,e)}raiseAlarm(t){this.investigatedAlarm||(this.investigatedAlarm=!0,t.radioAlarm(this,"INTRUDER SPOTTED"))}update(t,e){if(!this.alive)return;if(this.radioLed&&(this.radioLed.visible=this.radioTimer>0&&Math.sin(e.time*24)>-.25),this.radioTimer>0){this.radioTimer-=t,this.turnTowards(Math.atan2(e.player.pos.x-this.pos.x,e.player.pos.z-this.pos.z),t,3),this.idle(t),this.parts.armL.rotation.x=-1.88+Math.sin(e.time*18)*.035,this.parts.armL.rotation.z=-.22,this.syncVisual(0),this.radioTimer<=0&&(this.parts.armL.rotation.z=0,this.parts.armL.rotation.x=0,this.state="chase",this.searchTimer=6,this.awareness=1,this.lastSeen.set(e.player.pos.x,0,e.player.pos.z),this.radioLed&&(this.radioLed.visible=!1));return}const n=e.player,s=e.colliders,o=n.pos.x-this.pos.x,r=n.pos.z-this.pos.z,a=Math.hypot(o,r),l=this.canSee(n,s);if(l){const c=n.crouching?11:16,h=1-Math.min(1,a/c),u=n.moving?1.25:.75;this.awareness=Math.min(1,this.awareness+t*(.85+h*1.7)*u),this.lastSeen.set(n.pos.x,0,n.pos.z)}else this.state!=="chase"&&(this.awareness=Math.max(0,this.awareness-t*.3));if(this.state!=="chase"){if(this.awareness>=1)this.state="chase",this.searchTimer=5,this.heading=Math.atan2(o,r),this.raiseAlarm(e);else if(this.awareness>.25&&l){this.turnTowards(Math.atan2(o,r),t,4),this.idle(t);return}}switch(e.alarm&&this.state==="patrol"&&!this.investigatedAlarm&&(this.investigatedAlarm=!0,this.state="investigate",this.investigatePos.copy(e.alarmPos),this.investigateTimer=5),this.state){case"chase":this.updateChase(t,e,l,a);break;case"investigate":this.updateInvestigate(t,e);break;default:this.escort?this.updateEscort(t,e,l):this.updatePatrol(t,e,l);break}}updateEscort(t,e,n){if(n&&this.awareness>.05){const f=e.player;this.turnTowards(Math.atan2(f.pos.x-this.pos.x,f.pos.z-this.pos.z),t,3.5),this.idle(t);return}const s=e.target;if(!s||!s.alive){this.idle(t);return}const o=Math.sin(s.heading+Math.PI),r=Math.cos(s.heading+Math.PI),a=Math.cos(s.heading),l=-Math.sin(s.heading),c=s.pos.x+o*2.4+a*this.escortSide*1.05,h=s.pos.z+r*2.4+l*this.escortSide*1.05,u=Math.hypot(c-this.pos.x,h-this.pos.z);u>.9?this.stepToward(c,h,u>7?3.4:1.8,t,e.colliders,.6):this.idle(t),this.scan+=t;const d=s.heading+Math.PI+Math.sin(this.scan*1.15)*.55;this.turnTowards(d,t,6)}updatePatrol(t,e,n){if(n&&this.awareness>.05){const r=e.player;this.turnTowards(Math.atan2(r.pos.x-this.pos.x,r.pos.z-this.pos.z),t,3.5),this.idle(t);return}const s=this.waypoints[this.waypointIndex%this.waypoints.length];if(!s)return;if(this.wait>0){this.wait-=t,this.scan+=t,this.heading=this.baseHeading+Math.sin(this.scan*1.2)*.55,this.root.rotation.y=this.heading,this.idle(t);return}this.stepToward(s.x,s.z,this.speed,t,e.colliders,.3)<.9&&(this.waypointIndex=(this.waypointIndex+1)%this.waypoints.length,this.wait=1.2+Math.random()*2.4,this.baseHeading=this.heading,this.scan=0)}updateInvestigate(t,e){this.stepToward(this.investigatePos.x,this.investigatePos.z,2.9,t,e.colliders,1.1)<2.3?(this.investigateTimer-=t,this.scan+=t,this.heading=this.baseHeading+Math.sin(this.scan*1.4)*.8,this.root.rotation.y=this.heading,this.idle(t),this.investigateTimer<=0&&(this.state="patrol",this.awareness=0,this.waypointIndex=0,this.wait=0)):(this.investigateTimer-=t,this.investigateTimer<=-5&&(this.state="patrol",this.waypointIndex=0))}updateChase(t,e,n,s){const o=e.player;n?(this.searchTimer=5,this.lastSeen.set(o.pos.x,0,o.pos.z)):this.searchTimer-=t;const r=n?o.pos.x:this.lastSeen.x,a=n?o.pos.z:this.lastSeen.z,l=Math.hypot(r-this.pos.x,a-this.pos.z);this.turnTowards(Math.atan2(r-this.pos.x,a-this.pos.z),t,8),l>5.2?this.stepToward(r,a,4.15,t,e.colliders,4.6):this.idle(t),n&&s<17&&(this.fireTimer-=t,this.fireTimer<=0&&(this.fireTimer=1.1+Math.random()*.65,e.guardShoot(this,s))),!n&&this.searchTimer<=0&&(this.state="investigate",this.investigatePos.copy(this.lastSeen),this.investigateTimer=4,this.awareness=Math.max(.35,this.awareness*.6))}}class a1 extends Cl{constructor(t,e){super(t,{x:e.x,z:e.z,coat:14208440,hat:1513501,scarf:9314344,targetStyle:!0}),this.waypoints=e.path&&e.path.length?e.path:[{x:e.x,z:e.z}],this.waypointIndex=0,this.speed=1,this.state="patrol",this.escape=e.escape,this.isTarget=!0,this.fleeAnnounced=!1}startFlee(t,e){var n,s;this.state==="flee"||!this.alive||(this.state="flee",this.raiseAlarm(t,e),this.fleeAnnounced||(this.fleeAnnounced=!0,(s=(n=t.audio)==null?void 0:n.scream)==null||s.call(n)))}raiseAlarm(t,e){t.raiseAlarm(this,{message:e})}chooseDirection(t){const e=this.escape.x-this.pos.x,n=this.escape.z-this.pos.z,s=Math.atan2(e,n),o=[0,.45,-.45,.95,-.95,1.5,-1.5,2.2,-2.2];for(const r of o){const a=s+r,l=Math.sin(a),c=Math.cos(a);if(!n1(this.pos.x,this.pos.z,l,c,2.2,t))return{x:l,z:c}}return{x:Math.sin(s),z:Math.cos(s)}}update(t,e){if(!this.alive)return;if(e.alarm&&this.state!=="flee"&&this.startFlee(e),this.state==="flee"){const l=this.escape.x-this.pos.x,c=this.escape.z-this.pos.z,h=Math.hypot(l,c);if(h<2.6){e.fail("The target escaped into the night.");return}const u=this.chooseDirection(e.colliders),d=4,f=Math.min(d*t,Math.max(0,h-1.5));this.pos.x+=u.x*f,this.pos.z+=u.z*f,cr(this.pos,.32,e.colliders),this.heading=Math.atan2(u.x,u.z),this.root.rotation.y=this.heading,this.walk(t,d);return}const n=e.player.pos.x-this.pos.x,s=e.player.pos.z-this.pos.z,o=Math.hypot(n,s);if(o<10.5&&ni(this.pos.x,this.pos.z,e.player.pos.x,e.player.pos.z,e.colliders)){const l=Math.sin(this.heading),c=Math.cos(this.heading),h=o>.001?(n*l+s*c)/o:1,u=e.player.sprinting&&o<8.5;if(o<1.9||h>.35||u){this.startFlee(e);return}}const r=this.waypoints[this.waypointIndex%this.waypoints.length];if(!r)return;if(this.wait>0){this.wait-=t,this.scan+=t,this.heading=this.baseHeading+Math.sin(this.scan*.8)*.4,this.root.rotation.y=this.heading,this.idle(t);return}this.stepToward(r.x,r.z,this.speed,t,e.colliders,.3)<.8&&(this.waypointIndex=(this.waypointIndex+1)%this.waypoints.length,this.wait=2.4+Math.random()*3.2,this.baseHeading=this.heading,this.scan=0)}}const l1=["The boss keeps five locks on this district. You didn't hear it from me.","Cars do not stop for anyone after midnight. Look both ways.","Half the block belongs to him. The other half is too afraid to say so.","The relay tower is west. The ledgers are scattered all over the city.","You look like trouble. I'm not seeing you.","There are cameras on every corner. Smile for the city.","I heard a shot? No. Just the snow and the engines.","The plaza is watched. He never stands still for long."];class c1 extends Cl{constructor(t,e={}){var s;super(t,{x:e.x,z:e.z,coat:e.coat??2831168,hat:e.hat??1448738,scarf:e.scarf??6959672,heading:e.heading}),this.waypoints=e.path&&e.path.length?e.path:[{x:e.x,z:e.z}],this.waypointIndex=0,this.speed=e.speed??.72+Math.random()*.32,this.scan=Math.random()*8,this.baseHeading=this.heading,this.talkTimer=0,this.talkCooldown=0,this.panicTimer=0,this.name=e.name??"BYSTANDER",this.lines=(s=e.lines)!=null&&s.length?e.lines:l1,this.lineIndex=Math.floor(Math.random()*this.lines.length),this.isCivilian=!0;const n=new b(new V(.2,.24,.11),new Ve({color:e.bag??5055280,roughness:.72,metalness:.05}));n.position.set(0,-.53,.05),n.castShadow=!0,this.parts.armR.add(n)}talk(t){var n;if(this.talkTimer>0||this.talkCooldown>0)return!1;this.talkTimer=4.2,this.talkCooldown=4.2;const e=this.lines[this.lineIndex++%this.lines.length];return(n=t.showDialogue)==null||n.call(t,this,e),!0}update(t,e){if(!this.alive)return;if(this.talkCooldown=Math.max(0,this.talkCooldown-t),this.talkTimer>0){this.talkTimer-=t;const o=e.player.pos.x-this.pos.x,r=e.player.pos.z-this.pos.z;this.turnTowards(Math.atan2(o,r),t,5),this.idle(t),this.parts.armL.rotation.x=-1.35+Math.sin(e.time*4.5)*.16,this.parts.armL.rotation.z=-.18,this.syncVisual(0),this.talkTimer<=0&&(this.parts.armL.rotation.x=0,this.parts.armL.rotation.z=0);return}if(e.alarm){const o=e.alarmPos,r=this.pos.x-o.x,a=this.pos.z-o.z,l=Math.hypot(r,a);l<46&&l>.01&&(this.panicTimer=Math.max(this.panicTimer,1.2))}if(this.panicTimer>0){this.panicTimer-=t;const o=this.pos.x-e.player.pos.x,r=this.pos.z-e.player.pos.z,a=Math.hypot(o,r)||1,l=3.1*t;this.pos.x+=o/a*l,this.pos.z+=r/a*l,cr(this.pos,.3,e.colliders),this.heading=Math.atan2(o,r),this.walk(t,3.1);return}const n=this.waypoints[this.waypointIndex%this.waypoints.length];if(!n)return;if(this.wait>0){this.wait-=t,this.scan+=t,this.heading=this.baseHeading+Math.sin(this.scan*.9)*.45,this.root.rotation.y=this.heading,this.idle(t);return}this.stepToward(n.x,n.z,this.speed,t,e.colliders,.35)<.9&&(this.waypointIndex=(this.waypointIndex+1)%this.waypoints.length,this.wait=1.6+Math.random()*3.8,this.baseHeading=this.heading,this.scan=0)}}function h1(){const i=new Xt,t=new Ve({color:1710621,roughness:.72}),e=new Ve({color:2107940,roughness:.9}),n=new b(new Mt(.072,.095,.42,8),e);n.rotation.x=Math.PI/2,n.position.set(.02,-.02,.22),i.add(n);const s=new b(new ee(.085,10,8),t);s.scale.set(1,.85,1.35),s.position.set(.015,0,.06),i.add(s);const o=new b(new Mt(.028,.032,.22,8),C.woodDark);o.rotation.x=Math.PI/2,o.position.set(0,0,-.03),i.add(o);const r=new b(new ee(.036,8,6),C.brass);r.position.set(0,0,.09),i.add(r);const a=new b(new V(.13,.035,.04),C.brass);a.position.set(0,0,-.15),i.add(a);const l=new Ys;l.moveTo(-.034,0),l.lineTo(.036,.015),l.lineTo(.031,.38),l.lineTo(0,.52),l.lineTo(-.024,.39),l.closePath();const c=new El(l,{depth:.014,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:1,steps:1}),h=new b(c,C.metal);h.rotation.x=-Math.PI/2,h.rotation.z=.02,h.position.set(0,.004,-.17),h.castShadow=!1,i.add(h);const u=new b(new V(.006,.006,.46),new Se({color:14674421,toneMapped:!1}));return u.position.set(-.028,.002,-.39),u.rotation.y=0,i.add(u),i.traverse(d=>{d.frustumCulled=!1,d.material&&(d.material.envMapIntensity=1.2)}),i}const pn=[{id:"knife",name:"KNIFE",slot:"1",quiet:!0},{id:"pistol",name:"PISTOL",slot:"2",magSize:12,reserveMax:36,damage:1,range:70,spread:.02,aimSpread:.0045,fireDelay:.26,reloadTime:1.25},{id:"sniper",name:"SNIPER",slot:"3",magSize:5,reserveMax:15,damage:2,range:210,spread:.045,aimSpread:.0016,fireDelay:1.05,reloadTime:2.2,scopeFov:24}],mn=new Ve({color:2830392,metalness:.75,roughness:.34}),Bn=new Ve({color:1053464,metalness:.4,roughness:.62}),Vo=new Ve({color:2366487,metalness:.08,roughness:.88}),uu=i=>(i.traverse(t=>{t.frustumCulled=!1,t.material&&(t.material.envMapIntensity=.9)}),i);function u1(){const i=new Xt,t=new b(new V(.105,.078,.34),mn);t.position.set(0,.055,-.105),i.add(t);const e=new b(new V(.07,.016,.31),Bn);e.position.set(0,.102,-.105),i.add(e);const n=new b(new V(.082,.052,.21),Bn);n.position.set(0,0,-.06),i.add(n);const s=new b(new Mt(.025,.025,.09,12),mn);s.rotation.x=Math.PI/2,s.position.set(0,.045,-.31),i.add(s);const o=new b(new Mt(.032,.032,.03,12),Bn);o.rotation.x=Math.PI/2,o.position.set(0,.045,-.365),i.add(o);const r=new b(new V(.082,.23,.115),Vo);r.position.set(0,-.115,.035),r.rotation.x=.2,i.add(r);const a=new b(new V(.088,.13,.075),Bn);a.position.set(0,-.12,.045),a.rotation.x=.2,i.add(a);const l=new b(new an(.045,.009,6,14,Math.PI),mn);l.rotation.set(Math.PI/2,0,Math.PI),l.position.set(0,-.042,-.06),i.add(l);for(const h of[-1,1]){const u=new b(new V(.012,.026,.02),Bn);u.position.set(h*.038,.114,.02),i.add(u)}const c=new b(new V(.01,.024,.018),Bn);return c.position.set(0,.116,-.255),i.add(c),uu(i)}function d1(){const i=new Xt,t=new b(new V(.082,.085,.98),Bn);t.position.set(0,0,-.4),i.add(t);const e=new b(new V(.062,.035,.82),mn);e.position.set(0,.058,-.42),i.add(e);const n=new b(new Mt(.021,.026,.66,12),mn);n.rotation.x=Math.PI/2,n.position.set(0,.012,-1.02),i.add(n);const s=new b(new Mt(.038,.033,.1,12),Bn);s.rotation.x=Math.PI/2,s.position.set(0,.012,-1.42),i.add(s);const o=new b(new V(.095,.15,.36),Vo);o.position.set(0,-.045,.27),i.add(o);const r=new b(new V(.075,.05,.2),Vo);r.position.set(0,.075,.2),i.add(r);const a=new b(new V(.072,.17,.1),Vo);a.position.set(0,-.105,0),a.rotation.x=.24,i.add(a);const l=new b(new V(.065,.12,.14),mn);l.position.set(0,-.088,-.24),i.add(l);const c=new b(new Mt(.052,.052,.4,16),Bn);c.rotation.x=Math.PI/2,c.position.set(0,.145,-.34),i.add(c);const h=new b(new Mt(.068,.055,.1,16),mn);h.rotation.x=Math.PI/2,h.position.set(0,.145,-.58),i.add(h);const u=new b(new Mt(.058,.066,.08,16),mn);u.rotation.x=Math.PI/2,u.position.set(0,.145,-.12),i.add(u);const d=new Se({color:9418447,toneMapped:!1}),f=new b(new bn(.058,16),d);f.position.set(0,.145,-.632),i.add(f);for(const m of[-.44,-.24]){const p=new b(new V(.05,.07,.04),mn);p.position.set(0,.095,m),i.add(p)}const g=new b(new Mt(.012,.012,.15,8),mn);g.rotation.z=Math.PI/2,g.position.set(.08,.03,-.1),i.add(g);const _=new b(new ee(.022,8,6),mn);return _.position.set(.16,.03,-.1),i.add(_),uu(i)}class f1{constructor(){this.ctx=null,this.master=null,this.noiseBuffer=null,this.muted=!1,this.chimeTimer=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(this.ctx.destination);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);for(let h=0;h<e;h++)s[h]=Math.random()*2-1;this.noiseBuffer=n;const o=this.ctx.createBufferSource();o.buffer=n,o.loop=!0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=380,r.Q.value=.7;const a=this.ctx.createGain();a.gain.value=.06,o.connect(r),r.connect(a),a.connect(this.master),o.start();const l=this.ctx.createOscillator();l.frequency.value=.07;const c=this.ctx.createGain();c.gain.value=150,l.connect(c),c.connect(r.frequency),l.start(),this.chimeTimer=window.setInterval(()=>this.playChime(),5200),window.setTimeout(()=>this.playChime(),1200)}toggleMute(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this.muted?0:.7,this.ctx.currentTime,.05),this.muted}playChime(){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const t=[523.25,587.33,622.25,698.46,783.99,932.33,1046.5],e=t[Math.floor(Math.random()*t.length)],n=this.ctx.currentTime;[1,2.01,2.99].forEach((s,o)=>{const r=this.ctx.createOscillator();r.type=o===0?"sine":"triangle",r.frequency.value=e*s;const a=this.ctx.createGain(),l=.026/(o+1);a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(l,n+.02),a.gain.exponentialRampToValueAtTime(1e-4,n+3.1),r.connect(a),a.connect(this.master),r.start(n+o*.012),r.stop(n+3.3)})}noise(t=.2,e=.2,n=900,s="bandpass",o=.9){if(!this.ctx||this.muted||!this.noiseBuffer)return;const r=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer,a.playbackRate.value=.8+Math.random()*.4;const l=this.ctx.createBiquadFilter();l.type=s,l.frequency.value=n,l.Q.value=o;const c=this.ctx.createGain();c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(1e-4,r+t),a.connect(l),l.connect(c),c.connect(this.master),a.start(r),a.stop(r+t+.03)}tone(t,e,n,s="sine",o=null){if(!this.ctx||this.muted)return;const r=this.ctx.currentTime,a=this.ctx.createOscillator();a.type=s,a.frequency.setValueAtTime(t,r),o&&a.frequency.exponentialRampToValueAtTime(o,r+e);const l=this.ctx.createGain();l.gain.setValueAtTime(1e-4,r),l.gain.linearRampToValueAtTime(n,r+.01),l.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(l),l.connect(this.master),a.start(r),a.stop(r+e+.04)}footstep(t=!1){this.ctx&&(this.noise(t?.05:.09,t?.035:.08,620,"lowpass"),this.tone(t?60:82,.07,t?.025:.05,"sine"))}whoosh(){this.noise(.18,.08,2400,"bandpass",.8)}stabHit(){this.noise(.14,.18,420,"lowpass"),this.tone(95,.18,.16,"sine",48)}bodyFall(){this.ctx&&(this.noise(.25,.12,220,"lowpass"),this.tone(55,.3,.12,"sine",32))}gunshot(t=10){if(!this.ctx)return;const e=Math.max(.05,.32*(1-t/45));this.noise(.16,e,1400,"lowpass"),this.tone(120,.22,e*.6,"square",45)}pistol(){this.noise(.12,.3,2600,"lowpass"),this.tone(170,.16,.16,"square",62)}sniper(){this.noise(.3,.48,1500,"lowpass"),this.tone(74,.52,.3,"sine",34),window.setTimeout(()=>{this.noise(.2,.09,700,"lowpass")},210)}dryFire(){this.noise(.05,.12,2200,"highpass"),this.tone(320,.04,.04,"square",240)}reload(){this.noise(.07,.12,1800,"bandpass"),this.tone(210,.06,.035,"square",160),window.setTimeout(()=>{this.noise(.08,.13,1300,"bandpass"),this.tone(140,.07,.04,"square",110)},320)}weaponSwitch(){this.noise(.05,.08,1600,"bandpass")}objective(){this.ctx&&[659.25,880].forEach((t,e)=>{window.setTimeout(()=>this.tone(t,.5,.035,"sine"),e*130)})}radioCall(){this.ctx&&(this.noise(.08,.16,1900,"bandpass",1.4),this.tone(880,.09,.035,"square",660),window.setTimeout(()=>{this.noise(.34,.055,850,"bandpass",.8),this.tone(520,.18,.022,"triangle",640)},120),window.setTimeout(()=>this.noise(.06,.12,1700,"bandpass"),520))}chatter(){this.noise(.12,.03,1100,"bandpass",.7),this.tone(230,.1,.018,"triangle",280)}horn(){this.ctx&&(this.tone(330,.32,.11,"sawtooth"),this.tone(392,.3,.09,"square"),window.setTimeout(()=>this.tone(330,.26,.07,"sawtooth"),220))}impact(){this.noise(.2,.16,300,"lowpass"),this.tone(70,.24,.14,"sine",38)}alarm(){this.ctx&&(this.tone(392,.4,.045,"sawtooth"),window.setTimeout(()=>this.tone(523.25,.5,.045,"sawtooth"),160))}scream(){this.ctx&&this.tone(740,.35,.035,"triangle",420)}success(){if(!this.ctx)return;const t=this.ctx.currentTime;[261.63,329.63,392,523.25].forEach((e,n)=>{const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=e;const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(.045,t+.03+n*.05),o.gain.exponentialRampToValueAtTime(1e-4,t+3.4),s.connect(o),o.connect(this.master),s.start(t+n*.08),s.stop(t+3.6)}),this.tone(1046.5,.8,.02,"triangle")}fail(){this.ctx&&(this.tone(110,1.8,.08,"sawtooth",55),this.tone(82,2.2,.06,"sine",41))}}const $i=(i,t,e)=>i<t?t:i>e?e:i,p1=(i,t,e,n)=>{let s=0,o=n;const r=[e.minX,0,e.minZ],a=[e.maxX,e.height??3,e.maxZ],l=[i.x,i.y,i.z],c=[t.x,t.y,t.z];for(let h=0;h<3;h++){if(Math.abs(c[h])<1e-8){if(l[h]<r[h]||l[h]>a[h])return 1/0;continue}let u=(r[h]-l[h])/c[h],d=(a[h]-l[h])/c[h];if(u>d&&([u,d]=[d,u]),s=Math.max(s,u),o=Math.min(o,d),s>o)return 1/0}return s},uh=(i,t,e,n)=>{const s=i.x-e.x,o=i.y-e.y,r=i.z-e.z,a=s*t.x+o*t.y+r*t.z,l=s*s+o*o+r*r-n*n,c=a*a-l;if(c<0)return 1/0;const h=Math.sqrt(c),u=-a-h;if(u>.05)return u;const d=-a+h;return d>.05?d:1/0},m1={uniforms:{topColor:{value:new Wt(330520)},horizonColor:{value:new Wt(1911877)},bottomColor:{value:new Wt(329742)}},vertexShader:`
    varying vec3 vWorld;
    void main() {
      vec4 world = modelMatrix * vec4(position, 1.0);
      vWorld = world.xyz;
      gl_Position = projectionMatrix * viewMatrix * world;
    }
  `,fragmentShader:`
    uniform vec3 topColor;
    uniform vec3 horizonColor;
    uniform vec3 bottomColor;
    varying vec3 vWorld;
    void main() {
      float h = normalize(vWorld).y;
      vec3 col = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.62));
      col = mix(bottomColor, col, smoothstep(-0.14, 0.05, h));
      gl_FragColor = vec4(col, 1.0);
    }
  `},g1={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.045},vignette:{value:.42}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float grain;
    uniform float vignette;
    varying vec2 vUv;

    float rand(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.82, 0.24, d);
      color.rgb *= mix(1.0, vig, vignette);
      color.rgb = mix(color.rgb, color.rgb * vec3(0.965, 1.0, 1.055), 0.6);
      float noise = rand(vUv * 1440.0 + fract(time) * 90.0) - 0.5;
      color.rgb += noise * grain;
      gl_FragColor = color;
    }
  `};class x1{constructor(t,e={}){this.canvas=t,this.hooks=e,this.audio=new f1,this.renderer=new Tg({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=gh,this.renderer.toneMapping=ll,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Le,this.scene=new Wr,this.scene.background=new Wt(329743),this.camera=new tn(70,window.innerWidth/window.innerHeight,.05,700),this.camera.rotation.order="YXZ",this.renderPass=new px(this.scene,this.camera),this.composer=new fx(this.renderer),this.composer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.composer.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(this.renderPass),this.bloom=new ms(new at(window.innerWidth,window.innerHeight),.62,.6,.8),this.composer.addPass(this.bloom),this.outputPass=new xx,this.composer.addPass(this.outputPass),this.gradePass=new cu(g1),this.composer.addPass(this.gradePass),this.clock=new au,this.time=0,this.state="boot",this.levelIndex=0,this.keys=new Set,this.snowSystems=[],this.effects=[],this.colliders=[],this.agents=[],this.guards=[],this.health=100,this.alarm=!1,this.alarmPos=new z,this.alerts=0,this.guardsKilled=0,this.elapsed=0,this.attackCooldown=0,this.swing=-1,this.hitDone=!0,this.lookSway={x:0,y:0},this.footTimer=0,this.hudTimer=0,this.damageFlash=0,this.shake=0,this.menuAngle=.8,this.snowSpeedFactor=1,this.snowWind=new z(.3,0,.1),this.bloodGeo=new ee(.035,5,4),this.bloodMat=new Se({color:7999764}),this.flashMaterial=new ss({map:Ut.glow,color:16768936,transparent:!0,opacity:.9,depthWrite:!1,blending:qe}),this.weaponModels=[h1(),u1(),d1()],this.weaponModels.forEach(n=>{n.visible=!1,this.camera.add(n)}),this.weaponIndex=0,this.weapon=this.weaponModels[0],this.ammo=[null,null,null],this.aiming=!1,this.scoped=!1,this.reloading=!1,this.reloadTimer=0,this.fireCooldown=0,this.gunKick=0,this.weaponSwitchT=1,this.tasks=[],this.objectivesComplete=!1,this.interactTask=null,this.objectivesAnnounced=!1,this.taskPulse=0,this.civilians=[],this.talkTarget=null,this.dialogueTimer=0,this.traffic=[],this.pendingRadio=null,this.bounds=78,this.autoReload=!1,this.resetLoadout(),this.buildEnvironment(),this.buildSky(),this.buildSnow(),this.loop=this.loop.bind(this),this.onResize=this.onResize.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),window.addEventListener("resize",this.onResize),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),document.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mousedown",this.onMouseDown),document.addEventListener("mouseup",this.onMouseUp),t.addEventListener("contextmenu",n=>n.preventDefault()),requestAnimationFrame(this.loop)}resetLoadout(){var t,e;this.ammo=[null,{mag:pn[1].magSize,reserve:pn[1].reserveMax},{mag:pn[2].magSize,reserve:pn[2].reserveMax}],this.weaponIndex=0,this.weapon=((t=this.weaponModels)==null?void 0:t[0])??null,this.aiming=!1,this.scoped=!1,this.reloading=!1,this.reloadTimer=0,this.fireCooldown=0,this.gunKick=0,this.weaponSwitchT=1,this.autoReload=!1,(e=this.weaponModels)==null||e.forEach(n=>{n.visible=!1})}setWeaponsVisible(t){this.weaponModels.forEach((e,n)=>{e.visible=!!(t&&n===this.weaponIndex&&!this.scoped)})}setWeapon(t){var e,n,s,o;this.state==="playing"&&(!Number.isInteger(t)||t<0||t>=pn.length||t!==this.weaponIndex&&(this.weaponModels[this.weaponIndex].visible=!1,this.weaponIndex=t,this.weapon=this.weaponModels[t],this.swing=-1,this.hitDone=!0,this.attackCooldown=0,this.reloading=!1,this.reloadTimer=0,this.aiming=!1,this.scoped=!1,this.weaponSwitchT=0,(n=(e=this.hooks).onScope)==null||n.call(e,!1),this.weapon.visible=!0,(o=(s=this.audio).weaponSwitch)==null||o.call(s),this.emitHud()))}setAiming(t){var e,n;this.state!=="playing"||this.weaponIndex===0||(this.aiming=!!t,this.scoped=this.aiming&&this.weaponIndex===2,(n=(e=this.hooks).onScope)==null||n.call(e,this.scoped),this.scoped?this.weapon.visible=!1:this.state==="playing"&&(this.weapon.visible=!0))}startReload(){var n,s,o,r;const t=pn[this.weaponIndex],e=this.ammo[this.weaponIndex];!t||!e||t.id==="knife"||this.reloading||e.mag>=t.magSize||e.reserve<=0||(this.reloading=!0,this.reloadTimer=t.reloadTime,this.autoReload=!1,this.aiming=!1,this.scoped=!1,(s=(n=this.hooks).onScope)==null||s.call(n,!1),(r=(o=this.audio).reload)==null||r.call(o),this.emitHud())}finishReload(){const t=pn[this.weaponIndex],e=this.ammo[this.weaponIndex];if(!t||!e)return;const n=Math.min(t.magSize-e.mag,e.reserve);e.mag+=n,e.reserve-=n,this.reloading=!1,this.reloadTimer=0,this.emitHud()}getWeaponHud(){const t=pn[this.weaponIndex],e=this.ammo[this.weaponIndex];return{name:t.name,slot:t.slot,id:t.id,ammo:e?e.mag:null,reserve:e?e.reserve:null,reloading:this.reloading}}buildEnvironment(){const t=new Ya(this.renderer),e=new Wr,n=new b(new ee(20,32,16),new Se({color:2307148,side:He}));e.add(n);const s=new b(new rn(18,3.2),new Se({color:16756838}));s.position.set(0,1.6,-17),e.add(s);const o=new b(new rn(9,8),new Se({color:11127039}));o.position.set(12,9,6),o.lookAt(0,0,0),e.add(o);const r=new b(new bn(20,24),new Se({color:1713460}));r.rotation.x=-Math.PI/2,r.position.y=-4,e.add(r),this.envMap=t.fromScene(e,.02).texture,t.dispose(),this.skyGroup=new Xt;const a=new b(new ee(320,40,24),new ke({...m1,side:He,depthWrite:!1,fog:!1}));a.renderOrder=-10,this.skyMesh=a,this.skyGroup.add(a);const l=new he,c=new Float32Array(900*3);for(let h=0;h<900;h++){const u=Math.random()*Math.PI*2,d=.08+Math.random()*.92,f=Math.sqrt(1-d*d)*300;c[h*3]=Math.cos(u)*f,c[h*3+1]=d*300,c[h*3+2]=Math.sin(u)*f}l.setAttribute("position",new Te(c,3)),this.starField=new ji(l,new Si({color:14083583,size:1.35,sizeAttenuation:!1,transparent:!0,opacity:.8,depthWrite:!1,fog:!1})),this.skyGroup.add(this.starField),this.moon=new Ue(new ss({map:Ut.moon,transparent:!0,depthWrite:!1,fog:!1,opacity:.95})),this.moon.scale.set(46,46,1),this.moon.position.set(-160,120,-250),this.skyGroup.add(this.moon)}buildSky(){}buildSnow(){this.snowGroup=new Xt;const t=[{count:2600,size:.085,opacity:.9,range:30},{count:3800,size:.055,opacity:.55,range:70}];for(const e of t){const n=new Float32Array(e.count*3),s=new Float32Array(e.count),o=new he;o.setAttribute("position",new Te(n,3));const r=new Si({map:Ut.flake,size:e.size,transparent:!0,opacity:e.opacity,depthWrite:!1,color:15332095,sizeAttenuation:!0,alphaTest:.01,fog:!0}),a=new ji(o,r);a.frustumCulled=!1,this.snowGroup.add(a),this.snowSystems.push({points:a,positions:n,speeds:s,count:e.count,active:e.count,range:e.range,size:e.size})}}resetSnow(t){const e=(t==null?void 0:t.x)??0,n=(t==null?void 0:t.z)??0;for(const s of this.snowSystems){s.range/2;for(let o=0;o<s.count;o++)s.positions[o*3]=e+(Math.random()-.5)*s.range,s.positions[o*3+1]=Math.random()*30,s.positions[o*3+2]=n+(Math.random()-.5)*s.range,s.speeds[o]=.55+Math.random()*1.5;s.points.geometry.attributes.position.needsUpdate=!0}}setSnowDensity(t){const e=Math.floor(t*.42),n=t-e,s=[e,n];this.snowSystems.forEach((o,r)=>{o.active=Math.min(o.count,s[r]),o.points.geometry.setDrawRange(0,o.active)})}loadLevel(t,{preview:e=!1}={}){var h,u;this.levelIndex=t,this.preview=e,this.level=An[t],this.levelIndex=t,this.clearEffects(),this.scene=new Wr,this.scene.background=new Wt(this.level.fogColor),this.scene.environment=this.envMap,this.scene.environmentIntensity=.5,this.scene.fog=new Ml(this.level.fogColor,this.level.fogDensity),this.skyMesh.material.uniforms.topColor.value.set(this.level.skyTop),this.skyMesh.material.uniforms.horizonColor.value.set(this.level.skyHorizon),this.skyMesh.material.uniforms.bottomColor.value.set(this.level.fogColor),this.starField.material.opacity=this.level.starOpacity??.7,this.moon.material.opacity=this.level.starOpacity>.5?.95:.6,this.scene.add(this.skyGroup);const n=new rx(this.level.skyHorizon,1317412,this.level.hemiIntensity??.5);this.scene.add(n);const s=new th(this.level.moonColor,this.level.moonIntensity??1.6);s.position.set(-34,48,-22),s.target.position.set(0,0,0),s.castShadow=!0,s.shadow.mapSize.set(3072,3072);const o=this.level.shadowSpan??Math.min(110,(this.level.bounds??78)+4);s.shadow.camera.left=-o,s.shadow.camera.right=o,s.shadow.camera.top=o,s.shadow.camera.bottom=-o,s.shadow.camera.near=1,s.shadow.camera.far=this.level.shadowFar??240,s.shadow.bias=-4e-4,s.shadow.normalBias=.03,s.shadow.camera.updateProjectionMatrix(),this.scene.add(s),this.scene.add(s.target);const r=new th(9021654,.24);r.position.set(30,18,30),this.scene.add(r);const a=new t1(this.scene),l=this.level.build(a);this.world=a,this.colliders=a.colliders,this.levelTasks=l.tasks??[];const c=this.level.bounds??78;this.bounds=c,this.colliders.push({minX:-c-8,maxX:c+8,minZ:c,maxZ:c+5,height:4},{minX:-c-8,maxX:c+8,minZ:-c-5,maxZ:-c,height:4},{minX:c,maxX:c+5,minZ:-c-8,maxZ:c+8,height:4},{minX:-c-5,maxX:-c,minZ:-c-8,maxZ:c+8,height:4}),this.player=new s1,this.player.reset(l.playerSpawn),this.target=new a1(this.scene,{x:l.targetSpawn.x,z:l.targetSpawn.z,path:l.targetPath,escape:l.escape}),this.guards=l.guards.map(d=>new hh(this.scene,d)),l.escort&&this.guards.push(new hh(this.scene,{x:l.escort.x,z:l.escort.z,path:[{x:l.escort.x,z:l.escort.z}],escort:!0,coat:1316895,hat:592654,scarf:8002852,speed:1.8})),this.agents=[this.target,...this.guards],this.civilians=(l.civilians??[]).map(d=>new c1(this.scene,d)),this.traffic=a.traffic??[],this.pendingRadio=null,this.talkTarget=null,this.dialogueTimer=0,this.setupTasks(),this.marker=new Ue(new ss({map:Ut.marker,transparent:!0,depthTest:!1,depthWrite:!1,opacity:.95,toneMapped:!1})),this.marker.scale.set(.85,.85,1),this.marker.renderOrder=999,this.marker.visible=!1,this.scene.add(this.marker),this.scene.add(this.camera),this.scene.add(this.snowGroup),this.setSnowDensity(this.level.snow.count),this.resetSnow(this.player.pos),this.snowSpeedFactor=this.level.snow.speed??1,this.snowWind.set(this.level.snow.windX??0,0,this.level.snow.windZ??0),this.alarm=!1,this.alarmPos.set(0,0,0),this.health=100,this.elapsed=0,this.alerts=0,this.guardsKilled=0,this.pendingRadio=null,this.talkTarget=null,this.dialogueTimer=0,this.attackCooldown=0,this.swing=-1,this.hitDone=!0,this.lookSway.x=0,this.lookSway.y=0,this.footTimer=0,this.hudTimer=0,this.shake=0,this.endTimer=0,this.keys.clear(),this.resetLoadout(),this.setWeaponsVisible(!1),this.scoped=!1,this.aiming=!1,(u=(h=this.hooks).onScope)==null||u.call(h,!1),this.player.pitch=0,this.renderPass.scene=this.scene,this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.fov=70,this.camera.updateProjectionMatrix(),e?this.enterMenuView():(this.state="ready",this.camera.position.set(this.player.pos.x,this.player.eyeHeight,this.player.pos.z),this.camera.rotation.set(0,this.player.yaw,0))}begin(){var t,e,n,s;this.state==="ready"&&(this.state="playing",this.player.health=100,this.health=100,this.elapsed=0,this.alerts=0,this.guardsKilled=0,this.alarm=!1,this.alarmPos.set(0,0,0),this.pendingRadio=null,this.talkTarget=null,this.dialogueTimer=0,this.resetLoadout(),this.setWeaponsVisible(!0),(e=(t=this.hooks).onScope)==null||e.call(t,!1),this.marker.visible=!0,this.attackCooldown=0,this.swing=-1,this.hitDone=!0,this.lookSway.x=0,this.lookSway.y=0,this.footTimer=0,this.hudTimer=0,this.shake=0,this.endTimer=0,this.keys.clear(),this.camera.fov=70,this.camera.updateProjectionMatrix(),this.camera.position.set(this.player.pos.x,this.player.eyeHeight,this.player.pos.z),this.camera.rotation.set(0,this.player.yaw,0),this.clock.getDelta(),this.audio.init(),this.level.hint&&((s=(n=this.hooks).onToast)==null||s.call(n,this.level.hint)),this.hooks.onHud&&this.emitHud())}enterMenuView(){var t,e;this.state="menu",this.setWeaponsVisible(!1),this.scoped=!1,(e=(t=this.hooks).onScope)==null||e.call(t,!1),this.marker.visible=!1,this.menuAngle=.8,this.orbitCamera(.016)}returnToMenu(){document.pointerLockElement&&document.exitPointerLock(),this.state="menu",this.loadLevel(0,{preview:!0})}pause(){var t,e;this.state==="playing"&&(this.state="paused",this.keys.clear(),this.aiming=!1,this.scoped=!1,(e=(t=this.hooks).onScope)==null||e.call(t,!1))}resume(){this.state==="paused"&&(this.state="playing",this.clock.getDelta(),this.keys.clear())}onKeyDown(t){var e,n;if(t.code==="KeyM"){this.audio.init();const s=this.audio.toggleMute();(n=(e=this.hooks).onMute)==null||n.call(e,s)}if(t.code==="Digit1"||t.code==="Digit2"||t.code==="Digit3"){this.setWeapon(Number(t.code.slice(-1))-1);return}if(t.code==="KeyR"){this.startReload();return}t.code==="KeyE"&&this.state==="playing"&&this.tryTalk(),this.keys.add(t.code)}onKeyUp(t){this.keys.delete(t.code)}onMouseMove(t){if(this.state!=="playing")return;const e=document.pointerLockElement===this.canvas,n=(t.buttons&2)===2;if(!e&&!n)return;const s=e?.0021:.0034;this.player.yaw-=t.movementX*s,this.player.pitch-=t.movementY*s,this.player.pitch=$i(this.player.pitch,-1.42,1.42),this.lookSway.x=$i(this.lookSway.x+t.movementX*22e-5,-1,1),this.lookSway.y=$i(this.lookSway.y+t.movementY*22e-5,-1,1)}onMouseDown(t){if(this.state==="playing"){if(t.button===2){this.setAiming(!0);return}if(t.button===0){if(this.weaponIndex===0){if(this.attackCooldown>0||this.swing>=0)return;this.swing=0,this.hitDone=!1,this.attackCooldown=.58,this.audio.whoosh();return}this.fireGun()}}}onMouseUp(t){t.button===2&&this.setAiming(!1)}onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e)}loop(){var e;requestAnimationFrame(this.loop);const t=Math.min(.05,this.clock.getDelta());this.state!=="paused"&&this.state!=="boot"&&(this.time+=t,this.gradePass.uniforms.time.value=this.time,this.updateSnow(t),this.updateEffects(t),(e=this.world)==null||e.update(this.time,t),this.state==="playing"?this.updatePlaying(t):this.state==="ending"?this.updateEnding(t):this.state==="menu"&&this.orbitCamera(t)),this.composer.render()}orbitCamera(t){if(!this.level)return;const e=this.level.focus??{x:0,y:3,z:0};this.menuAngle+=t*.03;const n=19;this.camera.position.set(e.x+Math.cos(this.menuAngle)*n,7.2+Math.sin(this.menuAngle*.8)*1.1,e.z+Math.sin(this.menuAngle)*n),this.camera.lookAt(e.x,e.y,e.z)}updateSnow(t){const e=this.camera.position,n=this.snowWind.x,s=this.snowWind.z;for(const o of this.snowSystems){const r=o.range/2,a=o.active;for(let l=0;l<a;l++){const c=l*3;o.positions[c]+=n*t,o.positions[c+1]-=(.5+o.speeds[l])*t*this.snowSpeedFactor,o.positions[c+2]+=s*t,o.positions[c+1]<-.4&&(o.positions[c+1]=26+Math.random()*8),o.positions[c]-e.x>r?o.positions[c]-=o.range:o.positions[c]-e.x<-r&&(o.positions[c]+=o.range),o.positions[c+2]-e.z>r?o.positions[c+2]-=o.range:o.positions[c+2]-e.z<-r&&(o.positions[c+2]+=o.range)}o.points.geometry.attributes.position.needsUpdate=!0}}updateEffects(t){for(let e=this.effects.length-1;e>=0;e--){const n=this.effects[e];n.life-=t,n.velocity&&(n.velocity.y-=9.8*t,n.mesh.position.addScaledVector(n.velocity,t)),n.fade&&n.mesh.material&&(n.mesh.material.opacity=Math.max(0,n.life/n.maxLife)*n.baseOpacity),n.shrink&&n.mesh.scale.multiplyScalar(Math.max(.01,1-t*3.5)),n.life<=0&&(this.scene.remove(n.mesh),n.disposeGeom&&n.mesh.geometry&&n.mesh.geometry.dispose(),n.disposeMat&&n.mesh.material&&n.mesh.material.dispose(),this.effects.splice(e,1))}}clearEffects(){for(const t of this.effects)t.disposeGeom&&t.mesh.geometry&&t.mesh.geometry.dispose(),t.disposeMat&&t.mesh.material&&t.mesh.material.dispose();this.effects=[]}updatePlaying(t){var e,n;this.elapsed+=t,this.updatePlayer(t),this.updateWeapon(t),this.updateTasks(t),this.updateTalkTarget();for(const s of this.agents)s.update(t,this);this.updateTraffic(t);for(const s of this.civilians)s.update(t,this);this.updatePendingRadio(t),this.dialogueTimer>0&&(this.dialogueTimer-=t,this.dialogueTimer<=0&&((n=(e=this.hooks).onDialogue)==null||n.call(e,null))),this.updateMarker(),this.updateHud(t)}updateTalkTarget(){if(this.talkTarget=null,this.state!=="playing"||this.interactTask)return;let t=null,e=1/0;for(const n of this.civilians){if(!n.alive||n.talkTimer>0)continue;const s=Math.hypot(this.player.pos.x-n.pos.x,this.player.pos.z-n.pos.z);s>2.7||s>=e||ni(this.player.pos.x,this.player.pos.z,n.pos.x,n.pos.z,this.colliders)&&(t=n,e=s)}this.talkTarget=t}tryTalk(){this.state!=="playing"||this.interactTask||!this.talkTarget||this.talkTarget.talk(this)}showDialogue(t,e){var n,s,o,r;this.dialogueTimer=4.4,(s=(n=this.hooks).onDialogue)==null||s.call(n,{name:t.name,line:e}),(r=(o=this.audio).chatter)==null||r.call(o)}updateTraffic(t){var n,s,o,r;if(!this.traffic.length)return;const e=this.player;for(const a of this.traffic){a.cooldown=Math.max(0,a.cooldown-t),a.pos+=a.speed*a.dir*t,a.pos>a.max?a.pos=a.min:a.pos<a.min&&(a.pos=a.max),a.axis==="z"?a.group.position.set(a.lane,0,a.pos):a.group.position.set(a.pos,0,a.lane);const l=a.axis==="z"?1.18:2.35,c=a.axis==="z"?2.35:1.18,h=e.pos.x-a.group.position.x,u=e.pos.z-a.group.position.z;a.cooldown<=0&&Math.abs(h)<l+e.radius&&Math.abs(u)<c+e.radius&&(a.cooldown=2.4,(s=(n=this.audio).horn)==null||s.call(n),(r=(o=this.hooks).onToast)==null||r.call(o,"WATCH THE TRAFFIC"),this.damagePlayer(26+a.speed*1.1,"A car ran you down in the street."),a.axis==="z"?e.vel.z+=a.dir*5.5:e.vel.x+=a.dir*5.5)}}updatePendingRadio(t){if(!this.pendingRadio||(this.pendingRadio.timer-=t,this.pendingRadio.timer>0))return;const e=this.pendingRadio.guard;this.pendingRadio=null,this.raiseAlarm(e,{message:null})}updateEnding(t){const e=t*.38;this.endTimer-=t,this.updateWeapon(e);for(const n of this.agents)n.update(e,this);this.updateMarker(),this.endTimer<=0&&this.finishSuccess()}updatePlayer(t){const e=this.player;e.crouching=this.keys.has("KeyC"),e.sprinting=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&!e.crouching;let n=0,s=0;this.keys.has("KeyW")&&(s+=1),this.keys.has("KeyS")&&(s-=1),this.keys.has("KeyA")&&(n-=1),this.keys.has("KeyD")&&(n+=1);const o=Math.hypot(n,s);o>0&&(n/=o,s/=o),document.pointerLockElement!==this.canvas&&(this.keys.has("ArrowLeft")&&(e.yaw+=1.8*t),this.keys.has("ArrowRight")&&(e.yaw-=1.8*t),this.keys.has("ArrowUp")&&(e.pitch+=1.8*.7*t),this.keys.has("ArrowDown")&&(e.pitch-=1.8*.7*t),e.pitch=$i(e.pitch,-1.42,1.42));let r=e.crouching?2.15:e.sprinting?6.25:4.05;this.aiming&&this.weaponIndex>0&&(r*=.62);const a=-Math.sin(e.yaw),l=-Math.cos(e.yaw),c=Math.cos(e.yaw),h=-Math.sin(e.yaw),u=(a*s+c*n)*r,d=(l*s+h*n)*r,f=1-Math.exp(-t*12);e.vel.x+=(u-e.vel.x)*f,e.vel.z+=(d-e.vel.z)*f,e.pos.x+=e.vel.x*t,e.pos.z+=e.vel.z*t,cr(e.pos,e.radius,this.colliders),e.moving=Math.hypot(e.vel.x,e.vel.z)>.7,e.moving?(e.bob+=t*(e.sprinting?13.5:9),this.footTimer-=t,this.footTimer<=0&&(this.footTimer=e.crouching?.58:e.sprinting?.3:.43,this.audio.footstep(e.crouching))):e.bob+=t*1.6;const g=e.moving?e.crouching?.014:e.sprinting?.048:.028:.005,_=e.crouching?e.crouchEye:e.eyeHeight;this.camera.position.set(e.pos.x,_+Math.sin(e.bob)*g,e.pos.z);const m=this.scoped?pn[2].scopeFov:this.aiming&&this.weaponIndex>0?54:e.sprinting?75:e.crouching?68:70;Math.abs(this.camera.fov-m)>.02&&(this.camera.fov+=(m-this.camera.fov)*Math.min(1,t*9),this.camera.updateProjectionMatrix());const p=Math.sin(e.bob*.5)*.0035*(e.sprinting?2:1);this.camera.rotation.set(e.pitch,e.yaw,p),this.shake>.001&&(this.shake=Math.max(0,this.shake-t*2.6),this.camera.rotation.x+=Math.sin(this.time*68)*this.shake*.008,this.camera.rotation.y+=Math.cos(this.time*59)*this.shake*.008)}updateWeapon(t){this.fireCooldown=Math.max(0,this.fireCooldown-t),this.attackCooldown=Math.max(0,this.attackCooldown-t),this.gunKick=Math.max(0,this.gunKick-t*6.5),this.weaponSwitchT=Math.min(1,this.weaponSwitchT+t*7),this.reloading&&(this.reloadTimer-=t,this.reloadTimer<=0&&this.finishReload());const e=1-Math.exp(-t*8);this.lookSway.x+=(0-this.lookSway.x)*e,this.lookSway.y+=(0-this.lookSway.y)*e;const n=this.lookSway.x*.05,s=this.lookSway.y*.04,o=(1-this.weaponSwitchT)*.35,r=this.reloading?.16:0;if(this.weaponIndex===0){this.weapon.visible=!0,this.swing>=0&&(this.swing+=t*4.1,!this.hitDone&&this.swing>.32&&(this.hitDone=!0,this.performStrike()),this.swing>=1&&(this.swing=-1));const u=this.swing>=0?Math.sin(Math.min(1,this.swing)*Math.PI):0;this.weapon.position.set(.27-u*.4+n,-.25-u*.06+Math.sin(this.player.bob)*.006+s-o,-.46+u*.17),this.weapon.rotation.set(.2+u*1.05-this.player.pitch*.08,-.55+u*.95,.18-u*.95);return}if(this.scoped){this.weapon.visible=!1;return}this.weapon.visible=!0;const a=pn[this.weaponIndex],l=this.aiming?1:0,c=this.gunKick,h=Math.sin(this.player.bob)*.004;a.id==="pistol"?(this.weapon.position.set(.245-l*.245+n*.35,-.23+l*.075+s*.3+h-o-r,-.52+l*.045+c*.07),this.weapon.rotation.set(.02+c*.05+r*1.2,-.055+l*.055,.015-l*.015)):(this.weapon.position.set(.24-l*.24+n*.25,-.29+l*.13+s*.24+h-o-r,-.62+l*.06+c*.12),this.weapon.rotation.set(.03+c*.06+r*1.1,-.05+l*.05,.012))}fireGun(){var a,l,c,h,u,d;const t=pn[this.weaponIndex];if(!t||t.id==="knife"||this.state!=="playing"||this.reloading||this.fireCooldown>0)return;const e=this.ammo[this.weaponIndex];if(!e)return;if(e.mag<=0){(l=(a=this.audio).dryFire)==null||l.call(a),this.startReload();return}e.mag-=1,this.fireCooldown=t.fireDelay,this.gunKick=1,this.player.pitch=$i(this.player.pitch+(t.id==="sniper"?.052:.016),-1.42,1.42);const n=new z;this.camera.getWorldDirection(n);const s=this.scoped?35e-5:this.aiming?t.aimSpread:t.spread;if(s>0){const f=new z().crossVectors(n,this.camera.up).normalize(),g=new z().crossVectors(f,n).normalize();n.addScaledVector(f,(Math.random()*2-1)*s),n.addScaledVector(g,(Math.random()*2-1)*s),n.normalize()}t.id==="sniper"?(h=(c=this.audio).sniper)==null||h.call(c):(d=(u=this.audio).pistol)==null||d.call(u);const o=this.camera.localToWorld(new z(.12,-.11,t.id==="sniper"?-1.1:-.5));this.spawnMuzzleFlash(o,t.id==="sniper"?1.7:1);const r=this.raycastShot(this.camera.position,n,t.range);this.spawnTracer(o,r.point,t.id==="sniper"?16769707:16766106,t.id==="sniper"?.18:.07),r.agent?this.damageAgent(r.agent,t.damage):this.spawnImpact(r.point),this.alertNearbyGuards(this.player.pos),this.emitHud(),e.mag<=0&&this.startReload()}raycastShot(t,e,n){let s=n,o=null;for(const a of this.colliders){const l=p1(t,e,a,s);l<s&&(s=l)}for(const a of this.agents){if(!a.alive)continue;const l={x:a.pos.x,y:1.15,z:a.pos.z},c={x:a.pos.x,y:1.64,z:a.pos.z};let h=uh(t,e,l,.37);h=Math.min(h,uh(t,e,c,.2)),h<s&&(s=h,o=a)}const r=t.clone().addScaledVector(e,s);return{agent:o,point:r,distance:s}}spawnMuzzleFlash(t,e){const n=new Ue(this.flashMaterial.clone());n.position.copy(t),n.scale.set(e,e,1),this.scene.add(n),this.effects.push({mesh:n,life:.06,maxLife:.06,fade:!0,baseOpacity:.95,disposeMat:!0})}spawnTracer(t,e,n,s){const o=new Zo({color:n,transparent:!0,opacity:.8,depthWrite:!1,blending:qe}),r=new Ka(new he().setFromPoints([t.clone(),e.clone()]),o);this.scene.add(r),this.effects.push({mesh:r,life:s,maxLife:s,fade:!0,baseOpacity:.8,disposeGeom:!0,disposeMat:!0})}spawnImpact(t){for(let e=0;e<4;e++){const n=new Ue(this.flashMaterial.clone());n.material.color.setHex(16762750),n.position.copy(t),n.scale.setScalar(.12+Math.random()*.08),this.scene.add(n),this.effects.push({mesh:n,life:.16+Math.random()*.1,maxLife:.26,fade:!0,baseOpacity:.7,velocity:new z((Math.random()-.5)*2.4,.6+Math.random()*1.8,(Math.random()-.5)*2.4),disposeMat:!0})}}damageAgent(t,e){if(t.alive){if(t.bulletHp=Math.max(0,(t.bulletHp??2)-e),this.spawnBlood(t.pos),this.audio.stabHit(),t.bulletHp<=0){this.killAgent(t,"gun");return}t===this.target?this.target.startFlee(this):(t.awareness=1,t.state="chase",t.searchTimer=5,t.lastSeen.set(this.player.pos.x,0,this.player.pos.z))}}setupTasks(){const t=this.levelTasks??[];this.tasks=t.map((e,n)=>({...e,index:n,label:e.label??(e.type==="relay"?"DISABLE SECURITY RELAY":"RECOVER THE LEDGER"),complete:!1,progress:0,group:null,beacon:null,icon:null,screen:null})),this.objectivesComplete=this.tasks.length===0,this.objectivesAnnounced=this.objectivesComplete,this.interactTask=null;for(const e of this.tasks)this.createTaskProp(e)}createTaskProp(t){const e=t.type==="relay",n=new Xt;if(n.position.set(t.x,0,t.z),this.scene.add(n),e){const a=new b(new V(.92,1.05,.55),C.metal);a.position.y=.525,n.add(a);const l=new b(new V(.58,.36,.05),new Se({color:6805759,toneMapped:!1}));l.position.set(0,.82,.29),n.add(l),t.screen=l;const c=new b(new Mt(.018,.026,.92,8),C.iron);c.position.set(.31,1.45,0),n.add(c)}else{const a=new b(new V(1,.72,.9),C.woodDark);a.position.y=.36,n.add(a);const l=new b(new V(.56,.4,.17),C.iron);l.position.set(0,.9,0),n.add(l);for(const c of[-1,1]){const h=new b(new V(.07,.07,.04),C.brass);h.position.set(c*.16,.92,.1),n.add(h)}}const s=e?6805759:15846525,o=new b(new Mt(.34,.62,7.4,14,1,!0),new Se({color:s,transparent:!0,opacity:.1,depthWrite:!1,side:Ke,blending:qe,toneMapped:!1}));o.position.y=3.7,n.add(o);const r=new b(new rs(.22,0),new Se({color:s,toneMapped:!1}));r.position.y=2.55,n.add(r),t.group=n,t.beacon=o,t.icon=r,this.world.solid(t.x,t.z,1,1,1.1)}updateTasks(t){this.taskPulse+=t;for(const s of this.tasks)s.complete||!s.icon||(s.icon.rotation.y+=t*1.7,s.icon.position.y=2.55+Math.sin(this.taskPulse*2.3+s.index)*.13,s.beacon&&(s.beacon.material.opacity=.09+Math.sin(this.taskPulse*2.4+s.index)*.03));if(this.state!=="playing"){this.interactTask=null;return}let e=null,n=1/0;for(const s of this.tasks){if(s.complete)continue;const o=Math.hypot(this.player.pos.x-s.x,this.player.pos.z-s.z);o>2.8||o>=n||ni(this.player.pos.x,this.player.pos.z,s.x,s.z,this.colliders)&&(e=s,n=o)}this.interactTask!==e&&(this.interactTask&&(this.interactTask.progress=0),this.interactTask=e),e&&this.keys.has("KeyE")?(e.progress=Math.min(1,e.progress+t/1.15),e.progress>=1&&this.completeTask(e),this.emitHud()):e&&(e.progress=0)}completeTask(t){var n,s,o,r,a,l;if(t.complete)return;t.complete=!0,t.progress=1,t.beacon&&(t.beacon.visible=!1),t.icon&&(t.icon.visible=!1),t.screen&&t.screen.material.color.setHex(7995315);const e=this.tasks.filter(c=>c.complete).length;this.objectivesComplete=e===this.tasks.length,(s=(n=this.audio).objective)==null||s.call(n),this.objectivesComplete?(this.objectivesAnnounced=!0,(r=(o=this.hooks).onToast)==null||r.call(o,"OBJECTIVES SECURED — TARGET VULNERABLE")):(l=(a=this.hooks).onToast)==null||l.call(a,`OBJECTIVE ${e}/${this.tasks.length} — ${t.label}`),this.interactTask=null,this.emitHud()}getStrikeInfo(){if(!this.target||!this.target.alive)return{dist:1/0,inRange:!1,canStrike:!1,behind:!1,los:!1};const t=this.target,e=this.player.pos.x-t.pos.x,n=this.player.pos.z-t.pos.z,s=Math.hypot(e,n),o=ni(this.player.pos.x,this.player.pos.z,t.pos.x,t.pos.z,this.colliders),r=Math.sin(t.heading),a=Math.cos(t.heading),l=s>.001?(e*r+n*a)/s:0,c=t.state==="flee"||l<.15,h=s<2.65&&o;return{dist:s,inRange:h,canStrike:h&&c,behind:c,los:o}}performStrike(){const t=new z;this.camera.getWorldDirection(t);const e=this.camera.position,n=this.getStrikeInfo();let s=null,o=1/0;for(const r of this.agents){if(!r.alive)continue;const a=Math.hypot(r.pos.x-this.player.pos.x,r.pos.z-this.player.pos.z);if(a>2.65||a>=o)continue;const l=new z(r.pos.x,1.05,r.pos.z).sub(e);l.normalize(),!(t.dot(l)<.42)&&ni(this.player.pos.x,this.player.pos.z,r.pos.x,r.pos.z,this.colliders)&&(s=r,o=a)}if(s){if(s===this.target&&!n.behind){this.blockTargetStrike();return}this.killAgent(s)}}blockTargetStrike(){var t,e;this.shake=.55,this.audio.impact(),this.target.startFlee(this),(e=(t=this.hooks).onToast)==null||e.call(t,"BLOCKED — STRIKE FROM BEHIND")}killAgent(t,e="knife"){if(t.die(),e==="knife"&&this.audio.stabHit(),this.spawnBlood(t.pos),t===this.target){if(!this.objectivesComplete){this.fail(`The hit came too early. Complete all ${this.tasks.length} objectives before eliminating the target.`);return}this.succeed();return}this.guardsKilled+=1,e==="knife"&&this.audio.bodyFall(),this.handleKillWitnesses(t)}spawnBlood(t){for(let e=0;e<14;e++){const n=new b(this.bloodGeo,this.bloodMat);n.position.set(t.x,1.15+Math.random()*.4,t.z),this.scene.add(n),this.effects.push({mesh:n,life:.85+Math.random()*.4,maxLife:1.2,velocity:new z((Math.random()-.5)*3.4,1.4+Math.random()*2.6,(Math.random()-.5)*3.4),shrink:!0})}}updateMarker(){if(!this.marker)return;const t=this.target&&this.target.alive&&(this.state==="playing"||this.state==="ending");this.marker.visible=t,t&&this.marker.position.set(this.target.pos.x,2.85+Math.sin(this.time*2.2)*.12,this.target.pos.z)}updateHud(t){this.hudTimer-=t,!(this.hudTimer>0)&&(this.hudTimer=.1,this.emitHud())}emitHud(){var a,l;if(!this.target)return;const t=this.player.pos.distanceTo(this.target.pos),e=this.getStrikeInfo();let n=0;for(const c of this.guards)c.alive&&(n=Math.max(n,c.awareness));let s="UNDETECTED";this.alarm?s="SPOTTED":n>.3&&(s="SUSPICIOUS");const o=this.tasks.filter(c=>c.complete).length,r=this.tasks.map(c=>({label:c.label,type:c.type,complete:c.complete,progress:c.progress,distance:Math.hypot(this.player.pos.x-c.x,this.player.pos.z-c.z)}));(l=(a=this.hooks).onHud)==null||l.call(a,{health:this.health,status:s,distance:t,inRange:this.weaponIndex===0&&e.inRange,canStrike:this.weaponIndex===0&&e.canStrike,behind:this.weaponIndex===0&&e.behind,alerts:this.alerts,targetName:this.level.target,weapon:this.getWeaponHud(),tasks:r,completedTasks:o,totalTasks:this.tasks.length,objectivesComplete:this.objectivesComplete,targetReady:this.objectivesComplete,interact:this.interactTask?{kind:"task",label:this.interactTask.label,progress:this.interactTask.progress}:this.talkTarget?{kind:"talk",label:`TALK TO ${this.talkTarget.name}`,progress:0}:null})}alertNearbyGuards(t){if(this.state==="playing")for(const e of this.guards)!e.alive||e.radioTimer>0||Math.hypot(e.pos.x-t.x,e.pos.z-t.z)>34||e.state==="patrol"&&(e.state="investigate",e.investigatePos.set(t.x,0,t.z),e.investigateTimer=6,e.awareness=Math.max(e.awareness,.55))}findKillWitnesses(t){const e={targetSees:!1,guards:[]},n=this.target;n!=null&&n.alive&&n!==t&&(e.targetSees=n.canSeePoint(this.player.pos.x,this.player.pos.z,this.colliders,23,.1)||n.canSeePoint(t.pos.x,t.pos.z,this.colliders,23,.1));for(const s of this.guards){if(!s.alive||s===t)continue;const o=s.state==="chase"||s.state==="investigate"?-.15:.12,r=s.canSeePoint(this.player.pos.x,this.player.pos.z,this.colliders,28,o),a=s.canSeePoint(t.pos.x,t.pos.z,this.colliders,28,o);(r||a)&&e.guards.push(s)}return e}handleKillWitnesses(t){if(this.state!=="playing")return;const e=this.findKillWitnesses(t);if(e.targetSees){this.raiseAlarm(this.target,{message:"THE TARGET SAW THE KILL — HE IS RUNNING"});return}e.guards.length&&this.radioAlarm(e.guards[0],"Boss, the intruder just killed one of ours. He is still in the district.")}radioAlarm(t,e){var n,s,o,r;this.state!=="playing"||!(t!=null&&t.alive)||this.alarm||this.pendingRadio||(t.investigatedAlarm=!0,t.startRadio(1.2),(s=(n=this.audio).radioCall)==null||s.call(n),(r=(o=this.hooks).onRadio)==null||r.call(o,{name:"BODYGUARD",line:e}),this.pendingRadio={timer:1.2,guard:t})}raiseAlarm(t,e={}){var n,s,o;if(this.state==="playing"){if(t&&this.alarmPos.set(t.pos.x,0,t.pos.z),!this.alarm){this.alarm=!0,this.alerts+=1,this.audio.alarm();const r=e.message===void 0?"ALARM RAISED — TARGET FLEEING":e.message;r&&((s=(n=this.hooks).onToast)==null||s.call(n,r))}(o=this.target)==null||o.startFlee(this)}}guardShoot(t,e){if(this.state!=="playing"||!this.target)return;this.audio.gunshot(e);const n=new z(t.pos.x,1.4,t.pos.z),s=new z(this.player.pos.x+(Math.random()-.5)*.7,1.1,this.player.pos.z+(Math.random()-.5)*.7),o=new Ue(this.flashMaterial.clone());o.position.copy(n),o.scale.set(1.3,1.3,1),this.scene.add(o),this.effects.push({mesh:o,life:.07,maxLife:.07,fade:!0,baseOpacity:.9,disposeMat:!0});const r=new Zo({color:16766624,transparent:!0,opacity:.75,depthWrite:!1,blending:qe}),a=new Ka(new he().setFromPoints([n,s]),r);this.scene.add(a),this.effects.push({mesh:a,life:.08,maxLife:.08,fade:!0,baseOpacity:.75,disposeGeom:!0,disposeMat:!0});const l=$i(.8-e*.027-(this.player.sprinting?.16:0)-(this.player.crouching?.08:0)-(this.player.moving?.06:0),.15,.85);if(Math.random()<l){const c=6+Math.random()*8;this.damagePlayer(c)}}damagePlayer(t,e="You were killed. The contract is forfeit."){var n,s;this.state==="playing"&&(this.health=Math.max(0,this.health-t),this.shake=.7,this.audio.impact(),(s=(n=this.hooks).onDamage)==null||s.call(n),this.health<=0&&this.fail(e))}succeed(){var t,e,n,s,o,r;this.state==="playing"&&(this.state="ending",this.endTimer=2.1,this.alarm=!1,this.aiming=!1,this.scoped=!1,(e=(t=this.hooks).onScope)==null||e.call(t,!1),this.audio.success(),(s=(n=this.hooks).onKill)==null||s.call(n),(r=(o=this.hooks).onHud)==null||r.call(o,{health:this.health,status:"TARGET ELIMINATED",distance:0,inRange:!1,canStrike:!1,behind:!1,alerts:this.alerts,targetName:this.level.target}))}finishSuccess(){var e,n,s,o;if(this.state!=="ending")return;this.state="complete",this.setWeaponsVisible(!1),this.scoped=!1,(n=(e=this.hooks).onScope)==null||n.call(e,!1),this.marker.visible=!1;let t="GHOST";(this.alerts>0||this.guardsKilled>0)&&(t="SHADOW"),this.alerts>0&&this.guardsKilled>0&&(t="BRUTE"),document.pointerLockElement&&document.exitPointerLock(),(o=(s=this.hooks).onComplete)==null||o.call(s,{levelIndex:this.levelIndex,seconds:this.elapsed,alerts:this.alerts,guardsKilled:this.guardsKilled,rank:t})}fail(t){var e,n,s,o;this.state==="playing"&&(this.state="failed",this.setWeaponsVisible(!1),this.scoped=!1,(n=(e=this.hooks).onScope)==null||n.call(e,!1),this.marker.visible=!1,this.audio.fail(),document.pointerLockElement&&document.exitPointerLock(),(o=(s=this.hooks).onFail)==null||o.call(s,{levelIndex:this.levelIndex,reason:t,seconds:this.elapsed,alerts:this.alerts}))}}const qt=i=>document.getElementById(i),Cn=qt("scene"),$e=qt("hud"),hr=qt("menu"),gs=qt("pause"),Rl=qt("result"),Js=qt("loading"),tl=qt("loading-text"),Pl=qt("capture-hint"),Wo=qt("event-toast"),Vs=qt("radio-toast"),_1=qt("radio-line"),Ws=qt("dialogue"),v1=qt("dialogue-name"),M1=qt("dialogue-line"),En=qt("interact-prompt"),w1=qt("interact-label"),el=qt("interact-fill"),ur=qt("scope-overlay"),dh=qt("mission-list"),y1=qt("contract-progress"),S1=qt("hud-index"),T1=qt("hud-mission"),E1=qt("hud-target"),Qo=qt("hud-objective"),du=qt("hud-distance"),tr=qt("hud-status"),fh=qt("task-list"),ts=qt("hud-target-lock"),as=qt("strike-hint"),nl=qt("reticle"),il=qt("health-bar"),fu=qt("health-value"),er=qt("damage-flash"),pu=qt("weapon-panel"),mu=qt("weapon-slot"),gu=qt("weapon-name"),xu=qt("weapon-ammo"),_u=qt("result-kicker"),vu=qt("result-title"),Mu=qt("result-target"),wu=qt("result-copy"),yu=qt("result-stats"),nr=qt("next-btn"),Su=qt("result-menu-btn"),b1=qt("resume-btn"),A1=qt("abort-btn"),Tu="silent-night-cleared-v1";let Eu=0,ph=null,sl=null,ol=null,rl=null,bu=[];const C1=()=>{try{const i=JSON.parse(localStorage.getItem(Tu)||"[]");if(Array.isArray(i))return new Set(i.filter(t=>Number.isInteger(t)&&t>=0&&t<An.length))}catch{}return new Set},js=C1(),R1=()=>{try{localStorage.setItem(Tu,JSON.stringify([...js]))}catch{}},Au=i=>{const t=Math.max(0,Math.floor(i)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`},Ee=new x1(Cn,{onHud(i){var o;const t=Math.max(0,Math.min(100,i.health));if(il.style.width=`${t}%`,fu.textContent=String(Math.round(t)),il.style.background=t<34?"linear-gradient(90deg, #5e0d0d, #ff4a3a)":"linear-gradient(90deg, #6e1616, #d94b3c 70%, #f5b28f)",du.textContent=i.distance!=null?`${Math.round(i.distance)} m`:"— m",tr.textContent=i.status,tr.className="status-line"+(i.status==="SPOTTED"?" spotted":i.status==="SUSPICIOUS"?" suspicious":""),i.weapon&&(mu.textContent=i.weapon.slot,gu.textContent=i.weapon.name,pu.classList.toggle("reloading",!!i.weapon.reloading),xu.textContent=i.weapon.ammo==null?"—":i.weapon.reloading?"RELOADING":`${i.weapon.ammo} / ${i.weapon.reserve}`),i.tasks&&i.tasks.forEach((r,a)=>{const l=bu[a];l&&(l.root.classList.toggle("complete",r.complete),l.root.classList.toggle("active",!r.complete&&i.interact&&i.interact.label===r.label),l.dist.textContent=r.complete?"DONE":`${Math.round(r.distance)} m`)}),i.objectivesComplete!==void 0){const r=i.totalTasks||((o=i.tasks)==null?void 0:o.length)||0,a=i.completedTasks||0;i.objectivesComplete?(ts.textContent="TARGET VULNERABLE",ts.className="target-lock ready",Qo.textContent=`Eliminate ${i.targetName}`):(ts.textContent=`OBJECTIVES ${a}/${r} · LOCKED`,ts.className="target-lock locked",Qo.textContent=`Secure ${r-a} more objective${r-a===1?"":"s"} before the hit`)}if(i.interact){const r=i.interact.kind==="talk";w1.textContent=r?`E · ${i.interact.label}`:`HOLD E · ${i.interact.label}`,el.style.width=r?"0%":`${Math.round(i.interact.progress*100)}%`,En.classList.toggle("talk",r),En.classList.remove("hidden")}else En.classList.add("hidden"),En.classList.remove("talk"),el.style.width="0%";const e=!!i.inRange,n=i.targetReady!==!1,s=!!i.canStrike&&n;as.textContent=s?"LMB · ASSASSINATE":e&&!n?"COMPLETE OBJECTIVES FIRST":"FLANK THE TARGET",as.classList.toggle("hidden",!e),as.classList.toggle("blocked",e&&!s),nl.classList.toggle("in-range",e&&s),nl.classList.toggle("blocked",e&&!s)},onScope(i){ur.classList.toggle("hidden",!i),$e.classList.toggle("scoped",!!i)},onToast(i){P1(i)},onRadio(i){if(!i){Vs.classList.add("hidden");return}_1.textContent=`“${i.line}”`,Vs.classList.remove("hidden"),clearTimeout(ol),ol=window.setTimeout(()=>Vs.classList.add("hidden"),4300)},onDialogue(i){if(clearTimeout(rl),!i){Ws.classList.add("hidden");return}v1.textContent=i.name,M1.textContent=`“${i.line}”`,Ws.classList.remove("hidden"),rl=window.setTimeout(()=>Ws.classList.add("hidden"),4400)},onDamage(){er.classList.add("hit"),clearTimeout(ph),ph=window.setTimeout(()=>er.classList.remove("hit"),110)},onComplete(i){js.add(i.levelIndex),R1(),Dl(),I1(i)},onFail(i){$e.classList.add("hidden"),dr(),Rl.classList.remove("hidden"),_u.textContent="CONTRACT FAILED",vu.textContent="MISSION FAILED";const t=Number.isInteger(i.levelIndex)?i.levelIndex:Eu,e=An[t];Mu.textContent=`${e.target} — ${e.targetTitle}`,wu.textContent=i.reason,yu.innerHTML=`
      <span><b>${Au(i.seconds)}</b>TIME</span>
      <span><b>${i.alerts}</b>ALERTS</span>
      <span><b>OPEN</b>CONTRACT</span>
    `,nr.textContent="RETRY CONTRACT",nr.onclick=()=>zl(t),Su.onclick=sr}});function dr(){hr.classList.add("hidden"),gs.classList.add("hidden"),Rl.classList.add("hidden"),Js.classList.add("hidden"),Pl.classList.add("hidden"),Wo.classList.add("hidden"),Vs.classList.add("hidden"),Ws.classList.add("hidden"),En.classList.add("hidden"),En.classList.remove("talk"),ur.classList.add("hidden"),$e.classList.remove("scoped"),clearTimeout(sl),clearTimeout(ol),clearTimeout(rl)}function P1(i){i&&(Wo.textContent=i,Wo.classList.remove("hidden"),clearTimeout(sl),sl=window.setTimeout(()=>Wo.classList.add("hidden"),1900))}function Ll(){Ee.state==="playing"&&Pl.classList.remove("hidden")}function ir(){Pl.classList.add("hidden")}function Il(){if(document.pointerLockElement!==Cn)try{const i=Cn.requestPointerLock();i&&typeof i.catch=="function"&&i.catch(()=>{})}catch{}}function L1(i){var n;const t=An[i];S1.textContent=String(i+1).padStart(2,"0"),T1.textContent=t.name,E1.textContent=t.target,Qo.textContent=`Eliminate ${t.target}`,du.textContent="— m",tr.textContent="UNDETECTED",tr.className="status-line";const e=((n=Ee.tasks)==null?void 0:n.length)??0;Qo.textContent=`Secure ${e} objective${e===1?"":"s"} before the hit`,ts.textContent=`OBJECTIVES 0/${e} · LOCKED`,ts.className="target-lock locked",as.textContent="LMB · ELIMINATE",as.classList.add("hidden"),as.classList.remove("blocked"),nl.classList.remove("in-range","blocked"),il.style.width="100%",fu.textContent="100",mu.textContent="1",gu.textContent="KNIFE",xu.textContent="—",pu.classList.remove("reloading"),En.classList.add("hidden"),En.classList.remove("talk"),el.style.width="0%",ur.classList.add("hidden"),$e.classList.remove("scoped"),Vs.classList.add("hidden"),Ws.classList.add("hidden"),fh.innerHTML="",bu=(Ee.tasks??[]).map((s,o)=>{const r=s.label??(s.type==="relay"?"DISABLE SECURITY RELAY":"RECOVER THE LEDGER"),a=document.createElement("div");return a.className="task-row",a.innerHTML=`
      <span class="task-check"></span>
      <span class="task-label">${String(o+1).padStart(2,"0")} ${r}</span>
      <span class="task-dist">— m</span>
    `,fh.appendChild(a),{root:a,dist:a.querySelector(".task-dist")}})}function zl(i){Eu=i,Ee.audio.init(),Il(),dr(),$e.classList.add("hidden"),er.classList.remove("hit"),Js.classList.remove("hidden"),tl.textContent=`PREPARING CONTRACT ${String(i+1).padStart(2,"0")} · ${An[i].name.toUpperCase()}`,window.setTimeout(()=>{try{Ee.loadLevel(i),L1(i),Ee.begin()}catch(t){console.error(t),tl.textContent="CONTRACT FAILED TO LOAD";return}Js.classList.add("hidden"),$e.classList.remove("hidden"),document.pointerLockElement!==Cn&&(Ee.pause(),gs.classList.remove("hidden"),$e.classList.add("hidden"))},140)}function I1(i){$e.classList.add("hidden"),dr(),Rl.classList.remove("hidden");const t=An[i.levelIndex],e=i.levelIndex>=An.length-1,n=js.size>=An.length;_u.textContent=e&&n?"ALL CONTRACTS FULFILLED":"CONTRACT COMPLETE",vu.textContent=e&&n?"THE NIGHT IS YOURS":"TARGET ELIMINATED",Mu.textContent=`${t.target} — ${t.targetTitle}`;const s={GHOST:"No one saw you. No one will remember you. The snow kept your secret.",SHADOW:"The contract is fulfilled. A few heads turned, but none will speak of it.",BRUTE:"The target is dead. The night was loud, but the night is over."};wu.textContent=e&&n?"Six names. Six silent endings. By morning the snow will have covered everything.":s[i.rank]||"The contract is complete.",yu.innerHTML=`
    <span><b>${Au(i.seconds)}</b>TIME</span>
    <span><b>${i.alerts}</b>ALERTS</span>
    <span><b>${i.rank}</b>RANK</span>
  `,nr.textContent=e?"RETURN TO MISSION SELECT":"NEXT CONTRACT",nr.onclick=()=>{e?sr():zl(i.levelIndex+1)},Su.onclick=sr}function sr(){document.pointerLockElement&&document.exitPointerLock(),dr(),$e.classList.add("hidden"),er.classList.remove("hit"),hr.classList.remove("hidden"),Dl(),Ee.returnToMenu()}function Dl(){dh.innerHTML="",An.forEach((i,t)=>{const e=js.has(t),n=document.createElement("button");n.type="button",n.className="mission-card",n.style.setProperty("--accent",i.accent),n.innerHTML=`
      <span class="mission-number">${String(t+1).padStart(2,"0")}</span>
      <span class="mission-info">
        <strong>${i.name}</strong>
        <em>${i.target} · ${i.targetTitle}</em>
      </span>
      <span class="mission-meta">
        <span class="mission-risk">${i.difficulty}</span>
        <span class="mission-status${e?" done":""}">${e?"FULFILLED":"OPEN"}</span>
      </span>
    `,n.addEventListener("click",()=>zl(t)),dh.appendChild(n)}),y1.textContent=`${js.size} / ${An.length} FULFILLED`}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Cn?(ir(),Ee.state==="paused"&&(Ee.resume(),gs.classList.add("hidden"),$e.classList.remove("hidden"))):Ee.state==="playing"&&(Ee.pause(),ir(),En.classList.add("hidden"),gs.classList.remove("hidden"),$e.classList.add("hidden"))});document.addEventListener("pointerlockerror",()=>{Ee.state==="playing"&&Ll()});document.addEventListener("keydown",i=>{i.code==="Escape"&&(Ee.state!=="playing"||document.pointerLockElement===Cn||(Ee.pause(),ir(),En.classList.add("hidden"),ur.classList.add("hidden"),$e.classList.remove("scoped"),$e.classList.add("hidden"),gs.classList.remove("hidden")))});b1.addEventListener("click",()=>{Ee.audio.init(),Ee.resume(),gs.classList.add("hidden"),$e.classList.remove("hidden"),ir(),Il(),window.setTimeout(()=>{Ee.state==="playing"&&document.pointerLockElement!==Cn&&Ll()},300)});Cn.addEventListener("click",()=>{Ee.state==="playing"&&document.pointerLockElement!==Cn&&(Il(),window.setTimeout(()=>{Ee.state==="playing"&&document.pointerLockElement!==Cn&&Ll()},300))});A1.addEventListener("click",sr);Dl();Js.classList.remove("hidden");hr.classList.add("hidden");window.setTimeout(()=>{try{Ee.loadLevel(0,{preview:!0}),Js.classList.add("hidden"),hr.classList.remove("hidden")}catch(i){console.error(i),tl.textContent="FAILED TO BUILD THE FIRST CONTRACT"}},80);
