import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password)=>{
    if (email == 'admin@example.com' && password == 123) {
      console.log("this is admin");
      setUser('admin')
    }
    else if(email == 'user@example.com',password == 123){
      console.log("this is user");
      setUser('employee')
    }
    else {
      alert("invalid")
    }
  }
  
  const data = useContext(AuthContext)
  console.log(data);
  

  return (
    <div>
      
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : ''}
      {user == 'employee' ? <EmployeeDashboard /> : ''}
    </div>
  )
}

export default App