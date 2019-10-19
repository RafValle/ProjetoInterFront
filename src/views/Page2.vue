<template>
	
<form action="#" method="post">
<link rel="stylesheet" type="text/css" href="page.css" media="screen" />
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