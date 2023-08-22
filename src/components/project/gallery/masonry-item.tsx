import './gallery.css'
import { motion, AnimatePresence } from 'framer-motion'
type ProjectType = {
	image: string | HTMLImageElement
	altText: string
	name: string
	category: string
}
const MasonaryItem = (props: ProjectType) => {
	const { image, altText = '', name = '', category = '' } = props
	return (
		<motion.div class="masonry-item small-column all product urban maintanance">
			<div class="project-block-one">
				<div class="inner-block item-center relative mb-8 block">
					<figure class="image-box relative block rounded-md">
						<img src={image} alt={altText} />
					</figure>
					<div class="content-box absolute flex text-center transition duration-300">
						<div class="inner relative">
							<div class="icon-box relative mb-5 inline-block rounded-lg bg-white text-3xl transition-all duration-300">
								<i class="icon-10"></i>
							</div>
							<h3 class="mb-3 block text-lg font-medium text-white transition duration-300">
								<a href="project-details.html" class="inline-block text-white">
									{name.toUpperCase()}
								</a>
							</h3>
							<span class="relative block text-white transition duration-300">{category}</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
export default MasonaryItem
