(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15affb3a"],{b6ba:function(e,o,a){"use strict";var t=a("eef2"),s=a.n(t);s.a},e0b6:function(e,o,a){"use strict";a.r(o);var t=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("vs-row",{attrs:{"vs-justify":"center"}},[a("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-w":"12"}},[a("vs-card",[a("form",{attrs:{action:"#",method:"post"}},[a("div",{staticClass:"campo"},[a("h5",[e._v("\n        SECRETARIA DE SEGURANÇA PÚBLICA DO MARANHÃO\n            DELEGACIA GERAL DE POLÍCIA CIVIL\n        SUPERINTENDÊNCIA DE POLÍCIA CIVIL DA CAPITAL\n              DELEGACIA ESPECIAL DA MULHER\n        PLANTÃO ESPECIALIZADO EM ATENDIMENTO A MULHER\n    ")])]),a("div",{staticClass:"titulo"},[a("h2",[e._v("Intimação por Whatsapp")])]),a("div",{staticClass:"vx-card__title mb-8"},[a("vs-input",{staticClass:"w-full no-icon-border",staticStyle:{width:"50em"},attrs:{icon:"icon icon-user",id:"nome","icon-pack":"feather","label-placeholder":"Nome",value:"nomeOfendida"},model:{value:e.nome,callback:function(o){e.nome=o},expression:"nome"}}),a("vs-input",{staticClass:"w-full no-icon-border",staticStyle:{width:"50em"},attrs:{icon:"icon icon-user",id:"CPF","icon-pack":"feather","label-placeholder":"CPF",value:"CpfOfendida"},model:{value:e.cpf,callback:function(o){e.cpf=o},expression:"cpf"}}),a("vs-input",{staticClass:"w-full no-icon-border",staticStyle:{width:"50em"},attrs:{icon:"icon icon-user",id:"RGOfendida","icon-pack":"feather","label-placeholder":"RG da Ofendida",value:"RG da Ofendida"},model:{value:e.rgofendida,callback:function(o){e.rgofendida=o},expression:"rgofendida"}}),a("vs-input",{staticClass:"w-full no-icon-border",staticStyle:{width:"50em"},attrs:{icon:"icon icon-user",id:"filiofendida","icon-pack":"feather","label-placeholder":"Filiação Ofendida(Mãe ou Pai)",value:"filiacao ofendida"},model:{value:e.filiofendida,callback:function(o){e.filiofendida=o},expression:"filiofendida"}}),a("vs-input",{staticClass:"w-full no-icon-border",staticStyle:{width:"50em"},attrs:{icon:"icon icon-user",id:"enderofendida","icon-pack":"feather","label-placeholder":"Endereço da Ofendida",value:"enderecoOfendida"},model:{value:e.enderofendida,callback:function(o){e.enderofendida=o},expression:"enderofendida"}}),a("vs-divider"),a("label",{attrs:{for:"nome"}},[e._v("Documento de Identidade?")]),a("div",{staticClass:"checkbox"},[a("vs-checkbox",{staticClass:"mb-3",attrs:{name:"documentoidentidade",value:"true"},model:{value:e.opcoes,callback:function(o){e.opcoes=o},expression:"opcoes"}},[e._v(" Sim           \n                      ")])],1),a("div",{staticClass:"checkbox"},[a("vs-checkbox",{staticClass:"mb-3",attrs:{name:"documentoidentidade",value:"false"},model:{value:e.opcoes,callback:function(o){e.opcoes=o},expression:"opcoes"}},[e._v(" Não           \n                      ")])],1),a("label",{attrs:{for:"nome"}},[e._v("Trouxe comprovante de residencia?")]),a("div",{staticClass:"checkbox"},[a("vs-checkbox",{staticClass:"mb-3",attrs:{name:"comprovante de residencia",value:"true"},model:{value:e.opcoes,callback:function(o){e.opcoes=o},expression:"opcoes"}},[e._v(" Sim           \n                        ")])],1),a("div",{staticClass:"checkbox"},[a("vs-checkbox",{staticClass:"mb-3",attrs:{name:"comprovante de residencia",value:"false"},model:{value:e.opcoes,callback:function(o){e.opcoes=o},expression:"opcoes"}},[e._v(" Não           \n                        ")])],1),a("div",{staticClass:"centerx labelx"},[a("vs-input",{attrs:{id:"Telefone",label:"Telefone da Ofendida"},model:{value:e.telefone,callback:function(o){e.telefone=o},expression:"telefone"}}),a("vs-input",{attrs:{id:"Cidade",label:"Cidade"},model:{value:e.cidade,callback:function(o){e.cidade=o},expression:"cidade"}})],1)],1),a("div",{staticClass:"con-select-example"},[a("vs-select",{staticClass:"selectExample",attrs:{name:"estado",id:"estado",label:"Estado"},model:{value:e.selectestado,callback:function(o){e.selectestado=o},expression:"selectestado"}})],1),a("vs-divider"),a("vs-button",{attrs:{color:"success",type:"gradient",name:"submit"},on:{click:[function(o){return e.$vs.notify({title:"Sucesso",text:"Informações Salvas",color:"success"})},function(o){return o.preventDefault(),e.postPost()}]}},[e._v("Enviar")])],1)])],1)],1)},s=[],n=a("bc3a"),c=a.n(n),i=(c.a.create({baseURL:"http://localhost:3333"}),{data:function(){return{postsBody:[],errors:[],nome:"",cpf:"",rgfofendida:"",cidade:"",title:"",username:"",siteUsername:"",amount:"",textarea:""}},created:function(){var e=this;console.log("Conectando front com API!"),c.a.get("http://localhost:3333").then((function(o){e.posts=o.data})).catch((function(o){e.errors.push(o)}))},methods:{postPost:function(){var e=this;console.log(this.cidade),console.log(this.nome),console.log(this.cpf),console.log(this.rgofendida),c.a.post("http://localhost:3333/processos",{body:{cidade:this.cidade,nome:this.nome,cpf:this.cpf,rgofendida:this.rgfofendida}}).then((function(o){e.form=o.data})).catch((function(o){e.errors.push(o)}))},funcao2:function(){console.log("teste")}}}),l=i,d=(a("b6ba"),a("2877")),r=Object(d["a"])(l,t,s,!1,null,null,null);o["default"]=r.exports},eef2:function(e,o,a){}}]);
//# sourceMappingURL=chunk-15affb3a.e6a6c328.js.map