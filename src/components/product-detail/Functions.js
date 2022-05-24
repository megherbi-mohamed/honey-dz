export const productSlider = () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");
    const sideImages = document.querySelectorAll(".side-image div");
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    const carouselButton = document.querySelectorAll(".carousel-button span");
    console.log(carouselButton.length);

    // var intervalTime = 3000;
    // var sildeInterval = setInterval(nextSlide, intervalTime);

    let counter = 1;
    const size = carouselImages[0].clientWidth;

    sideImages[0].style.border = '1px solid #000';
    carouselButton[0].classList.add("after:opacity-80","after:border-[2px]","after:border-[#000]","after:bg-[#f8f8f8]","after:content-['']","after:w-[16px]","after:h-[16px]","after:absolute","after:rounded-full","after:top-[50%]","after:left-[50%]","after:translate-y-[-50%]","after:translate-x-[-50%]")
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click',() => {
        nextSlide();
        // clearInterval(sildeInterval);
    })

    prevBtn.addEventListener('click',() => {
        prevSlide();
        // clearInterval(sildeInterval);
    })

    function nextSlide(){
        if (counter >= carouselImages.length - 1) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        if (counter === 2) {
            sideImages[1].style.border = '1px solid #000';
            sideImages[0].style.border = '';
            carouselButton[1].classList.add("after:opacity-80","after:border-[2px]","after:border-[#000]","after:bg-[#f8f8f8]","after:content-['']","after:w-[16px]","after:h-[16px]","after:absolute","after:rounded-full","after:top-[50%]","after:left-[50%]","after:translate-y-[-50%]","after:translate-x-[-50%]")
            carouselButton[0].classList.remove("after:opacity-80","after:border-[2px]","after:border-[#000]","after:bg-[#f8f8f8]","after:content-['']","after:w-[16px]","after:h-[16px]","after:absolute","after:rounded-full","after:top-[50%]","after:left-[50%]","after:translate-y-[-50%]","after:translate-x-[-50%]")
        } 
        else{
            sideImages[0].style.border = '1px solid #000';
            sideImages[1].style.border = '';
            carouselButton[0].classList.add("after:opacity-80","after:border-[2px]","after:border-[#000]","after:bg-[#f8f8f8]","after:content-['']","after:w-[16px]","after:h-[16px]","after:absolute","after:rounded-full","after:top-[50%]","after:left-[50%]","after:translate-y-[-50%]","after:translate-x-[-50%]")
            carouselButton[1].classList.remove("after:opacity-80","after:border-[2px]","after:border-[#000]","after:bg-[#f8f8f8]","after:content-['']","after:w-[16px]","after:h-[16px]","after:absolute","after:rounded-full","after:top-[50%]","after:left-[50%]","after:translate-y-[-50%]","after:translate-x-[-50%]")
        }
    }
    
    function prevSlide(){
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        if (counter === 0) {
            sideImages[1].style.border = '1px solid #000';
            sideImages[0].style.border = '';
            carouselButton[1].classList.add("after:opacity-80","after:border-[2px]","after:border-[#000]","after:bg-[#f8f8f8]","after:content-['']","after:w-[16px]","after:h-[16px]","after:absolute","after:rounded-full","after:top-[50%]","after:left-[50%]","after:translate-y-[-50%]","after:translate-x-[-50%]")
            carouselButton[0].classList.remove("after:opacity-80","after:border-[2px]","after:border-[#000]","after:bg-[#f8f8f8]","after:content-['']","after:w-[16px]","after:h-[16px]","after:absolute","after:rounded-full","after:top-[50%]","after:left-[50%]","after:translate-y-[-50%]","after:translate-x-[-50%]")
        } 
        else{
            sideImages[0].style.border = '1px solid #000';
            sideImages[1].style.border = '';
            carouselButton[0].classList.add("after:opacity-80","after:border-[2px]","after:border-[#000]","after:bg-[#f8f8f8]","after:content-['']","after:w-[16px]","after:h-[16px]","after:absolute","after:rounded-full","after:top-[50%]","after:left-[50%]","after:translate-y-[-50%]","after:translate-x-[-50%]")
            carouselButton[1].classList.remove("after:opacity-80","after:border-[2px]","after:border-[#000]","after:bg-[#f8f8f8]","after:content-['']","after:w-[16px]","after:h-[16px]","after:absolute","after:rounded-full","after:top-[50%]","after:left-[50%]","after:translate-y-[-50%]","after:translate-x-[-50%]")
        }
    }

    carouselButton[0].addEventListener('click',() => {
        nextSlide();
    })

    carouselButton[1].addEventListener('click',() => {
        prevSlide();
    })

    // carouselSlide.addEventListener('mouseover', ()=>{
    //     clearInterval(sildeInterval);
    // });

    // carouselSlide.addEventListener('mouseleave', ()=>{
    //     sildeInterval = setInterval(nextSlide, intervalTime);
    // });

    carouselSlide.addEventListener('transitionend',() => {
        if (carouselImages[counter].id === 'last_clone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (carouselImages[counter].id === 'first_clone') {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    })
}

window.addEventListener('resize', productSlider);

export const productOverviewSlider = () => {
    const carouselSlide1 = document.querySelector(".carousel-slide-1");
    const carouselImages1 = document.querySelectorAll(".carousel-slide-1 img");
    const prevBtn1 = document.querySelector("#prevBtn1");
    const nextBtn1 = document.querySelector("#nextBtn1");

    let counter1 = 1;
    const size1 = carouselImages1[0].clientWidth;

    carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';

    nextBtn1.addEventListener('click',() => {
        console.log('click');
        nextSlide1();
    })

    prevBtn1.addEventListener('click',() => {
        prevSlide1();
    })

    function nextSlide1(){
        if (counter1 >= carouselImages1.length - 1) return;
        carouselSlide1.style.transition = "transform 0.4s ease-in-out";
        counter1++;
        carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
    }
    
    function prevSlide1(){
        if (counter1 <= 0) return;
        carouselSlide1.style.transition = "transform 0.4s ease-in-out";
        counter1--;
        carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
    }

    carouselSlide1.addEventListener('transitionend',() => {
        if (carouselImages1[counter1].id === 'last_clone') {
            carouselSlide1.style.transition = "none";
            counter1 = carouselImages1.length - 2;
            carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
        }
        if (carouselImages1[counter1].id === 'first_clone') {
            carouselSlide1.style.transition = "none";
            counter1 = carouselImages1.length - counter1;
            carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
        }
    })
}