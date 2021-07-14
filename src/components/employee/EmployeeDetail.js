import React, { useEffect, useContext, useState } from 'react'
import { EmployeeContext } from './EmployeeProvider'
import './Employees.css'
import { useParams, useHistory } from 'react-router-dom'

export const EmployeeDetail = () => {
    const {getEmployeeById, releaseEmployee} = useContext(EmployeeContext)

        const[employee, setEmployee] = useState({})

        const {employeeId} = useParams()
        const history = useHistory()

    useEffect(() => {
        console.log("useEffect", employeeId)
        getEmployeeById(employeeId)
        .then((response) => {
            setEmployee(response)
        })
    }, [])

    const handleRelease = () => {
        releaseEmployee(employee.id)
        .then(() => {
            history.push("/employees")
        })
    }
    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location?.name}</div>
            <button onClick={handleRelease}>Fire Employee</button>
            <button onClick={() => {
                history.push(`/employees/edit/${employee.id}`)
            }}>Edit</button>
        </section>
    )
}