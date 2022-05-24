import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faXmark } from '@fortawesome/free-solid-svg-icons'


const SideCart = () => {

    const display = useSelector((state) => state.display);
    const dispatch = useDispatch();
    const hide = () => {
        dispatch({ type: 'display', payload: {sideFilter:'',hideBody:''}})
    }

    let init = {icon:faAngleUp,height:''}
    const [type, settype] = useState(init)
    const [color, setcolor] = useState(init)
    const [size, setsize] = useState(init)

    const [clickType, setclickType] = useState(0)
    const [clickColor, setclickColor] = useState(0)
    const [clickSize, setclickSize] = useState(0)

    const setclick = (type) => {
    if (type === "type") {
        setclickType((prev) => prev + 1)
            if (clickType%2 === 0) {settype({icon:faAngleDown,height:'!h-0'})}
            else {settype(init)}
        }
        if (type === "color") {
            setclickColor((prev) => prev + 1)
            if (clickColor%2 === 0) {setcolor({icon:faAngleDown,height:'!h-0'})}
            else {setcolor(init)}
        }
        if (type === "size") {
            setclickSize((prev) => prev + 1)
            if (clickSize%2 === 0) {setsize({icon:faAngleDown,height:'!h-0'})}
            else {setsize(init)}
        }
    }

    return (
        <div className={`fixed flex top-0 left-0 -translate-x-[100%] transition duration-500 ease-in-out w-full h-full z-50 ${display.sideFilter}`}>
            <div className="bg-white w-[90%] md:w-[405px] h-full">
                <div className="flex items-center p-[20px] justify-between">
                    <h3 className="text-black text-[1.9rem]">Filters</h3>
                    <FontAwesomeIcon icon={faXmark} className="text-[20px] text-[#626262] cursor-pointer" onClick={()=>hide()}/>
                </div>
                <div className="pl-[1.25rem] pr-[1.75rem]">
                    <div className="mb-[30px]">
                        <div className="flex items-center justify-between cursor-pointer mb-[6px]" onClick={()=>setclick('type')}>
                            <h3 className="">Product type</h3>
                            <FontAwesomeIcon icon={type.icon} className='text-[15px]'/>
                        </div>
                        <div className={`h-[142px] py-[5px] pr-[16px] transition-[height] duration-[500ms] ease-in-out overflow-hidden ${type.height}`}>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Bottom (14)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">One piece (2)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Tops (14)</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-[30px]">
                        <div className="flex items-center justify-between cursor-pointer mb-[6px]" onClick={()=>setclick('color')}>
                            <h3 className="">Color</h3>
                            <FontAwesomeIcon icon={color.icon} className='text-[15px]'/>
                        </div>
                        <div className={`h-[300px] py-[5px] pr-[16px] transition-[height] duration-[500ms] ease-in-out overflow-hidden ${color.height}`}>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Baby Blue (1)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Black (1)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Deep Blue (1)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Emerald Green (1)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Ocean (1)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Purple Haze (1)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Sage (1)</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-[30px]">
                        <div className="flex items-center justify-between cursor-pointer mb-[6px]" onClick={()=>setclick('size')}>
                            <h3 className="">Size</h3>
                            <FontAwesomeIcon icon={size.icon} className='text-[15px]'/>
                        </div>
                        <div className={`h-[230px] py-[5px] pr-[16px] transition-[height] duration-[500ms] ease-in-out overflow-hidden ${size.height}`}>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">X-Small (14)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Small (14)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Medium (14)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">Large (14)</p>
                            </div>
                            <div className="flex items-center py-[10px]">
                                <input type="checkbox" name="" id="" />
                                <p className="ml-[20px]">X-Large (14)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full w-[10%] md:w-[calc(100%-450px)] h-full" onClick={()=>hide()}></div>
        </div>
    )
}

export default SideCart