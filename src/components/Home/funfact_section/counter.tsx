import CountUp from 'react-countup'

type CounterType = {
	number: number
	delay?: number
}

const CounterComponent = (props: CounterType) => {
	console.log("props.number: ", props.number)
	return props.number ? 
		<div className="count-outer relative block text-4xl text-[70px] leading-none text-white">
			{/* <CountUp end={props.number} /> */}
		</div>
		:
		<div>
		</div>
}

export default CounterComponent; 