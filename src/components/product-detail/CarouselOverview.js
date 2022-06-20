import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { productOverviewSlider } from './Functions'

const CarouselOverview = () => {

    const display = useSelector((state) => state.display);
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const hide = () => {
        dispatch({ type: 'display', payload: {carouselOverview:'',hideBody:''}})
    }

    useEffect(() => {
        productOverviewSlider()
    }, [display])

    return (
        <div className={`w-full h-full fixed top-0 left-0 z-50 hidden bg-[#000000] ${display.carouselOverview}`}>
            <div className="w-full md:w-[50%] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] overflow-hidden">
                <div className={`w-fulll flex flex-row items-center carousel-slide-1`}>
                    <img className="min-w-full" src={`/images/${data.front}`} id="last_clone" alt="3" />
                    <img className="min-w-full" src={`/images/${data.side}`} alt="1" />
                    <img className="min-w-full" src={`/images/${data.front}`} alt="3" />
                    <img className="min-w-full" src={`/images/${data.side}`} id="first_clone" alt="1" />
                </div>
            </div>
            <button type='button' className={`absolute top-[20px] right-[20px] text-white`} onClick={()=>hide()}>
                <img className="w-[22px] invert" src="/svg/xmark.svg"></img>
                {/* <object type="image/svg+xml" data="YETOBE.svg"></object> */}
                {/* <FontAwesomeIcon icon={faXmark} className="text-[25px]" /> */}
            </button>
            <button type="button" className={`hidden md:block absolute px-[15px] py-[11px] rounded-[4px] top-[50%] -translate-y-[50%] left-[30px] bg-[#0000006b] text-white`} id="prevBtn1">
                <FontAwesomeIcon icon={faAngleLeft} className="text-[25px]" />
            </button>
            <button type="button" className={`hidden md:block absolute px-[15px] py-[11px] rounded-[4px] top-[50%] -translate-y-[50%] right-[30px] bg-[#0000006b] text-white`} id="nextBtn1">
                <FontAwesomeIcon icon={faAngleRight} className="text-[25px]" />
            </button>
        </div>
    )
}

export default CarouselOverview