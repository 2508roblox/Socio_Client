import React from 'react'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux';
export const AdsCard = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    return (
        <div className={`${isDarkMode ? 'dark' : ''}   `}>
            <div className="   ads dark:bg-bgmdark bg-bgmlight shadow-lg rounded-xl p-4 flex flex-col gap-2">
                <div className="flex justify-between text-white text-sm mb-2">
                    <h1>Sponsored Ads</h1>
                    <UilEllipsisH></UilEllipsisH>

                </div>
                <hr className='dark:border-gray-700 border-gray-300' />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJycRX1mA5Z3wGZ5tr5xwHb85FQuycbG_4A&usqp=CAU" className='rounded-xl' alt="" />
                <div className="   flex flex-row items-center gap-2">
                    <img className='rounded-full h-[40px]' width={'40px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <div className="text-white ">
                        <h1 className='text-sm dark:text-greenyellow text-blue-500'>Modechef Leno</h1>
                        <p className='text-sm text-gray-400'>Restaurant</p>
                    </div>
                </div>
                <p className='text-gray-500 text-sm'>reiciendis odit pariatur ex  mollitia magnam necessitatibus eum...</p>
                <button className='btn-green bg-blue-500 text-white dark:bg-btnGrayLight dark:text-gray-400'>Create Add</button>
            </div> </div>
    )
}
