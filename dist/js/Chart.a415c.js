(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1025:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(1004),o=a.n(r);class d extends i.a.PureComponent{render(){return i.a.createElement(o.a,{option:this.props.option})}}a(1001),a(258);var s=a(115),l=a(49),p=a(96),c=a(97);const u=({page:e,pageSize:t,keyword:a=""})=>async n=>{let i=await Object(p.a)({url:c.a.musicList,method:"get",data:{page:e,pageSize:t}});n({type:"GET_LIST",data:{list:i.content,total:i.totalElements,page:e,pageSize:t,keyword:a}})},g=({page:e,pageSize:t,keyword:a=""})=>n=>{n({type:"PAGE_LIST",data:{list:(""!=a?data.filter(e=>e.name===a):data).slice((e-1)*t,(e-1)*t+t),page:e,pageSize:t}})};t.default=Object(s.connect)(e=>({data:e.tableReducer}),e=>({getListAction:Object(l.bindActionCreators)(u,e),pageAction:Object(l.bindActionCreators)(g,e)}))(class extends n.Component{constructor(...e){var t;return t=super(...e),this.getOption=(()=>({title:{text:"Title"},tooltip:{trigger:"axis"},legend:{data:["data1","data2"]},toolbox:{},dataZoom:[{startValue:"Tuesday"}],grid:{},xAxis:[{type:"category",data:["Monday","Tuesday ","Wednesday","Thursday","Friday","Saturday","Sunday"]}],yAxis:[{type:"value"}],series:[{name:"data1",type:"line",data:[120,132,101,134,90,230,210]},{name:"data2",type:"line",data:[220,182,191,234,290,330,310]}]})),t}render(){return i.a.createElement("div",null,i.a.createElement("div",null,"Search"),i.a.createElement(d,{option:this.getOption()}),i.a.createElement("div",null,"Table"))}})}}]);