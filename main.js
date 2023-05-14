$(document).ready(function() { // Slide Down do "NOVA IMAGEM"
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() { // Slide Up do "CANCELAR"
        $('form').slideUp();
    })

    $('form').on('submit', function(evento) { // Evento do 'submit'
        evento.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); // Ele vai inserir elemento entre os <li></li>
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');
    })
})