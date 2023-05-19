import React, { useEffect, useState } from 'react'
import { UilFolderOpen } from '@iconscout/react-unicons'
import { UilPhoneAlt } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { UilArrowLeft } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux'
import axios from 'axios'
import dfAvatar from '../assets/img/defaultAvatar.png';

export const MessageHeader = ({ setIsOpen, setShowMessage }) => {
    const Conversation = useSelector(state => state.Conversation.conversationData)
    const AuthData = useSelector(state => state.AuthReducer.user)
    const onlineUser = useSelector(state => state.OnlineUserReducer.onlineUser)

    const [userData, setUserData] = useState(null)
    useEffect(() => {
        const GetUserInfo = async () => {
            if (Conversation?.type === 'groupChat') {

                setUserData(prev => Conversation)
            } else {
                let Members = Conversation.participants
                let otherId = Members.filter(e => e !== AuthData?._id)
                console.log(otherId)
                let res = await axios.get(`https://beta-server-8uoh.onrender.com/api/v1/users/${otherId}`)
                let data = await res.data
                setUserData(data)
            }

        }
        GetUserInfo()
    }, [])
    return (
        <>
            {userData

                &&

                <div className="border-b-2 dark:border-bgdark">
                    <div className="p-4 roomInfo z-50  flex justify-between items-center w-full  relative">
                        <div className="leftSide flex gap-2 items-center">
                            <UilArrowLeft onClick={() => { setShowMessage(false) }} className='w-[5rem] h-[2rem] block  xl:hidden'></UilArrowLeft>
                            <div className="">
                                <div className="relative">
                                    <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src={userData?.avatar || dfAvatar} alt="" />

                                    <div className="dot w-[9px] bottom-1 right-0 rounded-full first-line: bg-green-500 absolute h-[9px]"></div>


                                </div>
                            </div>
                            <div className="w-full flex justify-between text-left">
                                <div className="">
                                    <h1 className='text-[1rem] dark:text-gray-400'>{userData?.name || (userData?.firstname + " " + userData?.lastname)}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="icon flex gap-2 text-black dark:text-gray-400">
                            <UilPhoneAlt></UilPhoneAlt>
                            <UilFolderOpen
                                onClick={() => {
                                    setIsOpen(prev => !prev)
                                }}
                            ></UilFolderOpen>
                            <UilEllipsisV></UilEllipsisV>
                        </div>
                    </div>
                </div>
            }
        </>


    )
}
