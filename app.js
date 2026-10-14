(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fs="172",ir={ROTATE:0,DOLLY:1,PAN:2},tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nh=0,Ya=1,ih=2,ol=1,al=2,Wn=3,hi=0,on=1,Un=2,li=0,rr=1,qa=2,ja=3,Ka=4,rh=5,Ti=100,sh=101,oh=102,ah=103,ch=104,lh=200,uh=201,hh=202,fh=203,Io=204,Uo=205,dh=206,ph=207,mh=208,_h=209,gh=210,vh=211,xh=212,Mh=213,yh=214,No=0,Fo=1,Oo=2,ar=3,Bo=4,zo=5,Vo=6,Ho=7,cl=0,Sh=1,Eh=2,ui=0,Th=1,bh=2,Ah=3,ll=4,wh=5,Rh=6,Ch=7,ul=300,cr=301,lr=302,ko=303,Go=304,Os=306,ws=1e3,ai=1001,Rs=1002,gn=1003,hl=1004,Ar=1005,wn=1006,vs=1007,ci=1008,jn=1009,fl=1010,dl=1011,Ur=1012,va=1013,Ai=1014,$n=1015,zr=1016,xa=1017,Ma=1018,ur=1020,pl=35902,ml=1021,_l=1022,_n=1023,gl=1024,vl=1025,sr=1026,hr=1027,xl=1028,ya=1029,Ml=1030,Sa=1031,Ea=1033,xs=33776,Ms=33777,ys=33778,Ss=33779,Wo=35840,Xo=35841,$o=35842,Yo=35843,qo=36196,jo=37492,Ko=37496,Zo=37808,Jo=37809,Qo=37810,ea=37811,ta=37812,na=37813,ia=37814,ra=37815,sa=37816,oa=37817,aa=37818,ca=37819,la=37820,ua=37821,Es=36492,ha=36494,fa=36495,yl=36283,da=36284,pa=36285,ma=36286,Ph=2300,Dh=2301,Lh=3200,Ih=3201,Sl=0,Uh=1,Xn="",fn="srgb",fr="srgb-linear",Cs="linear",gt="srgb",zi=7680,Za=519,Nh=512,Fh=513,Oh=514,El=515,Bh=516,zh=517,Vh=518,Hh=519,Ja=35044,Qa="300 es",Yn=2e3,Ps=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ec=1234567;const Pr=Math.PI/180,Nr=180/Math.PI;function mr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Ta(i,e){return(i%e+e)%e}function kh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Gh(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function Wh(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function Xh(i,e=1){return e-Math.abs(Ta(i,e*2)-e)}function $h(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jh(i,e){return i+Math.random()*(e-i)}function Kh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(ec=i);let e=ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jh(i){return i*Pr}function Qh(i){return i*Nr}function ef(i){return(i&i-1)===0&&i!==0}function tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),f=o((e+n)/2),p=s((e-n)/2),_=o((e-n)/2),m=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*f,c*p,c*_,a*l);break;case"YZY":i.set(c*_,a*f,c*p,a*l);break;case"ZXZ":i.set(c*p,c*_,a*f,a*l);break;case"XZX":i.set(a*f,c*v,c*m,a*l);break;case"YXY":i.set(c*m,a*f,c*v,a*l);break;case"ZYZ":i.set(c*v,c*m,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ds={DEG2RAD:Pr,RAD2DEG:Nr,generateUUID:mr,clamp:tt,euclideanModulo:Ta,mapLinear:kh,inverseLerp:Gh,lerp:Dr,damp:Wh,pingpong:Xh,smoothstep:$h,smootherstep:Yh,randInt:qh,randFloat:jh,randFloatSpread:Kh,seededRandom:Zh,degToRad:Jh,radToDeg:Qh,isPowerOfTwo:ef,ceilPowerOfTwo:tf,floorPowerOfTwo:nf,setQuaternionFromProperEuler:rf,normalize:Qt,denormalize:Qi};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,r,s,o,a,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],f=n[4],p=n[7],_=n[2],m=n[5],v=n[8],M=r[0],g=r[3],d=r[6],P=r[1],R=r[4],T=r[7],F=r[2],D=r[5],C=r[8];return s[0]=o*M+a*P+c*F,s[3]=o*g+a*R+c*D,s[6]=o*d+a*T+c*C,s[1]=l*M+f*P+p*F,s[4]=l*g+f*R+p*D,s[7]=l*d+f*T+p*C,s[2]=_*M+m*P+v*F,s[5]=_*g+m*R+v*D,s[8]=_*d+m*T+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-n*s*f+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],p=f*o-a*l,_=a*c-f*s,m=l*s-o*c,v=t*p+n*_+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(r*l-f*n)*M,e[2]=(a*n-r*o)*M,e[3]=_*M,e[4]=(f*t-r*c)*M,e[5]=(r*s-a*t)*M,e[6]=m*M,e[7]=(n*c-l*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new je;function Tl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){const i=Ls("canvas");return i.style.display="block",i}const tc={};function er(i){i in tc||(tc[i]=!0,console.warn(i))}function of(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function af(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nc=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){const i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xn?Cs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:e,whitePoint:n,transfer:Cs,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const dt=lf();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class uf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=Ls("canvas")),Vi.width=e.width,Vi.height=e.height;const n=Vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hf=0;class ba{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qs(r[o].image)):s.push(Qs(r[o]))}else s=Qs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;class nn extends Pi{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=ai,r=ai,s=wn,o=ci,a=_n,c=jn,l=nn.DEFAULT_ANISOTROPY,f=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=mr(),this.name="",this.source=new ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ul;nn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],p=c[8],_=c[1],m=c[5],v=c[9],M=c[2],g=c[6],d=c[10];if(Math.abs(f-_)<.01&&Math.abs(p-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+_)<.1&&Math.abs(p+M)<.1&&Math.abs(v+g)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,T=(m+1)/2,F=(d+1)/2,D=(f+_)/4,C=(p+M)/4,N=(v+g)/4;return R>T&&R>F?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=D/n,s=C/n):T>F?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=D/r,s=N/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=C/s,r=N/s),this.set(n,r,s,t),this}let P=Math.sqrt((g-v)*(g-v)+(p-M)*(p-M)+(_-f)*(_-f));return Math.abs(P)<.001&&(P=1),this.x=(g-v)/P,this.y=(p-M)/P,this.z=(_-f)/P,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new nn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new ba(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bl extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],f=n[r+2],p=n[r+3];const _=s[o+0],m=s[o+1],v=s[o+2],M=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p;return}if(a===1){e[t+0]=_,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(p!==M||c!==_||l!==m||f!==v){let g=1-a;const d=c*_+l*m+f*v+p*M,P=d>=0?1:-1,R=1-d*d;if(R>Number.EPSILON){const F=Math.sqrt(R),D=Math.atan2(F,d*P);g=Math.sin(g*D)/F,a=Math.sin(a*D)/F}const T=a*P;if(c=c*g+_*T,l=l*g+m*T,f=f*g+v*T,p=p*g+M*T,g===1-a){const F=1/Math.sqrt(c*c+l*l+f*f+p*p);c*=F,l*=F,f*=F,p*=F}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],f=n[r+3],p=s[o],_=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+f*p+c*m-l*_,e[t+1]=c*v+f*_+l*p-a*m,e[t+2]=l*v+f*m+a*_-c*p,e[t+3]=f*v-a*p-c*_-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),f=a(r/2),p=a(s/2),_=c(n/2),m=c(r/2),v=c(s/2);switch(o){case"XYZ":this._x=_*f*p+l*m*v,this._y=l*m*p-_*f*v,this._z=l*f*v+_*m*p,this._w=l*f*p-_*m*v;break;case"YXZ":this._x=_*f*p+l*m*v,this._y=l*m*p-_*f*v,this._z=l*f*v-_*m*p,this._w=l*f*p+_*m*v;break;case"ZXY":this._x=_*f*p-l*m*v,this._y=l*m*p+_*f*v,this._z=l*f*v+_*m*p,this._w=l*f*p-_*m*v;break;case"ZYX":this._x=_*f*p-l*m*v,this._y=l*m*p+_*f*v,this._z=l*f*v-_*m*p,this._w=l*f*p+_*m*v;break;case"YZX":this._x=_*f*p+l*m*v,this._y=l*m*p+_*f*v,this._z=l*f*v-_*m*p,this._w=l*f*p-_*m*v;break;case"XZY":this._x=_*f*p-l*m*v,this._y=l*m*p-_*f*v,this._z=l*f*v+_*m*p,this._w=l*f*p+_*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],p=t[10],_=n+a+p;if(_>0){const m=.5/Math.sqrt(_+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(f-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+o*a+r*l-s*c,this._y=r*f+o*c+s*a-n*l,this._z=s*f+o*l+n*c-r*a,this._w=o*f-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,a),p=Math.sin((1-t)*f)/l,_=Math.sin(t*f)/l;return this._w=o*p+this._w*_,this._x=n*p+this._x*_,this._y=r*p+this._y*_,this._z=s*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),f=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+c*l+o*p-a*f,this.y=n+c*f+a*l-s*p,this.z=r+c*p+s*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eo.copy(this).projectOnVector(e),this.sub(eo)}reflect(e){return this.sub(eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new H,rc=new fi;class Vr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Kr.subVectors(this.max,yr),Hi.subVectors(e.a,yr),ki.subVectors(e.b,yr),Gi.subVectors(e.c,yr),ei.subVectors(ki,Hi),ti.subVectors(Gi,ki),gi.subVectors(Hi,Gi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-gi.z,gi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,gi.z,0,-gi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-gi.y,gi.x,0];return!to(t,Hi,ki,Gi,Kr)||(t=[1,0,0,0,1,0,0,0,1],!to(t,Hi,ki,Gi,Kr))?!1:(Zr.crossVectors(ei,ti),t=[Zr.x,Zr.y,Zr.z],to(t,Hi,ki,Gi,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new H,new H,new H,new H,new H,new H,new H,new H],Sn=new H,jr=new Vr,Hi=new H,ki=new H,Gi=new H,ei=new H,ti=new H,gi=new H,yr=new H,Kr=new H,Zr=new H,vi=new H;function to(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vi.fromArray(i,s);const a=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),f=n.dot(vi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}const mf=new Vr,Sr=new H,no=new H;class Bs{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Sr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(no)),this.expandByPoint(Sr.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new H,io=new H,Jr=new H,ni=new H,ro=new H,Qr=new H,so=new H;class Aa{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){io.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(io);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=ni.dot(this.direction),c=-ni.dot(Jr),l=ni.lengthSq(),f=Math.abs(1-o*o);let p,_,m,v;if(f>0)if(p=o*c-a,_=o*a-c,v=s*f,p>=0)if(_>=-v)if(_<=v){const M=1/f;p*=M,_*=M,m=p*(p+o*_+2*a)+_*(o*p+_+2*c)+l}else _=s,p=Math.max(0,-(o*_+a)),m=-p*p+_*(_+2*c)+l;else _=-s,p=Math.max(0,-(o*_+a)),m=-p*p+_*(_+2*c)+l;else _<=-v?(p=Math.max(0,-(-o*s+a)),_=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+_*(_+2*c)+l):_<=v?(p=0,_=Math.min(Math.max(-s,-c),s),m=_*(_+2*c)+l):(p=Math.max(0,-(o*s+a)),_=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+_*(_+2*c)+l);else _=o>0?-s:s,p=Math.max(0,-(o*_+a)),m=-p*p+_*(_+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(io).addScaledVector(Jr,_),m}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),r=Vn.dot(Vn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,_=this.origin;return l>=0?(n=(e.min.x-_.x)*l,r=(e.max.x-_.x)*l):(n=(e.max.x-_.x)*l,r=(e.min.x-_.x)*l),f>=0?(s=(e.min.y-_.y)*f,o=(e.max.y-_.y)*f):(s=(e.max.y-_.y)*f,o=(e.min.y-_.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-_.z)*p,c=(e.max.z-_.z)*p):(a=(e.max.z-_.z)*p,c=(e.min.z-_.z)*p),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,r,s){ro.subVectors(t,e),Qr.subVectors(n,e),so.crossVectors(ro,Qr);let o=this.direction.dot(so),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);const c=a*this.direction.dot(Qr.crossVectors(ni,Qr));if(c<0)return null;const l=a*this.direction.dot(ro.cross(ni));if(l<0||c+l>o)return null;const f=-a*ni.dot(so);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,r,s,o,a,c,l,f,p,_,m,v,M,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,f,p,_,m,v,M,g)}set(e,t,n,r,s,o,a,c,l,f,p,_,m,v,M,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=f,d[10]=p,d[14]=_,d[3]=m,d[7]=v,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const _=o*f,m=o*p,v=a*f,M=a*p;t[0]=c*f,t[4]=-c*p,t[8]=l,t[1]=m+v*l,t[5]=_-M*l,t[9]=-a*c,t[2]=M-_*l,t[6]=v+m*l,t[10]=o*c}else if(e.order==="YXZ"){const _=c*f,m=c*p,v=l*f,M=l*p;t[0]=_+M*a,t[4]=v*a-m,t[8]=o*l,t[1]=o*p,t[5]=o*f,t[9]=-a,t[2]=m*a-v,t[6]=M+_*a,t[10]=o*c}else if(e.order==="ZXY"){const _=c*f,m=c*p,v=l*f,M=l*p;t[0]=_-M*a,t[4]=-o*p,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*f,t[9]=M-_*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const _=o*f,m=o*p,v=a*f,M=a*p;t[0]=c*f,t[4]=v*l-m,t[8]=_*l+M,t[1]=c*p,t[5]=M*l+_,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const _=o*c,m=o*l,v=a*c,M=a*l;t[0]=c*f,t[4]=M-_*p,t[8]=v*p+m,t[1]=p,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=m*p+v,t[10]=_-M*p}else if(e.order==="XZY"){const _=o*c,m=o*l,v=a*c,M=a*l;t[0]=c*f,t[4]=-p,t[8]=l*f,t[1]=_*p+M,t[5]=o*f,t[9]=m*p-v,t[2]=v*p-m,t[6]=a*f,t[10]=M*p+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_f,e,gf)}lookAt(e,t,n){const r=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ii.crossVectors(n,un),ii.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ii.crossVectors(n,un)),ii.normalize(),es.crossVectors(un,ii),r[0]=ii.x,r[4]=es.x,r[8]=un.x,r[1]=ii.y,r[5]=es.y,r[9]=un.y,r[2]=ii.z,r[6]=es.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],f=n[1],p=n[5],_=n[9],m=n[13],v=n[2],M=n[6],g=n[10],d=n[14],P=n[3],R=n[7],T=n[11],F=n[15],D=r[0],C=r[4],N=r[8],b=r[12],S=r[1],L=r[5],G=r[9],X=r[13],K=r[2],ee=r[6],Q=r[10],he=r[14],J=r[3],ye=r[7],Re=r[11],Ie=r[15];return s[0]=o*D+a*S+c*K+l*J,s[4]=o*C+a*L+c*ee+l*ye,s[8]=o*N+a*G+c*Q+l*Re,s[12]=o*b+a*X+c*he+l*Ie,s[1]=f*D+p*S+_*K+m*J,s[5]=f*C+p*L+_*ee+m*ye,s[9]=f*N+p*G+_*Q+m*Re,s[13]=f*b+p*X+_*he+m*Ie,s[2]=v*D+M*S+g*K+d*J,s[6]=v*C+M*L+g*ee+d*ye,s[10]=v*N+M*G+g*Q+d*Re,s[14]=v*b+M*X+g*he+d*Ie,s[3]=P*D+R*S+T*K+F*J,s[7]=P*C+R*L+T*ee+F*ye,s[11]=P*N+R*G+T*Q+F*Re,s[15]=P*b+R*X+T*he+F*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],p=e[6],_=e[10],m=e[14],v=e[3],M=e[7],g=e[11],d=e[15];return v*(+s*c*p-r*l*p-s*a*_+n*l*_+r*a*m-n*c*m)+M*(+t*c*m-t*l*_+s*o*_-r*o*m+r*l*f-s*c*f)+g*(+t*l*p-t*a*m-s*o*p+n*o*m+s*a*f-n*l*f)+d*(-r*a*f-t*c*p+t*a*_+r*o*p-n*o*_+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],p=e[9],_=e[10],m=e[11],v=e[12],M=e[13],g=e[14],d=e[15],P=p*g*l-M*_*l+M*c*m-a*g*m-p*c*d+a*_*d,R=v*_*l-f*g*l-v*c*m+o*g*m+f*c*d-o*_*d,T=f*M*l-v*p*l+v*a*m-o*M*m-f*a*d+o*p*d,F=v*p*c-f*M*c-v*a*_+o*M*_+f*a*g-o*p*g,D=t*P+n*R+r*T+s*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=P*C,e[1]=(M*_*s-p*g*s-M*r*m+n*g*m+p*r*d-n*_*d)*C,e[2]=(a*g*s-M*c*s+M*r*l-n*g*l-a*r*d+n*c*d)*C,e[3]=(p*c*s-a*_*s-p*r*l+n*_*l+a*r*m-n*c*m)*C,e[4]=R*C,e[5]=(f*g*s-v*_*s+v*r*m-t*g*m-f*r*d+t*_*d)*C,e[6]=(v*c*s-o*g*s-v*r*l+t*g*l+o*r*d-t*c*d)*C,e[7]=(o*_*s-f*c*s+f*r*l-t*_*l-o*r*m+t*c*m)*C,e[8]=T*C,e[9]=(v*p*s-f*M*s-v*n*m+t*M*m+f*n*d-t*p*d)*C,e[10]=(o*M*s-v*a*s+v*n*l-t*M*l-o*n*d+t*a*d)*C,e[11]=(f*a*s-o*p*s-f*n*l+t*p*l+o*n*m-t*a*m)*C,e[12]=F*C,e[13]=(f*M*r-v*p*r+v*n*_-t*M*_-f*n*g+t*p*g)*C,e[14]=(v*a*r-o*M*r-v*n*c+t*M*c+o*n*g-t*a*g)*C,e[15]=(o*p*r-f*a*r+f*n*c-t*p*c-o*n*_+t*a*_)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,f=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+n,f*c-r*o,0,l*c-r*a,f*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,f=o+o,p=a+a,_=s*l,m=s*f,v=s*p,M=o*f,g=o*p,d=a*p,P=c*l,R=c*f,T=c*p,F=n.x,D=n.y,C=n.z;return r[0]=(1-(M+d))*F,r[1]=(m+T)*F,r[2]=(v-R)*F,r[3]=0,r[4]=(m-T)*D,r[5]=(1-(_+d))*D,r[6]=(g+P)*D,r[7]=0,r[8]=(v+R)*C,r[9]=(g-P)*C,r[10]=(1-(_+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),a=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const l=1/s,f=1/o,p=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=f,En.elements[5]*=f,En.elements[6]*=f,En.elements[8]*=p,En.elements[9]*=p,En.elements[10]*=p,t.setFromRotationMatrix(En),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Yn){const c=this.elements,l=2*s/(t-e),f=2*s/(n-r),p=(t+e)/(t-e),_=(n+r)/(n-r);let m,v;if(a===Yn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ps)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Yn){const c=this.elements,l=1/(t-e),f=1/(n-r),p=1/(o-s),_=(t+e)*l,m=(n+r)*f;let v,M;if(a===Yn)v=(o+s)*p,M=-2*p;else if(a===Ps)v=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-_,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new H,En=new At,_f=new H(0,0,0),gf=new H(1,1,1),ii=new H,es=new H,un=new H,sc=new At,oc=new fi;class Nn{constructor(e=0,t=0,n=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],f=r[9],p=r[2],_=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(_,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(_,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oc.setFromEuler(this),this.setFromQuaternion(oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vf=0;const ac=new H,Xi=new fi,Hn=new At,ts=new H,Er=new H,xf=new H,Mf=new fi,cc=new H(1,0,0),lc=new H(0,1,0),uc=new H(0,0,1),hc={type:"added"},yf={type:"removed"},$i={type:"childadded",child:null},oo={type:"childremoved",child:null};class Xt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new H,t=new Nn,n=new fi,r=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new je}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ts.copy(e):ts.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Er,ts,this.up):Hn.lookAt(ts,Er,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hc),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yf),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hc),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),p=o(e.shapes),_=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),_.length>0&&(n.skeletons=_),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new H(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new H,kn=new H,ao=new H,Gn=new H,Yi=new H,qi=new H,fc=new H,co=new H,lo=new H,uo=new H,ho=new Dt,fo=new Dt,po=new Dt;class An{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Tn.subVectors(e,t),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Tn.subVectors(r,t),kn.subVectors(n,t),ao.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(kn),c=Tn.dot(ao),l=kn.dot(kn),f=kn.dot(ao),p=o*l-a*a;if(p===0)return s.set(0,0,0),null;const _=1/p,m=(l*c-a*f)*_,v=(o*f-a*c)*_;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return ho.setScalar(0),fo.setScalar(0),po.setScalar(0),ho.fromBufferAttribute(e,t),fo.fromBufferAttribute(e,n),po.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ho,s.x),o.addScaledVector(fo,s.y),o.addScaledVector(po,s.z),o}static isFrontFacing(e,t,n,r){return Tn.subVectors(n,t),kn.subVectors(e,t),Tn.cross(kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),Tn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return An.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,n),qi.subVectors(s,n),co.subVectors(e,n);const c=Yi.dot(co),l=qi.dot(co);if(c<=0&&l<=0)return t.copy(n);lo.subVectors(e,r);const f=Yi.dot(lo),p=qi.dot(lo);if(f>=0&&p<=f)return t.copy(r);const _=c*p-f*l;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Yi,o);uo.subVectors(e,s);const m=Yi.dot(uo),v=qi.dot(uo);if(v>=0&&m<=v)return t.copy(s);const M=m*l-c*v;if(M<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(n).addScaledVector(qi,a);const g=f*v-m*p;if(g<=0&&p-f>=0&&m-v>=0)return fc.subVectors(s,r),a=(p-f)/(p-f+(m-v)),t.copy(r).addScaledVector(fc,a);const d=1/(g+M+_);return o=M*d,a=_*d,t.copy(n).addScaledVector(Yi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},ns={h:0,s:0,l:0};function mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=Ta(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=mo(o,s,e+1/3),this.g=mo(o,s,e),this.b=mo(o,s,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return dt.fromWorkingColorSpace(jt.copy(this),e),Math.round(tt(jt.r*255,0,255))*65536+Math.round(tt(jt.g*255,0,255))*256+Math.round(tt(jt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,r=jt.g,s=jt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const f=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=f<=.5?p/(o+a):p/(2-o-a),o){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=fn){dt.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,r=jt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(ns);const n=Dr(ri.h,ns.h,t),r=Dr(ri.s,ns.s,t),s=Dr(ri.l,ns.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new rt;rt.NAMES=wl;let Sf=0;class Di extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=rr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Uo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Za,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==Uo&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Za&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rl extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new H,is=new qe;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class Cl extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pl extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ef=0;const pn=new At,_o=new Xt,ji=new H,hn=new Vr,Tr=new Vr,Wt=new H;class Pn extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tl(e)?Pl:Cl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(hn.min,Tr.min),hn.expandByPoint(Wt),Wt.addVectors(hn.max,Tr.max),hn.expandByPoint(Wt)):(hn.expandByPoint(Tr.min),hn.expandByPoint(Tr.max))}hn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Wt.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(e,l),Wt.add(ji)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<n.count;N++)a[N]=new H,c[N]=new H;const l=new H,f=new H,p=new H,_=new qe,m=new qe,v=new qe,M=new H,g=new H;function d(N,b,S){l.fromBufferAttribute(n,N),f.fromBufferAttribute(n,b),p.fromBufferAttribute(n,S),_.fromBufferAttribute(s,N),m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,S),f.sub(l),p.sub(l),m.sub(_),v.sub(_);const L=1/(m.x*v.y-v.x*m.y);isFinite(L)&&(M.copy(f).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(L),g.copy(p).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(L),a[N].add(M),a[b].add(M),a[S].add(M),c[N].add(g),c[b].add(g),c[S].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let N=0,b=P.length;N<b;++N){const S=P[N],L=S.start,G=S.count;for(let X=L,K=L+G;X<K;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const R=new H,T=new H,F=new H,D=new H;function C(N){F.fromBufferAttribute(r,N),D.copy(F);const b=a[N];R.copy(b),R.sub(F.multiplyScalar(F.dot(b))).normalize(),T.crossVectors(D,b);const L=T.dot(c[N])<0?-1:1;o.setXYZW(N,R.x,R.y,R.z,L)}for(let N=0,b=P.length;N<b;++N){const S=P[N],L=S.start,G=S.count;for(let X=L,K=L+G;X<K;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,m=n.count;_<m;_++)n.setXYZ(_,0,0,0);const r=new H,s=new H,o=new H,a=new H,c=new H,l=new H,f=new H,p=new H;if(e)for(let _=0,m=e.count;_<m;_+=3){const v=e.getX(_+0),M=e.getX(_+1),g=e.getX(_+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,g),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,g),a.add(f),c.add(f),l.add(f),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let _=0,m=t.count;_<m;_+=3)r.fromBufferAttribute(t,_+0),s.fromBufferAttribute(t,_+1),o.fromBufferAttribute(t,_+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),n.setXYZ(_+0,f.x,f.y,f.z),n.setXYZ(_+1,f.x,f.y,f.z),n.setXYZ(_+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){const l=a.array,f=a.itemSize,p=a.normalized,_=new l.constructor(c.length*f);let m=0,v=0;for(let M=0,g=c.length;M<g;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*f;for(let d=0;d<f;d++)_[v++]=l[m++]}return new Ot(_,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let f=0,p=l.length;f<p;f++){const _=l[f],m=e(_,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let p=0,_=l.length;p<_;p++){const m=l[p];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],p=s[l];for(let _=0,m=p.length;_<m;_++)f.push(p[_].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,f=o.length;l<f;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new At,xi=new Aa,rs=new Bs,pc=new H,ss=new H,os=new H,as=new H,go=new H,cs=new H,mc=new H,ls=new H;class Rn extends Xt{constructor(e=new Pn,t=new Rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=a[c],p=s[c];f!==0&&(go.fromBufferAttribute(p,e),o?cs.addScaledVector(go,f):cs.addScaledVector(go.sub(t),f))}t.add(cs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(rs.containsPoint(xi.origin)===!1&&(xi.intersectSphere(rs,pc)===null||xi.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(dc.copy(s).invert(),xi.copy(e.ray).applyMatrix4(dc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,_=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=_.length;v<M;v++){const g=_[v],d=o[g.materialIndex],P=Math.max(g.start,m.start),R=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let T=P,F=R;T<F;T+=3){const D=a.getX(T),C=a.getX(T+1),N=a.getX(T+2);r=us(this,d,e,n,l,f,p,D,C,N),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=v,d=M;g<d;g+=3){const P=a.getX(g),R=a.getX(g+1),T=a.getX(g+2);r=us(this,o,e,n,l,f,p,P,R,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,M=_.length;v<M;v++){const g=_[v],d=o[g.materialIndex],P=Math.max(g.start,m.start),R=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let T=P,F=R;T<F;T+=3){const D=T,C=T+1,N=T+2;r=us(this,d,e,n,l,f,p,D,C,N),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let g=v,d=M;g<d;g+=3){const P=g,R=g+1,T=g+2;r=us(this,o,e,n,l,f,p,P,R,T),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Tf(i,e,t,n,r,s,o,a){let c;if(e.side===on?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===hi,a),c===null)return null;ls.copy(a),ls.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ls);return l<t.near||l>t.far?null:{distance:l,point:ls.clone(),object:i}}function us(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,ss),i.getVertexPosition(c,os),i.getVertexPosition(l,as);const f=Tf(i,e,t,n,ss,os,as,mc);if(f){const p=new H;An.getBarycoord(mc,ss,os,as,p),r&&(f.uv=An.getInterpolatedAttribute(r,a,c,l,p,new qe)),s&&(f.uv1=An.getInterpolatedAttribute(s,a,c,l,p,new qe)),o&&(f.normal=An.getInterpolatedAttribute(o,a,c,l,p,new H),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const _={a,b:c,c:l,normal:new H,materialIndex:0};An.getNormal(ss,os,as,_.normal),f.face=_,f.barycoord=p}return f}class Hr extends Pn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],f=[],p=[];let _=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(p,2));function v(M,g,d,P,R,T,F,D,C,N,b){const S=T/C,L=F/N,G=T/2,X=F/2,K=D/2,ee=C+1,Q=N+1;let he=0,J=0;const ye=new H;for(let Re=0;Re<Q;Re++){const Ie=Re*L-X;for(let Ze=0;Ze<ee;Ze++){const mt=Ze*S-G;ye[M]=mt*P,ye[g]=Ie*R,ye[d]=K,l.push(ye.x,ye.y,ye.z),ye[M]=0,ye[g]=0,ye[d]=D>0?1:-1,f.push(ye.x,ye.y,ye.z),p.push(Ze/C),p.push(1-Re/N),he+=1}}for(let Re=0;Re<N;Re++)for(let Ie=0;Ie<C;Ie++){const Ze=_+Ie+ee*Re,mt=_+Ie+ee*(Re+1),ie=_+(Ie+1)+ee*(Re+1),me=_+(Ie+1)+ee*Re;c.push(Ze,mt,me),c.push(mt,ie,me),J+=6}a.addGroup(m,J,b),m+=J,_+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=dr(i[t]);for(const r in n)e[r]=n[r]}return e}function bf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Af={clone:dr,merge:en};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ll extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new H,_c=new qe,gc=new qe;class mn extends Ll{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,_c,gc),t.subVectors(gc,_c)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class Cf extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const s=new mn(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const o=new mn(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const a=new mn(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const c=new mn(Ki,Zi,e,t);c.layers=this.layers,this.add(c);const l=new mn(Ki,Zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,f]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(p,_,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Il extends nn{constructor(e,t,n,r,s,o,a,c,l,f){e=e!==void 0?e:[],t=t!==void 0?t:cr,super(e,t,n,r,s,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pf extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Il(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:li});s.uniforms.tEquirect.value=t;const o=new Rn(r,s),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=wn),new Cf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class _a extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vo=new H,Df=new H,Lf=new je;class oi{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=vo.subVectors(n,t).cross(Df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(vo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lf.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Bs,hs=new H;class wa{constructor(e=new oi,t=new oi,n=new oi,r=new oi,s=new oi,o=new oi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],f=r[5],p=r[6],_=r[7],m=r[8],v=r[9],M=r[10],g=r[11],d=r[12],P=r[13],R=r[14],T=r[15];if(n[0].setComponents(c-s,_-l,g-m,T-d).normalize(),n[1].setComponents(c+s,_+l,g+m,T+d).normalize(),n[2].setComponents(c+o,_+f,g+v,T+P).normalize(),n[3].setComponents(c-o,_-f,g-v,T-P).normalize(),n[4].setComponents(c-a,_-p,g-M,T-R).normalize(),t===Yn)n[5].setComponents(c+a,_+p,g+M,T+R).normalize();else if(t===Ps)n[5].setComponents(a,p,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(hs.x=r.normal.x>0?e.max.x:e.min.x,hs.y=r.normal.y>0?e.max.y:e.min.y,hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ul extends Di{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Is=new H,Us=new H,vc=new At,br=new Aa,fs=new Bs,xo=new H,xc=new H;class If extends Xt{constructor(e=new Pn,t=new Ul){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Is.fromBufferAttribute(t,r-1),Us.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Is.distanceTo(Us);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),fs.radius+=s,e.ray.intersectsSphere(fs)===!1)return;vc.copy(r).invert(),br.copy(e.ray).applyMatrix4(vc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=n.index,_=n.attributes.position;if(f!==null){const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let M=m,g=v-1;M<g;M+=l){const d=f.getX(M),P=f.getX(M+1),R=ds(this,e,br,c,d,P);R&&t.push(R)}if(this.isLineLoop){const M=f.getX(v-1),g=f.getX(m),d=ds(this,e,br,c,M,g);d&&t.push(d)}}else{const m=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let M=m,g=v-1;M<g;M+=l){const d=ds(this,e,br,c,M,M+1);d&&t.push(d)}if(this.isLineLoop){const M=ds(this,e,br,c,v-1,m);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ds(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(Is.fromBufferAttribute(o,r),Us.fromBufferAttribute(o,s),t.distanceSqToSegment(Is,Us,xo,xc)>n)return;xo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xo);if(!(c<e.near||c>e.far))return{distance:c,point:xc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Mc=new H,yc=new H;class Uf extends If{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Mc.fromBufferAttribute(t,r),yc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Mc.distanceTo(yc);e.setAttribute("lineDistance",new an(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wr extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Mo extends nn{constructor(e,t,n,r,s,o,a,c,l,f,p,_){super(null,o,a,c,l,f,r,s,p,_),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Nl extends nn{constructor(e,t,n,r,s,o,a,c,l,f=sr){if(f!==sr&&f!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===sr&&(n=Ai),n===void 0&&f===hr&&(n=ur),super(null,r,s,o,a,c,f,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ra extends Pn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],p=[],_=[],m=[];let v=0;const M=[],g=n/2;let d=0;P(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(f),this.setAttribute("position",new an(p,3)),this.setAttribute("normal",new an(_,3)),this.setAttribute("uv",new an(m,2));function P(){const T=new H,F=new H;let D=0;const C=(t-e)/n;for(let N=0;N<=s;N++){const b=[],S=N/s,L=S*(t-e)+e;for(let G=0;G<=r;G++){const X=G/r,K=X*c+a,ee=Math.sin(K),Q=Math.cos(K);F.x=L*ee,F.y=-S*n+g,F.z=L*Q,p.push(F.x,F.y,F.z),T.set(ee,C,Q).normalize(),_.push(T.x,T.y,T.z),m.push(X,1-S),b.push(v++)}M.push(b)}for(let N=0;N<r;N++)for(let b=0;b<s;b++){const S=M[b][N],L=M[b+1][N],G=M[b+1][N+1],X=M[b][N+1];(e>0||b!==0)&&(f.push(S,L,X),D+=3),(t>0||b!==s-1)&&(f.push(L,G,X),D+=3)}l.addGroup(d,D,0),d+=D}function R(T){const F=v,D=new qe,C=new H;let N=0;const b=T===!0?e:t,S=T===!0?1:-1;for(let G=1;G<=r;G++)p.push(0,g*S,0),_.push(0,S,0),m.push(.5,.5),v++;const L=v;for(let G=0;G<=r;G++){const K=G/r*c+a,ee=Math.cos(K),Q=Math.sin(K);C.x=b*Q,C.y=g*S,C.z=b*ee,p.push(C.x,C.y,C.z),_.push(0,S,0),D.x=ee*.5+.5,D.y=Q*.5*S+.5,m.push(D.x,D.y),v++}for(let G=0;G<r;G++){const X=F+G,K=L+G;T===!0?f.push(K,K+1,X):f.push(K+1,K,X),N+=3}l.addGroup(d,N,T===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kr extends Pn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,f=c+1,p=e/a,_=t/c,m=[],v=[],M=[],g=[];for(let d=0;d<f;d++){const P=d*_-o;for(let R=0;R<l;R++){const T=R*p-s;v.push(T,-P,0),M.push(0,0,1),g.push(R/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let P=0;P<a;P++){const R=P+l*d,T=P+l*(d+1),F=P+1+l*(d+1),D=P+1+l*d;m.push(R,T,D),m.push(T,F,D)}this.setIndex(m),this.setAttribute("position",new an(v,3)),this.setAttribute("normal",new an(M,3)),this.setAttribute("uv",new an(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nf extends Di{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new rt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Fl extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ff extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Of extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ol extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Bf extends Ol{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const yo=new At,Sc=new H,Ec=new H;class zf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sc),Ec.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ec),t.updateMatrixWorld(),yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bl extends Ll{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vf extends zf{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zl extends Ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Vf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hf extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Ca="\\[\\]\\.:\\/",kf=new RegExp("["+Ca+"]","g"),Pa="[^"+Ca+"]",Gf="[^"+Ca.replace("\\.","")+"]",Wf=/((?:WC+[\/:])*)/.source.replace("WC",Pa),Xf=/(WCOD+)?/.source.replace("WCOD",Gf),$f=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pa),Yf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pa),qf=new RegExp("^"+Wf+Xf+$f+Yf+"$"),jf=["material","materials","bones","map"];class Kf{constructor(e,t,n){const r=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kf,"")}static parseTrackName(e){const t=qf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);jf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=Kf;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Tc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zf extends Uf{constructor(e=10,t=10,n=4473924,r=8947848){n=new rt(n),r=new rt(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let _=0,m=0,v=-a;_<=t;_++,v+=o){c.push(-a,0,v,a,0,v),c.push(v,0,-a,v,0,a);const M=_===s?n:r;M.toArray(l,m),m+=3,M.toArray(l,m),m+=3,M.toArray(l,m),m+=3,M.toArray(l,m),m+=3}const f=new Pn;f.setAttribute("position",new an(c,3)),f.setAttribute("color",new an(l,3));const p=new Ul({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Jf extends Pi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function bc(i,e,t,n){const r=Qf(n);switch(t){case ml:return i*e;case gl:return i*e;case vl:return i*e*2;case xl:return i*e/r.components*r.byteLength;case ya:return i*e/r.components*r.byteLength;case Ml:return i*e*2/r.components*r.byteLength;case Sa:return i*e*2/r.components*r.byteLength;case _l:return i*e*3/r.components*r.byteLength;case _n:return i*e*4/r.components*r.byteLength;case Ea:return i*e*4/r.components*r.byteLength;case xs:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ys:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(e,8)/4;case Wo:case $o:return Math.max(i,8)*Math.max(e,8)/2;case qo:case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Es:case ha:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yl:case da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pa:case ma:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qf(i){switch(i){case jn:case fl:return{byteLength:1,components:1};case Ur:case dl:case zr:return{byteLength:2,components:1};case xa:case Ma:return{byteLength:2,components:4};case Ai:case va:case $n:return{byteLength:4,components:1};case pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fs);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ed(i){const e=new WeakMap;function t(a,c){const l=a.array,f=a.usage,p=l.byteLength,_=i.createBuffer();i.bindBuffer(c,_),i.bufferData(c,l,f),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:_,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){const f=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,f);else{p.sort((m,v)=>m.start-v.start);let _=0;for(let m=1;m<p.length;m++){const v=p[_],M=p[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++_,p[_]=M)}p.length=_+1;for(let m=0,v=p.length;m<v;m++){const M=p[m];i.bufferSubData(l,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
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
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Td=`#define PI 3.141592653589793
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
} // validated`,bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ad=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
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
}`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$d=`uniform bool receiveShadow;
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
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jd=`PhysicalMaterial material;
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
#endif`,Qd=`struct PhysicalMaterial {
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
}`,ep=`
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,up=`#if defined( USE_POINTS_UV )
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
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
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
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#ifdef USE_TRANSMISSION
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
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
}`,am=`#if DEPTH_PACKING == 3200
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
}`,cm=`#define DISTANCE
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
}`,lm=`#define DISTANCE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`uniform float scale;
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
}`,dm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
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
}`,gm=`#define LAMBERT
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
}`,vm=`#define MATCAP
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
}`,xm=`#define MATCAP
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
}`,Mm=`#define NORMAL
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
}`,ym=`#define NORMAL
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
}`,Sm=`#define PHONG
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
}`,Em=`#define PHONG
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
}`,Tm=`#define STANDARD
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
}`,bm=`#define STANDARD
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
}`,Am=`#define TOON
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
}`,wm=`#define TOON
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
}`,Rm=`uniform float size;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Dm=`uniform vec3 color;
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
}`,Lm=`uniform float rotation;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:td,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:rd,alphatest_fragment:sd,alphatest_pars_fragment:od,aomap_fragment:ad,aomap_pars_fragment:cd,batching_pars_vertex:ld,batching_vertex:ud,begin_vertex:hd,beginnormal_vertex:fd,bsdfs:dd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:_d,clipping_planes_pars_fragment:gd,clipping_planes_pars_vertex:vd,clipping_planes_vertex:xd,color_fragment:Md,color_pars_fragment:yd,color_pars_vertex:Sd,color_vertex:Ed,common:Td,cube_uv_reflection_fragment:bd,defaultnormal_vertex:Ad,displacementmap_pars_vertex:wd,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Pd,colorspace_fragment:Dd,colorspace_pars_fragment:Ld,envmap_fragment:Id,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:Yd,envmap_vertex:Od,fog_vertex:Bd,fog_pars_vertex:zd,fog_fragment:Vd,fog_pars_fragment:Hd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:$d,lights_toon_fragment:qd,lights_toon_pars_fragment:jd,lights_phong_fragment:Kd,lights_phong_pars_fragment:Zd,lights_physical_fragment:Jd,lights_physical_pars_fragment:Qd,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:sp,logdepthbuf_vertex:op,map_fragment:ap,map_pars_fragment:cp,map_particle_fragment:lp,map_particle_pars_fragment:up,metalnessmap_fragment:hp,metalnessmap_pars_fragment:fp,morphinstance_vertex:dp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:_p,morphtarget_vertex:gp,normal_fragment_begin:vp,normal_fragment_maps:xp,normal_pars_fragment:Mp,normal_pars_vertex:yp,normal_vertex:Sp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:wp,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Pp,project_vertex:Dp,dithering_fragment:Lp,dithering_pars_fragment:Ip,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Op,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:Vp,skinning_pars_vertex:Hp,skinning_vertex:kp,skinnormal_vertex:Gp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:$p,tonemapping_pars_fragment:Yp,transmission_fragment:qp,transmission_pars_fragment:jp,uv_pars_fragment:Kp,uv_pars_vertex:Zp,uv_vertex:Jp,worldpos_vertex:Qp,background_vert:em,background_frag:tm,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:rm,cube_frag:sm,depth_vert:om,depth_frag:am,distanceRGBA_vert:cm,distanceRGBA_frag:lm,equirect_vert:um,equirect_frag:hm,linedashed_vert:fm,linedashed_frag:dm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:_m,meshlambert_frag:gm,meshmatcap_vert:vm,meshmatcap_frag:xm,meshnormal_vert:Mm,meshnormal_frag:ym,meshphong_vert:Sm,meshphong_frag:Em,meshphysical_vert:Tm,meshphysical_frag:bm,meshtoon_vert:Am,meshtoon_frag:wm,points_vert:Rm,points_frag:Cm,shadow_vert:Pm,shadow_frag:Dm,sprite_vert:Lm,sprite_frag:Im},xe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},In={basic:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:en([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:en([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:en([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:en([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:en([xe.points,xe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:en([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:en([xe.common,xe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:en([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:en([xe.sprite,xe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:en([xe.common,xe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:en([xe.lights,xe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};In.physical={uniforms:en([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ps={r:0,b:0,g:0},yi=new Nn,Um=new At;function Nm(i,e,t,n,r,s,o){const a=new rt(0);let c=s===!0?0:1,l,f,p=null,_=0,m=null;function v(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?t:e).get(T)),T}function M(R){let T=!1;const F=v(R);F===null?d(a,c):F&&F.isColor&&(d(F,1),T=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(R,T){const F=v(T);F&&(F.isCubeTexture||F.mapping===Os)?(f===void 0&&(f=new Rn(new Hr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:dr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),yi.copy(T.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),f.material.uniforms.envMap.value=F,f.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(yi)),f.material.toneMapped=dt.getTransfer(F.colorSpace)!==gt,(p!==F||_!==F.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,p=F,_=F.version,m=i.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null)):F&&F.isTexture&&(l===void 0&&(l=new Rn(new kr(2,2),new di({name:"BackgroundMaterial",uniforms:dr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=F,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=dt.getTransfer(F.colorSpace)!==gt,F.matrixAutoUpdate===!0&&F.updateMatrix(),l.material.uniforms.uvTransform.value.copy(F.matrix),(p!==F||_!==F.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,p=F,_=F.version,m=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function d(R,T){R.getRGB(ps,Dl(i)),n.buffers.color.setClear(ps.r,ps.g,ps.b,T,o)}function P(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(R,T=1){a.set(R),c=T,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,d(a,c)},render:M,addToRenderList:g,dispose:P}}function Fm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let s=r,o=!1;function a(S,L,G,X,K){let ee=!1;const Q=p(X,G,L);s!==Q&&(s=Q,l(s.object)),ee=m(S,X,G,K),ee&&v(S,X,G,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,T(S,L,G,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function f(S){return i.deleteVertexArray(S)}function p(S,L,G){const X=G.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let ee=K[L.id];ee===void 0&&(ee={},K[L.id]=ee);let Q=ee[X];return Q===void 0&&(Q=_(c()),ee[X]=Q),Q}function _(S){const L=[],G=[],X=[];for(let K=0;K<t;K++)L[K]=0,G[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:X,object:S,attributes:{},index:null}}function m(S,L,G,X){const K=s.attributes,ee=L.attributes;let Q=0;const he=G.getAttributes();for(const J in he)if(he[J].location>=0){const Re=K[J];let Ie=ee[J];if(Ie===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(Ie=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(Ie=S.instanceColor)),Re===void 0||Re.attribute!==Ie||Ie&&Re.data!==Ie.data)return!0;Q++}return s.attributesNum!==Q||s.index!==X}function v(S,L,G,X){const K={},ee=L.attributes;let Q=0;const he=G.getAttributes();for(const J in he)if(he[J].location>=0){let Re=ee[J];Re===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor));const Ie={};Ie.attribute=Re,Re&&Re.data&&(Ie.data=Re.data),K[J]=Ie,Q++}s.attributes=K,s.attributesNum=Q,s.index=X}function M(){const S=s.newAttributes;for(let L=0,G=S.length;L<G;L++)S[L]=0}function g(S){d(S,0)}function d(S,L){const G=s.newAttributes,X=s.enabledAttributes,K=s.attributeDivisors;G[S]=1,X[S]===0&&(i.enableVertexAttribArray(S),X[S]=1),K[S]!==L&&(i.vertexAttribDivisor(S,L),K[S]=L)}function P(){const S=s.newAttributes,L=s.enabledAttributes;for(let G=0,X=L.length;G<X;G++)L[G]!==S[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function R(S,L,G,X,K,ee,Q){Q===!0?i.vertexAttribIPointer(S,L,G,K,ee):i.vertexAttribPointer(S,L,G,X,K,ee)}function T(S,L,G,X){M();const K=X.attributes,ee=G.getAttributes(),Q=L.defaultAttributeValues;for(const he in ee){const J=ee[he];if(J.location>=0){let ye=K[he];if(ye===void 0&&(he==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),he==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),ye!==void 0){const Re=ye.normalized,Ie=ye.itemSize,Ze=e.get(ye);if(Ze===void 0)continue;const mt=Ze.buffer,ie=Ze.type,me=Ze.bytesPerElement,Ce=ie===i.INT||ie===i.UNSIGNED_INT||ye.gpuType===va;if(ye.isInterleavedBufferAttribute){const Se=ye.data,Ve=Se.stride,ze=ye.offset;if(Se.isInstancedInterleavedBuffer){for(let Je=0;Je<J.locationSize;Je++)d(J.location+Je,Se.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Je=0;Je<J.locationSize;Je++)g(J.location+Je);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Je=0;Je<J.locationSize;Je++)R(J.location+Je,Ie/J.locationSize,ie,Re,Ve*me,(ze+Ie/J.locationSize*Je)*me,Ce)}else{if(ye.isInstancedBufferAttribute){for(let Se=0;Se<J.locationSize;Se++)d(J.location+Se,ye.meshPerAttribute);S.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Se=0;Se<J.locationSize;Se++)g(J.location+Se);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Se=0;Se<J.locationSize;Se++)R(J.location+Se,Ie/J.locationSize,ie,Re,Ie*me,Ie/J.locationSize*Se*me,Ce)}}else if(Q!==void 0){const Re=Q[he];if(Re!==void 0)switch(Re.length){case 2:i.vertexAttrib2fv(J.location,Re);break;case 3:i.vertexAttrib3fv(J.location,Re);break;case 4:i.vertexAttrib4fv(J.location,Re);break;default:i.vertexAttrib1fv(J.location,Re)}}}}P()}function F(){N();for(const S in n){const L=n[S];for(const G in L){const X=L[G];for(const K in X)f(X[K].object),delete X[K];delete L[G]}delete n[S]}}function D(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const G in L){const X=L[G];for(const K in X)f(X[K].object),delete X[K];delete L[G]}delete n[S.id]}function C(S){for(const L in n){const G=n[L];if(G[S.id]===void 0)continue;const X=G[S.id];for(const K in X)f(X[K].object),delete X[K];delete G[S.id]}}function N(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:P}}function Om(i,e,t){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function o(l,f,p){p!==0&&(i.drawArraysInstanced(n,l,f,p),t.update(f,n,p))}function a(l,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v];t.update(m,n,1)}function c(l,f,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)o(l[v],f[v],_[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,f,0,_,0,p);let v=0;for(let M=0;M<p;M++)v+=f[M]*_[M];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Bm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==_n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$n&&!N)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const p=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=v>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:_,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:P,maxVaryings:R,maxFragmentUniforms:T,vertexTextures:F,maxSamples:D}}function zm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new oi,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const m=p.length!==0||_||n!==0||r;return r=_,n=p.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,_){t=f(p,_,0)},this.setState=function(p,_,m){const v=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,d=i.get(p);if(!r||v===null||v.length===0||s&&!g)s?f(null):l();else{const P=s?0:n,R=P*4;let T=d.clippingState||null;c.value=T,T=f(v,_,R,m);for(let F=0;F!==R;++F)T[F]=t[F];d.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,_,m,v){const M=p!==null?p.length:0;let g=null;if(M!==0){if(g=c.value,v!==!0||g===null){const d=m+M*4,P=_.matrixWorldInverse;a.getNormalMatrix(P),(g===null||g.length<d)&&(g=new Float32Array(d));for(let R=0,T=m;R!==M;++R,T+=4)o.copy(p[R]).applyMatrix4(P,a),o.normal.toArray(g,T),g[T+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function Vm(i){let e=new WeakMap;function t(o,a){return a===ko?o.mapping=cr:a===Go&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ko||a===Go)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Pf(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const nr=4,Ac=[.125,.215,.35,.446,.526,.582],bi=20,So=new Bl,wc=new rt;let Eo=null,To=0,bo=0,Ao=!1;const Ei=(1+Math.sqrt(5))/2,Ji=1/Ei,Rc=[new H(-Ei,Ji,0),new H(Ei,Ji,0),new H(-Ji,0,Ei),new H(Ji,0,Ei),new H(0,Ei,-Ji),new H(0,Ei,Ji),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo,To,bo),this._renderer.xr.enabled=Ao,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget(),To=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:zr,format:_n,colorSpace:fr,depthBuffer:!1},r=Pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(s)),this._blurMaterial=km(s,e,t)}return r}_compileMaterial(e){const t=new Rn(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,r){const a=new mn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,_=f.toneMapping;f.getClearColor(wc),f.toneMapping=ui,f.autoClear=!1;const m=new Rl({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new Rn(new Hr,m);let M=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,M=!0):(m.color.copy(wc),M=!0);for(let d=0;d<6;d++){const P=d%3;P===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):P===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const R=this._cubeSize;ms(r,P*R,d>2?R:0,R,R),f.setRenderTarget(r),M&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=_,f.autoClear=p,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===cr||e.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,So)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rc[(r-s-1)%Rc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,p=new Rn(this._lodPlanes[r],l),_=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*bi-1),M=s/v,g=isFinite(s)?1+Math.floor(f*M):bi;g>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);const d=[];let P=0;for(let C=0;C<bi;++C){const N=C/M,b=Math.exp(-N*N/2);d.push(b),C===0?P+=b:C<g&&(P+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/P;_.envMap.value=e.texture,_.samples.value=g,_.weights.value=d,_.latitudinal.value=o==="latitudinal",a&&(_.poleAxis.value=a);const{_lodMax:R}=this;_.dTheta.value=v,_.mipInt.value=R-n;const T=this._sizeLods[r],F=3*T*(r>R-nr?r-R+nr:0),D=4*(this._cubeSize-T);ms(t,F,D,3*T,2*T),c.setRenderTarget(t),c.render(p,So)}}function Hm(i){const e=[],t=[],n=[];let r=i;const s=i-nr+1+Ac.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-nr?c=Ac[o-i+nr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),f=-l,p=1+l,_=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,v=6,M=3,g=2,d=1,P=new Float32Array(M*v*m),R=new Float32Array(g*v*m),T=new Float32Array(d*v*m);for(let D=0;D<m;D++){const C=D%3*2/3-1,N=D>2?0:-1,b=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];P.set(b,M*v*D),R.set(_,g*v*D);const S=[D,D,D,D,D,D];T.set(S,d*v*D)}const F=new Pn;F.setAttribute("position",new Ot(P,M)),F.setAttribute("uv",new Ot(R,g)),F.setAttribute("faceIndex",new Ot(T,d)),e.push(F),r>nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pc(i,e,t){const n=new wi(i,e,t);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function km(i,e,t){const n=new Float32Array(bi),r=new H(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Da(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Dc(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Lc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Da(){return`

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
	`}function Gm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ko||c===Go,f=c===cr||c===lr;if(l||f){let p=e.get(a);const _=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==_)return t===null&&(t=new Cc(i)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const m=a.image;return l&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new Cc(i)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let c=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Xm(i,e,t,n){const r={},s=new WeakMap;function o(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const v in _.attributes)e.remove(_.attributes[v]);_.removeEventListener("dispose",o),delete r[_.id];const m=s.get(_);m&&(e.remove(m),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function a(p,_){return r[_.id]===!0||(_.addEventListener("dispose",o),r[_.id]=!0,t.memory.geometries++),_}function c(p){const _=p.attributes;for(const m in _)e.update(_[m],i.ARRAY_BUFFER)}function l(p){const _=[],m=p.index,v=p.attributes.position;let M=0;if(m!==null){const P=m.array;M=m.version;for(let R=0,T=P.length;R<T;R+=3){const F=P[R+0],D=P[R+1],C=P[R+2];_.push(F,D,D,C,C,F)}}else if(v!==void 0){const P=v.array;M=v.version;for(let R=0,T=P.length/3-1;R<T;R+=3){const F=R+0,D=R+1,C=R+2;_.push(F,D,D,C,C,F)}}else return;const g=new(Tl(_)?Pl:Cl)(_,1);g.version=M;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function f(p){const _=s.get(p);if(_){const m=p.index;m!==null&&_.version<m.version&&l(p)}else l(p);return s.get(p)}return{get:a,update:c,getWireframeAttribute:f}}function $m(i,e,t){let n;function r(_){n=_}let s,o;function a(_){s=_.type,o=_.bytesPerElement}function c(_,m){i.drawElements(n,m,s,_*o),t.update(m,n,1)}function l(_,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,_*o,v),t.update(m,n,v))}function f(_,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,_,0,v);let g=0;for(let d=0;d<v;d++)g+=m[d];t.update(g,n,1)}function p(_,m,v,M){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<_.length;d++)l(_[d]/o,m[d],M[d]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,_,0,M,0,v);let d=0;for(let P=0;P<v;P++)d+=m[P]*M[P];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Ym(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function qm(i,e,t){const n=new WeakMap,r=new Dt;function s(o,a,c){const l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0;let _=n.get(a);if(_===void 0||_.count!==p){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};_!==void 0&&_.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let R=0;m===!0&&(R=1),v===!0&&(R=2),M===!0&&(R=3);let T=a.attributes.position.count*R,F=1;T>e.maxTextureSize&&(F=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const D=new Float32Array(T*F*4*p),C=new bl(D,T,F,p);C.type=$n,C.needsUpdate=!0;const N=R*4;for(let S=0;S<p;S++){const L=g[S],G=d[S],X=P[S],K=T*F*4*S;for(let ee=0;ee<L.count;ee++){const Q=ee*N;m===!0&&(r.fromBufferAttribute(L,ee),D[K+Q+0]=r.x,D[K+Q+1]=r.y,D[K+Q+2]=r.z,D[K+Q+3]=0),v===!0&&(r.fromBufferAttribute(G,ee),D[K+Q+4]=r.x,D[K+Q+5]=r.y,D[K+Q+6]=r.z,D[K+Q+7]=0),M===!0&&(r.fromBufferAttribute(X,ee),D[K+Q+8]=r.x,D[K+Q+9]=r.y,D[K+Q+10]=r.z,D[K+Q+11]=X.itemSize===4?r.w:1)}}_={count:p,texture:C,size:new qe(T,F)},n.set(a,_),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let M=0;M<l.length;M++)m+=l[M];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:s}}function jm(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,p=e.get(c,f);if(r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const _=c.skeleton;r.get(_)!==l&&(_.update(),r.set(_,l))}return p}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Hl=new nn,Ic=new Nl(1,1),kl=new bl,Gl=new pf,Wl=new Il,Uc=[],Nc=[],Fc=new Float32Array(16),Oc=new Float32Array(9),Bc=new Float32Array(4);function _r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Uc[r];if(s===void 0&&(s=new Float32Array(r),Uc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zs(i,e){let t=Nc[e];t===void 0&&(t=new Int32Array(e),Nc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function e_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Bc.set(n),i.uniformMatrix2fv(this.addr,!1,Bc),Vt(t,n)}}function t_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Oc.set(n),i.uniformMatrix3fv(this.addr,!1,Oc),Vt(t,n)}}function n_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Fc.set(n),i.uniformMatrix4fv(this.addr,!1,Fc),Vt(t,n)}}function i_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function s_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function o_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function a_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function l_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function u_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function h_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=El,s=Ic):s=Hl,t.setTexture2D(e||s,r)}function f_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gl,r)}function d_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wl,r)}function p_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||kl,r)}function m_(i){switch(i){case 5126:return Km;case 35664:return Zm;case 35665:return Jm;case 35666:return Qm;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return c_;case 36295:return l_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return p_}}function __(i,e){i.uniform1fv(this.addr,e)}function g_(i,e){const t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function v_(i,e){const t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function x_(i,e){const t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function M_(i,e){const t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y_(i,e){const t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function S_(i,e){const t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function E_(i,e){i.uniform1iv(this.addr,e)}function T_(i,e){i.uniform2iv(this.addr,e)}function b_(i,e){i.uniform3iv(this.addr,e)}function A_(i,e){i.uniform4iv(this.addr,e)}function w_(i,e){i.uniform1uiv(this.addr,e)}function R_(i,e){i.uniform2uiv(this.addr,e)}function C_(i,e){i.uniform3uiv(this.addr,e)}function P_(i,e){i.uniform4uiv(this.addr,e)}function D_(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hl,s[o])}function L_(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gl,s[o])}function I_(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wl,s[o])}function U_(i,e,t){const n=this.cache,r=e.length,s=zs(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kl,s[o])}function N_(i){switch(i){case 5126:return __;case 35664:return g_;case 35665:return v_;case 35666:return x_;case 35674:return M_;case 35675:return y_;case 35676:return S_;case 5124:case 35670:return E_;case 35667:case 35671:return T_;case 35668:case 35672:return b_;case 35669:case 35673:return A_;case 5125:return w_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return U_}}class F_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m_(t.type)}}class O_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N_(t.type)}}class B_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function zc(i,e){i.seq.push(e),i.map[e.id]=e}function z_(i,e,t){const n=i.name,r=n.length;for(wo.lastIndex=0;;){const s=wo.exec(n),o=wo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){zc(t,l===void 0?new F_(a,i,e):new O_(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new B_(a),zc(t,p)),t=p}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);z_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Vc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const V_=37297;let H_=0;function k_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Hc=new je;function G_(i){dt._getMatrix(Hc,dt.workingColorSpace,i);const e=`mat3( ${Hc.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Cs:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+k_(i.getShaderSource(e),o)}else return r}function W_(i,e){const t=G_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X_(i,e){let t;switch(e){case Th:t="Linear";break;case bh:t="Reinhard";break;case Ah:t="Cineon";break;case ll:t="ACESFilmic";break;case Rh:t="AgX";break;case Ch:t="Neutral";break;case wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _s=new H;function $_(){dt.getLuminanceCoefficients(_s);const i=_s.x.toFixed(4),e=_s.y.toFixed(4),t=_s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function q_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Rr(i){return i!==""}function Gc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(i){return i.replace(K_,J_)}const Z_=new Map;function J_(i,e){let t=Ke[e];if(t===void 0){const n=Z_.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ga(t)}const Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(i){return i.replace(Q_,eg)}function eg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $c(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===al?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case lr:e="ENVMAP_TYPE_CUBE";break;case Os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function rg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Sh:e="ENVMAP_BLENDING_MIX";break;case Eh:e="ENVMAP_BLENDING_ADD";break}return e}function sg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function og(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tg(t),l=ng(t),f=ig(t),p=rg(t),_=sg(t),m=Y_(t),v=q_(s),M=r.createProgram();let g,d,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),d.length>0&&(d+=`
`)):(g=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),d=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ui?X_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,W_("linearToOutputTexel",t.outputColorSpace),$_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=ga(o),o=Gc(o,t),o=Wc(o,t),a=ga(a),a=Gc(a,t),a=Wc(a,t),o=Xc(o),a=Xc(a),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const R=P+g+o,T=P+d+a,F=Vc(r,r.VERTEX_SHADER,R),D=Vc(r,r.FRAGMENT_SHADER,T);r.attachShader(M,F),r.attachShader(M,D),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(L){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(M).trim(),X=r.getShaderInfoLog(F).trim(),K=r.getShaderInfoLog(D).trim();let ee=!0,Q=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,F,D);else{const he=kc(r,F,"vertex"),J=kc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+he+`
`+J)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(X===""||K==="")&&(Q=!1);Q&&(L.diagnostics={runnable:ee,programLog:G,vertexShader:{log:X,prefix:g},fragmentShader:{log:K,prefix:d}})}r.deleteShader(F),r.deleteShader(D),N=new Ts(r,M),b=j_(r,M)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,V_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H_++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=F,this.fragmentShader=D,this}let ag=0;class cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lg(e),t.set(e,n)),n}}class lg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function ug(i,e,t,n,r,s,o){const a=new Al,c=new cg,l=new Set,f=[],p=r.logarithmicDepthBuffer,_=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,S,L,G,X){const K=G.fog,ee=X.geometry,Q=b.isMeshStandardMaterial?G.environment:null,he=(b.isMeshStandardMaterial?t:e).get(b.envMap||Q),J=he&&he.mapping===Os?he.image.height:null,ye=v[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const Re=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ie=Re!==void 0?Re.length:0;let Ze=0;ee.morphAttributes.position!==void 0&&(Ze=1),ee.morphAttributes.normal!==void 0&&(Ze=2),ee.morphAttributes.color!==void 0&&(Ze=3);let mt,ie,me,Ce;if(ye){const pt=In[ye];mt=pt.vertexShader,ie=pt.fragmentShader}else mt=b.vertexShader,ie=b.fragmentShader,c.update(b),me=c.getVertexShaderID(b),Ce=c.getFragmentShaderID(b);const Se=i.getRenderTarget(),Ve=i.state.buffers.depth.getReversed(),ze=X.isInstancedMesh===!0,Je=X.isBatchedMesh===!0,Tt=!!b.map,et=!!b.matcap,Rt=!!he,I=!!b.aoMap,Kt=!!b.lightMap,st=!!b.bumpMap,nt=!!b.normalMap,Ue=!!b.displacementMap,Mt=!!b.emissiveMap,Le=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,W=b.clearcoat>0,se=b.dispersion>0,ce=b.iridescence>0,ne=b.sheen>0,De=b.transmission>0,ge=x&&!!b.anisotropyMap,be=W&&!!b.clearcoatMap,Qe=W&&!!b.clearcoatNormalMap,fe=W&&!!b.clearcoatRoughnessMap,Te=ce&&!!b.iridescenceMap,Ne=ce&&!!b.iridescenceThicknessMap,He=ne&&!!b.sheenColorMap,Ae=ne&&!!b.sheenRoughnessMap,$e=!!b.specularMap,Ye=!!b.specularColorMap,_t=!!b.specularIntensityMap,O=De&&!!b.transmissionMap,ve=De&&!!b.thicknessMap,q=!!b.gradientMap,re=!!b.alphaMap,ae=b.alphaTest>0,Ee=!!b.alphaHash,Be=!!b.extensions;let lt=ui;b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(lt=i.toneMapping);const Ht={shaderID:ye,shaderType:b.type,shaderName:b.name,vertexShader:mt,fragmentShader:ie,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Je,batchingColor:Je&&X._colorsTexture!==null,instancing:ze,instancingColor:ze&&X.instanceColor!==null,instancingMorph:ze&&X.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:fr,alphaToCoverage:!!b.alphaToCoverage,map:Tt,matcap:et,envMap:Rt,envMapMode:Rt&&he.mapping,envMapCubeUVHeight:J,aoMap:I,lightMap:Kt,bumpMap:st,normalMap:nt,displacementMap:_&&Ue,emissiveMap:Mt,normalMapObjectSpace:nt&&b.normalMapType===Uh,normalMapTangentSpace:nt&&b.normalMapType===Sl,metalnessMap:Le,roughnessMap:A,anisotropy:x,anisotropyMap:ge,clearcoat:W,clearcoatMap:be,clearcoatNormalMap:Qe,clearcoatRoughnessMap:fe,dispersion:se,iridescence:ce,iridescenceMap:Te,iridescenceThicknessMap:Ne,sheen:ne,sheenColorMap:He,sheenRoughnessMap:Ae,specularMap:$e,specularColorMap:Ye,specularIntensityMap:_t,transmission:De,transmissionMap:O,thicknessMap:ve,gradientMap:q,opaque:b.transparent===!1&&b.blending===rr&&b.alphaToCoverage===!1,alphaMap:re,alphaTest:ae,alphaHash:Ee,combine:b.combine,mapUv:Tt&&M(b.map.channel),aoMapUv:I&&M(b.aoMap.channel),lightMapUv:Kt&&M(b.lightMap.channel),bumpMapUv:st&&M(b.bumpMap.channel),normalMapUv:nt&&M(b.normalMap.channel),displacementMapUv:Ue&&M(b.displacementMap.channel),emissiveMapUv:Mt&&M(b.emissiveMap.channel),metalnessMapUv:Le&&M(b.metalnessMap.channel),roughnessMapUv:A&&M(b.roughnessMap.channel),anisotropyMapUv:ge&&M(b.anisotropyMap.channel),clearcoatMapUv:be&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:He&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&M(b.sheenRoughnessMap.channel),specularMapUv:$e&&M(b.specularMap.channel),specularColorMapUv:Ye&&M(b.specularColorMap.channel),specularIntensityMapUv:_t&&M(b.specularIntensityMap.channel),transmissionMapUv:O&&M(b.transmissionMap.channel),thicknessMapUv:ve&&M(b.thicknessMap.channel),alphaMapUv:re&&M(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(nt||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ee.attributes.uv&&(Tt||re),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Ve,skinning:X.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:Tt&&b.map.isVideoTexture===!0&&dt.getTransfer(b.map.colorSpace)===gt,decodeVideoTextureEmissive:Mt&&b.emissiveMap.isVideoTexture===!0&&dt.getTransfer(b.emissiveMap.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Un,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Be&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&b.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function d(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(P(S,b),R(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function P(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function R(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function T(b){const S=v[b.type];let L;if(S){const G=In[S];L=Af.clone(G.uniforms)}else L=b.uniforms;return L}function F(b,S){let L;for(let G=0,X=f.length;G<X;G++){const K=f[G];if(K.cacheKey===S){L=K,++L.usedTimes;break}}return L===void 0&&(L=new og(i,S,b,s),f.push(L)),L}function D(b){if(--b.usedTimes===0){const S=f.indexOf(b);f[S]=f[f.length-1],f.pop(),b.destroy()}}function C(b){c.remove(b)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:T,acquireProgram:F,releaseProgram:D,releaseShaderCache:C,programs:f,dispose:N}}function hg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function fg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(p,_,m,v,M,g){let d=i[e];return d===void 0?(d={id:p.id,object:p,geometry:_,material:m,groupOrder:v,renderOrder:p.renderOrder,z:M,group:g},i[e]=d):(d.id=p.id,d.object=p,d.geometry=_,d.material=m,d.groupOrder=v,d.renderOrder=p.renderOrder,d.z=M,d.group=g),e++,d}function a(p,_,m,v,M,g){const d=o(p,_,m,v,M,g);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(p,_,m,v,M,g){const d=o(p,_,m,v,M,g);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(p,_){t.length>1&&t.sort(p||fg),n.length>1&&n.sort(_||Yc),r.length>1&&r.sort(_||Yc)}function f(){for(let p=e,_=i.length;p<_;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:f,sort:l}}function dg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new qc,i.set(n,[o])):r>=s.length?(o=new qc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new rt};break;case"SpotLight":t={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _g=0;function gg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vg(i){const e=new pg,t=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const r=new H,s=new At,o=new At;function a(l){let f=0,p=0,_=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,v=0,M=0,g=0,d=0,P=0,R=0,T=0,F=0,D=0,C=0;l.sort(gg);for(let b=0,S=l.length;b<S;b++){const L=l[b],G=L.color,X=L.intensity,K=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=G.r*X,p+=G.g*X,_+=G.b*X;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(L.sh.coefficients[Q],X);C++}else if(L.isDirectionalLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const he=L.shadow,J=t.get(L);J.shadowIntensity=he.intensity,J.shadowBias=he.bias,J.shadowNormalBias=he.normalBias,J.shadowRadius=he.radius,J.shadowMapSize=he.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=L.shadow.matrix,P++}n.directional[m]=Q,m++}else if(L.isSpotLight){const Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(G).multiplyScalar(X),Q.distance=K,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,n.spot[M]=Q;const he=L.shadow;if(L.map&&(n.spotLightMap[F]=L.map,F++,he.updateMatrices(L),L.castShadow&&D++),n.spotLightMatrix[M]=he.matrix,L.castShadow){const J=t.get(L);J.shadowIntensity=he.intensity,J.shadowBias=he.bias,J.shadowNormalBias=he.normalBias,J.shadowRadius=he.radius,J.shadowMapSize=he.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=ee,T++}M++}else if(L.isRectAreaLight){const Q=e.get(L);Q.color.copy(G).multiplyScalar(X),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=Q,g++}else if(L.isPointLight){const Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){const he=L.shadow,J=t.get(L);J.shadowIntensity=he.intensity,J.shadowBias=he.bias,J.shadowNormalBias=he.normalBias,J.shadowRadius=he.radius,J.shadowMapSize=he.mapSize,J.shadowCameraNear=he.camera.near,J.shadowCameraFar=he.camera.far,n.pointShadow[v]=J,n.pointShadowMap[v]=ee,n.pointShadowMatrix[v]=L.shadow.matrix,R++}n.point[v]=Q,v++}else if(L.isHemisphereLight){const Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(X),Q.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[d]=Q,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=_;const N=n.hash;(N.directionalLength!==m||N.pointLength!==v||N.spotLength!==M||N.rectAreaLength!==g||N.hemiLength!==d||N.numDirectionalShadows!==P||N.numPointShadows!==R||N.numSpotShadows!==T||N.numSpotMaps!==F||N.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=g,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=T+F-D,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,N.directionalLength=m,N.pointLength=v,N.spotLength=M,N.rectAreaLength=g,N.hemiLength=d,N.numDirectionalShadows=P,N.numPointShadows=R,N.numSpotShadows=T,N.numSpotMaps=F,N.numLightProbes=C,n.version=_g++)}function c(l,f){let p=0,_=0,m=0,v=0,M=0;const g=f.matrixWorldInverse;for(let d=0,P=l.length;d<P;d++){const R=l[d];if(R.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),p++}else if(R.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(g),m++}else if(R.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(g),o.identity(),s.copy(R.matrixWorld),s.premultiply(g),o.extractRotation(s),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){const T=n.point[_];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(g),_++}else if(R.isHemisphereLight){const T=n.hemi[M];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(g),M++}}}return{setup:a,setupView:c,state:n}}function jc(i){const e=new vg(i),t=[],n=[];function r(f){l.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function xg(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jc(i),e.set(r,[a])):s>=o.length?(a=new jc(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
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
}`;function Sg(i,e,t){let n=new wa;const r=new qe,s=new qe,o=new Dt,a=new Ff({depthPacking:Ih}),c=new Of,l={},f=t.maxTextureSize,p={[hi]:on,[on]:hi,[Un]:Un},_=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Mg,fragmentShader:yg}),m=_.clone();m.defines.HORIZONTAL_PASS=1;const v=new Pn;v.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Rn(v,_),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let d=this.type;this.render=function(D,C,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending(li),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=d!==Wn&&this.type===Wn,K=d===Wn&&this.type!==Wn;for(let ee=0,Q=D.length;ee<Q;ee++){const he=D[ee],J=he.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const ye=J.getFrameExtents();if(r.multiply(ye),s.copy(J.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ye.x),r.x=s.x*ye.x,J.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ye.y),r.y=s.y*ye.y,J.mapSize.y=s.y)),J.map===null||X===!0||K===!0){const Ie=this.type!==Wn?{minFilter:gn,magFilter:gn}:{};J.map!==null&&J.map.dispose(),J.map=new wi(r.x,r.y,Ie),J.map.texture.name=he.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const Re=J.getViewportCount();for(let Ie=0;Ie<Re;Ie++){const Ze=J.getViewport(Ie);o.set(s.x*Ze.x,s.y*Ze.y,s.x*Ze.z,s.y*Ze.w),G.viewport(o),J.updateMatrices(he,Ie),n=J.getFrustum(),T(C,N,J.camera,he,this.type)}J.isPointLightShadow!==!0&&this.type===Wn&&P(J,N),J.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(b,S,L)};function P(D,C){const N=e.update(M);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new wi(r.x,r.y)),_.uniforms.shadow_pass.value=D.map.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(C,null,N,_,M,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(C,null,N,m,M,null)}function R(D,C,N,b){let S=null;const L=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)S=L;else if(S=N.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=S.uuid,X=C.uuid;let K=l[G];K===void 0&&(K={},l[G]=K);let ee=K[X];ee===void 0&&(ee=S.clone(),K[X]=ee,C.addEventListener("dispose",F)),S=ee}if(S.visible=C.visible,S.wireframe=C.wireframe,b===Wn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:p[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=i.properties.get(S);G.light=N}return S}function T(D,C,N,b,S){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&S===Wn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const X=e.update(D),K=D.material;if(Array.isArray(K)){const ee=X.groups;for(let Q=0,he=ee.length;Q<he;Q++){const J=ee[Q],ye=K[J.materialIndex];if(ye&&ye.visible){const Re=R(D,ye,b,S);D.onBeforeShadow(i,D,C,N,X,Re,J),i.renderBufferDirect(N,null,X,Re,D,J),D.onAfterShadow(i,D,C,N,X,Re,J)}}}else if(K.visible){const ee=R(D,K,b,S);D.onBeforeShadow(i,D,C,N,X,ee,null),i.renderBufferDirect(N,null,X,ee,D,null),D.onAfterShadow(i,D,C,N,X,ee,null)}}const G=D.children;for(let X=0,K=G.length;X<K;X++)T(G[X],C,N,b,S)}function F(D){D.target.removeEventListener("dispose",F);for(const N in l){const b=l[N],S=D.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Eg={[No]:Fo,[Oo]:Vo,[Bo]:Ho,[ar]:zo,[Fo]:No,[Vo]:Oo,[Ho]:Bo,[zo]:ar};function Tg(i,e){function t(){let O=!1;const ve=new Dt;let q=null;const re=new Dt(0,0,0,0);return{setMask:function(ae){q!==ae&&!O&&(i.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){O=ae},setClear:function(ae,Ee,Be,lt,Ht){Ht===!0&&(ae*=lt,Ee*=lt,Be*=lt),ve.set(ae,Ee,Be,lt),re.equals(ve)===!1&&(i.clearColor(ae,Ee,Be,lt),re.copy(ve))},reset:function(){O=!1,q=null,re.set(-1,0,0,0)}}}function n(){let O=!1,ve=!1,q=null,re=null,ae=null;return{setReversed:function(Ee){if(ve!==Ee){const Be=e.get("EXT_clip_control");ve?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const lt=ae;ae=null,this.setClear(lt)}ve=Ee},getReversed:function(){return ve},setTest:function(Ee){Ee?Se(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(Ee){q!==Ee&&!O&&(i.depthMask(Ee),q=Ee)},setFunc:function(Ee){if(ve&&(Ee=Eg[Ee]),re!==Ee){switch(Ee){case No:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case Bo:i.depthFunc(i.EQUAL);break;case zo:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){ae!==Ee&&(ve&&(Ee=1-Ee),i.clearDepth(Ee),ae=Ee)},reset:function(){O=!1,q=null,re=null,ae=null,ve=!1}}}function r(){let O=!1,ve=null,q=null,re=null,ae=null,Ee=null,Be=null,lt=null,Ht=null;return{setTest:function(pt){O||(pt?Se(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(pt){ve!==pt&&!O&&(i.stencilMask(pt),ve=pt)},setFunc:function(pt,Zt,cn){(q!==pt||re!==Zt||ae!==cn)&&(i.stencilFunc(pt,Zt,cn),q=pt,re=Zt,ae=cn)},setOp:function(pt,Zt,cn){(Ee!==pt||Be!==Zt||lt!==cn)&&(i.stencilOp(pt,Zt,cn),Ee=pt,Be=Zt,lt=cn)},setLocked:function(pt){O=pt},setClear:function(pt){Ht!==pt&&(i.clearStencil(pt),Ht=pt)},reset:function(){O=!1,ve=null,q=null,re=null,ae=null,Ee=null,Be=null,lt=null,Ht=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let f={},p={},_=new WeakMap,m=[],v=null,M=!1,g=null,d=null,P=null,R=null,T=null,F=null,D=null,C=new rt(0,0,0),N=0,b=!1,S=null,L=null,G=null,X=null,K=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,he=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(J)[1]),Q=he>=1):J.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Q=he>=2);let ye=null,Re={};const Ie=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),mt=new Dt().fromArray(Ie),ie=new Dt().fromArray(Ze);function me(O,ve,q,re){const ae=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(O,Ee),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<q;Be++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ve+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return Ee}const Ce={};Ce[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(i.DEPTH_TEST),o.setFunc(ar),st(!1),nt(Ya),Se(i.CULL_FACE),I(li);function Se(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function Ve(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function ze(O,ve){return p[O]!==ve?(i.bindFramebuffer(O,ve),p[O]=ve,O===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ve),O===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Je(O,ve){let q=m,re=!1;if(O){q=_.get(ve),q===void 0&&(q=[],_.set(ve,q));const ae=O.textures;if(q.length!==ae.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Be=ae.length;Ee<Be;Ee++)q[Ee]=i.COLOR_ATTACHMENT0+Ee;q.length=ae.length,re=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,re=!0);re&&i.drawBuffers(q)}function Tt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const et={[Ti]:i.FUNC_ADD,[sh]:i.FUNC_SUBTRACT,[oh]:i.FUNC_REVERSE_SUBTRACT};et[ah]=i.MIN,et[ch]=i.MAX;const Rt={[lh]:i.ZERO,[uh]:i.ONE,[hh]:i.SRC_COLOR,[Io]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[mh]:i.DST_COLOR,[dh]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[Uo]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[ph]:i.ONE_MINUS_DST_ALPHA,[vh]:i.CONSTANT_COLOR,[xh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function I(O,ve,q,re,ae,Ee,Be,lt,Ht,pt){if(O===li){M===!0&&(Ve(i.BLEND),M=!1);return}if(M===!1&&(Se(i.BLEND),M=!0),O!==rh){if(O!==g||pt!==b){if((d!==Ti||T!==Ti)&&(i.blendEquation(i.FUNC_ADD),d=Ti,T=Ti),pt)switch(O){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ka:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}P=null,R=null,F=null,D=null,C.set(0,0,0),N=0,g=O,b=pt}return}ae=ae||ve,Ee=Ee||q,Be=Be||re,(ve!==d||ae!==T)&&(i.blendEquationSeparate(et[ve],et[ae]),d=ve,T=ae),(q!==P||re!==R||Ee!==F||Be!==D)&&(i.blendFuncSeparate(Rt[q],Rt[re],Rt[Ee],Rt[Be]),P=q,R=re,F=Ee,D=Be),(lt.equals(C)===!1||Ht!==N)&&(i.blendColor(lt.r,lt.g,lt.b,Ht),C.copy(lt),N=Ht),g=O,b=!1}function Kt(O,ve){O.side===Un?Ve(i.CULL_FACE):Se(i.CULL_FACE);let q=O.side===on;ve&&(q=!q),st(q),O.blending===rr&&O.transparent===!1?I(li):I(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const re=O.stencilWrite;a.setTest(re),re&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Mt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function nt(O){O!==nh?(Se(i.CULL_FACE),O!==L&&(O===Ya?i.cullFace(i.BACK):O===ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),L=O}function Ue(O){O!==G&&(Q&&i.lineWidth(O),G=O)}function Mt(O,ve,q){O?(Se(i.POLYGON_OFFSET_FILL),(X!==ve||K!==q)&&(i.polygonOffset(ve,q),X=ve,K=q)):Ve(i.POLYGON_OFFSET_FILL)}function Le(O){O?Se(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+ee-1),ye!==O&&(i.activeTexture(O),ye=O)}function x(O,ve,q){q===void 0&&(ye===null?q=i.TEXTURE0+ee-1:q=ye);let re=Re[q];re===void 0&&(re={type:void 0,texture:void 0},Re[q]=re),(re.type!==O||re.texture!==ve)&&(ye!==q&&(i.activeTexture(q),ye=q),i.bindTexture(O,ve||Ce[O]),re.type=O,re.texture=ve)}function W(){const O=Re[ye];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(O){mt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),mt.copy(O))}function Ae(O){ie.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function $e(O,ve){let q=l.get(ve);q===void 0&&(q=new WeakMap,l.set(ve,q));let re=q.get(O);re===void 0&&(re=i.getUniformBlockIndex(ve,O.name),q.set(O,re))}function Ye(O,ve){const re=l.get(ve).get(O);c.get(ve)!==re&&(i.uniformBlockBinding(ve,re,O.__bindingPointIndex),c.set(ve,re))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ye=null,Re={},p={},_=new WeakMap,m=[],v=null,M=!1,g=null,d=null,P=null,R=null,T=null,F=null,D=null,C=new rt(0,0,0),N=0,b=!1,S=null,L=null,G=null,X=null,K=null,mt.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Se,disable:Ve,bindFramebuffer:ze,drawBuffers:Je,useProgram:Tt,setBlending:I,setMaterial:Kt,setFlipSided:st,setCullFace:nt,setLineWidth:Ue,setPolygonOffset:Mt,setScissorTest:Le,activeTexture:A,bindTexture:x,unbindTexture:W,compressedTexImage2D:se,compressedTexImage3D:ce,texImage2D:Te,texImage3D:Ne,updateUBOMapping:$e,uniformBlockBinding:Ye,texStorage2D:Qe,texStorage3D:fe,texSubImage2D:ne,texSubImage3D:De,compressedTexSubImage2D:ge,compressedTexSubImage3D:be,scissor:He,viewport:Ae,reset:_t}}function bg(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,f=new WeakMap;let p;const _=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return m?new OffscreenCanvas(A,x):Ls("canvas")}function M(A,x,W){let se=1;const ce=Le(A);if((ce.width>W||ce.height>W)&&(se=W/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ne=Math.floor(se*ce.width),De=Math.floor(se*ce.height);p===void 0&&(p=v(ne,De));const ge=x?v(ne,De):p;return ge.width=ne,ge.height=De,ge.getContext("2d").drawImage(A,0,0,ne,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ne+"x"+De+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),A;return A}function g(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function P(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(A,x,W,se,ce=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=x;if(x===i.RED&&(W===i.FLOAT&&(ne=i.R32F),W===i.HALF_FLOAT&&(ne=i.R16F),W===i.UNSIGNED_BYTE&&(ne=i.R8)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.R8UI),W===i.UNSIGNED_SHORT&&(ne=i.R16UI),W===i.UNSIGNED_INT&&(ne=i.R32UI),W===i.BYTE&&(ne=i.R8I),W===i.SHORT&&(ne=i.R16I),W===i.INT&&(ne=i.R32I)),x===i.RG&&(W===i.FLOAT&&(ne=i.RG32F),W===i.HALF_FLOAT&&(ne=i.RG16F),W===i.UNSIGNED_BYTE&&(ne=i.RG8)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RG8UI),W===i.UNSIGNED_SHORT&&(ne=i.RG16UI),W===i.UNSIGNED_INT&&(ne=i.RG32UI),W===i.BYTE&&(ne=i.RG8I),W===i.SHORT&&(ne=i.RG16I),W===i.INT&&(ne=i.RG32I)),x===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),W===i.UNSIGNED_INT&&(ne=i.RGB32UI),W===i.BYTE&&(ne=i.RGB8I),W===i.SHORT&&(ne=i.RGB16I),W===i.INT&&(ne=i.RGB32I)),x===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),W===i.UNSIGNED_INT&&(ne=i.RGBA32UI),W===i.BYTE&&(ne=i.RGBA8I),W===i.SHORT&&(ne=i.RGBA16I),W===i.INT&&(ne=i.RGBA32I)),x===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),x===i.RGBA){const De=ce?Cs:dt.getTransfer(se);W===i.FLOAT&&(ne=i.RGBA32F),W===i.HALF_FLOAT&&(ne=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ne=De===gt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(A,x){let W;return A?x===null||x===Ai||x===ur?W=i.DEPTH24_STENCIL8:x===$n?W=i.DEPTH32F_STENCIL8:x===Ur&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ai||x===ur?W=i.DEPTH_COMPONENT24:x===$n?W=i.DEPTH_COMPONENT32F:x===Ur&&(W=i.DEPTH_COMPONENT16),W}function F(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==wn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function D(A){const x=A.target;x.removeEventListener("dispose",D),N(x),x.isVideoTexture&&f.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),S(x)}function N(A){const x=n.get(A);if(x.__webglInit===void 0)return;const W=A.source,se=_.get(W);if(se){const ce=se[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&b(A),Object.keys(se).length===0&&_.delete(W)}n.remove(A)}function b(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const W=A.source,se=_.get(W);delete se[x.__cacheKey],o.memory.textures--}function S(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(x.__webglFramebuffer[se]))for(let ce=0;ce<x.__webglFramebuffer[se].length;ce++)i.deleteFramebuffer(x.__webglFramebuffer[se][ce]);else i.deleteFramebuffer(x.__webglFramebuffer[se]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[se])}else{if(Array.isArray(x.__webglFramebuffer))for(let se=0;se<x.__webglFramebuffer.length;se++)i.deleteFramebuffer(x.__webglFramebuffer[se]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let se=0;se<x.__webglColorRenderbuffer.length;se++)x.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[se]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=A.textures;for(let se=0,ce=W.length;se<ce;se++){const ne=n.get(W[se]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(W[se])}n.remove(A)}let L=0;function G(){L=0}function X(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function K(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ee(A,x){const W=n.get(A);if(A.isVideoTexture&&Ue(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const se=A.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(W,A,x);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function Q(A,x){const W=n.get(A);if(A.version>0&&W.__version!==A.version){ie(W,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function he(A,x){const W=n.get(A);if(A.version>0&&W.__version!==A.version){ie(W,A,x);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function J(A,x){const W=n.get(A);if(A.version>0&&W.__version!==A.version){me(W,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}const ye={[ws]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Rs]:i.MIRRORED_REPEAT},Re={[gn]:i.NEAREST,[hl]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[vs]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Ie={[Nh]:i.NEVER,[Hh]:i.ALWAYS,[Fh]:i.LESS,[El]:i.LEQUAL,[Oh]:i.EQUAL,[Vh]:i.GEQUAL,[Bh]:i.GREATER,[zh]:i.NOTEQUAL};function Ze(A,x){if(x.type===$n&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===wn||x.magFilter===vs||x.magFilter===Ar||x.magFilter===ci||x.minFilter===wn||x.minFilter===vs||x.minFilter===Ar||x.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ye[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ye[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ye[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Re[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Re[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===gn||x.minFilter!==Ar&&x.minFilter!==ci||x.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function mt(A,x){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",D));const se=x.source;let ce=_.get(se);ce===void 0&&(ce={},_.set(se,ce));const ne=K(x);if(ne!==A.__cacheKey){ce[ne]===void 0&&(ce[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ce[ne].usedTimes++;const De=ce[A.__cacheKey];De!==void 0&&(ce[A.__cacheKey].usedTimes--,De.usedTimes===0&&b(x)),A.__cacheKey=ne,A.__webglTexture=ce[ne].texture}return W}function ie(A,x,W){let se=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=i.TEXTURE_3D);const ce=mt(A,x),ne=x.source;t.bindTexture(se,A.__webglTexture,i.TEXTURE0+W);const De=n.get(ne);if(ne.version!==De.__version||ce===!0){t.activeTexture(i.TEXTURE0+W);const ge=dt.getPrimaries(dt.workingColorSpace),be=x.colorSpace===Xn?null:dt.getPrimaries(x.colorSpace),Qe=x.colorSpace===Xn||ge===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let fe=M(x.image,!1,r.maxTextureSize);fe=Mt(x,fe);const Te=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type);let He=R(x.internalFormat,Te,Ne,x.colorSpace,x.isVideoTexture);Ze(se,x);let Ae;const $e=x.mipmaps,Ye=x.isVideoTexture!==!0,_t=De.__version===void 0||ce===!0,O=ne.dataReady,ve=F(x,fe);if(x.isDepthTexture)He=T(x.format===hr,x.type),_t&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,He,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,He,fe.width,fe.height,0,Te,Ne,null));else if(x.isDataTexture)if($e.length>0){Ye&&_t&&t.texStorage2D(i.TEXTURE_2D,ve,He,$e[0].width,$e[0].height);for(let q=0,re=$e.length;q<re;q++)Ae=$e[q],Ye?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Te,Ne,Ae.data):t.texImage2D(i.TEXTURE_2D,q,He,Ae.width,Ae.height,0,Te,Ne,Ae.data);x.generateMipmaps=!1}else Ye?(_t&&t.texStorage2D(i.TEXTURE_2D,ve,He,fe.width,fe.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Te,Ne,fe.data)):t.texImage2D(i.TEXTURE_2D,0,He,fe.width,fe.height,0,Te,Ne,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,He,$e[0].width,$e[0].height,fe.depth);for(let q=0,re=$e.length;q<re;q++)if(Ae=$e[q],x.format!==_n)if(Te!==null)if(Ye){if(O)if(x.layerUpdates.size>0){const ae=bc(Ae.width,Ae.height,x.format,x.type);for(const Ee of x.layerUpdates){const Be=Ae.data.subarray(Ee*ae/Ae.data.BYTES_PER_ELEMENT,(Ee+1)*ae/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Ee,Ae.width,Ae.height,1,Te,Be)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,fe.depth,Te,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,He,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,fe.depth,Te,Ne,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,He,Ae.width,Ae.height,fe.depth,0,Te,Ne,Ae.data)}else{Ye&&_t&&t.texStorage2D(i.TEXTURE_2D,ve,He,$e[0].width,$e[0].height);for(let q=0,re=$e.length;q<re;q++)Ae=$e[q],x.format!==_n?Te!==null?Ye?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Te,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,q,He,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Te,Ne,Ae.data):t.texImage2D(i.TEXTURE_2D,q,He,Ae.width,Ae.height,0,Te,Ne,Ae.data)}else if(x.isDataArrayTexture)if(Ye){if(_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,He,fe.width,fe.height,fe.depth),O)if(x.layerUpdates.size>0){const q=bc(fe.width,fe.height,x.format,x.type);for(const re of x.layerUpdates){const ae=fe.data.subarray(re*q/fe.data.BYTES_PER_ELEMENT,(re+1)*q/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,fe.width,fe.height,1,Te,Ne,ae)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Te,Ne,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,fe.width,fe.height,fe.depth,0,Te,Ne,fe.data);else if(x.isData3DTexture)Ye?(_t&&t.texStorage3D(i.TEXTURE_3D,ve,He,fe.width,fe.height,fe.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Te,Ne,fe.data)):t.texImage3D(i.TEXTURE_3D,0,He,fe.width,fe.height,fe.depth,0,Te,Ne,fe.data);else if(x.isFramebufferTexture){if(_t)if(Ye)t.texStorage2D(i.TEXTURE_2D,ve,He,fe.width,fe.height);else{let q=fe.width,re=fe.height;for(let ae=0;ae<ve;ae++)t.texImage2D(i.TEXTURE_2D,ae,He,q,re,0,Te,Ne,null),q>>=1,re>>=1}}else if($e.length>0){if(Ye&&_t){const q=Le($e[0]);t.texStorage2D(i.TEXTURE_2D,ve,He,q.width,q.height)}for(let q=0,re=$e.length;q<re;q++)Ae=$e[q],Ye?O&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Te,Ne,Ae):t.texImage2D(i.TEXTURE_2D,q,He,Te,Ne,Ae);x.generateMipmaps=!1}else if(Ye){if(_t){const q=Le(fe);t.texStorage2D(i.TEXTURE_2D,ve,He,q.width,q.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ne,fe)}else t.texImage2D(i.TEXTURE_2D,0,He,Te,Ne,fe);g(x)&&d(se),De.__version=ne.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function me(A,x,W){if(x.image.length!==6)return;const se=mt(A,x),ce=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);const ne=n.get(ce);if(ce.version!==ne.__version||se===!0){t.activeTexture(i.TEXTURE0+W);const De=dt.getPrimaries(dt.workingColorSpace),ge=x.colorSpace===Xn?null:dt.getPrimaries(x.colorSpace),be=x.colorSpace===Xn||De===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Qe=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let re=0;re<6;re++)!Qe&&!fe?Te[re]=M(x.image[re],!0,r.maxCubemapSize):Te[re]=fe?x.image[re].image:x.image[re],Te[re]=Mt(x,Te[re]);const Ne=Te[0],He=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type),$e=R(x.internalFormat,He,Ae,x.colorSpace),Ye=x.isVideoTexture!==!0,_t=ne.__version===void 0||se===!0,O=ce.dataReady;let ve=F(x,Ne);Ze(i.TEXTURE_CUBE_MAP,x);let q;if(Qe){Ye&&_t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,$e,Ne.width,Ne.height);for(let re=0;re<6;re++){q=Te[re].mipmaps;for(let ae=0;ae<q.length;ae++){const Ee=q[ae];x.format!==_n?He!==null?Ye?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae,0,0,Ee.width,Ee.height,He,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae,$e,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae,0,0,Ee.width,Ee.height,He,Ae,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae,$e,Ee.width,Ee.height,0,He,Ae,Ee.data)}}}else{if(q=x.mipmaps,Ye&&_t){q.length>0&&ve++;const re=Le(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,$e,re.width,re.height)}for(let re=0;re<6;re++)if(fe){Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Te[re].width,Te[re].height,He,Ae,Te[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,Te[re].width,Te[re].height,0,He,Ae,Te[re].data);for(let ae=0;ae<q.length;ae++){const Be=q[ae].image[re].image;Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae+1,0,0,Be.width,Be.height,He,Ae,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae+1,$e,Be.width,Be.height,0,He,Ae,Be.data)}}else{Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,He,Ae,Te[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,$e,He,Ae,Te[re]);for(let ae=0;ae<q.length;ae++){const Ee=q[ae];Ye?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae+1,0,0,He,Ae,Ee.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae+1,$e,He,Ae,Ee.image[re])}}}g(x)&&d(i.TEXTURE_CUBE_MAP),ne.__version=ce.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ce(A,x,W,se,ce,ne){const De=s.convert(W.format,W.colorSpace),ge=s.convert(W.type),be=R(W.internalFormat,De,ge,W.colorSpace),Qe=n.get(x),fe=n.get(W);if(fe.__renderTarget=x,!Qe.__hasExternalTextures){const Te=Math.max(1,x.width>>ne),Ne=Math.max(1,x.height>>ne);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ne,be,Te,Ne,x.depth,0,De,ge,null):t.texImage2D(ce,ne,be,Te,Ne,0,De,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),nt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ce,fe.__webglTexture,0,st(x)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ce,fe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(A,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const se=x.depthTexture,ce=se&&se.isDepthTexture?se.type:null,ne=T(x.stencilBuffer,ce),De=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=st(x);nt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ne,x.width,x.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,A)}else{const se=x.textures;for(let ce=0;ce<se.length;ce++){const ne=se[ce],De=s.convert(ne.format,ne.colorSpace),ge=s.convert(ne.type),be=R(ne.internalFormat,De,ge,ne.colorSpace),Qe=st(x);W&&nt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,be,x.width,x.height):nt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,be,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,be,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(x.depthTexture);se.__renderTarget=x,(!se.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const ce=se.__webglTexture,ne=st(x);if(x.depthTexture.format===sr)nt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(x.depthTexture.format===hr)nt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function ze(A){const x=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const se=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),se){const ce=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),x.__depthDisposeCallback=ce}x.__boundDepthTexture=se}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ve(x.__webglFramebuffer,A)}else if(W){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]===void 0)x.__webglDepthbuffer[se]=i.createRenderbuffer(),Se(x.__webglDepthbuffer[se],A,!1);else{const ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Se(x.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(A,x,W){const se=n.get(A);x!==void 0&&Ce(se.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ze(A)}function Tt(A){const x=A.texture,W=n.get(A),se=n.get(x);A.addEventListener("dispose",C);const ce=A.textures,ne=A.isWebGLCubeRenderTarget===!0,De=ce.length>1;if(De||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=x.version,o.memory.textures++),ne){W.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[ge]=[];for(let be=0;be<x.mipmaps.length;be++)W.__webglFramebuffer[ge][be]=i.createFramebuffer()}else W.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)W.__webglFramebuffer[ge]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(De)for(let ge=0,be=ce.length;ge<be;ge++){const Qe=n.get(ce[ge]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&nt(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ge=0;ge<ce.length;ge++){const be=ce[ge];W.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ge]);const Qe=s.convert(be.format,be.colorSpace),fe=s.convert(be.type),Te=R(be.internalFormat,Qe,fe,be.colorSpace,A.isXRRenderTarget===!0),Ne=st(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Te,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,W.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)Ce(W.__webglFramebuffer[ge][be],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,be);else Ce(W.__webglFramebuffer[ge],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(x)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ge=0,be=ce.length;ge<be;ge++){const Qe=ce[ge],fe=n.get(Qe);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),Ze(i.TEXTURE_2D,Qe),Ce(W.__webglFramebuffer,A,Qe,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),g(Qe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),Ze(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let be=0;be<x.mipmaps.length;be++)Ce(W.__webglFramebuffer[be],A,x,i.COLOR_ATTACHMENT0,ge,be);else Ce(W.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,ge,0);g(x)&&d(ge),t.unbindTexture()}A.depthBuffer&&ze(A)}function et(A){const x=A.textures;for(let W=0,se=x.length;W<se;W++){const ce=x[W];if(g(ce)){const ne=P(A),De=n.get(ce).__webglTexture;t.bindTexture(ne,De),d(ne),t.unbindTexture()}}}const Rt=[],I=[];function Kt(A){if(A.samples>0){if(nt(A)===!1){const x=A.textures,W=A.width,se=A.height;let ce=i.COLOR_BUFFER_BIT;const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(A),ge=x.length>1;if(ge)for(let be=0;be<x.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let be=0;be<x.length;be++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[be]);const Qe=n.get(x[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,W,se,0,0,W,se,ce,i.NEAREST),c===!0&&(Rt.length=0,I.length=0,Rt.push(i.COLOR_ATTACHMENT0+be),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Rt.push(ne),I.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let be=0;be<x.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,De.__webglColorRenderbuffer[be]);const Qe=n.get(x[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function st(A){return Math.min(r.maxSamples,A.samples)}function nt(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ue(A){const x=o.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function Mt(A,x){const W=A.colorSpace,se=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==fr&&W!==Xn&&(dt.getTransfer(W)===gt?(se!==_n||ce!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.setTexture2D=ee,this.setTexture2DArray=Q,this.setTexture3D=he,this.setTextureCube=J,this.rebindTextures=Je,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=nt}function Ag(i,e){function t(n,r=Xn){let s;const o=dt.getTransfer(r);if(n===jn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return i.BYTE;if(n===dl)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===va)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===zr)return i.HALF_FLOAT;if(n===ml)return i.ALPHA;if(n===_l)return i.RGB;if(n===_n)return i.RGBA;if(n===gl)return i.LUMINANCE;if(n===vl)return i.LUMINANCE_ALPHA;if(n===sr)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===Ml)return i.RG;if(n===Sa)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===xs||n===Ms||n===ys||n===Ss)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===$o||n===Yo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===jo||n===Ko)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qo||n===jo)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ko)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zo||n===Jo||n===Qo||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===oa||n===aa||n===ca||n===la||n===ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Zo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ea)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ta)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ca)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ua)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===ha||n===fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Es)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===da||n===pa||n===ma)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Es)return s.COMPRESSED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const wg={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,n),d=this._getHandJoint(l,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],_=f.position.distanceTo(p.position),m=.02,v=.005;l.inputState.pinching&&_>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&_<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dg extends Pi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,f=null,p=null,_=null,m=null,v=null;const M=new Pg,g=t.getContextAttributes();let d=null,P=null;const R=[],T=[],F=new qe;let D=null;const C=new mn;C.viewport=new Dt;const N=new mn;N.viewport=new Dt;const b=[C,N],S=new Hf;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=R[ie];return me===void 0&&(me=new Ro,R[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=R[ie];return me===void 0&&(me=new Ro,R[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=R[ie];return me===void 0&&(me=new Ro,R[ie]=me),me.getHandSpace()};function X(ie){const me=T.indexOf(ie.inputSource);if(me===-1)return;const Ce=R[me];Ce!==void 0&&(Ce.update(ie.inputSource,ie.frame,l||o),Ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function K(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",ee);for(let ie=0;ie<R.length;ie++){const me=T[ie];me!==null&&(T[ie]=null,R[ie].disconnect(me))}L=null,G=null,M.reset(),e.setRenderTarget(d),m=null,_=null,p=null,r=null,P=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return _!==null?_:m},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",K),r.addEventListener("inputsourceschange",ee),g.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(F),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let Ce=null,Se=null,Ve=null;g.depth&&(Ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=g.stencil?hr:sr,Se=g.stencil?ur:Ai);const ze={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:s};p=new XRWebGLBinding(r,t),_=p.createProjectionLayer(ze),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new wi(_.textureWidth,_.textureHeight,{format:_n,type:jn,depthTexture:new Nl(_.textureWidth,_.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),P=new wi(m.framebufferWidth,m.framebufferHeight,{format:_n,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}P.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),mt.setContext(r),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ee(ie){for(let me=0;me<ie.removed.length;me++){const Ce=ie.removed[me],Se=T.indexOf(Ce);Se>=0&&(T[Se]=null,R[Se].disconnect(Ce))}for(let me=0;me<ie.added.length;me++){const Ce=ie.added[me];let Se=T.indexOf(Ce);if(Se===-1){for(let ze=0;ze<R.length;ze++)if(ze>=T.length){T.push(Ce),Se=ze;break}else if(T[ze]===null){T[ze]=Ce,Se=ze;break}if(Se===-1)break}const Ve=R[Se];Ve&&Ve.connect(Ce)}}const Q=new H,he=new H;function J(ie,me,Ce){Q.setFromMatrixPosition(me.matrixWorld),he.setFromMatrixPosition(Ce.matrixWorld);const Se=Q.distanceTo(he),Ve=me.projectionMatrix.elements,ze=Ce.projectionMatrix.elements,Je=Ve[14]/(Ve[10]-1),Tt=Ve[14]/(Ve[10]+1),et=(Ve[9]+1)/Ve[5],Rt=(Ve[9]-1)/Ve[5],I=(Ve[8]-1)/Ve[0],Kt=(ze[8]+1)/ze[0],st=Je*I,nt=Je*Kt,Ue=Se/(-I+Kt),Mt=Ue*-I;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Mt),ie.translateZ(Ue),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ve[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Le=Je+Ue,A=Tt+Ue,x=st-Mt,W=nt+(Se-Mt),se=et*Tt/A*Le,ce=Rt*Tt/A*Le;ie.projectionMatrix.makePerspective(x,W,se,ce,Le,A),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ye(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let me=ie.near,Ce=ie.far;M.texture!==null&&(M.depthNear>0&&(me=M.depthNear),M.depthFar>0&&(Ce=M.depthFar)),S.near=N.near=C.near=me,S.far=N.far=C.far=Ce,(L!==S.near||G!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,G=S.far),C.layers.mask=ie.layers.mask|2,N.layers.mask=ie.layers.mask|4,S.layers.mask=C.layers.mask|N.layers.mask;const Se=ie.parent,Ve=S.cameras;ye(S,Se);for(let ze=0;ze<Ve.length;ze++)ye(Ve[ze],Se);Ve.length===2?J(S,C,N):S.projectionMatrix.copy(C.projectionMatrix),Re(ie,S,Se)};function Re(ie,me,Ce){Ce===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(Ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Nr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(_===null&&m===null))return c},this.setFoveation=function(ie){c=ie,_!==null&&(_.fixedFoveation=ie),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let Ie=null;function Ze(ie,me){if(f=me.getViewerPose(l||o),v=me,f!==null){const Ce=f.views;m!==null&&(e.setRenderTargetFramebuffer(P,m.framebuffer),e.setRenderTarget(P));let Se=!1;Ce.length!==S.cameras.length&&(S.cameras.length=0,Se=!0);for(let ze=0;ze<Ce.length;ze++){const Je=Ce[ze];let Tt=null;if(m!==null)Tt=m.getViewport(Je);else{const Rt=p.getViewSubImage(_,Je);Tt=Rt.viewport,ze===0&&(e.setRenderTargetTextures(P,Rt.colorTexture,_.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(P))}let et=b[ze];et===void 0&&(et=new mn,et.layers.enable(ze),et.viewport=new Dt,b[ze]=et),et.matrix.fromArray(Je.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Je.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),ze===0&&(S.matrix.copy(et.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Se===!0&&S.cameras.push(et)}const Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")){const ze=p.getDepthInformation(Ce[0]);ze&&ze.isValid&&ze.texture&&M.init(e,ze,r.renderState)}}for(let Ce=0;Ce<R.length;Ce++){const Se=T[Ce],Ve=R[Ce];Se!==null&&Ve!==void 0&&Ve.update(Se,me,l||o)}Ie&&Ie(ie,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),v=null}const mt=new Vl;mt.setAnimationLoop(Ze),this.setAnimationLoop=function(ie){Ie=ie},this.dispose=function(){}}}const Si=new Nn,Lg=new At;function Ig(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Dl(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,P,R,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d)):d.isMeshStandardMaterial?(s(g,d),_(g,d),d.isMeshPhysicalMaterial&&m(g,d,T)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,P,R):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===on&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===on&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const P=e.get(d),R=P.envMap,T=P.envMapRotation;R&&(g.envMap.value=R,Si.copy(T),Si.x*=-1,Si.y*=-1,Si.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),g.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(Si)),g.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,P,R){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*P,g.scale.value=R*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function _(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,P){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=P.texture,g.transmissionSamplerSize.value.set(P.width,P.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){const P=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(P.matrixWorld),g.nearDistance.value=P.shadow.camera.near,g.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ug(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(P,R){const T=R.program;n.uniformBlockBinding(P,T)}function l(P,R){let T=r[P.id];T===void 0&&(v(P),T=f(P),r[P.id]=T,P.addEventListener("dispose",g));const F=R.program;n.updateUBOMapping(P,F);const D=e.render.frame;s[P.id]!==D&&(_(P),s[P.id]=D)}function f(P){const R=p();P.__bindingPointIndex=R;const T=i.createBuffer(),F=P.__size,D=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,T),T}function p(){for(let P=0;P<a;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const R=r[P.id],T=P.uniforms,F=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let D=0,C=T.length;D<C;D++){const N=Array.isArray(T[D])?T[D]:[T[D]];for(let b=0,S=N.length;b<S;b++){const L=N[b];if(m(L,D,b,F)===!0){const G=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let ee=0;ee<X.length;ee++){const Q=X[ee],he=M(Q);typeof Q=="number"||typeof Q=="boolean"?(L.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,G+K,L.__data)):Q.isMatrix3?(L.__data[0]=Q.elements[0],L.__data[1]=Q.elements[1],L.__data[2]=Q.elements[2],L.__data[3]=0,L.__data[4]=Q.elements[3],L.__data[5]=Q.elements[4],L.__data[6]=Q.elements[5],L.__data[7]=0,L.__data[8]=Q.elements[6],L.__data[9]=Q.elements[7],L.__data[10]=Q.elements[8],L.__data[11]=0):(Q.toArray(L.__data,K),K+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(P,R,T,F){const D=P.value,C=R+"_"+T;if(F[C]===void 0)return typeof D=="number"||typeof D=="boolean"?F[C]=D:F[C]=D.clone(),!0;{const N=F[C];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return F[C]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function v(P){const R=P.uniforms;let T=0;const F=16;for(let C=0,N=R.length;C<N;C++){const b=Array.isArray(R[C])?R[C]:[R[C]];for(let S=0,L=b.length;S<L;S++){const G=b[S],X=Array.isArray(G.value)?G.value:[G.value];for(let K=0,ee=X.length;K<ee;K++){const Q=X[K],he=M(Q),J=T%F,ye=J%he.boundary,Re=J+ye;T+=ye,Re!==0&&F-Re<he.storage&&(T+=F-Re),G.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=he.storage}}}const D=T%F;return D>0&&(T+=F-D),P.__size=T,P.__cache={},this}function M(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function g(P){const R=P.target;R.removeEventListener("dispose",g);const T=o.indexOf(R.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function d(){for(const P in r)i.deleteBuffer(r[P]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class Ng{constructor(e={}){const{canvas:t=sf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),M=new Int32Array(4);let g=null,d=null;const P=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=ui,this.toneMappingExposure=1;const T=this;let F=!1,D=0,C=0,N=null,b=-1,S=null;const L=new Dt,G=new Dt;let X=null;const K=new rt(0);let ee=0,Q=t.width,he=t.height,J=1,ye=null,Re=null;const Ie=new Dt(0,0,Q,he),Ze=new Dt(0,0,Q,he);let mt=!1;const ie=new wa;let me=!1,Ce=!1;this.transmissionResolutionScale=1;const Se=new At,Ve=new At,ze=new H,Je=new Dt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Rt(){return N===null?J:1}let I=n;function Kt(y,B){return t.getContext(y,B)}try{const y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fs}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),I===null){const B="webgl2";if(I=Kt(B,y),I===null)throw Kt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let st,nt,Ue,Mt,Le,A,x,W,se,ce,ne,De,ge,be,Qe,fe,Te,Ne,He,Ae,$e,Ye,_t,O;function ve(){st=new Wm(I),st.init(),Ye=new Ag(I,st),nt=new Bm(I,st,e,Ye),Ue=new Tg(I,st),nt.reverseDepthBuffer&&_&&Ue.buffers.depth.setReversed(!0),Mt=new Ym(I),Le=new hg,A=new bg(I,st,Ue,Le,nt,Ye,Mt),x=new Vm(T),W=new Gm(T),se=new ed(I),_t=new Fm(I,se),ce=new Xm(I,se,Mt,_t),ne=new jm(I,ce,se,Mt),He=new qm(I,nt,A),fe=new zm(Le),De=new ug(T,x,W,st,nt,_t,fe),ge=new Ig(T,Le),be=new dg,Qe=new xg(st),Ne=new Nm(T,x,W,Ue,ne,m,c),Te=new Sg(T,ne,nt),O=new Ug(I,Mt,nt,Ue),Ae=new Om(I,st,Mt),$e=new $m(I,st,Mt),Mt.programs=De.programs,T.capabilities=nt,T.extensions=st,T.properties=Le,T.renderLists=be,T.shadowMap=Te,T.state=Ue,T.info=Mt}ve();const q=new Dg(T,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=st.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=st.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){y!==void 0&&(J=y,this.setSize(Q,he,!1))},this.getSize=function(y){return y.set(Q,he)},this.setSize=function(y,B,$=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=y,he=B,t.width=Math.floor(y*J),t.height=Math.floor(B*J),$===!0&&(t.style.width=y+"px",t.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(Q*J,he*J).floor()},this.setDrawingBufferSize=function(y,B,$){Q=y,he=B,J=$,t.width=Math.floor(y*$),t.height=Math.floor(B*$),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,B,$,Y){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,B,$,Y),Ue.viewport(L.copy(Ie).multiplyScalar(J).round())},this.getScissor=function(y){return y.copy(Ze)},this.setScissor=function(y,B,$,Y){y.isVector4?Ze.set(y.x,y.y,y.z,y.w):Ze.set(y,B,$,Y),Ue.scissor(G.copy(Ze).multiplyScalar(J).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(y){Ue.setScissorTest(mt=y)},this.setOpaqueSort=function(y){ye=y},this.setTransparentSort=function(y){Re=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(y=!0,B=!0,$=!0){let Y=0;if(y){let z=!1;if(N!==null){const ue=N.texture.format;z=ue===Ea||ue===Sa||ue===ya}if(z){const ue=N.texture.type,Me=ue===jn||ue===Ai||ue===Ur||ue===ur||ue===xa||ue===Ma,we=Ne.getClearColor(),Pe=Ne.getClearAlpha(),Ge=we.r,ke=we.g,Fe=we.b;Me?(v[0]=Ge,v[1]=ke,v[2]=Fe,v[3]=Pe,I.clearBufferuiv(I.COLOR,0,v)):(M[0]=Ge,M[1]=ke,M[2]=Fe,M[3]=Pe,I.clearBufferiv(I.COLOR,0,M))}else Y|=I.COLOR_BUFFER_BIT}B&&(Y|=I.DEPTH_BUFFER_BIT),$&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ne.dispose(),be.dispose(),Qe.dispose(),Le.dispose(),x.dispose(),W.dispose(),ne.dispose(),_t.dispose(),O.dispose(),De.dispose(),q.dispose(),q.removeEventListener("sessionstart",gr),q.removeEventListener("sessionend",Wr),Dn.stop()};function re(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const y=Mt.autoReset,B=Te.enabled,$=Te.autoUpdate,Y=Te.needsUpdate,z=Te.type;ve(),Mt.autoReset=y,Te.enabled=B,Te.autoUpdate=$,Te.needsUpdate=Y,Te.type=z}function Ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Be(y){const B=y.target;B.removeEventListener("dispose",Be),lt(B)}function lt(y){Ht(y),Le.remove(y)}function Ht(y){const B=Le.get(y).programs;B!==void 0&&(B.forEach(function($){De.releaseProgram($)}),y.isShaderMaterial&&De.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,$,Y,z,ue){B===null&&(B=Tt);const Me=z.isMesh&&z.matrixWorld.determinant()<0,we=Vs(y,B,$,Y,z);Ue.setMaterial(Y,Me);let Pe=$.index,Ge=1;if(Y.wireframe===!0){if(Pe=ce.getWireframeAttribute($),Pe===void 0)return;Ge=2}const ke=$.drawRange,Fe=$.attributes.position;let ot=ke.start*Ge,ut=(ke.start+ke.count)*Ge;ue!==null&&(ot=Math.max(ot,ue.start*Ge),ut=Math.min(ut,(ue.start+ue.count)*Ge)),Pe!==null?(ot=Math.max(ot,0),ut=Math.min(ut,Pe.count)):Fe!=null&&(ot=Math.max(ot,0),ut=Math.min(ut,Fe.count));const Ct=ut-ot;if(Ct<0||Ct===1/0)return;_t.setup(z,Y,we,$,Pe);let yt,at=Ae;if(Pe!==null&&(yt=se.get(Pe),at=$e,at.setIndex(yt)),z.isMesh)Y.wireframe===!0?(Ue.setLineWidth(Y.wireframeLinewidth*Rt()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(z.isLine){let Oe=Y.linewidth;Oe===void 0&&(Oe=1),Ue.setLineWidth(Oe*Rt()),z.isLineSegments?at.setMode(I.LINES):z.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else z.isPoints?at.setMode(I.POINTS):z.isSprite&&at.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)at.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Oe=z._multiDrawStarts,wt=z._multiDrawCounts,ct=z._multiDrawCount,ln=Pe?se.get(Pe).bytesPerElement:1,Fn=Le.get(Y).currentProgram.getUniforms();for(let bt=0;bt<ct;bt++)Fn.setValue(I,"_gl_DrawID",bt),at.render(Oe[bt]/ln,wt[bt])}else if(z.isInstancedMesh)at.renderInstances(ot,Ct,z.count);else if($.isInstancedBufferGeometry){const Oe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,wt=Math.min($.instanceCount,Oe);at.renderInstances(ot,Ct,wt)}else at.render(ot,Ct)};function pt(y,B,$){y.transparent===!0&&y.side===Un&&y.forceSinglePass===!1?(y.side=on,y.needsUpdate=!0,Jn(y,B,$),y.side=hi,y.needsUpdate=!0,Jn(y,B,$),y.side=Un):Jn(y,B,$)}this.compile=function(y,B,$=null){$===null&&($=y),d=Qe.get($),d.init(B),R.push(d),$.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),y!==$&&y.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const Y=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ue=z.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const we=ue[Me];pt(we,$,z),Y.add(we)}else pt(ue,$,z),Y.add(ue)}),R.pop(),d=null,Y},this.compileAsync=function(y,B,$=null){const Y=this.compile(y,B,$);return new Promise(z=>{function ue(){if(Y.forEach(function(Me){Le.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){z(y);return}setTimeout(ue,10)}st.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Zt=null;function cn(y){Zt&&Zt(y)}function gr(){Dn.stop()}function Wr(){Dn.start()}const Dn=new Vl;Dn.setAnimationLoop(cn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(y){Zt=y,q.setAnimationLoop(y),y===null?Dn.stop():Dn.start()},q.addEventListener("sessionstart",gr),q.addEventListener("sessionend",Wr),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,B,N),d=Qe.get(y,R.length),d.init(B),R.push(d),Ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ie.setFromProjectionMatrix(Ve),Ce=this.localClippingEnabled,me=fe.init(this.clippingPlanes,Ce),g=be.get(y,P.length),g.init(),P.push(g),q.enabled===!0&&q.isPresenting===!0){const ue=T.xr.getDepthSensingMesh();ue!==null&&Ii(ue,B,-1/0,T.sortObjects)}Ii(y,B,0,T.sortObjects),g.finish(),T.sortObjects===!0&&g.sort(ye,Re),et=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,et&&Ne.addToRenderList(g,y),this.info.render.frame++,me===!0&&fe.beginShadows();const $=d.state.shadowsArray;Te.render($,y,B),me===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,z=g.transmissive;if(d.setupLights(),B.isArrayCamera){const ue=B.cameras;if(z.length>0)for(let Me=0,we=ue.length;Me<we;Me++){const Pe=ue[Me];Xr(Y,z,y,Pe)}et&&Ne.render(y);for(let Me=0,we=ue.length;Me<we;Me++){const Pe=ue[Me];vr(g,y,Pe,Pe.viewport)}}else z.length>0&&Xr(Y,z,y,B),et&&Ne.render(y),vr(g,y,B);N!==null&&C===0&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),y.isScene===!0&&y.onAfterRender(T,y,B),_t.resetDefaultState(),b=-1,S=null,R.pop(),R.length>0?(d=R[R.length-1],me===!0&&fe.setGlobalState(T.clippingPlanes,d.state.camera)):d=null,P.pop(),P.length>0?g=P[P.length-1]:g=null};function Ii(y,B,$,Y){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ie.intersectsSprite(y)){Y&&Je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ve);const Me=ne.update(y),we=y.material;we.visible&&g.push(y,Me,we,$,Je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ie.intersectsObject(y))){const Me=ne.update(y),we=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Je.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Je.copy(Me.boundingSphere.center)),Je.applyMatrix4(y.matrixWorld).applyMatrix4(Ve)),Array.isArray(we)){const Pe=Me.groups;for(let Ge=0,ke=Pe.length;Ge<ke;Ge++){const Fe=Pe[Ge],ot=we[Fe.materialIndex];ot&&ot.visible&&g.push(y,Me,ot,$,Je.z,Fe)}}else we.visible&&g.push(y,Me,we,$,Je.z,null)}}const ue=y.children;for(let Me=0,we=ue.length;Me<we;Me++)Ii(ue[Me],B,$,Y)}function vr(y,B,$,Y){const z=y.opaque,ue=y.transmissive,Me=y.transparent;d.setupLightsView($),me===!0&&fe.setGlobalState(T.clippingPlanes,$),Y&&Ue.viewport(L.copy(Y)),z.length>0&&Ui(z,B,$),ue.length>0&&Ui(ue,B,$),Me.length>0&&Ui(Me,B,$),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Xr(y,B,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new wi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?zr:jn,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ue=d.state.transmissionRenderTarget[Y.id],Me=Y.viewport||L;ue.setSize(Me.z*T.transmissionResolutionScale,Me.w*T.transmissionResolutionScale);const we=T.getRenderTarget();T.setRenderTarget(ue),T.getClearColor(K),ee=T.getClearAlpha(),ee<1&&T.setClearColor(16777215,.5),T.clear(),et&&Ne.render($);const Pe=T.toneMapping;T.toneMapping=ui;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),me===!0&&fe.setGlobalState(T.clippingPlanes,Y),Ui(y,$,Y),A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue),st.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Fe=0,ot=B.length;Fe<ot;Fe++){const ut=B[Fe],Ct=ut.object,yt=ut.geometry,at=ut.material,Oe=ut.group;if(at.side===Un&&Ct.layers.test(Y.layers)){const wt=at.side;at.side=on,at.needsUpdate=!0,Zn(Ct,$,Y,yt,at,Oe),at.side=wt,at.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(ue),A.updateRenderTargetMipmap(ue))}T.setRenderTarget(we),T.setClearColor(K,ee),Ge!==void 0&&(Y.viewport=Ge),T.toneMapping=Pe}function Ui(y,B,$){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ue=y.length;z<ue;z++){const Me=y[z],we=Me.object,Pe=Me.geometry,Ge=Y===null?Me.material:Y,ke=Me.group;we.layers.test($.layers)&&Zn(we,B,$,Pe,Ge,ke)}}function Zn(y,B,$,Y,z,ue){y.onBeforeRender(T,B,$,Y,z,ue),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(T,B,$,Y,y,ue),z.transparent===!0&&z.side===Un&&z.forceSinglePass===!1?(z.side=on,z.needsUpdate=!0,T.renderBufferDirect($,B,Y,z,y,ue),z.side=hi,z.needsUpdate=!0,T.renderBufferDirect($,B,Y,z,y,ue),z.side=Un):T.renderBufferDirect($,B,Y,z,y,ue),y.onAfterRender(T,B,$,Y,z,ue)}function Jn(y,B,$){B.isScene!==!0&&(B=Tt);const Y=Le.get(y),z=d.state.lights,ue=d.state.shadowsArray,Me=z.state.version,we=De.getParameters(y,z.state,ue,B,$),Pe=De.getProgramCacheKey(we);let Ge=Y.programs;Y.environment=y.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(y.isMeshStandardMaterial?W:x).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Ge===void 0&&(y.addEventListener("dispose",Be),Ge=new Map,Y.programs=Ge);let ke=Ge.get(Pe);if(ke!==void 0){if(Y.currentProgram===ke&&Y.lightsStateVersion===Me)return $r(y,we),ke}else we.uniforms=De.getUniforms(y),y.onBeforeCompile(we,T),ke=De.acquireProgram(we,Pe),Ge.set(Pe,ke),Y.uniforms=we.uniforms;const Fe=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=fe.uniform),$r(y,we),Y.needsLights=Hs(y),Y.lightsStateVersion=Me,Y.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=ke,Y.uniformsList=null,ke}function Qn(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=Ts.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function $r(y,B){const $=Le.get(y);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Vs(y,B,$,Y,z){B.isScene!==!0&&(B=Tt),A.resetTextureUnits();const ue=B.fog,Me=Y.isMeshStandardMaterial?B.environment:null,we=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fr,Pe=(Y.isMeshStandardMaterial?W:x).get(Y.envMap||Me),Ge=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ke=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,ut=!!$.morphAttributes.color;let Ct=ui;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ct=T.toneMapping);const yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,at=yt!==void 0?yt.length:0,Oe=Le.get(Y),wt=d.state.lights;if(me===!0&&(Ce===!0||y!==S)){const Yt=y===S&&Y.id===b;fe.setState(Y,y,Yt)}let ct=!1;Y.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==wt.state.version||Oe.outputColorSpace!==we||z.isBatchedMesh&&Oe.batching===!1||!z.isBatchedMesh&&Oe.batching===!0||z.isBatchedMesh&&Oe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Oe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Oe.instancing===!1||!z.isInstancedMesh&&Oe.instancing===!0||z.isSkinnedMesh&&Oe.skinning===!1||!z.isSkinnedMesh&&Oe.skinning===!0||z.isInstancedMesh&&Oe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Oe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Oe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Oe.instancingMorph===!1&&z.morphTexture!==null||Oe.envMap!==Pe||Y.fog===!0&&Oe.fog!==ue||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==fe.numPlanes||Oe.numIntersection!==fe.numIntersection)||Oe.vertexAlphas!==Ge||Oe.vertexTangents!==ke||Oe.morphTargets!==Fe||Oe.morphNormals!==ot||Oe.morphColors!==ut||Oe.toneMapping!==Ct||Oe.morphTargetsCount!==at)&&(ct=!0):(ct=!0,Oe.__version=Y.version);let ln=Oe.currentProgram;ct===!0&&(ln=Jn(Y,B,z));let Fn=!1,bt=!1,mi=!1;const St=ln.getUniforms(),Jt=Oe.uniforms;if(Ue.useProgram(ln.program)&&(Fn=!0,bt=!0,mi=!0),Y.id!==b&&(b=Y.id,bt=!0),Fn||S!==y){Ue.buffers.depth.getReversed()?(Se.copy(y.projectionMatrix),af(Se),cf(Se),St.setValue(I,"projectionMatrix",Se)):St.setValue(I,"projectionMatrix",y.projectionMatrix),St.setValue(I,"viewMatrix",y.matrixWorldInverse);const kt=St.map.cameraPosition;kt!==void 0&&kt.setValue(I,ze.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&St.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,bt=!0,mi=!0)}if(z.isSkinnedMesh){St.setOptional(I,z,"bindMatrix"),St.setOptional(I,z,"bindMatrixInverse");const Yt=z.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),St.setValue(I,"boneTexture",Yt.boneTexture,A))}z.isBatchedMesh&&(St.setOptional(I,z,"batchingTexture"),St.setValue(I,"batchingTexture",z._matricesTexture,A),St.setOptional(I,z,"batchingIdTexture"),St.setValue(I,"batchingIdTexture",z._indirectTexture,A),St.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&St.setValue(I,"batchingColorTexture",z._colorsTexture,A));const $t=$.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&He.update(z,$,ln),(bt||Oe.receiveShadow!==z.receiveShadow)&&(Oe.receiveShadow=z.receiveShadow,St.setValue(I,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Jt.envMap.value=Pe,Jt.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Jt.envMapIntensity.value=B.environmentIntensity),bt&&(St.setValue(I,"toneMappingExposure",T.toneMappingExposure),Oe.needsLights&&pi(Jt,mi),ue&&Y.fog===!0&&ge.refreshFogUniforms(Jt,ue),ge.refreshMaterialUniforms(Jt,Y,J,he,d.state.transmissionRenderTarget[y.id]),Ts.upload(I,Qn(Oe),Jt,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ts.upload(I,Qn(Oe),Jt,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&St.setValue(I,"center",z.center),St.setValue(I,"modelViewMatrix",z.modelViewMatrix),St.setValue(I,"normalMatrix",z.normalMatrix),St.setValue(I,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Yt=Y.uniformsGroups;for(let kt=0,Fi=Yt.length;kt<Fi;kt++){const Ln=Yt[kt];O.update(Ln,ln),O.bind(Ln,ln)}}return ln}function pi(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function Hs(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,B,$){Le.get(y.texture).__webglTexture=B,Le.get(y.depthTexture).__webglTexture=$;const Y=Le.get(y);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=$===void 0,Y.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,B){const $=Le.get(y);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0};const ks=I.createFramebuffer();this.setRenderTarget=function(y,B=0,$=0){N=y,D=B,C=$;let Y=!0,z=null,ue=!1,Me=!1;if(y){const Pe=Le.get(y);if(Pe.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Pe.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(Pe.__hasExternalTextures)A.rebindTextures(y,Le.get(y.texture).__webglTexture,Le.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Fe=y.depthTexture;if(Pe.__boundDepthTexture!==Fe){if(Fe!==null&&Le.has(Fe)&&(y.width!==Fe.image.width||y.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const Ge=y.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);const ke=Le.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?z=ke[B][$]:z=ke[B],ue=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?z=Le.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[$]:z=ke,L.copy(y.viewport),G.copy(y.scissor),X=y.scissorTest}else L.copy(Ie).multiplyScalar(J).floor(),G.copy(Ze).multiplyScalar(J).floor(),X=mt;if($!==0&&(z=ks),Ue.bindFramebuffer(I.FRAMEBUFFER,z)&&Y&&Ue.drawBuffers(y,z),Ue.viewport(L),Ue.scissor(G),Ue.setScissorTest(X),ue){const Pe=Le.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,$)}else if(Me){const Pe=Le.get(y.texture),Ge=B;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,$,Ge)}else if(y!==null&&$!==0){const Pe=Le.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,$)}b=-1},this.readRenderTargetPixels=function(y,B,$,Y,z,ue,Me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){Ue.bindFramebuffer(I.FRAMEBUFFER,we);try{const Pe=y.texture,Ge=Pe.format,ke=Pe.type;if(!nt.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-Y&&$>=0&&$<=y.height-z&&I.readPixels(B,$,Y,z,Ye.convert(Ge),Ye.convert(ke),ue)}finally{const Pe=N!==null?Le.get(N).__webglFramebuffer:null;Ue.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,B,$,Y,z,ue,Me){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Le.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){const Pe=y.texture,Ge=Pe.format,ke=Pe.type;if(!nt.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=y.width-Y&&$>=0&&$<=y.height-z){Ue.bindFramebuffer(I.FRAMEBUFFER,we);const Fe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Fe),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(B,$,Y,z,Ye.convert(Ge),Ye.convert(ke),0);const ot=N!==null?Le.get(N).__webglFramebuffer:null;Ue.bindFramebuffer(I.FRAMEBUFFER,ot);const ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await of(I,ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Fe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(Fe),I.deleteSync(ut),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,B=null,$=0){y.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1]);const Y=Math.pow(2,-$),z=Math.floor(y.image.width*Y),ue=Math.floor(y.image.height*Y),Me=B!==null?B.x:0,we=B!==null?B.y:0;A.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,$,0,0,Me,we,z,ue),Ue.unbindTexture()};const Ni=I.createFramebuffer(),Gs=I.createFramebuffer();this.copyTextureToTexture=function(y,B,$=null,Y=null,z=0,ue=null){y.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,y=arguments[1],B=arguments[2],ue=arguments[3]||0,$=null),ue===null&&(z!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=z,z=0):ue=0);let Me,we,Pe,Ge,ke,Fe,ot,ut,Ct;const yt=y.isCompressedTexture?y.mipmaps[ue]:y.image;if($!==null)Me=$.max.x-$.min.x,we=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,Ge=$.min.x,ke=$.min.y,Fe=$.isBox3?$.min.z:0;else{const $t=Math.pow(2,-z);Me=Math.floor(yt.width*$t),we=Math.floor(yt.height*$t),y.isDataArrayTexture?Pe=yt.depth:y.isData3DTexture?Pe=Math.floor(yt.depth*$t):Pe=1,Ge=0,ke=0,Fe=0}Y!==null?(ot=Y.x,ut=Y.y,Ct=Y.z):(ot=0,ut=0,Ct=0);const at=Ye.convert(B.format),Oe=Ye.convert(B.type);let wt;B.isData3DTexture?(A.setTexture3D(B,0),wt=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),wt=I.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const ct=I.getParameter(I.UNPACK_ROW_LENGTH),ln=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Fn=I.getParameter(I.UNPACK_SKIP_PIXELS),bt=I.getParameter(I.UNPACK_SKIP_ROWS),mi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fe);const St=y.isDataArrayTexture||y.isData3DTexture,Jt=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const $t=Le.get(y),Yt=Le.get(B),kt=Le.get($t.__renderTarget),Fi=Le.get(Yt.__renderTarget);Ue.bindFramebuffer(I.READ_FRAMEBUFFER,kt.__webglFramebuffer),Ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ln=0;Ln<Pe;Ln++)St&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.get(y).__webglTexture,z,Fe+Ln),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Le.get(B).__webglTexture,ue,Ct+Ln)),I.blitFramebuffer(Ge,ke,Me,we,ot,ut,Me,we,I.DEPTH_BUFFER_BIT,I.NEAREST);Ue.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||Le.has(y)){const $t=Le.get(y),Yt=Le.get(B);Ue.bindFramebuffer(I.READ_FRAMEBUFFER,Ni),Ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,Gs);for(let kt=0;kt<Pe;kt++)St?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$t.__webglTexture,z,Fe+kt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$t.__webglTexture,z),Jt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yt.__webglTexture,ue,Ct+kt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yt.__webglTexture,ue),z!==0?I.blitFramebuffer(Ge,ke,Me,we,ot,ut,Me,we,I.COLOR_BUFFER_BIT,I.NEAREST):Jt?I.copyTexSubImage3D(wt,ue,ot,ut,Ct+kt,Ge,ke,Me,we):I.copyTexSubImage2D(wt,ue,ot,ut,Ge,ke,Me,we);Ue.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Jt?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(wt,ue,ot,ut,Ct,Me,we,Pe,at,Oe,yt.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,ue,ot,ut,Ct,Me,we,Pe,at,yt.data):I.texSubImage3D(wt,ue,ot,ut,Ct,Me,we,Pe,at,Oe,yt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,ot,ut,Me,we,at,Oe,yt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,ot,ut,yt.width,yt.height,at,yt.data):I.texSubImage2D(I.TEXTURE_2D,ue,ot,ut,Me,we,at,Oe,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ln),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fn),I.pixelStorei(I.UNPACK_SKIP_ROWS,bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,mi),ue===0&&B.generateMipmaps&&I.generateMipmap(wt),Ue.unbindTexture()},this.copyTextureToTexture3D=function(y,B,$=null,Y=null,z=0){return y.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Y=arguments[1]||null,y=arguments[2],B=arguments[3],z=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,B,$,Y,z)},this.initRenderTarget=function(y){Le.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),Ue.unbindTexture()},this.resetState=function(){D=0,C=0,N=null,Ue.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const Kc={type:"change"},La={type:"start"},Xl={type:"end"},gs=new Aa,Zc=new oi,Fg=Math.cos(70*Ds.DEG2RAD),Bt=new H,sn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Co=1e-6;class Og extends Jf{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ir.ROTATE,MIDDLE:ir.DOLLY,RIGHT:ir.PAN},this.touches={ONE:tr.ROTATE,TWO:tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new fi,this._lastTargetPosition=new H,this._quat=new fi().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tc,this._sphericalDelta=new Tc,this._scale=1,this._panOffset=new H,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new H,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zg.bind(this),this._onPointerDown=Bg.bind(this),this._onPointerUp=Vg.bind(this),this._onContextMenu=Yg.bind(this),this._onMouseWheel=Gg.bind(this),this._onKeyDown=Wg.bind(this),this._onTouchStart=Xg.bind(this),this._onTouchMove=$g.bind(this),this._onMouseDown=Hg.bind(this),this._onMouseMove=kg.bind(this),this._interceptControlDown=qg.bind(this),this._interceptControlUp=jg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Kc),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),r<-Math.PI?r+=sn:r>Math.PI&&(r-=sn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new H(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gs.origin.copy(this.object.position),gs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gs.direction))<Fg?this.object.lookAt(this.target):(Zc.setFromNormalAndCoplanarPoint(this.object.up,this.target),gs.intersectPlane(Zc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Co||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Co||this._lastTargetPosition.distanceToSquared(this.target)>Co?(this.dispatchEvent(Kc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Bt.copy(r).sub(this.target);let s=Bt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Bg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function zg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Vg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xl),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case ir.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case ir.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(La)}function kg(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gg(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(La),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xl))}function Wg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(La)}function $g(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function Yg(i){this.enabled!==!1&&i.preventDefault()}function qg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Jc={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class Ns{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new sv(e)}),this.register(function(e){return new ov(e)}),this.register(function(e){return new uv(e)}),this.register(function(e){return new hv(e)}),this.register(function(e){return new fv(e)}),this.register(function(e){return new dv(e)}),this.register(function(e){return new av(e)}),this.register(function(e){return new cv(e)}),this.register(function(e){return new lv(e)}),this.register(function(e){return new pv(e)}),this.register(function(e){return new mv(e)}),this.register(function(e){return new _v(e)}),this.register(function(e){return new gv(e)}),this.register(function(e){return new vv(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,r){const s=new rv,o=[];for(let a=0,c=this.pluginCallbacks.length;a<c;a++)o.push(this.pluginCallbacks[a](s));s.setPlugins(o),s.setTextureUtils(this.textureUtils),s.writeAsync(e,t,r).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,r,s,t)})}}const it={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Po="KHR_mesh_quantization",dn={};dn[gn]=it.NEAREST;dn[hl]=it.NEAREST_MIPMAP_NEAREST;dn[Ar]=it.NEAREST_MIPMAP_LINEAR;dn[wn]=it.LINEAR;dn[vs]=it.LINEAR_MIPMAP_NEAREST;dn[ci]=it.LINEAR_MIPMAP_LINEAR;dn[ai]=it.CLAMP_TO_EDGE;dn[ws]=it.REPEAT;dn[Rs]=it.MIRRORED_REPEAT;const Qc={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},Kg=new rt,el=12,Zg=1179937895,Jg=2,tl=8,Qg=1313821514,ev=5130562;function Cr(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function tv(i){return new TextEncoder().encode(i).buffer}function nv(i){return Cr(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function iv(i,e,t){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let r=e;r<e+t;r++)for(let s=0;s<i.itemSize;s++){let o;i.itemSize>4?o=i.array[r*i.itemSize+s]:(s===0?o=i.getX(r):s===1?o=i.getY(r):s===2?o=i.getZ(r):s===3&&(o=i.getW(r)),i.normalized===!0&&(o=Ds.normalize(o,i.array))),n.min[s]=Math.min(n.min[s],o),n.max[s]=Math.max(n.max[s],o)}return n}function $l(i){return Math.ceil(i/4)*4}function Do(i,e=0){const t=$l(i.byteLength);if(t!==i.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let r=i.byteLength;r<t;r++)n[r]=e;return n.buffer}return i}function nl(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function il(i,e){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}class rv{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Fs}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const r=this,s=r.buffers,o=r.json;n=r.options;const a=r.extensionsUsed,c=r.extensionsRequired,l=new Blob(s,{type:"application/octet-stream"}),f=Object.keys(a),p=Object.keys(c);if(f.length>0&&(o.extensionsUsed=f),p.length>0&&(o.extensionsRequired=p),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=l.size),n.binary===!0){const _=new FileReader;_.readAsArrayBuffer(l),_.onloadend=function(){const m=Do(_.result),v=new DataView(new ArrayBuffer(tl));v.setUint32(0,m.byteLength,!0),v.setUint32(4,ev,!0);const M=Do(tv(JSON.stringify(o)),32),g=new DataView(new ArrayBuffer(tl));g.setUint32(0,M.byteLength,!0),g.setUint32(4,Qg,!0);const d=new ArrayBuffer(el),P=new DataView(d);P.setUint32(0,Zg,!0),P.setUint32(4,Jg,!0);const R=el+g.byteLength+M.byteLength+v.byteLength+m.byteLength;P.setUint32(8,R,!0);const T=new Blob([d,g,M,v,m],{type:"application/octet-stream"}),F=new FileReader;F.readAsArrayBuffer(T),F.onloadend=function(){t(F.result)}}}else if(o.buffers&&o.buffers.length>0){const _=new FileReader;_.readAsDataURL(l),_.onloadend=function(){const m=_.result;o.buffers[0].uri=m,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,r=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&s.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in s.gltfExtensions)t.extensions[o]=s.gltfExtensions[o],r[o]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(t.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const r=new Map;r.set(!0,this.uid++),r.set(!1,this.uid++),this.uids.set(e,r)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new H;for(let r=0,s=e.count;r<s;r++)if(Math.abs(n.fromBufferAttribute(e,r).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),r=new H;for(let s=0,o=n.count;s<o;s++)r.fromBufferAttribute(n,s),r.x===0&&r.y===0&&r.z===0?r.setX(1):r.normalize(),n.setXYZ(s,r.x,r.y,r.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const r={};(t.offset.x!==0||t.offset.y!==0)&&(r.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(r.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(r.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=r,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(m){return m.colorSpace===fn?function(M){return M<.04045?M*.0773993808:Math.pow(M*.9478672986+.0521327014,2.4)}:function(M){return M}}e instanceof Mo&&(e=await this.decompressTextureAsync(e)),t instanceof Mo&&(t=await this.decompressTextureAsync(t));const r=e?e.image:null,s=t?t.image:null,o=Math.max(r?r.width:0,s?s.width:0),a=Math.max(r?r.height:0,s?s.height:0),c=nl();c.width=o,c.height=a;const l=c.getContext("2d",{willReadFrequently:!0});l.fillStyle="#00ffff",l.fillRect(0,0,o,a);const f=l.getImageData(0,0,o,a);if(r){l.drawImage(r,0,0,o,a);const m=n(e),v=l.getImageData(0,0,o,a).data;for(let M=2;M<v.length;M+=4)f.data[M]=m(v[M]/256)*256}if(s){l.drawImage(s,0,0,o,a);const m=n(t),v=l.getImageData(0,0,o,a).data;for(let M=1;M<v.length;M+=4)f.data[M]=m(v[M]/256)*256}l.putImageData(f,0,0);const _=(e||t).clone();return _.source=new ba(c),_.colorSpace=Xn,_.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),_}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,r,s){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case it.BYTE:case it.UNSIGNED_BYTE:a=1;break;case it.SHORT:case it.UNSIGNED_SHORT:a=2;break;default:a=4}let c=e.itemSize*a;s===it.ARRAY_BUFFER&&(c=Math.ceil(c/4)*4);const l=$l(r*c),f=new DataView(new ArrayBuffer(l));let p=0;for(let v=n;v<n+r;v++){for(let M=0;M<e.itemSize;M++){let g;e.itemSize>4?g=e.array[v*e.itemSize+M]:(M===0?g=e.getX(v):M===1?g=e.getY(v):M===2?g=e.getZ(v):M===3&&(g=e.getW(v)),e.normalized===!0&&(g=Ds.normalize(g,e.array))),t===it.FLOAT?f.setFloat32(p,g,!0):t===it.INT?f.setInt32(p,g,!0):t===it.UNSIGNED_INT?f.setUint32(p,g,!0):t===it.SHORT?f.setInt16(p,g,!0):t===it.UNSIGNED_SHORT?f.setUint16(p,g,!0):t===it.BYTE?f.setInt8(p,g):t===it.UNSIGNED_BYTE&&f.setUint8(p,g),p+=a}p%c!==0&&(p+=c-p%c)}const _={buffer:this.processBuffer(f.buffer),byteOffset:this.byteOffset,byteLength:l};return s!==void 0&&(_.target=s),s===it.ARRAY_BUFFER&&(_.byteStride=c),this.byteOffset+=l,o.bufferViews.push(_),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(r){const s=new FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){const o=Do(s.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,r(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,r){const s=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=it.FLOAT;else if(e.array.constructor===Int32Array)a=it.INT;else if(e.array.constructor===Uint32Array)a=it.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=it.SHORT;else if(e.array.constructor===Uint16Array)a=it.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=it.BYTE;else if(e.array.constructor===Uint8Array)a=it.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(r===void 0||r===1/0)&&(r=e.count),r===0)return null;const c=iv(e,n,r);let l;t!==void 0&&(l=e===t.index?it.ELEMENT_ARRAY_BUFFER:it.ARRAY_BUFFER);const f=this.processBufferView(e,a,n,r,l),p={bufferView:f.id,byteOffset:f.byteOffset,componentType:a,count:r,max:c.max,min:c.min,type:o[e.itemSize]};return e.normalized===!0&&(p.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(p)-1}processImage(e,t,n,r="image/png"){if(e!==null){const s=this,o=s.cache,a=s.json,c=s.options,l=s.pending;o.images.has(e)||o.images.set(e,{});const f=o.images.get(e),p=r+":flipY/"+n.toString();if(f[p]!==void 0)return f[p];a.images||(a.images=[]);const _={mimeType:r},m=nl();m.width=Math.min(e.width,c.maxTextureSize),m.height=Math.min(e.height,c.maxTextureSize);const v=m.getContext("2d",{willReadFrequently:!0});if(n===!0&&(v.translate(0,m.height),v.scale(1,-1)),e.data!==void 0){t!==_n&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>c.maxTextureSize||e.height>c.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const g=new Uint8ClampedArray(e.height*e.width*4);for(let d=0;d<g.length;d+=4)g[d+0]=e.data[d+0],g[d+1]=e.data[d+1],g[d+2]=e.data[d+2],g[d+3]=e.data[d+3];v.putImageData(new ImageData(g,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)v.drawImage(e,0,0,m.width,m.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");c.binary===!0?l.push(il(m,r).then(g=>s.processBufferViewImage(g)).then(g=>{_.bufferView=g})):m.toDataURL!==void 0?_.uri=m.toDataURL(r):l.push(il(m,r).then(g=>new FileReader().readAsDataURL(g)).then(g=>{_.uri=g}));const M=a.images.push(_)-1;return f[p]=M,M}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:dn[e.magFilter],minFilter:dn[e.minFilter],wrapS:dn[e.wrapS],wrapT:dn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,r=this.cache,s=this.json;if(r.textures.has(e))return r.textures.get(e);s.textures||(s.textures=[]),e instanceof Mo&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),await this._invokeAllAsync(async function(l){l.writeTexture&&await l.writeTexture(e,a)});const c=s.textures.push(a)-1;return r.textures.set(e,c),c}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const r={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=e.color.toArray().concat([e.opacity]);if(Cr(s,[1,1,1,1])||(r.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(r.pbrMetallicRoughness.metallicFactor=e.metalness,r.pbrMetallicRoughness.roughnessFactor=e.roughness):(r.pbrMetallicRoughness.metallicFactor=0,r.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const a=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),c={index:await this.processTextureAsync(a),texCoord:a.channel};this.applyTextureTransform(c,a),r.pbrMetallicRoughness.metallicRoughnessTexture=c}if(e.map){const a={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),r.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(r.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const l={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(l,e.emissiveMap),r.emissiveTexture=l}}if(e.normalMap){const a={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),r.normalTexture=a}if(e.aoMap){const a={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),r.occlusionTexture=a}e.transparent?r.alphaMode="BLEND":e.alphaTest>0&&(r.alphaMode="MASK",r.alphaCutoff=e.alphaTest),e.side===Un&&(r.doubleSided=!0),e.name!==""&&(r.name=e.name),this.serializeUserData(e,r),await this._invokeAllAsync(async function(a){a.writeMaterialAsync&&await a.writeMaterialAsync(e,r)});const o=n.materials.push(r)-1;return t.materials.set(e,o),o}async processMeshAsync(e){const t=this.cache,n=this.json,r=[e.geometry.uuid];if(Array.isArray(e.material))for(let T=0,F=e.material.length;T<F;T++)r.push(e.material[T].uuid);else r.push(e.material.uuid);const s=r.join(":");if(t.meshes.has(s))return t.meshes.get(s);const o=e.geometry;let a;e.isLineSegments?a=it.LINES:e.isLineLoop?a=it.LINE_LOOP:e.isLine?a=it.LINE_STRIP:e.isPoints?a=it.POINTS:a=e.material.wireframe?it.LINES:it.TRIANGLES;const c={},l={},f=[],p=[],_={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},m=o.getAttribute("normal");m!==void 0&&!this.isNormalizedNormalAttribute(m)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(m)));let v=null;for(let T in o.attributes){if(T.slice(0,5)==="morph")continue;const F=o.attributes[T];if(T=_[T]||T.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(T)||(T="_"+T),t.attributes.has(this.getUID(F))){l[T]=t.attributes.get(this.getUID(F));continue}v=null;const C=F.array;T==="JOINTS_0"&&!(C instanceof Uint16Array)&&!(C instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),v=new Ot(new Uint16Array(C),F.itemSize,F.normalized)):(C instanceof Uint32Array||C instanceof Int32Array)&&!T.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${T}" converted to type FLOAT.`),v=Ns.Utils.toFloat32BufferAttribute(F));const N=this.processAccessor(v||F,o);N!==null&&(T.startsWith("_")||this.detectMeshQuantization(T,F),l[T]=N,t.attributes.set(this.getUID(F),N))}if(m!==void 0&&o.setAttribute("normal",m),Object.keys(l).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const T=[],F=[],D={};if(e.morphTargetDictionary!==void 0)for(const C in e.morphTargetDictionary)D[e.morphTargetDictionary[C]]=C;for(let C=0;C<e.morphTargetInfluences.length;++C){const N={};let b=!1;for(const S in o.morphAttributes){if(S!=="position"&&S!=="normal"){b||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),b=!0);continue}const L=o.morphAttributes[S][C],G=S.toUpperCase(),X=o.attributes[S];if(t.attributes.has(this.getUID(L,!0))){N[G]=t.attributes.get(this.getUID(L,!0));continue}const K=L.clone();if(!o.morphTargetsRelative)for(let ee=0,Q=L.count;ee<Q;ee++)for(let he=0;he<L.itemSize;he++)he===0&&K.setX(ee,L.getX(ee)-X.getX(ee)),he===1&&K.setY(ee,L.getY(ee)-X.getY(ee)),he===2&&K.setZ(ee,L.getZ(ee)-X.getZ(ee)),he===3&&K.setW(ee,L.getW(ee)-X.getW(ee));N[G]=this.processAccessor(K,o),t.attributes.set(this.getUID(X,!0),N[G])}p.push(N),T.push(e.morphTargetInfluences[C]),e.morphTargetDictionary!==void 0&&F.push(D[C])}c.weights=T,F.length>0&&(c.extras={},c.extras.targetNames=F)}const M=Array.isArray(e.material);if(M&&o.groups.length===0)return null;let g=!1;if(M&&o.index===null){const T=[];for(let F=0,D=o.attributes.position.count;F<D;F++)T[F]=F;o.setIndex(T),g=!0}const d=M?e.material:[e.material],P=M?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let T=0,F=P.length;T<F;T++){const D={mode:a,attributes:l};if(this.serializeUserData(o,D),p.length>0&&(D.targets=p),o.index!==null){let N=this.getUID(o.index);(P[T].start!==void 0||P[T].count!==void 0)&&(N+=":"+P[T].start+":"+P[T].count),t.attributes.has(N)?D.indices=t.attributes.get(N):(D.indices=this.processAccessor(o.index,o,P[T].start,P[T].count),t.attributes.set(N,D.indices)),D.indices===null&&delete D.indices}const C=await this.processMaterialAsync(d[P[T].materialIndex]);C!==null&&(D.material=C),f.push(D)}g===!0&&o.setIndex(null),c.primitives=f,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(T){T.writeMesh&&T.writeMesh(e,c)});const R=n.meshes.push(c)-1;return t.meshes.set(s,R),R}detectMeshQuantization(e,t){if(this.extensionsUsed[Po])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const r=e.split("_",1)[0];Jc[r]&&Jc[r].includes(n)&&(this.extensionsUsed[Po]=!0,this.extensionsRequired[Po]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,r={type:n?"orthographic":"perspective"};return n?r.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:r.perspective={aspectRatio:e.aspect,yfov:Ds.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(r.name=e.type),t.cameras.push(r)-1}processAnimation(e,t){const n=this.json,r=this.nodeMap;n.animations||(n.animations=[]),e=Ns.Utils.mergeMorphTargetTracks(e.clone(),t);const s=e.tracks,o=[],a=[];for(let c=0;c<s.length;++c){const l=s[c],f=ft.parseTrackName(l.name);let p=ft.findNode(t,f.nodeName);const _=Qc[f.propertyName];if(f.objectName==="bones"&&(p.isSkinnedMesh===!0?p=p.skeleton.getBoneByName(f.objectIndex):p=void 0),!p||!_){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',l.name);continue}const m=1;let v=l.values.length/l.times.length;_===Qc.morphTargetInfluences&&(v/=p.morphTargetInfluences.length);let M;l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(M="CUBICSPLINE",v/=3):l.getInterpolation()===Ph?M="STEP":M="LINEAR",a.push({input:this.processAccessor(new Ot(l.times,m)),output:this.processAccessor(new Ot(l.values,v)),interpolation:M}),o.push({sampler:a.length-1,target:{node:r.get(p),path:_}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,r=t.nodes[n.get(e)],s=e.skeleton;if(s===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],c=new Float32Array(s.bones.length*16),l=new At;for(let p=0;p<s.bones.length;++p)a.push(n.get(s.bones[p])),l.copy(s.boneInverses[p]),l.multiply(e.bindMatrix).toArray(c,p*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Ot(c,16)),joints:a,skeleton:n.get(o)}),r.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,r=this.nodeMap;t.nodes||(t.nodes=[]);const s={};if(n.trs){const a=e.quaternion.toArray(),c=e.position.toArray(),l=e.scale.toArray();Cr(a,[0,0,0,1])||(s.rotation=a),Cr(c,[0,0,0])||(s.translation=c),Cr(l,[1,1,1])||(s.scale=l)}else e.matrixAutoUpdate&&e.updateMatrix(),nv(e.matrix)===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){const a=await this.processMeshAsync(e);a!==null&&(s.mesh=a)}else e.isCamera&&(s.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let c=0,l=e.children.length;c<l;c++){const f=e.children[c];if(f.visible||n.onlyVisible===!1){const p=await this.processNodeAsync(f);p!==null&&a.push(p)}}a.length>0&&(s.children=a)}await this._invokeAllAsync(function(a){a.writeNode&&a.writeNode(e,s)});const o=t.nodes.push(s)-1;return r.set(e,o),o}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const r={};e.name!==""&&(r.name=e.name),t.scenes.push(r);const s=[];for(let o=0,a=e.children.length;o<a;o++){const c=e.children[o];if(c.visible||n.onlyVisible===!1){const l=await this.processNodeAsync(c);l!==null&&s.push(l)}}s.length>0&&(r.nodes=s),this.serializeUserData(e,r)}async processObjectsAsync(e){const t=new _a;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(r){r.beforeParse&&r.beforeParse(e)});const n=[];for(let r=0;r<e.length;r++)e[r]instanceof _a?await this.processSceneAsync(e[r]):n.push(e[r]);n.length>0&&await this.processObjectsAsync(n);for(let r=0;r<this.skins.length;++r)this.processSkin(this.skins[r]);for(let r=0;r<t.animations.length;++r)this.processAnimation(t.animations[r],e[0]);await this._invokeAllAsync(function(r){r.afterParse&&r.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class sv{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,r=n.json,s=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(r.extensions=r.extensions||{},r.extensions[this.name]={lights:[]},s[this.name]=!0);const a=r.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class ov{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const r=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},r[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class av{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,r=n.extensionsUsed,s={};if(s.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),s.clearcoatTexture=o}if(s.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(o,e.clearcoatNormalMap),s.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class cv{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const r=this.writer.extensionsUsed,s={};s.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class lv{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,r=n.extensionsUsed,s={};if(s.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),s.iridescenceTexture=o}if(s.iridescenceIor=e.iridescenceIOR,s.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),s.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class uv{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,r=n.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){const o={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),s.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class hv{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,r=n.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){const o={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),s.thicknessTexture=o}e.attenuationDistance!==1/0&&(s.attenuationDistance=e.attenuationDistance),s.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class fv{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const r=this.writer.extensionsUsed,s={};s.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class dv{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(Kg)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,r=n.extensionsUsed,s={};if(e.specularIntensityMap){const o={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),s.specularTexture=o}if(e.specularColorMap){const o={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),s.specularColorTexture=o}s.specularFactor=e.specularIntensity,s.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class pv{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,r=n.extensionsUsed,s={};if(e.sheenRoughnessMap){const o={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),s.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),s.sheenColorTexture=o}s.sheenRoughnessFactor=e.sheenRoughness,s.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class mv{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,r=n.extensionsUsed,s={};if(e.anisotropyMap){const o={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),s.anisotropyTexture=o}s.anisotropyStrength=e.anisotropy,s.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class _v{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const r=this.writer.extensionsUsed,s={};s.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class gv{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,r=n.extensionsUsed,s={};if(e.bumpMap){const o={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),s.bumpTexture=o}s.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class vv{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,r=e,s=new Float32Array(r.count*3),o=new Float32Array(r.count*4),a=new Float32Array(r.count*3),c=new At,l=new H,f=new fi,p=new H;for(let m=0;m<r.count;m++)r.getMatrixAt(m,c),c.decompose(l,f,p),l.toArray(s,m*3),f.toArray(o,m*4),p.toArray(a,m*3);const _={TRANSLATION:n.processAccessor(new Ot(s,3)),ROTATION:n.processAccessor(new Ot(o,4)),SCALE:n.processAccessor(new Ot(a,3))};r.instanceColor&&(_._COLOR_0=n.processAccessor(r.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:_},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}Ns.Utils={insertKeyframe:function(i,e){const n=i.getValueSize(),r=new i.TimeBufferType(i.times.length+1),s=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n));let a;if(i.times.length===0){r[0]=e;for(let c=0;c<n;c++)s[c]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;r[0]=e,r.set(i.times,1),s.set(o.evaluate(e),0),s.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;r[r.length-1]=e,r.set(i.times,0),s.set(i.values,0),s.set(o.evaluate(e),i.values.length),a=r.length-1}else for(let c=0;c<i.times.length;c++){if(Math.abs(i.times[c]-e)<.001)return c;if(i.times[c]<e&&i.times[c+1]>e){r.set(i.times.slice(0,c+1),0),r[c+1]=e,r.set(i.times.slice(c+1),c+2),s.set(i.values.slice(0,(c+1)*n),0),s.set(o.evaluate(e),(c+1)*n),s.set(i.values.slice((c+1)*n),(c+2)*n),a=c+1;break}}return i.times=r,i.values=s,a},mergeMorphTargetTracks:function(i,e){const t=[],n={},r=i.tracks;for(let s=0;s<r.length;++s){let o=r[s];const a=ft.parseTrackName(o.name),c=ft.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(Dh)}const l=c.morphTargetInfluences.length,f=c.morphTargetDictionary[a.propertyIndex];if(f===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let p;if(n[c.uuid]===void 0){p=o.clone();const m=new p.ValueBufferType(l*p.times.length);for(let v=0;v<p.times.length;v++)m[v*l+f]=p.values[v];p.name=(a.nodeName||"")+".morphTargetInfluences",p.values=m,n[c.uuid]=p,t.push(p);continue}const _=o.createInterpolant(new o.ValueBufferType(1));p=n[c.uuid];for(let m=0;m<p.times.length;m++)p.values[m*l+f]=_.evaluate(p.times[m]);for(let m=0;m<o.times.length;m++){const v=this.insertKeyframe(p,o.times[m]);p.values[v*l+f]=o.values[m]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){const e=new Ot(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let r=0;r<i.itemSize;r++)e.setComponent(t,r,i.getComponent(t,r));return e}};const xv="modulepreload",Mv=function(i,e){return new URL(i,e).href},rl={},yv=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Mv(l,n),l in rl)return;rl[l]=!0;const f=l.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(!!n)for(let v=o.length-1;v>=0;v--){const M=o[v];if(M.href===l&&(!f||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":xv,f||(m.as="script"),m.crossOrigin="",m.href=l,c&&m.setAttribute("nonce",c),document.head.appendChild(m),f)return new Promise((v,M)=>{m.addEventListener("load",v),m.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var Sv=(()=>{var i=import.meta.url;return async function(e={}){var t,n=e,r,s,o=new Promise((u,h)=>{r=u,s=h}),a=typeof window=="object",c=typeof importScripts=="function",l=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(l){const{createRequire:u}=await yv(()=>import("./chunk-__vite-browser-external.js"),[],import.meta.url);var f=u(import.meta.url)}var p=!1;n.setup=function(){if(p)return;p=!0,n.initTBB();function u(U,k,te=pe=>pe){if(k)for(let pe of k)U.push_back(te(pe));return U}function h(U,k=te=>te){const te=[],pe=U.size();for(let Xe=0;Xe<pe;Xe++)te.push(k(U.get(Xe)));return te}function E(U,k=te=>te){const te=[],pe=U.size();for(let Xe=0;Xe<pe;Xe++){const Et=U.get(Xe),Nt=Et.size(),rn=[];for(let Lt=0;Lt<Nt;Lt++)rn.push(k(Et.get(Lt)));te.push(rn)}return te}function w(U){return U[0].length<3&&(U=[U]),u(new n.Vector2_vec2,U,k=>u(new n.Vector_vec2,k,te=>te instanceof Array?{x:te[0],y:te[1]}:te))}function V(U){for(let k=0;k<U.size();k++)U.get(k).delete();U.delete()}function j(U){return U[0]instanceof Array?{x:U[0][0],y:U[0][1]}:typeof U[0]=="number"?{x:U[0]||0,y:U[1]||0}:U[0]}function oe(U){return U[0]instanceof Array?{x:U[0][0],y:U[0][1],z:U[0][2]}:typeof U[0]=="number"?{x:U[0]||0,y:U[1]||0,z:U[2]||0}:U[0]}function Z(U){return U=="EvenOdd"?0:U=="NonZero"?1:U=="Negative"?3:2}function le(U){return U=="Round"?1:U=="Miter"?2:0}const de=n.CrossSection;function _e(U,k="Positive"){if(U instanceof de)return U;{const te=w(U),pe=new de(te,Z(k));return V(te),pe}}n.CrossSection.prototype.translate=function(...U){return this._Translate(j(U))},n.CrossSection.prototype.scale=function(U){return typeof U=="number"?this._Scale({x:U,y:U}):this._Scale(j([U]))},n.CrossSection.prototype.mirror=function(U){return this._Mirror(j([U]))},n.CrossSection.prototype.warp=function(U){const k=xr(function(pe){const Xe=x(pe,"double"),Et=x(pe+8,"double"),Nt=[Xe,Et];U(Nt),W(pe,Nt[0],"double"),W(pe+8,Nt[1],"double")},"vi"),te=this._Warp(k);return Mr(k),te},n.CrossSection.prototype.decompose=function(){const U=this._Decompose(),k=h(U);return U.delete(),k},n.CrossSection.prototype.bounds=function(){const U=this._Bounds();return{min:["x","y"].map(k=>U.min[k]),max:["x","y"].map(k=>U.max[k])}},n.CrossSection.prototype.offset=function(U,k="Round",te=2,pe=0){return this._Offset(U,le(k),te,pe)},n.CrossSection.prototype.simplify=function(U=1e-6){return this._Simplify(U)},n.CrossSection.prototype.extrude=function(U,k=0,te=0,pe=[1,1],Xe=!1){pe=j([pe]);const Et=n._Extrude(this._ToPolygons(),U,k,te,pe);return Xe?Et.translate([0,0,-U/2]):Et},n.CrossSection.prototype.revolve=function(U=0,k=360){return n._Revolve(this._ToPolygons(),U,k)},n.CrossSection.prototype.add=function(U){return this._add(_e(U))},n.CrossSection.prototype.subtract=function(U){return this._subtract(_e(U))},n.CrossSection.prototype.intersect=function(U){return this._intersect(_e(U))},n.CrossSection.prototype.toPolygons=function(){const U=this._ToPolygons(),k=E(U,te=>[te.x,te.y]);return U.delete(),k},n.Manifold.prototype.smoothOut=function(U=60,k=0){return this._SmoothOut(U,k)},n.Manifold.prototype.warp=function(U){const k=xr(function(Xe){const Et=x(Xe,"double"),Nt=x(Xe+8,"double"),rn=x(Xe+16,"double"),Lt=[Et,Nt,rn];U(Lt),W(Xe,Lt[0],"double"),W(Xe+8,Lt[1],"double"),W(Xe+16,Lt[2],"double")},"vi"),te=this._Warp(k);Mr(k);const pe=te.status();if(pe!=="NoError")throw new n.ManifoldError(pe);return te},n.Manifold.prototype.calculateNormals=function(U,k=60){return this._CalculateNormals(U,k)},n.Manifold.prototype.setProperties=function(U,k){const te=this.numProp(),pe=xr(function(Et,Nt,rn){const Lt=[];for(let It=0;It<U;++It)Lt[It]=x(Et+8*It,"double");const Oi=[];for(let It=0;It<3;++It)Oi[It]=x(Nt+8*It,"double");const Bi=[];for(let It=0;It<te;++It)Bi[It]=x(rn+8*It,"double");k(Lt,Oi,Bi);for(let It=0;It<U;++It)W(Et+8*It,Lt[It],"double")},"viii"),Xe=this._SetProperties(U,pe);return Mr(pe),Xe},n.Manifold.prototype.translate=function(...U){return this._Translate(oe(U))},n.Manifold.prototype.rotate=function(U,k,te){return Array.isArray(U)?this._Rotate(...U):this._Rotate(U,k||0,te||0)},n.Manifold.prototype.scale=function(U){return typeof U=="number"?this._Scale({x:U,y:U,z:U}):this._Scale(oe([U]))},n.Manifold.prototype.mirror=function(U){return this._Mirror(oe([U]))},n.Manifold.prototype.trimByPlane=function(U,k=0){return this._TrimByPlane(oe([U]),k)},n.Manifold.prototype.slice=function(U=0){const k=this._Slice(U),te=new de(k,Z("Positive"));return V(k),te},n.Manifold.prototype.project=function(){const U=this._Project(),k=new de(U,Z("Positive"));return V(U),k},n.Manifold.prototype.split=function(U){const k=this._Split(U),te=h(k);return k.delete(),te},n.Manifold.prototype.splitByPlane=function(U,k=0){const te=this._SplitByPlane(oe([U]),k),pe=h(te);return te.delete(),pe},n.Manifold.prototype.decompose=function(){const U=this._Decompose(),k=h(U);return U.delete(),k},n.Manifold.prototype.boundingBox=function(){const U=this._boundingBox();return{min:["x","y","z"].map(k=>U.min[k]),max:["x","y","z"].map(k=>U.max[k])}};class We{constructor({numProp:k=3,triVerts:te=new Uint32Array,vertProperties:pe=new Float32Array,mergeFromVert:Xe,mergeToVert:Et,runIndex:Nt,runOriginalID:rn,faceID:Lt,halfedgeTangent:Oi,runTransform:Bi}={}){this.numProp=k,this.triVerts=te,this.vertProperties=pe,this.mergeFromVert=Xe,this.mergeToVert=Et,this.runIndex=Nt,this.runOriginalID=rn,this.faceID=Lt,this.halfedgeTangent=Oi,this.runTransform=Bi}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){const{changed:k,mesh:te}=n._Merge(this);return Object.assign(this,{...te}),k}verts(k){return this.triVerts.subarray(3*k,3*(k+1))}position(k){return this.vertProperties.subarray(this.numProp*k,this.numProp*k+3)}extras(k){return this.vertProperties.subarray(this.numProp*k+3,this.numProp*(k+1))}tangent(k){return this.halfedgeTangent.subarray(4*k,4*(k+1))}transform(k){const te=new Array(16);for(const pe of[0,1,2,3])for(const Xe of[0,1,2])te[4*pe+Xe]=this.runTransform[12*k+3*pe+Xe];return te[15]=1,te}}n.Mesh=We,n.Manifold.prototype.getMesh=function(U=-1){return new We(this._GetMeshJS(U))},n.ManifoldError=function(k,...te){let pe="Unknown error";switch(k){case"NonFiniteVertex":pe="Non-finite vertex";break;case"NotManifold":pe="Not manifold";break;case"VertexOutOfBounds":pe="Vertex index out of bounds";break;case"PropertiesWrongLength":pe="Properties have wrong length";break;case"MissingPositionProperties":pe="Less than three properties";break;case"MergeVectorsDifferentLengths":pe="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":pe="Merge index out of bounds";break;case"TransformWrongLength":pe="Transform vector has wrong length";break;case"RunIndexWrongLength":pe="Run index vector has wrong length";break;case"FaceIDWrongLength":pe="Face ID vector has wrong length";case"InvalidConstruction":pe="Manifold constructed with invalid parameters"}const Xe=Error.apply(this,[pe,...te]);Xe.name=this.name="ManifoldError",this.message=Xe.message,this.stack=Xe.stack,this.code=k},n.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:n.ManifoldError,writable:!0,configurable:!0}}),n.CrossSection=function(U,k="Positive"){const te=w(U),pe=new de(te,Z(k));return V(te),pe},n.CrossSection.ofPolygons=function(U,k="Positive"){return new n.CrossSection(U,k)},n.CrossSection.square=function(...U){let k;U.length==0?k={x:1,y:1}:typeof U[0]=="number"?k={x:U[0],y:U[0]}:k=j(U);const te=U[1]||!1;return n._Square(k,te)},n.CrossSection.circle=function(U,k=0){return n._Circle(U,k)};function ht(U){return function(...k){k.length==1&&(k=k[0]);const te=new n.Vector_crossSection;for(const Xe of k)te.push_back(_e(Xe));const pe=n["_crossSection"+U](te);return te.delete(),pe}}n.CrossSection.compose=ht("Compose"),n.CrossSection.union=ht("UnionN"),n.CrossSection.difference=ht("DifferenceN"),n.CrossSection.intersection=ht("IntersectionN");function Ut(U,k){u(U,k,te=>te instanceof Array?{x:te[0],y:te[1]}:te)}n.CrossSection.hull=function(...U){U.length==1&&(U=U[0]);let k=new n.Vector_vec2;for(const pe of U)if(pe instanceof de)n._crossSectionCollectVertices(k,pe);else if(pe instanceof Array&&pe.length==2&&typeof pe[0]=="number")k.push_back({x:pe[0],y:pe[1]});else if(pe.x)k.push_back(pe);else{const Et=pe[0].length==2&&typeof pe[0][0]=="number"||pe[0].x?[pe]:pe;for(const Nt of Et)Ut(k,Nt)}const te=n._crossSectionHullPoints(k);return k.delete(),te},n.CrossSection.prototype=Object.create(de.prototype),Object.defineProperty(n.CrossSection,Symbol.hasInstance,{get:()=>U=>U instanceof de});const Pt=n.Manifold;n.Manifold=function(U){const k=new Pt(U),te=k.status();if(te!=="NoError")throw new n.ManifoldError(te);return k},n.Manifold.ofMesh=function(U){return new n.Manifold(U)},n.Manifold.tetrahedron=function(){return n._Tetrahedron()},n.Manifold.cube=function(...U){let k;U.length==0?k={x:1,y:1,z:1}:typeof U[0]=="number"?k={x:U[0],y:U[0],z:U[0]}:k=oe(U);const te=U[1]||!1;return n._Cube(k,te)},n.Manifold.cylinder=function(U,k,te=-1,pe=0,Xe=!1){return n._Cylinder(U,k,te,pe,Xe)},n.Manifold.sphere=function(U,k=0){return n._Sphere(U,k)},n.Manifold.smooth=function(U,k=[]){const te=new n.Vector_smoothness;u(te,k);const pe=n._Smooth(U,te);return te.delete(),pe},n.Manifold.extrude=function(U,k,te=0,pe=0,Xe=[1,1],Et=!1){return(U instanceof de?U:n.CrossSection(U,"Positive")).extrude(k,te,pe,Xe,Et)},n.Manifold.revolve=function(U,k=0,te=360){return(U instanceof de?U:n.CrossSection(U,"Positive")).revolve(k,te)},n.Manifold.reserveIDs=function(U){return n._ReserveIDs(U)},n.Manifold.compose=function(U){const k=new n.Vector_manifold;u(k,U);const te=n._manifoldCompose(k);return k.delete(),te};function Mn(U){return function(...k){k.length==1&&(k=k[0]);const te=new n.Vector_manifold;for(const Xe of k)te.push_back(Xe);const pe=n["_manifold"+U+"N"](te);return te.delete(),pe}}n.Manifold.union=Mn("Union"),n.Manifold.difference=Mn("Difference"),n.Manifold.intersection=Mn("Intersection"),n.Manifold.levelSet=function(U,k,te,pe=0,Xe=-1){const Et={min:{x:k.min[0],y:k.min[1],z:k.min[2]},max:{x:k.max[0],y:k.max[1],z:k.max[2]}},Nt=xr(function(Lt){const Oi=x(Lt,"double"),Bi=x(Lt+8,"double"),It=x(Lt+16,"double");return U([Oi,Bi,It])},"di"),rn=n._LevelSet(Nt,Et,te,pe,Xe);return Mr(Nt),rn};function yn(U,k){u(U,k,te=>te instanceof Array?{x:te[0],y:te[1],z:te[2]}:te)}n.Manifold.hull=function(...U){U.length==1&&(U=U[0]);let k=new n.Vector_vec3;for(const pe of U)pe instanceof Pt?n._manifoldCollectVertices(k,pe):pe instanceof Array&&pe.length==3&&typeof pe[0]=="number"?k.push_back({x:pe[0],y:pe[1],z:pe[2]}):pe.x?k.push_back(pe):yn(k,pe);const te=n._manifoldHullPoints(k);return k.delete(),te},n.Manifold.prototype=Object.create(Pt.prototype),Object.defineProperty(n.Manifold,Symbol.hasInstance,{get:()=>U=>U instanceof Pt}),n.triangulate=function(U,k=-1,te=!0){const pe=w(U),Xe=h(n._Triangulate(pe,k,te),Et=>[Et[0],Et[1],Et[2]]);return V(pe),Xe}};var _=Object.assign({},n),m="";function v(u){return n.locateFile?n.locateFile(u,m):m+u}var M,g;if(l){var d=f("fs"),P=f("path");m=f("url").fileURLToPath(new URL(""+new URL("manifold.js",import.meta.url).href,import.meta.url)),g=u=>{u=et(u)?new URL(u):P.normalize(u);var h=d.readFileSync(u);return h},M=(u,h=!0)=>(u=et(u)?new URL(u):P.normalize(u),new Promise((E,w)=>{d.readFile(u,h?void 0:"utf8",(V,j)=>{V?w(V):E(h?j.buffer:j)})})),!n.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(a||c)&&(c?m=self.location.href:typeof document<"u"&&document.currentScript&&(m=document.currentScript.src),i&&(m=i),m.startsWith("blob:")?m="":m=m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1),c&&(g=u=>{var h=new XMLHttpRequest;return h.open("GET",u,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),M=u=>et(u)?new Promise((h,E)=>{var w=new XMLHttpRequest;w.open("GET",u,!0),w.responseType="arraybuffer",w.onload=()=>{(w.status==200||w.status==0&&w.response)&&E(w.response),h(w.status)},w.onerror=h,w.send(null)}):fetch(u,{credentials:"same-origin"}).then(h=>h.ok?h.arrayBuffer():Promise.reject(new Error(h.status+" : "+h.url))));n.print||console.log.bind(console);var R=n.printErr||console.error.bind(console);Object.assign(n,_),_=null,n.arguments&&n.arguments,n.thisProgram&&n.thisProgram,n.quit&&n.quit;var T;n.wasmBinary&&(T=n.wasmBinary);var F,D=!1,C,N,b,S,L,G,X,K;function ee(){var u=F.buffer;n.HEAP8=C=new Int8Array(u),n.HEAP16=b=new Int16Array(u),n.HEAPU8=N=new Uint8Array(u),n.HEAPU16=S=new Uint16Array(u),n.HEAP32=L=new Int32Array(u),n.HEAPU32=G=new Uint32Array(u),n.HEAPF32=X=new Float32Array(u),n.HEAPF64=K=new Float64Array(u)}var Q=[],he=[],J=[];function ye(){if(n.preRun)for(typeof n.preRun=="function"&&(n.preRun=[n.preRun]);n.preRun.length;)Ze(n.preRun.shift());A(Q)}function Re(){A(he)}function Ie(){if(n.postRun)for(typeof n.postRun=="function"&&(n.postRun=[n.postRun]);n.postRun.length;)ie(n.postRun.shift());A(J)}function Ze(u){Q.unshift(u)}function mt(u){he.unshift(u)}function ie(u){J.unshift(u)}var me=0,Ce=null;function Se(u){var h;me++,(h=n.monitorRunDependencies)==null||h.call(n,me)}function Ve(u){var E;if(me--,(E=n.monitorRunDependencies)==null||E.call(n,me),me==0&&Ce){var h=Ce;Ce=null,h()}}function ze(u){var E;(E=n.onAbort)==null||E.call(n,u),u="Aborted("+u+")",R(u),D=!0,u+=". Build with -sASSERTIONS for more info.";var h=new WebAssembly.RuntimeError(u);throw s(h),h}var Je="data:application/octet-stream;base64,",Tt=u=>u.startsWith(Je),et=u=>u.startsWith("file://");function Rt(){if(n.locateFile){var u="manifold.wasm";return Tt(u)?u:v(u)}return new URL(""+new URL("manifold.wasm",import.meta.url).href,import.meta.url).href}var I;function Kt(u){if(u==I&&T)return new Uint8Array(T);if(g)return g(u);throw"both async and sync fetching of the wasm failed"}function st(u){return T?Promise.resolve().then(()=>Kt(u)):M(u).then(h=>new Uint8Array(h),()=>Kt(u))}function nt(u,h,E){return st(u).then(w=>WebAssembly.instantiate(w,h)).then(E,w=>{R(`failed to asynchronously prepare wasm: ${w}`),ze(w)})}function Ue(u,h,E,w){return!u&&typeof WebAssembly.instantiateStreaming=="function"&&!Tt(h)&&!et(h)&&!l&&typeof fetch=="function"?fetch(h,{credentials:"same-origin"}).then(V=>{var j=WebAssembly.instantiateStreaming(V,E);return j.then(w,function(oe){return R(`wasm streaming compile failed: ${oe}`),R("falling back to ArrayBuffer instantiation"),nt(h,E,w)})}):nt(h,E,w)}function Mt(){return{a:eh}}function Le(){var u=Mt();function h(w,V){return xn=w.exports,xn=th(xn),F=xn.J,ee(),wt=xn.M,mt(xn.K),Ve(),xn}Se();function E(w){h(w.instance)}if(n.instantiateWasm)try{return n.instantiateWasm(u,h)}catch(w){R(`Module.instantiateWasm callback failed with error: ${w}`),s(w)}return I||(I=Rt()),Ue(T,I,u,E).catch(s),{}}var A=u=>{for(;u.length>0;)u.shift()(n)};function x(u,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":return C[u>>>0];case"i8":return C[u>>>0];case"i16":return b[u>>>1>>>0];case"i32":return L[u>>>2>>>0];case"i64":ze("to do getValue(i64) use WASM_BIGINT");case"float":return X[u>>>2>>>0];case"double":return K[u>>>3>>>0];case"*":return G[u>>>2>>>0];default:ze(`invalid type for getValue: ${h}`)}}n.noExitRuntime;function W(u,h,E="i8"){switch(E.endsWith("*")&&(E="*"),E){case"i1":C[u>>>0]=h;break;case"i8":C[u>>>0]=h;break;case"i16":b[u>>>1>>>0]=h;break;case"i32":L[u>>>2>>>0]=h;break;case"i64":ze("to do setValue(i64) use WASM_BIGINT");case"float":X[u>>>2>>>0]=h;break;case"double":K[u>>>3>>>0]=h;break;case"*":G[u>>>2>>>0]=h;break;default:ze(`invalid type for setValue: ${E}`)}}class se{constructor(h){this.excPtr=h,this.ptr=h-24}set_type(h){G[this.ptr+4>>>2>>>0]=h}get_type(){return G[this.ptr+4>>>2>>>0]}set_destructor(h){G[this.ptr+8>>>2>>>0]=h}get_destructor(){return G[this.ptr+8>>>2>>>0]}set_caught(h){h=h?1:0,C[this.ptr+12>>>0]=h}get_caught(){return C[this.ptr+12>>>0]!=0}set_rethrown(h){h=h?1:0,C[this.ptr+13>>>0]=h}get_rethrown(){return C[this.ptr+13>>>0]!=0}init(h,E){this.set_adjusted_ptr(0),this.set_type(h),this.set_destructor(E)}set_adjusted_ptr(h){G[this.ptr+16>>>2>>>0]=h}get_adjusted_ptr(){return G[this.ptr+16>>>2>>>0]}get_exception_ptr(){var h=Xa(this.get_type());if(h)return G[this.excPtr>>>2>>>0];var E=this.get_adjusted_ptr();return E!==0?E:this.excPtr}}var ce=0;function ne(u,h,E){u>>>=0,h>>>=0,E>>>=0;var w=new se(u);throw w.init(h,E),ce=u,ce}var De=()=>{ze("")},ge={},be=u=>{for(;u.length;){var h=u.pop(),E=u.pop();E(h)}};function Qe(u){return this.fromWireType(G[u>>>2>>>0])}var fe={},Te={},Ne={},He,Ae=u=>{throw new He(u)},$e=(u,h,E)=>{u.forEach(function(Z){Ne[Z]=h});function w(Z){var le=E(Z);le.length!==u.length&&Ae("Mismatched type converter count");for(var de=0;de<u.length;++de)Be(u[de],le[de])}var V=new Array(h.length),j=[],oe=0;h.forEach((Z,le)=>{Te.hasOwnProperty(Z)?V[le]=Te[Z]:(j.push(Z),fe.hasOwnProperty(Z)||(fe[Z]=[]),fe[Z].push(()=>{V[le]=Te[Z],++oe,oe===j.length&&w(V)}))}),j.length===0&&w(V)},Ye=function(u){u>>>=0;var h=ge[u];delete ge[u];var E=h.rawConstructor,w=h.rawDestructor,V=h.fields,j=V.map(oe=>oe.getterReturnType).concat(V.map(oe=>oe.setterArgumentType));$e([u],j,oe=>{var Z={};return V.forEach((le,de)=>{var _e=le.fieldName,We=oe[de],ht=le.getter,Ut=le.getterContext,Pt=oe[de+V.length],Mn=le.setter,yn=le.setterContext;Z[_e]={read:U=>We.fromWireType(ht(Ut,U)),write:(U,k)=>{var te=[];Mn(yn,U,Pt.toWireType(te,k)),be(te)}}}),[{name:h.name,fromWireType:le=>{var de={};for(var _e in Z)de[_e]=Z[_e].read(le);return w(le),de},toWireType:(le,de)=>{for(var _e in Z)if(!(_e in de))throw new TypeError(`Missing field: "${_e}"`);var We=E();for(_e in Z)Z[_e].write(We,de[_e]);return le!==null&&le.push(w,We),We},argPackAdvance:lt,readValueFromPointer:Qe,destructorFunction:w}]})};function _t(u,h,E,w,V){}var O=()=>{for(var u=new Array(256),h=0;h<256;++h)u[h]=String.fromCharCode(h);ve=u},ve,q=u=>{for(var h="",E=u;N[E>>>0];)h+=ve[N[E++>>>0]];return h},re,ae=u=>{throw new re(u)};function Ee(u,h,E={}){var w=h.name;if(u||ae(`type "${w}" must have a positive integer typeid pointer`),Te.hasOwnProperty(u)){if(E.ignoreDuplicateRegistrations)return;ae(`Cannot register type '${w}' twice`)}if(Te[u]=h,delete Ne[u],fe.hasOwnProperty(u)){var V=fe[u];delete fe[u],V.forEach(j=>j())}}function Be(u,h,E={}){if(!("argPackAdvance"in h))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Ee(u,h,E)}var lt=8;function Ht(u,h,E,w){u>>>=0,h>>>=0,h=q(h),Be(u,{name:h,fromWireType:function(V){return!!V},toWireType:function(V,j){return j?E:w},argPackAdvance:lt,readValueFromPointer:function(V){return this.fromWireType(N[V>>>0])},destructorFunction:null})}var pt=u=>({count:u.count,deleteScheduled:u.deleteScheduled,preservePointerOnDelete:u.preservePointerOnDelete,ptr:u.ptr,ptrType:u.ptrType,smartPtr:u.smartPtr,smartPtrType:u.smartPtrType}),Zt=u=>{function h(E){return E.$$.ptrType.registeredClass.name}ae(h(u)+" instance already deleted")},cn=!1,gr=u=>{},Wr=u=>{u.smartPtr?u.smartPtrType.rawDestructor(u.smartPtr):u.ptrType.registeredClass.rawDestructor(u.ptr)},Dn=u=>{u.count.value-=1;var h=u.count.value===0;h&&Wr(u)},Ii=(u,h,E)=>{if(h===E)return u;if(E.baseClass===void 0)return null;var w=Ii(u,h,E.baseClass);return w===null?null:E.downcast(w)},vr={},Xr=()=>Object.keys(pi).length,Ui=()=>{var u=[];for(var h in pi)pi.hasOwnProperty(h)&&u.push(pi[h]);return u},Zn=[],Jn=()=>{for(;Zn.length;){var u=Zn.pop();u.$$.deleteScheduled=!1,u.delete()}},Qn,$r=u=>{Qn=u,Zn.length&&Qn&&Qn(Jn)},Vs=()=>{n.getInheritedInstanceCount=Xr,n.getLiveInheritedInstances=Ui,n.flushPendingDeletes=Jn,n.setDelayFunction=$r},pi={},Hs=(u,h)=>{for(h===void 0&&ae("ptr should not be undefined");u.baseClass;)h=u.upcast(h),u=u.baseClass;return h},ks=(u,h)=>(h=Hs(u,h),pi[h]),Ni=(u,h)=>{(!h.ptrType||!h.ptr)&&Ae("makeClassHandle requires ptr and ptrType");var E=!!h.smartPtrType,w=!!h.smartPtr;return E!==w&&Ae("Both smartPtrType and smartPtr must be specified"),h.count={value:1},y(Object.create(u,{$$:{value:h,writable:!0}}))};function Gs(u){var h=this.getPointee(u);if(!h)return this.destructor(u),null;var E=ks(this.registeredClass,h);if(E!==void 0){if(E.$$.count.value===0)return E.$$.ptr=h,E.$$.smartPtr=u,E.clone();var w=E.clone();return this.destructor(u),w}function V(){return this.isSmartPointer?Ni(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:h,smartPtrType:this,smartPtr:u}):Ni(this.registeredClass.instancePrototype,{ptrType:this,ptr:u})}var j=this.registeredClass.getActualType(h),oe=vr[j];if(!oe)return V.call(this);var Z;this.isConst?Z=oe.constPointerType:Z=oe.pointerType;var le=Ii(h,this.registeredClass,Z.registeredClass);return le===null?V.call(this):this.isSmartPointer?Ni(Z.registeredClass.instancePrototype,{ptrType:Z,ptr:le,smartPtrType:this,smartPtr:u}):Ni(Z.registeredClass.instancePrototype,{ptrType:Z,ptr:le})}var y=u=>typeof FinalizationRegistry>"u"?(y=h=>h,u):(cn=new FinalizationRegistry(h=>{Dn(h.$$)}),y=h=>{var E=h.$$,w=!!E.smartPtr;if(w){var V={$$:E};cn.register(h,V,h)}return h},gr=h=>cn.unregister(h),y(u)),B=()=>{Object.assign($.prototype,{isAliasOf(u){if(!(this instanceof $)||!(u instanceof $))return!1;var h=this.$$.ptrType.registeredClass,E=this.$$.ptr;u.$$=u.$$;for(var w=u.$$.ptrType.registeredClass,V=u.$$.ptr;h.baseClass;)E=h.upcast(E),h=h.baseClass;for(;w.baseClass;)V=w.upcast(V),w=w.baseClass;return h===w&&E===V},clone(){if(this.$$.ptr||Zt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var u=y(Object.create(Object.getPrototypeOf(this),{$$:{value:pt(this.$$)}}));return u.$$.count.value+=1,u.$$.deleteScheduled=!1,u},delete(){this.$$.ptr||Zt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ae("Object already scheduled for deletion"),gr(this),Dn(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Zt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ae("Object already scheduled for deletion"),Zn.push(this),Zn.length===1&&Qn&&Qn(Jn),this.$$.deleteScheduled=!0,this}})};function $(){}var Y=(u,h)=>Object.defineProperty(h,"name",{value:u}),z=(u,h,E)=>{if(u[h].overloadTable===void 0){var w=u[h];u[h]=function(...V){return u[h].overloadTable.hasOwnProperty(V.length)||ae(`Function '${E}' called with an invalid number of arguments (${V.length}) - expects one of (${u[h].overloadTable})!`),u[h].overloadTable[V.length].apply(this,V)},u[h].overloadTable=[],u[h].overloadTable[w.argCount]=w}},ue=(u,h,E)=>{n.hasOwnProperty(u)?((E===void 0||n[u].overloadTable!==void 0&&n[u].overloadTable[E]!==void 0)&&ae(`Cannot register public name '${u}' twice`),z(n,u,u),n.hasOwnProperty(E)&&ae(`Cannot register multiple overloads of a function with the same number of arguments (${E})!`),n[u].overloadTable[E]=h):(n[u]=h,E!==void 0&&(n[u].numArguments=E))},Me=48,we=57,Pe=u=>{if(u===void 0)return"_unknown";u=u.replace(/[^a-zA-Z0-9_]/g,"$");var h=u.charCodeAt(0);return h>=Me&&h<=we?`_${u}`:u};function Ge(u,h,E,w,V,j,oe,Z){this.name=u,this.constructor=h,this.instancePrototype=E,this.rawDestructor=w,this.baseClass=V,this.getActualType=j,this.upcast=oe,this.downcast=Z,this.pureVirtualFunctions=[]}var ke=(u,h,E)=>{for(;h!==E;)h.upcast||ae(`Expected null or instance of ${E.name}, got an instance of ${h.name}`),u=h.upcast(u),h=h.baseClass;return u};function Fe(u,h){if(h===null)return this.isReference&&ae(`null is not a valid ${this.name}`),0;h.$$||ae(`Cannot pass "${Ys(h)}" as a ${this.name}`),h.$$.ptr||ae(`Cannot pass deleted object as a pointer of type ${this.name}`);var E=h.$$.ptrType.registeredClass,w=ke(h.$$.ptr,E,this.registeredClass);return w}function ot(u,h){var E;if(h===null)return this.isReference&&ae(`null is not a valid ${this.name}`),this.isSmartPointer?(E=this.rawConstructor(),u!==null&&u.push(this.rawDestructor,E),E):0;(!h||!h.$$)&&ae(`Cannot pass "${Ys(h)}" as a ${this.name}`),h.$$.ptr||ae(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&h.$$.ptrType.isConst&&ae(`Cannot convert argument of type ${h.$$.smartPtrType?h.$$.smartPtrType.name:h.$$.ptrType.name} to parameter type ${this.name}`);var w=h.$$.ptrType.registeredClass;if(E=ke(h.$$.ptr,w,this.registeredClass),this.isSmartPointer)switch(h.$$.smartPtr===void 0&&ae("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:h.$$.smartPtrType===this?E=h.$$.smartPtr:ae(`Cannot convert argument of type ${h.$$.smartPtrType?h.$$.smartPtrType.name:h.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:E=h.$$.smartPtr;break;case 2:if(h.$$.smartPtrType===this)E=h.$$.smartPtr;else{var V=h.clone();E=this.rawShare(E,Gt.toHandle(()=>V.delete())),u!==null&&u.push(this.rawDestructor,E)}break;default:ae("Unsupporting sharing policy")}return E}function ut(u,h){if(h===null)return this.isReference&&ae(`null is not a valid ${this.name}`),0;h.$$||ae(`Cannot pass "${Ys(h)}" as a ${this.name}`),h.$$.ptr||ae(`Cannot pass deleted object as a pointer of type ${this.name}`),h.$$.ptrType.isConst&&ae(`Cannot convert argument of type ${h.$$.ptrType.name} to parameter type ${this.name}`);var E=h.$$.ptrType.registeredClass,w=ke(h.$$.ptr,E,this.registeredClass);return w}var Ct=()=>{Object.assign(yt.prototype,{getPointee(u){return this.rawGetPointee&&(u=this.rawGetPointee(u)),u},destructor(u){var h;(h=this.rawDestructor)==null||h.call(this,u)},argPackAdvance:lt,readValueFromPointer:Qe,fromWireType:Gs})};function yt(u,h,E,w,V,j,oe,Z,le,de,_e){this.name=u,this.registeredClass=h,this.isReference=E,this.isConst=w,this.isSmartPointer=V,this.pointeeType=j,this.sharingPolicy=oe,this.rawGetPointee=Z,this.rawConstructor=le,this.rawShare=de,this.rawDestructor=_e,!V&&h.baseClass===void 0?w?(this.toWireType=Fe,this.destructorFunction=null):(this.toWireType=ut,this.destructorFunction=null):this.toWireType=ot}var at=(u,h,E)=>{n.hasOwnProperty(u)||Ae("Replacing nonexistent public symbol"),n[u].overloadTable!==void 0&&E!==void 0?n[u].overloadTable[E]=h:(n[u]=h,n[u].argCount=E)},Oe=(u,h,E)=>{u=u.replace(/p/g,"i");var w=n["dynCall_"+u];return w(h,...E)},wt,ct=u=>wt.get(u),ln=(u,h,E=[])=>{if(u.includes("j"))return Oe(u,h,E);var w=ct(h)(...E);return u[0]=="p"?w>>>0:w},Fn=(u,h)=>(...E)=>ln(u,h,E),bt=(u,h)=>{u=q(u);function E(){return u.includes("j")||u.includes("p")?Fn(u,h):ct(h)}var w=E();return typeof w!="function"&&ae(`unknown function pointer with signature ${u}: ${h}`),w},mi=(u,h)=>{var E=Y(h,function(w){this.name=h,this.message=w;var V=new Error(w).stack;V!==void 0&&(this.stack=this.toString()+`
`+V.replace(/^Error(:[^\n]*)?\n/,""))});return E.prototype=Object.create(u.prototype),E.prototype.constructor=E,E.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},E},St,Jt=u=>{var h=Wa(u),E=q(h);return Bn(h),E},$t=(u,h)=>{var E=[],w={};function V(j){if(!w[j]&&!Te[j]){if(Ne[j]){Ne[j].forEach(V);return}E.push(j),w[j]=!0}}throw h.forEach(V),new St(`${u}: `+E.map(Jt).join([", "]))};function Yt(u,h,E,w,V,j,oe,Z,le,de,_e,We,ht){u>>>=0,h>>>=0,E>>>=0,w>>>=0,V>>>=0,j>>>=0,oe>>>=0,Z>>>=0,le>>>=0,de>>>=0,_e>>>=0,We>>>=0,ht>>>=0,_e=q(_e),j=bt(V,j),Z&&(Z=bt(oe,Z)),de&&(de=bt(le,de)),ht=bt(We,ht);var Ut=Pe(_e);ue(Ut,function(){$t(`Cannot construct ${_e} due to unbound types`,[w])}),$e([u,h,E],w?[w]:[],Pt=>{var Nt;Pt=Pt[0];var Mn,yn;w?(Mn=Pt.registeredClass,yn=Mn.instancePrototype):yn=$.prototype;var U=Y(_e,function(...rn){if(Object.getPrototypeOf(this)!==k)throw new re("Use 'new' to construct "+_e);if(te.constructor_body===void 0)throw new re(_e+" has no accessible constructor");var Lt=te.constructor_body[rn.length];if(Lt===void 0)throw new re(`Tried to invoke ctor of ${_e} with invalid number of parameters (${rn.length}) - expected (${Object.keys(te.constructor_body).toString()}) parameters instead!`);return Lt.apply(this,rn)}),k=Object.create(yn,{constructor:{value:U}});U.prototype=k;var te=new Ge(_e,U,k,ht,Mn,j,Z,de);te.baseClass&&((Nt=te.baseClass).__derivedClasses??(Nt.__derivedClasses=[]),te.baseClass.__derivedClasses.push(te));var pe=new yt(_e,te,!0,!1,!1),Xe=new yt(_e+"*",te,!1,!1,!1),Et=new yt(_e+" const*",te,!1,!0,!1);return vr[u]={pointerType:Xe,constPointerType:Et},at(Ut,U),[pe,Xe,Et]})}var kt=(u,h)=>{for(var E=[],w=0;w<u;w++)E.push(G[h+w*4>>>2>>>0]);return E};function Fi(u){for(var h=1;h<u.length;++h)if(u[h]!==null&&u[h].destructorFunction===void 0)return!0;return!1}function Ln(u,h){if(!(u instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof u} which is not a function`);var E=Y(u.name||"unknownFunctionName",function(){});E.prototype=u.prototype;var w=new E,V=u.apply(w,h);return V instanceof Object?V:w}function Jl(u,h,E,w){for(var V=Fi(u),j=u.length,oe="",Z="",le=0;le<j-2;++le)oe+=(le!==0?", ":"")+"arg"+le,Z+=(le!==0?", ":"")+"arg"+le+"Wired";var de=`
        return function (${oe}) {
        if (arguments.length !== ${j-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${j-2}');
        }`;V&&(de+=`var destructors = [];
`);var _e=V?"destructors":"null",We=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];h&&(de+="var thisWired = classParam['toWireType']("+_e+`, this);
`);for(var le=0;le<j-2;++le)de+="var arg"+le+"Wired = argType"+le+"['toWireType']("+_e+", arg"+le+`);
`,We.push("argType"+le);if(h&&(Z="thisWired"+(Z.length>0?", ":"")+Z),de+=(E||w?"var rv = ":"")+"invoker(fn"+(Z.length>0?", ":"")+Z+`);
`,V)de+=`runDestructors(destructors);
`;else for(var le=h?1:2;le<u.length;++le){var ht=le===1?"thisWired":"arg"+(le-2)+"Wired";u[le].destructorFunction!==null&&(de+=`${ht}_dtor(${ht});
`,We.push(`${ht}_dtor`))}return E&&(de+=`var ret = retType['fromWireType'](rv);
return ret;
`),de+=`}
`,[We,de]}function Ws(u,h,E,w,V,j){var oe=h.length;oe<2&&ae("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Z=h[1]!==null&&E!==null,le=Fi(h),de=h[0].name!=="void",_e=[u,ae,w,V,be,h[0],h[1]],We=0;We<oe-2;++We)_e.push(h[We+2]);if(!le)for(var We=Z?1:2;We<h.length;++We)h[We].destructorFunction!==null&&_e.push(h[We].destructorFunction);let[ht,Ut]=Jl(h,Z,de,j);ht.push(Ut);var Pt=Ln(Function,ht)(..._e);return Y(u,Pt)}var Ql=function(u,h,E,w,V,j){u>>>=0,E>>>=0,w>>>=0,V>>>=0,j>>>=0;var oe=kt(h,E);V=bt(w,V),$e([],[u],Z=>{Z=Z[0];var le=`constructor ${Z.name}`;if(Z.registeredClass.constructor_body===void 0&&(Z.registeredClass.constructor_body=[]),Z.registeredClass.constructor_body[h-1]!==void 0)throw new re(`Cannot register multiple constructors with identical number of parameters (${h-1}) for class '${Z.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Z.registeredClass.constructor_body[h-1]=()=>{$t(`Cannot construct ${Z.name} due to unbound types`,oe)},$e([],oe,de=>(de.splice(1,0,null),Z.registeredClass.constructor_body[h-1]=Ws(le,de,null,V,j),[])),[]})},Oa=u=>{u=u.trim();const h=u.indexOf("(");return h!==-1?u.substr(0,h):u},eu=function(u,h,E,w,V,j,oe,Z,le){u>>>=0,h>>>=0,w>>>=0,V>>>=0,j>>>=0,oe>>>=0;var de=kt(E,w);h=q(h),h=Oa(h),j=bt(V,j),$e([],[u],_e=>{_e=_e[0];var We=`${_e.name}.${h}`;h.startsWith("@@")&&(h=Symbol[h.substring(2)]),Z&&_e.registeredClass.pureVirtualFunctions.push(h);function ht(){$t(`Cannot call ${We} due to unbound types`,de)}var Ut=_e.registeredClass.instancePrototype,Pt=Ut[h];return Pt===void 0||Pt.overloadTable===void 0&&Pt.className!==_e.name&&Pt.argCount===E-2?(ht.argCount=E-2,ht.className=_e.name,Ut[h]=ht):(z(Ut,h,We),Ut[h].overloadTable[E-2]=ht),$e([],de,Mn=>{var yn=Ws(We,Mn,_e,j,oe,le);return Ut[h].overloadTable===void 0?(yn.argCount=E-2,Ut[h]=yn):Ut[h].overloadTable[E-2]=yn,[]}),[]})},Xs=[],On=[];function $s(u){u>>>=0,u>9&&--On[u+1]===0&&(On[u]=void 0,Xs.push(u))}var tu=()=>On.length/2-5-Xs.length,nu=()=>{On.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=tu},Gt={toValue:u=>(u||ae("Cannot use deleted val. handle = "+u),On[u]),toHandle:u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const h=Xs.pop()||On.length;return On[h]=u,On[h+1]=1,h}}}},iu={name:"emscripten::val",fromWireType:u=>{var h=Gt.toValue(u);return $s(u),h},toWireType:(u,h)=>Gt.toHandle(h),argPackAdvance:lt,readValueFromPointer:Qe,destructorFunction:null};function Ba(u){return u>>>=0,Be(u,iu)}var ru=(u,h,E)=>{switch(h){case 1:return E?function(w){return this.fromWireType(C[w>>>0])}:function(w){return this.fromWireType(N[w>>>0])};case 2:return E?function(w){return this.fromWireType(b[w>>>1>>>0])}:function(w){return this.fromWireType(S[w>>>1>>>0])};case 4:return E?function(w){return this.fromWireType(L[w>>>2>>>0])}:function(w){return this.fromWireType(G[w>>>2>>>0])};default:throw new TypeError(`invalid integer width (${h}): ${u}`)}};function su(u,h,E,w){u>>>=0,h>>>=0,E>>>=0,h=q(h);function V(){}V.values={},Be(u,{name:h,constructor:V,fromWireType:function(j){return this.constructor.values[j]},toWireType:(j,oe)=>oe.value,argPackAdvance:lt,readValueFromPointer:ru(h,E,w),destructorFunction:null}),ue(h,V)}var Yr=(u,h)=>{var E=Te[u];return E===void 0&&ae(`${h} has unknown type ${Jt(u)}`),E};function ou(u,h,E){u>>>=0,h>>>=0;var w=Yr(u,"enum");h=q(h);var V=w.constructor,j=Object.create(w.constructor.prototype,{value:{value:E},constructor:{value:Y(`${w.name}_${h}`,function(){})}});V.values[E]=j,V[h]=j}var Ys=u=>{if(u===null)return"null";var h=typeof u;return h==="object"||h==="array"||h==="function"?u.toString():""+u},au=(u,h)=>{switch(h){case 4:return function(E){return this.fromWireType(X[E>>>2>>>0])};case 8:return function(E){return this.fromWireType(K[E>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${u}`)}},cu=function(u,h,E){u>>>=0,h>>>=0,E>>>=0,h=q(h),Be(u,{name:h,fromWireType:w=>w,toWireType:(w,V)=>V,argPackAdvance:lt,readValueFromPointer:au(h,E),destructorFunction:null})};function lu(u,h,E,w,V,j,oe){u>>>=0,E>>>=0,w>>>=0,V>>>=0,j>>>=0;var Z=kt(h,E);u=q(u),u=Oa(u),V=bt(w,V),ue(u,function(){$t(`Cannot call ${u} due to unbound types`,Z)},h-1),$e([],Z,le=>{var de=[le[0],null].concat(le.slice(1));return at(u,Ws(u,de,null,V,j,oe),h-1),[]})}var uu=(u,h,E)=>{switch(h){case 1:return E?w=>C[w>>>0]:w=>N[w>>>0];case 2:return E?w=>b[w>>>1>>>0]:w=>S[w>>>1>>>0];case 4:return E?w=>L[w>>>2>>>0]:w=>G[w>>>2>>>0];default:throw new TypeError(`invalid integer width (${h}): ${u}`)}};function hu(u,h,E,w,V){u>>>=0,h>>>=0,E>>>=0,h=q(h);var j=_e=>_e;if(w===0){var oe=32-8*E;j=_e=>_e<<oe>>>oe}var Z=h.includes("unsigned"),le=(_e,We)=>{},de;Z?de=function(_e,We){return le(We,this.name),We>>>0}:de=function(_e,We){return le(We,this.name),We},Be(u,{name:h,fromWireType:j,toWireType:de,argPackAdvance:lt,readValueFromPointer:uu(h,E,w!==0),destructorFunction:null})}function fu(u,h,E){u>>>=0,E>>>=0;var w=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],V=w[h];function j(oe){var Z=G[oe>>>2>>>0],le=G[oe+4>>>2>>>0];return new V(C.buffer,le,Z)}E=q(E),Be(u,{name:E,fromWireType:j,argPackAdvance:lt,readValueFromPointer:j},{ignoreDuplicateRegistrations:!0})}function du(u,h){u>>>=0,Ba(u)}var pu=(u,h,E,w)=>{if(E>>>=0,!(w>0))return 0;for(var V=E,j=E+w-1,oe=0;oe<u.length;++oe){var Z=u.charCodeAt(oe);if(Z>=55296&&Z<=57343){var le=u.charCodeAt(++oe);Z=65536+((Z&1023)<<10)|le&1023}if(Z<=127){if(E>=j)break;h[E++>>>0]=Z}else if(Z<=2047){if(E+1>=j)break;h[E++>>>0]=192|Z>>6,h[E++>>>0]=128|Z&63}else if(Z<=65535){if(E+2>=j)break;h[E++>>>0]=224|Z>>12,h[E++>>>0]=128|Z>>6&63,h[E++>>>0]=128|Z&63}else{if(E+3>=j)break;h[E++>>>0]=240|Z>>18,h[E++>>>0]=128|Z>>12&63,h[E++>>>0]=128|Z>>6&63,h[E++>>>0]=128|Z&63}}return h[E>>>0]=0,E-V},mu=(u,h,E)=>pu(u,N,h,E),_u=u=>{for(var h=0,E=0;E<u.length;++E){var w=u.charCodeAt(E);w<=127?h++:w<=2047?h+=2:w>=55296&&w<=57343?(h+=4,++E):h+=3}return h},za=typeof TextDecoder<"u"?new TextDecoder:void 0,gu=(u,h,E)=>{h>>>=0;for(var w=h+E,V=h;u[V]&&!(V>=w);)++V;if(V-h>16&&u.buffer&&za)return za.decode(u.subarray(h,V));for(var j="";h<V;){var oe=u[h++];if(!(oe&128)){j+=String.fromCharCode(oe);continue}var Z=u[h++]&63;if((oe&224)==192){j+=String.fromCharCode((oe&31)<<6|Z);continue}var le=u[h++]&63;if((oe&240)==224?oe=(oe&15)<<12|Z<<6|le:oe=(oe&7)<<18|Z<<12|le<<6|u[h++]&63,oe<65536)j+=String.fromCharCode(oe);else{var de=oe-65536;j+=String.fromCharCode(55296|de>>10,56320|de&1023)}}return j},vu=(u,h)=>(u>>>=0,u?gu(N,u,h):"");function xu(u,h){u>>>=0,h>>>=0,h=q(h);var E=h==="std::string";Be(u,{name:h,fromWireType(w){var V=G[w>>>2>>>0],j=w+4,oe;if(E)for(var Z=j,le=0;le<=V;++le){var de=j+le;if(le==V||N[de>>>0]==0){var _e=de-Z,We=vu(Z,_e);oe===void 0?oe=We:(oe+="\0",oe+=We),Z=de+1}}else{for(var ht=new Array(V),le=0;le<V;++le)ht[le]=String.fromCharCode(N[j+le>>>0]);oe=ht.join("")}return Bn(w),oe},toWireType(w,V){V instanceof ArrayBuffer&&(V=new Uint8Array(V));var j,oe=typeof V=="string";oe||V instanceof Uint8Array||V instanceof Uint8ClampedArray||V instanceof Int8Array||ae("Cannot pass non-string to std::string"),E&&oe?j=_u(V):j=V.length;var Z=Zs(4+j+1),le=Z+4;if(G[Z>>>2>>>0]=j,E&&oe)mu(V,le,j+1);else if(oe)for(var de=0;de<j;++de){var _e=V.charCodeAt(de);_e>255&&(Bn(le),ae("String has UTF-16 code units that do not fit in 8 bits")),N[le+de>>>0]=_e}else for(var de=0;de<j;++de)N[le+de>>>0]=V[de];return w!==null&&w.push(Bn,Z),Z},argPackAdvance:lt,readValueFromPointer:Qe,destructorFunction(w){Bn(w)}})}var Va=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Mu=(u,h)=>{for(var E=u,w=E>>1,V=w+h/2;!(w>=V)&&S[w>>>0];)++w;if(E=w<<1,E-u>32&&Va)return Va.decode(N.subarray(u>>>0,E>>>0));for(var j="",oe=0;!(oe>=h/2);++oe){var Z=b[u+oe*2>>>1>>>0];if(Z==0)break;j+=String.fromCharCode(Z)}return j},yu=(u,h,E)=>{if(E??(E=2147483647),E<2)return 0;E-=2;for(var w=h,V=E<u.length*2?E/2:u.length,j=0;j<V;++j){var oe=u.charCodeAt(j);b[h>>>1>>>0]=oe,h+=2}return b[h>>>1>>>0]=0,h-w},Su=u=>u.length*2,Eu=(u,h)=>{for(var E=0,w="";!(E>=h/4);){var V=L[u+E*4>>>2>>>0];if(V==0)break;if(++E,V>=65536){var j=V-65536;w+=String.fromCharCode(55296|j>>10,56320|j&1023)}else w+=String.fromCharCode(V)}return w},Tu=(u,h,E)=>{if(h>>>=0,E??(E=2147483647),E<4)return 0;for(var w=h,V=w+E-4,j=0;j<u.length;++j){var oe=u.charCodeAt(j);if(oe>=55296&&oe<=57343){var Z=u.charCodeAt(++j);oe=65536+((oe&1023)<<10)|Z&1023}if(L[h>>>2>>>0]=oe,h+=4,h+4>V)break}return L[h>>>2>>>0]=0,h-w},bu=u=>{for(var h=0,E=0;E<u.length;++E){var w=u.charCodeAt(E);w>=55296&&w<=57343&&++E,h+=4}return h},Au=function(u,h,E){u>>>=0,h>>>=0,E>>>=0,E=q(E);var w,V,j,oe;h===2?(w=Mu,V=yu,oe=Su,j=Z=>S[Z>>>1>>>0]):h===4&&(w=Eu,V=Tu,oe=bu,j=Z=>G[Z>>>2>>>0]),Be(u,{name:E,fromWireType:Z=>{for(var le=G[Z>>>2>>>0],de,_e=Z+4,We=0;We<=le;++We){var ht=Z+4+We*h;if(We==le||j(ht)==0){var Ut=ht-_e,Pt=w(_e,Ut);de===void 0?de=Pt:(de+="\0",de+=Pt),_e=ht+h}}return Bn(Z),de},toWireType:(Z,le)=>{typeof le!="string"&&ae(`Cannot pass non-string to C++ string type ${E}`);var de=oe(le),_e=Zs(4+de+h);return G[_e>>>2>>>0]=de/h,V(le,_e+4,de+h),Z!==null&&Z.push(Bn,_e),_e},argPackAdvance:lt,readValueFromPointer:Qe,destructorFunction(Z){Bn(Z)}})};function wu(u,h,E,w,V,j){u>>>=0,h>>>=0,E>>>=0,w>>>=0,V>>>=0,j>>>=0,ge[u]={name:q(h),rawConstructor:bt(E,w),rawDestructor:bt(V,j),fields:[]}}function Ru(u,h,E,w,V,j,oe,Z,le,de){u>>>=0,h>>>=0,E>>>=0,w>>>=0,V>>>=0,j>>>=0,oe>>>=0,Z>>>=0,le>>>=0,de>>>=0,ge[u].fields.push({fieldName:q(h),getterReturnType:E,getter:bt(w,V),getterContext:j,setterArgumentType:oe,setter:bt(Z,le),setterContext:de})}var Cu=function(u,h){u>>>=0,h>>>=0,h=q(h),Be(u,{isVoid:!0,name:h,argPackAdvance:0,fromWireType:()=>{},toWireType:(E,w)=>{}})};function Pu(u,h,E){return u>>>=0,h>>>=0,E>>>=0,N.copyWithin(u>>>0,h>>>0,h+E>>>0)}var Ha=(u,h,E)=>{var w=[],V=u.toWireType(w,E);return w.length&&(G[h>>>2>>>0]=Gt.toHandle(w)),V};function Du(u,h,E){return u>>>=0,h>>>=0,E>>>=0,u=Gt.toValue(u),h=Yr(h,"emval::as"),Ha(h,E,u)}var Lu={},ka=u=>{var h=Lu[u];return h===void 0?q(u):h},qs=[];function Iu(u,h,E,w,V){return u>>>=0,h>>>=0,E>>>=0,w>>>=0,V>>>=0,u=qs[u],h=Gt.toValue(h),E=ka(E),u(h,h[E],w,V)}function Uu(u,h){return u>>>=0,h>>>=0,u=Gt.toValue(u),h=Gt.toValue(h),u==h}var Nu=u=>{var h=qs.length;return qs.push(u),h},Fu=(u,h)=>{for(var E=new Array(u),w=0;w<u;++w)E[w]=Yr(G[h+w*4>>>2>>>0],"parameter "+w);return E};function Ou(u,h,E){h>>>=0;var w=Fu(u,h),V=w.shift();u--;var j=`return function (obj, func, destructorsRef, args) {
`,oe=0,Z=[];E===0&&Z.push("obj");for(var le=["retType"],de=[V],_e=0;_e<u;++_e)Z.push("arg"+_e),le.push("argType"+_e),de.push(w[_e]),j+=`  var arg${_e} = argType${_e}.readValueFromPointer(args${oe?"+"+oe:""});
`,oe+=w[_e].argPackAdvance;var We=E===1?"new func":"func.call";j+=`  var rv = ${We}(${Z.join(", ")});
`,V.isVoid||(le.push("emval_returnValue"),de.push(Ha),j+=`  return emval_returnValue(retType, destructorsRef, rv);
`),j+=`};
`,le.push(j);var ht=Ln(Function,le)(...de),Ut=`methodCaller<(${w.map(Pt=>Pt.name).join(", ")}) => ${V.name}>`;return Nu(Y(Ut,ht))}function Bu(u,h){return u>>>=0,h>>>=0,u=Gt.toValue(u),h=Gt.toValue(h),Gt.toHandle(u[h])}function zu(u){u>>>=0,u>9&&(On[u+1]+=1)}function Vu(u){return u>>>=0,Gt.toHandle(ka(u))}function Hu(){return Gt.toHandle({})}function ku(u){u>>>=0;var h=Gt.toValue(u);be(h),$s(u)}function Gu(u,h,E){u>>>=0,h>>>=0,E>>>=0,u=Gt.toValue(u),h=Gt.toValue(h),E=Gt.toValue(E),u[h]=E}function Wu(u,h){u>>>=0,h>>>=0,u=Yr(u,"_emval_take_value");var E=u.readValueFromPointer(h);return Gt.toHandle(E)}var Xu=()=>4294901760,$u=u=>{var h=F.buffer,E=(u-h.byteLength+65535)/65536;try{return F.grow(E),ee(),1}catch{}};function Yu(u){u>>>=0;var h=N.length,E=Xu();if(u>E)return!1;for(var w=(le,de)=>le+(de-le%de)%de,V=1;V<=4;V*=2){var j=h*(1+.2/V);j=Math.min(j,u+100663296);var oe=Math.min(E,w(Math.max(u,j),65536)),Z=$u(oe);if(Z)return!0}return!1}var Ga=(u,h)=>{u<128?h.push(u):h.push(u%128|128,u>>7)},qu=u=>{for(var h={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},E={parameters:[],results:u[0]=="v"?[]:[h[u[0]]]},w=1;w<u.length;++w)E.parameters.push(h[u[w]]);return E},ju=(u,h)=>{var E=u.slice(0,1),w=u.slice(1),V={i:127,p:127,j:126,f:125,d:124,e:111};h.push(96),Ga(w.length,h);for(var j=0;j<w.length;++j)h.push(V[w[j]]);E=="v"?h.push(0):h.push(1,V[E])},Ku=(u,h)=>{if(typeof WebAssembly.Function=="function")return new WebAssembly.Function(qu(h),u);var E=[1];ju(h,E);var w=[0,97,115,109,1,0,0,0,1];Ga(E.length,w),w.push(...E),w.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var V=new WebAssembly.Module(new Uint8Array(w)),j=new WebAssembly.Instance(V,{e:{f:u}}),oe=j.exports.f;return oe},Zu=(u,h)=>{if(_i)for(var E=u;E<u+h;E++){var w=ct(E);w&&_i.set(w,E)}},_i,Ju=u=>(_i||(_i=new WeakMap,Zu(0,wt.length)),_i.get(u)||0),js=[],Qu=()=>{if(js.length)return js.pop();try{wt.grow(1)}catch(u){throw u instanceof RangeError?"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.":u}return wt.length-1},Ks=(u,h)=>wt.set(u,h),xr=(u,h)=>{var E=Ju(u);if(E)return E;var w=Qu();try{Ks(w,u)}catch(j){if(!(j instanceof TypeError))throw j;var V=Ku(u,h);Ks(w,V)}return _i.set(u,w),w},Mr=u=>{_i.delete(ct(u)),Ks(u,null),js.push(u)};He=n.InternalError=class extends Error{constructor(h){super(h),this.name="InternalError"}},O(),re=n.BindingError=class extends Error{constructor(h){super(h),this.name="BindingError"}},B(),Vs(),Ct(),St=n.UnboundTypeError=mi(Error,"UnboundTypeError"),nu();var eh={i:ne,D:De,n:Ye,C:_t,H:Ht,h:Yt,g:Ql,a:eu,G:Ba,t:su,f:ou,x:cu,c:lu,j:hu,e:fu,k:du,w:xu,s:Au,o:wu,l:Ru,I:Cu,F:Pu,v:Du,z:Iu,b:$s,m:Uu,y:Ou,B:Bu,u:zu,q:Vu,A:Hu,p:ku,r:Gu,d:Wu,E:Yu},xn=Le(),Wa=u=>(Wa=xn.L)(u),Zs=u=>(Zs=xn.N)(u),Bn=u=>(Bn=xn.O)(u),Xa=u=>(Xa=xn.P)(u);function th(u){u=Object.assign({},u);var h=w=>V=>w(V)>>>0,E=w=>()=>w()>>>0;return u.L=h(u.L),u.N=h(u.N),u._emscripten_stack_alloc=h(u._emscripten_stack_alloc),u.emscripten_stack_get_current=E(u.emscripten_stack_get_current),u}n.addFunction=xr,n.removeFunction=Mr;var qr;Ce=function u(){qr||$a(),qr||(Ce=u)};function $a(){if(me>0||(ye(),me>0))return;function u(){var h;qr||(qr=!0,n.calledRun=!0,!D&&(Re(),r(n),(h=n.onRuntimeInitialized)==null||h.call(n),Ie()))}n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),u()},1)):u()}if(n.preInit)for(typeof n.preInit=="function"&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return $a(),t=o,t}})();const Ev=""+new URL("manifold.wasm",import.meta.url).href,Lr={aluminium:2.7,steel:7.85,polymer:1.2};function Tv(i){const e={outer:[60,200],thickness:[4,30],bore:[8,80],pitch:[35,170],hole:[3,16],count:[3,12]};for(const[t,[n,r]]of Object.entries(e))if(!Number.isFinite(i[t])||i[t]<n||i[t]>r)throw Error(`${t} must be between ${n} and ${r}.`);if(!Number.isInteger(i.count))throw Error("Hole count must be a whole number.");if(i.pitch+i.hole>=i.outer-4)throw Error("Leave at least 2 mm between the holes and the outer edge.");if(i.bore+i.hole>=i.pitch-4)throw Error("Leave at least 2 mm between the centre bore and bolt holes.");if(i.pitch*Math.sin(Math.PI/i.count)<=i.hole+2)throw Error("Hole spacing must exceed the hole diameter by at least 2 mm.");if(!Lr[i.material])throw Error("Unknown material assumption.");return i}function Yl(i){return Array.from({length:i.count},(e,t)=>[i.pitch/2*Math.cos(t*2*Math.PI/i.count),i.pitch/2*Math.sin(t*2*Math.PI/i.count)])}function bv(i,e,t="flange"){Tv(e);let n;const r=[],s=o=>(r.push(o),o);try{n=s(t==="flange"?i.cylinder(e.thickness,e.outer/2,e.outer/2,96,!0):i.cube([e.outer,e.outer,e.thickness],!0));let o=s(i.cylinder(e.thickness+4,e.bore/2,e.bore/2,96,!0));n=s(n.subtract(o));for(const[c,l]of Yl(e)){const f=s(i.cylinder(e.thickness+4,e.hole/2,e.hole/2,48,!0)),p=s(f.translate([c,l,0]));n=s(n.subtract(p))}if(n.status()!=="NoError")throw Error("Geometry kernel rejected the current shape.");const a=n.getMesh();return{positions:new Float32Array(Array.from({length:a.numVert*3},(c,l)=>a.vertProperties[Math.floor(l/3)*a.numProp+l%3])),indices:new Uint32Array(a.triVerts),volume:n.volume(),triangles:n.numTri()}}finally{for(const o of r.reverse())o.delete()}}function ql(i,e,t=!1){const n=t?2:1,r=36,s=e.bore*.38,o=r+2*e.thickness,a=e.hole*.4,c=[{part:"Parametric component",spec:`${e.outer} × ${e.thickness}; bore ${e.bore}`,material:e.material,qty:n,unitMass:i.volume/1e3*Lr[e.material]}];return t&&(c.push({part:"Illustrative spacer",spec:`Ø${(a*2).toFixed(1)} × ${r}`,material:"steel",qty:e.count,unitMass:Math.PI*a**2*r/1e3*Lr.steel}),c.push({part:"Illustrative shaft",spec:`Ø${(s*2).toFixed(1)} × ${o}`,material:"steel",qty:1,unitMass:Math.PI*s**2*o/1e3*Lr.steel})),c.map(l=>({...l,totalMass:l.unitMass*l.qty}))}const vt=i=>document.getElementById(i),jl=vt("parameters");let Fr="component",Or="flange",Ir=!1,Cn,tn,bn,Br;const bs=vt("viewport"),Li=new _a,Ri=new mn(34,1,.1,3e3);Ri.up.set(0,0,1);Ri.position.set(185,-200,155);const vn=new Ng({antialias:!0,alpha:!0});vn.setPixelRatio(Math.min(devicePixelRatio,2));vn.setClearColor(16777215,0);vn.shadowMap.enabled=!0;vn.shadowMap.type=al;vn.toneMapping=ll;vn.toneMappingExposure=1.35;bs.appendChild(vn.domElement);vn.domElement.setAttribute("aria-label","Interactive parametric 3D model");const Ci=new Og(Ri,vn.domElement);Ci.enableDamping=!0;Ci.dampingFactor=.08;Ci.minDistance=65;Ci.maxDistance=650;Li.add(new Bf(16777215,10662053,2.4));const Kn=new zl(16774623,4);Kn.position.set(150,-200,300);Kn.castShadow=!0;Kn.shadow.mapSize.set(2048,2048);Kn.shadow.camera.left=-210;Kn.shadow.camera.right=210;Kn.shadow.camera.top=210;Kn.shadow.camera.bottom=-210;Kn.shadow.bias=-1e-4;Li.add(Kn);const Kl=new zl(12310995,2);Kl.position.set(-150,100,100);Li.add(Kl);const Gr=new Zf(420,28,10270115,13424843);Gr.rotation.x=Math.PI/2;Gr.position.z=-45;Gr.material.transparent=!0;Gr.material.opacity=.55;Li.add(Gr);const Ia=new Rn(new kr(700,700),new Nf({opacity:.13}));Ia.position.z=-45;Ia.receiveShadow=!0;Li.add(Ia);const pr=new wr;Li.add(pr);new ResizeObserver(()=>{const i=bs.clientWidth,e=bs.clientHeight;Ri.aspect=i/e,Ri.updateProjectionMatrix(),vn.setSize(i,e)}).observe(bs);vn.setAnimationLoop(()=>{Ci.update(),vn.render(Li,Ri)});function Av(){const i=Object.fromEntries(new FormData(jl));for(const e of["outer","thickness","bore","pitch","hole","count"])i[e]=Number(i[e]);return i}function Lo(){const i={aluminium:7375749,steel:6583425,polymer:13473114};return new Fl({color:i[tn.material],metalness:tn.material==="polymer"?.1:.62,roughness:.47,wireframe:Ir})}function Zl(){for(const i of[...pr.children])pr.remove(i),i.userData.uniqueGeometry&&i.geometry.dispose(),i.material.dispose()}function As(i,e,t=[0,0,0],n=!1){const r=new Rn(i,e);return r.position.set(...t),r.castShadow=!0,r.receiveShadow=!0,r.userData.uniqueGeometry=n,pr.add(r),r}function sl(i,e,t){const n=new Ra(i,i,e,48);n.rotateX(Math.PI/2),As(n,new Fl({color:12420944,metalness:.65,roughness:.34,wireframe:Ir}),t,!0)}function Ua(){Zl();const i=Fr!=="component";if(i){const n=18+tn.thickness/2;As(bn,Lo(),[0,0,-n]),As(bn,Lo(),[0,0,n]);for(const[r,s]of Yl(tn))sl(tn.hole*.4,36,[r,s,0]);sl(tn.bore*.38,36+2*tn.thickness,[0,0,0])}else As(bn,Lo());const e=ql(Cn,tn,i);vt("bom-body").innerHTML=e.map(n=>`<tr><td>${n.part}</td><td>${n.spec}</td><td>${n.material}</td><td>${n.qty}</td><td>${n.unitMass.toFixed(2)}</td><td>${n.totalMass.toFixed(2)}</td></tr>`).join(""),vt("volume").textContent=(Cn.volume/1e3).toFixed(2),vt("mass").textContent=e.reduce((n,r)=>n+r.totalMass,0).toFixed(1)+" g",vt("density-note").textContent=i?"Assembly total · density assumptions":`${Lr[tn.material].toFixed(2)} g/cm³ · assumed`;let t=0;pr.traverse(n=>{var r;n.isMesh&&(t+=(((r=n.geometry.index)==null?void 0:r.count)||n.geometry.attributes.position.count)/3)}),vt("triangles").textContent=Math.round(t).toLocaleString("en-US"),vt("part-title").textContent=i?"Mounting assembly":Or==="flange"?"Mounting flange":"Mounting plate",vt("view-subtitle").textContent=i?"ILLUSTRATIVE ASSEMBLY / MM":"PARAMETRIC COMPONENT / MM",vt("bom-section").hidden=Fr!=="bom",vt("feature-tree").innerHTML=`<li>↳ subtract <i>/ root</i></li><li>↳ ${Or==="flange"?"cylinder":"box"} <i>/ base</i></li><li>↳ cylinder <i>/ bore</i></li><li>↳ radial array <i>/ ${tn.count} holes</i></li><li>↳ material <i>/ ${tn.material}</i></li>`,vt("node-count").textContent=String(tn.count+3)}function Na(){try{const i=Av(),e=bv(Br.Manifold,i,Or);tn=i,Cn=e,Zl(),bn&&bn.dispose(),bn=new Pn,bn.setAttribute("position",new Ot(Cn.positions,3)),bn.setIndex(new Ot(Cn.indices,1)),bn=bn.toNonIndexed(),bn.computeVertexNormals(),Ua(),vt("notice").textContent="Geometry rebuilt from the current dimensions.",vt("notice").className=""}catch(i){vt("notice").textContent=i.message,vt("notice").className="error"}}jl.addEventListener("submit",i=>{i.preventDefault(),Br&&Na()});for(const i of document.querySelectorAll("[data-mode]"))i.addEventListener("click",()=>{Fr=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(e=>e.setAttribute("aria-pressed",String(e===i))),Cn&&Ua(),Fr==="bom"&&vt("bom-section").scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"nearest"})});for(const i of document.querySelectorAll("[data-part]"))i.addEventListener("click",()=>{Or=i.dataset.part,document.querySelectorAll("[data-part]").forEach(e=>e.classList.toggle("active",e===i)),Br&&Na()});vt("fit").addEventListener("click",()=>{Ri.position.set(185,-200,155),Ci.target.set(0,0,0),Ci.update()});vt("wire").addEventListener("click",()=>{Ir=!Ir,vt("wire").setAttribute("aria-pressed",String(Ir)),Cn&&Ua()});function Fa(i,e,t){const n=i instanceof Blob?i:new Blob([i],{type:t}),r=URL.createObjectURL(n),s=document.createElement("a");s.href=r,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3),vt("notice").textContent="File prepared locally. No data was uploaded."}vt("export-params").addEventListener("click",()=>{Cn&&Fa(JSON.stringify({demo:!0,part:Or,units:"mm",parameters:tn},null,2),"smart3d-parameters.json","application/json")});vt("export-bom").addEventListener("click",()=>{if(!Cn)return;const i=ql(Cn,tn,Fr!=="component"),e=t=>'"'+String(t).replaceAll('"','""')+'"';Fa(`Part,Specification,Material,Quantity,Unit mass (g),Total mass (g)
`+i.map(t=>[t.part,t.spec,t.material,t.qty,t.unitMass.toFixed(3),t.totalMass.toFixed(3)].map(e).join(",")).join(`
`),"smart3d-bom.csv","text/csv")});vt("export-glb").addEventListener("click",async()=>{if(Cn)try{const i=pr.clone(!0);i.scale.setScalar(.001);const e=await new Ns().parseAsync(i,{binary:!0,onlyVisible:!0});Fa(e,"smart3d-demo.glb","model/gltf-binary")}catch(i){vt("notice").textContent="Export failed: "+i.message}});async function wv(){try{Br=await Sv({locateFile:()=>Ev}),Br.setup(),Na(),vt("loading").hidden=!0}catch(i){vt("loading").textContent="Geometry engine could not load. Reload the page to retry.",vt("notice").textContent=i.message}}wv();
