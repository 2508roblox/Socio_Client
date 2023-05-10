import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { CreatePost } from './../modals/CreatePost';
import { UilImagePlus } from '@iconscout/react-unicons'
import { UilVideo } from '@iconscout/react-unicons'
import { UilListUl } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux';
import dfAvatar from '../assets/img/defaultAvatar.png';
import { Nav } from './../components/Nav';
import { UilCheck } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilCommentAltDots } from '@iconscout/react-unicons'
import { UilShareAlt } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { UilFile } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { CreateStory } from '../components/CreateStory';
import { Story } from '../components/Story';
export const Welcome = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const UserData = useSelector(state => state.AuthReducer.user)

    return (
        <>
            <Nav></Nav>
            <div className="h-[100vh] bg-bglight dark:bg-bgdark mt-[6rem]">
                <div className="h-[40vh] px-4 lg:px-[12rem] flex flex-col lg:flex-row lg:items-center  gap-10 lg:gap-4  justify-between">
                    <div className="flex flex-col gap-4">
                        <h1 className='text-[5.5vh] font-bold  text-blue-500 dark:text-greenyellow lg:max-w-[34vw]'>Bringing people together, one click at a time..</h1>
                        <p className='text-gray-500 text-[1.2rem]' >Share your life, connect with others..</p>
                        <div className="">
                            <button className='btn-green text-white dark:text-black bg-blue-500 dark:bg-greenyellow' >Get Started</button>
                        </div>
                    </div>
                    <div className="imgs relative">
                        <div className={`${isDarkMode ? 'dark' : ''} absolute bottom-[12rem] left-[-12rem]`}>
                            <div className="  w-[400px]  shadow-xl postShare p-4 bg-bgmlight dark:bg-bgmdark rounded-2xl">
                                <div className="flex gap-4 items-start ">
                                    <img className="rounded-full h-[50px] object-cover min-w-[50px]" width="50px" src={UserData?.avatar || dfAvatar} alt="" />
                                    <div className="grid w-full  flex-col gap-4">
                                        <input onFocus={() => { setIsOpen(prev => !prev) }} className='   p-2 text-sm text-white bg-bglight rounded-md shadow-sm bg-blue-white dark:bg-bgdark ' type="text" placeholder='Enter your post title here...' name="" id="" />
                                        <div className="grid grid-cols-4 gap-4">
                                            <button className='    bg-blue-white border-2 text-black dark:text-white dark:bg-bgdark  px-2 py-2 rounded-xl gap-2 flex dark:border-0 items-center justify-center'>
                                                <UilImagePlus className='text-green-600'></UilImagePlus> <p className='hidden xl:flex'> </p> </button>
                                            <button className='    bg-blue-white border-2 text-black dark:text-white dark:bg-bgdark  px-2 py-2 rounded-xl gap-2 flex dark:border-0 items-center justify-center'><UilVideo className='text-blue-500'></UilVideo> <p className='hidden xl:flex'> </p> </button>
                                            <button className='    bg-blue-white border-2 text-black dark:text-white dark:bg-bgdark  px-2 py-2 rounded-xl gap-2 flex dark:border-0 items-center justify-center'><UilListUl className='text-red-500'></UilListUl> <p className='hidden xl:flex'> </p> </button>
                                            <button className='    bg-blue-white border-2 text-black dark:text-white dark:bg-bgdark  px-2 py-2 rounded-xl gap-2 flex dark:border-0 items-center justify-center'><UilCalendarAlt className='text-yellow-200'></UilCalendarAlt> <p className='hidden xl:flex'> </p> </button>
                                        </div>
                                    </div>
                                </div>
                                <CreatePost isOpen={isOpen} setIsOpen={setIsOpen}></CreatePost>
                            </div>
                        </div >
                        <div className={`${isDarkMode ? 'dark' : ''} shadow-lg`}>
                            <div className="  Post flex flex-col gap-4 dark:bg-bgmdark bg-bgmlight p-4 rounded-lg ">
                                <div className="info flex justify-between">
                                    <div className="flex items-start gap-2 ">
                                        <div className="relative">

                                            <div className="dot w-[9px] bottom-1 right-0 rounded-full border-[1px] border-white bg-green-500 absolute h-[9px]"></div>


                                            <img width={'40px'} className='h-[40px] rounded-full ' src="https://firebasestorage.googleapis.com/v0/b/socialmediav2.appspot.com/o/1d9003898f5723081867134deca59a3f.gif?alt=media&token=5b88b10e-2f0d-43bb-af3f-7cc1f1ba3aac" alt="" />
                                        </div>

                                        <div className="">
                                            <h1 className='text-gray-500 text-sm flex items-center gap-2'>@{'ps26818'} <UilCheck className='bg-blue-500 rounded-full w-[14px] h-[14px] text-white dark:text-white' ></UilCheck></h1>
                                            <p className='text-black dark:text-white flex items-center gap-2'>Giang Tran <span className='dot w-1 h-1 rounded-full dark:bg-greenyellow bg-blue-500'></span> <span className='dark:text-greenyellow text-blue-500 text-sm'> 12h ago</span> </p>
                                        </div>
                                    </div>
                                    <UilEllipsisV className='text-black '></UilEllipsisV>

                                </div>
                                <p className={`dark:text-gray-300 text-gray-800 text-sm overflow-hidden text-ellipsis`} >
                                    Welcome to my Socio
                                </p>
                                <div className={`grid grid-cols-1 gap-2`}>

                                    <img src='https://firebasestorage.googleapis.com/v0/b/socialmediav2.appspot.com/o/5927911.gif?alt=media&token=2afdd798-aa21-46b0-9ede-150886879a1d' alt="" className='rounded-lg w-full lg:w-[500px] ' />

                                </div>

                                <div className="icon-btn flex flex-row justify-between">
                                    <div className="text-black dark:text-white flex  items-center gap-4">
                                        {'10,2k'}
                                        ❤️



                                        <UilCommentAltDots width="35px" height="35px"></UilCommentAltDots>
                                        <UilShareAlt width="35px" height="35px"></UilShareAlt>
                                    </div>
                                    <button className='dark:bg-greenyellow bg-blue-500 text-white dark:text-black p-1  px-2 rounded-lg'>Hire me</button>
                                </div>
                                <hr className='dark:border-bgdark border-gray-300' />
                                <div className="flex items-center justify-between gap-4">
                                    <img className='rounded-full h-[50px] ' width={'50px'} src='https://firebasestorage.googleapis.com/v0/b/socialmediav2.appspot.com/o/1d9003898f5723081867134deca59a3f.gif?alt=media&token=5b88b10e-2f0d-43bb-af3f-7cc1f1ba3aac' alt="" />
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
                        <div className="absolute bottom-[-3rem] right-[-14rem] flex gap-2 float-left w-full overflow-y-scroll  " >

                            <Story data={'https://source.unsplash.com/240x320/?portrait?1'}></Story>
                            <Story data={'https://source.unsplash.com/240x320/?portrait?4'}></Story>
                            <Story data={'https://source.unsplash.com/240x320/?portrait?5'}></Story>

                        </div>



                    </div>


                </div>
            </div>
        </>
    )
}
