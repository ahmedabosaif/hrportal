(this["webpackJsonphr-leave-tracker"]=this["webpackJsonphr-leave-tracker"]||[]).push([[54],{2099:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(31),i=t(112),c=t(1393),u=t(181),m=t(1868),s=t.n(m),o=t(1551),d=t.n(o),v=t(2115),E=Object(i.a)({root:{width:200}});function b(){var e=E(),a=r.a.useState(30),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"continuous-slider",gutterBottom:!0},"Volume"),r.a.createElement(c.a,{container:!0,spacing:2},r.a.createElement(c.a,{item:!0},r.a.createElement(s.a,null)),r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(v.a,{value:l,onChange:function(e,a){i(a)},"aria-labelledby":"continuous-slider"})),r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,null))),r.a.createElement(v.a,{disabled:!0,defaultValue:30,"aria-labelledby":"continuous-slider"}))}var g=Object(i.a)((function(e){return{root:{width:300},margin:{height:e.spacing(3)}}})),p=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function f(e){return"".concat(e,"\xb0C")}function y(e){return p.findIndex((function(a){return a.value===e}))+1}function h(){var e=g();return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"discrete-slider",gutterBottom:!0},"Temperature"),r.a.createElement(v.a,{defaultValue:20,getAriaValueText:f,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:10,marks:!0}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-custom",gutterBottom:!0},"Custom marks"),r.a.createElement(v.a,{defaultValue:20,getAriaValueText:f,"aria-labelledby":"discrete-slider-custom",step:10,valueLabelDisplay:"auto",marks:p}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-restrict",gutterBottom:!0},"Restricted values"),r.a.createElement(v.a,{defaultValue:20,valueLabelFormat:y,getAriaValueText:f,"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:p}),r.a.createElement("div",{className:e.margin}),r.a.createElement(u.a,{id:"discrete-slider-always",gutterBottom:!0},"Always visible"),r.a.createElement(v.a,{defaultValue:80,getAriaValueText:f,"aria-labelledby":"discrete-slider-always",step:10,marks:p,valueLabelDisplay:"on"}))}var V=Object(i.a)({root:{width:300}});function C(e){return"".concat(e,"\xb0C")}function N(){var e=V(),a=r.a.useState([20,37]),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"range-slider",gutterBottom:!0},"Temperature range"),r.a.createElement(v.a,{value:l,onChange:function(e,a){i(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:C}))}var x=t(1328),w=Object(i.a)({root:{width:250},input:{width:42}});function T(){var e=w(),a=r.a.useState(30),t=Object(n.a)(a,2),l=t[0],i=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{id:"input-slider",gutterBottom:!0},"Volume"),r.a.createElement(c.a,{container:!0,spacing:2,alignItems:"center"},r.a.createElement(c.a,{item:!0},r.a.createElement(d.a,null)),r.a.createElement(c.a,{item:!0,xs:!0},r.a.createElement(v.a,{value:"number"===typeof l?l:0,onChange:function(e,a){i(a)},"aria-labelledby":"input-slider"})),r.a.createElement(c.a,{item:!0},r.a.createElement(x.a,{className:e.input,value:l,margin:"dense",onChange:function(e){i(""===e.target.value?"":Number(e.target.value))},onBlur:function(){l<0?i(0):l>100&&i(100)},inputProps:{step:10,min:0,max:100,type:"number","aria-labelledby":"input-slider"}}))))}var k=Object(i.a)({root:{height:300}});function S(e){return"".concat(e,"\xb0C")}var A=[{value:0,label:"0\xb0C"},{value:20,label:"20\xb0C"},{value:37,label:"37\xb0C"},{value:100,label:"100\xb0C"}];function B(){var e=k();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{id:"vertical-slider",gutterBottom:!0},"Temperature"),r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{orientation:"vertical",getAriaValueText:S,defaultValue:30,"aria-labelledby":"vertical-slider"}),r.a.createElement(v.a,{disabled:!0,orientation:"vertical",getAriaValueText:S,defaultValue:30,"aria-labelledby":"vertical-slider"}),r.a.createElement(v.a,{orientation:"vertical",defaultValue:[20,37],"aria-labelledby":"vertical-slider",getAriaValueText:S,marks:A})))}var j=t(128);a.default=function(){return r.a.createElement("div",{className:"m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(j.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Slider"}]})),r.a.createElement(j.o,{title:"Continuous Slider"},r.a.createElement(b,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(j.o,{title:"Discrete Slider"},r.a.createElement(h,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(j.o,{title:"Range Slider"},r.a.createElement(N,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(j.o,{title:"Slider with Input"},r.a.createElement(T,null)),r.a.createElement("div",{className:"py-3"}),r.a.createElement(j.o,{title:"Vertical Slider"},r.a.createElement(B,null)))}}}]);