import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { IKContext,IKImage } from 'imagekitio-react';
import { productSlider } from './Functions'

import '../Slider.css'

const Carousel = (props) => {
    
    const [transform, settransform] = useState('')

    useEffect(() => {
        productSlider()
    }, [])

    const dispatch = useDispatch();
    const displayCarouselOverview = () => {
        dispatch({ type: 'display', payload: {carouselOverview:'!block',hideBody:'!block'}})
        dispatch({ type: 'data', payload: {front:props.front,side:props.side}})
    }

    const urlEndpoint = 'https://ik.imagekit.io/vsmksnvdh/';

    return (
        <IKContext urlEndpoint={urlEndpoint}>
            <div className="w-full px-[20px] md:px-[16px] grid grid-cols-1 md:grid-cols-[70px,calc(100%-90px)] grid-rows-auto gap-[20px] justify-center">
                <div className="hidden md:flex flex-col side-image">
                    <div className="w-[70px] border border-[1px] border-white p-[5px] mb-[20px]">
                        <IKImage path={props.side} lqip={{ active: true, quality: 10, blur: 10 }} loading="lazy" className="w-full" />
                        {/* <img className="w-full" src={`/images/`+props.side} alt="" /> */}
                    </div>
                    <div className="w-[70px] border border-[1px] border-white p-[5px] mb-[20px]">
                        <IKImage path={props.front} lqip={{ active: true, quality: 10, blur: 10 }} loading="lazy" className="w-full" />
                    </div>
                </div>
                <div className="w-full overflow-hidden md:rounded-[10px] relative" onMouseEnter={()=>settransform('!translate-x-[0]')} onMouseLeave={()=>settransform('')}>
                    <div className="w-full flex flex-row items-center carousel-slide">
                        <IKImage path={props.front} lqip={{ active: true, quality: 10, blur: 10 }} loading="lazy" className="min-w-full" id="last_clone" alt="3"/>
                        <IKImage path={props.side} lqip={{ active: true, quality: 10, blur: 10 }} loading="lazy" className="min-w-full" alt="1"/>
                        <IKImage path={props.front} lqip={{ active: true, quality: 10, blur: 10 }} loading="lazy" className="min-w-full" alt="3"/>
                        <IKImage path={props.side} lqip={{ active: true, quality: 10, blur: 10 }} loading="lazy" className="min-w-full" id="first_clone" alt="1"/>
                        {/* <img className="min-w-full" src={`/images/${props.front}`} id="last_clone" alt="3" />
                        <img className="min-w-full" src={`/images/${props.side}`} alt="1" />
                        <img className="min-w-full" src={`/images/${props.front}`} alt="3" />
                        <img className="min-w-full" src={`/images/${props.side}`} id="first_clone" alt="1" /> */}
                    </div>
                    <button type='button' className={`absolute bottom-[20px] md:bottom-auto md:top-[20px] right-[20px] px-[14px] py-[13px] rounded-[100%] bg-white text-black transition duration-500 ease-in-out md:translate-x-[100px] ${transform} hover:bg-black hover:text-white`} onClick={()=>displayCarouselOverview()}>
                        <svg class="w-[18px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" stroke="currentColor">
                            <path d="M319.8 204v8c0 6.6-5.4 12-12 12h-84v84c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12v-84h-84c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h84v-84c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12zm188.5 293L497 508.3c-4.7 4.7-12.3 4.7-17 0l-129-129c-2.3-2.3-3.5-5.3-3.5-8.5v-8.5C310.6 395.7 261.7 416 208 416 93.8 416 1.5 324.9 0 210.7-1.5 93.7 93.7-1.5 210.7 0 324.9 1.5 416 93.8 416 208c0 53.7-20.3 102.6-53.7 139.5h8.5c3.2 0 6.2 1.3 8.5 3.5l129 129c4.7 4.7 4.7 12.3 0 17zM384 208c0-97.3-78.7-176-176-176S32 110.7 32 208s78.7 176 176 176 176-78.7 176-176z"></path>
                        </svg>
                    </button>
                    <button type="button" className={`hidden md:block absolute px-[15px] py-[11px] rounded-[100%] top-[50%] -translate-y-[50%] left-[10px] md:left-[20px] -translate-x-[100px] bg-white text-black transition duration-500 ease-in-out ${transform} hover:bg-black hover:text-white`} id="prevBtn">
                        <FontAwesomeIcon icon={faArrowLeft} className="" />
                    </button>
                    <button type="button" className={`hidden md:block absolute px-[15px] py-[11px] rounded-[100%] top-[50%] -translate-y-[50%] right-[10px] md:right-[20px] translate-x-[100px] bg-white text-black transition duration-500 ease-in-out ${transform} hover:bg-black hover:text-white`} id="nextBtn">
                        <FontAwesomeIcon icon={faArrowRight} className="" />
                    </button>
                </div>
                <div className="flex w-full justify-center md:hidden items-center carousel-button">
                    <span className="cursor-pointer mx-[6px] my-[2px] w-[10px] h-[10px] transition duration-[250ms] ease-in-out relative border-transparent rounded-full bg-[#dedede]"></span>
                    <span className="cursor-pointer mx-[6px] my-[2px] w-[10px] h-[10px] transition duration-[250ms] ease-in-out relative border-transparent rounded-full bg-[#dedede]"></span>
                    {/* <span className="cursor-pointer mx-[6px] my-[2px] w-[10px] h-[10px] transition duration-[250ms] ease-in-out relative border-transparent rounded-full bg-[#dedede]"></span>
                    <span className="cursor-pointer mx-[6px] my-[2px] w-[10px] h-[10px] transition duration-[250ms] ease-in-out relative border-transparent rounded-full bg-[#dedede]"></span> */}
                </div>
            </div>
        </IKContext>
    )
}

export default Carousel