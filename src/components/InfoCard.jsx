import React from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilBag } from '@iconscout/react-unicons'

import { UilHeart } from '@iconscout/react-unicons'
import { UilWifi } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux';
export const InfoCard = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            <div className="  dark:bg-bgmdark bg-bgmlight rounded-lg p-2 flex flex-col">
                <div className="flex flex-col gap-2 profileInfo  dark:bg-bgdark bg-bglight rounded-lg p-4">
                    <h1 className='dark:text-white text-black'>Infomation</h1>
                    <p className='text-fontGray tezt-[.7rem]'>Art Derection UX/UI DESIGNER Founder of Adee Design</p>
                    <button className='btn-green bg-blue-500 dark:bg-greenyellow text-white  dark:text-black w-full'>Edit Bio</button>
                    <div className="my-2 dark:text-white text-black">
                        <h1 className='flex gap-2'><UilEstate></UilEstate>Work at US</h1>
                        <h1 className='flex gap-2'><UilBag></UilBag>Live in Sydney</h1>
                        <h1 className='flex gap-2'><UilHeart></UilHeart>Relationship Single</h1>
                        <h1 className='flex gap-2'><UilWifi></UilWifi>230 Followers</h1>
                    </div>
                    <button className='btn-green bg-blue-500 dark:bg-greenyellow text-white  dark:text-black w-full'>Edit detail</button>
                    <div className="skill dark:text-white text-black flex flex-col gap-2">
                        <h1 className='dark:text-white text-black'>Skills</h1>
                        <div className="flex flex-wrap-reverse gap-4 max-w-[400px]">
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>UX Designer</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>Copy writting</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>Website</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>Website</button>

                        </div>
                        <p>+ Add some skills</p>
                    </div>
                    <div className="flex justify-between gap-2">
                        <button className='btn-green bg-blue-500 dark:bg-greenyellow text-white  dark:text-black w-[100%]'>Edit Skills</button>
                        <button className='btn-green bg-blue-500 dark:bg-greenyellow text-white  dark:text-black dark:bg-bgmdark bg-bgmlight dark:text-white text-black '>...</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
