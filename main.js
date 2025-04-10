$(document).ready(function () {
    // Função para renderizar a imagem
    function adicionarImagem(enderecoDaImagem) {
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaImagem}" target="_blank" title="View full size image">
                    View full size image
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
    }

    // Carrega imagens do localStorage ao iniciar
    const imagensSalvas = JSON.parse(localStorage.getItem('galeriaImagens')) || []
    imagensSalvas.forEach(imagem => adicionarImagem(imagem))

    // Botão de abrir formulário
    $('header button[type="button"]').click(function () {
        $('form').slideDown()
    })

    // Botão cancelar
    $('#botao-cancelar').click(function () {
        $('form').slideUp()
    })

    // Ao enviar formulário
    $('form').on('submit', function (evento) {
        evento.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()

        if (enderecoDaNovaImagem.trim() !== '') {
            adicionarImagem(enderecoDaNovaImagem)

            // Atualiza localStorage
            imagensSalvas.push(enderecoDaNovaImagem)
            localStorage.setItem('galeriaImagens', JSON.stringify(imagensSalvas))

            $('#endereco-imagem-nova').val('')
        }
    })

// Botão para limpar a galeria
    $('#limpar-galeria').click(function () {
        const confirmacao = confirm('Are you sure you want to clear the entire gallery?')

        if (confirmacao) {
            localStorage.removeItem('galeriaImagens')
            $('ul').empty()

            setTimeout(() => {
                alert('Gallery cleared successfully!')
            }, 250)
        }
    })
})
