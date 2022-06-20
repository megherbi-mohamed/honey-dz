import React, {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

    const [icon, seticon] = useState(faAngleDown)
    const [homeBorder, sethomeBorder] = useState('')
    const [aboutBorder, setaboutBorder] = useState('')
    const [dropDown, setdropDown] = useState('')

    let initNavbar = {transform:'',boxShadow:''};
    const [navbar, setnavbar] = useState(initNavbar)
    
    const dispatch = useDispatch();
    const displayCart = () => {
        dispatch({ type: 'display', payload: {cart:'!translate-x-[0]',hideBody:'!block'}})
    }

    const displaySideBar = () => {
        dispatch({ type: 'display', payload: {sideBar:'!translate-x-[0]',hideBody:'!block'}})
    }

    const { isEmpty ,totalUniqueItems } = useCart()

    useEffect(() => {
        window.addEventListener("scroll", runOnScroll)
        return () => {
            window.removeEventListener("scroll", runOnScroll);
        }
    },[]);

    var lastScrollTop = 0;
    function runOnScroll() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st === 0){
            setnavbar({transform:'',boxShadow:''})
        } 
        else if (st > lastScrollTop){
            setnavbar({transform:'!-translate-y-[100%]',boxShadow:''})
        } else {
            setnavbar({transform:'',boxShadow:'0 4px 20px #0000000a'})
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }

    return (
        <>
            <div className={`w-full fixed top-0 left-0 bg-[#f8f8f8] border-box z-40 transition ease-in-out duration-300 delay-0 ${navbar.transform}`} style={{boxShadow:`${navbar.boxShadow}`}}>
                <div className="w-full lg:max-w-[calc(1280px+calc(35px/1.25)*2)] px-[16px] lg:px-[28px] mx-auto grid grid-cols-3">
                    <div className="flex items-center">
                        <svg onClick={()=>displaySideBar()} className="w-[20px] h-[55px] lg:hidden" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path>
                        </svg> 
                        <div className='relative' onMouseEnter={() => {sethomeBorder('!w-[40px]');seticon(faAngleUp);setdropDown('!visible !translate-y-[0] !opacity-100')}} onMouseLeave={() => {sethomeBorder('');seticon(faAngleDown);setdropDown('')}}>
                            <Link to="/collections/swimwear" className="items-center relative hidden lg:flex">
                                <h4 className="mr-[10px] text-[#bd8c27] py-[20px] pl-[16px]" onClick={()=>setdropDown('')}>SHOP</h4>
                                <FontAwesomeIcon icon={icon} className="text-[10px] text-[#bd8c27]" />
                                <div className={`absolute bottom-[13px] left-[16px] border-b-2 border-[#bd8c27] transition-[width] ease-in-out duration-500 w-0 ${homeBorder}`}></div>
                            </Link>
                            <div className={`absolute z-10 w-[250px] text-[#bd8c27] top-[60px] invisible opacity-0 translate-y-[20px] transition ease-in-out duration-500 p-[15px] bg-white flex flex-col drop-shadow-sm ${dropDown}`}>
                                <Link to="/collections/honey" className="p-[10px] hover:bg-[#f8f8f8]" onClick={()=>setdropDown('')}>HONEY</Link>
                                <Link to="/collections/honeycomb" className="p-[10px] hover:bg-[#f8f8f8]" onClick={()=>setdropDown('')}>HONEYCOMB</Link>
                                <Link to="/collections/gifts" className="p-[10px] hover:bg-[#f8f8f8]" onClick={()=>setdropDown('')}>GIFTS</Link>
                                <Link to="/collections/candles" className="p-[10px] hover:bg-[#f8f8f8]" onClick={()=>setdropDown('')}>CANDLES</Link>
                                <Link to="/collections/courses" className="p-[10px] hover:bg-[#f8f8f8]" onClick={()=>setdropDown('')}>COURSES</Link>
                            </div>
                        </div>
                        <Link to="/about" className="relative" onMouseEnter={() => setaboutBorder('!w-[50px]')} onMouseLeave={() => setaboutBorder('')}>
                            <h4 className="ml-[15px] text-[#bd8c27] py-[20px] px-[16px] hidden lg:block">ABOUT</h4>
                            <div className={`absolute bottom-[13px] left-[31px] border-b-2 border-[#bd8c27] transition-[width] ease-in-out duration-500 w-0 ${aboutBorder}`}></div>
                        </Link>
                    </div>
                    <div className="relative">
                        <Link to="/">
                            <img src="/images/logo.webp" alt="" className="w-[190px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-end">
                        <Link to={user ? '/account' : '/account/signin'} className="hidden lg:block py-[14px] px-[13px]">
                            <FontAwesomeIcon icon={faUser} className="text-[13px] text-[#bd8c27] w-[20px] h-[13px]" />
                        </Link>
                        <div className="relative flex items-end py-[8px] pl-[13px] pr-[6px] md:px-[13px]">
                            <svg className="w-[13px] h-[20px] cursor-pointer" fill="#bd8c27" onClick={()=>displayCart()} stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 412"><path d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z"></path></svg>
                            {isEmpty ? <div></div> : (
                                <div className="w-[22px] h-[22px] rounded-full bg-[#da3f3f] relative">
                                    <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-[12px]">{totalUniqueItems}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar