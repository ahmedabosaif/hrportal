(this["webpackJsonphr-leave-tracker"]=this["webpackJsonphr-leave-tracker"]||[]).push([[27],{1416:function(e,t,a){},1430:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(1423),a(1427)),o=a.n(r),s=a(1429),i=a.n(s),c=a(1415);a(1416);t.a=function(e){var t=!(e.paginationServer&&e.paginationTotalRows>e.paginationPerPage);return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(i.a,{columns:e.columns,data:e.data,exportHeaders:!1,print:!1,filter:t,filterPlaceholder:"Search"},l.a.createElement(o.a,{data:e.data,columns:e.columns,customStyles:c.b,paginationPerPage:e.paginationPerPage?e.paginationPerPage:50,paginationRowsPerPageOptions:[50,100,200,300,400,500],responsive:!0,highlightOnHover:!0,striped:!0,noHeader:!0,pagination:e.pagination,paginationServer:e.paginationServer,paginationTotalRows:e.paginationTotalRows,paginationDefaultPage:e.paginationDefaultPage,onChangeRowsPerPage:e.onChangeRowsPerPage,onChangePage:e.onChangePage,selectableRows:!0,onSelectedRowsChange:function(e){var t=e.selectedRows;return console.log(t)}}))))}},1431:function(e,t,a){"use strict";var n=a(382),l=a(383),r=a(385),o=a(384),s=a(0),i=a.n(s),c=a(1409),m=a(286),d=a(64),u=a(1396),p=a(1397),g=a(60),h=a(1467),E=a(389),f=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;Object(n.a)(this,a),(l=t.call(this,e)).GetData=function(){var e=[{FullName:l.newName(),EmpCode:l.newCode()},{FullName:l.newName(),EmpCode:l.newCode()},{FullName:l.newName(),EmpCode:l.newCode()},{FullName:l.newName(),EmpCode:l.newCode()},{FullName:l.newName(),EmpCode:l.newCode()},{FullName:l.newName(),EmpCode:l.newCode()},{FullName:l.newName(),EmpCode:l.newCode()}];if(e){var t=e.map((function(e){return{EmpCode:"".concat(e.EmpCode),FullName:"".concat(e.FullName)}}));l.setState({teamData:t,EmpName:"All",childEmpCode:"All"})}if(e){var a=[{Section:"L3 Automation"},{Section:"HRM - Rolling Mill"},{Section:"Central Repair Mechanical"},{Section:"Legal "},{Section:"HR-HQ-Viewers"},{Section:"Security "},{Section:"Safty"}].map((function(e){return e.Section}));l.setState({teamsections:a,childSection:"All"})}},l.handlestartdateChange=function(e){l.setState({startdate:new Date(e),enddate:new Date(e)}),l.props.getfilterEmp(l.state.childEmpCode.EmpCode,l.state.childEmpCode.FullName,l.state.childSection,e,e)},l.handleenddateChange=function(e){l.setState({enddate:new Date(e)}),l.props.getfilterEmp(l.state.childEmpCode.EmpCode,l.state.childEmpCode.FullName,l.state.childSection,l.state.startdate,e)},l.HandleNameCodeChange=function(e,t){t?(l.props.getfilterEmp(t.EmpCode,t.FullName,"All",l.state.startdate,l.state.enddate),l.setState({EmpName:{EmpCode:t.EmpCode,FullName:t.FullName},childEmpCode:{EmpCode:t.EmpCode,FullName:t.FullName},childSection:"All"})):(l.props.getfilterEmp("All","All","All",l.state.startdate,l.state.enddate),l.setState({EmpName:{EmpCode:"All",FullName:"All"},childEmpCode:{EmpCode:"All",FullName:"All"}}))},l.HandleSectionChange=function(e,t){t?(l.props.getfilterEmp("All","All",t,l.state.startdate,l.state.enddate),l.setState({EmpName:{EmpCode:"All",FullName:"All"},childEmpCode:{EmpCode:"All",FullName:"All"},childSection:t})):(l.props.getfilterEmp("All","All","All",l.state.startdate,l.state.enddate),l.setState({EmpCode:"All",FullName:"All",childSection:"All"}))};var r=new Date,o=new Date;r.setDate(r.getDate()-31),o.setDate(o.getDate()+90);var s=r.toISOString().substr(0,10),i=o.toISOString().substr(0,10);return l.state={data:[],loading:!0,startdate:s,enddate:i,childEmpCode:{EmpCode:"All",FullName:"All"},EmpName:{EmpCode:"All",FullName:"All"},teamData:[],teamsections:[],childSection:"All"},l}return Object(l.a)(a,[{key:"newName",value:function(){return m.a[Math.floor(Math.random()*m.a.length)]}},{key:"newCode",value:function(){var e=Array(40).fill().map((function(){return Math.round(400*Math.random())}));return e[Math.floor(Math.random()*e.length)]}},{key:"componentDidMount",value:function(){this.GetData()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.ValidatorForm,{onSubmit:this.GetData,onError:function(){return null}},i.a.createElement(u.a,null,i.a.createElement(p.a,{lg:3,md:3,sm:12,xs:12},i.a.createElement(c.a,{value:this.state.EmpName,onChange:this.HandleNameCodeChange,className:"mb-1 w-full",options:this.state.teamData,clearText:"All",getOptionSelected:function(e,t){return e.EmpCode===t.EmpCode},getOptionLabel:function(e){return e.FullName?e.FullName:"All"},renderInput:function(e){return i.a.createElement(d.TextValidator,Object.assign({},e,{variant:"standard",fullWidth:!0,className:"mb-4 w-full",label:i.a.createElement("strong",{style:{fontSize:14}},"Employee Name"),type:"text",name:"EmpName"}))}})),i.a.createElement(p.a,{lg:2,md:2,sm:12,xs:12},i.a.createElement(c.a,{value:this.state.childEmpCode,onChange:this.HandleNameCodeChange,className:"mb-1 w-full",clearText:"All",options:this.state.teamData,getOptionSelected:function(e,t){return e.EmpCode===t.EmpCode},getOptionLabel:function(e){return e.EmpCode?e.EmpCode:"All"},renderInput:function(e){return i.a.createElement(d.TextValidator,Object.assign({},e,{variant:"standard",fullWidth:!0,className:"mb-4 w-full",label:i.a.createElement("strong",{style:{fontSize:14}},"Employee ID"),type:"text",name:"childEmpCode"}))}})),i.a.createElement(p.a,{lg:2,md:2,sm:12,xs:12},i.a.createElement(c.a,{value:this.state.childSection,onChange:this.HandleSectionChange,className:"mb-1 w-full",clearText:"All",options:this.state.teamsections,getOptionSelected:function(e,t){return e===t},getOptionLabel:function(e){return e||"All"},renderInput:function(e){return i.a.createElement(d.TextValidator,Object.assign({},e,{variant:"standard",fullWidth:!0,className:"mb-4 w-full",label:i.a.createElement("strong",{style:{fontSize:14}},"Section"),type:"text",name:"childSection"}))}})),i.a.createElement(p.a,{lg:2,md:2,sm:12,xs:12},i.a.createElement(g.a,{utils:E.a},i.a.createElement(h.a,{className:"mb-4 w-full",margin:"none",id:"mui-pickers-date",label:i.a.createElement("strong",{style:{fontSize:18}},"Start Date"),inputVariant:"standard",autoOk:!0,value:this.state.startdate,format:"dd/MM/yyyy",maxDateMessage:"Start Date Cannot Be After End Date",onChange:this.handlestartdateChange}))),i.a.createElement(p.a,{lg:2,md:2,sm:12,xs:12},i.a.createElement(g.a,{utils:E.a},i.a.createElement(h.a,{className:"mb-4 w-full",margin:"none",id:"mui-pickers-date",label:i.a.createElement("strong",{style:{fontSize:18}},"End Date"),inputVariant:"standard",type:"text",autoOk:!0,value:this.state.enddate,minDate:this.state.startdate,format:"dd/MM/yyyy",maxDateMessage:"End Date Cannot Be Before Start Date",onChange:this.handleenddateChange}))))))}}]),a}(i.a.Component);t.a=f},2070:function(e,t,a){"use strict";a.r(t);var n=a(5),l=a(59),r=a.n(l),o=a(78),s=a(382),i=a(383),c=a(385),m=a(384),d=a(0),u=a.n(d),p=a(1430),g=(a(390),a(1423)),h=a(1431),E=a(29),f=a(128),C=a(391),S=(a(153),a(185)),v=a(1415),w=a(1396),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var l;Object(s.a)(this,a),(l=t.call(this,e)).clsmsg=function(e){l.setState({alertOpen:!1})},l.approveHandler=function(e){l.setState({alertOpen:!0,msg:"Operation Succeeded! Overtime Has Been Approved",msgtype:"success"}),l.GetData()},l.rejectHandler=function(e){l.setState({alertOpen:!0,msg:"Operation Succeeded! Overtime Has Been Rejected",msgtype:"success"}),l.GetData()},l.getfilterEmp=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n,o,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.resolveAfter2Seconds(t,a,n,o,s);case 2:l.GetData();case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,l,r){return e.apply(this,arguments)}}(),l.GetData=function(){l.state.currentPage,l.state.perPage,l.state.childEmpCode.EmpCode,l.state.childSection,l.state.startdate,l.state.enddate},l.handlePageChange=function(e){(function(){var t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){l.setState({currentPage:e}),t("resolved")}));case 2:l.GetData();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()},l.handlePerRowsChange=function(e){(function(){var t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){l.state.totalRows<e&&(e=l.state.totalRows),l.setState({perPage:e}),t("resolved")}));case 2:l.GetData();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()},l.handleFilterChange=function(e){new Promise((function(t,a){l.setState(Object(n.a)({},e.target.name,e.target.value)),t(e.target.name),a("Error")})).then((function(e){console.log(e)}),(function(e){alert(e)}))};var i=new Date,c=new Date;i.setDate(i.getDate()-31),c.setDate(c.getDate()+90);var m=i.toISOString().substr(0,10),d=c.toISOString().substr(0,10);return l.state={data:[],totalRows:0,perPage:50,currentPage:1,childEmpCode:{EmpCode:"All",FullName:"All"},EmpName:{EmpCode:"All",FullName:"All"},childSection:"All",startdate:m,enddate:d,selectedRows:[],alertOpen:!1,loading:!1},l}return Object(i.a)(a,[{key:"resolveAfter2Seconds",value:function(e,t,a,n,l){var r=this;return new Promise((function(o){r.setState({EmpName:{EmpCode:e,FullName:t},childEmpCode:{EmpCode:e,FullName:t},childSection:a,startdate:n,enddate:l}),o("resolved")}))}},{key:"componentDidMount",value:function(){this.GetData()}},{key:"render",value:function(){return u.a.createElement("div",{className:"m-sm-30"},u.a.createElement(C.a,{open:this.state.alertOpen,clsmsg:this.clsmsg,msg:this.state.msg,type:this.state.msgtype}),this.state.loading?u.a.createElement(g.a,null):u.a.createElement("div",null,u.a.createElement("div",{className:"mb-sm-30"},u.a.createElement(f.a,{routeSegments:[{name:u.a.createElement(E.a,{id:"teamService"}),path:"/dashboard"},{name:u.a.createElement(E.a,{id:"otapprovalInbox"})}]})),u.a.createElement(w.a,null,u.a.createElement(h.a,{getfilterEmp:this.getfilterEmp})),u.a.createElement(p.a,{columns:Object(v.h)(this.approveHandler,this.rejectHandler,"HR"===this.context.user.roles,"HQHR"===this.context.user.roles),data:this.state.data,progressPending:this.state.loading,paginationPerPage:this.state.perPage,pagination:!0,paginationServer:!0,paginationTotalRows:this.state.totalRows,paginationDefaultPage:this.state.currentPage,onChangeRowsPerPage:this.handlePerRowsChange,onChangePage:this.handlePageChange,selectableRows:!0,onSelectedRowsChange:function(e){var t=e.selectedRows;return console.log(t)}})))}}]),a}(u.a.Component);N.contextType=S.b,t.default=N}}]);