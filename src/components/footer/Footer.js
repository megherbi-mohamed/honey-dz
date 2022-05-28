import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  let initBorder = {shopping:'',terms:'',contact:''}
  const [border, setborder] = useState(initBorder)

  let init = {icon:faAngleUp,height:''}
  const [subscribe, setsubscribe] = useState(init)
  const [support, setsupport] = useState(init)
  const [clickSubscribe, setclickSubscribe] = useState(0)
  const [clickSupport, setclickSupport] = useState(0)

  const setclick = (type) => {
    if (type === "subscribe") {
      setclickSubscribe((prev) => prev + 1)
      if (clickSubscribe%2 === 0) {setsubscribe({icon:faAngleDown,height:'!h-0'})}
      else {setsubscribe(init)}
    }
    else if (type === "support") {
      setclickSupport((prev) => prev + 1)
      if (clickSupport%2 === 0) {setsupport({icon:faAngleDown,height:'!h-0'})}
      else {setsupport(init)}
    }
  }

  return (
    <div className="bg-[#f5f5f5]">
      <div className="w-full lg:max-w-[calc(1280px+calc(35px/1.25)*2)] mx-auto px-[20px] lg:px[10px] py-[20px] md:py-[30px] lg:py-[60px] border-box flex flex-col lg:flex-row justify-between">
        <div className="w-full md:w-[50%] lg:w-[330px] lg:px-[10px]">
          <div className="flex items-center justify-between cursor-pointer" onClick={()=>setclick('subscribe')}>
            <h3 className="mb-[20x]">Subscribe</h3>
            <FontAwesomeIcon icon={subscribe.icon} className='text-[15px] md:hidden'/>
          </div>
          <div className={`h-[190px] md:h-auto transition-[height] duration-[500ms] ease-in-out overflow-hidden ${subscribe.height}`}>
            <p className="text-[#666666] py-[20px]">Enter your email below to be the first to know about new collections and product launches.</p>
            <div className="flex py-[10px] border-b-[2px] border-b-[#666666] justify-between">
              <input type="email" name="" id="" placeholder="Enter you email" className="border-0 outline-0 bg-transparent"/>
              <button type="submit" className="border-0 bg-transparent text-[#666666]">
                <FontAwesomeIcon icon={faArrowRight} className='ml-[20px]'/>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[330px] mt-[40px] lg:px-[20px] lg:mt-0">
          <div className="flex items-center justify-between cursor-pointer" onClick={()=>setclick('support')}>
            <h3 className="">Support</h3>
            <FontAwesomeIcon icon={support.icon} className='text-[15px] md:hidden'/>
          </div>
          <div className={`h-[112px] md:h-auto transition-[height] duration-[500ms] ease-in-out overflow-hidden ${support.height}`}>
            <Link exact to="/" className='text-[#666666] block pt-[15px] pb-[5px] relative' onMouseEnter={() => setborder({shopping:'!w-[65px]'})} onMouseLeave={() => setborder({shopping:''})}>
              Shopping
              <div className={`absolute bottom-[0px] border-b-[1px] border-black transition-[width] ease-in-out duration-[500ms] w-0 ${border.shopping}`}></div>
            </Link>
            <Link exact to="/terms-conditions" className='text-[#666666] block py-[5px] relative' onMouseEnter={() => setborder({terms:'!w-[140px]'})} onMouseLeave={() => setborder({terms:''})}>
              Terms & Conditions
              <div className={`absolute bottom-[0px] border-b-[1px] border-black transition-[width] ease-in-out duration-[500ms] w-0 ${border.terms}`}></div>
            </Link>
            <Link exact to="/" className='text-[#666666] block py-[5px] relative' onMouseEnter={() => setborder({contact:'!w-[55px]'})} onMouseLeave={() => setborder({contact:''})}>
              Contant
              <div className={`absolute bottom-[0px] border-b-[1px] border-black transition-[width] ease-in-out duration-[500ms] w-0 ${border.contact}`}></div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:max-w-[calc(1280px+calc(35px/1.25)*2)] mx-auto px-[28px] pb-[50px] md:py-[20px] grid grid-cols-1 md:grid-cols-3 justify-between items-center">
        <div className="flex justify-center md:justify-start">
          <img src="/images/visa.png" alt="" className="w-[60px]"/>
          <img src="/images/paypal.png" alt="" className="w-[60px]"/>
          <img src="/images/mastercard.png" alt="" className="w-[60px]"/>
        </div>
        <span className="text-black text-[.9rem] md:mb-0 justify-self-center hidden md:block">© SLIMI-abeilles 2022</span>
        <FontAwesomeIcon icon={faInstagram} className="justify-self-end hidden md:block"/>
        <div className="w-[53%] mx-auto flex md:hidden items-center justify-between">
          <span className="text-black text-[.9rem] md:mb-0 self-center">© SLIMI-abeilles 2022</span>
          <FontAwesomeIcon icon={faInstagram} className=''/>
        </div>
      </div>
    </div>
  )
}

export default Footer