import React from 'react'
import { useDispatch } from 'react-redux'
import dfAvatar from '../assets/img/defaultAvatar.png';

export const GroupChatRoom = ({ setShowMessage, conversation }) => {
    //config
    const dispatch = useDispatch()
    //fetch conversation
    const handleToggleConversation = async () => {
        setShowMessage(false)

        await dispatch({ type: 'CONVERSATION_DATA', payload: { ...conversation, type: 'groupChat' } })
        setShowMessage(true)
    }
    // useEffect(() => {

    //     const GetUserInfo = async () => {
    //         let Members = conversation.participants
    //         let otherId = Members.filter(e => e !== AuthData?._id)
    //         console.log(otherId, 'check')
    //         let res = await axios.get(`https://beta-server-8uoh.onrender.com/api/v1/users/${otherId}`)
    //         let data = await res.data
    //         setUserData(data)

    //     }
    //     GetUserInfo()
    // }, [])
    return (
        <div onClick={() => { handleToggleConversation() }} className="flex cursor-pointer items-center gap-2 dark:text-white text-black hover:shadow-2xl p-1 rounded-lg">
            <div className="relative">
                <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src={conversation?.avatar || dfAvatar} alt="" />

            </div>
            <div className="w-full flex justify-between text-left">
                <div onClick={() => { setShowMessage(true) }} className="">
                    <h1 className='capitalize text-[.8rem]'>{conversation?.name}</h1>

                </div>
                <p className=' text-[.4rem] text-gray-400'>Today, 10:00am</p>
            </div>
        </div>
    )
}
