import React,{ useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart'
import { useAlert } from 'react-alert'
import decode from 'jwt-decode';

import * as actionType from '../constants/actionTypes';
import { insertCommande } from '../actions/commande';

const Commande = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const alert = useAlert()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        navigate('/account');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp*1000  < new Date().getTime()) logout();
        }
        else{  navigate('/account') }
        setForm({ ...form, country: 'Algérie', city:'Alger', common:'Alger' });
    }, [location]);

    const { 
        items, 
        cartTotal, 
        removeItem
    } = useCart()

    function setFacture(data) {
        let tableData = [];
        for (const d of data) {
            tableData.push(
                { designation: d.nom, prixUnitaire: d.price, quantity: d.quantity }
            );
        }
        return tableData;
    }

    function setitems(data) {
        let tableData = [];
        for (const d of data) {
            tableData.push(
                { prd: d.id, quantity: d.quantity }
            );
        }
        return tableData;
    }

    const initialState = { firstname:'', lastname:'', address1:'', address2:'', country:'', city:'', common:'', code:'',phone:'' }
    const [form, setForm] = useState(initialState)

    let formData = {commande:form,produits:setitems(items),facture:setFacture(items)}
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.firstname === '') {alert.error('Enter your firstname please',{ timeout: 4000})}
        else if (form.lastname === '') {alert.error('Enter your lastname please',{ timeout: 4000})}
        else if (form.address1 === '') {alert.error('Enter your address please',{ timeout: 4000})}
        else if (form.code === '') {alert.error('Enter your Zip code please',{ timeout: 4000})}
        else if (form.phone === '') {alert.error('Enter your phone please',{ timeout: 4000})}
        else {
            insertCommande(formData,navigate)
        }
    }
    
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    let init = {icon:'',height:''}
    const [cart, setcart] = useState(init)
    const [clickCart, setclickCart] = useState(0)

    const setclick = () => {
        setclickCart((prev) => prev + 1)
        if (clickCart%2 === 0) {setcart({icon:'rotate-[180deg]',height:'!max-h-[1000px]'})}
        else {setcart(init)}
    }

    return (
        <>
            {user?.result ? (
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
                                    {items.map((item, index) => (
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
                                    ))}
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
                                        <button className='border-0 outline-0 bg-transparent text-[#bd8c27]'>Logout</button>
                                    </div>
                                </div>
                                <div className='flex items-center my-[20px]'>
                                    <p className='text-gray-500 text-[0.9rem]'>Email me with news and offers</p>
                                </div>
                                <h2 className='mb-[10px] text-[#403331] text-[18px]'>Shipping addresse</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className='w-full relative'>
                                        <span className='absolute top-[5px] left-[12px] text-[0.7rem] text-gray-500'>Saved addresses</span>
                                        <div class="select-wrapper">
                                            <select className="w-full p-[9.5px] pr-[30px] pt-[15px] outline-none border-[1.5px] bg-transparent border-gray rounded text-[0.9rem]">
                                                <option value="Algérie (megherbi mohamed)">Algérie (megherbi mohamed)</option>
                                                <option value="Use a new address">Use a new address</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-full grid grid-cols-2 gap-[15px] mt-[10px]'>
                                        <input onChange={handleChange} type="text" name="firstname" placeholder='First name' className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                                        <input onChange={handleChange} type="text" name="lastname" placeholder='last name' className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                                    </div>
                                    <input onChange={handleChange} type="text" name="address1" placeholder='Addess' className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                                    <input onChange={handleChange} type="text" name="address2" placeholder='Apartement, suite, etc. (optional)' className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                                    <div className='w-full grid grid-cols-3 gap-[15px] mt-[5px]'>
                                        <div className='w-full relative'>
                                            <span className='absolute top-[5px] left-[12px] text-[0.7rem] text-gray-500'>Country/Region</span>
                                            <div class="select-wrapper">
                                                <select onChange={handleChange} name="country" className="w-full p-[9.5px] pr-[30px] pt-[15px] outline-none border-[1.5px] bg-transparent border-gray rounded text-[0.9rem]">
                                                    <option value="Algérie">Algérie</option>
                                                    <option value="France">France</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="select-wrapper">
                                            <span className='absolute top-[5px] left-[12px] text-[0.7rem] text-gray-500'>City</span>
                                            <select onChange={handleChange} name="city" className="w-full p-[9.5px] pr-[30px] pt-[15px] outline-none border-[1.5px] bg-transparent border-gray rounded text-[0.9rem]">
                                                <option value="Alger">Alger</option>
                                                <option value="Oran">Oran</option>
                                            </select>
                                        </div>
                                        <div class="select-wrapper">
                                            <span className='absolute top-[5px] left-[12px] text-[0.7rem] text-gray-500'>Common</span>
                                            <select onChange={handleChange} name="common" className="w-full p-[9.5px] pr-[30px] pt-[15px] outline-none border-[1.5px] bg-transparent border-gray rounded text-[0.9rem]">
                                                <option value="Alger">Alger</option>
                                                <option value="Oran">Oran</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input onChange={handleChange} type="text" name="code" placeholder='Zip code' className='mt-[15px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                                    <input onChange={handleChange} type="text" name="phone" placeholder='Phone' className='mt-[5px] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]' />
                                    <button type="submit" className='w-full md:w-auto mt-[16px] mb-[12px] px-[32px] py-[12px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]'>Send order</button>
                                </form>
                            </div>
                        </div>
                        <div className='hidden md:block w-[100vw] md:w-[40vw] bg-[#f9f9f9] min-h-[100vw] border-l-[1px] border-l-[#d3d3d3] justify-self-start'>
                            <div className='w-full w-full md:w-[30vw] md:mr-[10vw] p-[20px] md:p-[67px_73px_21px_44px]'>
                                {items.map((item, index) => (
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
                                ))}
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
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </>
        
    )
}

export default Commande