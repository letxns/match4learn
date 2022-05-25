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
    }
}