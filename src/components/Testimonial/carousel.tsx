import type { CarouselItemType } from "@/util/interface";
import CarouselItem from './carousel-item.tsx'; 
import uuid from 'react-uuid'; 

type PropsType = {
    testimonials: Array<CarouselItemType>, 
}
const Carousel = (props : PropsType) =>{
    const {
        testimonials
    } = props; 
    return(
    <div className="carousel-grid grid gap-10 grid-cols-[repeat(auto-fill,250px)] xm:grid-cols-[repeat(auto-fill,300px)] sm:grid-cols-[repeat(auto-fill,350px)] mx-auto">
        {testimonials && testimonials.length > 0 && 
            testimonials.map(testimonial => <CarouselItem {...testimonial} key = {uuid()} />)
        }
    </div>
    )
}
export default Carousel; 