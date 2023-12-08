import React from 'react'
import img2 from "../assets/moptro logo.png"
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
    return (
        <div className='dashboard-parent-container'>

            <div className="dashboard-logo">
                <img src={img2} alt="" />
            </div>

            <div className="dashboard-main-container">
                <div className="header">
                    <h1>Employee Productivity Dashboard</h1>
                </div>
                <div className="productivity-range">

{
    arr.map((e,i)=>{
        return  <div key={i} className="productivity-days">
        <div className="day">
            <h2>
                Productivity on {e.day}
            </h2>
            <h3>
                {e.percentage}%
            </h3>
        </div>
        <div className="range">
            <div style={{width:(e.percentage/2)+"%"}}>

            </div>
        </div>


    </div>
    })
}

                </div>

            </div>
        </div>
    )
}

export default Dashboard