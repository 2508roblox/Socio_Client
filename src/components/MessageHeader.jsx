import React from 'react'
import { UilFolderOpen } from '@iconscout/react-unicons'
import { UilPhoneAlt } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { UilArrowLeft } from '@iconscout/react-unicons'

export const MessageHeader = ({ setIsOpen, setShowMessage }) => {
    return (

        <div className="border-b-2 dark:border-bgdark">
            <div className="p-4 roomInfo z-50  flex justify-between items-center w-full  relative">
                <div className="leftSide flex gap-2 items-center">
                    <UilArrowLeft onClick={() => { setShowMessage(false) }} className='w-[5rem] h-[2rem] block  xl:hidden'></UilArrowLeft>
                    <div className="">
                        <div className="relative">
                            <img className='rounded-full h-[45px] min-w-[45px] object-cover' width={'45px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />

                        </div>
                    </div>
                    <div className="w-full flex justify-between text-left">
                        <div className="">
                            <h1 className='text-[1rem] dark:text-gray-400'>Sovanna Nguyen</h1>
                        </div>
                    </div>
                </div>
                <div className="icon flex gap-2 text-black dark:text-gray-400">
                    <UilPhoneAlt></UilPhoneAlt>
                    <UilFolderOpen
                        onClick={() => {
                            setIsOpen(prev => !prev)
                        }}
                    ></UilFolderOpen>
                    <UilEllipsisV></UilEllipsisV>
                </div>
            </div>
        </div>

    )
}
