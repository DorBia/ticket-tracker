import { useState } from "react"
import "./AddNewEmployee.scss"

const AddNewEmployee = ({addEmployee, setIsActive}) => {
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
        setIsActive(false)
    }

  return (
    <div className="add-new">
        <form className="add-new__form" onSubmit={handleSubmit}>
            <p className="add-new__close" onClick={() => setIsActive(false)}>x</p>
            <label>
                <span>Employee Name</span>
                <input type="text" required onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                <span>Employee Role</span>
                <input type="text" required onChange={(e) => setRole(e.target.value)}/>
            </label>
            <button className="add-new__submit">Submit</button>
        </form>
    </div>
  )
}

export default AddNewEmployee