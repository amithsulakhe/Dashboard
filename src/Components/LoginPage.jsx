import React, { useEffect, useState } from 'react'
import logo from  "../assets/Group 3.png"
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin,setIsLogin]=useState(false)

const handleSubmit=()=>{
const login=true
setIsLogin(login)
navigate("/dashboard")

}
  return (
    <div className='login-page'> 
    <div className="logo-container">
        <img src={logo} alt="logo" width="90" height="90" />
        <span>#We are Electric</span>
    </div>
    <div className="login-container">
        <form action="" className='form-data' onSubmit={(e)=>e.preventDefault()}>
            <input type="email"value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail' required/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='password' required/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <span>Forgot Password?</span>
        </form>
    </div>
    </div>
  )
}

export default LoginPage