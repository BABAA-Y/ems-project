import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  const data = getLocalStorage()

  return (
    <div>
        <AuthContext.Provider value={"BABA"}>  
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider