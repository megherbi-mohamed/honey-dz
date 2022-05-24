export const productQuickSlider = () => {
    const carouselSlide2 = document.querySelector(".carousel-slide-2");
    const carouselImages2 = document.querySelectorAll(".carousel-slide-2 img");
    const prevBtn2 = document.querySelector("#prevBtn2");
    const nextBtn2 = document.querySelector("#nextBtn2");

    let counter2 = 1;
    const size2 = carouselImages2[0].clientWidth;

    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

    nextBtn2.addEventListener('click',() => {
        nextSlide2();
    })

    prevBtn2.addEventListener('click',() => {
        prevSlide2();
    })

    function nextSlide2(){
        if (counter2 >= carouselImages2.length - 1) return;
        carouselSlide2.style.transition = "transform 0.4s ease-in-out";
        counter2++;
        carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    }
    
    function prevSlide2(){
        if (counter2 <= 0) return;
        carouselSlide2.style.transition = "transform 0.4s ease-in-out";
        counter2--;
        carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    }

    carouselSlide2.addEventListener('transitionend',() => {
        if (carouselImages2[counter2].id === 'last_clone') {
            carouselSlide2.style.transition = "none";
            counter2 = carouselImages2.length - 2;
            carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
        }
        if (carouselImages2[counter2].id === 'first_clone') {
            carouselSlide2.style.transition = "none";
            counter2 = carouselImages2.length - counter2;
            carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
        }
    })
}
