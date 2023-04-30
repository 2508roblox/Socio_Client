import React, { useState } from 'react'
import { Message } from './Message';
import { ChatRoom } from './ChatRoom';
import { UilFolderOpen } from '@iconscout/react-unicons'
import { UilPhoneAlt } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { MessageHeader } from './MessageHeader';
import { MessageInfo } from './MessageInfo';
import { UilMessage } from '@iconscout/react-unicons'
import { Transition } from '@headlessui/react';
export const Messages = ({ setShowMessage, showMessage }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`absolute  xl:relative grid grid-cols-3   xl:col-span-4 ${showMessage ? 'w-full ' : 'w-0  xl:w-full'}   overflow-hidden left-0 top-0 `}>
            <div className={`${isOpen ? ' col-span-3 xl:col-span-2' : 'col-span-3'} overflow-y-scroll`}>
                <div className=" xl:h-[80vh] bg-bgmlight flex flex-col justify-between dark:bg-bgmdark rounded-xl h-[100vh] xl" >
                    <MessageHeader setShowMessage={setShowMessage} setIsOpen={setIsOpen}></MessageHeader>
                    <div className=" overflow-y-scroll ">
                        <Message ></Message>

                    </div>
                    <div className="p-4">
                        <div className="p-2  flex justify-between px-4 h-full w-full dark:bg-bgdark bg-bglight rounded-md dark:text-gray-200" style={{ minWidth: '10px' }}>
                            <input onClick={() => console.log('fwaef')} style={{ 'borderColor': 'transparent', 'outline': 'none', minWidth: '10px' }} placeholder='Write your comment ' className='bg-transparent py-1  border-none text-sm' type="text" />
                            <div className="  flex  gap-2 items-center">
                                <UilMessage className='text-gray-500'></UilMessage>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <MessageInfo isOpen={isOpen} setIsOpen={setIsOpen}></MessageInfo>


        </div>
    )
}
