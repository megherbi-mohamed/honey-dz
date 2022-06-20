import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'

import { signin } from '../../actions/auth';

const Signin = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const {message, loading} = useSelector((state) => state.message);

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const initialState = { email: '', password: ''}
    const [form, setForm] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.email === '') {alert.error('Enter your email please',{ timeout: 4000})}
        else if (form.password === '') {alert.error('Enter your password please',{ timeout: 4000})}
        else{
            dispatch(signin(form, navigate))
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/account')
        }
    }, [])
    
    
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    useEffect(() => {
        if (message !== '') {
            alert.success(message,{ timeout: 2000})
        }
    }, [message])

    return (
        <>
            <div className="mt-[60px] px-[16px] py-[30px] md:py-[56px] text-center">
                <h1 className="text-[24px] md:text-[42px]">Log In</h1>
                <div className="flex items-center justify-center">
                    <Link to="/" className="px-[16px] py-[8px] text-[.9rem]">Home</Link>
                    <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
                    <span className="px-[16px] md:p-[16px] text-[.9rem]">Account</span>
                </div>
            </div>
            <div className="w-[90%] md:w-[50%] mb-[40px] md:mb-[0] mx-auto flex flex-col md:flex-row justify-center">
                <div className="md:mx-[40px] w-full md:w-[330px]">
                    <h3 className="mb-[24px] text-[1.2rem]">Log In</h3>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} type="email" name="email" placeholder="Email" autoComplete='off' className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <input onChange={handleChange} type="password" name="password" placeholder="Password" className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                        <button type="submit" className="mt-[16px] mb-[12px] px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]">
                            {loading ?  (<div className='loader-button'></div>) : ('Sign in')}
                        </button>
                    </form>
                </div>
                <div className="md:mx-[40px] w-full md:w-[330px]">
                    <h3 className="mb-[24px] text-[1.2rem]">New Customer</h3>
                    <p className="mb-[24px]">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
                    <Link className="px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]" to="/account/register">Register</Link>
                </div>
            </div>
        </>
    )
}

export default Signin