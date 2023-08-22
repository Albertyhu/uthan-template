import ProjectDemo from '@/demo/projects.json'
import MasonryItem from './masonry-item.tsx'
import { SelectedCategory } from '@/util/atomItems.js'
import { useStore } from '@nanostores/preact'
import { motion, AnimatePresence } from 'framer-motion'
import uuid from 'react-uuid'
type GalleryType = {}

type ProjectType = {
	image: string | HTMLImageElement
	altText: string
	name: string
	category: string
}

const Gallery = (props: GalleryType) => {
	const $SelectedCategory = useStore(SelectedCategory)
	var filteredProjects: Array<ProjectType> = []
	if (ProjectDemo && ProjectDemo.projects && ProjectDemo.projects.length > 0) {
		if ($SelectedCategory.toLowerCase() === 'all') {
			filteredProjects = [...ProjectDemo.projects]
		} else {
			filteredProjects = ProjectDemo.projects.filter(
				(project) => project.category === $SelectedCategory
			)
		}
	}
	return filteredProjects.map((project: ProjectType) => (
		<AnimatePresence>
			<MasonryItem
				image={project.image}
				altText={project.altText}
				name={project.name}
				category={project.category}
				key={uuid()}
			/>
		</AnimatePresence>
	))
}
export default Gallery
