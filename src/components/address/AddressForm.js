import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Country, State }  from 'country-state-city';
import { useAlert } from 'react-alert'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import * as actionType from '../../constants/actionTypes';
import { updateAddress } from '../../actions/address';
import { getUserAddress } from '../../actions/address';

const AddressForm = () => {

    let { id } = useParams();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const { address } = useSelector((state) => state.addresses);
    const {message, loading} = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();

    const [countryArray, setcountryArray] = useState([]);
    const [stateArray, setstateArray] = useState([]);
    const [form, setForm] = useState([]);

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/account');
        setUser(null);
    };

    // useEffect(async () => {
        
    // }, [id]);
    
    useEffect(async () => {
        setForm({ ...form, 
            firstname: address.firstname,
            lastname: address.lastname,
            address1: address.address1,
            address2: address.address2,
            country: (address.country ? address.country : 'DZ'),
            state: (address.state ? address.state : '01' ),
            city: address.city,
            zipcode: address.zipcode,
            phone: address.phone
        });

        await setcountryArray(Country.getAllCountries());
        await dispatch(getUserAddress(id));
    }, [address])

    useEffect(() => {
        if (message !== '') {
            alert.success(message,{ timeout: 4000})
        }
    }, [message])

    useEffect(async () => {
        if (countryArray.length > 0) {
            console.log('countryArray');
            if (address.country) {
                console.log('countryArray address');
                document.getElementById(address.country).selected = 'selected'
                await setstateArray(State.getStatesOfCountry(address.country))
            }
            else{
                console.log('countryArray no address');
                document.getElementById('DZ').selected = 'selected'
                await setstateArray(State.getStatesOfCountry('DZ'))
            }
            var country = document.getElementById("country")
            var countryCode = country.options[country.selectedIndex].id
            await setstateArray(State.getStatesOfCountry(countryCode))
        }
    }, [countryArray])

    useEffect(() => {
        if (stateArray.length > 0) {
            console.log('stateArray');
            if (address.state) {
                console.log('stateArray address');
                document.getElementById(address.state).selected = 'selected'
            }
            else{
                console.log('stateArray no address');
                document.getElementById('01').selected = 'selected'
            }
        }
    }, [stateArray])

    // useEffect(() => {
    //     if (form.country) {
    //         document.getElementById(form.country).selected = 'selected'
    //     }
    // }, [form.country])
    
    // useEffect(() => {
    //     if (form.country) {
    //         document.getElementById(form.state).selected = 'selected'
    //     }
    // }, [form.state])

    // useEffect(() => {
    //     var country = document.getElementById("country");
    //     var countryCode = country.options[country.selectedIndex].id;
    //     setstateArray(State.getStatesOfCountry(countryCode))
    // }, [form.country])

    const handleSubmit = (id) => (e) => {
        e.preventDefault()
        dispatch(updateAddress(id,form))
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
                    {/* <div class="mb-10">
                        <h2 className='text-[1.2rem] mb-[24px]'>Your Addresses ({addresses.length})</h2>
                        <button className='px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]'>Add a new address</button>
                    </div> */}
                    <div className="m-[3rem_0]">
                        <form onSubmit={handleSubmit(id)}>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">First Name</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='firstname' value={form.firstname} placeholder='First Name' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Last Name</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='lastname' value={form.lastname} placeholder='Last Name' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Address</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='address1' value={form.address1} placeholder='Address' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Apartment, suite, etc.</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='address2' value={form.address2} placeholder='Apartment, suite, etc.' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Country</label>
                                <select className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} name="country" id='country'>
                                    {countryArray ?
                                        countryArray.map((country)=>(
                                            <option id={country.isoCode} value={country.isoCode}>{country.name}</option>
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
                                        stateArray.map((state)=>(
                                            <option id={state.isoCode} value={state.isoCode}>{state.name}</option>
                                        ))
                                        :
                                        <option value="">vide</option>
                                    }
                                </select>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">City</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='city' value={form.city} placeholder='city' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Postal/Zip Code</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='zipcode' value={form.zipcode} placeholder='Postal/Zip Code' autoComplete='off'/>
                            </div>
                            <div className='mb-[1.5rem]'>
                                <label htmlFor="">Phone</label>
                                <input className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' onChange={handleChange} type="text" name='phone' value={form.phone} placeholder='Phone' autoComplete='off'/>
                            </div>
                            <div className='flex items-center mt-[30px]'>
                                <input className='!w-[20px] !h-[20px]' onChange={()=>handleCheckedChange()} type="checkbox" name="asdefault" id="asdefault" />
                                <span className='ml-[15px]'>Set as default address</span>
                            </div>
                            <div className='flex items-center mt-[30px]'>
                                <button type='submit' className='px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] w-auto inline-block hover:outline-[3px]'>
                                    {loading ?  (<div className='loader-button'></div>) : ('Update address')}
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

export default AddressForm