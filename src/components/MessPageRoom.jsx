import React from 'react'

export const MessPageRoom = () => {
    return (
        <div className='col-span-1'>

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
                        <h1 className='text-[.8rem] dark:text-gray-300'>Pin Chat</h1>
                        <div className="pinChat">
                            <ChatRoom></ChatRoom>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='text-[.8rem] dark:text-gray-300'>Group & Channel</h1>
                        <div className="pinChat">
                            <ChatRoom></ChatRoom>
                        </div>
                    </div>
                    <div className="">
                        <h1 className='text-[.8rem] dark:text-gray-300'>All Message</h1>
                        <div className="pinChat">
                            <MessageChatRoom></MessageChatRoom>
                            <MessageChatRoom></MessageChatRoom>
                            <MessageChatRoom></MessageChatRoom>
                            <MessageChatRoom></MessageChatRoom>
                            <MessageChatRoom></MessageChatRoom>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
