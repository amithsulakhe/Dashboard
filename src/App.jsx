
import './App.css'
import Dashboard from './Components/Dashboard'
import EmployeeList from './Components/EmployeeList'
import LoginPage from './Components/LoginPage'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
const appRouter=createBrowserRouter([

      {
        path:"/",
        element:<LoginPage/>,
      },
      {
        path:"dashboard",
        element:<Dashboard/>,
      }
    
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
