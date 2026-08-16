import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage } from './Utils/LocalStorage'


const App = () => {
  
  useEffect(() => {
    setLocalStorage()
  },)
  

  return (
    <div>
      <>
      <Login/>
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
      </>
    </div>
  )
}

export default App