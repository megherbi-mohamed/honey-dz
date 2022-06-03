import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';
import { getUserAddresses } from '../../actions/address';

import Address from './AddressPreview';

const Addresses = () => {

    const {addresses} = useSelector((state) => state.addresses);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

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

    return (
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
                    <Link to="/account" className="mb-[12px]">Dashboard</Link>
                    <Link to="/account/addresses" className="mb-[12px] font-bold">Addresses</Link>
                    <button onClick={logout} className='pl-0 text-left'>Log Out</button>
                </div>
                <div class="px-4 md:px-8 xl:px-16 2xl:px-24 md:w-5/6">
                    <div class="mb-10">
                        <h2 className='text-[1.2rem] mb-[24px]'>Your Addresses ({addresses.length})</h2>
                        <button className='px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]'>Add a new address</button>
                    </div>
                    {addresses ?
                        addresses.map((address,index) => (
                            <Address key={index} address={address} />
                        ))
                        :
                        <div>Error loding</div>
                    }
                </div>
            </div>
        </>
    )
}

export default Addresses