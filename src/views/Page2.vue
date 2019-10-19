<template>
	
<form action="#" method="post">
    <h2>MPU</h2>
    <h6>____</h6>
    
    <fieldset>
        <fieldset class="grupo">
            <div class="campo">
                <label for="nome">CPF</label>
                <input type="text" id="CPF" name="CPF" style="width: 40em" value="">
                <label for="nome">Nome</label>
                <input type="text" id="nome" name="nome" style="width: 40em" value="">
                <label for="snome">Sobrenome</label>
                <input type="text" id="snome" name="snome" style="width: 40em" value="">
            </div>
            <div class="campo">
                
            </div>
        </fieldset>
        <div class="campo">
            <label>Sexo</label>
            <label>
                <input type="radio" name="sexo" value="masculino"> Masculino
            </label>
            <label>
                <input type="radio" name="sexo" value="feminino"> Feminino
            </label>
        </div>
        <div class="campo">
            <label for="email">E-mail</label>
            <input type="text" id="email" name="email" style="width: 20em" value="">
        </div>
        <div class="campo">
            <label for="telefone">Telefone</label>
            <input type="text" id="telefone" name="telefone" style="width: 10em" value="">
        </div>

        <fieldset class="grupo">
            <div class="campo">
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" style="width: 10em" value="">
            </div>
            <div class="campo">
                <label for="estado">Estado</label>
                <select name="estado" id="estado">
                    <option value="">--</option>
                    <option value="PR">PR</option>
                </select>
            </div>
        </fieldset>
        <button type="submit" name="submit">Enviar</button>
    </fieldset>
</form>
</template>

<!-- css-->
<style >

* {
    margin: 0;
    padding: 0;
}

fieldset {
    border: 0;
}

body, input, select, textarea, button {
    font-family: sans-serif;
    font-size: 1em;
}

.grupo:before, .grupo:after {
    content: " ";
    display: table;
}

.grupo:after {
    clear: both;
}

.campo {
    margin-bottom: 1em;
}

.campo label {
    margin-bottom: 0.2em;
    color: #666;
    display: block;
}

fieldset.grupo .campo {
    float:  left;
    margin-right: 1em;
}

.campo input[type="text"],
.campo input[type="email"],
.campo input[type="url"],
.campo input[type="tel"],
.campo select,
.campo textarea {
    padding: 0.2em;
    border: 1px solid #CCC;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    display: block;
}

.campo select option {
    padding-right: 1em;
}

.campo input:focus, .campo select:focus, .campo textarea:focus {
    background: #FFC;
}

.campo label.checkbox {
    color: #000;
    display: inline-block;
    margin-right: 1em;
}

.botao {
    font-size: 1.5em;
    background: #7367F0;
    border: 0;
    margin-bottom: 1em;
    color: #FFF;
    padding: 0.2em 0.6em;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
}

.botao:hover {
    background: #7367F0;
    box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
    text-shadow: none;
}

.botao, select, label.checkbox {
    cursor: pointer;
}
</style>