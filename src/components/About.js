import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <>
            <div className="mt-[60px] px-[16px] py-[30px] md:py-[56px] text-center">
                <h1 className="text-[30px] md:text-[36px]">About</h1>
                <div className="flex items-center justify-center">
                    <Link to="/" className="px-[16px] py-[8px] text-[.9rem]">Home</Link>
                    <FontAwesomeIcon icon={faAngleRight} className="text-[10px]" />
                    <span className="p-[16px] text-[.9rem]">About</span>
                </div>
            </div>
            <div className="w-full md:max-w-[calc(1280px+calc(35px/1.25)*2)] mx-auto px-[20px] pb-[20px] align-start">
                <p className="my-[10px]">&nbsp;</p>
                <p className="my-[10px]">&nbsp;</p>
                <p className="my-[10px]">&nbsp;</p>
                <p className="my-[10px]"><span>Founded in 2021, Suncillo was created to give women the feeling to feel dressed even when they are not fully dressed. Our creations were carefully designed to make you feel like you never felt before. Our aim was always to enhance the beauty of women and give them the utmost tool to feel comfortable while revealing their bodies. While working with the finest fabrics, Suncillo thrives to maintain comfort while being sensuous through vibrant colors and unusual cuts.</span></p>
                <p className="my-[10px]">&nbsp;</p>
                <p className="my-[10px]">&nbsp;</p>
                <p className="my-[10px]">&nbsp;</p>
            </div>
        </>
    )
}

export default About