let index = 0;
let intervalo;

function mover(direcao) {
    const imagens = document.querySelectorAll(".carrossel-container img");
    const totalImagens = imagens.length;
    console.log(totalImagens)

    index = (index + direcao + totalImagens) % totalImagens;

    const carrosselContainer = document.querySelector(".carrossel-container");
    carrosselContainer.style.transform = `translateX(-${index *100}%)`;
}

function iniciarCarrossel() {
    intervalo = setInterval(() => {
        mover(1);  
    }, 5000); 
}

function pausarCarrossel() {
    clearInterval(intervalo);
}

const carrossel = document.querySelector(".carrossel-container");
carrossel.addEventListener("mouseover", pausarCarrossel);
carrossel.addEventListener("mouseout", iniciarCarrossel);

// Inicia o carrossel automaticamente
iniciarCarrossel();
