import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import car1 from "../assets/dd.jpg"
import car2 from "../assets/car2.jpg"
import car3 from "../assets/ff.jpg"
const Slidee = ()=> {
    const proprietes ={
        duration:1000,
        transitionDuration:500,
        infinite:true,
        indicators:true,
        arrows:true
    }
    return (
        <div className="slide-container">
            <Slide {...proprietes}>
                <div className="each-slide " >
                <div>
                <img src={car1} alt="slide1" />
                </div>
            </div>
                <div className="each-slide">
                    <div>
                        <img src={car2} alt="slide2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={car3} alt="slide3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}
export default Slidee;