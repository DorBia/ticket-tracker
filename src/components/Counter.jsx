import "./Counter.scss"

const Counter = ({id}) => {

  return (
    <div className="counter" key={id}>
        <h4>Counter</h4>
        <p>0</p>
        <button>-</button>
        <button>+</button>
    </div>
  )
}

export default Counter;