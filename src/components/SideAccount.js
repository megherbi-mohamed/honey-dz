import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'

import { signin,signup } from '../actions/auth';

const SideAccount = () => {

    const display = useSelector((state) => state.display);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const alert = useAlert()


    const hide = () => {
        dispatch({ type: 'display', payload: {sideAccount:'',hideBody:''}})
    }

    const displaySideAccountLogin = () => {
        dispatch({ type: 'display', payload: {sideAccount:'!translate-x-[0]',login:'border-b-[2px] border-black pb-[6px]',register:'border-0',loginContainer:'block',registerContainer:'hidden'}})
    }

    const displaySideAccountRegister = () => {
        dispatch({ type: 'display', payload: {sideAccount:'!translate-x-[0]',register:'border-b-[2px] border-black pb-[6px]',login:'border-0',loginContainer:'hidden',registerContainer:'block'}})
    }

    const {loading} = useSelector((state) => state.message);

    const initialState = { firstname: '', lastname: '', email: '', password: ''}
    const [form, setForm] = useState(initialState)

    const handleSignup = (e) => {
        e.preventDefault()
        if (form.firstname === '') {alert.error('Enter your firstname please',{ timeout: 4000})}
        else if (form.lastname === '') {alert.error('Enter your lastname please',{ timeout: 4000})}
        else if (form.email === '') {alert.error('Enter your email please',{ timeout: 4000})}
        else if (form.password === '') {alert.error('Enter your password please',{ timeout: 4000})}
        else {
            dispatch(signup(form, navigate))
        }
    }

    const switchHandle = () => {
        setForm({firstname:'',lastname:'',email:'',password:''})
        document.getElementById("signin").reset();
        document.getElementById("signup").reset();
    }

    const handleSignin = (e) => {
        e.preventDefault()
        if (form.email === '') {alert.error('Enter your email please',{ timeout: 4000})}
        else if (form.password === '') {alert.error('Enter your lastname please',{ timeout: 4000})}
        else {
            dispatch(signin(form, navigate))
        }
    }
    
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    
    return (
        <div className={`w-full h-full block lg:hidden bg-white px-[16px] pt-[16px] pb-[40px] z-50 fixed top-0 left-0 transition duration-500 ease-in-out translate-x-[100%] ${display.sideAccount}`}>
            <FontAwesomeIcon icon={faXmark} className="absolute top-[16px] right-[18px] text-[25px] cursor-pointer" onClick={()=>hide()}/>
            <div className="mt-[32px]">
                <div className="flex py-[8px] items-center">
                    <button className={`mr-[16px] py-[8px] ${display.login}`} onClick={()=>{displaySideAccountLogin();switchHandle()}}>Log in</button>
                    <button className={`mr-[16px] py-[8px] ${display.register}`} onClick={()=>{displaySideAccountRegister();switchHandle()}}>Register</button>
                </div>
                <div className={`mt-[24px] ${display.loginContainer}`}>
                    <form onSubmit={handleSignin} id="signin">
                        <input onChange={handleChange} type="email" name="email" placeholder="Email" autoComplete='off' className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <input onChange={handleChange} type="password" name="password" placeholder="Password" className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <button type="submit" className="mt-[16px] mb-[12px] px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]">
                            {loading ?  (<div className='loader-button'></div>) : ('Sign in')}
                        </button>
                    </form>
                </div>
                <div className={`mt-[24px] ${display.registerContainer}`}>
                    <form onSubmit={handleSignup} id="signup">
                        <input onChange={handleChange} type="text" name="firstname" placeholder="First Name" autoComplete='off' className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <input onChange={handleChange} type="text" name="lastname"  placeholder="Last Name" autoComplete='off' className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <input onChange={handleChange} type="email" name="email" placeholder="Email" autoComplete='off' className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <input onChange={handleChange} type="password" name="password" placeholder="Password" className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <p className="mt-[12px]">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails</p>
                        <button type="submit" className="mt-[16px] mb-[12px] px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]">
                            {loading ?  (<div className='loader-button'></div>) : ('Register')}
                        </button>
                    </form>
                    <Link className="py-[10px] bg-transparent text-black text-sm text-center rounded-[5px] transition-[outline] duration-600 ease-in-out border border-black outline outline-0 outline-black inline-block w-full hover:outline-[3px] hover:bg-black hover:text-white" to="/account" onClick={()=>hide()}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SideAccount