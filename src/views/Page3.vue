<template>
<vs-row vs-justify="center">
<vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
<vs-card>
<form action="#" method="post">
   <div class="campo">
    <h5>
        SECRETARIA DE SEGURANÇA PÚBLICA DO MARANHÃO
            DELEGACIA GERAL DE POLÍCIA CIVIL
        SUPERINTENDÊNCIA DE POLÍCIA CIVIL DA CAPITAL
              DELEGACIA ESPECIAL DA MULHER
        PLANTÃO ESPECIALIZADO EM ATENDIMENTO A MULHER
    </h5>
    </div>
    <div class="titulo">
    <h2>Intimação por Whatsapp</h2>
       </div>
    <!--<fieldset>
      <fieldset class="grupo">-->
        
        <div class="vx-card__title mb-8">

          <vs-input
          icon="icon icon-user"
          id="nome"
          icon-pack="feather"
          label-placeholder="Nome"
          style="width: 50em"
          v-model="nome"
          value="nomeOfendida"
          class="w-full no-icon-border"/>

          <vs-input
          icon="icon icon-user"
          id="CPF"
          icon-pack="feather"
          label-placeholder="CPF"
          style="width: 50em"
          v-model="cpf"
          value="CpfOfendida"
          class="w-full no-icon-border"/>
          
          <vs-input
          icon="icon icon-user"
          id="RGOfendida"
          icon-pack="feather"
          label-placeholder="RG da Ofendida"
          style="width: 50em"
          v-model="rgofendida"
          value="RG da Ofendida"
          class="w-full no-icon-border"/>

          <vs-input
          icon="icon icon-user"
          id="filiofendida"
          icon-pack="feather"
          label-placeholder="Filiação Ofendida(Mãe ou Pai)"
          style="width: 50em"
          v-model="filiofendida"
          value="filiacao ofendida"
          class="w-full no-icon-border"/>

          <vs-input
          icon="icon icon-user"
          id="enderofendida"
          icon-pack="feather"
          label-placeholder="Endereço da Ofendida"
          style="width: 50em"
          v-model="enderofendida"
          value="enderecoOfendida"
          class="w-full no-icon-border"/>
            <vs-divider></vs-divider>             
  
                  <label for="nome">Documento de Identidade?</label>
                    <div class="checkbox">
                      <vs-checkbox  
                        class="mb-3"
                        name= "documentoidentidade"
                        value="true"
                        v-model="opcoes"> Sim           
                      </vs-checkbox>
                    </div>
                    <div class="checkbox">
                      <vs-checkbox  
                        class="mb-3"
                        name= "documentoidentidade"
                        value="false"
                        v-model="opcoes"> Não           
                      </vs-checkbox>
                    </div>
                    
                  <label for="nome">Trouxe comprovante de residencia?</label>
                      <div class="checkbox">
                        <vs-checkbox  
                          class="mb-3"
                          name= "comprovante de residencia"
                          value="true"
                          v-model="opcoes"> Sim           
                        </vs-checkbox>
                      </div>
                      <div class="checkbox">
                        <vs-checkbox  
                          class="mb-3"
                          name= "comprovante de residencia"
                          value="false"
                          v-model="opcoes"> Não           
                        </vs-checkbox>
                      </div>
     
                      <div class="centerx labelx">
                        <vs-input
                        id="Telefone" 
                        label="Telefone da Ofendida"
                        
                        v-model="telefone"/>
                        <vs-input
                        id="Cidade" 
                        label="Cidade" 
                        v-model="cidade"/>
                      </div>
                            
                    </div>


                    <div class="con-select-example">
                      <vs-select
                      class="selectExample" 
                      name="estado" 
                      id="estado" 
                      label="Estado"
                      v-model="selectestado">
                      <!--em construção
                        <vs-select-item value>--</vs-select-item>
                        <vs-select-item value="AL" v-text="AL"></vs-select-item>
                      <vs-option value="AP">AP</vs-option>
                      <option value="AM">AM</option>
                      <option value="BA">BA</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="ES">ES</option>
                      <option value="GO">GO</option>
                      <vs-select-item value="MA">MA</vs-select-item>
                      <option value="MG">MG</option>
                      <option value="MT">MT</option>
                      <option value="MS">MS</option>
                      <option value="PA">PA</option>
                      <option value="PB">PB</option>
                      <option value="PR">PR</option>
                      <option value="PE">PE</option>
                      <option value="PI">PI</option>
                      <option value="RJ">RJ</option>
                      <option value="RN">RN</option>
                      <option value="RS">RS</option>
                      <option value="RO">RO</option>
                      <option value="RR">RR</option>
                      <option value="SC">SC</option>
                      <option value="SP">SP</option>
                      <option value="SE">SE</option>
                      <option value="TO">TO</option>-->
                      </vs-select>
                    </div>
                    <vs-divider></vs-divider>
                  <vs-button @click="$vs.notify({title:'Sucesso',
                  text:'Informações Salvas',
                  color:'success'})" color="success"
                  type="gradient" name="submit" @click.prevent="postPost()">Enviar</vs-button>
                <!--</fieldset>-->
        </form>
      </vs-card>
    </vs-col>
  </vs-row>
</template>


<!--alterações Ailton-Sama -->

<script>
import axios from "axios";

const base = axios.create({
  baseURL: "http://localhost:3333"
});

export default {
  data: () => ({
    postsBody: [],
    errors: [],
    nome: '',
    cpf: '',
    rgfofendida: '',
    cidade: '',
    title: '',
    username: '',
    siteUsername: '',
    amount: '',
    textarea: '',
  }),
  // Fetches posts when the component is created.
  created () {
    console.log("Conectando front com API!");
    axios
      .get(`http://localhost:3333`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    postPost() {
      console.log(this.cidade)
      console.log(this.nome)
      console.log(this.cpf)
      console.log(this.rgofendida)
      axios
        .post(`http://localhost:3333/processos`, {
          body: {cidade: this.cidade, nome: this.nome, cpf: this.cpf, rgofendida: this.rgfofendida}
        })
        .then(response => {
          this.form = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    funcao2 () {
      console.log('teste')
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

fieldset {
  border: 0;
}

body,
input,
select,
textarea,
button {
  font-family: sans-serif;
  font-size: 1em;
}

.grupo:before,
.grupo:after {
  content: " ";
  display: table;
}

.grupo:after {
  clear: both;
}

.campo {
  margin-bottom: 1em;
  
}

.titulo {
  margin-bottom: 1em;
  text-align: center
}

.campo label {
  margin-bottom: 0.5em;
  color: #666;
  display: block;
}

fieldset.grupo .campo {
  float: left;
  margin-right: 1em;
}

.campo input[type="text"],
.campo input[type="email"],
.campo input[type="url"],
.campo input[type="tel"],
.campo select,
.campo textarea {
  padding: 0.2em;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  display: block;
}

.campo select option {
  padding-right: 1em;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  background: #ffc;
}

.campo label.checkbox {
  color: #000;
  display: inline-block;
  margin-right: 1em;
}

.botao {
  font-size: 1.5em;
  background: #7367f0;
  border: 0;
  margin-bottom: 1em;
  color: #fff;
  padding: 0.2em 0.6em;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.botao:hover {
  background: #7367f0;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.2);
  text-shadow: none;
}

.botao,
select,
label.checkbox {
  cursor: pointer;
}
</style>