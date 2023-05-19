import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
// import { ChatRoom } from './ChatRoom';
import { UilSearch } from '@iconscout/react-unicons'
import { UilEllipsisH } from '@iconscout/react-unicons'
// import { HomeChat } from './../modals/HomeChat';
import { useSelector } from 'react-redux';
import ava1 from '../assets/img/avatar1.avif'
import ava2 from '../assets/img/avatar2.avif'
import ava4 from '../assets/img/avatar4.avif'
export const ConversationPrv = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    const [isOpenChatModal, setIsOpenChatModal] = useState(false)
    return (
        <div className={`${isDarkMode ? 'dark' : ''}   `}>
            <div className="         message dark:bg-bgmdark bg-bgmlight rounded-xl p-4 flex flex-col gap-2 lg:w-[40vw] my-6">
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
                    <p className='dark:text-greenyellow text-blue-500 text-[.8rem] font-light'>see all</p>
                </div>
                <div className="flex flex-col gap-1">
                    {/* {} */}
                    <h1>Groups</h1>
                    <div className={`${isDarkMode ? 'dark' : ''}   `}>
                        <div onClick={() => {
                            setIsOpenChatModal(true)
                        }} className="flex cursor-pointer items-center gap-2 dark:text-white text-black hover:shadow-2xl p-1 rounded-lg">
                            <div className="relative">
                                <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src={'https://i.gifer.com/6Szl.gif'} alt="" />
                                <div className="statusDot p-1 right-[.1rem] bottom-[.2rem] absolute rounded-full bg-greenyellow">

                                </div>
                            </div>
                            <div className="w-full flex justify-between text-left">
                                <div className="">
                                    <h1 className='text-[.8rem]'>MERN Stack</h1>
                                    <p className='text-gray-400 text-[.7rem] '>I just finished watching a really good movie🎥.</p>
                                </div>
                                <p className=' text-[.4rem] text-gray-400'>Just Now</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${isDarkMode ? 'dark' : ''}   `}>
                        <div onClick={() => {
                            setIsOpenChatModal(true)
                        }} className="flex cursor-pointer items-center gap-2 dark:text-white text-black hover:shadow-2xl p-1 rounded-lg">
                            <div className="relative">
                                <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src={'https://tiermaker.com/images/templates/meme-cats-1022816/10228161621384562.jpg'} alt="" />
                                <div className="statusDot p-1 right-[.1rem] bottom-[.2rem] absolute rounded-full bg-greenyellow">

                                </div>
                            </div>
                            <div className="w-full flex justify-between text-left">
                                <div className="">
                                    <h1 className='text-[.8rem]'>General Chat</h1>
                                    <p className='text-gray-400 text-[.7rem] '> Have you seen anything good lately? 🍿</p>
                                </div>
                                <p className=' text-[.4rem] text-gray-400'>Just Now</p>
                            </div>
                        </div>
                    </div>
                    <h1>Friends</h1>
                    <div className={`${isDarkMode ? 'dark' : ''}   `}>
                        <div onClick={() => {
                            setIsOpenChatModal(true)
                        }} className="flex cursor-pointer items-center gap-2 dark:text-white text-black hover:shadow-2xl p-1 rounded-lg">
                            <div className="relative">
                                <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src={ava1} alt="" />
                                <div className="statusDot p-1 right-[.1rem] bottom-[.2rem] absolute rounded-full bg-greenyellow">

                                </div>
                            </div>
                            <div className="w-full flex justify-between text-left">
                                <div className="">
                                    <h1 className='text-[.8rem]'>Brian Davis</h1>
                                    <p className='text-gray-400 text-[.7rem] '>Hey there! 😊 How's your day going so far? 🌞</p>
                                </div>
                                <p className=' text-[.4rem] text-gray-400'>Just Now</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${isDarkMode ? 'dark' : ''}   `}>
                        <div onClick={() => {
                            setIsOpenChatModal(true)
                        }} className="flex cursor-pointer items-center gap-2 dark:text-white text-black hover:shadow-2xl p-1 rounded-lg">
                            <div className="relative">
                                <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src={ava2} alt="" />
                                <div className="statusDot p-1 right-[.1rem] bottom-[.2rem] absolute rounded-full bg-greenyellow">

                                </div>
                            </div>
                            <div className="w-full flex justify-between text-left">
                                <div className="">
                                    <h1 className='text-[.8rem]'>Megan Powell</h1>
                                    <p className='text-gray-400 text-[.7rem] '>I'm craving some pizza 🍕 but I'm trying to eat....</p>
                                </div>
                                <p className=' text-[.4rem] text-gray-400'>Today, 10:00am</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${isDarkMode ? 'dark' : ''}   `}>
                        <div onClick={() => {
                            setIsOpenChatModal(true)
                        }} className="flex cursor-pointer items-center gap-2 dark:text-white text-black hover:shadow-2xl p-1 rounded-lg">
                            <div className="relative">
                                <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src={ava4} alt="" />
                                <div className="statusDot p-1 right-[.1rem] bottom-[.2rem] absolute rounded-full bg-greenyellow">

                                </div>
                            </div>
                            <div className="w-full flex justify-between text-left">
                                <div className="">
                                    <h1 className='text-[.8rem]'>Manuel Rojas</h1>
                                    <p className='text-gray-400 text-[.7rem] '>I will purchase it for sure.Can't wait...</p>
                                </div>
                                <p className=' text-[.4rem] text-gray-400'>21:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
