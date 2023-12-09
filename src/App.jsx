
import './App.css'
import Error from "./Components/Error"
import Dashboard from './Components/Dashboard'
import EmployeeList from './Components/EmployeeList'
import LoginPage from './Components/LoginPage'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
const appRouter=createBrowserRouter([

      {
        path:"/",
        element:<LoginPage/>,
        errorElement:<Error/>
      },
      {
        path:"dashboard",
        element:<Dashboard/>,
      },
      {
        path:"home",
        element:<Dashboard/>,
      },
      {
        path:"employee",
        element:<EmployeeList/>,
      },

    
  ])
function App() {


  return (
    <>
       <div className='main-container'>
    <RouterProvider router={appRouter}>
   
     
       {/* <EmployeeList/> */}
     
      </RouterProvider>
      </div>
    </>
  )
}

export default App
