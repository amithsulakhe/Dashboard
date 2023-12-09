import React from 'react'
import img2 from "../assets/moptro logo.png"
import Buttons from './Buttons'
import img3 from "../assets/Group 46@2x.png"
import { useNavigate } from 'react-router-dom'
const arr = [{
    day: "Monday",
    percentage: "4"
},
{
    day: "Tuesday",
    percentage: "92"
}
    ,
{
    day: "Wednesday",
    percentage: "122"
}
    ,
{
    day: "Thursday",
    percentage: "93"
},
{
    day: "Friday",
    percentage: "89"
}
    ,
{
    day: "Saturday",
    percentage: "98"
}

]
const Dashboard = () => {
    const navigate=useNavigate()
    const handleSignOut=()=>{
        navigate("/")
    }
    return (
        <div className='dashboard-parent-container'>
            <div className="contact" style={{cursor:"pointer"}} onClick={handleSignOut}>
                <img src={img3} alt="" width="40" height="40" />
            </div>
            <div className="dashboard-logo">
                <div>
                    <img src={img2} alt="" />

                </div>
                <div className='total'>
                    {arr.length}
                </div>
            </div>

            <div className="dashboard-main-container">
                <div className="header">
                    <h1>Employee Productivity Dashboard</h1>
                </div>
                <div className="productivity-range">

                    {
                        arr.map((e, i) => {
                            return <div key={i} className="productivity-days">
                                <div className="day">
                                    <h2>
                                        Productivity on {e.day}
                                    </h2>
                                    <h3>
                                        {e.percentage}%
                                    </h3>
                                </div>
                                <div className="range">
                                    <div style={{ width: (e.percentage / 2) + "%" }}>

                                    </div>
                                </div>


                            </div>
                        })
                    }

                </div>

            </div>

            <Buttons />
        </div>
    )
}

export default Dashboard