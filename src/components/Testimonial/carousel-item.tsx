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

const handleDragLeave = (event : MouseEvent) => {
  if(event.stopPropogation) 
    event.stopPropogation()
  event.preventDefault()
  console.log("onDragLeave")
  // Bring the endzone back to normal, maybe?

};
const handleDragOver = event => {
  if(event.stopPropogation) 
    event.stopPropogation()
  event.preventDefault()
  console.log("onDragOver")
  // Turn the endzone red, perhaps?
};
const handleDragEnter = event => {
  if(event.stopPropogation) 
    event.stopPropogation()
  event.preventDefault()
  console.log("DragEnter")
  // Play a little sound, possibly?
};
const handleDrop = event => {
  if(event.stopPropogation) 
    event.stopPropogation()
  event.preventDefault()
  // Add a football image to the endzone, initiate a file upload,
  // steal the user's credit card
  console.log("onDrop")
};

return (
    <div 
        className="testimonial-block-one relative overflow-hidden h-full carousel-item-shadow mx-auto"
        >
        <div
        className="absolute w-full h-full z-[2] bg-transparent"
        onDragOver={handleDragOver} 
        onDragEnter={handleDragEnter} 
        onDragLeave={handleDragLeave} 
        onDrop={handleDrop} 
        ></div>
        <div 
            className="inner-box relative grid pl-[50px] pt-[45px] pr-[30px] pb-[50px] rounded-lg bg-white h-full"
            >
            <div className="shape absolute" style="background-image: url(../src/assets/images/shape/shape-8.png);"></div>
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