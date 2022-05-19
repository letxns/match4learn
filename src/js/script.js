$("#btn_frm_newsletter").click(function (event) {
  event.preventDefault();
  let emailNewsLetter = $("#inptutEmailNewsLetter").val();

  if (
    emailNewsLetter.indexOf("@") >= 0 &&
    emailNewsLetter.indexOf(".") >= 0 &&
    emailNewsLetter.indexOf(" ") <= 0
  ) {
    console.log(emailNewsLetter);
    $("#modal-mensagem").modal();
  } else {
    $("#retornoEmail").html(`E-mail Inválido`);
  }
});

$("#btnBuscaCep").click(function (event) {
  event.preventDefault();
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

  let email = $("inputEmail").val();
  let senha = $("inputSenha").val();
  let cep = $("inputZip").val();
  let logradouro = $("logradouro").val();
  let numero = $("numero").val();
  let bairro = $("bairro").val();
  let cidade = $("cidade").val();
  let uf = $("uf").val();
  let aceite = $("gridCheck").val();

  console.log(email);
  console.log(senha);
  console.log(cep);
  console.log(logradouro);
  console.log(numero);
  console.log(bairro);
  console.log(cidade);
  console.log(uf);
  console.log(aceite);
});
