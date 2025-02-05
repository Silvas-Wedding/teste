let currentSlide = 0;
const slides = document.querySelectorAll('.slide_CH');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

// Atualiza o slider para o slide atual
function updateSlider() {
    const newTransformValue = `translateX(-${currentSlide * 100}%)`;

    document.querySelector('.slides_CH').style.transform = newTransformValue;



    updateDots();
}

// Atualiza os indicadores de ponto
function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Muda para o próximo slide
function moveToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Muda para o slide anterior
function moveToPreviousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Adiciona eventos de clique para os pontos
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.getAttribute('data-slide'));
        updateSlider();
    });
});

// Intervalo para mudar automaticamente a cada 3 segundos
setInterval(moveToNextSlide, 3000);