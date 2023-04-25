import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import coverImg from '../assets/img/cover.jpg'
import { UilSetting } from '@iconscout/react-unicons'
import { UilImageV } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { UilBag } from '@iconscout/react-unicons'

import { UilHeart } from '@iconscout/react-unicons'
import { UilWifi } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
export const ProfileCard = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    const [tab, setTab] = useState('profile')

    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            <div className="flex flex-col gap-4">
                <div className=" relative flex shadow-md overflow-hidden dark:bg-bgmdark bg-bgmlight  flex-col rounded-xl gap-20">
                    <div className="relative">
                        <img className='w-full  h-[350px] object-cover' src={coverImg} alt="" />
                        <div className="absolute bottom-2 right-2 text-black dark:text-white flex gap-4">
                            <UilImageV className='p-1 dark:bg-bgmdark bg-bgmlight  rounded-sm' width='30px' height='30px'></UilImageV>
                            <UilEdit className='p-1 dark:bg-bgmdark bg-bgmlight  rounded-sm' width='30px' height='30px'></UilEdit>
                        </div>
                    </div>
                    <div className="p-4  flex items-end justify-between absolute w-full bottom-14">
                        <div className="flex gap-4 items-end text-black dark:text-white ml-[10%]">
                            <img className=' border-0 dark:border-black dark:border-[10px] w-[170px] rounded-lg h-[230px] object-cover' src="https://rare-gallery.com/uploads/posts/4519405-knight-armor-dark-background-fantasy-art.jpg" alt="" />
                            <div className="">
                                <h1 className='flex gap-2 items-center text-xl'>
                                    <p>Evgen Ledo</p>
                                    <UilSetting></UilSetting>

                                </h1>
                                <p className='text-sm'>@ledoteam</p>
                                <p className='text-[.7rem] text-gray-400'>Art Direction UX/UI DESIGNER Founder off AdzeDesign
                                </p>
                            </div>
                        </div>
                        <div className=" flex gap-5">
                            <button className='btn-green text-white dark:text-black dark:bg-greenyellow bg-blue-500'>+Add to Story</button>
                            <button className='btn-green dark:bg-fontGray bg-blue-500  text-white dark:text-white'>Edit Profile</button>
                        </div>
                    </div>
                    <div className=" dark:bg-bgmdark bg-bgmlight  ">
                        <hr className='border-gray-300 dark:border-bgdark' />
                        <div className="tab">
                            <div class="text-sm font-medium text-center text-gray-500  dark:border-gray-700">
                                <ul class="flex flex-wrap">
                                    <li onClick={() => {
                                        setTab('profile')
                                    }} class="mr-2">
                                        <Link to={'./'} class={`${tab === 'profile' ? 'text-blue-600 dark:text-greenyellow border-blue-600 dark:border-greenyellow' : 'border-transparent'} inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 dark:hover:border-gray-300 hover:border-black dark:hover:text-gray-300`}>Profile</Link>
                                    </li>
                                    <li onClick={() => {
                                        setTab('friends')
                                    }} class="mr-2">
                                        <Link to={'./friends'} class={`${tab === 'friends' ? 'text-blue-600 border-blue-600 dark:border-greenyellow dark:text-greenyellow' : 'border-transparent'} inline-block p-4    rounded-t-lg border-b-2  dark:hover:border-gray-300 hover:border-black dark:hover:text-gray-300`} >Friends</Link>
                                    </li>
                                    <li onClick={() => {
                                        setTab('gallery')
                                    }} class="mr-2">
                                        <Link to={'./gallery'} class={`${tab === 'gallery' ? 'text-blue-600 border-blue-600 dark:border-greenyellow dark:text-greenyellow' : 'border-transparent'} inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 dark:hover:border-gray-300 hover:border-black dark:hover:text-gray-300`}>Gallery</Link>
                                    </li>
                                    <li onClick={() => {
                                        setTab('product')
                                    }} class="mr-2">
                                        <Link to={'./product'} class={`${tab === 'product' ? 'text-blue-600 border-blue-600 dark:border-greenyellow dark:text-greenyellow' : 'border-transparent'} inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 dark:hover:border-gray-300 hover:border-black dark:hover:text-gray-300`}>Product</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
