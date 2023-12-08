import React from 'react'
import {arr} from "./constants/constant"
const EmployeeList = () => {
    console.log(arr[0]);
  return (
    <div>
        <div className="employee-container">
            <div className="employee-detail">
                <h1>EMP ID: <span></span> </h1>
                <h1>Name: <span></span> </h1>
                <h1>DOB: <span></span> </h1>
                <h1>Role: <span></span> </h1>
            </div>
        </div>
    </div>
  )
}

export default EmployeeList