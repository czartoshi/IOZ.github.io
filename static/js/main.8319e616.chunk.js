(this["webpackJsonpcrypto-bot"]=this["webpackJsonpcrypto-bot"]||[]).push([[0],{59:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(7),o=r.n(c),s=r(95),u=r(94),i=r(93),l=r(11),p=r.n(l),m=r(13),b=r(97),f=r(96);function d(e){return Uint8Array.from({length:e.length},(function(t,r){return e.charCodeAt(r)}))}function y(e){return Array.from(new Uint8Array(e)).map((function(e){return e.toString(16).padStart(2,"0")})).join("")}var h=r(20);var g=r(10);function v(){var e=j(),t=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),o=Object(h.a)(c,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){var e,t;a(null!==(e=localStorage.getItem("apiKey"))&&void 0!==e?e:""),u(null!==(t=localStorage.getItem("secretKey"))&&void 0!==t?t:"")}),[]),{apiKey:r,secretKey:s,updateApiKey:function(e){localStorage.setItem("apiKey",e),a(e)},updateSecretKey:function(e){localStorage.setItem("secretKey",e),u(e)}}}(),r=t.apiKey,a=t.secretKey,c=t.updateApiKey,o=t.updateSecretKey;function s(){return(s=Object(m.a)(p.a.mark((function e(){var t,n,c,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,crypto.subtle.importKey("raw",d(a),{name:"HMAC",hash:"SHA-256"},!0,["sign"]);case 2:return t=e.sent,n=Date.now(),c="timestamp=".concat(n),e.next=7,crypto.subtle.sign("HMAC",t,d(c));case 7:return o=e.sent,e.next=10,fetch("/api/v3/account?".concat(c,"&signature=").concat(y(o)),{headers:{"X-MBX-APIKEY":r}});case 10:return s=e.sent,e.t0=console,e.next=14,s.json();case 14:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)(f.a,{id:"api-key",label:"API Key",type:"password",value:r,onChange:function(e){return c(e.target.value)}}),Object(g.jsx)(f.a,{id:"api-secret",label:"Secret Key",type:"password",value:a,onChange:function(e){return o(e.target.value)}}),Object(g.jsx)(b.a,{disabled:!(r&&a),onClick:function(){return s.apply(this,arguments)},children:"Get account information"})]})}var j=Object(i.a)((function(e){return{root:{display:"grid",rowGap:e.spacing(1)}}}));function O(){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(p.a.mark((function e(){var t,r,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Number(localStorage.getItem("tickersTimestamp")),!(Date.now()-t<3e5)){e.next=3;break}return e.abrupt("return",JSON.parse(localStorage.getItem("tickers")));case 3:return e.next=5,fetch("/api/v3/ticker/24hr");case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,a=n.map((function(e){return{symbol:e.symbol,priceChange:Number(e.priceChange),priceChangePercent:Number(e.priceChangePercent),weightedAvgPrice:Number(e.weightedAvgPrice),prevClosePrice:Number(e.prevClosePrice),lastPrice:Number(e.lastPrice),lastQty:Number(e.lastQty),bidPrice:Number(e.bidPrice),askPrice:Number(e.askPrice),openPrice:Number(e.openPrice),highPrice:Number(e.highPrice),lowPrice:Number(e.lowPrice),volume:Number(e.volume),quoteVolume:Number(e.quoteVolume),openTime:e.openTime,closeTime:e.closeTime,firstId:e.firstId,lastId:e.lastId,count:e.count}})),localStorage.setItem("tickersTimestamp",Date.now().toString()),localStorage.setItem("tickers",JSON.stringify(a)),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return N.apply(this,arguments)}function N(){return(N=Object(m.a)(p.a.mark((function e(t,r){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v3/klines?symbol=".concat(t,"&interval=").concat(r));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.map((function(e){var t=Object(h.a)(e,11),r=t[0],n=t[1],a=t[2],c=t[3],o=t[4],s=t[5],u=t[6],i=t[7],l=t[8],p=t[9],m=t[10];return{openTime:r,open:Number(n),high:Number(a),low:Number(c),close:Number(o),volume:Number(s),closeTime:u,quoteAssetVolume:Number(i),numberOfTrades:l,takerBuyBaseAssetVolume:Number(p),takerBuyQuoteAssetVolume:Number(m)}})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){var e=P(),t=Object(n.useState)(!1),r=Object(h.a)(t,2),a=r[0],c=r[1];function o(){return(o=Object(m.a)(p.a.mark((function e(){var t,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,O();case 3:return t=e.sent,r=t.filter((function(e){return e.symbol.endsWith("BUSD")})).sort((function(e,t){return t.quoteVolume-e.quoteVolume})).slice(0,3),console.log(r),e.next=8,Promise.all(r.map((function(e){return x(e.symbol,"5m")})));case 8:n=e.sent,console.log(n),c(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsx)(b.a,{className:e.root,variant:"contained",color:"primary",onClick:function(){return o.apply(this,arguments)},children:a?"Cancel":"Learn"})}var P=Object(i.a)((function(e){return{root:{justifySelf:"center",alignSelf:"center"}}})),S=r(42);function T(){return A.apply(this,arguments)}function A(){return(A=Object(m.a)(p.a.mark((function e(){var t,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr"),r={},n=Date.now(),t.onmessage=function(){var e=Object(m.a)(p.a.mark((function e(a){var c,o,s,u,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=JSON.parse(a.data).map((function(e){var t=e.e,r=e.E,n=e.s,a=e.c,c=e.o,o=e.h,s=e.l,u=e.v,i=e.q;return{eventType:t,eventTime:r,symbol:n,closePrice:Number(a),openPrice:Number(c),highPrice:Number(o),lowPrice:Number(s),totalTradedBaseAssetVolume:Number(u),totalTradedQuoteAssetVolume:Number(i)}})),o=Object(S.a)(c);try{for(o.s();!(s=o.n()).done;)(u=s.value).symbol.endsWith("BUSD")&&(r[u.symbol]=u)}catch(l){o.e(l)}finally{o.f()}if(console.log("Tickers loaded:",Object.keys(r).length),!(Date.now()-n>1e4)){e.next=10;break}return t.close(),i=Object.values(r).sort((function(e,t){return t.totalTradedQuoteAssetVolume-e.totalTradedQuoteAssetVolume})).slice(0,3),console.log(i),e.next=10,Promise.all(i.map(function(){var e=Object(m.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.symbol,"5m");case 2:r=e.sent,console.log("".concat(t.symbol,":"),r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return Object(g.jsx)(b.a,{variant:"outlined",onClick:T,children:"Test streaming"})}var I=r(43),K=Object(I.a)({palette:{type:"dark",primary:{main:"#bb86fc"},secondary:{main:"#03dac6"},background:{default:"#121212",paper:"#121212"},error:{main:"#cf6679"}},props:{MuiTextField:{variant:"filled"}}});function V(){var e=B();return Object(g.jsxs)(u.a,{theme:K,children:[Object(g.jsx)(s.a,{}),Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)(v,{}),Object(g.jsx)(C,{}),Object(g.jsx)(k,{})]})]})}var B=Object(i.a)((function(e){return{root:{margin:e.spacing(2),display:"grid",gridAutoFlow:"column",gridTemplateColumns:"auto 1fr",gridTemplateRows:"repeat(2, auto)",rowGap:e.spacing(3)}}})),D=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,98)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root")),D()}},[[59,1,2]]]);
//# sourceMappingURL=main.8319e616.chunk.js.map