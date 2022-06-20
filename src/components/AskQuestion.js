import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const AskQuestion = () => {

    const display = useSelector((state) => state.display);
    const dispatch = useDispatch();
    const hide = () => {
        dispatch({ type: 'display', payload: {askQuestion:'',hideBody:''}})
    }

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 overflow-y-auto hidden ${display.askQuestion}`}>
            <div className="w-[90vw] mx-auto my-[50px] md:absolute md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%] md:w-[500px] bg-white p-[32px] text-center rounded-[5px]">
                <h1 className="mb-[24px] text-[30px] md:text-[36px]">Ask a Question</h1>
                <form>
                    <input type="text" name="name" placeholder="Your Name*" defaultValue={''} className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-black"/>
                    <input type="text" name="phone" placeholder="Your Phone Number" defaultValue={''} className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-black"/>
                    <input type="email" name="email"placeholder="Your Email*" defaultValue={''} className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-black"/>
                    <textarea name="message" placeholder="Your Message*" defaultValue={''} className="w-full h-[150px] mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-black"></textarea>
                    <button type="submit" className="mx-auto mt-[40px] px-[32px] py-[10px] bg-black text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-black hover:outline-[3px]">Submit Now</button>
                </form>
                <div className='absolute top-[10px] right-[10px] bg-white w-[30px] h-[30px] rounded-full hover:bg-gray-300 cursor-pointer' onClick={()=>hide()}>
                    <FontAwesomeIcon icon={faXmark} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black'/>
                </div>
            </div>
        </div>
    )
}

export default AskQuestion