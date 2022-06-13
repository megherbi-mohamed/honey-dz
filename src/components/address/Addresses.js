import React, {useEffect,useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector,useDispatch } from 'react-redux';

import Menu from './Menu';

import AddressPreview from './AddressPreview';
import { getUserAddresses } from '../../actions/address';

const Addresses= () => {

    const {addresses} = useSelector((state) => state.addresses);
    
    const location  = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (addresses.length === 0) {
           dispatch(getUserAddresses());
        }
    }, [location])

    if (addresses.length === 0) {
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
                    <div className="md:px-4 xl:px-16 w-1/6 sf-customer__nav hidden md:flex flex-col border-r border-color-border">
                        <div className='mb-[10px] w-[120px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                        <div className='mb-[10px] w-[110px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                        <div className='mb-[10px] w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                    </div>
                    <div className="px-4 md:px-8 xl:px-16 2xl:px-24 w-full md:w-5/6">
                        <div className='mb-[30px] w-[150px] h-[20px] rounded-[10px] bg-[#ecedee]'></div>
                        <div className='mb-[40px] w-[180px] h-[40px] rounded-[5px] bg-[#ecedee]'></div>
                        <div className='mb-[30px] w-[150px] h-[20px] rounded-[10px] bg-[#ecedee]'></div>
                        <div className="mb-16">
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
                        <div className='flex items-center mt-[30px]'>
                            <div className='w-[90px] h-[40px] rounded-[5px] bg-[#ecedee]'></div>
                            <div className='ml-[20px] w-[90px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                        </div>
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
                <Menu />
                <div className="px-4 md:px-8 xl:px-16 2xl:px-24 w-full md:w-5/6">
                    <div className="mb-10">
                        <h2 className='text-[1.2rem] mb-[24px]'>Your Addresses ({addresses.length})</h2>
                        <Link to='add' className='px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]'>Add a new address</Link>
                    </div>
                    {addresses ?
                        addresses.map((address,index) => (
                            <AddressPreview key={index} index={index} address={address} />
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