import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilShop } from '@iconscout/react-unicons'
import { UilHipchat } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';
import { Notifications } from './../modals/Notifications';
import { useDispatch, useSelector } from 'react-redux'

export const Nav = () => {
    const [acticeIcon, setActiveIcon] = useState('home')
    const [isOpenSetting, setIsOpenSetting] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const dispatch = useDispatch()
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    const handleToggle = () => {
        setIsDarkTheme(!isDarkTheme);
        isDarkTheme ?
            dispatch({ type: 'OFF' }) :
            dispatch({ type: 'ON' })


    };
    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            <div className=" bg-bglight dark:bg-bgdark">
                <div className="px-4 flex justify-between py-2 text-2xl text-black dark:text-white md:hidden">
                    <Link to={'../'} >               <UilFacebook width="50px" height="50px" className=' text-blue-500 dark:text-greenyellow '></UilFacebook>
                    </Link>
                    <p>ss</p>
                </div>
                <div className="hidden md:relative  md:grid grid-cols-1 md:grid-cols-4 py-4 items-center px-4">
                    <div className=" hidden md:flex justify-between items-center text-black dark:text-white gap-4">
                        <Link to={'../'} >               <UilFacebook width="50px" height="50px" className=' text-blue-500 dark:text-greenyellow '></UilFacebook>
                        </Link>

                        <input className=' bg-bgmlight dark:bg-bgmdark shadow-md  rounded-2xl p-2 w-full' type="text" placeholder='# Explore' />
                    </div>
                    <div className="col-span-2 h-[39px] flex flex-row justify-center gap-10 text-black dark:text-white">
                        <div className="flex flex-col items-center gap-2">
                            <UilEstate onClick={() => {
                                setActiveIcon((prev) => 'home')
                            }} className={` ${acticeIcon === 'home' ? 'text-blue-500 dark:text-greenyellow         delay-300 ' : 'text-black dark:text-white'}`}>
                            </UilEstate>
                            <div className={`${acticeIcon === 'home' ? 'w-1 h-1 rounded-full        delay-300 bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <UilShop onClick={() => {
                                setActiveIcon((prev) => 'market')
                            }} className={` ${acticeIcon === 'market' ? 'text-blue-500 dark:text-greenyellow        delay-300' : 'text-black dark:text-white'}`}>
                            </UilShop>
                            <div className={`${acticeIcon === 'market' ? 'w-1 h-1 rounded-full        delay-300 bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <UilHipchat onClick={() => {
                                setActiveIcon((prev) => 'message')
                            }} className={` ${acticeIcon === 'message' ? 'text-blue-500 dark:text-greenyellow        delay-300' : 'text-black dark:text-white'}`}>
                            </UilHipchat>
                            <div className={`${acticeIcon === 'message' ? 'w-1 h-1 rounded-full        delay-300 bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <UilUsersAlt onClick={() => {
                                setActiveIcon((prev) => 'group')
                            }} className={` ${acticeIcon === 'group' ? 'text-blue-500 dark:text-greenyellow        delay-300' : 'text-black dark:text-white'}`}>
                            </UilUsersAlt>
                            <div className={`${acticeIcon === 'group' ? 'w-1 h-1 rounded-full        delay-300 bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                        </div>


                    </div>
                    <div className="hidden relative md:flex align-middle  items-center gap-2 text-black dark:text-white  rounded-xl px-4 py-2 justify-end " >

                        <div class="relative items-center inline-block text-left">
                            <div>
                                <button onClick={() => { setIsOpenSetting(prev => !prev) }} type="button" class=" border-0 inline-flex text-black dark:text-white dark:bg-bgmdark items-center w-full justify-center gap-x-1.5 rounded-md bg-bgmlight  shadow-bgmdark px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset  hover:bg-fontGray" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <img className='rounded-full h-[40px]' width={'40px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                                    Evgen Ledo
                                    <svg class={`-mr-1 h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-black'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>


                            {isOpenSetting &&
                                <div className={`${isDarkMode ? 'dark' : ''}`}>
                                    <div class={` absolute   right-0 z-10 mt-2 w-56 origin-top-right text-black dark:text-white rounded-md bg-bgmlight dark:bg-bgmdark shadow-md  ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                        <div className="py-1" role="none">
                                            <a href="#" className="text-black dark:text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">
                                                Account
                                            </a>
                                            <a href="#" className="text-black dark:text-white block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">
                                                Support
                                            </a>
                                            <a href="#" className="text-black dark:text-white  px-4 py-2 text-sm flex justify-between" role="menuitem" tabIndex="-1" id="menu-item-2">
                                                <p>Theme</p>
                                                <button
                                                    id="toggleButton"
                                                    className={`  -all        toggle-button w-12 h-6 rounded-full p-1 flex items-center  ${isDarkTheme ? 'bg-fontGray justify-end' : 'bg-gray-300 justify-start'
                                                        }`}
                                                    onClick={handleToggle}
                                                >
                                                    <div
                                                        id="toggleCircle"
                                                        className={` bg-white w-4 h-4 rounded-full shadow-md   -all      ${isDarkTheme ? 'ml-1' : 'mr-1'}`}
                                                    ></div>
                                                </button>
                                            </a>
                                            <form method="POST" action="#" role="none">
                                                <button
                                                    type="submit"
                                                    className="text-black dark:text-white block w-full px-4 py-2 text-left text-sm"
                                                    role="menuitem"
                                                    tabIndex="-1"
                                                    id="menu-item-3"
                                                >
                                                    Sign out
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <Notifications></Notifications>


                    </div>

                </div>
                <div className="fixed rounded-xl  dark:bg-bgmdark bg-bgmlight shadow-md  bottom-0 left-2 right-2 md:hidden  grid grid-cols-1 md:grid-cols-4 py-4 items-center px-4">
                    <div className=" hidden md:flex justify-between items-center text-black dark:text-white gap-4">
                        <Link to={'../'} >               <UilFacebook width="50px" height="50px" className='text-blue-500 dark:text-greenyellow '></UilFacebook>
                        </Link>

                        <input className='bg-bgmdark dark:bg-bgmlight shadow-md rounded-2xl p-2 w-full' type="text" placeholder='# Explore' />
                    </div>
                    <div className="col-span-2 h-[42px] flex flex-row justify-center gap-10 text-black dark:text-white">
                        <div className="flex flex-col items-center gap-2">
                            <UilEstate onClick={() => {
                                setActiveIcon((prev) => 'home')
                            }} className={` ${acticeIcon === 'home' ? 'text-blue-500 dark:text-greenyellow         delay-300 ' : 'text-black dark:text-white'}`}>
                            </UilEstate>
                            <div className={`${acticeIcon === 'home' ? 'w-1 h-1 rounded-full        delay-300 bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <UilShop onClick={() => {
                                setActiveIcon((prev) => 'market')
                            }} className={` ${acticeIcon === 'market' ? 'text-blue-500 dark:text-greenyellow        delay-300' : 'text-black dark:text-white'}`}>
                            </UilShop>
                            <div className={`${acticeIcon === 'market' ? 'w-1 h-1 rounded-full        delay-300 bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <UilHipchat onClick={() => {
                                setActiveIcon((prev) => 'message')
                            }} className={` ${acticeIcon === 'message' ? 'text-blue-500 dark:text-greenyellow        delay-300' : 'text-black dark:text-white'}`}>
                            </UilHipchat>
                            <div className={`${acticeIcon === 'message' ? 'w-1 h-1 rounded-full        delay-300 bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <UilUsersAlt onClick={() => {
                                setActiveIcon((prev) => 'group')
                            }} className={` ${acticeIcon === 'group' ? 'text-blue-500 dark:text-greenyellow        delay-300' : 'text-black dark:text-white'}`}>
                            </UilUsersAlt>
                            <div className={`${acticeIcon === 'group' ? 'w-1 h-1 rounded-full        delay-300 bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                        </div>


                    </div>
                    <div className="hidden md:flex align-middle  items-center gap-2 text-black dark:text-white flex rounded-xl px-4 py-2 justify-end" >
                        <div className="bg-bgmdark dark:bg-bgmlight shadow-md flex px-3  rounded-lg items-center ">
                            <img className='rounded-full object-cover h-[40px]' width={'40px'} src="  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                            Evgen Ledo
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
