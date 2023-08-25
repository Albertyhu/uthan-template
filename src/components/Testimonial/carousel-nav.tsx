
import "./style.css"
import { CarouselPosition, TestimonialSideDirection } from "@/util/atomItems";
import { useStore } from "@nanostores/react"; 

const CarouselNav = (props : {size : number}) =>{
    const {
        size
    } = props; 

    const $CarouselPosition  = useStore(CarouselPosition); 

    const SlideLeft = () => {
        var nextPosition = $CarouselPosition + 1 < size ? $CarouselPosition + 1 : 0;
        CarouselPosition.set(nextPosition) 
        TestimonialSideDirection.set("left")
    }
    const SlideRight = () =>{
        var nextPosition = $CarouselPosition - 1 > 0 ? $CarouselPosition - 1 : size - 1; 
        CarouselPosition.set(nextPosition) 
        TestimonialSideDirection.set("right")
    }
    return(
        <div
            id="carousel-nav-buttons"
            className="hidden sm:block bottom-[100px]disabled"
            >
            <button 
            type="button" 
            role="presentation" className="owl-prev mr-[10px] relative inline-block w-[60px] h-[60px] leading-[60px] text-[20px] text-center rounded-md bg-[#fff] cursor-pointer nav_box_shadow text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1"
            onClick = {SlideRight}
            >
                <span className="far fa-long-arrow-left"></span>
            </button>
            <button 
            type="button" role="presentation" 
            className="owl-next relative inline-block w-[60px] h-[60px] leading-[60px] text-[20px] text-center rounded-md bg-[#fff] cursor-pointer nav_box_shadow text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1"
            onClick = {SlideLeft}
            >
                <span className="far fa-long-arrow-right"></span>
            </button>
        </div>
    )
}
export default CarouselNav; 