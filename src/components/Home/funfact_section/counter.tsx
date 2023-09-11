import CountUp from 'react-countup'

type CounterType = {
	number: number
	delay?: number
}

const CountUpComponent = CountUp.default ?? CountUp

const CounterComponent = (props: CounterType) => {
	return props.number ? 
		<div className="count-outer relative block text-4xl text-[70px] leading-none text-white">
			<CountUpComponent end={props.number} /> 
		</div>
		:
		<div>
		</div>
}

export default CounterComponent; 