import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <Carousel>
            <div>
               <img src="/Values.png" alt="Image 1"/>
               {/* <p className="legend">Rotana Hotel</p> */}
            </div>
            <div>
               <img src="/Values (2).png" alt="Image 2"/>
               {/* <p className="legend">Ministry of public works</p> */}
            </div>
            <div>
               <img src="/Values4.png" alt="Image 3"/>
               {/* <p className="legend">Ministry of Interior</p> */}
            </div>
        </Carousel>
    );
}
