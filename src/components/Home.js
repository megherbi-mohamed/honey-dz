import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getAllProducts } from '../actions/products';

import Product from './Product'

import './Slider.css'
import Slider from './Slider'

const Home = () => {

    let images = [
        {url: '/images/slide_1.webp'},
        {url: '/images/slide_2.webp'},
        {url: '/images/slide_3.webp'},
        // {url: '/images/slide_4.jpg'},
        // {url: '/images/slide_5.jpg'}
    ]

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    },[])

    const products = useSelector((state) => state.products);
    
    return (
        <div className="w-full z-0 mt-[56px] md:mt-[64px]">
            <Slider images={images}/>
            <div className="w-full overflow-x-auto no-scrollbar md:overflow-hidden">
                <div className="w-full lg:max-w-[calc(1280px+calc(35px/1.25)*2)] border-box mx-auto mb-[0] mt-[50px] md:mt-[60px] md:my-[60px] lg:mt-[80px] lg:mx-auto px-[6px] lg:px-[calc(35px/1.25)] flex flex-row md:grid md:gap-0 lg:gap-[30px] md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 items-start">
                    {!products.length ? <p className=''>Loading Products</p> : (
                            products.map((product,i) => (
                                <Product style={'min-w-[66.66vw] md:min-w-[70%] px-[7.5px]'} key={i} id={product._id} front={product.front} side={product.side} color={product.color} nom={product.nom} prix={product.prix} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home