import { useState } from "react";
import "./Counter.scss"

const Counter = ({id}) => {
    const [count, setCount] = useState(0);
    const handleAdd = () => setCount((current) => current + 1)

    const handleRemove = () => count === 0 ? void(0) : setCount((current) => current - 1)

  return (
    <div className="counter" key={id}>
        <button className="adjust-button" onClick={() => handleRemove()}>-</button>
        <p className="counter__number">{count}</p>
        <button className="adjust-button" onClick={() => handleAdd()}>+</button>
        {/* <h4>Counter</h4> */}
    </div>
  )
}

export default Counter;