import uuid from 'react-uuid'

type RatingType = {
	rating: 1 | 2 | 3 | 4 | 5
}

//rating can only be a range of 1 - 5

const RenderRating = (props: RatingType) => {
	const { rating } = props
	const renderRating = []
	for (var i = 0; i < Math.round(rating); i++) {
		renderRating.push(i)
	}
	return (
		<ul className="rating relative mb-[20px] block">
			{renderRating &&
				renderRating.length > 0 &&
				renderRating.map((star) => (
					<li className="relative float-left mr-[4px] inline-block text-2xl" key={uuid()}>
						<i className="icon-25"></i>
					</li>
				))}
		</ul>
	)
}

export default RenderRating
