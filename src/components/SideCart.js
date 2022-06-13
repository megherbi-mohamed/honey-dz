import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const SideCart = () => {

    const display = useSelector((state) => state.display);
    const dispatch = useDispatch();
    const hide = () => {
        dispatch({ type: 'display', payload: {cart:'',hideBody:''}})
    }

    const { 
        isEmpty, 
        items, 
        cartTotal, 
        updateItemQuantity, 
        removeItem
    } = useCart()

    let initTransform = {note:'',shipping:'',after:''}
    const [transform, settransform] = useState(initTransform)

    return (
        <div className={`fixed flex top-0 right-0 translate-x-[100%] transition duration-500 ease-in-out w-full h-full z-50 ${display.cart}`}>
            <div className="w-full w-[10%] md:w-[calc(100%-450px)] h-full" onClick={()=>hide()}></div>
            <div className="bg-white w-[90%] md:w-[450px] h-full relative">
                <div className="flex items-center pt-[24px] pb-[16px] px-[20px] justify-between">
                    <h3 className="text-black text-[1.2rem]">Shopping Cart</h3>
                    <FontAwesomeIcon icon={faXmark} className="text-[20px] text-[#626262] cursor-pointer" onClick={()=>hide()}/>
                </div>
                <div className={`px-[24px] h-[calc(100vh-275px)] md:h-[calc(100vh-300px)] overflow-y-auto ${transform.after}`}>
                    {isEmpty ? <span>Your cart is currently empty.</span> : (
                        items.map((item, index) => (
                            <div className="flex py-[12px]" key={index}>
                                <Link onClick={()=>hide()} to={'/products/'+item.nom}>
                                    <img src={'/images/'+item.side} className="min-w-[108px] max-w-[108px] border-[1px] border-[#dedede]" alt="" />
                                </Link>
                                <div className="px-[20px]">
                                    <Link onClick={()=>hide()} to={'/products/'+item.nom} className="text-[16px]">{item.nom}</Link>
                                    <h3>{'£'+item.price}</h3>
                                    <div className="flex items-end">
                                        <div className='flex items-center bg-[#f1f1f1] rounded-[3px] mt-[10px]'>
                                            <button className="py-[4px] px-[12px] text-[19px]" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                            <input className="py-[4px] w-[40px] text-center bg-[#f1f1f1]" type="text" value={item.quantity || 1} />
                                            <button className="py-[4px] px-[12px] text-[19px]" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                        </div>
                                        <button className="bg-transparent border-0 underline p-[8px] ml-[8px] text-[14px]" onClick={()=>removeItem(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {isEmpty ? <div></div> : (
                    <>
                        <div className="px-[16px] md:px-[24px] pb-[16px] bg-[#f7f7f7]" style={{boxShadow:'0 0 10px #82828233'}}>
                            <div className="flex px-[1rem] py-[0.5rem] md:px-[1rem] md:py-[0.85rem] mx-[-1.5rem] my-[0]">
                                <button onClick={()=>settransform({note:'!translate-y-0',after:"after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:z-1 after:bg-[#ffffffd1]"})} className="bg-transparent border-0 p-0 mb-0 outline-0 inline-flex flex-col items-center text-[13px] md:text-[15px] weight-[500] flex-1 relative max-h-[48px] after:content-[''] after:absolute after:top-[50%] after:left-0 after:w-full after:h-[50%] after:translate-y-[-50%] after:border-r-[1px] after:border-r-[#dedede]">
                                    <svg className="w-[20px] h-[20px] flex-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><path fill="currentColor" d="M17.3672 2.21875c.4453.44531.668.98437.668 1.61719 0 .60937-.2227 1.13672-.668 1.58203L4.99219 17.793l-4.007815.457H.878906c-.257812 0-.46875-.0938-.632812-.2812-.164063-.1876-.234375-.4102-.210938-.668l.457032-4.0078L12.8672.917969C13.3125.472656 13.8398.25 14.4492.25c.6328 0 1.1719.222656 1.6172.667969l1.3008 1.300781zM4.46484 16.7383l9.28126-9.28127-2.918-2.91797-9.28122 9.28124-.35157 3.2695 3.26953-.3515zM16.5938 4.60938c.2109-.21094.3164-.46875.3164-.77344 0-.32813-.1055-.59766-.3164-.8086l-1.336-1.33593c-.2109-.21094-.4805-.31641-.8086-.31641-.3047 0-.5625.10547-.7734.31641l-2.0391 2.03906 2.918 2.91797 2.0391-2.03906z"></path></svg>
                                    <span>Note</span>
                                </button>
                                <button onClick={()=>settransform({shipping:'!translate-y-0',after:"after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:z-1 after:bg-[#ffffffd1]"})} className="bg-transparent border-0 p-0 mb-0 outline-0 inline-flex flex-col items-center text-[13px] md:text-[15px] weight-[500] flex-1 relative max-h-[48px]">
                                    <svg className="w-[22px] h-[22px] flex-1" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M280 192c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240zm352 192h-24V275.9c0-16.8-6.8-33.3-18.8-45.2l-83.9-83.9c-11.8-12-28.3-18.8-45.2-18.8H416V78.6c0-25.7-22.2-46.6-49.4-46.6H113.4C86.2 32 64 52.9 64 78.6V96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H96V78.6c0-8.1 7.8-14.6 17.4-14.6h253.2c9.6 0 17.4 6.5 17.4 14.6V384H207.6C193 364.7 170 352 144 352c-18.1 0-34.6 6.2-48 16.4V288H64v144c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h195.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-488 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm272-320h44.1c8.4 0 16.7 3.4 22.6 9.4l83.9 83.9c.8.8 1.1 1.9 1.8 2.8H416V160zm80 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-96h-16.4C545 364.7 522 352 496 352s-49 12.7-63.6 32H416v-96h160v96zM256 248v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8z"></path></svg>
                                    <span>Shipping</span>
                                </button>
                            </div>
                            <div className="flex justify-between items-center pt-[16px] md:py-[16px]">
                                <span className="text-[18px]">Subtotal</span>
                                <span className="text-[18px]">{'$'+cartTotal}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Link to="/commande" onClick={()=>hide()} className="mt-[16px] mb-[12px] px-[32px] py-[11px] bg-[#bd8c27] text-white text-center text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]">Check out</Link>
                                <Link className="underline text-[16px]" to='/cart' onClick={()=>hide()}>View Cart</Link>
                            </div>
                        </div>
                        <div className={`absolute z-[20] w-full bottom-0 translate-y-[100%] transition duration-[500ms] ease-in-out px-[24px] pt-[16px] pb-[64px] bg-white ${transform.note}`} style={{boxShadow:'0 0 10px #82828233'}}>
                            <div className="flex items-center py-[10px]">
                                <svg className="w-[13px] h-[20px]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><path fill="currentColor" d="M17.3672 2.21875c.4453.44531.668.98437.668 1.61719 0 .60937-.2227 1.13672-.668 1.58203L4.99219 17.793l-4.007815.457H.878906c-.257812 0-.46875-.0938-.632812-.2812-.164063-.1876-.234375-.4102-.210938-.668l.457032-4.0078L12.8672.917969C13.3125.472656 13.8398.25 14.4492.25c.6328 0 1.1719.222656 1.6172.667969l1.3008 1.300781zM4.46484 16.7383l9.28126-9.28127-2.918-2.91797-9.28122 9.28124-.35157 3.2695 3.26953-.3515zM16.5938 4.60938c.2109-.21094.3164-.46875.3164-.77344 0-.32813-.1055-.59766-.3164-.8086l-1.336-1.33593c-.2109-.21094-.4805-.31641-.8086-.31641-.3047 0-.5625.10547-.7734.31641l-2.0391 2.03906 2.918 2.91797 2.0391-2.03906z"></path></svg>
                                <span className="ml-[10px] text-[18px]">Add note for seller</span>
                            </div>
                            <form>
                                <textarea name="note" className="h-[110px] mt-[0.25rem] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]" rows="3" placeholder="Special instructions for seller"></textarea>
                                <div className="flex flex-col">
                                    <button type="submit" className="mb-[12px] px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]">save</button>
                                    <button type="button" onClick={()=>settransform({shop:'',after:""})} className="bg-transparent border-0 p-0 mb-0 outline-0 inline-flex flex-col items-center text-[15px] weight-[500] flex-1 relative max-h-[48px]">Cancel</button>
                                </div>
                            </form>
                        </div>
                        <div className={`absolute z-[20] w-full bottom-0 translate-y-[100%] transition duration-[500ms] ease-in-out px-[24px] pt-[16px] pb-[64px] bg-white ${transform.shipping}`} style={{boxShadow:'0 0 10px #82828233'}}>
                            <div className="flex items-center py-[10px]">
                                <svg className="w-[22px]" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M280 192c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240zm352 192h-24V275.9c0-16.8-6.8-33.3-18.8-45.2l-83.9-83.9c-11.8-12-28.3-18.8-45.2-18.8H416V78.6c0-25.7-22.2-46.6-49.4-46.6H113.4C86.2 32 64 52.9 64 78.6V96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H96V78.6c0-8.1 7.8-14.6 17.4-14.6h253.2c9.6 0 17.4 6.5 17.4 14.6V384H207.6C193 364.7 170 352 144 352c-18.1 0-34.6 6.2-48 16.4V288H64v144c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h195.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-488 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm272-320h44.1c8.4 0 16.7 3.4 22.6 9.4l83.9 83.9c.8.8 1.1 1.9 1.8 2.8H416V160zm80 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-96h-16.4C545 364.7 522 352 496 352s-49 12.7-63.6 32H416v-96h160v96zM256 248v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8z"></path></svg>
                                <span className="ml-[10px] text-[18px]">Estimate shipping rates</span>
                            </div>
                            <form>
                                <div className="mb-[24px] ">
                                    <label htmlFor="">Country/region</label>
                                    <select name="country" className="mt-[0.25rem] mb-[10px] px-[12px] py-[12px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]">
                                        <option value="">France</option>
                                    </select>
                                </div>
                                <div className="mb-[24px] ">
                                    <label htmlFor="">Postal code</label>
                                    <input type="text" name="zipcode" className="mt-[0.25rem] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-[#bd8c27]"/>
                                </div>
                                <div className="flex flex-col">
                                    <button type="submit" className="mb-[12px] px-[32px] py-[10px] bg-[#bd8c27] text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-[#bd8c27] hover:outline-[3px]">Calculate shipping rates</button>
                                    <button type="button" onClick={()=>settransform({shipping:'',after:""})} className="bg-transparent border-0 p-0 mb-0 outline-0 inline-flex flex-col items-center text-[15px] weight-[500] flex-1 relative max-h-[48px]">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default SideCart