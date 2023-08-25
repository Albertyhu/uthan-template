import './style.css';
import Rating from './rating-component.tsx'
import type { CarouselItemType} from '@/util/interface.tsx'
const Item = (props : CarouselItemType)=>{
const {
    testimonial, 
    name,
    designation,
    rating,
    profile_image
 } = props; 

return (
    <div 
        className="testimonial-block-one relative overflow-hidden h-full carousel-item-shadow mx-auto"
        >
        <div
        className="absolute w-full h-full z-[2] bg-transparent"
        ></div>
        <div 
            className="inner-box relative grid pl-[50px] pt-[45px] pr-[30px] pb-[50px] rounded-lg bg-white h-full"
            >
            <div className="shape absolute" id= "Carousel-shape-8"></div>
            <div className="text relative block mb-[10px]">
                <p>{testimonial}</p>
            </div>
            <Rating 
                rating = {rating}
            />
            <div className="author-box relative flex pl-[65px]">
                <figure className="author-thumb absolute"><img src={profile_image} alt="" /></figure>
                <div>
                    <h5 className="relative block text-lg sm:text-4xl font-medium mb-[2px]">{name}</h5>
                    <span className="designation relative block text-base sm:text-xl mb-[2px]">{designation}</span>
                </div>
            </div>
        </div>
    </div>
)
}

export default Item; 