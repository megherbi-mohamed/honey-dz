import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getAllProducts } from '../actions/products';

import Product from './Product'

import './Slider.css'
import Slider from './Slider'

const Home = () => {

    let images = [
        {url: '/images/slide_1.webp'},
        {url: '/images/slide_2.webp'},
        {url: '/images/slide_3.webp'}
    ]

    let initProducts = [{},{},{},{},{},{},{},{},{}];

    const {products} = useSelector((state) => state.products);

    const dispatch = useDispatch();
    const location = useLocation();

    // useEffect(() => {
    //     if (products.length === 0) {
    //         dispatch(getAllProducts());
    //     }
    // },[location])

    useEffect(() => {
        dispatch(getAllProducts());
    },[])
    
    // if (products.length === 0) {
    //     return (
    //         <div className="w-full z-0 mt-[56px] md:mt-[64px]">
    //             <div className="w-full overflow-x-auto no-scrollbar md:overflow-hidden">
    //                 <div className="w-full lg:max-w-[calc(1280px+calc(35px/1.25)*2)] mx-auto mb-[0] mt-[50px] md:mt-[60px] md:my-[60px] lg:mt-[80px] lg:mx-auto px-[6px] lg:px-[calc(35px/1.25)] flex flex-row md:grid md:gap-0 lg:gap-[30px] md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 items-start">
    //                     {initProducts.map((index) => (
    //                         <div key={index} className='min-w-[66.66vw] md:min-w-[70%] px-[7.5px] md:w-full pb-[20px] lg:px-0 pb-[30px] lg:pb-[20px]'>
    //                             <div className='min-w-full h-[250px] bg-[#ecedee] mb-[20px]'></div>
    //                             <div className='w-[60%] h-[20px] rounded-[20px] bg-[#ecedee] mb-[10px] mx-auto'></div>
    //                             <div className='w-[90%] h-[20px] rounded-[20px] bg-[#ecedee] mb-[10px] mx-auto'></div>
    //                             <div className='w-[40%] h-[20px] rounded-[20px] bg-[#ecedee] mb-[20px] mx-auto'></div>
    //                             <div className='w-[50px] border-[2px] border-[#ecedee] mb-[20px] mx-auto'></div>
    //                             <div className='w-[40px] h-[15px] rounded-[7.5px] bg-[#ecedee] mb-[10px] mx-auto'></div>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="w-full z-0 mt-[56px] md:mt-[64px]">
            <Slider images={images}/>
            <div className="w-full overflow-x-auto no-scrollbar md:overflow-hidden">
                <div className="w-full lg:max-w-[calc(1280px+calc(35px/1.25)*2)] border-box mx-auto mb-[0] mt-[50px] md:mt-[60px] md:my-[60px] lg:mt-[80px] lg:mx-auto px-[6px] lg:px-[calc(35px/1.25)] flex flex-row md:grid md:gap-0 lg:gap-[30px] md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 items-start">
                    {products.map((product,i) => (
                        <Product style={'min-w-[66.66vw] md:min-w-[70%] px-[7.5px]'} key={i} id={product._id} front={product.front} side={product.side} color={product.color} nom={product.nom} price={product.prix} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home