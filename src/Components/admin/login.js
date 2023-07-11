import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        pass: '',
    })
    const LoginValueHandler = (e) => {
        let { name, value } = e.target
        setUser({
            ...user, [name]: value
        })
    }
    const UserLoginHandler = async (e) => {
        e.preventDefault()

        const response = await axios.post('http://localhost:8080/api/v1/admin/login', user)
        alert(response.data.message)
        if (response.data.user) {

            if (Boolean(response.data.user.isAdmin)) {
                localStorage.setItem('admin', JSON.stringify(response.data.user))
            }
        }
    }
    return (
        <>
            <div className="register flex items-center justify-center h-screen flex-col">
                <h1 className='text-3xl my-8'>LOGIN</h1>
                <div className='w-3/12 '>
                    <form className='w-full' onSubmit={UserLoginHandler}>

                        <div className='my-6'>
                            <label className='text-xs' htmlFor="fname">EMAIL</label><br />
                            <input onChange={LoginValueHandler} name='email' value={user.email} className='border w-full rounded-0 py-1 px-2' type="text" />
                        </div>
                        <div className='my-6'>
                            <label className='text-xs' htmlFor="fname">PASSWORD</label><br />
                            <input onChange={LoginValueHandler} name='pass' value={user.pass} className='border w-full rounded-0 py-1 px-2' type="text" />
                        </div>

                        <div className='my-6'>
                            <input type="submit" className='bg-black text-white w-full py-1' value="LOGIN" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
