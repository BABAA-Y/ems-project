import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'


const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password)=>{
    if (email == 'admin@me.com' && password == 123) {
      
    }
  }
  

  return (
    <div>
      <>
      {
        !user ? <Login /> : ''
      }
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
      </>
    </div>
  )
}

export default App