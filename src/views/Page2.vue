<template>
	
<form action="#" method="post">
<link rel="stylesheet" type="text/css" href="page.css" media="screen" />
    <h2>Avaliação de Risco</h2>
    <h6>____</h6>

    
    <fieldset>
<<<<<<< HEAD
      <fieldset class="grupo">
=======
        <fieldset class="grupo">
            <div class="campo">
                <label for="nome">CPF</label>
                <input type="text" id="CPF" name="CPF" style="width: 40em" value="">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" style="width: 40em" value="">
                <label for="snome">Sobrenome</label>
                <input type="text" id="snome" name="snome" style="width: 40em" value="">
                <label for="filiação">Filiação</label>
                <input type="text" id="filiação" nome="filiação" style="width: 40em" value="">
            </div>
            <div class="campo">
                
            </div>
        </fieldset>
>>>>>>> master
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