import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { IKImage, IKContext } from 'imagekitio-react';
import './Slider.css'

export default function Slider() {

    // let images = [
    //     {srcDesktop: '/images/slide_1_desktop.webp',srcMobile:'/images/slide_1_mobile.webp',placeholder:'/images/slide_1_progressive.webp'},
    //     {srcDesktop: '/images/slide_2_desktop.webp',srcMobile:'/images/slide_2_mobile.webp',placeholder:'/images/slide_2_progressive.webp'},
    //     {srcDesktop: '/images/slide_3_desktop.webp',srcMobile:'/images/slide_3_mobile.webp',placeholder:'/images/slide_3_progressive.webp'},
    // ]

    let images = [
        {src: 'Slide_3_desktop_JZlNcONlS.webp'},
        {src: 'Slide_2_desktop_D4Dh5a16L.webp'},
        {src: 'Slide_1_desktop_2DvWlpyih.webp'},
    ]

    // const width = window.innerWidth;

    const [slideIndex, setSlideIndex] = useState(1)
    let intiDropDown = {button1:'!visible md:!translate-y-[0] !opacity-100',button2:'',button3:'',button4:'',button5:''}
    const [dropDown, setdropDown] = useState(intiDropDown)
    const breakpoint = 620;

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

    const urlEndpoint = 'https://ik.imagekit.io/vsmksnvdh/';
    
    
    return (
        <div className="container-slider">
            <>
                {images.map(function(image,i){
                    return (
                        <IKContext urlEndpoint={urlEndpoint}>
                            <div key={i} className={slideIndex === i + 1 ? "slide active-anim" : "slide"} >
                                <IKImage
                                    path={image.src}
                                    // transformation={[{ quality: 10, blur: 10 }]}
                                    lqip={{ active: true, quality: 10, blur: 10 }}
                                    loading="lazy"
                                    width="auto"
                                />
                            </div>
                        </IKContext>
                    )
                })}
                <div className="container-dots">
                    {images.map(function(image,i){
                        // let button = 'button'+i
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
                {/* <Link className={`w-[92%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[12px] px-[35px] bg-white text-black text-sm text-center rounded-[5px] transition duration-[600ms] ease-in-out outline outline-0 outline-black hover:outline-[3px] hover:bg-black hover:text-white ${dropDown.button2}`} to="/">Discover</Link>
                <Link className={`w-[92%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[12px] px-[35px] bg-white text-black text-sm text-center rounded-[5px] transition duration-[600ms] ease-in-out outline outline-0 outline-black hover:outline-[3px] hover:bg-black hover:text-white ${dropDown.button3}`} to="/">Discover</Link>
                <Link className={`w-[92%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[12px] px-[35px] bg-white text-black text-sm text-center rounded-[5px] transition duration-[600ms] ease-in-out outline outline-0 outline-black hover:outline-[3px] hover:bg-black hover:text-white ${dropDown.button4}`} to="/">Discover</Link>
                <Link className={`w-[92%] md:w-auto absolute bottom-[96px] md:bottom-[96px] left-[50%] md:left-auto -translate-x-[50%] md:translate-x-0 md:right-[165px] invisible opacity-0 translate-y-[40px] py-[12px] px-[35px] bg-white text-black text-sm text-center rounded-[5px] transition duration-[600ms] ease-in-out outline outline-0 outline-black hover:outline-[3px] hover:bg-black hover:text-white ${dropDown.button5}`} to="/">Discover</Link> */}
            </>
        </div>
    )
}
