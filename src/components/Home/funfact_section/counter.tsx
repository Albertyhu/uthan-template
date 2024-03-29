import React, { useState, useEffect } from 'react';

type CounterType = {
	number: number
	delay?: number
}

const CountTo100 = (props: CounterType) => {
  const {number} = props; 
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < number) {
        setCount(count + 1);
      }
    }, 20); // 20 milliseconds delay between counts

    return () => clearInterval(interval);
  }, [count]);

  useEffect(()=>{
    return()=>{setCount(0)}
  },[])

  return (
    <div className="count-outer relative block text-4xl text-[35px] sm:text-[70px] leading-none text-white font-['Prata',serif]">
      <span
        className = "text-white"
      >{count}</span>
    </div>
  );
};

export default CountTo100;
