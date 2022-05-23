class cadastroController{
    constructor(){
        this.array = [];
    }

    addCadastro(){
        const nome = $('#inputNome').val()
        const email = $('#inputEmail').val()
        const senha = $('#inputSenha').val()
        const cep = $('#inputZip').val()
        const logradouro = $('#logradouro').val()
        const numero = $('#numero').val()
        const bairro = $('#bairro').val()
        const cidade = $('#cidade').val()
        const uf = $('#uf').val()
        
       const Cadastro = new Cadastro(nome, email, senha, cep, logradouro, numero, bairro, cidade, uf);
        console.log(Cadastro);
        this.array.push(Cadastro);
        console.log(this.array);
        const cadastriView = new cadastroView();
        cadastriView.renderizaCadastro(Cadastro);
    }
}

const novoCadastro = new cadastroController();



$('#btnCadastrar').click(function (event) {
    event.preventDefault();

    novoCadastro.Cadastro();

})








/*

    CÓDIGO BREAKOUT ROOM

class AnotacoesController {
    constructor(array){
        array = [];
        addAnotacoes = () => {
            titulo = document.querySelector("#titulo").val();
            descricaoTarefa = document.querySelector("#descricaoTarefa").val();
            console.log(AnotacoesController)
        }
    }
}*/