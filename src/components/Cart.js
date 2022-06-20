import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

    const { 
        isEmpty, 
        items, 
        cartTotal, 
        updateItemQuantity, 
        removeItem
    } = useCart()

    let initDisplay = {note:'',shipping:'',background:'',opacity:''}
    const [display, setdisplay] = useState(initDisplay)

    return (
        <>
            <div className="mt-[60px] px-[16px] py-[30px] md:py-[56px] text-center">
                <h1 className="text-[30px] md:text-[36px]">Shopping Cart</h1>
                <div className="flex items-center justify-center">
                    <Link to="/" className="px-[16px] py-[8px] text-[.9rem]">Home</Link>
                    <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
                    <span className="p-[16px] text-[.9rem]">Your Shopping Cart</span>
                </div>
            </div>
            <div className="w-full md:max-w-[calc(1200px+calc(35px/1.25)*2)] mx-auto px-[16px] md:px-[36px] pb-[80px]">
                {isEmpty ? <div className="py-[40px]"></div> : (
                    <form>
                        <div className="w-full">
                            <>
                            <div className="flex weight-500 border-b border-b-[1px] border-[#dedede]">
                                <div className="flex-1 pr-[1.5rem] py-[1rem]">Product</div>
                                <div className="flex-[0 0 auto] pl-[1.5rem] md:px-[1.5rem] py-[1rem] w-[20%] text-right md:text-left">Price</div>
                                <div className="flex-[0 0 auto] px-[1.5rem] py-[1rem] w-[20%] hidden md:block">Quantity</div>
                                <div className="flex-[0 0 auto] pl-[1.5rem] py-[1rem] w-[12%] text-right hidden md:block">Total</div>
                            </div>
                            {items.map((item, index) => (
                                <div key={index} className="w-full flex flex-wrap items-center py-[1rem] border-b border-b-[1px] border-[#dedede]">
                                    <div className="w-auto flex-1 pr-[1.5rem] py-[1rem]">
                                        <div className="flex flex-start items-start">
                                            <img className="w-[60px] md:w-[110px]" src={'/images/'+item.side} alt="" />
                                            <div className="pl-[1rem] md:px-[1.5rem]">
                                                <Link to={'/products/'+item.nom}>{item.nom}</Link>
                                                <p>{'Color: '+item.color}</p>
                                                <p>{'Size: '+item.size}</p>
                                                <button type="button" className="bg-transparent border-0 py-[8px] text-[14px]" onClick={()=>removeItem(item.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-[0 0 auto] px-[1.5rem] py-[1rem] w-[20%] hidden md:block">
                                        <p className="m-0">{'$'+item.price+'.00'}</p>
                                    </div>
                                    <div className="flex-[0 0 auto] px-[1.5rem] py-[1rem] w-[20%] hidden md:block">
                                        <div className='flex w-[120px] items-center justify-between rounded-[3px] mt-[10px] border-[1px] border-[#dedede]'>
                                            <button type="button" className="py-[4px] px-[12px] text-[19px]" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                            <input className="py-[8px] w-[40px] text-center" type="text" value={item.quantity} />
                                            <button type="button" className="py-[4px] px-[12px] text-[19px]" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                        </div>
                                    </div>
                                    <div className="flex-[0 0 auto] pl-[1.5rem] py-[1rem] w-[40%] md:w-[12%] text-right">
                                        <p className="">{'$'+item.price+'.00'}</p>
                                        <div className="flex justify-end items-center md:hidden mt-[10px]">
                                            <span className="text-sm mr-[10px]">Qty</span>
                                            <div className='flex w-[120px] items-center justify-between rounded-[3px] border-[1px] border-[#dedede]'>
                                                <button type="button" className="py-[4px] px-[12px] text-[19px]" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                                <input className="py-[8px] w-[40px] text-center" type="text" value={item.quantity} />
                                                <button type="button" className="py-[4px] px-[12px] text-[19px]" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex justify-between">
                                <div></div>
                                <div className={`w-full md:w-[400px] md:px-[48px] pt-[15px] md:pt-[30px] mr-0 md:mr-[-50px] transition duration-[300ms] ease-in-out ${display.background}`}>
                                    <div className="flex py-[0.85rem] mb-[15px] border-b-[1px] border-b-[#dedede]">
                                        <button type="button" onClick={()=>setdisplay({note:'!block',background:'bg-white px-[15px]',opacity:'opacity-10 z-[-1] pointer-events-none'})} className="bg-transparent border-0 p-0 mb-0 outline-0 inline-flex flex-col items-center text-[15px] weight-[500] flex-1 relative max-h-[48px] after:content-[''] after:absolute after:top-[50%] after:left-0 after:w-full after:h-[50%] after:translate-y-[-50%] after:border-r-[1px] after:border-r-[#dedede]">
                                            <svg class="w-[20px] h-[20px] flex-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><path fill="currentColor" d="M17.3672 2.21875c.4453.44531.668.98437.668 1.61719 0 .60937-.2227 1.13672-.668 1.58203L4.99219 17.793l-4.007815.457H.878906c-.257812 0-.46875-.0938-.632812-.2812-.164063-.1876-.234375-.4102-.210938-.668l.457032-4.0078L12.8672.917969C13.3125.472656 13.8398.25 14.4492.25c.6328 0 1.1719.222656 1.6172.667969l1.3008 1.300781zM4.46484 16.7383l9.28126-9.28127-2.918-2.91797-9.28122 9.28124-.35157 3.2695 3.26953-.3515zM16.5938 4.60938c.2109-.21094.3164-.46875.3164-.77344 0-.32813-.1055-.59766-.3164-.8086l-1.336-1.33593c-.2109-.21094-.4805-.31641-.8086-.31641-.3047 0-.5625.10547-.7734.31641l-2.0391 2.03906 2.918 2.91797 2.0391-2.03906z"></path></svg>
                                            <span>Note</span>
                                        </button>
                                        <button type="button" onClick={()=>setdisplay({shipping:'!block',background:'bg-white px-[15px]',opacity:'opacity-10 z-[-1] pointer-events-none'})} className="bg-transparent border-0 p-0 mb-0 outline-0 inline-flex flex-col items-center text-[15px] weight-[500] flex-1 relative max-h-[48px]">
                                            <svg class="w-[22px] h-[22px] flex-1" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M280 192c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240zm352 192h-24V275.9c0-16.8-6.8-33.3-18.8-45.2l-83.9-83.9c-11.8-12-28.3-18.8-45.2-18.8H416V78.6c0-25.7-22.2-46.6-49.4-46.6H113.4C86.2 32 64 52.9 64 78.6V96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H96V78.6c0-8.1 7.8-14.6 17.4-14.6h253.2c9.6 0 17.4 6.5 17.4 14.6V384H207.6C193 364.7 170 352 144 352c-18.1 0-34.6 6.2-48 16.4V288H64v144c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h195.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-488 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm272-320h44.1c8.4 0 16.7 3.4 22.6 9.4l83.9 83.9c.8.8 1.1 1.9 1.8 2.8H416V160zm80 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-96h-16.4C545 364.7 522 352 496 352s-49 12.7-63.6 32H416v-96h160v96zM256 248v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8z"></path></svg>
                                            <span>Shipping</span>
                                        </button>
                                    </div>
                                    <div className={`w-full pt-[16px] pb-[20px] md:pb-[64px] bg-white hidden ${display.note}`}>
                                        <div className="flex items-center py-[10px]">
                                            <svg class="w-[13px] h-[20px]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><path fill="currentColor" d="M17.3672 2.21875c.4453.44531.668.98437.668 1.61719 0 .60937-.2227 1.13672-.668 1.58203L4.99219 17.793l-4.007815.457H.878906c-.257812 0-.46875-.0938-.632812-.2812-.164063-.1876-.234375-.4102-.210938-.668l.457032-4.0078L12.8672.917969C13.3125.472656 13.8398.25 14.4492.25c.6328 0 1.1719.222656 1.6172.667969l1.3008 1.300781zM4.46484 16.7383l9.28126-9.28127-2.918-2.91797-9.28122 9.28124-.35157 3.2695 3.26953-.3515zM16.5938 4.60938c.2109-.21094.3164-.46875.3164-.77344 0-.32813-.1055-.59766-.3164-.8086l-1.336-1.33593c-.2109-.21094-.4805-.31641-.8086-.31641-.3047 0-.5625.10547-.7734.31641l-2.0391 2.03906 2.918 2.91797 2.0391-2.03906z"></path></svg>
                                            <span className="ml-[10px] text-[18px]">Add note for seller</span>
                                        </div>
                                        <form>
                                            <textarea name="note" className="h-[110px] mt-[0.25rem] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-black" rows="3" placeholder="Special instructions for seller"></textarea>
                                            <div className="flex flex-col">
                                                <button type="submit" className="mb-[12px] px-[32px] py-[10px] bg-black text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-black hover:outline-[3px]">Save</button>
                                                <button type="button" onClick={()=>setdisplay({note:'',background:'',opacity:''})} className="bg-transparent border-0 p-0 mb-0 outline-0 inline-flex flex-col items-center text-[15px] weight-[500] flex-1 relative max-h-[48px]">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className={`w-full pt-[16px] pb-[20px] md:pb-[64px] bg-white hidden ${display.shipping}`}>
                                        <div className="flex items-center py-[10px]">
                                            <svg class="w-[22px]" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M280 192c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240zm352 192h-24V275.9c0-16.8-6.8-33.3-18.8-45.2l-83.9-83.9c-11.8-12-28.3-18.8-45.2-18.8H416V78.6c0-25.7-22.2-46.6-49.4-46.6H113.4C86.2 32 64 52.9 64 78.6V96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H96V78.6c0-8.1 7.8-14.6 17.4-14.6h253.2c9.6 0 17.4 6.5 17.4 14.6V384H207.6C193 364.7 170 352 144 352c-18.1 0-34.6 6.2-48 16.4V288H64v144c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h195.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-488 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm272-320h44.1c8.4 0 16.7 3.4 22.6 9.4l83.9 83.9c.8.8 1.1 1.9 1.8 2.8H416V160zm80 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-96h-16.4C545 364.7 522 352 496 352s-49 12.7-63.6 32H416v-96h160v96zM256 248v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8z"></path></svg>
                                            <span className="ml-[10px] text-[18px]">Estimate shipping rates</span>
                                        </div>
                                        <form>
                                            <div className="mb-[24px] ">
                                                <label htmlFor="">Country/region</label>
                                                <select name="" id="" className="mt-[0.25rem] mb-[10px] px-[12px] py-[12px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-black">
                                                    <option value="">France</option>
                                                </select>
                                            </div>
                                            <div className="mb-[24px] ">
                                                <label htmlFor="">Postal code</label>
                                                <input type="text" name="" id="" className="mt-[0.25rem] mb-[10px] px-[12px] py-[10px] w-full border border-[#dbdbdb] rounded-[5px] outline-0 transition-[border] duration-400 ease-in-out focus:border-black"/>
                                            </div>
                                            <div className="flex flex-col">
                                                <button type="submit" className="mb-[12px] px-[32px] py-[10px] bg-black text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-black hover:outline-[3px]">Calculate shipping rates</button>
                                                <button type="button" onClick={()=>setdisplay({shipping:'',background:'',opacity:''})} className="bg-transparent border-0 p-0 mb-0 outline-0 inline-flex flex-col items-center text-[15px] weight-[500] flex-1 relative max-h-[48px]">Cancel</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className={`w-full transition duration-[300ms] ease-in-out ${display.opacity}`}>
                                        <div className="flex justify-between items-center pt-[16px]">
                                            <span className="text-[15px]">Subtotal</span>
                                            <span className="text-[15px]">{'$'+cartTotal+'.00'}</span>
                                        </div>
                                        <div className="text-[14px]">Taxes and shipping calculated at checkout</div>
                                        <div className="flex flex-col items-center">
                                            <button className="mt-[16px] mb-[12px] px-[32px] py-[11px] bg-black text-white text-sm block w-full rounded-[5px] transition-[outline] duration-600 ease-in-out outline outline-0 outline-black hover:outline-[3px]">Check out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        </div>
                    </form>
                )}
            </div>
        </>
    )
}

export default Cart