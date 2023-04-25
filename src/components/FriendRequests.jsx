import React from 'react'
import { FriendRequest } from './FriendRequest';
import { useSelector } from 'react-redux';

export const FriendRequests = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    return (
        <div className={`${isDarkMode ? 'dark' : ''}`}>
            <div className="  request dark:bg-bgmdark bg-bgmlight shadow-lg rounded-xl p-4 flex flex-col gap-2">
                <div className="flex justify-between dark:text-white text-black">
                    <h1>Friend Requests</h1>
                    <p className='text-gray-400 text-sm'>see all</p>
                </div>
                <FriendRequest></FriendRequest>
                <FriendRequest></FriendRequest>

            </div>
        </div>
    )
}
