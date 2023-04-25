import React from 'react'
import { AnotherUserCard } from './AnotherUserCard';
import { useSelector } from 'react-redux';

export const FriendsRecommended = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    return (
        <div className={`${isDarkMode ? 'dark' : ''}shadow-2xl `}>
            <div className="  dark:text-white  dark:bg-bgmdark bg-bgmlight  rounded-lg p-4 flex gap-2 flex-col">
                <h1>Recommended</h1>
                <div className="flex overflow-x-scroll w-full gap-4   ">
                    <AnotherUserCard></AnotherUserCard>
                    <AnotherUserCard></AnotherUserCard>
                    <AnotherUserCard></AnotherUserCard>
                    <AnotherUserCard></AnotherUserCard>
                    <AnotherUserCard></AnotherUserCard>
                    <AnotherUserCard></AnotherUserCard>


                </div>
            </div>
        </div>

    )
}
