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
//img
import avatar6 from '../assets/img/avatar6.avif'
import avatar7 from '../assets/img/avatar7.avif'
import avatar8 from '../assets/img/avatar8.avif'
import story6 from '../assets/img/story6.avif'
import story7 from '../assets/img/story7.avif'
import story8 from '../assets/img/story8.avif'

import logoli from '../assets/img/newlogolight.png'
import logoda from '../assets/img/newlogodark.png'

//

import { UilMoon } from '@iconscout/react-unicons'
import { UilSmile } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { CreatePostPrv } from './../welcome/CreatePostPrv';
// import Conversation from './../reducers/ConversationPrv';
import { ConversationPrv } from './../welcome/ConversationPrv';
import { Link } from 'react-router-dom';
import { UserCardPrv } from './../welcome/UserCardPrv';
export const Welcome = () => {
    const [isOpen, setIsOpen] = useState(false)
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const UserData = useSelector(state => state.AuthReducer.user)

    return (
        <div className='bg-bglight dark:bg-bgdark '>
            <Nav></Nav>
            <div className="h-[40vh] lg:h-[80vh] bg-bglight dark:bg-bgdark mt-4 lg:mt-[6rem]">
                <div className="h-[40vh]  px-[2rem] lg:px-[2rem] xl:px-[10rem] flex flex-col lg:flex-row lg:items-center  gap-2 lg:gap-0  justify-between">
                    <div className="flex flex-col gap-4">
                        <p className='dark:text-greenyellow text-blue-500'>Created by GiangTran, ps26818</p>
                        <div style={{ filter: 'blur(100px)' }} className={`animate-pulse ${isDarkMode ? 'w-20' : 'w-32'}  bg-blue-500 dark:bg-greenyellow h-20 absolute`}></div>
                        <h1 className='text-[6.5vh] font-bold  text-black dark:text-white lg:max-w-[40vw]'>Bringing <span className='dark:text-greenyellow text-blue-500'>people</span> together, one click at a time...</h1>
                        <p className='text-gray-500 text-[1.2rem]' >Share your life, connect with others...</p>
                        <div >
                            <Link to={'../register'} className='btn-green text-white dark:text-black bg-blue-500 dark:bg-greenyellow' >Get Started</Link>
                        </div>
                    </div>
                    <div className="z-50 imgs hidden lg:block relative">
                        <div style={{ animationDuration: '3000ms' }} className={`${isDarkMode ? 'dark' : ''} animate-[bounce_3s_infinite]  lg:absolute bottom-[12rem] left-[-12rem]`}>
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
                        <div className={`${isDarkMode ? 'dark' : ''}  shadow-lg`}>
                            <div className="  Post flex flex-col gap-4 dark:bg-bgmdark bg-bgmlight p-4 rounded-lg ">
                                <div className="info flex justify-between">
                                    <div className="flex items-center gap-2 ">
                                        <div className="relative">

                                            <div className="dot w-[9px] bottom-1 right-0 rounded-full border-[1px] border-white bg-green-500 absolute h-[9px]"></div>


                                            <img width={'40px'} className='h-[40px] rounded-full ' src="https://firebasestorage.googleapis.com/v0/b/socialmediav2.appspot.com/o/1d9003898f5723081867134deca59a3f.gif?alt=media&token=5b88b10e-2f0d-43bb-af3f-7cc1f1ba3aac" alt="" />
                                        </div>

                                        <div className="bg-bgmlight dark:bg-bgmdark p-0 rounded-lg flex flex-col gap-3">
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
                        {/* {blur} */}
                        <div style={{ filter: 'blur(100px)' }} className={`animate-pulse ${isDarkMode ? 'w-20' : 'w-32'}   bg-blue-500 dark:bg-greenyellow h-20 absolute`}></div>

                        <div className="animate-[bounce_10s_infinite] lg:absolute bottom-[-3rem] right-[-10rem] flex gap-2 float-left w-full overflow-y-scroll  " >

                            <Story data={story6} avatar={avatar6}></Story>
                            <Story data={story7} avatar={avatar7}></Story>
                            <Story data={story8} avatar={avatar8}></Story>

                        </div>
                        <div role="status" className='z-20 animate-bounce lg:absolute bg-bgmlight top-10 right-[-2rem] dark:bg-bgmdark shadow-xl p-2 rounded-md flex items-center justify-center'>
                            <svg aria-hidden="true" class="w-8 h-8  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>



                    </div>


                </div>


            </div>
            <div className="mt-[7rem] lg:mt-[-5rem] xl:mt-[-5rem] Features grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5  px-[2rem] lg:px-[2rem] xl:px-[10rem]">
                <div className="shadow-md bg-bgmlight dark:bg-bgmdark p-4 rounded-lg flex flex-col gap-3">
                    <div className="heading flex flex-row gap-2 items-center  ">
                        <div className="p-2 bg-blue-500 dark:bg-greenyellow flex rounded-lg">
                            <UilSmile className='text-white dark:text-black'></UilSmile>
                        </div>
                        <h1 className='text-lg text-black dark:text-white'>Create a post</h1>

                    </div>
                    <p className='text-sm'>
                        With this feature, you can easily create and share posts with your friends and followers. Share your thoughts, ideas, or anything you want to express with just a few clicks.
                    </p>
                </div>

                <div className="shadow-md bg-bgmlight dark:bg-bgmdark p-4 rounded-lg flex flex-col gap-3">
                    <div className="heading flex flex-row gap-2 items-center">
                        <div className="p-2 bg-blue-500 dark:bg-greenyellow flex rounded-lg">
                            <UilMessage className='text-white dark:text-black'></UilMessage>
                        </div>
                        <h1 className='text-lg text-black dark:text-white'>Chat</h1>

                    </div>
                    <p className='text-sm'>
                        Stay connected with your friends and loved ones using our chat feature. You can send messages, emojis, and even share photos and videos, all in real-time.                    </p>
                </div>
                <div className="shadow-md bg-bgmlight dark:bg-bgmdark p-4 rounded-lg flex flex-col gap-3">
                    <div className="heading flex flex-row gap-2 items-center">
                        <div className="p-2 bg-blue-500 dark:bg-greenyellow flex rounded-lg">
                            <UilUsersAlt className='text-white dark:text-black'></UilUsersAlt>
                        </div>

                        <h1 className='text-lg text-black dark:text-white'>Friends</h1>

                    </div>
                    <p className='text-sm'>
                        Add and manage your friends on our website with ease. You can find and add new friends, view their profiles, and stay connected with them through posts, chats, and more                    </p>
                </div>
                <div className="shadow-md bg-bgmlight dark:bg-bgmdark p-4 rounded-lg flex flex-col gap-3">
                    <div className="heading flex flex-row gap-2 items-center">
                        <div className="p-2 bg-blue-500 dark:bg-greenyellow flex rounded-lg">
                            <UilMoon className='text-white dark:text-black'></UilMoon>
                        </div>

                        <h1 className='text-lg text-black dark:text-white'>Light/Dark UI</h1>

                    </div>
                    <p className='text-sm'>
                        Our website comes with both light and dark UI themes to suit your preferences. You can switch between themes anytime you want, providing you with a personalized browsing experience                    </p>
                </div>
            </div>
            {/* {create post preview} */}
            <div className=" px-[2rem] lg:px-[2rem] xl:px-[10rem] mb-4 mt-[5rem]">
                <h1 className='text-[6.5vh] font-bold  text-black dark:text-white lg:max-w-[40vw]'>Post <span className='dark:text-greenyellow text-blue-500'>Publishing</span>   Feature</h1>
                <p className='max-w-[600px]'>Our platform allows you to easily share your thoughts, ideas, and content with your friends and followers using our user-friendly post editor.</p>
                <div className="">
                    <CreatePostPrv></CreatePostPrv>
                </div>
            </div>

            <div className=" px-[2rem] lg:px-[2rem] xl:px-[10rem] mb-4">
                <h1 className='text-[6.5vh] font-bold  text-black dark:text-white lg:max-w-[40vw]'>Real-Time   <span className='dark:text-greenyellow text-blue-500'>Communication</span>   </h1>
                <p className='max-w-[600px]'>Our platform's chat feature allows you to communicate with your contacts in real-time. Whether you want to have a one-on-one conversation or chat with a group of friends, our chat feature makes it easy.</p>
                <div className="">
                    <ConversationPrv></ConversationPrv>
                </div>
            </div>
            <div className=" px-[2rem] lg:px-[2rem] xl:px-[10rem] mb-4">
                <h1 className='text-[6.5vh] font-bold  text-black dark:text-white lg:max-w-[40vw]'><span className='dark:text-greenyellow text-blue-500'>Friend Request </span> and   <span className='dark:text-greenyellow text-blue-500'>Follow Features</span>   </h1>
                <p className='max-w-[600px]'>Expand Your Network with Our Friend Request and Follow Features.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20 ">
                    <UserCardPrv></UserCardPrv>
                </div>
            </div>
        </div>
    )
}
