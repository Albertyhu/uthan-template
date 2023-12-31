import './style.css'
import Rating from './rating-component.tsx'
import type { CarouselItemType } from '@/util/interface.tsx'
const Item = (props: CarouselItemType) => {
	const { testimonial, name, designation, rating, profile_image } = props

	return (
		<div className="testimonial-block-one carousel-item-shadow relative mx-auto h-full overflow-hidden">
			<div className="absolute z-[2] h-full w-full bg-transparent"></div>
			<div className="inner-box relative grid h-full rounded-lg bg-white pb-[50px] pl-[50px] pr-[30px] pt-[45px]">
				<div className="shape absolute" id="Carousel-shape-8"></div>
				<div className="text relative mb-[10px] block">
					<p>{testimonial}</p>
				</div>
				<Rating rating={rating} />
				<div className="author-box relative flex pl-[65px]">
					<figure className="author-thumb absolute">
						<img src={profile_image} alt="" />
					</figure>
					<div>
						<h5 className="relative mb-[2px] block text-lg font-medium sm:text-4xl">{name}</h5>
						<span className="designation relative mb-[2px] block text-base sm:text-xl">
							{designation}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Item
