import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Product from './Products';
import { getCategoryProducts } from '../actions/products';

const Collections = () => {

    let { id } = useParams();

    const products = useSelector((state) => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryProducts(id));
    },[])

    const display = () => {
        dispatch({ type: 'display', payload: {sideFilter:'!translate-x-[0]',hideBody:'!block'}})
    }

    return (
        <div className="max-w-[calc(1280px+calc(35px/1.25)*2)] mx-auto mt-[60px] md:px-[10px] lg:px-[28px]">
            <div className="py-[30px] px-[16px] md:px-[6px] lg:py-[50px] lg:px-0">
                <h1 className="text-[19px] uppercase">{id}</h1>
            </div>
            <div className="mt-[10px] px-[10px] lg:px-0 lg:py-[28px]">
                <div onClick={()=>display()} className="flex items-center cursor-pointer p-[5px] md:px-0 bg-white md:bg-transparent mb-[20px] lg:mb-0">
                    <span className="mr-[10px] px-[5px] md:px-[6px] lg:px-0">Filter</span>
                    <FontAwesomeIcon icon={faAngleDown} className="text-[12px]" />
                </div>
                <div className="w-full border-box mx-auto mb-[0] md:my-[24px] lg:mt-[20px] lg:px-0 lg:px-0 grid gap-[20px] lg:gap-[24px] grid-cols-2 md:grid-cols-4 items-start">
                    {!products.length ?  <p className=''>Loading Collections</p> : (
                            products.map(product => (
                                <Product style={{style:'w-full'}} front={product.front} side={product.side} color={product.color} nom={product.nom} prix={product.prix} />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Collections