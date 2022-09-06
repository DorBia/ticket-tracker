import { useState } from "react"
import "./AddNewEmployee.scss"

const AddNewEmployee = ({addEmployee, changeState}) => {
    const [name, setName] = useState("")
    const [role, setRole] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const employee = {
            name: name,
            role: role,
            id: Math.floor(Math.random() * 10000)
        }
        addEmployee(employee)
        changeState(false)
    }

  return (
    <div className="add-new-container">
        <form className="new-employee-form" onSubmit={handleSubmit}>
            <p className="close" onClick={() => changeState(false)}>x</p>
            <label>
                <span>Employee Name</span>
                <input type="text" required onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                <span>Employee Role</span>
                <input type="text" required onChange={(e) => setRole(e.target.value)}/>
            </label>
            <section>
                <button>Submit</button>
            </section>
        </form>
    </div>
  )
}

export default AddNewEmployee