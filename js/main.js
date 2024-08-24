$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Este campo é obrigatório!',
            email: 'Este campo é obrigatório!',
            mensagem: 'Este campo é obrigatório!',
        },
        submitHandler: function (form) {
            alert("Sua mensagem foi enviada. Logo entraremos em contato.");
            form.reset();
        },
        invalidHandler: function (_form, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos){
                alert("Por favor, preencha os campos corretamente para prosseguir.");
            }
        }
    })
})    