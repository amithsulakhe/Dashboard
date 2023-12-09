import React, { useEffect, useState } from 'react'
import { arr } from "./constants/constant"
import img2 from "../assets/moptro logo.png"
import img3 from "../assets/Group 46@2x.png"

import Buttons from './Buttons'
import { useNavigate } from 'react-router-dom'
const Data = [


  {
    id: 1,
    name: "Arjun",
    dob: "15-01-2000",
    role: "Web developer"
  }
  ,

  {
    id: 2,
    name: "Mahesh",
    dob: "15-01-2000",
    role: "Web developer"
  },
  {
    id: 3,
    name: "Arjun",
    dob: "15-01-2000",
    role: "Web developer"
  }
  ,

  {
    id: 4,
    name: "Mahesh",
    dob: "15-01-2000",
    role: "Web developer"
  }
  ,
  {
    id: 5,
    name: "Arjun",
    dob: "15-01-2000",
    role: "Web developer"
  }
  ,

  {
    id: 6,
    name: "Mahesh",
    dob: "15-01-2000",
    role: "Web developer"
  }
  , {
    id: 7,
    name: "Arjun",
    dob: "15-01-2000",
    role: "Web developer"
  }
  ,

  {
    id: 8,
    name: "Mahesh",
    dob: "15-01-2000",
    role: "Web developer"
  }
,
{
  id: 9,
  name: "Amith",
  dob: "15-01-2000",
  role: "Web developer"
}


]
const EmployeeList = () => {
  const [inputValue, setInputValue] = useState("")
  const [filteredData,setFilteredData]=useState([])
  const navigate=useNavigate()

  useEffect(()=>{
    if(inputValue){
      const filterData=Data.filter((e)=>e.name.includes(inputValue))
      setFilteredData(filterData)
      console.log(filterData);
    }
    else{
      setFilteredData(Data)
    }
  },[inputValue])
  const handleSignOut=()=>{
      navigate("/")
  }
  return (
    <div>
      <div className="employee-container dashboard-parent-container">
        <div className="contact" onClick={handleSignOut} style={{cursor:"pointer"}}>
          <img src={img3} alt="" width="40" height="40" />
        </div>
        <div className="dashboard-logo">
          <div>
            <img src={img2} alt="" />

          </div>
          <div className='total'>
            {filteredData.length}
          </div>
        </div>
        <form className="search-bar">
          <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='Search with name' />
          <button type='submit' className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div className="employee-details">

          {


            filteredData.map((ele, i) => {
              return <div key={ele.id} className="employee-detail">

                <div className='employee-id'>
                  {ele.id}
                </div>
                <div className='about-employee'>
                  <h5 >EMP ID: <span style={{ color: "white" }}>{ele.id}</span> </h5>
                  <h5>Name: <span style={{ color: "white" }}>{ele.name}</span> </h5>
                  <h5>DOB: <span style={{ color: "#86591D" }}>{ele.dob}</span> </h5>
                  <h5>Role: <span style={{ color: "#2B7836" }}>{ele.role}</span> </h5>
                </div>
              </div>
            })
          }


        </div>
        <Buttons />
      </div>
    </div>
  )
}

export default EmployeeList