(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={box:"App_box__4dp4O",title:"App_title__2uPDu",appear:"App_appear__Bpob1",appearActive:"App_appearActive__g-rjy","filter-enter":"App_filter-enter__3Gy48","filter-enterActive":"App_filter-enterActive__2Hpvh","filter-exit":"App_filter-exit__2j7On","filter-exitActive":"App_filter-exitActive__24aq3"}},13:function(e,t,n){e.exports={item:"ContactListItem_item__37GmM",sect__btn:"ContactListItem_sect__btn__2H0zl",btn:"ContactListItem_btn__1fLR3"}},18:function(e,t,n){e.exports={list:"ContactList_list__3cgcY",enter:"ContactList_enter__ltTg6","enter-active":"ContactList_enter-active__2ofQs",exit:"ContactList_exit__1hVDO","exit-active":"ContactList_exit-active__1-7-H"}},19:function(e,t,n){e.exports={filter:"Filter_filter__36-RR",label:"Filter_label__1bBHw"}},32:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),i=n(4),l=n(45),m=n(7),u=n(23),s=n(24),b=n(29),p=n(27),_=n(5),d=n(46),f={addContacts:Object(_.b)("contacts/addContact",(function(e,t){return{payload:{contact:{id:Object(d.a)(),name:e,number:t}}}})),removeContacts:Object(_.b)("contacts/removeContact"),changeFilter:Object(_.b)("contacts/changeFilter")},v=n(8),h=n.n(v),C=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;e.props.onAddContact(a,c),e.setState({name:"",number:""})},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(m.a)({},a,c))},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit,className:h.a.form},c.a.createElement("label",{className:h.a.label},"Name:",c.a.createElement("input",{className:h.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,placeholder:"Enter name"})),c.a.createElement("label",{className:h.a.label},"Number:",c.a.createElement("input",{className:h.a.input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"Enter number"})),c.a.createElement("button",{type:"submit",className:h.a.btn},"Add contact"))}}]),n}(a.Component),E={onAddContact:f.addContacts},O=Object(i.b)(null,E)(C),j=n(47),x=n(25),y=n(13),g=n.n(y),A=Object(i.b)((function(e,t){var n=e.contacts.items.find((function(e){return e.id===t.id}));return Object(x.a)({},n)}),(function(e,t){return{onRemove:function(){return e(f.removeContacts(t.id))}}}))((function(e){var t=e.name,n=e.id,a=e.number,r=e.onRemove;return c.a.createElement("li",{key:n,className:g.a.item},c.a.createElement("p",null,t,":"),c.a.createElement("p",null,a),c.a.createElement("section",{className:g.a.sect__btn},c.a.createElement("button",{className:g.a.btn,type:"button",onClick:r},"Delete")))})),N=n(18),L=n.n(N),F=Object(i.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))}}))((function(e){var t=e.contacts;return c.a.createElement(j.a,{component:"ul",className:L.a.list},t.map((function(e){var t=e.id;return c.a.createElement(l.a,{key:t,timeout:1e3,classNames:L.a,unmountOnExit:!0},c.a.createElement(A,{key:t,id:t}))})))})),k=n(19),w=n.n(k),R={onChangeFilter:f.changeFilter},H=Object(i.b)((function(e){return{value:e.contacts.filter}}),R)((function(e){var t=e.value,n=e.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("label",{className:w.a.label},"Find contacts by name:",c.a.createElement("input",{className:w.a.filter,placeholder:"Enter name",type:"text",value:t,onChange:function(e){return n(e.target.value)}})))})),S=n(11),D=n.n(S);function I(){return c.a.createElement("div",{className:D.a.box},c.a.createElement(l.a,{in:!0,appear:!0,timeout:1e3,classNames:D.a,unmountOnExit:!0},c.a.createElement("h1",{className:D.a.title},"Phonebook")),c.a.createElement(O,null),c.a.createElement(l.a,{in:!0,timeout:250,classNames:D.a.filter,unmountOnExit:!0},c.a.createElement(H,null)),c.a.createElement(F,null))}var B,G=n(28),z=n(3),J=n(20),M=n(26);n(41),n(42);J.defaultModules.set(M,{});var P=Object(_.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(B={},Object(m.a)(B,f.addContacts,(function(e,t){var n;return e.map((function(e){return e.name.toLowerCase()})).includes(t.payload.contact.name.toLowerCase().trim())?(n=t.payload.contact.name,Object(J.error)({text:"".concat(n," is already in contacts!")}),e):[].concat(Object(G.a)(e),[t.payload.contact])})),Object(m.a)(B,f.removeContacts,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),B)),Y=Object(_.c)("",Object(m.a)({},f.changeFilter,(function(e,t){return t.payload}))),q=Object(z.c)({items:P,filter:Y}),K=Object(_.a)({reducer:{contacts:q}});o.a.render(c.a.createElement(i.a,{store:K},c.a.createElement(I,null)),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"ContactForm_form__1bc6L",label:"ContactForm_label__UGo1R",input:"ContactForm_input__3lWjz",btn:"ContactForm_btn__3HdYR"}}},[[32,1,2]]]);
//# sourceMappingURL=main.eb51f1b8.chunk.js.map