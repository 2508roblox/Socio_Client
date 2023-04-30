import React from 'react'
import { useSelector } from 'react-redux';
export const ChatRoom = ({ setIsOpenChatModal }) => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    return (
        <div className={`${isDarkMode ? 'dark' : ''}   `}>
            <div onClick={() => {
                setIsOpenChatModal(true)
            }} className="flex cursor-pointer items-center gap-2 dark:text-white text-black hover:shadow-2xl p-1 rounded-lg">
                <div className="relative">
                    <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <div className="statusDot p-1 right-[.1rem] bottom-[.2rem] absolute rounded-full bg-greenyellow">

                    </div>
                </div>
                <div className="w-full flex justify-between text-left">
                    <div className="">
                        <h1 className='text-[.8rem]'>Sovanna Nguyen</h1>
                        <p className='text-gray-400 text-[.7rem] '>I will purchase it for sure.</p>
                    </div>
                    <p className=' text-[.4rem] text-gray-400'>Today, 10:00am</p>
                </div>
            </div>
        </div>
    )
}
