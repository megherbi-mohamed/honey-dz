import React from 'react'
import { useSelector } from 'react-redux';

const HideBody = () => {

    const display = useSelector((state) => state.display);
    
    return (
        <div className={`fixed top-0 left-0 w-full h-full z-40 bg-[#0000006b] hidden ${display.hideBody}`}></div>
    )
}

export default HideBody