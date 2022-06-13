import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import * as actionType from '../constants/actionTypes';

const SideBar = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

    const [collections, setcollections] = useState('')

    const display = useSelector((state) => state.display);
    const dispatch = useDispatch();
    const hide = () => {
        dispatch({ type: 'display', payload: {sideBar:'',hideBody:''}})
    }

    const displaySideAccountLogin = () => {
        dispatch({ type: 'display', payload: {sideAccount:'!translate-x-[0]',login:'border-b-[2px] border-black pb-[6px]',register:'border-0',loginContainer:'block',registerContainer:'hidden'}})
    }

    const displaySideAccountRegister = () => {
        dispatch({ type: 'display', payload: {sideAccount:'!translate-x-[0]',register:'border-b-[2px] border-black pb-[6px]',login:'border-0',loginContainer:'hidden',registerContainer:'block'}})
    }
    
    const navigate = useNavigate();
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/account/signin');
    };

    return (
        <div className={`w-full h-full flex lg:hidden z-50 fixed top-0 left-0 transition duration-500 ease-in-out -translate-x-[100%] ${display.sideBar}`}>
            <div className="bg-white w-[90%] md:w-[450px] h-full flex flex-row overflow-hidden">
                <div className="min-w-full h-full flex flex-col justify-between relative">
                    <div className="pt-[32px]">
                        <div className="flex items-center">
                            <Link to="/collections" className="w-[90%] px-[16px] py-[12px]" onClick={()=>hide()}>SHOP</Link>
                            <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer" onClick={()=>setcollections("!-translate-x-[100%]")}/>
                        </div>
                        <Link to="/about" className="w-[100%] block px-[16px] py-[12px]" onClick={()=>hide()}>ABOUT</Link>
                    </div>
                    {!user ? (
                        <div className="mb-[64px] p-[16px]">
                            <h2 className="mb-[24px] text-black text-[20px]">My Account</h2>
                            <button type="button" className="mt-[16px] mb-[12px] px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]" onClick={()=>displaySideAccountLogin()}>Login in</button>
                            <button type="button" className="py-[10px] bg-transparent text-black text-sm text-center rounded-[5px] transition-[outline] duration-600 ease-in-out border border-[#bd8c27] outline outline-0 outline-[#bd8c27] inline-block w-full hover:outline-[3px] hover:bg-[#bd8c27] hover:text-white"  onClick={()=>displaySideAccountRegister()}>Register</button>
                        </div>
                    ) : (
                        <div className='w-full absolute bottom-0 left-0 p-[16px_16px_80px_16px]'>
                            <h2 className='text-[1.25rem] mb-[1.5rem]'>My Account</h2>
                            <Link to='/account' onClick={()=>hide()} className=''>
                                <div className='w-full flex items-center justify-between py-[12px] mb-[12px]'>
                                    <div className='flex items-center'>
                                        <FontAwesomeIcon icon={faUser} className="w-[25px] h-[18px]" />
                                        <span className='ml-2'>{user?.result.firstname}</span>
                                    </div>
                                    <FontAwesomeIcon icon={faChevronRight} className="text-[12px]"/>
                                </div>
                            </Link>
                            <button className="py-[10px] bg-transparent text-[#bd8c27] text-sm text-center rounded-[5px] transition-[outline] duration-600 ease-in-out border border-[#bd8c27] outline outline-0 outline-[#bd8c27] inline-block w-full hover:outline-[3px] hover:bg-[#bd8c27] hover:text-white" onClick={()=>{logout();hide()}}>Logout</button>
                        </div>
                    )}
                </div>
                <div className={`min-w-full bg-white transition duration-500 ease-in-out ${collections}`}>
                    <button className="p-[16px]" onClick={()=>setcollections("")}>
                        <FontAwesomeIcon icon={faArrowLeft} className=""/>
                        <span className="ml-[12px] text-[16px]">Back</span>
                    </button>
                    <Link to="/collections/honey" className="w-[100%] block px-[16px] py-[12px]" onClick={()=>hide()}>HONEY</Link>
                    <Link to="/collections/honeycomb" className="w-[100%] block px-[16px] py-[12px]" onClick={()=>hide()}>HONEYCOMB</Link>
                    <Link to="/collections/gifts" className="w-[100%] block px-[16px] py-[12px]" onClick={()=>hide()}>GIFTS</Link>
                    <Link to="/collections/candles" className="w-[100%] block px-[16px] py-[12px]" onClick={()=>hide()}>CANDLES</Link>
                    <Link to="/collections/courses" className="w-[100%] block px-[16px] py-[12px]" onClick={()=>hide()}>COURSES</Link>
                </div>
            </div>
            <div className="w-full w-[10%] md:w-[calc(100%-450px)] h-full" onClick={()=>hide()}></div>
        </div>
    )
}

export default SideBar