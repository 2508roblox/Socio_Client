import React, { useEffect, useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilShop } from '@iconscout/react-unicons'
import { UilHipchat } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { Link, useNavigate } from 'react-router-dom';
import { Notifications } from './../modals/Notifications';
import { useDispatch, useSelector } from 'react-redux'
import dfAvatar from '../assets/img/defaultAvatar.png';
import dfCover1 from '../assets/img/df_cover1.jpg';
import dfCover2 from '../assets/img/df_cover2.jpg';
import dfCover3 from '../assets/img/df_cover3.jpg';
import dfCover4 from '../assets/img/df_cover4.jpg';
import dfCover5 from '../assets/img/df_cover5.jpg';
import dfCover6 from '../assets/img/df_cover6.jpg';
import dfCover7 from '../assets/img/df_cover7.jpg';
import dfCover8 from '../assets/img/df_cover8.jpg';
import dfCover9 from '../assets/img/df_cover9.jpg';
import dfCover10 from '../assets/img/df_cover10.jpg';
import logo from '../assets/img/logo.png'
import logo2 from '../assets/img/logodark.png'
import logoli from '../assets/img/newlogolight.png'
import logoda from '../assets/img/newlogodark.png'
export const Nav = () => {

    //config
    const dispatch = useDispatch()
    //state

    const [isOpenSetting, setIsOpenSetting] = useState(false)
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const [isDarkTheme, setIsDarkTheme] = useState(isDarkMode);
    // redux
    const UserData = useSelector(state => state.AuthReducer.user)
    const navigate = useNavigate();
    const AuthData = useSelector(state => state.AuthReducer.user)
    const isActive = useSelector(state => state.NavReducer.isActive)


    // effect 

    //handle
    const handleToggle = () => {
        setIsDarkTheme(!isDarkTheme);
        isDarkTheme ?
            dispatch({ type: 'OFF' }) :
            dispatch({ type: 'ON' })


    };
    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            {
                AuthData?._id ? <div className=" bg-bglight dark:bg-bgdark">
                    {/* mobile app header top */}
                    <div className="px-4 flex justify-between py-2 text-2xl text-black dark:text-white md:hidden">
                        <Link to={'../'} >
                            {/* <UilFacebook width="50px" height="50px" className=' text-blue-500 dark:text-greenyellow '></UilFacebook> */}
                            <img width="50px" height="50px" src={logo} alt="" />
                        </Link>
                        <div className="flex  justify-between">
                            <Notifications></Notifications>
                            <div className="relative">

                                <svg onClick={() => { setIsOpenSetting(prev => !prev) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                {isOpenSetting &&
                                    <div className={`${isDarkMode ? 'dark' : ''}`}>
                                        <div className={` absolute   right-0 z-50 mt-2 w-56 origin-top-right text-black dark:text-white rounded-md bg-bgmlight dark:bg-bgmdark shadow-md  ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
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

                                                <Link to={'../login'}>
                                                    <button
                                                        onClick={() => {
                                                            dispatch({ type: "LOGOUT" })
                                                        }}

                                                        className="text-black dark:text-white block w-full px-4 py-2 text-left text-sm"


                                                    >
                                                        Sign out
                                                    </button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:relative  md:grid grid-cols-1 md:grid-cols-4 py-4 items-center px-4">
                        <div className=" hidden md:flex justify-between items-center text-black dark:text-white gap-4">
                            <Link to={'../'} onClick={() => {
                                dispatch({ type: 'HOME' })

                            }}>
                                {isDarkTheme ?
                                    <img width="60px" height="90px" src={logoda} alt="" />

                                    :
                                    <img width="60px" height="90px" src={logoli} alt="" />

                                }

                            </Link>

                            <input className=' bg-bgmlight dark:bg-bgmdark shadow-md  rounded-2xl p-2 w-full' type="text" placeholder='# Explore' />
                        </div>
                        <div className="col-span-2 h-[39px] flex flex-row justify-center gap-10 text-black dark:text-white">
                            <div className="flex flex-col items-center gap-2">
                                <Link to={'../'}>
                                    <UilEstate onClick={() => {
                                        dispatch({ type: 'HOME' })
                                    }} className={` ${isActive === 'home' ? 'text-blue-500 dark:text-greenyellow          ' : 'text-black dark:text-white'}`}>
                                    </UilEstate>
                                </Link>
                                <div className={`${isActive === 'home' ? 'w-1 h-1 rounded-full         bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link to={'../ecommerce'}>
                                    <UilShop onClick={() => {
                                        dispatch({ type: 'MARKETPLACE' })
                                    }} className={` ${isActive === 'marketplace' ? 'text-blue-500 dark:text-greenyellow        ' : 'text-black dark:text-white'}`}>
                                    </UilShop>
                                </Link>
                                <div className={`${isActive === 'marketplace' ? 'w-1 h-1 rounded-full         bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link to={'../message'}>
                                    <UilHipchat onClick={() => {
                                        dispatch({ type: 'CHAT' })

                                    }} className={` ${isActive === 'chat' ? 'text-blue-500 dark:text-greenyellow        ' : 'text-black dark:text-white'}`}>
                                    </UilHipchat>
                                </Link>
                                <div className={`${isActive === 'chat' ? 'w-1 h-1 rounded-full         bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link to={'../community'}>
                                    <UilUsersAlt onClick={() => {
                                        dispatch({ type: 'PEOPLE' })

                                    }} className={` ${isActive === 'people' ? 'text-blue-500 dark:text-greenyellow        ' : 'text-black dark:text-white'}`}>
                                    </UilUsersAlt>
                                </Link>
                                <div className={`${isActive === 'people' ? 'w-1 h-1 rounded-full         bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                            </div>


                        </div>
                        <div className=" hidden relative md:flex align-middle  items-center gap-2 text-black dark:text-white  rounded-xl px-4 py-2 justify-end " >

                            {UserData ?

                                <div className="relative items-center inline-block text-left">
                                    <div>
                                        <button onClick={() => { setIsOpenSetting(prev => !prev) }} type="button" className="z-50 border-0 inline-flex text-black dark:text-white dark:bg-bgmdark items-center w-full justify-center gap-x-1.5 rounded-md bg-bgmlight  shadow-bgmdark px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset dark:hover:bg-gray-700  hover:bg-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                            <img className='rounded-full h-[40px]' width={'40px'} src={UserData.avatar || dfAvatar} alt="" />
                                            {UserData.firstname + " " + UserData.lastname}
                                            <svg className={`-mr-1 h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-black'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>


                                    {isOpenSetting &&
                                        <div className={`${isDarkMode ? 'dark' : ''}`}>
                                            <div className={` absolute   right-0 z-50 mt-2 w-56 origin-top-right text-black dark:text-white rounded-md bg-bgmlight dark:bg-bgmdark shadow-md  ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
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
                                                        <Link to={'../login'} onClick={() => { dispatch({ type: "LOGOUT" }) }}>
                                                            <button
                                                                type="submit"
                                                                className="text-black dark:text-white block w-full px-4 py-2 text-left text-sm"
                                                                role="menuitem"
                                                                tabIndex="-1"
                                                                id="menu-item-3"
                                                            >
                                                                Sign out
                                                            </button>
                                                        </Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                :
                                <Link to={'../login'}>
                                    <button className='btn-green bg-blue-500 dark:bg-greenyellow text-white dark:text-black'>Login</button>
                                </Link>
                            }
                            <Notifications></Notifications>


                        </div>

                    </div>
                    {/* {moblie nav} */}

                    <div className="fixed rounded-xl  dark:bg-bgmdark bg-bgmlight shadow-md  bottom-0 left-2 right-2 md:hidden  grid grid-cols-1 md:grid-cols-4 py-4 items-center px-4">
                        <div className=" hidden md:flex justify-between items-center text-black dark:text-white gap-4">
                            <Link to={'../'} onClick={() => {
                                dispatch({ type: 'HOME' })

                            }}>               <UilFacebook width="50px" height="50px" className='text-blue-500 dark:text-greenyellow '></UilFacebook>
                            </Link>

                            <input className='bg-bgmdark dark:bg-bgmlight shadow-md rounded-2xl p-2 w-full' type="text" placeholder='# Explore' />
                        </div>
                        <div className="col-span-2 h-[42px] flex flex-row justify-center gap-10 text-black dark:text-white">
                            <div className="flex flex-col items-center gap-2">
                                <Link to={'../'}>
                                    <UilEstate onClick={() => {
                                        dispatch({ type: 'HOME' })
                                    }} className={` ${isActive === 'home' ? 'text-blue-500 dark:text-greenyellow          ' : 'text-black dark:text-white'}`}>
                                    </UilEstate>
                                </Link>
                                <div className={`${isActive === 'home' ? 'w-1 h-1 rounded-full         bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link to={'../ecommerce'}>
                                    <UilShop onClick={() => {
                                        dispatch({ type: 'MARKETPLACE' })
                                    }} className={` ${isActive === 'marketplace' ? 'text-blue-500 dark:text-greenyellow        ' : 'text-black dark:text-white'}`}>
                                    </UilShop>
                                </Link>
                                <div className={`${isActive === 'marketplace' ? 'w-1 h-1 rounded-full         bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link to={'../message'}>
                                    <UilHipchat onClick={() => {
                                        dispatch({ type: 'CHAT' })
                                    }} className={` ${isActive === 'chat' ? 'text-blue-500 dark:text-greenyellow        ' : 'text-black dark:text-white'}`}>
                                    </UilHipchat>
                                </Link>
                                <div className={`${isActive === 'chat' ? 'w-1 h-1 rounded-full         bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Link to={'../community'}>
                                    <UilUsersAlt onClick={() => {
                                        dispatch({ type: 'PEOPLE' })
                                    }} className={` ${isActive === 'people' ? 'text-blue-500 dark:text-greenyellow        ' : 'text-black dark:text-white'}`}>
                                    </UilUsersAlt>
                                </Link>
                                <div className={`${isActive === 'people' ? 'w-1 h-1 rounded-full         bg-blue-500 dark:bg-greenyellow' : 'w-0 h-0 bg-transparent'}`}></div>
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
                    :
                    // welcome nav
                    <>
                        <div className="px-[2rem] lg:px-[2rem] xl:px-[10rem]  md:relative justify-between  flex py-4 items-center  ">
                            <div className="   md:flex justify-between items-center text-black dark:text-white gap-4">
                                <Link to={'../'} >
                                    {isDarkTheme ?
                                        <img width="40px" height="90px" src={logoda} alt="" />

                                        :
                                        <img width="40px" height="90px" src={logoli} alt="" />

                                    }

                                </Link>
                                <h1 className='hidden lg:block text-black dark:text-white text-[1.8rem]'>Socio</h1>
                            </div>

                            <div className="   relative flex align-middle  items-center gap-2 text-black dark:text-white  rounded-xl px-4 py-2 justify-end " >
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
                                {UserData ?

                                    <div className="relative items-center  text-left flex flex-row">
                                        <div>
                                            <button onClick={() => { setIsOpenSetting(prev => !prev) }} type="button" className="z-50 border-0 inline-flex text-black dark:text-white dark:bg-bgmdark items-center w-full justify-center gap-x-1.5 rounded-md bg-bgmlight  shadow-bgmdark px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset dark:hover:bg-gray-700  hover:bg-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                <img className='rounded-full h-[40px]' width={'40px'} src={UserData.avatar || dfAvatar} alt="" />
                                                {UserData.firstname + " " + UserData.lastname}
                                                <svg className={`-mr-1 h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-black'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>


                                        {isOpenSetting &&
                                            <div className={`${isDarkMode ? 'dark' : ''}`}>
                                                <div className={` absolute   right-0 z-50 mt-2 w-56 origin-top-right text-black dark:text-white rounded-md bg-bgmlight dark:bg-bgmdark shadow-md  ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
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
                                                            <Link to={'../login'} onClick={() => { dispatch({ type: "LOGOUT" }) }}>
                                                                <button
                                                                    type="submit"
                                                                    className="text-black dark:text-white block w-full px-4 py-2 text-left text-sm"
                                                                    role="menuitem"
                                                                    tabIndex="-1"
                                                                    id="menu-item-3"
                                                                >
                                                                    Sign out
                                                                </button>
                                                            </Link>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    :
                                    <Link to={'../login'}>
                                        <button className='btn-green bg-blue-500 dark:bg-greenyellow text-white dark:text-black'>Login</button>
                                    </Link>
                                }



                            </div>

                        </div>
                    </>
            }
        </div>
    )
}
