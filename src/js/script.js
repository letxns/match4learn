$("#btn_frm_newsletter").click(function (event) {
  event.preventDefault();
  validarLogin();
  // $("#modal-lista").modal();

});

$("#btn_login").click(function () {
  validarLogin();
  // $("#modal-login").modal();
});

function validarLogin(){
  validaNome();
  validaEmail();
}

function validaNome(){
  let nome = $("#inputNome").val();

  if(nome.length === 0){
    // $("#modal-mensagem").modal();
    $("#retornoNome").html(`<p class="nomeInvalido">Nome Inválido</p>`);
  }else{        
    $("#retornoNome").html(`<p></p>`);      
  } 
}

function validaEmail(){
  let email = $("#inputEmail").val();

  if (
    email.indexOf("@") >= 0 &&
    email.indexOf(".") >= 0 &&
    email.indexOf(" ") <= 0
    
  ) {
    $("#retornoEmail").html(`<p class='emailValidado'>E-mail cadastrado com sucesso</p>`);
    
  }else{        
    $("#retornoEmail").html(`<p class='emailInvalido' >E-mail Inválido</p>`);      
  }   
}

$("#inputZip").on('blur', function () {
  const url = "https://viacep.com.br/ws/";
  const cep = $("#inputZip").val();
  const complemento = "/json/";

  $.ajax({
    url: `${url}${cep}${complemento}`,
    success: function (resultado) {
      $("#logradouro").val(resultado.logradouro);
      $("#bairro").val(resultado.bairro);
      $("#cidade").val(resultado.localidade);
      $("#uf").val(resultado.uf);
    },
  });
});

$("#btnCadastrar").click(function (event) {
  event.preventDefault();

  let email = $("#inputEmail").val();
  let senha = $("#inputSenha").val();
  let cep = $("#inputZip").val();
  let logradouro = $("#logradouro").val();
  let numero = $("#numero").val();
  let bairro = $("#bairro").val();
  let cidade = $("#cidade").val();
  let uf = $("#uf").val();
  let aceite = $('#gridCheck').prop('checked')


  console.log(email);
  console.log(senha);
  console.log(cep);
  console.log(logradouro);
  console.log(numero);
  console.log(bairro);
  console.log(cidade);
  console.log(uf);
  console.log(aceite);

  validarLogin();
});

