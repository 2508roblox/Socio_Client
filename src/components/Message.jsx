import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import dfAvatar from '../assets/img/defaultAvatar.png';
import moment from 'moment'

export const Message = ({ messagesData, messagesEndRef }) => {
    const AuthData = useSelector(state => state.AuthReducer.user)
    const onlineUser = useSelector(state => state.OnlineUserReducer.onlineUser)



    return (

        <>
            {messagesData &&
                <div ref={messagesEndRef} className='messages  p-4 col-span-2'>

                    {messagesData?.map(mess => {
                        { console.log('checkMess', mess) }

                        return (
                            AuthData?._id === mess?.userid ?
                                <div key={mess?._id} className="chat chat-end">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={AuthData?.avatar || dfAvatar} />
                                            {onlineUser?.findIndex(user => user.userId === mess?.userid) !== -1 ?
                                                <div className="dot w-[9px] bottom-1 right-0 rounded-full first-line: bg-green-500 absolute h-[9px]"></div>
                                                :
                                                <div className="dot w-[9px] bottom-1 right-0 rounded-full    bg-red-600 absolute h-[9px]"></div>
                                            }
                                        </div>
                                    </div>
                                    <div className="chat-header">

                                        <time className="text-xs opacity-50">{moment(mess.createdAt).fromNow() === 'a few seconds ago' ? 'just now' : moment(mess.createdAt).fromNow()}</time>
                                    </div>
                                    <div className="chat-bubble">{mess.content}</div>
                                    <div className="chat-footer opacity-50">

                                    </div>
                                </div>
                                :
                                <div key={mess?._id} className="chat chat-start">
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={mess?.avatar?.length > 20 ? mess?.avatar : dfAvatar} />
                                            {onlineUser?.findIndex(user => user.userId === mess?.userid) !== -1 ?
                                                <div className="dot w-[9px] bottom-1 right-0 rounded-full first-line: bg-green-500 absolute h-[9px]"></div>
                                                :
                                                <div className="dot w-[9px] bottom-1 right-0 rounded-full    bg-red-600 absolute h-[9px]"></div>
                                            }
                                        </div>
                                    </div>
                                    <div className="chat-header">

                                        <time className=" opacity-50"> {mess.firstname}</time>
                                    </div>
                                    <div className="chat-bubble">{mess.content}</div>
                                    <div className="chat-footer opacity-50 capitalize text-xs">
                                        {moment(mess.createdAt).fromNow() === 'a few seconds ago' ? 'just now' : moment(mess.createdAt).fromNow()}
                                    </div>
                                </div>

                        )
                    })}
                </div>
            }
        </>









    )
}

// {
//     messagesData && messagesData.map(mess => {
//         AuthData?._id === mess?.userid ?




//             :

//     })


// }