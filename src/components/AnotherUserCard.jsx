import React from 'react'
import { useSelector } from 'react-redux';

export const AnotherUserCard = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    return (
        <div className={`${isDarkMode ? 'dark' : ' '}     `}>

            <div className="mb-4   shadow-lg flex flex-col gap-2 p-4 dark:bg-btnGrayLight bg-bglight rounded-xl rounded-xl">
                <img className='rounded-xl w-full' src="https://c4.wallpaperflare.com/wallpaper/346/517/218/digital-art-artwork-illustration-environment-purple-background-hd-wallpaper-preview.jpg" alt="" />
                <div className="">
                    <h1>David Joins</h1>
                    <div className="flex gap-[-1rem] items-center">
                        <img className='rounded-full' width={'20px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                        <img className='rounded-full' width={'20px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                        <img className='rounded-full' width={'20px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                        <p className='mx-2 text-gray-500'>3 Mutual friends</p>
                    </div>

                </div>
                <button className='btn-green text-white dark:text-black bg-blue-500 dark:bg-greenyellow w-[12rem]'>Add friend</button>
            </div>
        </div>
    )
}
