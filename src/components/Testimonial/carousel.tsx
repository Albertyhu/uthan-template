import type { CarouselItemType } from '@/util/interface'
import CarouselItem from './carousel-item.tsx'
type PropsType = {
	testimonials: Array<CarouselItemType>
}
const Carousel = (props: PropsType) => {
	const { testimonials } = props
	return (
		<div class="carousel-grid xm:grid-cols-[repeat(auto-fill,300px)] mx-auto grid grid-cols-[repeat(auto-fill,250px)] gap-10 sm:grid-cols-[repeat(auto-fill,350px)]">
			{testimonials &&
				testimonials.length > 0 &&
				testimonials.map((testimonial) => <CarouselItem {...testimonial} />)}
		</div>
	)
}
export default Carousel
