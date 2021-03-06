import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCart } from 'react-use-cart'
import { IKImage } from 'imagekitio-react';

const Product = (props) => {

    let opacityImage = {side:'',front:''}
    const [opcaity, setopcaity] = useState(opacityImage)
    let initTransform = {translateX:'',translateY:''}
    const [transform, settransform] = useState(initTransform)

    const data = {id:props.id,front:props.front,side:props.side,nom:props.nom,price:props.price,color:props.color}

    const dispatch = useDispatch();
    const display = () => {
        dispatch({ type: 'display', payload: {quickViewProduct:'!block',hideBody:'!block'}})
        dispatch({ type: 'data', payload: {id:props.id,front:props.front,side:props.side,nom:props.nom,price:props.price,color:props.color}})
    }

    const { addItem } = useCart()
    const addProduct = (product) => {
        addItem(product,1)
        dispatch({ type: 'display', payload: {cart:'!translate-x-[0]',hideBody:'!block'}})
    } 

    return (
        <>
            <div key ={props.i} className={`px-[7.5px] border-box pb-[20px] lg:px-0 pb-[30px] lg:pb-[20px] text-center relative`} onMouseEnter={() => {setopcaity({side:'lg:opacity-0',front:'lg:!opacity-100'});settransform({translateX:'lg:!translate-x-[0]',translateY:'lg:!translate-y-[0]'})}} onMouseLeave={() => {setopcaity({side:'',front:''});settransform({translateX:'',translateY:''})}}>
                <Link to={`/products/${props.id}`}>
                    <div className="w-[298px] relative overflow-hidden flex items-center mx-auto">
                            <IKImage
                                path={props.side}
                                lqip={{ active: true, quality: 10, blur: 10 }}
                                loading="lazy"
                                width="auto"
                                className={`w-[298px] transition-opacity duration-1000 ease-in-out ${opcaity.side}`}
                            />
                            <IKImage
                                path={props.front}
                                lqip={{ active: true, quality: 10, blur: 10 }}
                                loading="lazy"
                                width="auto"
                                className={`w-[298px] -translate-x-[100%] opacity-0 transition-opacity duration-1000 ease-in-out ${opcaity.front}`}
                            />
                    </div>
                </Link>
                <Link className='relative after:content-[""] after:w-[50px] after:h-[100%] after:border-b-[2px] after:border-b-black after:absolute after:top-0 after:translate-x-[-50%]' to={`/products/${props.nom.replace(/\s/g, '-')}`}>
                    <p className="w-[298px] py-[10px] capitalize mt-[10px] mx-auto text-black text-[0.9rem] tracking-[2px] leading-[1.3rem] hover:text-[#bd8c27]">{props.nom}</p>
                </Link>
                <p className="text-black py-[10px] text-[#bd8c27]">??{props.price}</p>
                <div className="w-[298px] mx-auto h-0 lg:h-[100px] xl:h-[60px] grid grid-cols-1 xl:grid-cols-2 gap-[10px] py-[10px] items-start text-center overflow-hidden">
                    <button className={`justify-self-center w-[calc(100%-40px)] translate-y-[-50px] transition duration-500 ease-in-out ${transform.translateY} py-[6px] text-[0.85rem] border-[2px_0_2px_0] border-[#bd8c27] bg-white relative z-10 after:content-[''] after:z-[-1] after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[-12px] after:bg-white after:rotate-45 after:w-[25px] after:h-[25px] after:border-[0_0_2px_2px] after:border-[#bd8c27] befor:content-[''] before:z-[-1] before:absolute before:top-[50%] before:translate-y-[-50%] before:right-[-12px] before:bg-white before:rotate-45 before:w-[25px] before:h-[25px] before:border-[2px_2px_0_0] before:border-[#bd8c27]`} onClick={()=>display()}>QUICK SHOP</button>
                    <button className={`hidden md:block justify-self-center w-[calc(100%-40px)] translate-y-[-100px] xl:translate-y-[-50px] transition duration-500 ease-in-out ${transform.translateY} py-[8px] text-[0.85rem] bg-[#bd8c27] text-white relative z-10 after:content-[''] after:z-[-1] after:absolute after:top-[50%] after:translate-y-[-50%] after:left-[-12px] after:bg-[#bd8c27] after:rotate-45 after:w-[25px] after:h-[25px] after:border-[0_0_2px_2px] after:border-[#bd8c27] befor:content-[''] before:z-[-1] before:absolute before:top-[50%] before:translate-y-[-50%] before:right-[-12px] before:bg-[#bd8c27] before:rotate-45 before:w-[25px] before:h-[25px] before:border-[2px_2px_0_0] before:border-[#bd8c27]`}  onClick={()=>addProduct(data)}>ADD TO CART</button>
                </div>
            </div>
        </>
    )
}

export default Product