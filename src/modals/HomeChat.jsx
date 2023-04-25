import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UserMess } from './../components/UserMess';
import { OthersMess } from './../components/OthersMess';
import { UilImagePlus } from '@iconscout/react-unicons'
import { UilFile } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilPhone } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import { UilArchive } from '@iconscout/react-unicons'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux'
export const HomeChat = ({ isOpenChatModal, setIsOpenChatModal }) => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)


    return (

        <div className={`${isDarkMode ? 'dark' : ''}   `}>
            {isOpenChatModal && <div className="  fixed shadow-xl flex flex-row bottom-3 rounded-xl  dark:bg-btnGrayLight bg-bgmlight right-10">
                <div className="">
                    <div className="  flex p-1 border-b-[1px] dark:border-gray-600 border-gray-200 items-center justify-between gap-8 ">
                        <div className="">
                            <div className="  flex cursor-pointer items-center gap-2 dark:text-white text-black hover:shadow-2xl p-1 rounded-lg">
                                <div className="relative">
                                    <img className='rounded-full' width={'45px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                                    <div className="statusDot p-1 right-[.1rem] bottom-[.2rem] absolute rounded-full bg-greenyellow">

                                    </div>
                                </div>
                                <div className="w-full flex justify-between text-left">
                                    <div className="">
                                        <h1 className='text-[.8rem]'>Sovanna Nguyen</h1>
                                        <p className='text-gray-400 text-[.7rem] '>online</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="  flex gap-1 dark:text-white text-black">
                            <UilPhone width='25px' className='dark:bg-fontGray bg-bglight rounded-full p-1'></UilPhone>
                            <UilMultiply onClick={() => { setIsOpenChatModal(false) }} width='25px' className='dark:bg-fontGray bg-bglight rounded-full p-1'></UilMultiply>
                        </div>
                    </div>
                    <div className="  px-4 h-[300px] overflow-y-scroll flex flex-col">

                        <UserMess></UserMess>
                        <OthersMess></OthersMess>
                        <OthersMess></OthersMess>
                        <UserMess></UserMess>
                        <UserMess></UserMess>
                        <UserMess></UserMess>
                        <UserMess></UserMess>
                        <UserMess></UserMess>

                    </div>
                    <div className="p-4">
                        <div className="  flex justify-between px-4 h-full w-full dark:bg-bgdark bg-bglight rounded-md text-gray-200" style={{ minWidth: '10px' }}>
                            <input style={{ 'borderColor': 'transparent', 'outline': 'none', minWidth: '10px' }} placeholder='Write your comment ' className='bg-transparent py-1  border-none text-sm' type="text" />
                            <div className="  flex  gap-2 items-center">
                                <UilMessage className='text-gray-500'></UilMessage>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="  items-center border-l-[1px] dark:border-gray-600 border-gray-200 flex flex-col gap-3 p-2">
                    <UilArchive width='25px' className='  dark:bg-fontGray bg-bglight rounded-full p-1 dark:text-white text-black'></UilArchive>
                    <UilEllipsisH width='25px' className='  dark:bg-fontGray bg-bglight rounded-full p-1 dark:text-white text-black'></UilEllipsisH>
                    <img className='rounded-full' width={'45px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <img className='rounded-full' width={'45px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <img className='rounded-full' width={'45px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <div className="more relative">
                        <div className="  flex items-center justify-center absolute w-full text-center h-full  text-white bg-bgmdark rounded-full bg-opacity-80">
                            <p className=''> +3</p>
                        </div>
                        <img className='rounded-full' width={'45px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    </div>
                    <UilEdit width='45px' height='45px' className='  dark:bg-fontGray bg-bglight rounded-full p-2 dark:text-white text-black shadow-2xl'></UilEdit>
                </div>
            </div>

            }
        </div>

    )
}
