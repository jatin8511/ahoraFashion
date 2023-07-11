import React, { useContext, useState } from 'react'
import axios from 'axios'
import { MainContext } from '../../Contexts/MainContext'
const Register = () => {
    let {navigate} = useContext(MainContext)
    let [avatar, setAvatar] = useState('https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg')
    const [user, setUser] = useState({
        fname: '',
        lname: '',
        email: '',
        pass: '',
        conpass: '',
        gender: '',
        avatar: ''
    })
    const RegisterValueHandler = (e) => {
        let { name, value } = e.target
        setUser({
            ...user, [name]: value
        })
    }
    const AvatarHandler = (e) => {
        setUser({ ...user, avatar: e.target.files[0] })
        setAvatar(URL.createObjectURL(e.target.files[0]))

    }
    const UserRegisterHandler = async (e) => {
        e.preventDefault()
        const userData = new FormData()
        userData.append('avatar', user.avatar)
        userData.append('fname', user.fname)
        userData.append('lname', user.lname)
        userData.append('email', user.email)
        userData.append('pass', user.pass)
        userData.append('conpass', user.conpass)
        userData.append('gender', user.gender)
        const response = await axios.post('http://localhost:8080/api/v1/register', userData)
        if (response.data.success) {
            alert(response.data.message)
           
            navigate('/login')

        } else {
            alert(response.data.message)
        }
    }
    return (
        <>
            <div className="register flex items-center justify-center h-screen flex-col">
                <h1 className='text-3xl my-8'>CREATE ACCOUNT</h1>
                <div className='w-3/12 '>
                    <form className='w-full' onSubmit={UserRegisterHandler}>
                        <div className="profile">
                            <label className='rounded-full mx-auto cursor-pointer overflow-hidden block h-[70px] w-[70px]' htmlFor="avatar">
                                <img className='scale-[1.5] rounded-full overflow-hidden w-full h-full' src={avatar} alt="" />
                            </label>
                            <input className='hidden' onChange={AvatarHandler} type="file" id='avatar' />
                        </div>
                        <div className='my-6'>
                            <label className='text-xs' htmlFor="fname">FIRST NAME</label><br />
                            <input onChange={RegisterValueHandler} name='fname' value={user.fname} className='border w-full rounded-0 py-1 px-2' type="text" />
                        </div>
                        <div className='my-6'>
                            <label className='text-xs' htmlFor="fname">LAST NAME</label><br />
                            <input onChange={RegisterValueHandler} name='lname' value={user.lname} className='border w-full rounded-0 py-1 px-2' type="text" />
                        </div>
                        <div className='my-6'>
                            <label className='text-xs' htmlFor="fname">EMAIL</label><br />
                            <input onChange={RegisterValueHandler} name='email' value={user.email} className='border w-full rounded-0 py-1 px-2' type="text" />
                        </div>
                        <div className='my-6'>
                            <label className='text-xs' htmlFor="fname">PASSWORD</label><br />
                            <input onChange={RegisterValueHandler} name='pass' value={user.pass} className='border w-full rounded-0 py-1 px-2' type="text" />
                        </div>
                        <div className='my-6'>
                            <label className='text-xs' htmlFor="fname">CONFIRM PASSWORD</label><br />
                            <input onChange={RegisterValueHandler} name='conpass' value={user.conpass} className='border w-full rounded-0 py-1 px-2' type="text" />
                        </div>
                        <div className='my-6 flex justify-between items-center'>
                            <div className='flex gap-2 items-center '>
                                <label className='text-xs' htmlFor="male">MALE</label>
                                <input onChange={RegisterValueHandler} name='gender' value='male' type="radio" id="" />
                            </div>
                            <div className='flex gap-2 items-center '>
                                <label className='text-xs' htmlFor="male">FEMALE</label>
                                <input onChange={RegisterValueHandler} name='gender' value='female' type="radio" id="" />
                            </div>
                            <div className='flex gap-2 items-center '>
                                <label className='text-sm' htmlFor="male">OTHER</label>
                                <input onChange={RegisterValueHandler} name='gender' value='other' type="radio" id="" />
                            </div>
                        </div>
                        <div className='my-6'>
                            <input type="submit" className='bg-black text-white w-full py-1' value="CREATE" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
