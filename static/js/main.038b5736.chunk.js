(window["webpackJsonpinvoice-ui"]=window["webpackJsonpinvoice-ui"]||[]).push([[0],{28:function(e,t,a){e.exports=a(44)},34:function(e,t,a){},35:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),s=a.n(l),o=(a(33),a(34),a(2)),c=a(3),i=a(5),m=a(4),d=a(6),h=(a(35),a(11)),u=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),p=a(13);function g(){return r.a.createElement("div",null,r.a.createElement("h1",null,"An error has occured"),r.a.createElement(p.b,{to:"/"},"Return Home"))}var f=a(8),E=a(16),b=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"appointment-list item-list mb-3"},this.props.cfItems.map((function(t){return r.a.createElement("div",{className:"pet-item col media py-3",key:t.id},r.a.createElement("div",{className:"mr-3"},r.a.createElement("button",{className:"pet-delete btn btn-sm btn-danger",onClick:function(){return e.props.deleteItem(t)}},r.a.createElement(E.b,null))),r.a.createElement("div",{className:"pet-info media-body"},r.a.createElement("div",{className:"pet-head d-flex"},r.a.createElement("span",{className:"pet-name",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("caseNo",a.target.innerText,t.id)}},t.caseNo)),r.a.createElement("div",{className:"owner-name"},r.a.createElement("span",{className:"label-item"},"Part No: "),r.a.createElement("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("partNo",a.target.innerText,t.id)}},t.partNo),r.a.createElement("br",null),r.a.createElement("span",{className:"label-item"},"Quantity: "),r.a.createElement("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("hsCode",a.target.innerText,t.id)}},t.quantity),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("span",{className:"label-item"},"Unit Price: "),r.a.createElement("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("unitPrice",a.target.innerText,t.id)}},t.unitPrice),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("span",{className:"label-item"},"Total Price: "),r.a.createElement("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("totalPrice",a.target.innerText,t.id)}},t.totalPrice),r.a.createElement("br",null),r.a.createElement("span",{className:"apt-notes"},"Net Weight Per Pcs: "),r.a.createElement("span",{className:"apt-notes",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("netWeightPerPcs",a.target.innerText,t.id)}},t.netWeightPerPcs),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("span",{className:"apt-notes"},"Net Weight: "),r.a.createElement("span",{className:"apt-notes",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("netWeight",a.target.innerText,t.netWeight)}},t.netWeight),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0",r.a.createElement("span",{className:"apt-notes"},"Gross Weight: "),r.a.createElement("span",{className:"apt-notes",contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("grossWeight",a.target.innerText,t.netWeight)}},t.grossWeight)),r.a.createElement("div",null,r.a.createElement("span",{className:"label-item"},"Part Name: "),r.a.createElement("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("partName",a.target.innerText,t.id)}},t.partName)),r.a.createElement("div",null,r.a.createElement("span",{className:"label-item"},"HS Code: "),r.a.createElement("span",{contentEditable:!0,suppressContentEditableWarning:!0,onBlur:function(a){return e.props.updateInfo("hsCode",a.target.innerText,t.id)}},t.hsCode))))})))}}]),t}(n.Component),N=a(27),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={caseNo:0,partNo:"",partName:"",hsCode:"",quantity:0,unitPrice:0,totalPrice:0,netWeightPerPcs:0,netWeight:0,grossWeight:0},e.handleChange=e.handleChange.bind(Object(f.a)(e)),e.handleAdd=e.handleAdd.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(N.a)({},n,a))}},{key:"handleAdd",value:function(e){if(e.preventDefault(),0!==this.state.caseNo)if(""!==this.state.partNo)if(""!==this.state.partName)if(""!==this.state.hsCode)if(0!==this.state.quantity)if(0!==this.state.unitPrice)if(0!==this.state.totalPrice)if(0!==this.state.netWeightPerPcs)if(0!==this.state.netWeight)if(0!==this.state.grossWeight){var t={caseNo:this.state.caseNo,partNo:this.state.partNo,partName:this.state.partName,hsCode:this.state.hsCode,quantity:this.state.quantity,unitPrice:this.state.unitPrice,totalPrice:this.state.totalPrice,netWeightPerPcs:this.state.netWeightPerPcs,netWeight:this.state.netWeight,grossWeight:this.state.grossWeight};this.props.addItem(t),this.setState({caseNo:0,partNo:"",partName:"",hsCode:"",quantity:0,unitPrice:0,totalPrice:0,netWeightPerPcs:0,netWeight:0,grossWeight:0})}else alert("Gross Weight cannot be empty");else alert("Net Weight cannot be empty");else alert("Net Weight Per Pcs cannot be empty");else alert("Total Price cannot be empty");else alert("Unit Price cannot be empty");else alert("Quantity cannot be empty");else alert("HS Code cannot be empty");else alert("Part name cannot be empty");else alert("Part no cannot be empty");else alert("Case no cannot be empty")}},{key:"render",value:function(){return r.a.createElement("div",{className:"card textcenter mt-3 "+(!1===this.props.formDisplay?"":"add-appointment"),onClick:this.props.toggleForm},r.a.createElement("div",{className:"apt-addheading card-header bg-primary text-white"},r.a.createElement(E.a,null)," Add Product"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"aptForm",noValidate:!0,onSubmit:this.handleAdd},r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"caseNo",readOnly:!0},"Case No"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"caseNo",placeholder:"Case No",value:this.state.caseNo,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"partNo",readOnly:!0},"Part No"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"partNo",placeholder:"Part No",value:this.state.partNo,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"partName",readOnly:!0},"Part Name"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"partName",placeholder:"Part Name",value:this.state.partName,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"hsCode"},"HS Code"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"hsCode",placeholder:"HS Code",value:this.state.hsCode,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"quantity"},"Quantity"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"quantity",placeholder:"Quantity",value:this.state.quantity,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"unitPrice"},"Unit Price"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"unitPrice",placeholder:"Unit Price",value:this.state.unitPrice,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"totalPrice"},"Total Price"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"totalPrice",placeholder:"Total Price",value:this.state.totalPrice,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"netWeightPerPcs"},"Net Weight Per Pcs"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"netWeightPerPcs",placeholder:"Net Weight Per Pcs",value:this.state.netWeightPerPcs,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"netWeight"},"Net Weight"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"netWeight",placeholder:"Net Weight",value:this.state.netWeight,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"grossWeight"},"Gross Weight"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"grossWeight",placeholder:"Gross Weight",value:this.state.grossWeight,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row mb-0"},r.a.createElement("div",{className:"offset-md-2 col-md-10"},r.a.createElement("button",{type:"submit",className:"btn btn-primary d-block ml-auto"},"Add Product"))))))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-appointments row justify-content-center my-4"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{id:"SearchItems",type:"text",className:"form-control","aria-label":"Search Products",onChange:function(t){return e.props.searchItems(t.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort by: ",r.a.createElement("span",{className:"caret"})),r.a.createElement("div",{className:"sort-menu dropdown-menu dropdown-menu-right"},r.a.createElement("button",{className:"sort-by dropdown-item "+("partName"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("partName",e.props.orderDir)},href:"#"},"Part Name"),r.a.createElement("button",{className:"sort-by dropdown-item "+("hsCode"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("hsCode",e.props.orderDir)},href:"#"},"HS Code"),r.a.createElement("div",{role:"separator",className:"dropdown-divider"}),r.a.createElement("button",{className:"sort-by dropdown-item "+("asc"===this.props.orderDir?"active":""),onClick:function(t){return e.props.changeOrder(e.props.orderBy,"asc")},href:"#"},"Asc"),r.a.createElement("button",{className:"sort-by dropdown-item "+("desc"===this.props.orderDir?"active":""),onClick:function(t){return e.props.changeOrder(e.props.orderBy,"desc")},href:"#"},"Desc"))))))}}]),t}(n.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{border:"1",style:{margin:10}},r.a.createElement("thead",null,r.a.createElement("tr",{style:{background:"cyan"}},r.a.createElement("td",null,"Total Quantity"),r.a.createElement("td",null,"Total Unit Price"),r.a.createElement("td",null,"Total Price"),r.a.createElement("td",null,"Total Net Weight Per Pecs"),r.a.createElement("td",null,"Total Net Weight"),r.a.createElement("td",null,"Total Gross Weight"))),r.a.createElement("tbody",null,r.a.createElement("tr",{style:{fontWeight:"bold"}},r.a.createElement("td",null,this.props.totalQuantity),r.a.createElement("td",null,this.props.totalUnitPrice),r.a.createElement("td",null,this.props.totalPrice),r.a.createElement("td",null,this.props.totalNetWeightPerPcs),r.a.createElement("td",null,this.props.totalNetWeight),r.a.createElement("td",null,this.props.totalGrossWeight)))))}}]),t}(n.Component),C=a(20),W=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={items:[],lastIndex:0,formDisplay:!0,orderBy:"partName",orderDir:"asc",queryText:""},e.toggleForm=e.toggleForm.bind(Object(f.a)(e)),e.addItem=e.addItem.bind(Object(f.a)(e)),e.changeOrder=e.changeOrder.bind(Object(f.a)(e)),e.searchItem=e.searchItem.bind(Object(f.a)(e)),e.updateInfo=e.updateInfo.bind(Object(f.a)(e)),e.deleteItem=e.deleteItem.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"deleteItem",value:function(e){if(!1!==window.confirm("Are you sure to delete this product?")){var t=this.state.items;t=Object(C.without)(t,e),this.setState({items:t}),localStorage.setItem("cf-items",JSON.stringify(t))}}},{key:"updateInfo",value:function(e,t,a){var n=this.state.items;null!==n&&(n[Object(C.findIndex)(n,{id:a})][e]=t,localStorage.setItem("cf-items",JSON.stringify(n)),this.setState({items:n}))}},{key:"changeOrder",value:function(e,t){this.setState({orderBy:e,orderDir:t})}},{key:"searchItem",value:function(e){this.setState({queryText:e})}},{key:"addItem",value:function(e){console.log(e);var t=localStorage.getItem("cf-items"),a=[];null!==t?(a=JSON.parse(t)).push(e):a.push(e),localStorage.setItem("cf-items",JSON.stringify(a)),this.setState({items:a})}},{key:"toggleForm",value:function(){console.log("toggle form called"),this.setState({formDisplay:!1})}},{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("cf-items"),a=[];if(null!==t){var n=JSON.parse(t),r=0;a=n.map((function(t){return t.id=r,r+=1,e.setState({lastIndex:r}),t}))}this.setState({items:a})}},{key:"render",value:function(){var e,t=this,a=0,n=0,l=0,s=0,o=0,c=0,i=this.state.items;return null!==i?(e="asc"===this.state.orderDir?1:-1,i=i.sort((function(a,n){return null===a[t.state.orderBy]||void 0===a[t.state.orderBy]?1:null===n[t.state.orderBy]||void 0===n[t.state.orderBy]?1:a[t.state.orderBy].toLowerCase()<n[t.state.orderBy].toLowerCase()?-1*e:1*e})).filter((function(e){return void 0!==e.partName&&e.partName.toLowerCase().includes(t.state.queryText.toLowerCase())||void 0!==e.hsCode&&e.hsCode.toLowerCase().includes(t.state.queryText.toLowerCase())}))):i=[],this.state.items.length!=i.length&&i.forEach((function(e){a+=parseFloat(e.quantity),n+=parseFloat(e.unitPrice),l+=parseFloat(e.totalPrice),s+=parseFloat(e.netWeightPerPcs),o+=parseFloat(e.netWeight),c+=parseFloat(e.grossWeight)})),r.a.createElement("main",{className:"page bg-white",id:"petratings"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 bg-white"},r.a.createElement("div",{className:"container"},r.a.createElement(v,{toggleForm:this.toggleForm,formDisplay:this.state.formDisplay,addItem:this.addItem}),r.a.createElement(y,{orderBy:this.state.orderBy,orderDir:this.state.orderDir,changeOrder:this.changeOrder,searchItems:this.searchItem}),r.a.createElement(b,{cfItems:i,updateInfo:this.updateInfo,deleteItem:this.deleteItem}),r.a.createElement(P,{totalQuantity:a,totalUnitPrice:n,totalPrice:l,totalNetWeightPerPcs:s,totalNetWeight:o,totalGrossWeight:c}))))))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"page bg-white",id:"petratings"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 bg-white"},r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:W}),r.a.createElement(h.a,{exact:!0,path:"/report",component:u}),r.a.createElement(h.a,{component:g})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23),a(41),a(42);s.a.render(r.a.createElement(p.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.038b5736.chunk.js.map