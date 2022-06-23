import React,{useEffect,lazy,Suspense} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllProducts } from '../actions/products';

const Product = lazy(()=> import('./Product'));

const Products = () => {

    const {products} = useSelector((state) => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    },[])

    let initProducts = [{},{},{},{},{},{},{},{},{}];

    if (products.length === 0) {
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
    }

    return (
        <>
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
                                <Product id={product._id} front={product.front} side={product.side} nom={product.nom} price={product.prix} />
                            )) : null
                        }
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default Products