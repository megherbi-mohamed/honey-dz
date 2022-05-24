import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'

import { productSlider } from './Functions'

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

    return (
        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-[70px,calc(100%-90px)] grid-rows-auto gap-[20px] justify-center">
            <div className="w-full overflow-hidden md:rounded-[10px] relative" onMouseEnter={()=>settransform('!translate-x-[0]')} onMouseLeave={()=>settransform('')}>
                <div className={`w-full flex flex-row items-center carousel-slide`}>
                    {
                        
                    }
                    <img className="min-w-full" src={`/images/${props.front}`} alt="3" />
                </div>
                <button type='button' className={`absolute bottom-[20px] md:bottom-auto md:top-[20px] right-[20px] px-[14px] py-[11px] rounded-[100%] bg-white text-black transition duration-500 ease-in-out md:translate-x-[100px] ${transform} hover:bg-black hover:text-white`} onClick={()=>displayCarouselOverview()}>
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} className="" />
                </button>
                <button type="button" className={`absolute px-[15px] py-[11px] rounded-[100%] top-[50%] -translate-y-[50%] left-[10px] md:left-[20px] -translate-x-[100px] bg-white text-black transition duration-500 ease-in-out ${transform} hover:bg-black hover:text-white`} id="prevBtn">
                    <FontAwesomeIcon icon={faArrowLeft} className="" />
                </button>
                <button type="button" className={`absolute px-[15px] py-[11px] rounded-[100%] top-[50%] -translate-y-[50%] right-[10px] md:right-[20px] translate-x-[100px] bg-white text-black transition duration-500 ease-in-out ${transform} hover:bg-black hover:text-white`} id="nextBtn">
                    <FontAwesomeIcon icon={faArrowRight} className="" />
                </button>
            </div>
        </div>
        
    )
}

export default Carousel