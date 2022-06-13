import React,{useState} from 'react'
import { useCart } from 'react-use-cart'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Carousel from './Carousel';

const QuikViewProduct = () => {

    const display = useSelector((state) => state.display);
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const hide = () => {
        dispatch({ type: 'display', payload: {quickViewProduct:'',hideBody:''}})
    }

    const { addItem } = useCart()
    const addProduct = (product) => {
        addItem(product,quantity.val)
        dispatch({ type: 'display', payload: {cart:'!translate-x-[0]',hideBody:'!block'}})
    } 

    const [quantity, setquantity] = useState({val:1})

    let images = [
        {front: data.front},
        {side: data.side}
    ]

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
    
    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 hidden ${display.quickViewProduct}`}>
            <div className='w-full h-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-6 bg-white w-[960px] grid grid-cols-2 shadow-prd overflow-y-auto overflow-x-hidden'>
                <Carousel images={images} />
                <div className='w-full px-8'>
                    <Link to={`/products/${data.nom}`} onClick={()=>hide()} className='text-[1.2rem] text-gray-700 font-bold'>{data.nom}</Link>
                    <p className='text-[1.2rem] text-gray-700 py-[10px]'>£{data.price}</p>
                    
                    <h3 className='font-bold my-[10px]'>British Honey Duo: Oxfordshire & Shropshire Creamed</h3>
                    <p className='text-[#212b36]'>The perfect pairing of two classic and very contrasting British honeys - each honey carries the signature of the individual landscape. </p>
                    <h3 className='font-bold my-[10px]'>Oxfordshire  Honey</h3>
                    <p className='text-[#212b36]'>Gathered from the rolling hills of the Cotswolds, where the honeybees pollinate broad beans and visit hedgerows tangled with brambles and honeysuckle. A classic natural honey, its mild, floral sweetness makes it ideal for baking.</p>
                    <p className='text-[1rem] text-gray-700 py-[20px]'>Quantity</p>
                    <div className="flex flex-wrap items-center">
                        <div className='w-[130px] mr-[20px] flex border-[1.5px] border-gray rounded items-center'>
                            <button className="w-[44px] h-[44px] text-[19px]" onClick={()=>setquantityVal('-')}>-</button>
                            <input className="py-[4px] w-[40px] text-center bg-transparent" type="text" value={quantity.val || 1} />
                            <button className="w-[44px] h-[44px] text-[19px]" onClick={()=>setquantityVal('+')}>+</button>
                        </div>
                        <button onClick={()=>addProduct(data)} className="grow bg-black text-white text-[.9rem] p-[12px] rounded-[5px]">Add to cart</button>
                    </div>
                </div>
                <div className='absolute top-[10px] right-[10px] bg-white w-[30px] h-[30px] rounded-full hover:bg-gray-300 cursor-pointer' onClick={()=>hide()}>
                    <FontAwesomeIcon icon={faXmark} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black'/>
                </div>
            </div>
        </div>
    )
}

export default QuikViewProduct