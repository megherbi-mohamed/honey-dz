import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'
import decode from 'jwt-decode';

import * as actionType from '../constants/actionTypes';
import { signin } from '../actions/auth';
import { getUserAddresses } from '../actions/address';

const Account = () => {

    const { addresses } = useSelector((state) => state.addresses);
    const {message, loading} = useSelector((state) => state.message);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const alert = useAlert()

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/account');
        setUser(null);
    };

    useEffect(async () => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
        await dispatch(getUserAddresses());
    }, [location]);

    useEffect(() => {
        if (message !== '') {
            alert.success(message,{ timeout: 4000})
        }
        console.log(message);
        console.log(loading);
    }, [message])
    

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
    
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <>
            {user?.result ? (
                <>
                    <div className="mt-[60px] px-[16px] py-[30px] md:py-[56px] text-center">
                        <h1 className="text-[24px] md:text-[42px]">My Account</h1>
                        <div className="flex items-center justify-center">
                            <Link to="/" className="px-[16px] py-[8px] text-[.9rem]">Home</Link>
                            <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
                            <span className="px-[16px] md:p-[16px] text-[.9rem]">Account</span>
                        </div>
                    </div>
                    <div className='md:px-6 lg:px-12 xl:px-16 2xl:px-48 py-8 md:py-12 lg:py-20 flex'>
                        <div class="md:px-4 xl:px-16 w-1/6 sf-customer__nav hidden md:flex flex-col border-r border-color-border">
                            <Link to="/account" className="mb-[12px] font-bold">Dashboard</Link>
                            <Link to="/account/addresses" className="mb-[12px]">Addresses</Link>
                            <button onClick={logout} className='pl-0 text-left'>Log Out</button>
                        </div>
                        <div class="px-4 md:px-8 xl:px-16 2xl:px-24 md:w-5/6">
                            <div class="mb-10">
                                Hello
                                <span class="font-semibold"> {user?.result.firstname+' '+user?.result.lastname}</span>
                                (not <span class="font-semibold">{user?.result.firstname+' '+user?.result.lastname}? </span>
                                <button onClick={logout} className='underline'>Log Out</button>)
                            </div>
                            <div class="mb-16">
                                <h3 class="text-2xl font-medium mb-8">Order History</h3>
                                <div class="flex bg-[#eaf7e6] px-[12px] py-[8px]">
                                    <svg class="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    <Link to="/collections" class="mx-2 font-semibold underline text-[#3a8735]">Make your first order.</Link>
                                    <span className='text-[#3a8735]'>You haven't placed any orders yet.</span>
                                </div>
                            </div>
                            <div class="mb-16">
                                <h3 class="text-2xl font-medium mb-3">Account Details</h3>
                                <div class="flex border-b border-color-border py-5">
                                    <div class="w-1/2">Name</div>
                                    <div class="w-1/2">
                                        <span class="text-color-secondary">{user?.result.firstname+' '+user?.result.lastname}</span>
                                    </div>
                                </div>
                                <div class="flex border-b border-color-border py-5">
                                    <div class="w-1/2"> Email</div>
                                    <div class="w-1/2">
                                        <span class="text-color-secondary">{user?.result.email}</span>
                                    </div>
                                </div>
                            </div>
                            <Link to="/account/addresses" className='px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]'>View Addresses ({addresses.length})</Link>
                        </div>
                    </div>
                </>
            ) : (
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
                                <input onChange={handleChange} type="email" name="email" placeholder="Email" className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                                <input onChange={handleChange} type="password" name="password" placeholder="Password" className="mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                                <button type="submit" className="mt-[16px] mb-[12px] px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]">
                                    {loading ?  (<div className='loader-button'></div>) : ('Sign in')}
                                </button>
                            </form>
                        </div>
                        <div className="md:mx-[40px] w-full md:w-[330px]">
                            <h3 className="mb-[24px] text-[1.2rem]">New Customer</h3>
                            <p className="mb-[24px]">Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
                            <Link className="px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]" to="register">Register</Link>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Account