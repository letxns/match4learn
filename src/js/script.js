

$('#btn_frm_newsletter').click(function(event){
    event.preventDefault();
    let emailNewsLetter = $('#inptutEmailNewsLetter').val();

        if(emailNewsLetter.indexOf('@') >= 0 && emailNewsLetter.indexOf('.') >= 0 && emailNewsLetter.indexOf(' ') <= 0 ){
            console.log(emailNewsLetter)
            $("#modal-mensagem").modal();
        }else{
                $('#retornoEmail').html(`E-mail Inválido`)
            }
        }


   
        
    )


    /*    
     ########  API BUSCA CEP   ########

     https://viacep.com.br/ws/${cep}/json/
    
    */