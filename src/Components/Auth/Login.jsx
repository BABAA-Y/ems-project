import React, { useState } from 'react'

const Login = ({handleLogin}) => {
        

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className="border-2 border-emerald-600 rounded-xl p-20">
            <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required 
                    className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl  px-4 py-5 placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
                <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required 
                    className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl  px-4 py-5 placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your Password' />
                <button className='text-white outline-none bg-emerald-600 rounded-full text-xl  px-6 py-4 mt-5'>Log in</button>
            </form>
        </div>
    </div>
)
}

export default Login