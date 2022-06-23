import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { IKImage } from 'imagekitio-react';
import './Slider.css'

export default function Slider() {

    let images = [
        {src: 'Slide_3_desktop_JZlNcONlS.webp'},
        {src: 'Slide_2_desktop_D4Dh5a16L.webp'},
        {src: 'Slide_1_desktop_2DvWlpyih.webp'},
    ]

    const [slideIndex, setSlideIndex] = useState(1)
    let intiDropDown = {button1:'!visible md:!translate-y-[0] !opacity-100',button2:'',button3:'',button4:'',button5:''}
    const [dropDown, setdropDown] = useState(intiDropDown)

    // var intervalTime = 4000;
    
    // const nextSlide = () => {
    //     if(slideIndex !== 5){
    //         if (slideIndex === 1) {
    //             setdropDown({button1:'!visible md:!translate-y-[0] !opacity-100'})
    //         }
    //         else if (slideIndex === 2) {
    //             setdropDown({button2:'!visible md:!translate-y-[0] !opacity-100'})
    //         }
    //         else if (slideIndex === 3) {
    //             setdropDown({button3:'!visible md:!translate-y-[0] !opacity-100'})
    //         }
    //         else if (slideIndex === 4) {
    //             setdropDown({button4:'!visible md:!translate-y-[0] !opacity-100'})
    //         }
    //     } 
    //     else if (slideIndex === 5){
    //         setSlideIndex(5)
    //         setdropDown({button5:'!visible md:!translate-y-[0] !opacity-100'})
    //         setSlideIndex(1)
            
    //     }
    // }

    // const prevSlide = () => {
    //     if(slideIndex !== 1){
    //         setSlideIndex(slideIndex - 1)
    //     }
    //     else if (slideIndex === 1){
    //         setSlideIndex(dataSlider.length)
    //     }
    // }

    // var sildeInterval = setInterval(nextSlide, intervalTime);

    const moveDot = index => {
        if (index === 1) {
            setSlideIndex(1)
            setdropDown({button1:'!visible md:!translate-y-[0] !opacity-100'})
        }
        else if (index === 2) {
            setSlideIndex(2)
            setdropDown({button2:'!visible md:!translate-y-[0] !opacity-100'})
        }
        else if (index === 3) {
            setSlideIndex(3)
            setdropDown({button3:'!visible md:!translate-y-[0] !opacity-100'})
        }
        else if (index === 4) {
            setSlideIndex(4)
            setdropDown({button4:'!visible md:!translate-y-[0] !opacity-100'})
        }
        else if (index === 5) {
            setSlideIndex(5)
            setdropDown({button5:'!visible md:!translate-y-[0] !opacity-100'})
        }
    }

    // useEffect(() => {
        // console.log(slideIndex);
        // clearInterval(sildeInterval)
        // setInterval(nextSlide, intervalTime);
        // var sildeInterval = setInterval(nextSlide, intervalTime);
    // }, [slideIndex])

    return (
        <div className="container-slider">
            <>
                {images.map((image,i) => (
                    <div key={i} className={slideIndex === i + 1 ? "slide active-anim" : "slide"} >
                        <IKImage path={image.src} lqip={{ active: true, quality: 10, blur: 10 }} loading="lazy" className="w-auto"
                        />
                    </div>
                ))}
                <div className="container-dots">
                    {images.map(function(image,i){
                        return (
                            <div key={i} className="svg-wrapper" onClick={() => moveDot(i + 1)}>
                                <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="10" className={slideIndex === i + 1 ? "shape shape-active" : "shape"} height="10" width="10"></circle>
                                </svg>
                                <div className="circle"></div>
                            </div>  
                        )
                    })}
                </div>
                <Link className={`w-[80%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[10px] px-[35px] bg-white text-black text-sm text-center transition duration-[600ms] ease-in-out border-[2px] border-[#bd8c27] ${dropDown.button1} z-10 after:content-[''] after:z-[-1] after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[-17px] after:bg-white after:rotate-45 after:w-[30px] after:h-[30px] after:border-[0_0_2px_2px] after:border-[#bd8c27] befor:content-[''] before:z-[-1] before:absolute before:top-[50%] before:translate-y-[-50%] before:right-[-17px] before:bg-white before:rotate-45 before:w-[30px] before:h-[30px] before:border-[2px_2px_0_0] before:border-[#bd8c27]`} to="/">Discover</Link>
                <Link className={`w-[80%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[10px] px-[35px] bg-white text-black text-sm text-center transition duration-[600ms] ease-in-out border-[2px] border-[#bd8c27] ${dropDown.button2} z-10 after:content-[''] after:z-[-1] after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[-17px] after:bg-white after:rotate-45 after:w-[30px] after:h-[30px] after:border-[0_0_2px_2px] after:border-[#bd8c27] befor:content-[''] before:z-[-1] before:absolute before:top-[50%] before:translate-y-[-50%] before:right-[-17px] before:bg-white before:rotate-45 before:w-[30px] before:h-[30px] before:border-[2px_2px_0_0] before:border-[#bd8c27]`} to="/">Discover</Link>
                <Link className={`w-[80%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[10px] px-[35px] bg-white text-black text-sm text-center transition duration-[600ms] ease-in-out border-[2px] border-[#bd8c27] ${dropDown.button3} z-10 after:content-[''] after:z-[-1] after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[-17px] after:bg-white after:rotate-45 after:w-[30px] after:h-[30px] after:border-[0_0_2px_2px] after:border-[#bd8c27] befor:content-[''] before:z-[-1] before:absolute before:top-[50%] before:translate-y-[-50%] before:right-[-17px] before:bg-white before:rotate-45 before:w-[30px] before:h-[30px] before:border-[2px_2px_0_0] before:border-[#bd8c27]`} to="/">Discover</Link>
            </>
        </div>
    )
}
