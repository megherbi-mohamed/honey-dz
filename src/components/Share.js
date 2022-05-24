import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons';

const AskQuestion = () => {

    const display = useSelector((state) => state.display);
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const hide = () => {
        dispatch({ type: 'display', payload: {share:'',hideBody:''}})
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 hidden ${display.share}`}>
            <div className="w-[90vw] md:w-[380px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white p-[24px] rounded-[5px]">
                <h2 className="mb-[14px] text-[16px]">Copy link</h2>
                <input type="text" value={window.location.href} className="mt-[5px] mb-[20px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-black"/>
                <h2 className="mb-[14px] text-[16px]">Share:</h2>
                <div className="flex items-center mt-[10px]">
                    <FontAwesomeIcon icon={faFacebookF} className="mx-[10px]" />
                    <FontAwesomeIcon icon={faPinterestP} className="mx-[10px]" />
                    <FontAwesomeIcon icon={faTwitter} className="mx-[10px]" />
                </div>
                <div className='hidden md:block absolute top-[10px] right-[10px] bg-white w-[30px] h-[30px] rounded-full hover:bg-gray-300 cursor-pointer' onClick={()=>hide()}>
                    <FontAwesomeIcon icon={faXmark} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black'/>
                </div>
            </div>
            <div className='md:hidden absolute top-[10px] right-[10px] bg-white w-[30px] h-[30px] rounded-full hover:bg-gray-300 cursor-pointer' onClick={()=>hide()}>
                <FontAwesomeIcon icon={faXmark} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black'/>
            </div>
        </div>
    )
}

export default AskQuestion