import './style.css'
import { CarouselPosition, TestimonialSideDirection } from '@/util/atomItems'
import { useStore } from '@nanostores/react'

const CarouselNav = (props: { size: number }) => {
	const { size } = props

	const $CarouselPosition = useStore(CarouselPosition)

	const SlideLeft = () => {
		var nextPosition = $CarouselPosition + 1 < size ? $CarouselPosition + 1 : 0
		CarouselPosition.set(nextPosition)
		TestimonialSideDirection.set('left')
	}
	const SlideRight = () => {
		var nextPosition = $CarouselPosition - 1 > 0 ? $CarouselPosition - 1 : size - 1
		CarouselPosition.set(nextPosition)
		TestimonialSideDirection.set('right')
	}
	return (
		<div id="carousel-nav-buttons" className="bottom-[100px]disabled hidden sm:block">
			<button
				type="button"
				className="owl-prev nav_box_shadow relative mr-[10px] inline-block h-[60px] w-[60px] cursor-pointer rounded-md bg-[#fff] text-center text-[20px] leading-[60px] text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1"
				onClick={SlideRight}
			>
				<span className="far fa-long-arrow-left"></span>
			</button>
			<button
				type="button"
				className="owl-next nav_box_shadow relative inline-block h-[60px] w-[60px] cursor-pointer rounded-md bg-[#fff] text-center text-[20px] leading-[60px] text-[#2f7955] transition-all active:translate-x-1 active:translate-y-1"
				onClick={SlideLeft}
			>
				<span className="far fa-long-arrow-right"></span>
			</button>
		</div>
	)
}
export default CarouselNav
