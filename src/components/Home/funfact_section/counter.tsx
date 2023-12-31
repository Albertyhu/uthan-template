import CountUp from 'react-countup'
type CounterType = {
	number: number
	delay?: number
}

export default function CounterComponent(props: CounterType) {
	return (
		<div className="count-outer relative block text-4xl text-[70px] leading-none text-white">
			<CountUp end={props.number} />
		</div>
	)
}
