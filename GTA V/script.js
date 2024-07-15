const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 47}%`;
})

const goNext = () => {
    counter++;
    if (counter > slides.length - 1) {
        counter = 0;
    }
    slideImage();
}

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImage();
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}
