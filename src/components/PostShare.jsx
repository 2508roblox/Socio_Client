import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { CreatePost } from './../modals/CreatePost';
import { UilImagePlus } from '@iconscout/react-unicons'
import { UilVideo } from '@iconscout/react-unicons'
import { UilListUl } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux';
import dfAvatar from '../assets/img/defaultAvatar.png';

export const PostShare = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const UserData = useSelector(state => state.AuthReducer.user)


    return (
        <>
            {UserData ?
                <div className={`${isDarkMode ? 'dark' : ''} `}>
                    <div className="    shadow-xl postShare p-4 bg-bgmlight dark:bg-bgmdark rounded-2xl">
                        <div className="flex gap-4 items-start ">
                            <img className="rounded-full h-[50px] object-cover min-w-[50px]" width="50px" src={UserData?.avatar || dfAvatar} alt="" />
                            <div className="grid w-full  flex-col gap-4">
                                <input onFocus={() => { setIsOpen(prev => !prev) }} className='   p-2 text-sm text-white bg-bglight rounded-md shadow-sm bg-blue-white dark:bg-bgdark ' type="text" placeholder=' Tell your friends about your thoughts...' name="" id="" />
                                <div className="grid grid-cols-4 gap-4">
                                    <button className='    bg-blue-white border-2 text-black dark:text-white dark:bg-bgdark  px-2 py-2 rounded-xl gap-2 flex dark:border-0 items-center justify-center'>
                                        <UilImagePlus className='text-green-600'></UilImagePlus> <p className='hidden xl:flex'>Photo</p> </button>
                                    <button className='    bg-blue-white border-2 text-black dark:text-white dark:bg-bgdark  px-2 py-2 rounded-xl gap-2 flex dark:border-0 items-center justify-center'><UilVideo className='text-blue-500'></UilVideo> <p className='hidden xl:flex'>Video</p> </button>
                                    <button className='    bg-blue-white border-2 text-black dark:text-white dark:bg-bgdark  px-2 py-2 rounded-xl gap-2 flex dark:border-0 items-center justify-center'><UilListUl className='text-red-500'></UilListUl> <p className='hidden xl:flex'>Poll</p> </button>
                                    <button className='    bg-blue-white border-2 text-black dark:text-white dark:bg-bgdark  px-2 py-2 rounded-xl gap-2 flex dark:border-0 items-center justify-center'><UilCalendarAlt className='text-yellow-200'></UilCalendarAlt> <p className='hidden xl:flex'>Schedule</p> </button>
                                </div>
                            </div>
                        </div>
                        <CreatePost isOpen={isOpen} setIsOpen={setIsOpen}></CreatePost>
                    </div>
                </div >
                : ''
            }
        </>


    )
}
