import React from 'react';
// import { useState } from 'react';
import 'tw-elements';

const Carousel = (props) => {

    let images = props.images;
    // const [border, setborder] = useState('')

    return (
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                {
                    images.map(function(image,i){
                        let aria = '';
                        let activeB = '';
                        if (i === 0) activeB = 'active'; aria = 'true'
                        return (
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className={activeB} aria-current={aria} aria-label={`Slide ${i}`} key={i}></button>
                        )
                    })
                }
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                {
                    images.map(function(image,i){
                        let active = '';
                        if (i === 0) active = 'active'
                        return (
                            <div className={`carousel-item relative ${active} float-left w-full`} key={i}>
                                <img referrerPolicy='no-referrer' src={image.url} className="block w-full" alt="..."/>
                            </div>
                        )
                    })
                }
            </div>
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 !w-[10%]"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
                style={{color:'#000'}}
            >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 !w-[10%]"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;