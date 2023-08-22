import { useState } from 'preact/hooks'
type CounterType = {
	number: number
}
const CounterComponent = (props: CounterType) => {
	const { number } = props
	const [counter, setCounter] = useState<number>(0)
	const SPEED = 300
	let count = 0
	const runCounter = () => {
		setInterval(() => {
			if (count < 90) count++
		}, SPEED)
	}
	runCounter()
	return (
		<div class="count-outer relative block text-4xl text-[70px] leading-none text-white">
			{count}
		</div>
	)
}
export default CounterComponent
