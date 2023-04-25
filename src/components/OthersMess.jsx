import React from 'react'
import { useSelector } from 'react-redux'

export const OthersMess = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    return (
        <div className={`${isDarkMode ? 'dark' : ''}  `}>
            <div className="  flex  cursor-pointer items-center gap-2 text-white hover:shadow-2xl py-1 rounded-lg">
                <div className="relative">
                    <img className='rounded-full' width={'30px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />

                </div>
                <div className="w-full max-w-[180px]   flex justify-between text-left dark:bg-fontGray bg-bglight text-black dark:text-white px-1 rounded-md">
                    <h1 className='text-[.6rem] px-3 py-1'>Sovanna Nguye afaefn</h1>


                </div>
            </div>
        </div>
    )
}
