import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { carouselData } from './CarouselData';


const Carousel = () => {

    const items = carouselData.map((item) => <img className='cursor-pointer' role="presentation" src={item.image} />);
    
    return (
        <div className="pt-[65px] h-[100vh] mainSlider">
            <AliceCarousel items={items} disableDotsControls autoPlay disableButtonsControls autoPlayInterval={2000} infinite />
        </div>
    );
}

export default Carousel;