import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Menu from './Menu';

import { insertAddress } from '../../actions/address';
import { getAllCountries,getStates } from '../../actions/countryState';

const NewAddress = () => {

    const {countries,states} = useSelector((state) => state.countryState);
    const {message, loading} = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const location = useLocation();

    const [stateArray, setstateArray] = useState([]);
    const [form, setForm] = useState([]);

    useEffect(() => {
        setForm({ ...form, 
            firstname: '',
            lastname: '',
            address1: '',
            address2: '',
            country: 'DZ',
            state: '01',
            city: '',
            zipcode: '',
            phone: ''
        });
        dispatch(getAllCountries());
    }, [location])

    useEffect(() => {
        if (message !== '') {
            alert.success(message,{ timeout: 4000})
        }
    }, [message])

    useEffect(() => {
        if (countries.length > 0) {
            document.getElementById('DZ').selected = 'selected';
            dispatch(getStates('DZ'));
        }
    }, [countries])

    useEffect(() => {
        if (states.length > 0) {
            setstateArray(states)
        }
    }, [states])

    useEffect(() => {
        dispatch(getStates(form.country));
    }, [form.country])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.firstname === '') {alert.error('Enter your firstname please',{ timeout: 4000})}
        else if (form.lastname === '') {alert.error('Enter your lastname please',{ timeout: 4000})}
        else if (form.address1 === '') {alert.error('Enter your address please',{ timeout: 4000})}
        else if (form.code === '') {alert.error('Enter your Zip code please',{ timeout: 4000})}
        else if (form.phone === '') {alert.error('Enter your phone please',{ timeout: 4000})}
        else {
            dispatch(insertAddress(form,navigate))
        }
    }
    
    const handleChange = (e) => {setForm({ ...form, [e.target.name]: e.target.value });}

    const handleCheckedChange = () => {
        var checkBox = document.getElementById("asdefault");
        if (checkBox.checked == true) {
            setForm({...form, asdefault:true})
        }
        else{
            setForm({...form, asdefault:false})
        }
    }

    // if (countries.length == 0) {
    //     return(
    //         <>
    //             <div className="mt-[70px] px-[16px] py-[30px] md:py-[56px] text-center">
    //                 <div className='w-[200px] h-[30px] mx-auto rounded-[15px] bg-[#ecedee]'></div>
    //                 <div className="flex items-center justify-center mt-[30px]">
    //                     <div className='m-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     <FontAwesomeIcon icon={faAngleRight} className="text-[12px] text-[#e0e0e0] mx-[20px]" />
    //                     <div className='m-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                 </div>
    //             </div>
    //             <div className='md:px-6 lg:px-12 xl:px-16 2xl:px-48 py-8 md:py-12 lg:py-20 flex'>
    //                 <div className="md:px-4 xl:px-16 w-1/6 sf-customer__nav hidden md:flex flex-col border-r border-color-border">
    //                     <div className='mb-[10px] w-[120px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     <div className='mb-[10px] w-[110px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     <div className='mb-[10px] w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                 </div>
    //                 <div className="px-4 md:px-8 xl:px-16 2xl:px-24 w-full md:w-5/6">
    //                     <div className='w-[150px] h-[20px] rounded-[10px] bg-[#ecedee]'></div>

    //                     <div className='mt-[30px] mb-[10px] w-[110px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     <div className='w-full h-[45px] rounded-[5px] border-[2px] border-[#ecedee]'></div>

    //                     <div className='mt-[30px] mb-[10px] w-[110px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     <div className='w-full h-[45px] rounded-[5px] border-[2px] border-[#ecedee]'></div>

    //                     <div className='mt-[30px] mb-[10px] w-[110px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     <div className='w-full h-[45px] rounded-[5px] border-[2px] border-[#ecedee]'></div>

    //                     <div className='mt-[30px] mb-[10px] w-[110px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     <div className='w-full h-[45px] rounded-[5px] border-[2px] border-[#ecedee]'></div>

    //                     <div className='mt-[30px] mb-[10px] w-[110px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     <div className='w-full h-[45px] rounded-[5px] border-[2px] border-[#ecedee]'></div>

    //                     <div className='mt-[30px] mb-[10px] w-[110px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     <div className='w-full h-[45px] rounded-[5px] border-[2px] border-[#ecedee]'></div>

    //                     <div className='flex items-center mt-[30px]'>
    //                         <div className='w-[180px] h-[40px] rounded-[5px] bg-[#ecedee]'></div>
    //                         <div className='ml-[20px] w-[90px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // }

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
                    <h3 className='text-[1.3rem] font-bold'>Add a new address</h3>
                    <div className="m-[2rem_0]">    
                        <form onSubmit={handleSubmit}>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">First Name</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='firstname' value={form.firstname || ''} placeholder='First Name' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Last Name</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='lastname' value={form.lastname || ''} placeholder='Last Name' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Address</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='address1' value={form.address1 || ''} placeholder='Address' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Apartment, suite, etc.</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='address2' value={form.address2 || ''} placeholder='Apartment, suite, etc.' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Country</label>
                                <select className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} name="country" id='country'>
                                    {countries ?
                                        countries.map((country,index)=>(
                                            <option key={index} id={country.isoCode} value={country.isoCode}>{country.name}</option>
                                        ))
                                        :
                                        <option value="">vide</option>
                                    }
                                </select>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">State</label>
                                <select className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} name="state" id='state'>
                                    {stateArray ?
                                        stateArray.map((state,index)=>(
                                            <option key={index} id={state.isoCode} value={state.isoCode}>{state.name}</option>
                                        ))
                                        :
                                        <option value="">vide</option>
                                    }
                                </select>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">City</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='city' value={form.city || ''} placeholder='city' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Postal/Zip Code</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='zipcode' value={form.zipcode || ''} placeholder='Postal/Zip Code' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Phone</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='phone' value={form.phone || ''} placeholder='Phone' autoComplete='off'/>
                            </div>
                            <div className='flex items-center mt-[30px]'>
                                <input className='!w-[20px] !h-[20px]' onChange={()=>handleCheckedChange()} type="checkbox" name="asdefault" id="asdefault" />
                                <span className='ml-[15px]'>Set as default address</span>
                            </div>
                            <div className='flex items-center mt-[30px]'>
                                <button type='submit' className='px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]'>
                                    {loading ?  (<div className='loader-button'></div>) : ('Save address')}
                                </button>
                                <Link to='/account/addresses' className='ml-[30px]'>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewAddress