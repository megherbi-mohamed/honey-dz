import React, {useState,useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Carousel from './Carousel';
import { getProduct } from '../../actions/products';

import { setScroll } from '../Functions';

const Products = () => {

    let { id } = useParams();

    const { product } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const location = useLocation();
    
    useEffect(() => {
        dispatch(getProduct(id));
        setScroll(location,id);
    },[location])

    const displayAskQuestion = () => {
        dispatch({ type: 'display', payload: {askQuestion:'!block',hideBody:'!block'}})
    } 
    
    const displayShare = () => {
        dispatch({ type: 'display', payload: {share:'!block',hideBody:'!block'}})
    } 

    const { addItem } = useCart()
    const addProduct = (product) => {
        addItem(product,quantity.val)
        dispatch({ type: 'display', payload: {cart:'!translate-x-[0]',hideBody:'!block'}})
    } 

    const [quantity, setquantity] = useState({val:1})

    let initButton = {description:'border-b border-b-[2.5px] border-b-black',descriptionDetail:'!block',shipping:'',shippingDetail:''}
    const [button, setbutton] = useState(initButton)

    let init = {icon:faAngleUp,height:''}
    const [description, setdescription] = useState(init)
    const [shipping, setshipping] = useState(init)
    const [clickDescription, setclickDescription] = useState(0)
    const [clickShipping, setclickShipping] = useState(0)

    const setclick = (type) => {
        if (type === "description") {
            setclickDescription((prev) => prev + 1)
            if (clickDescription%2 === 0) {setdescription({icon:faAngleDown,height:'!h-0'})}
            else {setdescription(init)}
        }
        else if (type === "shipping") {
            setclickShipping((prev) => prev + 1)
            if (clickShipping%2 === 0) {setshipping({icon:faAngleDown,height:'!h-0'})}
            else {setshipping(init)}
        }
    }

    const setquantityVal = (opt) => {
        if (opt === '+') {
            setquantity({val:quantity.val+1});
        }
        else{
            if (quantity.val > 1) {
                setquantity({val:quantity.val-1});
            }
        }
    }

    if (product.length === 0) {
        return (
            <div className="w-full lg:max-w-[1200px] mx-auto my-[56px] md:my-[60px] ">
                <div className="mt-[80px] px-[12px] py-[50px] hidden md:block">
                    <div className="flex items-center">
                        <div className='m-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                        <FontAwesomeIcon icon={faAngleRight} className="text-[12px] text-[#e0e0e0] mx-[20px]" />
                        <div className='m-0 w-[100px] h-[15px] rounded-[10px] bg-[#ecedee]'></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-[15px] md:px-[10px]">
                    <div className="w-full px-[20px] md:px-[16px] grid grid-cols-1 md:grid-cols-[80px,calc(100%-100px)] grid-rows-[300px] md:grid-rows-[500px] gap-[20px] justify-center">
                        <div className="hidden md:flex flex-col">
                            <div className="w-[80px] h-[80px] mb-[20px] bg-[#ecedee]"></div>
                            <div className="w-[80px] h-[80px] mb-[20px] bg-[#ecedee]"></div>
                        </div>
                        <div className="w-full h-full md:rounded-[10px] bg-[#ecedee]"></div>
                        <div className="flex w-full justify-center md:hidden items-center">
                            <div className='w-[10px] h-[10px] rounded-full bg-[#ecedee] mx-[5px]'></div>
                            <div className='w-[10px] h-[10px] rounded-full bg-[#ecedee] mx-[5px]'></div>
                        </div>
                    </div>
                    <div className='w-full md:px-4 mt-[20px] md:mt-0'>
                        <div className='w-[300px] h-[30px] rounded-[15px] bg-[#ecedee] mb-[20px]'></div>
                        <div className='w-[70px] h-[30px] rounded-[15px] bg-[#ecedee] mb-[40px]'></div>
                        <div className='w-[70px] h-[20px] rounded-[10px] bg-[#ecedee] mb-[20px] hidden md:block'></div>
                        <div className="flex items-center md:items-end flex-wrap md:flex-nowrap">
                            <div className='flex flex-1 md:flex-none w-[120px] h-[46px] rounded-[10px] bg-[#ecedee]'></div>
                            <div className='w-[120px] h-[46px] rounded-[10px] bg-[#ecedee] grow shrink ml-[10px]'></div>
                        </div>
                        <div className='w-full mt-[20px] h-[46px] rounded-[10px] bg-[#ecedee]'></div>
                        <div className="flex items-center mt-[44px] pb-[16px] border-b border-b-[1px] border-[#e5e7eb]">
                            <div className='w-[100px] h-[20px] rounded-[10px] bg-[#ecedee]'></div>
                            <div className='w-[100px] h-[20px] rounded-[10px] bg-[#ecedee] ml-[20px]'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full lg:max-w-[1200px] mx-auto my-[56px] md:my-[60px] ">
            <div className="mt-[60px] px-[12px] py-[30px] hidden md:block">
                <div className="flex items-center">
                    <Link to="/" className="px-[16px] py-[8px] text-[.9rem]">Home</Link>
                    <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
                    <span className="p-[16px] text-[.9rem] capitalize">{product[0].nom}</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-[15px] md:px-[10px]">
                <Carousel front={product[0].front} side={product[0].side} />
                <div className='w-full md:px-4 mt-[20px] md:mt-0'>
                    <h3 className='text-[1.2rem] text-gray-700'>{product[0].nom}</h3>
                    <p className='text-[20px] md:text-[1.4rem] text-gray-700 md:py-[10px]'>${product[0].price}</p>
                    <p className='text-[1rem] text-gray-700 my-[10px] hidden md:block'>Quantity</p>
                    <div className="flex items-center md:items-end flex-wrap md:flex-nowrap">
                        <p className='text-[1rem] mr-[20px] text-gray-700 mb:py-[20px] md:hidden'>Quantity</p>
                        <div className='flex flex-1 md:flex-none items-center bg-[#f1f1f1] rounded-[3px] w-[8rem] md:mr-[1.25rem]'>
                            <button className="w-[46px] h-[46px] text-[19px]" onClick={()=>setquantityVal('-')}>-</button>
                            <input className="flex-1 md:flex-none py-[4px] w-[40px] text-center bg-[#f1f1f1]" type="text" value={quantity.val || 1} />
                            <button className="w-[46px] h-[46px] text-[19px]" onClick={()=>setquantityVal('+')}>+</button>
                        </div>
                        <button onClick={()=>addProduct(product[0])} className="grow shrink py-[12px] mt-[20px] md:mt-0 bg-transparent text-black text-sm text-center rounded-[5px] transition-[outline] duration-600 ease-in-out border border-[#bd8c27] outline outline-0 outline-[#bd8c27] inline-block w-full hover:outline-[3px] hover:bg-[#bd8c27] hover:text-white">Add to cart</button>
                    </div>

                    <Link to="/commande" className="mt-[10px] md:mt-[20px] mb-[12px] md:mb-0 px-[32px] py-[12px] bg-[#bd8c27] text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px] text-center">Buy it now</Link>
                    <div className="flex items-center mt-[44px] pb-[16px] border-b border-b-[1px] border-[#e5e7eb]">
                        <div className='flex items-center mr-[40px] cursor-pointer' onClick={()=>displayAskQuestion()}>
                            <svg className="w-[16px] h-[16px]" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z"></path></svg>
                            <span className="text-[16px] ml-[8px]">Ask a question</span>
                        </div>
                        <div className='flex items-center cursor-pointer' onClick={()=>displayShare()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none" viewBox="0 0 14 16"><path fill="#000" d="M11 10c.8333 0 1.5417.2917 2.125.875.5833.5833.875 1.2917.875 2.125 0 .8333-.2917 1.5417-.875 2.125-.5833.5833-1.2917.875-2.125.875-.8333 0-1.54167-.2917-2.125-.875C8.29167 14.5417 8 13.8333 8 13c0-.3125.04167-.6146.125-.9062l-3.0625-1.9063C4.47917 10.7292 3.79167 11 3 11c-.83333 0-1.54167-.2917-2.125-.875C.291667 9.54167 0 8.83333 0 8c0-.83333.291667-1.54167.875-2.125C1.45833 5.29167 2.16667 5 3 5c.79167 0 1.47917.27083 2.0625.8125L8.125 3.90625C8.04167 3.61458 8 3.3125 8 3c0-.83333.29167-1.54167.875-2.125C9.45833.291667 10.1667 0 11 0c.8333 0 1.5417.291667 2.125.875C13.7083 1.45833 14 2.16667 14 3c0 .83333-.2917 1.54167-.875 2.125C12.5417 5.70833 11.8333 6 11 6c-.7917 0-1.47917-.27083-2.0625-.8125L5.875 7.09375c.1875.60417.1875 1.20833 0 1.8125l3.0625 1.90625C9.52083 10.2708 10.2083 10 11 10zm1.0625-8.0625C11.7708 1.64583 11.4167 1.5 11 1.5c-.4167 0-.7708.14583-1.0625.4375C9.64583 2.22917 9.5 2.58333 9.5 3s.14583.77083.4375 1.0625c.2917.29167.6458.4375 1.0625.4375.4167 0 .7708-.14583 1.0625-.4375.2917-.29167.4375-.64583.4375-1.0625s-.1458-.77083-.4375-1.0625zm-10.125 7.125C2.22917 9.35417 2.58333 9.5 3 9.5s.77083-.14583 1.0625-.4375S4.5 8.41667 4.5 8s-.14583-.77083-.4375-1.0625S3.41667 6.5 3 6.5s-.77083.14583-1.0625.4375S1.5 7.58333 1.5 8s.14583.77083.4375 1.0625zm8 5c.2917.2917.6458.4375 1.0625.4375.4167 0 .7708-.1458 1.0625-.4375.2917-.2917.4375-.6458.4375-1.0625 0-.4167-.1458-.7708-.4375-1.0625-.2917-.2917-.6458-.4375-1.0625-.4375-.4167 0-.7708.1458-1.0625.4375C9.64583 12.2292 9.5 12.5833 9.5 13c0 .4167.14583.7708.4375 1.0625z"></path></svg>
                            <span className="text-[16px] ml-[8px]">Share</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-[20px] md:py-[48px] mt-[10px] md:mt-[30px] px-[20px]">
                <div className="hidden md:flex items-center justify-center border-b border-b-[1px] border-b-[#999999a0]">
                    <button type="button" className={`text-[#666666] mx-[32px] py-[12px] text-[18px] ${button.description}`} onClick={()=>setbutton({description:'border-b border-b-[2.5px] border-b-black',descriptionDetail:'!block'})}>product description</button>
                    <button type="button" className={`text-[#666666] mx-[32px] py-[12px] text-[18px] ${button.shipping}`} onClick={()=>setbutton({shipping:'border-b border-b-[2.5px] border-b-black',shippingDetail:'!block'})}>Shipping & Return</button>
                </div>
                <div className="block md:hidden">
                    <div className="border-b border-b-[1px] border-[#999999a0] mb-[24px]">
                        <div className="flex items-center justify-between py-[12px] md:py-[10px] cursor-pointer" onClick={()=>setclick('description')}>
                            <h3 className="text-[18px]">product description</h3>
                            <FontAwesomeIcon icon={description.icon} className='text-[15px] md:hidden'/>
                        </div>
                        <div className={`h-[640px] md:h-auto md:py-[32px] transition-[height] duration-[500ms] ease-in-out overflow-hidden ${description.height}`}>
                            <p className="my-[12px]"><span className="font-bold">Virna</span> Bikini bottom comes in one color, it has a cheeky shape and is adjustable. It can be worn high rise or mid rise, cut from glossy swim fabric and is fully lined.</p> 
                            <p className="my-[12px] invisible">&bnsp;</p>
                            <strong className="my-[12px]">Composition :</strong>
                            <p className="my-[8px]">90% nylon, 10% elastane</p>
                            <p className="my-[12px] invisible">&bnsp;</p>
                            <strong className="my-[12px]">Care instructions :</strong>
                            <p className="my-[8px]">Note that our products require an extra care and has to be put in a laundry underwear bag while being washed.</p>
                            <p className="my-[12px] invisible">&bnsp;</p>
                            <strong className="my-[12px]">Waist Sizing :</strong>
                            <p className="my-[8px]">Extra Small: 63cm / 24.8inch</p>
                            <p className="my-[8px]">Small: 65cm / 25.5inch</p>
                            <p className="my-[8px]">Medium: 68cm / 26.7inch</p>
                            <p className="my-[8px]">Large: 71cm / 27.9inch</p>
                            <p className="my-[8px]">Extra Large: 73cm / 28.7inch</p> 
                        </div>
                    </div>
                    <div className="border-b border-b-[1px] border-[#999999a0] mb-[24px]">
                        <div className="flex items-center justify-between py-[12px] md:py-[10px] cursor-pointer" onClick={()=>setclick('shipping')}>
                            <h3 className="">Shipping & Return</h3>
                            <FontAwesomeIcon icon={shipping.icon} className='text-[15px] md:hidden'/>
                        </div>
                        <div className={`h-[200px] md:h-auto md:py-[32px] transition-[height] duration-[500ms] ease-in-out overflow-hidden ${shipping.height}`}>
                            <p className="my-[8px]">Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price.</p> 
                            <p className="my-[8px]">We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.  </p>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] hidden md:block">
                    <div className={`hidden ${button.descriptionDetail} py-[40px]`}>
                        <p><span className="font-bold">Virna</span> Bikini bottom comes in one color, it has a cheeky shape and is adjustable. It can be worn high rise or mid rise, cut from glossy swim fabric and is fully lined.</p> 
                        <p className="my-[12px] invisible">&bnsp;</p>
                        <strong className="my-[12px]">Composition :</strong>
                        <p className="my-[8px]">90% nylon, 10% elastane</p>
                        <p className="my-[12px] invisible">&bnsp;</p>
                        <strong className="my-[12px]">Care instructions :</strong>
                        <p className="my-[8px]">Note that our products require an extra care and has to be put in a laundry underwear bag while being washed.</p>
                        <p className="my-[12px] invisible">&bnsp;</p>
                        <strong className="my-[12px]">Waist Sizing :</strong>
                        <p className="my-[8px]">Extra Small: 63cm / 24.8inch</p>
                        <p className="my-[8px]">Small: 65cm / 25.5inch</p>
                        <p className="my-[8px]">Medium: 68cm / 26.7inch</p>
                        <p className="my-[8px]">Large: 71cm / 27.9inch</p>
                        <p className="my-[8px]">Extra Large: 73cm / 28.7inch</p>  
                    </div>
                    <div className={`hidden ${button.shippingDetail} py-[40px]`}>
                        <p className="my-[8px]">Shipping cost is based on weight. Just add product to your cart and use the Shipping Calculator to see the shipping price.</p> 
                        <p className="my-[8px]">We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.  </p>
                    </div>
                </div>
            </div>
            <div className="w-full py-[20px] md:py-[48px] px-[20px] text-center">
                <h2 className="text-[24px] md:text-[36px] mb-[56px]">You Might Also Like</h2>
                
            </div>
            <div className='bottom-navbar w-full fixed bottom-0 left-0 px-[16px] py-[14px] md:p-0 bg-white border-box z-40 translate-y-[100%] transition ease-in-out duration-300 delay-0' style={{boxShadow:'0 0 10px 0 rgb(0 0 0 / 9%'}}>
                <div className="w-full lg:max-w-[calc(1100px+calc(35px/1.25)*2)] px-0 md:px-[16px] lg:px-[28px] mx-auto flex justify-between items-center">
                    <div className="hidden md:flex items-center">
                        <img className="h-[70px]" src={'/images/'+product[0].front} alt="" />
                        <div className="py-[14px] ml-[24px]">
                            <h3>{product[0].nom}</h3>
                            <span>{'$'+product[0].price}</span>
                        </div>
                    </div>
                    <div className="flex md:items-center w-full md:w-auto justify-between md:justify-auto">
                        <div className='w-[48%] md:w-[130px] md:ml-[20px] flex border-[1.5px] border-gray rounded items-center'>
                            <button className="w-1/3 md:w-[46px] h-[46px] text-[19px]" onClick={()=>setquantityVal('-')}>-</button>
                            <input className="py-[4px] w-1/3 md:w-[40px] text-center bg-transparent" type="text" value={quantity.val || 1} />
                            <button className="w-1/3 md:w-[46px] h-[46px] text-[19px]" onClick={()=>setquantityVal('+')}>+</button>
                        </div>
                        <button type="button" onClick={()=>addProduct(product[0])} className="w-[48%] md:w-auto md:ml-[20px] px-[32px] py-[12px] bg-[#bd8c27] text-white text-sm block rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products