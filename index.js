const images = document.querySelectorAll('.image');
const slider = document.querySelector('.slider');
const wrapper = document.querySelector('.slider-wrapper');
const next = document.querySelector('.button_next');
const prev = document.querySelector('.button_prev');
let count = 0;
let width;

function resize() {
    width = wrapper.offsetWidth;
    slider.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    slide();
};

window.addEventListener('resize', resize);
resize();

next.addEventListener('click', () => {
    count++;
    if (count >= images.length) {
        count = 0;
    };
    slide();
});

prev.addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    slide();
});

function slide() {
    slider.style.transform = 'translate(-' + count * width + 'px)';
};

function autoSlide() {
    count++;
    if (count >= images.length) {
        count = 0;
    };
    slide();
};

let time = 1000 * 4;
let timer = setInterval(() => autoSlide(), time);

wrapper.addEventListener('mouseover', () => {
    clearInterval(timer);
});

wrapper.addEventListener('mouseleave', () => {
    timer = setInterval(() => autoSlide(), time);
});
