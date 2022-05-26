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
  validaSenha();
  validaCep();
  validaNumero();

  $("#retornoSucesso").html(`<p class='retornoSucesso'>E-mail cadastrado com sucesso</p>`);
}

function validaCep(){
  let zip = $("#inputZip").val();

  if(zip.length < 8){
    $("#retornoZip").html(`<p class="zipInvalido">Digite um CEP válido</p>`);
  }else{        
    $("#retornoZip").html(`<p></p>`);      
  } 
}

function validaNome(){
  let nome = $("#inputNome").val();

  if(nome.length === 0){
    $("#retornoNome").html(`<p class="nomeInvalido">Nome Inválido</p>`);
  }else{        
    $("#retornoNome").html(`<p></p>`);      
  } 
}

function validaNumero(){
  let numero = $("#numero").val();

  if(numero.length === 0){
    $("#retornoNumero").html(`<p class="numeroInvalido">Digite um número</p>`);
  }else{        
    $("#retornoNumero").html(`<p></p>`);      
  } 
}

function validaSenha(){
  let senha = $("#inputSenha").val();

  if(senha.length <= 6 || senha.length >= 16){
    $("#retornoSenha").html(`<p class="senhaInvalida">Digite uma senha entre 6 a 16 caracteres.</p>`);
  }else{        
    $("#retornoSenha").html(`<p></p>`);      
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


$(document).ready(function (){
  validate();
  $('#inputNome, #inputEmail, #inputSenha, #inputZip, #logradouro, #numero, #bairro, #cidade, #uf').change(validate);
});

function validate(){
  if ($('#inputNome').val().length > 0 &&
      $('#inputEmail').val().length > 0 &&
      $('#inputSenha').val().length > 0 &&
      $('#inputZip').val().length > 0 &&
      $('#logradouro').val().length > 0 &&
      $('#numero').val().length > 0 &&
      $('#bairro').val().length > 0 &&
      $('#cidade').val().length > 0 &&
      $('#uf').val().length > 0
      
      
      ) {
      $("#btnCadastrar").prop("disabled", false);
  }
  else {
      $("#btnCadastrar").prop("disabled", true);
  }
}