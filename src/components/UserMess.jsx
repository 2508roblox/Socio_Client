import React from 'react'
import { useSelector } from 'react-redux'

export const UserMess = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            <div className="flex justify-end  cursor-pointer items-center gap-2 text-white hover:shadow-2xl  py-1 rounded-lg ml-[3rem]">

                <div className="  w-full max-w-[180px] flex justify-between text-left dark:bg-bgdark bg-blue-500  rounded-md">
                    <h1 className='text-[.6rem] px-3 py-1'>Hello my friends, how is going today now let see</h1>


                </div>
                <div className="relative">
                    <img className='rounded-full' width={'30px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />

                </div>
            </div>
        </div>
    )
}
