import React, { useEffect, useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { MessageChatRoom } from './MessageChatRoom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { GroupChatRoom } from './GroupChatRoom';

export const MessageRoom = ({ setShowMessage }) => {
    const AuthData = useSelector(state => state.AuthReducer.user)

    const [conversationData, setConversationData] = useState(null) // private
    const [groupConversation, setGroupConversation] = useState(null) //public
    useEffect(() => {
        const getAllConversation = async () => {
            let Conversations = await axios.get(`https://beta-server-8uoh.onrender.com/api/v1/conversations/${AuthData?._id}`)
            Conversations = await Conversations.data
            setConversationData(Conversations)
            console.log(Conversations)
        }
        getAllConversation()
        return () => {
            console.log('optimized')
        }
    }, [])
    useEffect(() => {
        const getAllGroupChat = async () => {
            let Conversations = await axios.get(`https://beta-server-8uoh.onrender.com/api/v1/conversations/`)
            Conversations = await Conversations.data
            setGroupConversation(Conversations)
            console.log(Conversations)
        }
        getAllGroupChat()
        return () => {
            console.log('optimized')
        }
    }, [])
    return (
        <div className='col-span-5  xl:col-span-2 overflow-auto'>
            <div className="message dark:bg-bgmdark bg-bgmlight rounded-xl p-4 flex flex-col gap-2">
                <div className="  flex justify-between items-center dark:text-white text-black">
                    <div className="flex gap-2 items-center">
                        <h1>Message</h1>
                        <h1 className='text-gray-500 text-sm'>Contact</h1>
                    </div>
                    <UilEllipsisH></UilEllipsisH>
                </div>
                <div className="  flex gap-1 items-center  dark:text-white text-black w-full dark:bg-fontGray bg-bglight rounded-lg px-2 py-1">
                    <UilSearch width='20px' className='text-gray-400'></UilSearch>
                    <input type="text" className='bg-transparent outline-none h-[20px] text-[16px]' placeholder='Search' />

                </div>

                <div className="flex dark:text-white text-black gap-2 justify-between">
                    <h1 className='text-gray-400 '>CHAT</h1>
                    <p className='dark:text-greenyellow text-blue-500 text-[.8rem] dark:text-gray-300 font-light'>see all</p>
                </div>


                <div className="RoomSection flex flex-col gap-4">

                    <div className="">
                        <h1 className='text-[.8rem] dark:text-gray-300'>All Message</h1>
                        <h1>Groups</h1>
                        {groupConversation && groupConversation.map(data => {
                            return <GroupChatRoom key={data?._id} setShowMessage={setShowMessage} conversation={data}></GroupChatRoom>
                        })}
                        <h1>Friends</h1>
                        <div className="pinChat">
                            {conversationData &&
                                conversationData.map((conversation) => {
                                    return <>
                                        {console.log('render')}
                                        <MessageChatRoom key={conversation._id} setShowMessage={setShowMessage} conversation={conversation}></MessageChatRoom>
                                    </>
                                })

                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
