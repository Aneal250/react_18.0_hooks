import React, { useState } from 'react'

const Counter = () => {

    const initialState = 0

    const [count, setCount] = useState(initialState);


  return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment +</button>
			<button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement -</button>
		</div>
	);
}

export default Counter