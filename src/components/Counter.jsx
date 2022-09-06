import { useState } from "react";
import "./Counter.scss"

const Counter = ({id}) => {
    const [count, setCount] = useState(0);
    const handleAdd = () => setCount((current) => current + 1)

    const handleRemove = () => count === 0 ? void(0) : setCount((current) => current - 1)

  return (
    <div className="counter" key={id}>
        <h4>Counter</h4>
        <p>{count}</p>
        <button className="adjust-button" onClick={() => handleRemove()}>-</button>
        <button className="adjust-button" onClick={() => handleAdd()}>+</button>
    </div>
  )
}

export default Counter;