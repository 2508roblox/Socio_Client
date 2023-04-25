import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilCheck } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilCommentAltDots } from '@iconscout/react-unicons'
import { UilShareAlt } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { UilImagePlus } from '@iconscout/react-unicons'
import { UilFile } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux'
import heartImg from '../assets/img/heart.png'
export const Post = ({ postData }) => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    const [allContent, setAllContent] = useState(false)
    const [heartStatus, setHeartStatus] = useState(false)
    return (
        <div className={`${isDarkMode ? 'dark' : ''} shadow-lg`}>
            <div className="  Post flex flex-col gap-4 dark:bg-bgmdark bg-bgmlight p-4 rounded-lg ">
                <div className="info flex justify-between">
                    <div className="flex items-start gap-2 ">
                        <img width={'40px'} className='h-[40px] rounded-full ' src="	  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                        <div className="">
                            <h1 className='text-gray-500 text-sm flex items-center gap-2'>@Muhadrehh <UilCheck className='bg-blue-500 rounded-full w-[14px] h-[14px] text-white dark:text-white' ></UilCheck></h1>
                            <p className='text-black dark:text-white flex items-center gap-2'>Muhad Kumbirai <span className='dot w-1 h-1 rounded-full dark:bg-greenyellow bg-blue-500'></span> <span className='dark:text-greenyellow text-blue-500 text-sm'> 1hr ago</span> </p>
                        </div>
                    </div>
                    <UilEllipsisV className='text-black '></UilEllipsisV>

                </div>
                <p onClick={() => {
                    setAllContent(prev => !prev)
                }} className={`dark:text-gray-300 text-gray-800 text-sm ${allContent ? '' : 'overflow-hidden text-ellipsis'}`} style={{ minHeight: '3em', display: '-webkit-box', WebkitBoxOrient: `${allContent ? '' : 'vertical'}`, WebkitLineClamp: `${allContent ? '' : 2}` }}>
                    {postData.content}
                </p>
                <img className='rounded-xl' src={postData.media} alt="" />
                <div className="icon-btn flex flex-row justify-between">
                    <div className="text-black dark:text-white flex  items-center gap-4">
                        {heartStatus ? <img onClick={() => {
                            setHeartStatus(false)
                        }} src={heartImg} alt="" width={'40px'} /> :
                            <UilHeart onClick={() => {
                                setHeartStatus(true)
                            }} fill='red ' width="35px" height="35px" ></UilHeart>
                        }
                        <UilCommentAltDots width="35px" height="35px"></UilCommentAltDots>
                        <UilShareAlt width="35px" height="35px"></UilShareAlt>
                    </div>
                    <button className='dark:bg-greenyellow bg-blue-500 text-white dark:text-black p-1  px-2 rounded-lg'>Hire me</button>
                </div>
                <hr className='dark:border-bgdark border-gray-300' />
                <div className="flex items-center justify-between gap-4">
                    <img className='rounded-full h-[50px] ' width={'50px'} src="	  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <div className="flex justify-between px-4 h-full w-full dark:bg-bgdark bg-bglight rounded-xl dark:text-gray-200" style={{ minWidth: '10px' }}>
                        <input style={{ 'borderColor': 'transparent', 'outline': 'none', minWidth: '10px' }} placeholder='Write your comment ' className='bg-transparent py-1  border-none' type="text" />
                        <div className="flex  gap-2 items-center">
                            <UilImagePlus className='text-gray-500'></UilImagePlus>
                            <UilMessage className='text-gray-500'></UilMessage>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
