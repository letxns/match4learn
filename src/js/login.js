cadastro = {
    nome: "Lucas Marques",
    email: "lucasmarques17@ig.com",
    senha: "@#*Thmo#",
    cep: '04939120',
    logradouro: "Rua Bento Rodrigues",
    numero: '469',
    bairro: 'Jardim Tupi',
    cidade: 'São Paulo',
    uf: 'SP',
    termo: true,

}

$('#btn_login').click(function(event){
    event.preventDefault()

  

    let email= $('#inputEmail').val()

if(email === cadastro.email){
    alert('email cadastrado')
}else{
    alert('O e-mail cadastrado não existe. Você será redirecionado')
    window.location.href=('./cadastro.html')
}

})