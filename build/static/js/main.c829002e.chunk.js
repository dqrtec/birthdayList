(this.webpackJsonpreact_presentes=this.webpackJsonpreact_presentes||[]).push([[0],{113:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(17),c=s.n(i),r=(s(90),s(91),s(14)),o=s.n(r),l=s(58),m=s(43),d=(s(59),s(114),s(73),s(61),s(62),s(92),s(116)),j=s(37),u=s(4),b=d.a.confirm;var h=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:o.a.list_presents,children:[Object(u.jsx)("h3",{className:o.a.titulo_disponiveis,children:"Lista de Presentes Dispon\xedveis"}),Object(u.jsx)("ul",{children:e.itens.map((function(t){return Object(u.jsx)("li",{className:"list-inline-item",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:o.a.imagem_present,src:"./imagens/"+t.nome_imagem}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:t.nome})," ",Object(u.jsxs)("b",{children:[Object(u.jsxs)("span",{className:o.a.tamanho,children:["Tam:",t.tamanho]})," "]})," ",Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[" ",t.marca," "]}),Object(u.jsx)("br",{}),Object(u.jsxs)(j.a,{type:"primary",onClick:function(){var s;s=t.id,b({title:"Confirma sua escolha de presente?",content:"Ao clicar em OK, voc\xea confirma que deseja ficar respons\xe1vel pela compra e entrega do presente. Pense bem pois n\xe3o ser\xe1 poss\xedvel mudar de escolha ap\xf3s a confirma\xe7\xe3o",onOk:function(){return e.removeItem(s),new Promise((function(e,t){alert(" Sua Escolha de presente foi confimada! "),setTimeout(Math.random()>.5?e:t,1e3)})).catch((function(){return console.log("Oops errors!")}))},onCancel:function(){}})},children:["Presentear",Object(u.jsx)("svg",{style:{marginLeft:10,marginTop:3},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-gift",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"})})]})]})]})},t.id)}))})]})})};var p=function(e){return Object(u.jsxs)("div",{className:o.a.list_presents,children:[Object(u.jsx)("h3",{className:o.a.titulo_disponiveis,children:"Lista de Presentes Indispon\xedveis"}),Object(u.jsx)("ul",{children:e.itens.map((function(e){return Object(u.jsx)("li",{className:"list-inline-item",children:Object(u.jsxs)("div",{className:o.a.lista_desabilitada,children:[Object(u.jsx)("img",{className:o.a.imagem_present_disable,src:"./imagens/"+e.nome_imagem}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("span",{children:[" ",e.descricao]}),Object(u.jsxs)("span",{children:[" ",e.marca," "]}),Object(u.jsx)("br",{})]})]})},e.id)}))})]})},_=s(42),f=s.n(_),g=d.a.confirm;var O=function(e){var t=Object(a.useState)(!0),s=Object(m.a)(t,2),n=s[0],i=s[1],c=Object(a.useState)([]),r=Object(m.a)(c,2),d=r[0],j=r[1];Object(a.useEffect)((function(){1==n&&(i(!1),_(n),console.log(n),O())}));var b=function(e){var t=d.filter((function(t){return t.id!=e})),s=d.filter((function(t){return t.id==e}))[0];s.isEnable=!1,t.push(s),f.a.defaults.headers.common["secret-key"]="$2b$10$.KZr.cKXKb.6c.se3YiUUu3i6kJRKwlgZsdKZI1XpEsPvq1Gt1bZu",f.a.put("https://api.jsonbin.io/b/602c39445605851b065e453a",{itens:t})},_=function(e){e&&(f.a.defaults.headers.common["secret-key"]="$2b$10$.KZr.cKXKb.6c.se3YiUUu3i6kJRKwlgZsdKZI1XpEsPvq1Gt1bZu",f.a.get("https://api.jsonbin.io/b/602c39445605851b065e453a/latest").then((function(e){console.log(e.data.itens),j(e.data.itens);var t=e.data.itens.filter((function(e){return 1==e.isEnable})),s=e.data.itens.filter((function(e){return 0==e.isEnable}));w(t),S(s)})))},O=function(){g({title:"Informativo",content:"As imagens neste site t\xeam o intuito apenas de orientar a escolha do modelo. N\xe3o \xe9 necess\xe1rio comprar especificamente o produto da imagem",onOk:function(){return new Promise((function(e,t){setTimeout(Math.random()>.1?e:t,1e3)})).catch((function(){return console.log("Oops errors!")}))},onCancel:function(){}})},v=Object(a.useState)([{nome_imagem:"cuturno 1.jpg",nome:"All star",descricao:" tenis all stars de cano alto",marca:"All Start",id:1},{nome_imagem:"blusa 4.jpg",nome:"All star",descricao:" tenis all stars de cano alto",marca:"All Start",id:2}]),x=Object(m.a)(v,2),N=x[0],w=x[1],A=Object(a.useState)([{nome_imagem:"blusa 2.jpg",nome:"All star",descricao:" tenis all stars de cano alto",marca:"All Start"},{nome_imagem:"blusa 3.jpg",nome:"All star",descricao:" tenis all stars de cano alto",marca:"All Start"}]),K=Object(m.a)(A,2),P=K[0],S=K[1];return Object(u.jsxs)("div",{className:o.a.titulo_bemvindo,children:[Object(u.jsxs)("p",{children:["Bem Vindos ao meu site",Object(u.jsx)("br",{})," Esta \xe9 minha lista de presentes",Object(u.jsx)("br",{})]}),Object(u.jsx)(h,{itens:N,removeItem:function(e){console.log(e),b(e);var t=N.filter((function(t){return t.id!=e})),s=N.filter((function(t){return t.id==e}))[0];P.push(s),S(Object(l.a)(P)),w(Object(l.a)(t))}}),Object(u.jsx)(p,{itens:P})]})};var v=function(){return Object(u.jsxs)("div",{className:o.a.main_content,children:[Object(u.jsx)("div",{className:o.a.left_side,children:Object(u.jsx)(O,{})}),Object(u.jsx)("div",{className:o.a.right_side,children:Object(u.jsx)("img",{src:"https://github.com/dqrtec/birthdayList/blob/gh-pages/imagens/larissa2.jpg?raw=true",className:o.a.imagem_right,alt:""})})]})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,117)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),x()},14:function(e,t,s){e.exports={titulo_disponiveis:"src_titulo_disponiveis__32gEw",titulo_bemvindo:"src_titulo_bemvindo__71ax_",imagem_right:"src_imagem_right__VXZIs",right_side:"src_right_side__pufHm",tamanho:"src_tamanho__2dPM9",left_side:"src_left_side__oXTUB",imagem_present:"src_imagem_present__2IB36",imagem_present_disable:"src_imagem_present_disable__4tBNs"}},90:function(e,t,s){},91:function(e,t,s){}},[[113,1,2]]]);
//# sourceMappingURL=main.c829002e.chunk.js.map