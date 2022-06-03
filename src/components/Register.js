import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useAlert } from 'react-alert'

import { signup } from '../actions/auth';

const Register = () => {

    const loading = useSelector((state) => state.loading);

    const initialState = { firstname: '', lastname: '', email: '', password: ''}
    const [form, setForm] = useState(initialState)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alert = useAlert()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.firstname === '') {alert.error('Enter your firstname please',{ timeout: 4000})}
        else if (form.lastname === '') {alert.error('Enter your lastname please',{ timeout: 4000})}
        else if (form.email === '') {alert.error('Enter your lastname please',{ timeout: 4000})}
        else if (form.password === '') {alert.error('Enter your lastname please',{ timeout: 4000})}
        else {
            dispatch(signup(form, navigate))
        }
    }
    
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <>
            <div className="mt-[60px] px-[16px] py-[30px] md:py-[56px] text-center">
                <h1 className="text-[24px] md:text-[42px]">Register</h1>
                <div className="flex items-center justify-center">
                    <Link to="/" className="px-[16px] py-[8px] text-[.9rem]">Home</Link>
                    <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
                    <span className="px-[16px] md:p-[16px] text-[.9rem]">Create Account</span>
                </div>
            </div>
            <div className="py-[64px]">
                <div className="w-[90%] md:w-[34%] mx-auto">
                    <h3 className="mb-[16px] text-[1.2rem]">Register</h3>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} type="text" name="firstname" placeholder="First Name" className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <input onChange={handleChange} type="text" name="lastname"  placeholder="Last Name" className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <input onChange={handleChange} type="email" name="email" placeholder="Email" className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <input onChange={handleChange} type="password" name="password" placeholder="Password" className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <p className="mt-[12px]">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails</p>
                        <button type="submit" className="mt-[16px] mb-[12px] px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]">
                            {loading.button ?  (<div className='loader-button'></div>) : ('Register')}
                        </button>
                    </form>
                    <Link className="py-[10px] bg-transparent text-[#bd8c27] text-sm text-center rounded-[5px] transition-[outline] duration-600 ease-in-out border border-[#bd8c27] outline outline-0 outline-[#bd8c27] inline-block w-full hover:outline-[3px] hover:bg-[#bd8c27] hover:text-white" to="/account">Login</Link>
                </div>
            </div>
        </>
    )
}

export default Register