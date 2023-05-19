import React, { useEffect, useState, useRef } from 'react'
import { Message } from './Message';
import { ChatRoom } from './ChatRoom';
import { UilFolderOpen } from '@iconscout/react-unicons'
import { UilPhoneAlt } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { MessageHeader } from './MessageHeader';
import { MessageInfo } from './MessageInfo';
import { UilMessage } from '@iconscout/react-unicons'
import { Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { socket } from './../socket'

export const Messages = ({ setShowMessage, showMessage }) => {
    const [isOpen, setIsOpen] = useState(false)
    // all message by fetching
    const [messagesData, setMessagesData] = useState([])
    //input new mess
    const [messContent, setMessContent] = useState('')

    const Conversation = useSelector(state => state.Conversation.conversationData)
    const AuthData = useSelector(state => state.AuthReducer.user)
    const messagesEndRef = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
    const AddMessage = async (content, e) => {
        e.preventDefault()
        setMessContent('')
        let bodyReq = {
            userid: AuthData?._id,
            conversationid: Conversation?._id,
            avatar: AuthData?.avatar,
            firstname: AuthData?.firstname,
            content: content
        }
        console.log('zcxv', bodyReq)
        //send mess socket
        if (!Conversation?.type === 'groupChat') {
            let Members = Conversation?.participants
            let otherId = Members.filter(e => e !== AuthData?._id)
            socket.emit('sendMess', { ...bodyReq, receiverId: otherId[0] })
        } else {
            socket.emit('sendMess', { ...bodyReq })

        }
        setMessagesData(prev => [...prev, bodyReq])
        await axios.post(`https://beta-server-8uoh.onrender.com/api/v1/messages/create`, bodyReq)



    }
    // receiver socket emit two users
    useEffect(() => {
        const handleNewMessage = (dataNew) => {
            setMessagesData(prev => [...prev, dataNew])
            console.log('new message:', dataNew);
        };
        socket.on('receiverMess', handleNewMessage);

        return () => {
            socket.off('receiverMess', handleNewMessage);
        };
    }, [socket]);
    useEffect(() => {
        const GetAllMessages = async () => {
            let Messages = await axios.get(`https://beta-server-8uoh.onrender.com/api/v1/messages/${Conversation?._id}/allMessages`)
            Messages = await Messages.data
            setMessagesData(Messages)
        }
        GetAllMessages()
        return () => {
            console.log('optimized')
        }
    }, [])
    useEffect(() => {
        scrollToBottom();
    }, [messagesData]);
    return (
        <>

            <div className={`absolute  xl:relative grid grid-cols-3   xl:col-span-3 w-full    overflow-hidden left-0 top-0 `}>
                <div className={`${isOpen ? ' col-span-3 xl:col-span-3' : 'col-span-3'} overflow-y-scroll`}>
                    <div className=" xl:h-[80vh] bg-bgmlight flex flex-col justify-between dark:bg-bgmdark rounded-xl h-[100vh] xl" >
                        <MessageHeader setShowMessage={setShowMessage} setIsOpen={setIsOpen}></MessageHeader>
                        <div style={{ minHeight: '300px' }} className=" overflow-y-scroll transition-all ease-linear ">
                            {messagesData &&
                                <>
                                    <Message messagesEndRef={messagesEndRef} messagesData={messagesData} ></Message>
                                    <div ref={messagesEndRef} />
                                </>
                            }

                        </div>
                        <div className="p-4">
                            <div className="p-2  flex justify-between px-4 h-full w-full dark:bg-bgdark bg-bglight rounded-md dark:text-gray-200" style={{ minWidth: '10px' }}>

                                <form
                                    className='  flex justify-between px-4 h-full w-full dark:bg-bgdark bg-bglight rounded-md dark:text-gray-200'
                                    onSubmit={(e) => AddMessage(e.target.content.value, e)}>
                                    <input style={{ 'borderColor': 'transparent', 'outline': 'none', minWidth: '10px' }}
                                        onChange={(e) => setMessContent(e.target.value)}
                                        value={messContent}
                                        name='content' placeholder='Write your comment ' className='bg-transparent py-1  border-none text-sm' type="text" />
                                    <div className="  flex  gap-2 items-center">
                                        <button type='submit'>
                                            <UilMessage className='text-gray-500'></UilMessage>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

                <MessageInfo isOpen={isOpen} setIsOpen={setIsOpen}></MessageInfo>


            </div>


        </>

    )
}
