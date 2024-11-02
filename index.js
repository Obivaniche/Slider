// Константы и пересенные
const images = document.querySelectorAll('.image');
const slider = document.querySelector('.slider');
const wrapper = document.querySelector('.slider-wrapper');
const next = document.querySelector('.button_next');
const prev = document.querySelector('.button_prev');
let count = 0;
let width;
let time = 1000 * 4;
let timer = setInterval(() => autoSlide(), time);

// Адаптивность слайдера
function resize() {
    width = wrapper.offsetWidth;
    slider.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    slide();
};

// Слушатель изменений размера окна
window.addEventListener('resize', resize);
resize();

// Кнопка следующего слайда
next.addEventListener('click', () => {
    count++;
    if (count >= images.length) {
        count = 0;
    };
    slide();
});

// Кнопка предыдущего слайда
prev.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    slide();
});

// Функция смены слайда
function slide() {
    slider.style.transform = 'translate(-' + count * width + 'px)';
};

// Автоматическое перелистывание
function autoSlide() {
    count++;
    if (count >= images.length) {
        count = 0;
    };
    slide();
};

// Отключение автоперелистывания при наведении курсора
wrapper.addEventListener('mouseover', () => {
    clearInterval(timer);
});

// Включение автоперелистывания при пропадании курсора
wrapper.addEventListener('mouseleave', () => {
    timer = setInterval(() => autoSlide(), time);
});
