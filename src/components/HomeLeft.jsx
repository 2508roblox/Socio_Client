import React from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { Outlet, Link } from "react-router-dom";
import { UilEllipsisV } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import { UilPlusSquare } from '@iconscout/react-unicons'
import { useSelector, useDispatch } from 'react-redux';
import dfAvatar from '../assets/img/defaultAvatar.png';
import dfCover1 from '../assets/img/df_cover1.jpg';
import { useNavigate } from 'react-router-dom';

//admin
import isAdmin from '../assets/img/admin2.png'
export const HomeLeft = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const UserData = useSelector(state => state.AuthReducer.user)

    const handleAuthProfile = () => {
        dispatch({ type: 'AUTH_VIEW_SUCCESSFULLY', payload: UserData })
        dispatch({ type: "REMOVE_USER_POST" })

        navigate('../profile')
    }
    return (

        <div className={`${isDarkMode ? 'dark' : ''} md:col-span-2 xl:col-span-1`}>
            <div className="   hidden md:flex  gap-4 flex-col overflow-scroll h-[90vh] ">
                {UserData ?
                    <>
                        <div className=" rounded-xl   relative profileCard bg-bgmlight dark:bg-bgmdark  ">
                            <img className='rounded-xl relative h-[180px] w-full object-cover' src={UserData?.coverimage || dfCover1} alt="" />
                            <UilEllipsisV className='bg-bgmlight dark:bg-bgmdark shadow-lg p-1 right-2 text-lg rounded-md top-2 text-black dark:text-white absolute z-10 '></UilEllipsisV>
                            <div className="   relative bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl p-4 flex justify-center items-center flex-col gap-4">
                                <div className="   absolute top-[-50px] w-full justify-center info p-4 flex items-end gap-2">
                                    <p style={{ 'lineHeight': '24px' }} className='  text-black dark:text-white flex flex-col items-center text-xl'>0 <p className='text-gray-500 text-[14px]'>Folowers</p></p>
                                    <img width={'90px'} height={'90px'} className='rounded-3xl border-2 h-[90px] border-bglight dark:border-bgdark' src={UserData?.avatar || dfAvatar} alt="" />
                                    {

                                        UserData?.isAdmin && <img width={'70px'} height={'70px'} className='absolute bottom-0' src={isAdmin} alt="" />

                                    }
                                    <p style={{ 'lineHeight': '24px' }} className=' text-black dark:text-white flex flex-col items-center text-xl'>0 <p className='text-gray-500 text-[14px]'>Following</p></p>

                                </div>
                                <div className="  mt-10 text-black dark:text-white text-center">
                                    <h1 className='capitalize text-lg'>{UserData.firstname + ' ' + UserData.lastname}</h1>
                                    <p className='mb-5 text-sm text-gray-500'>@{UserData.username}</p>
                                    <p className='mb-4'>{UserData?.desc || 'Edit your bio'}</p>
                                    <hr className='border-gray-400 dark:border-bgdark' />

                                </div>

                                <button onClick={handleAuthProfile} className='text-center    bg-blue-500 dark:bg-btnGrayDark text-white dark:text-gray-400 rounded-xl w-full py-3'>
                                    My Profile
                                </button>
                            </div>
                        </div>
                        <h1 className='text-black dark:text-white text-lg'>Skills</h1>
                        <div className="skills flex flex-wrap-reverse gap-4">
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>UX Designer</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>Copy writting</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>Website</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>UX/UI</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>NodeJs</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>ReactJs</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>JS</button>
                        </div></>
                    :
                    ''
                }

                <div className="flex justify-between">
                    <h1 className='text-black dark:text-white text-lg'>Communities</h1>
                    <div className="flex text-black dark:text-white gap-2 ">
                        <UilSearch className='text-gray-400 text-[.7rem]'></UilSearch>
                        <UilPlusSquare className='text-gray-400 text-[.7rem]'></UilPlusSquare>
                    </div>
                </div>
                <div className=" flex gap-2 items-center">
                    <img width={'70px'} className='rounded-xl border-2 border-bgmdark' src="	  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <div className="text-black dark:text-white">
                        <h1 className='text-sm'>UX Designers Community</h1>
                        <p className='flex flex-row items-center gap-1 text-[.7rem] text-gray-500'> <span className='dot w-1 h-1 rounded-full bg-greenyellow'></span> 32 your friends are in</p>
                    </div>
                </div>
                <div className=" flex gap-2 items-center">
                    <img width={'70px'} className='rounded-xl border-2 border-bgmdark' src="	  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <div className="text-black dark:text-white">
                        <h1 className='text-sm'>UX Designers Community</h1>
                        <p className='flex flex-row items-center gap-1 text-[.7rem] text-gray-500'> <span className='dot w-1 h-1 rounded-full bg-greenyellow'></span> 32 your friends are in</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
