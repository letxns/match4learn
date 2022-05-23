class cadastroView {
    renderizaCadastro(cadastro) {
        $('#lista').html(`<div>
        <h6>${cadastro.nome}</h6>
        <p>${cadastro.email}</p>
        <p>${cadastro.senha}</p>
        <p>${cadastro.cep}</p>
        <p>${cadastro.logradouro}</p>
        <p>${cadastro.numero}</p>
        <p>${cadastro.bairro}</p>
        <p>${cadastro.cidade}</p>
        <p>${cadastro.uf}</p>
        </div>`)
        
        //$("#notes").html(`<div><h6>${anotacoes.titulo}</h6><p>${anotacoes.notas}</p></div>`);
        /*$('#notes').html(`${$('#notes').html()}<div><h6>${titulo}</h6><p>${anotacao}</p></div>`)*/
    }
}

/*

    CÓDIGO DA BREAKOUT ROOM

class AnotacoesView {
    renderizaAnotacao(Anotacao) {
        const divNova = document.createElement("div")
        const h6Novo = document.createElement("h6");
        divNova.appendChild(h6Novo);
        const insereTitulo = document.getElementById("titulo");
        const insereTexto = document.getElementById("descricaoTarefa");
        console.log(renderizaAnotacao)
    }
}
*/