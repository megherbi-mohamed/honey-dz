import React, {lazy,Suspense} from "react";

import './Slider.css'
import Slider from './Slider'

const Products = lazy(()=> import('./Products'));

const Home = () => {

    let initProducts = [{},{},{},{},{},{},{},{},{}];

    return (
        <div className="w-full z-0 mt-[56px] md:mt-[64px]">
            <Slider/>
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
                <Products />
            </Suspense>
        </div>
    )
}

export default Home