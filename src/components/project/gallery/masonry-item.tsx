import './gallery.css'
import { motion, AnimatePresence } from 'framer-motion'
import type { ProjectType } from '@/util/interface'

const MasonaryItem = (props: ProjectType) => {
	const { 
		image,
		thumbnail,
		altText = '',
		name = '', 
		category = '' 
	} = props

	const urlTitle = (name.toLowerCase()).replace(/\s+/g, '_')
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="masonry-item small-column all product urban maintanance mx-auto"
		>
			<div className="project-block-one">
				<div className="inner-block item-center relative mb-8 block">
					<figure className="image-box relative block rounded-md w-11/12 h-auto mx-auto sm:w-[370px] sm:h-[290px] overflow-hidden">
						<img 
							src={thumbnail.src} 
							alt={altText} 
							className = "object-cover w-full h-full"
							/>
					</figure>
					<div className="content-box absolute flex text-center transition duration-300">
						<div className="inner relative">
							<div className="icon-box relative mb-5 inline-block rounded-lg bg-white text-3xl transition-all duration-300">
								<i className="icon-10"></i>
							</div>
							<h3 className="mb-3 block text-lg font-medium text-white transition duration-300">
								<a href={`./projects/${urlTitle}`} className="inline-block text-white">
									{name.toUpperCase()}
								</a>
							</h3>
							<span className="relative block text-white transition duration-300">{category}</span>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
export default MasonaryItem
