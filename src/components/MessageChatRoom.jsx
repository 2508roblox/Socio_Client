import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dfAvatar from '../assets/img/defaultAvatar.png';

export const MessageChatRoom = ({ setShowMessage, conversation }) => {
    const dispatch = useDispatch()
    // redux
    const AuthData = useSelector(state => state.AuthReducer.user)
    const onlineUser = useSelector(state => state.OnlineUserReducer.onlineUser)

    const [userData, setUserData] = useState(null)
    const handleToggleConversation = async () => {
        setShowMessage(false)

        await dispatch({ type: 'CONVERSATION_DATA', payload: conversation })
        setShowMessage(true)
    }
    useEffect(() => {

        const GetUserInfo = async () => {
            let Members = conversation.participants
            let otherId = Members.filter(e => e !== AuthData?._id)
            console.log(otherId, 'check')
            let res = await axios.get(`https://beta-server-8uoh.onrender.com/api/v1/users/${otherId}`)
            let data = await res.data
            setUserData(data)

        }
        GetUserInfo()
    }, [])

    return (
        <>
            {userData &&

                <div onClick={() => { handleToggleConversation() }} className="flex cursor-pointer items-center gap-2 dark:text-white text-black hover:shadow-2xl p-1 rounded-lg">
                    <div className="relative">
                        <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src={userData?.avatar || dfAvatar} alt="" />
                        {onlineUser?.findIndex(user => user.userId === userData?._id) !== -1 ?
                            <div className="dot w-[9px] bottom-1 right-0 rounded-full first-line: bg-green-500 absolute h-[9px]"></div>
                            :
                            <div className="dot w-[9px] bottom-1 right-0 rounded-full    bg-red-600 absolute h-[9px]"></div>
                        }
                    </div>
                    <div className="w-full flex justify-between text-left">
                        <div onClick={() => { setShowMessage(true) }} className="">
                            <h1 className='capitalize text-[.8rem]'>{userData?.firstname + " " + userData?.lastname}</h1>

                        </div>
                        <p className=' text-[.4rem] text-gray-400'>Today, 10:00am</p>
                    </div>
                </div>
            }
        </>

    )
}
