import React from 'react'
import {Link} from "react-router-dom"
const Buttons = () => {
    
  return (
<div className="btns">
<Link to="/home">
    <button className="c-btns btn-home">


    <div className='home-btn'>
    <i className="fa-solid fa-house"></i>
    </div>

    </button>
    </Link>
    <Link to="/employee">

<button className="c-btns btn-employee">

    <div className='employee-btn'>
    <i className="fa-solid fa-user"></i>
    </div>


</button>
</Link>


</div>
  )
}

export default Buttons