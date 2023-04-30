import React from 'react'
import { UilCheck } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux';
export const FriendRequest = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    return (
        <div className={`${isDarkMode ? 'dark' : ''}`}>
            <div className="   flex justify-between">
                <div className="flex items-center gap-2 dark:text-white text-black">
                    <img className='rounded-full h-[50px] object-cover min-w-[50px]' width={'50px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <div className=" flex items-start flex-col gap-1">
                        <h1 className='text-sm'>Sovanna Nguyen</h1>
                        <div className="flex -space-x-1 overflow-hidden object-none p-2">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="btn-green text-white dark:bg-greenyellow  dark:text-black bg-blue-500 rounded-full p-1"><UilCheck></UilCheck></div>
                    <div className="btn-green text-white bg-gray-300 dark:text-black rounded-full dark:bg-btnGrayLight p-1"><UilMultiply></UilMultiply></div>
                </div>
            </div>
        </div>
    )
}
