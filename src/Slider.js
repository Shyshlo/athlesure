import { useState } from 'react';
import { dataSlide } from './dataSlide';
import right from './right.png';
import left from './left.png';

function Slider() {

    const [slide, setSlide] = useState(0);
    const {id, imageSlide} = dataSlide[slide];

    const leftButton = () => {
        setSlide((slide => {
            slide--;
            if (slide < 0) {
                slide = dataSlide.length - 1;
            }
            return slide;
        }))
    }

    const rightButton = () => {
        setSlide((slide => {
            slide++;
            if (slide > dataSlide.length - 1) {
                slide = 0;
            }
            return slide;
        }))
    }
    
    return (
    <div className='sliderPhone' key={id}>

        <div className = 'container'>
        <img className='slider' src={imageSlide} width = '40%' height ='600px' alt='photo' />

        </div>

<div className="arrow-left">
<img src={left} onClick={leftButton} alt="" />
</div>

<div className="arrow-right">
<img src={right} onClick={rightButton} alt="" />
</div>

    </div>
    )
}

export default Slider;