(this["webpackJsonpreact-appear-on-scroll-example"]=this["webpackJsonpreact-appear-on-scroll-example"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);a(5);var n=a(0),i=a.n(n),r=a(3),o=a.n(r),l=a(1),c=a(2),s=a.n(c);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m={appearingDiv:"_35nH5",contentWrapper:"_tmp4k",ease:"_rhSXE",bouncy:"_3ZSle",smooth:"_1CAfA"};function y(e){return function(e){return i.a.isValidElement(e)}(e)&&"string"===typeof e.type}var d=function(e){var t=e.children,a=e.parentStyling,r=e.wrapperStyling,o=e.transitionType,l=void 0===o?"ease":o,c=e.animationType,s=void 0===c?"fromLeft":c,d=e.fading,f=void 0!==d&&d,u=e.stayVisible,g=void 0!==u&&u,h=e.delay,b=void 0===h?0:h,E=e.containerPadding,T=void 0===E?15:E,v=e.requireFullHeightToRender,x=void 0!==v&&v,w=Object(n.useRef)(),j=Object(n.useRef)(),O=Object(n.useState)(!1),k=O[0],C=O[1],W=Object(n.useState)({width:0,height:0}),P=W[0],S=W[1];Object(n.useLayoutEffect)((function(){j.current&&S({width:j.current.offsetWidth,widthWithPadding:j.current.offsetWidth+T,height:j.current.offsetHeight,heightWithPadding:j.current.offsetHeight+T})}),[j]);Object(n.useEffect)((function(){return L(),window.addEventListener("scroll",L),function(){return window.removeEventListener("scroll",L)}}),[]);var L=function(){var e=w.current.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight,a=x?t:t+e.height/2,n=x?0:-e.height/2;e.top>=n&&e.bottom<=a?C(!0):g||C(!1)};return i.a.createElement("div",{ref:w,className:m.appearingDiv+" ",style:p({},a,{overflow:"scale"===s?"":"hidden",opacity:f?k?1:0:1,width:a&&a.width?a.width:P.widthWithPadding+"px",height:a&&a.height?a.height:P.heightWithPadding+"px"})},i.a.createElement("div",{className:m.contentWrapper+" "+m[l]+" ",style:p({},r,{transitionDelay:b+"ms",width:P.widthWithPadding+"px",height:P.heightWithPadding+"px",left:"fromLeft"===s?k?"0px":"-"+P.widthWithPadding+"px":"auto",right:"fromRight"===s?k?"0px":"-"+P.widthWithPadding+"px":"auto",top:"fromTop"===s?k?"0px":"-"+P.heightWithPadding+"px":"auto",bottom:"fromBottom"===s?k?"0px":"-"+P.heightWithPadding+"px":"auto",transform:"scale"===s?k?"scale(1)":"scale(0)":"auto"})},y(t)?i.a.cloneElement(t,{ref:j}):i.a.cloneElement(t,{inputRef:j})))},f=function(e){var t=e.children,a=e.style,r=e.delayIncrement,o=void 0===r?100:r,l=Object(n.useState)(null),c=l[0],s=l[1];return Object(n.useEffect)((function(){var e=[],a=0;Array.isArray(t)?t.forEach((function(t,n){e.push(i.a.cloneElement(t,{delay:a,key:"appearingContainer-"+n})),a+=o})):e.push(i.a.cloneElement(t,{delay:a,key:"appearingContainer"})),s(e)}),[t]),i.a.createElement("div",{style:p({display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},a)},c)};d.propTypes={children:s.a.object.isRequired,parentStyling:s.a.object,wrapperStyling:s.a.object,delay:s.a.number,transitionType:s.a.oneOf(["ease","bouncy","smooth"]),fading:s.a.bool,stayVisible:s.a.bool,requireFullHeightToRender:s.a.bool,animationType:s.a.oneOf(["fromLeft","fromRight","fromTop","fromBottom","scale"]),containerPadding:s.a.number},f.propTypes={children:s.a.oneOfType([s.a.object,s.a.array]),style:s.a.object,delayIncrement:s.a.number};a(14);var u={width:"250px",height:"200px",borderRadius:"4px",backgroundColor:"lightGrey",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12)"},g={display:"flex",justifyContent:"space-evenly",width:"100%",marginTop:"10px",flexWrap:"wrap"},h={margin:"0px",marginBottom:"4px"},b=function(){return i.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"Verdana, sans-serif"}},i.a.createElement("div",{style:{height:"100vh",width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",background:"#ff00cc",background:"-webkit-linear-gradient(to right, #333399, #ff00cc)",background:"linear-gradient(to right, #333399, #ff00cc)"}},i.a.createElement("p",{style:{fontSize:"24pt",marginBottom:"10px",color:"white"}},"Scroll down to make the containers appear!"),i.a.createElement("div",{className:"bounce"},i.a.createElement("div",{className:"arrow down"}))),i.a.createElement("span",{style:g},i.a.createElement(d,{animationType:"fromLeft",transitionType:"ease"},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#4cc9f0"})},i.a.createElement("p",{style:h},"animationType: fromLeft"),i.a.createElement("p",{style:h},"transitionType: ease"))),i.a.createElement(d,{animationType:"fromLeft",transitionType:"smooth",stayVisible:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#4cc9f0"})},i.a.createElement("p",{style:h},"animationType: fromLeft"),i.a.createElement("p",{style:h},"transitionType: smooth"),i.a.createElement("p",{style:h},"fading: false"),i.a.createElement("p",{style:h},"stayVisible: true"))),i.a.createElement(d,{animationType:"fromLeft",transitionType:"bouncy",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#4cc9f0"})},i.a.createElement("p",{style:h},"animationType: fromLeft"),i.a.createElement("p",{style:h},"transitionType: bouncy"),i.a.createElement("p",{style:h},"fading: true")))),i.a.createElement("span",{style:g},i.a.createElement(d,{animationType:"fromTop",transitionType:"smooth",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#4895ef"})},i.a.createElement("p",{style:h},"animationType: fromTop"),i.a.createElement("p",{style:h},"transitionType: smooth"),i.a.createElement("p",{style:h},"fading: true"))),i.a.createElement(d,{animationType:"fromTop",transitionType:"ease",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#4895ef"})},i.a.createElement("p",{style:h},"animationType: fromTop"),i.a.createElement("p",{style:h},"transitionType: ease"),i.a.createElement("p",{style:h},"fading: true"))),i.a.createElement(d,{animationType:"fromTop",transitionType:"bouncy",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#4895ef"})},i.a.createElement("p",{style:h},"animationType: fromTop"),i.a.createElement("p",{style:h},"transitionType: bouncy"),i.a.createElement("p",{style:h},"fading: true")))),i.a.createElement("span",{style:g},i.a.createElement(d,{animationType:"scale",transitionType:"smooth",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#4361ee",color:"white"})},i.a.createElement("p",{style:h},"animationType: scale"),i.a.createElement("p",{style:h},"transitionType: smooth"),i.a.createElement("p",{style:h},"fading: true"))),i.a.createElement(d,{animationType:"scale",transitionType:"ease",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#4361ee",color:"white"})},i.a.createElement("p",{style:h},"animationType: scale"),i.a.createElement("p",{style:h},"transitionType: ease"),i.a.createElement("p",{style:h},"fading: true"))),i.a.createElement(d,{animationType:"scale",transitionType:"bouncy",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#4361ee",color:"white"})},i.a.createElement("p",{style:h},"animationType: scale"),i.a.createElement("p",{style:h},"transitionType: bouncy"),i.a.createElement("p",{style:h},"fading: true")))),i.a.createElement("p",{style:{maxWidth:"800px"}},"This is a 'AppearSequentialContainer' wrapping three 'AppearingContainer' which adds a longer and longer transition delay to each item, making them appear in sequence"),i.a.createElement(f,{delayIncrement:100,style:{backgroundColor:"#480ca8",padding:"10px",borderRadius:"4px"}},i.a.createElement(d,{animationType:"scale",transitionType:"bouncy",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#b5179e",color:"white"})},i.a.createElement("p",{style:h},"animationType: scale"),i.a.createElement("p",{style:h},"transitionType: bouncy"),i.a.createElement("p",{style:h},"fading: true"))),i.a.createElement(d,{animationType:"scale",transitionType:"bouncy",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#b5179e",color:"white"})},i.a.createElement("p",{style:h},"animationType: scale"),i.a.createElement("p",{style:h},"transitionType: bouncy"),i.a.createElement("p",{style:h},"fading: true"))),i.a.createElement(d,{animationType:"scale",transitionType:"bouncy",fading:!0},i.a.createElement("div",{style:Object(l.a)(Object(l.a)({},u),{},{backgroundColor:"#b5179e",color:"white"})},i.a.createElement("p",{style:h},"animationType: scale"),i.a.createElement("p",{style:h},"transitionType: bouncy"),i.a.createElement("p",{style:h},"fading: true")))),i.a.createElement("div",{style:{height:"10vh",width:"100%",marginTop:"10px"}}))};o.a.render(i.a.createElement(b,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(15)},5:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.79a355e0.chunk.js.map