import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import coverImg from '../assets/img/cover.jpg'
import { UilSetting } from '@iconscout/react-unicons'
import { UilImageV } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { UilBag } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilWifi } from '@iconscout/react-unicons'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { UilCamera } from '@iconscout/react-unicons'
//img
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
import { ProfileEditCover } from './../modals/ProfileEditCover';
import { ProflieEditAvatar } from './../modals/ProfileEditAvatar';
import axios from 'axios'
import isAdmin from '../assets/img/admin2.png'

export const ProfileCard = () => {
    //config
    const dispatch = useDispatch()

    const UserData = useSelector(state => state.UserReducer.viewingUser)
    const AuthData = useSelector(state => state.AuthReducer.user)
    const onlineUser = useSelector(state => state.OnlineUserReducer.onlineUser)

    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const [tab, setTab] = useState('profile')
    //upload cover image
    const [coverImgUpload, setCoverImgUpload] = useState(null)
    const [openUpload, setOpenUpload] = useState(false)
    const [openUploadAvatar, setOpenUploadAvatar] = useState(false)
    //another profile
    const [isPending, setPending] = useState(false)
    const [isAccept, setAccept] = useState(false)
    const handleConfirmReq = async (e) => {

        console.log("run")
        if (AuthData?._id) {
            if (UserData?.status === 'request') {
                setAccept(true)
                dispatch({ type: "UPDATE_INFO", payload: { status: 'friends' } })
                await axios.post('https://beta-server-8uoh.onrender.com/api/v1/friends/' + UserData?._id + '/confirm', { userid: AuthData?._id })
            } else {
                setPending(true)
                console.log(UserData, 'zxc')
                // update redux userview 
                dispatch({ type: "UPDATE_INFO", payload: { status: 'requesting' } })
                await axios.post('https://beta-server-8uoh.onrender.com/api/v1/friends/' + UserData._id + '/request', { userid: AuthData?._id })
            }

        }
    }
    const handleCreateConversation = async () => {
        await axios.post('https://beta-server-8uoh.onrender.com/api/v1/conversations/create/', {

            "userid": AuthData?._id,
            "otherid": UserData?._id


        })
    }
    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            <div className=" flex flex-col gap-4">
                <div className=" relative flex shadow-md overflow-hidden dark:bg-bgmdark bg-bgmlight  flex-col rounded-xl gap-[8rem] md:gap-17">
                    <div className="relative">
                        <img className='w-full  h-[350px] object-cover' src={UserData?._id === AuthData?._id ? AuthData?.coverimage || dfCover1 : UserData?.coverimage || dfCover1} alt="" />
                        {UserData?._id === AuthData?._id ?
                            <div className="absolute bottom-2 right-2 text-black dark:text-white flex gap-4">
                                <UilImageV className='z-50 p-1 dark:bg-bgmdark bg-bgmlight  rounded-sm' width='30px' height='30px'></UilImageV>
                                <UilEdit onClick={() => { setOpenUpload(prev => !prev) }} className='z-50 p-1 dark:bg-bgmdark bg-bgmlight  rounded-sm' width='30px' height='30px'></UilEdit>
                            </div>
                            : ''
                        }
                    </div>
                    <div className="p-4 flex-col flex md:flex-row items-center md:items-end justify-between absolute w-full bottom-14 md:bottom-20">
                        <div className=" flex-col flex md:flex-row  md:gap-4 items-center md:items-end text-black dark:text-white ml-0 md:ml-[10%]">
                            <div className="relative">
                                <img src={UserData?._id === AuthData?._id ? AuthData?.avatar || dfAvatar : UserData?._id !== AuthData?._id ? UserData?.avatar || dfAvatar : ''} className='   border-white border-[2px] dark:border-bgmdark  dark:border-[4px] w-[150px] h-[150px] md:w-[170px] md:rounded-lg rounded-full md:h-[230px] object-cover' alt="" />
                                <div className="md:hidden ">
                                    {onlineUser?.findIndex(user => user.userId === UserData?._id) !== -1 ?
                                        <div className="dot w-[15px] bottom-3 left-4 rounded-full first-line: bg-green-500 absolute h-[15px]"></div>
                                        :
                                        <div className="dot w-[15px] bottom-3 left-4 rounded-full    bg-red-600 absolute h-[15px]"></div>
                                    }
                                </div>

                                {UserData?._id === AuthData?._id ?
                                    <UilCamera onClick={() => { setOpenUploadAvatar(prev => !prev) }} className='rounded-full w-[40px] h-[40px] md:w-[40px] md:h-[40px] absolute bottom-1 right-1 md:bottom-3 md:right-3 bg-white dark:bg-black md:rounded-md p-1'></UilCamera>
                                    : ''
                                }
                            </div>

                            <div className="md:text-start text-center">
                                <h1 className=' ml-6 md:ml-0 flex gap-2 md:justify-start relative justify-center items-center text-xl'>
                                    <p className='capitalize'>{UserData?.firstname + ' ' + UserData?.lastname}</p>
                                    <UilSetting></UilSetting>

                                    <div className="hidden md:block">
                                        {onlineUser?.findIndex(user => user.userId === UserData?._id) !== -1 ?
                                            <div className="dot w-[15px]  rounded-full first-line: bg-green-500   h-[15px]"></div>
                                            :
                                            <div className="dot w-[15px]   rounded-full    bg-red-600   h-[15px]"></div>
                                        }
                                    </div>
                                    {
                                        UserData?.isAdmin &&
                                        <img width={'90px'} height={'90px'} className=' absolute left-[-4rem] md:left-[8rem] ' src={isAdmin} alt="" />
                                    }

                                </h1>
                                <p className='text-sm'>@{UserData?.username}</p>
                                <p className='text-[.7rem] text-gray-400'>{UserData?.desc}
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:flex gap-5">
                            {AuthData?._id === UserData?._id ?
                                <>

                                    <button className='btn-green text-white dark:text-black dark:bg-greenyellow bg-blue-500'>+Add to Story</button>
                                    <button className='btn-green dark:bg-fontGray bg-blue-500  text-white dark:text-white'>Edit Profile</button>
                                </>
                                : UserData?.status === 'friends' ?
                                    <>
                                        <button className='btn-green text-white dark:text-black dark:bg-greenyellow bg-blue-500'>Friend</button>
                                        <button className='btn-green dark:bg-fontGray bg-blue-500  text-white dark:text-white'
                                            onClick={() => { handleCreateConversation() }}
                                        >Chat</button>
                                    </>
                                    : UserData?.status === 'requesting' ?
                                        <>
                                            <button className='btn-green text-white dark:text-black dark:bg-greenyellow bg-blue-500'>Pending</button>
                                            <button className='btn-green dark:bg-fontGray bg-blue-500  text-white dark:text-white'
                                                onClick={() => { handleCreateConversation() }}
                                            >Chat</button>
                                        </>
                                        : UserData?.status === 'request' ?

                                            <>
                                                {isAccept ?

                                                    <>
                                                        <button className='btn-green text-white dark:text-black dark:bg-greenyellow bg-blue-500'>Friend</button>
                                                        <button className='btn-green dark:bg-fontGray bg-blue-500  text-white dark:text-white'
                                                            onClick={() => { handleCreateConversation() }}
                                                        >Chat</button>
                                                    </>

                                                    :
                                                    <>
                                                        <button onClick={() => { handleConfirmReq() }} className='btn-green text-white dark:text-black dark:bg-greenyellow bg-blue-500'>Accept Request</button>
                                                        <button className='btn-green dark:bg-fontGray bg-blue-500  text-white dark:text-white'
                                                            onClick={() => { handleCreateConversation() }}
                                                        >Chat</button>
                                                    </>
                                                }
                                            </>

                                            :
                                            <>
                                                {isPending ?

                                                    <>
                                                        <button className='btn-green text-white dark:text-black dark:bg-greenyellow bg-blue-500'>Pending</button>
                                                        <button className='btn-green dark:bg-fontGray bg-blue-500  text-white dark:text-white'
                                                            onClick={() => { handleCreateConversation() }}
                                                        >Chat</button>
                                                    </>

                                                    :
                                                    <>
                                                        <button onClick={() => { handleConfirmReq() }} className='btn-green text-white dark:text-black dark:bg-greenyellow bg-blue-500'>Add Friend</button>
                                                        <button className='btn-green dark:bg-fontGray bg-blue-500  text-white dark:text-white'
                                                            onClick={() => { handleCreateConversation() }}
                                                        >Chat</button>
                                                    </>
                                                }
                                            </>





                            }
                        </div>
                    </div>
                    <div className=" dark:bg-bgmdark bg-bgmlight h-[68px] ">
                        <hr className='border-gray-300 dark:border-bgdark' />
                        <div className="tab">
                            <div className="text-sm font-medium text-center text-gray-500  dark:border-gray-700">
                                <ul className="flex flex-wrap">
                                    <li onClick={() => {
                                        setTab('profile')
                                    }} className="mr-2">
                                        <Link to={'./'} className={`${tab === 'profile' ? 'text-blue-600 dark:text-greenyellow border-blue-600 dark:border-greenyellow' : 'border-transparent'} inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 dark:hover:border-gray-300 hover:border-black dark:hover:text-gray-300`}>Profile</Link>
                                    </li>
                                    <li onClick={() => {
                                        setTab('friends')
                                    }} className="mr-2">
                                        <Link to={'./friends'} className={`${tab === 'friends' ? 'text-blue-600 border-blue-600 dark:border-greenyellow dark:text-greenyellow' : 'border-transparent'} inline-block p-4    rounded-t-lg border-b-2  dark:hover:border-gray-300 hover:border-black dark:hover:text-gray-300`} >Friends</Link>
                                    </li>
                                    <li onClick={() => {
                                        setTab('gallery')
                                    }} className="mr-2">
                                        <Link to={'./gallery'} className={`${tab === 'gallery' ? 'text-blue-600 border-blue-600 dark:border-greenyellow dark:text-greenyellow' : 'border-transparent'} inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 dark:hover:border-gray-300 hover:border-black dark:hover:text-gray-300`}>Gallery</Link>
                                    </li>
                                    <li onClick={() => {
                                        setTab('product')
                                    }} className="mr-2">
                                        <Link to={'./product'} className={`${tab === 'product' ? 'text-blue-600 border-blue-600 dark:border-greenyellow dark:text-greenyellow' : 'border-transparent'} inline-block p-4 border-b-2  rounded-t-lg hover:text-gray-600 dark:hover:border-gray-300 hover:border-black dark:hover:text-gray-300`}>Product</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openUpload &&
                <ProfileEditCover setOpenUpload={setOpenUpload}></ProfileEditCover>


            }
            {openUploadAvatar &&
                <ProflieEditAvatar setOpenUploadAvatar={setOpenUploadAvatar}></ProflieEditAvatar>


            }
        </div>
    )
}
