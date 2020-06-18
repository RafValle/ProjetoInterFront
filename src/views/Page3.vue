<template>
  <!--<vs-row vs-justify="center">
  <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
  <vs-card>-->
  <form action="#" method="post">
    <div class="titulo">
      <vs-alert active="true">
        <h4>
          SECRETARIA DE SEGURANÇA PÚBLICA DO MARANHÃO
          DELEGACIA GERAL DE POLÍCIA CIVIL
          SUPERINTENDÊNCIA DE POLÍCIA CIVIL DA CAPITAL
          DELEGACIA ESPECIAL DA MULHER
          PLANTÃO ESPECIALIZADO EM ATENDIMENTO A MULHER
        </h4>
      </vs-alert>
    </div>

    <div class="titulo">
      <h2>REQUERIMENTO DE MEDIDAS PROTETIVAS DE URGÊNCIA (MPU) – 2019 - DEM</h2>
    </div>
    <!--<fieldset>
      <fieldset class="grupo">-->

    <div class="vx-card__title mb-8">

      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <vs-card actionable class="cardx">

            <div class="titulo">
              <h3>QUALIFICAÇÃO DA OFENDIDA </h3>
            </div>

            <vs-input
              icon="icon icon-user"
              id="CPF"
              icon-pack="feather"
              label-placeholder="CPF"
              style="width: 50em"
              v-model="CPF"
              value="CpfOfendida"
              class="w-full no-icon-border"/>

            <vs-input
              icon="icon icon-user"
              id="nome"
              icon-pack="feather"
              label-placeholder="Nome"
              style="width: 50em"
              v-model="NOME"
              value="nomeOfendida"
              class="w-full no-icon-border"/>

            <vs-input
              icon="icon icon-user"
              id="nomeSocial"
              icon-pack="feather"
              label-placeholder="Nome Social"
              style="width: 50em"
              v-model="nomeSocial"
              value="nomeOfendida"
              class="w-full no-icon-border"/>

            <vs-input
              icon="icon icon-user"
              id="RGOfendida"
              icon-pack="feather"
              label-placeholder="RG da Ofendida"
              style="width: 50em"
              v-model="RG"
              value="RG da Ofendida"
              class="w-full no-icon-border"/>

            <vs-input
              icon="icon icon-user"
              id="filiofendida"
              icon-pack="feather"
              label-placeholder="Filiação Ofendida(Mãe ou Pai)"
              style="width: 50em"
              v-model="FILIACAO"
              value="filiacao ofendida"
              class="w-full no-icon-border"/>

            <vs-input
              icon="icon icon-user"
              id="enderofendida"
              icon-pack="feather"
              label-placeholder="Endereço"
              style="width: 50em"
              v-model="END"
              value="enderecoOfendida"
              class="w-full no-icon-border"/>

            <vs-divider></vs-divider>

            <div class="centerx labelx">
              <vs-input
                id="Telefone"
                label="Telefone da Ofendida"
                v-model="telefone"/>
            </div>

            <vs-divider></vs-divider>

            <div class="checkbox">
              <vs-checkbox
                class="mb-3"
                name= "documentoidentidade"
                value="true"
                v-model="s"> NÃO APRESENTOU COMPROVANTE DE RESIDÊNCIA
              </vs-checkbox>
            </div>

            <div class="checkbox">
              <vs-checkbox
                class="mb-3"
                name= "comprovante de residencia"
                value="true"
                v-model="s"> NÃO APRESENTOU DOC. DE IDENTIFICAÇÃO
              </vs-checkbox>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>


      <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
          <vs-card actionable class="cardx">

            <div class="titulo">
              <h3>QUALIFICAÇÃO DO AUTOR </h3>
            </div>

            <vs-input
              icon="icon icon-user"
              id="CPF"
              icon-pack="feather"
              label-placeholder="CPF"
              style="width: 50em"
              v-model="CPF"
              value="CpfOfendida"
              class="w-full no-icon-border"/>

            <vs-input
              icon="icon icon-user"
              id="nome"
              icon-pack="feather"
              label-placeholder="Nome"
              style="width: 50em"
              v-model="NOME"
              value="nomeOfendida"
              class="w-full no-icon-border"/>

            <vs-input
              icon="icon icon-user"
              id="RGOfendida"
              icon-pack="feather"
              label-placeholder="RG da Ofendida"
              style="width: 50em"
              v-model="RG"
              value="RG da Ofendida"
              class="w-full no-icon-border"/>

            <vs-input
              icon="icon icon-user"
              id="filiofendida"
              icon-pack="feather"
              label-placeholder="Filiação (Mãe ou Pai)"
              style="width: 50em"
              v-model="FILIACAO"
              value="filiacao ofendida"
              class="w-full no-icon-border"/>

            <vs-input
              icon="icon icon-user"
              id="enderofendida"
              icon-pack="feather"
              label-placeholder="Endereço"
              style="width: 50em"
              v-model="END"
              value="enderecoOfendida"
              class="w-full no-icon-border"/>

            <vs-divider></vs-divider>

            <div class="centerx labelx">
              <vs-input
                id="Telefone"
                label="Telefone"
                v-model="telefone"/>
            </div>
            <vs-divider></vs-divider>
            <div class="checkbox">
              <vs-checkbox
                class="mb-3"
                name= "comprovante de residencia"
                value="true"
                v-model="s"> ENDEREÇO ACIMA INDICADO É O QUE CONSTA NOS SISTEMAS SIGO/SIGMA
              </vs-checkbox>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </div>
    <vs-divider></vs-divider>
    <vs-button @click="$vs.notify({title:'Sucesso',
                  text:'Informações Salvas',
                  color:'success'})" color="primary"
               type="gradient" name="submit" @click.prevent="postPost()">Enviar</vs-button>
    <!--</fieldset>-->
  </form>
  <!--</vs-card>
</vs-col>
</vs-row>-->
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
      CPF: '',
      NOME:'',
      RG:'',
      FILIACAO:'',
      END:'',
      CIDADE: '',
      TRUE: 'Sim',
      FALSE: 'Não',
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
        console.log(this.CPF)
        console.log(this.NOME)
        console.log(this.RG)
        console.log(this.FILIACAO)
        console.log(this.END)
        console.log(this.CIDADE)
        console.log(this.TRUE)
        console.log(this.FALSE)
        axios
          .post(`http://localhost:3333/processos`, {
            body: {
              CPF: this.CPF,
              NOME: this.NOME,
              RG:this.RG,
              FILIACAO:this.FILIACAO,
              END:this.END,
              CIDADE:this.CIDADE,
              TRUE:this.TRUE,
              FALSE:this.FALSE


            }
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

  .tituloLeft{
    margin-bottom: 2em;
    text-align: left;

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
