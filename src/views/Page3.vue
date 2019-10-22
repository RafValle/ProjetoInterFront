<template>
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
    <h2>TERMO DE CONSENTIMENTO DE INTIMAÇÃO POR WHATSAPP</h2>
    </div>
    <fieldset>
      <fieldset class="grupo">
        <div class="campo">
          <label for="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            style="width: 40em"
            v-model="postsBody"
            value="nomeOfendida"
          />
          <label for="nome">CPF</label>
          <input
            type="text"
            id="CPF"
            name="CPF"
            style="width: 40em"
            v-model="postsBody"
            value="cpfOfendida"
          />
          <label for="nome">Rg da Ofendida</label>
          <input
            type="text"
            id="RG"
            name="CPF"
            style="width: 40em"
            v-model="postsBody"
            value="rgOfendida"
          />
          <label for="nome">Data de nascimento da Ofendida</label>
          <input
            type="text"
            id="DATANASOFE"
            name="DataNascimentoOfendida"
            style="width: 40em"
            v-model="postsBody"
            value="dataNascimentoOfendida"
          />
          <label for="nome">Documento de Identidade?</label>
          <label>
            <input type="radio" name="sexo" value="true" v-model="postsBody" /> Sim
          </label>
          <label>
            <input type="radio" name="sexo" value="false" v-model="postsBody" /> Não
          </label>
          <label for="nome">Trouxe comprovante de residencia?</label>
          <label>
            <input type="radio" name="sexo" value="true" v-model="postsBody" /> Sim
          </label>
          <label>
            <input type="radio" name="sexo" value="false" v-model="postsBody" /> Não
          </label>
          <label for="nome">Filiação Ofendida(Mãe ou Pai)</label>
          <input
            type="text"
            id="CPF"
            name="CPF"
            style="width: 40em"
            v-model="postsBody"
            value="filiacaoOfendida"
          />
          <label for="nome">Endereço da Ofendida</label>
          <input
            type="text"
            id="CPF"
            name="CPF"
            style="width: 40em"
            v-model="postsBody"
            value="enderecoOfendida"
          />
        </div>
        <div class="campo"></div>
      </fieldset>

      <div class="campo">
        <label for="telefone">Telefone</label>
        <input type="text" id="telefone" name="telefone" style="width: 10em" v-model="postsBody"/>
      </div>

      <fieldset class="grupo">
        <div class="campo">
          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" style="width: 10em" v-model="postsBody"/>
        </div>
        <div class="campo">
          <label for="estado">Estado</label>
          <select name="estado" id="estado" v-model="postsBody">
            <option value>--</option>
            <option value="PR">MA</option>
            <option value="PR">RJ</option>
            <option value="PR">SP</option>
          </select>
        </div>
      </fieldset>
      <button type="submit" name="submit" @click="postPost()">Enviar</button>
    </fieldset>
  </form>
</template>



<script>
import axios from "axios";

const base = axios.create({
  baseURL: "http://localhost:3333"
});

export default {
  data() {
    postsBody: null;
    return {
      postsBody: [],
      errors: []
    };
  },

  // Fetches posts when the component is created.
  created() {
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

  postPost() {
    axios
      .post(`http://localhost:3333/processos`, {
        body: this.postsBody
      })
      .then(response => {
        this.form = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
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
  margin-bottom: 0.4em;
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