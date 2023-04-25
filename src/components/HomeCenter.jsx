import React from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { PostShare } from './PostShare';
import { Posts } from './Posts';
import { FriendsRecommended } from './FriendsRecommended';
import { useSelector } from 'react-redux';
import { Story } from './Story';
import { CreateStory } from './CreateStory';

export const HomeCenter = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    return (

        <div className={`${isDarkMode ? 'dark' : ''} md:col-span-3 xl:col-span-3`}>

            <div className="flex pt-0 flex-col col-span-3 gap-4 overflow-y-scroll h-[92vh]">

                <div className="">
                    <div className=" flex gap-2 float-left w-full overflow-y-scroll  ">
                        <CreateStory></CreateStory>
                        <Story></Story>
                        <Story></Story>
                        <Story></Story>
                        <Story></Story>
                        <Story></Story>
                        <Story></Story>
                        <Story></Story>
                        <Story></Story>
                    </div>
                </div>

                <PostShare></PostShare>
                <Posts></Posts>
                <FriendsRecommended></FriendsRecommended>

            </div>
        </div>
    )
}
