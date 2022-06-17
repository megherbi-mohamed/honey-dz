import React,{ useState, useEffect } from 'react'
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from 'react-use-cart'
import { useAlert } from 'react-alert'

import * as actionType from '../constants/actionTypes';
import { insertCommande } from '../actions/commande';
import { getUserAddresses } from '../actions/address';
import { getAllCountries, getStates } from '../actions/countryState';
import { getProduct } from '../actions/products';

const Commande = () => {

    const {id,quantity} = useParams();

    const {addresses} = useSelector((state) => state.addresses);
    const {product} = useSelector((state) => state.products);
    const {countries,states} = useSelector((state) => state.countryState);
    const {loading,message} = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const alert = useAlert();

    const user = JSON.parse(localStorage.getItem('profile'));
    const [stateArray, setstateArray] = useState([]);
    const [form, setForm] = useState([])

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/account');
    };

    useEffect(() => {
        dispatch(getUserAddresses());
        dispatch(getAllCountries());
        if (id) {
            dispatch(getProduct(id));
        }
    }, [location])

    useEffect(() => {
        if (addresses.length > 0) {
            setForm({ ...form, 
                firstname: addresses[0].firstname,
                lastname: addresses[0].lastname,
                address1: addresses[0].address1,
                address2: addresses[0].address2,
                country: (addresses[0].country ? addresses[0].country : 'DZ'),
                state: (addresses[0].state ? addresses[0].state : '01' ),
                city: addresses[0].city,
                zipcode: addresses[0].zipcode,
                phone: addresses[0].phone
            });
        }
    }, [addresses])

    const handleAddressChange = (e) => {
        let index = e.target.value;
        if (index === 'new') {
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
        }
        else{
            setForm({ ...form, 
                firstname: addresses[index].firstname,
                lastname: addresses[index].lastname,
                address1: addresses[index].address1,
                address2: addresses[index].address2,
                country: (addresses[index].country ? addresses[0].country : 'DZ'),
                state: (addresses[index].state ? addresses[0].state : '01' ),
                city: addresses[index].city,
                zipcode: addresses[index].zipcode,
                phone: addresses[index].phone
            })
        }
    }
    
    useEffect(async () => {
        if (countries.length > 0) {
            if (countries.length > 0) {
                if (addresses[0].country) {
                    document.getElementById(addresses[0].country).selected = 'selected'
                }
                else{
                    document.getElementById('DZ').selected = 'selected'
                }
                dispatch(getStates(addresses[0].country));
            }
        }
    }, [countries,addresses])

    useEffect(() => {
        if (states.length > 0) {
            setstateArray(states)
        }
    }, [states])

    const { 
        items, 
        cartTotal, 
        removeItem,
        isEmpty
    } = useCart()

    function setFacture(data,product) {
        let tableData = [];
        for (const d of data) {
            tableData.push(
                { designation: d.nom, prixUnitaire: d.price, quantity: product ? parseInt(quantity) : d.quantity }
            );
        }
        return tableData;
    }

    function setitems(data,product) {
        let tableData = [];
        for (const d of data) {
            tableData.push(
                { prd: d.id, quantity: product ? parseInt(quantity) : d.quantity }
            );
        }
        return tableData;
    }

    useEffect(() => {
        dispatch(getStates(form.country));
    }, [form.country])

    let formData = {commande:form, produits: id ? setitems(product,true) : setitems(items,false), facture: id ? setFacture(product,true) : setFacture(items,false)}

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.firstname === '') {alert.error('Enter your firstname please',{ timeout: 4000})}
        else if (form.lastname === '') {alert.error('Enter your lastname please',{ timeout: 4000})}
        else if (form.address1 === '') {alert.error('Enter your address please',{ timeout: 4000})}
        else if (form.code === '') {alert.error('Enter your Zip code please',{ timeout: 4000})}
        else if (form.phone === '') {alert.error('Enter your phone please',{ timeout: 4000})}
        else {
            dispatch(insertCommande(formData,navigate))
            
        }
    }

    useEffect(() => {
        if (message !== '') {
            alert.success(message,{ timeout: 2000})
        }
    }, [message])
    
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    let init = {icon:'',height:''}
    const [cart, setcart] = useState(init)
    const [clickCart, setclickCart] = useState(0)

    const setclick = () => {
        setclickCart((prev) => prev + 1)
        if (clickCart%2 === 0) {setcart({icon:'rotate-[180deg]',height:'!max-h-[1000px]'})}
        else {setcart(init)}
    }

    // if (addresses.length === 0 || countries.length === 0) {
    //     return <div className='mt-[100px]'>loading</div>
    // }

    if (!user) {
        navigate('/account/signin')
    }

    if (isEmpty) {
        navigate('/account')
    }
    
    return (
        <div className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#fff] z-50 overflow-y-auto'>
            <div className='flex items-start flex flex-col md:flex-row'>
                <div className='w-[100vw] md:w-[50vw] md:ml-[10vw] md:p-[56px_66px_21px_5vw]'>
                    <img className='w-[100px] m-[20px] md:m-0' src="/images/logo.webp" alt="logo" />
                    <div className='block md:hidden w-full bg-[#f9f9f9]'>
                        <div className='flex items-center p-[20px] border-t-[1px] border-b-[1px] border-[#d3d3d3]' onClick={setclick}>
                            <svg fill='#bd8c27' className='w-[20px] h-[20px]' focusable="false" aria-hidden="true"><path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715a1.817 1.817 0 10.002-3.634 1.817 1.817 0 00-.002 3.634zm9.18 0a1.816 1.816 0 10-.001-3.635 1.818 1.818 0 000 3.635z"></path></svg>
                            <p className='text-[#bd8c27] mx-[10px] text-[0.9rem]'>Show order summary</p>
                            <svg fill='#bd8c27' className={`w-[15px] h-[12px] ${cart.icon}`} focusable="false" aria-hidden="true"><path d="M12.6 3L14 4.4 8.4 10 7 11.4 5.6 10 0 4.4 1.4 3 7 8.6"></path></svg>
                        </div>
                        <div className={`px-[20px] max-h-0 overflow-hidden transition-[max-height] duration-[500ms] ease-in-out ${cart.height}`}>
                            <div className='w-full pt-[10px]'></div>
                            {id && quantity && product.length > 0 ? 
                                <div className="flex py-[12px] w-full">
                                    <div className='relative'>
                                        <img src={'/images/'+product[0].side} className="min-w-[65px] h-[65px] rounded-[8px] border-[1px] border-[#dedede]" alt="" />
                                        <div className='absolute w-[21px] h-[21px] rounded-[100%] bg-[#808080] right-[-5px] top-[-10px]'>
                                            <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-[0.7rem]'>{quantity}</span>
                                        </div>
                                    </div>
                                    <div className="pl-[20px] w-full flex items-center justify-between">
                                        <h2 className='text-[0.9rem] mr-[20px]'>{product[0].nom}</h2>
                                        <div className='text-right'>
                                            <h3>{'£'+product[0].price}</h3>
                                        </div>
                                    </div>
                                </div>
                                :
                                items.map((item, index) => (
                                    <div className="flex py-[12px] w-full" key={index}>
                                        <div className='relative'>
                                            <img src={'/images/'+item.side} className="min-w-[65px] h-[65px] rounded-[8px] border-[1px] border-[#dedede]" alt="" />
                                            <div className='absolute w-[21px] h-[21px] rounded-[100%] bg-[#808080] right-[-5px] top-[-10px]'>
                                                <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-[0.7rem]'>{item.quantity}</span>
                                            </div>
                                        </div>
                                        <div className="pl-[20px] w-full flex items-center justify-between">
                                            <h2 className='text-[0.9rem] mr-[20px]'>{item.nom}</h2>
                                            <div className='text-right'>
                                                <h3>{'£'+item.price}</h3>
                                                <button className="bg-transparent border-0 underline py-[8px] pl-[8px] ml-[8px] text-[14px]" onClick={()=>removeItem(item.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            {id && quantity && product.length > 0 ?
                                <>
                                    <div className='py-[20px] mt-[20px] border-t-[1px] border-b-[1px] border-[#d3d3d3]'>
                                        <div className='mb-[10px] flex items-center justify-between'>
                                            <p className='text-[0.8rem] text-gray-600'>Subtotal</p>
                                            <span className='font-bold text-[0.9rem]'>{'£'+(product[0].price*quantity)}</span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[0.8rem] text-gray-600'>Shipping</p>
                                            <span className='font-bold text-[0.9rem]'>£5</span>
                                        </div>
                                    </div>
                                    <div className='mt-[20px] flex items-center justify-between'>
                                        <h3 className='text font-bold text-[1.1rem]'>Total</h3>
                                        <span className='font-bold text-[1.2rem]'>{'£'+((product[0].price*quantity)+5)}</span>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='py-[20px] mt-[20px] border-t-[1px] border-b-[1px] border-[#d3d3d3]'>
                                        <div className='mb-[10px] flex items-center justify-between'>
                                            <p className='text-[0.8rem] text-gray-600'>Subtotal</p>
                                            <span className='font-bold text-[0.9rem]'>{'£'+cartTotal}</span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-[0.8rem] text-gray-600'>Shipping</p>
                                            <span className='font-bold text-[0.9rem]'>£5</span>
                                        </div>
                                    </div>
                                    <div className='mt-[20px] flex items-center justify-between'>
                                        <h3 className='text font-bold text-[1.1rem]'>Total</h3>
                                        <span className='font-bold text-[1.2rem]'>{'£'+(cartTotal+5)}</span>
                                    </div>
                                </>
                            }
                            <div className='w-full pb-[20px]'></div>
                        </div>
                    </div>
                    <div className='p-[20px] md:p-0 text-left'>
                        <div className="flex items-center justify-start">
                            <Link to="/" className="pr-[16px] py-[8px] text-[.9rem]">Home</Link>
                            <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
                            <span className="px-[16px] md:p-[16px] text-[.9rem]">Commande</span>
                        </div>
                        <h2 className='text-[18px] mb-[20px] text-gray-500'>Contact information</h2>
                        <div className='flex items-center'>
                            <img className='w-[50px] h-[50px] rounded-[8px]' src="/images/Ldn_300x300.webp" alt="" />
                            <div className='ml-[10px]'>
                                <p className='text-gray-500 text-[0.9rem]'>megherbi mohamed (megherbimeddz@gmail.com)</p>
                                <button onClick={logout} className='border-0 outline-0 bg-transparent text-[#bd8c27]'>Logout</button>
                            </div>
                        </div>
                        <div className='flex items-center my-[20px]'>
                            <p className='text-gray-500 text-[0.9rem]'>Email me with news and offers</p>
                        </div>
                        <h2 className='mb-[10px] text-[#403331] text-[18px]'>Shipping addresse</h2>
                        <div className='w-full relative'>
                            <span className='absolute top-[5px] left-[12px] text-[0.7rem] text-gray-500'>Saved addresses</span>
                            <div className="select-wrapper">
                                <select onChange={handleAddressChange} className="w-full p-[9.5px] pr-[30px] pt-[15px] outline-none border-[1.5px] bg-transparent border-gray rounded text-[0.9rem]">
                                    {addresses ?
                                        addresses.map((address,index) => (
                                            <option key={index} value={index}>{address.country+' '+'('+address.firstname+' '+address.lastname+')'}</option>
                                        )) : null
                                    }
                                    <option value="new">Use a new address</option>
                                </select>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='w-full grid grid-cols-2 gap-[15px] mt-[10px]'>
                                <input onChange={handleChange} type="text" name="firstname" value={form.firstname || ''} autoComplete="off" placeholder='First name' className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                                <input onChange={handleChange} type="text" name="lastname" value={form.lastname || ''} autoComplete="off" placeholder='last name' className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                            </div>
                            <input onChange={handleChange} type="text" name="address1" placeholder='Addess' value={form.address1 || ''} autoComplete="off" className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                            <input onChange={handleChange} type="text" name="address2" placeholder='Apartement, suite, etc. (optional)' value={form.address2 || ''} autoComplete="off" className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                            <div className='w-full grid grid-cols-3 gap-[15px] mt-[5px]'>
                                <div className='w-full relative'>
                                    <span className='absolute top-[5px] left-[12px] text-[0.7rem] text-gray-500'>Country/Region</span>
                                    <div className="select-wrapper">
                                        <select onChange={handleChange} name="country" id='country' className="w-full p-[9.5px] pr-[30px] pt-[15px] outline-none border-[1.5px] bg-transparent border-gray rounded text-[0.9rem]">
                                            {countries ?
                                                countries.map((country,index)=>(
                                                    <option key={index} id={country.isoCode} value={country.isoCode}>{country.name}</option>
                                                ))
                                                :
                                                <option value="">vide</option>
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="select-wrapper">
                                    <span className='absolute top-[5px] left-[12px] text-[0.7rem] text-gray-500'>State</span>
                                    <select onChange={handleChange} name="state" className="w-full p-[9.5px] pr-[30px] pt-[15px] outline-none border-[1.5px] bg-transparent border-gray rounded text-[0.9rem]">
                                        {stateArray ?
                                            stateArray.map((state,index)=>(
                                                <option key={index} id={state.isoCode} value={state.isoCode}>{state.name}</option>
                                            ))
                                            :
                                            <option value="">vide</option>
                                        }
                                    </select>
                                </div>
                                <div className="select-wrapper">
                                    <input onChange={handleChange} type="text" name="city" placeholder='City' value={form.city || ''} autoComplete="off" className='px-[12px] py-[12px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                                </div>
                            </div>
                            <input onChange={handleChange} type="text" name="zipcode" placeholder='Zip code' value={form.zipcode || ''} autoComplete="off" className='mt-[15px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                            <input onChange={handleChange} type="text" name="phone" placeholder='Phone' value={form.phone || ''} autoComplete="off" className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                            <button type="submit" className='w-full md:w-[140px] mt-[16px] mb-[12px] px-[32px] py-[12px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]'>
                                {loading ?  (<div className='loader-button'></div>) : ('Send order')}
                            </button>
                        </form>
                    </div>
                </div>
                <div className='hidden md:block w-[100vw] md:w-[40vw] bg-[#f9f9f9] min-h-[100vw] border-l-[1px] border-l-[#d3d3d3] justify-self-start'>
                    <div className='w-full w-full md:w-[30vw] md:mr-[10vw] p-[20px] md:p-[67px_73px_21px_44px]'>
                        {id && quantity && product.length > 0 ? 
                            <>
                                <div className="flex py-[12px] w-full">
                                    <div className='relative'>
                                        <img src={'/images/'+product[0].side} className="min-w-[65px] h-[65px] rounded-[8px] border-[1px] border-[#dedede]" alt="" />
                                        <div className='absolute w-[21px] h-[21px] rounded-[100%] bg-[#808080] right-[-5px] top-[-10px]'>
                                            <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-[0.7rem]'>{quantity}</span>
                                        </div>
                                    </div>
                                    <div className="pl-[20px] w-full flex items-center justify-between">
                                        <h2 className='text-[0.9rem] mr-[20px]'>{product[0].nom}</h2>
                                        <div className='text-right'>
                                            <h3>{'£'+product[0].price}</h3>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            items.map((item, index) => (
                                <>
                                    <div className="flex py-[12px] w-full" key={index}>
                                        <div className='relative'>
                                            <img src={'/images/'+item.side} className="min-w-[65px] h-[65px] rounded-[8px] border-[1px] border-[#dedede]" alt="" />
                                            <div className='absolute w-[21px] h-[21px] rounded-[100%] bg-[#808080] right-[-5px] top-[-10px]'>
                                                <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white text-[0.7rem]'>{item.quantity}</span>
                                            </div>
                                        </div>
                                        <div className="pl-[20px] w-full flex items-center justify-between">
                                            <h2 className='text-[0.9rem] mr-[20px]'>{item.nom}</h2>
                                            <div className='text-right'>
                                                <h3>{'£'+item.price}</h3>
                                                <button className="bg-transparent border-0 underline py-[8px] pl-[8px] ml-[8px] text-[14px]" onClick={()=>removeItem(item.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </>
                            ))
                        }
                        {id && quantity && product.length > 0 ?
                            <>
                                <div className='py-[20px] mt-[20px] border-t-[1px] border-b-[1px] border-[#d3d3d3]'>
                                    <div className='mb-[10px] flex items-center justify-between'>
                                        <p className='text-[0.8rem] text-gray-600'>Subtotal</p>
                                        <span className='font-bold text-[0.9rem]'>{'£'+(product[0].price*quantity)}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[0.8rem] text-gray-600'>Shipping</p>
                                        <span className='font-bold text-[0.9rem]'>£5</span>
                                    </div>
                                </div>
                                <div className='mt-[20px] flex items-center justify-between'>
                                    <h3 className='text font-bold text-[1.1rem]'>Total</h3>
                                    <span className='font-bold text-[1.2rem]'>{'£'+((product[0].price*quantity)+5)}</span>
                                </div>
                            </>
                            :
                            <>
                                <div className='py-[20px] mt-[20px] border-t-[1px] border-b-[1px] border-[#d3d3d3]'>
                                    <div className='mb-[10px] flex items-center justify-between'>
                                        <p className='text-[0.8rem] text-gray-600'>Subtotal</p>
                                        <span className='font-bold text-[0.9rem]'>{'£'+cartTotal}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[0.8rem] text-gray-600'>Shipping</p>
                                        <span className='font-bold text-[0.9rem]'>£5</span>
                                    </div>
                                </div>
                                <div className='mt-[20px] flex items-center justify-between'>
                                    <h3 className='text font-bold text-[1.1rem]'>Total</h3>
                                    <span className='font-bold text-[1.2rem]'>{'£'+(cartTotal+5)}</span>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commande