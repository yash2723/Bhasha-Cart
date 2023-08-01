import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { Button } from '@mui/material';

const HomeSectionCarousel = ({ data, sectionName }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1.2 },
        450: { items: 1.5 },
        600: { items: 2 },
        720: { items: 2.4 },
        850: { items: 3 },
        1024: { items: 3.5 },
        1200: { items: 4 },
        1400: { items: 5.5 }
    }

    const slidePrev = () => setActiveIndex(activeIndex-1);
    const slideNext = () => setActiveIndex(activeIndex+1);

    const syncActiveIndex = ({item}) => setActiveIndex(item);

    const items = data.map((item) => <HomeSectionCard product={item} />)

    return (
        <div className="">
            <h3 className="text-3xl text-grey-800 mx-10 py-2 border-b-2 border-grey-50">{sectionName}</h3>
            <div className="relative p-5">
                <AliceCarousel 
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                
                {
                    activeIndex !== items.length-5 &&
                    <Button variant="contained" className="z-50 bg-white" sx={{position:"absolute", top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor: "white"}} onClick={slideNext} aria-label="next">
                        <KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)", color: "black"}} />
                    </Button>
                }

                {
                    activeIndex !== 0 &&
                    <Button variant="contained" className="z-50 bg-white" sx={{position:"absolute", top:"8rem", left:"0rem", transform:"translateX(-50%) rotate(-90deg)", bgcolor: "white"}} onClick={slidePrev} aria-label="next">
                        <KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)", color: "black"}} />
                    </Button>
                }
            </div>
        </div>
    )

}

export default HomeSectionCarousel