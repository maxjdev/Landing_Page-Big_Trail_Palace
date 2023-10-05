$(document).ready(function() {
    $(`#carousel-images`).slick({
        autoplay: true,
    });
    $(`.menu-hamburguer`).click(function() {
        $(`nav`).slideToggle();
    });
    $(`.lista-veiculos button`).click(function() {
        const destino = $(`#contato`);
        const nomeVeiculo = $(this).parent().find(`h3`).text();
        $(`#veiculoDeInteresse`).val(nomeVeiculo);

        $(`html`).animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    $(`#telefone`).mask(`(00) 00000-0000`, {
        placeholder: `(00) 00000-0000`
    });
    $(`form`).validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoDeInteresse: {
                required:false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: `Por favor insira seu nome`,
            telefone: `Por favor digite seu telefone / celular`
        },
        submitHandler: function(form, e) {
            e.preventDefault();
            alert(`Sua proposta de interesse foi enviada, entraremos em contato com você !`)
            $(nome).val(``);
            $(telefone).val(``);
            $(email).val(``);
            $(veiculoDeInteresse).val(``);
            $(mensagem).val(``);
        },
        invalidHandler: function(event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });
});
