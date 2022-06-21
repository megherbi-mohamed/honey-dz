import React, {lazy,Suspense,useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getAllProducts } from '../actions/products';

import './Slider.css'
import Slider from './Slider'

const Product = lazy(()=> import('./Product'));

const Home = () => {

    let initProducts = [{},{},{},{},{},{},{},{},{}];

    const {products} = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    },[])

    return (
        <div className="w-full z-0 mt-[56px] md:mt-[64px]">
            <Slider/>
            <div className="w-full overflow-x-auto no-scrollbar md:overflow-hidden">
                <div className="w-full lg:max-w-[calc(1280px+calc(35px/1.25)*2)] border-box mx-auto mb-[0] mt-[50px] md:mt-[60px] md:my-[60px] lg:mt-[80px] lg:mx-auto px-[6px] lg:px-[calc(35px/1.25)] flex flex-row md:grid md:gap-0 lg:gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start">
                    <Suspense fallback={
                        <>
                            {initProducts.map((index) => (
                                <div key={index} className='min-w-[66.66vw] md:min-w-[70%] px-[7.5px] md:w-full pb-[20px] lg:px-0 pb-[30px] lg:pb-[20px]'>
                                    <div className='min-w-full h-[250px] bg-[#ecedee] mb-[20px]'></div>
                                    <div className='w-[60%] h-[20px] rounded-[20px] bg-[#ecedee] mb-[10px] mx-auto'></div>
                                    <div className='w-[90%] h-[20px] rounded-[20px] bg-[#ecedee] mb-[10px] mx-auto'></div>
                                    <div className='w-[40%] h-[20px] rounded-[20px] bg-[#ecedee] mb-[20px] mx-auto'></div>
                                    <div className='w-[50px] border-[2px] border-[#ecedee] mb-[20px] mx-auto'></div>
                                    <div className='w-[40px] h-[15px] rounded-[7.5px] bg-[#ecedee] mb-[10px] mx-auto'></div>
                                </div>
                            ))}
                        </>
                    }> 
                    {products.length > 0 ?  
                        products.map((product,i) => (
                            <Product style={{style:'px-[7.5px]'}} key={i} id={product._id} front={product.front} side={product.side} color={product.color} nom={product.nom} price={product.prix} />
                        )) : null
                    }
                </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Home