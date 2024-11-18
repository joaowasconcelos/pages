function mostrarDescricao(id) {
    // Esconde todas as descrições e carrosséis
    const descricoes = document.querySelectorAll('.descricao');
    descricoes.forEach(function(descricao) {
        descricao.style.display = 'none';
    });

    // Exibe apenas a descrição e carrossel selecionados
    const descricaoSelecionada = document.getElementById('descricao-' + id);
    if (descricaoSelecionada) {
        descricaoSelecionada.style.display = 'flex'; // Flex para alinhar lado a lado
        iniciarCarrossel(id); // Inicia a navegação automática do carrossel
    }
}

// Função para mover o carrossel manualmente
function moverCarrossel(tipo, direcao) {
    const container = document.querySelector(`#descricao-${tipo} .carrossel-container`);
    const larguraImagem = container.querySelector('img').clientWidth;
    const atual = container.style.transform ? parseInt(container.style.transform.replace('translateX(', '').replace('px)', '')) : 0;

    const novoDeslocamento = atual + (direcao * larguraImagem);

    // Impede que o carrossel saia da área visível
    const limiteEsquerda = -(container.scrollWidth - container.clientWidth);
    if (novoDeslocamento <= 0 && novoDeslocamento >= limiteEsquerda) {
        container.style.transform = `translateX(${novoDeslocamento}px)`;
    }
}

// Função para iniciar a navegação automática do carrossel
function iniciarCarrossel(tipo) {
    const container = document.querySelector(`#descricao-${tipo} .carrossel-container`);
    let indiceImagem = 0;
    const imagens = container.querySelectorAll('img');
    
    setInterval(function() {
        // Mover para a próxima imagem
        indiceImagem = (indiceImagem + 1) % imagens.length; // Volta ao início após a última imagem
        container.style.transform = `translateX(-${indiceImagem * 100}%)`;
    }, 3000); // 3 segundos para cada imagem
}
