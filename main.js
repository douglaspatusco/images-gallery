$(document).ready(function() { // Slide Down do "NOVA IMAGEM"
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() { // Slide Up do "CANCELAR"
        $('form').slideUp();
    })

    $('form').on('submit', function(evento) { // Evento do 'submit'
        console.log("submit");
        evento.preventDefault();
    })
})