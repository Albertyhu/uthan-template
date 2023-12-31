import { useStore } from '@nanostores/react'
import { SelectedCategory, AllCategories } from '@/util/atomItems.js'
import uuid from 'react-uuid'

type SelectorType = {}
const Selector = (props: SelectorType) => {
	const $AllCategories = useStore(AllCategories)
	// const categories : Array<string> = [...new Set(ProjectData.projects.map(project => project.category))];
	// categories.unshift("all")

	return (
		<div className="md:mt-[16px]">
			<ul className="filter-tabs filter-btns md:float-right md:mt-[16px]">
				{$AllCategories &&
					$AllCategories.length > 0 &&
					$AllCategories.map((item, index) => <CategoryLink category={item} key={uuid()} />)}
			</ul>
		</div>
	)
}

type LinkType = {
	category: string
}

const CategoryLink = (props: LinkType) => {
	const { category } = props
	const $SelectedCategory = useStore(SelectedCategory)
	const ClickEvent = ({ category }: { category: string }) => {
		if ($SelectedCategory !== category) {
			SelectedCategory.set(category)
		}
	}
	return (
		<li
			className={`filter ${$SelectedCategory == category ? 'active' : ''}`}
			onClick={() => {
				ClickEvent({ category })
			}}
		>
			{category}
		</li>
	)
}

export default Selector
