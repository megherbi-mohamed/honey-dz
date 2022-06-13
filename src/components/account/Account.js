import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from 'react-use-cart'
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';
import { getUserAddresses } from '../../actions/address';
import { getUserCommandes } from '../../actions/commande';

const Account = () => {

    const {addresses} = useSelector((state) => state.addresses);
    const {commandes} = useSelector((state) => state.commandes);
    
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const user = JSON.parse(localStorage.getItem('profile'));

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { 
        isEmpty
    } = useCart()

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/account/signin');
        // setUser(null);
    };

    useEffect(async () => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout() 
        }
        // else {
        //     setUser(JSON.parse(localStorage.getItem('profile')));
        // }
        if (!user) {
            navigate('/account/signin')
        }
        if (addresses.length == 0) {
            dispatch(getUserAddresses());
        }
        dispatch(getUserCommandes());
    }, [location]);

    if (!user) {
        return <div></div>
    }

    if (addresses.length == 0) {
        return (
            <>
                <div className="mt-[70px] px-[16px] py-[30px] md:py-[56px] text-center">
                    <div className='w-[200px] h-[30px] mx-auto rounded-[15px] bg-[#ecedee]'></div>
                    <div className="flex items-center justify-center mt-[30px]">
                        <div className='m-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                        <FontAwesomeIcon icon={faAngleRight} className="text-[12px] text-[#e0e0e0] mx-[20px]" />
                        <div className='m-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                    </div>
                </div>
                <div className='md:px-6 lg:px-12 xl:px-16 2xl:px-48 py-8 md:py-12 lg:py-20 flex'>
                    <div className="md:px-4 xl:px-16 w-full w-1/6 sf-customer__nav hidden md:flex flex-col border-r border-color-border">
                        <div className='mb-[10px] w-[120px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                        <div className='mb-[10px] w-[110px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                        <div className='mb-[10px] w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                    </div>
                    <div className="px-4 md:px-8 xl:px-16 2xl:px-24 w-full md:w-5/6">
                        <div className='mb-[20px] w-[300px] h-[20px] rounded-[10px] bg-[#ecedee]'></div>
                        <div className="mb-16">
                            <div className='mb-[40px] w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                            <div className='mb-[10px] w-[200px] h-[20px] rounded-[10px] bg-[#ecedee]'></div>
                        </div>
                        <div className="mb-16">
                            <div className='mb-[40px] w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                            <div className="flex border-b border-color-border py-5">
                                <div className='w-1/2'>
                                    <div className='mb-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='mb-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                                </div>
                            </div>
                            <div className="flex border-b border-color-border py-5">
                                <div className='w-1/2'>
                                    <div className='mb-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                                </div>
                                <div className='w-1/2'>
                                    <div className='mb-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-0 w-[180px] h-[40px] rounded-[5px] bg-[#ecedee]'></div>
                    </div>
                </div>
            </>
        )
    }
    
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
                <div className="md:px-4 xl:px-16 w-1/6 sf-customer__nav hidden md:flex flex-col border-r border-color-border">
                    <Link to="/account" className="mb-[12px] font-bold">Dashboard</Link>
                    <Link to="/account/addresses" className="mb-[12px]">Addresses</Link>
                    <button onClick={logout} className='pl-0 text-left'>Log Out</button>
                </div>
                <div className="px-4 md:px-8 xl:px-16 2xl:px-24 w-full md:w-5/6">
                    <div className="mb-10">
                        Hello
                        <span className="font-semibold"> {user?.result.firstname+' '+user?.result.lastname}</span>
                        (not <span className="font-semibold">{user?.result.firstname+' '+user?.result.lastname}? </span>
                        <button onClick={logout} className='underline'>Log Out</button>)
                    </div>
                    <div className="mb-16">
                        <h3 className="text-2xl font-medium mb-8">Order History</h3>
                        {commandes.length > 0 ?
                            commandes.map((commande,index) => (
                                <div key={index}>
                                    {commande._id}
                                </div>
                            ))
                            :
                            <div className="flex bg-[#eaf7e6] px-[12px] py-[8px]">
                                {!isEmpty ? 
                                    (<>
                                        <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <Link to="/commande" className="mx-2 font-semibold underline text-[#3a8735]">Make your first order.</Link> 
                                    </>)
                                    : null
                                }
                                <span className='text-[#3a8735]'>You haven't placed any orders yet.</span>
                            </div>
                        }
                    </div>
                    <div className="mb-16">
                        <h3 className="text-2xl font-medium mb-3">Account Details</h3>
                        <div className="flex border-b border-color-border py-5">
                            <div className="w-1/2">Name</div>
                            <div className="w-1/2">
                                <span className="text-color-secondary">{user?.result.firstname+' '+user?.result.lastname}</span>
                            </div>
                        </div>
                        <div className="flex border-b border-color-border py-5">
                            <div className="w-1/2"> Email</div>
                            <div className="w-1/2">
                                <span className="text-color-secondary">{user?.result.email}</span>
                            </div>
                        </div>
                    </div>
                    <Link to="/account/addresses" className='px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]'>View Addresses ({addresses.length})</Link>
                </div>
            </div>
        </>
    )
}

export default Account