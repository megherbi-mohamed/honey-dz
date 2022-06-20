import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { productQuickSlider } from './Functions'

const Carousel = (props) => {

    useEffect(() => {
        productQuickSlider()
    }, [props])

    return (
        <div className="w-full overflow-hidden relative">
            <div className={`w-full flex flex-row items-center carousel-slide-2`}>
                <img className="min-w-full" src={`/images/${props.images[0].front}`} id="last_clone" alt="3" />
                <img className="min-w-full" src={`/images/${props.images[1].side}`} alt="1" />
                <img className="min-w-full" src={`/images/${props.images[0].front}`} alt="3" />
                <img className="min-w-full" src={`/images/${props.images[1].side}`} id="first_clone" alt="1" />
            </div>
            <button type="button" className={`absolute px-[15px] py-[11px] rounded-[100%] top-[50%] -translate-y-[50%] left-[20px] bg-white text-black transition duration-500 ease-in-out hover:bg-black hover:text-white`} id="prevBtn2">
                <FontAwesomeIcon icon={faArrowLeft} className="" />
            </button>
            <button type="button" className={`absolute px-[15px] py-[11px] rounded-[100%] top-[50%] -translate-y-[50%] right-[20px] bg-white text-black transition duration-500 ease-in-out hover:bg-black hover:text-white`} id="nextBtn2">
                <FontAwesomeIcon icon={faArrowRight} className="" />
            </button>
        </div>
    )
}

export default Carousel