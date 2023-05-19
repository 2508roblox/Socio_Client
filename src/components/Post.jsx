import React, { useEffect, useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilCheck } from '@iconscout/react-unicons'
import { UilHeart } from '@iconscout/react-unicons'
import { UilCommentAltDots } from '@iconscout/react-unicons'
import { UilShareAlt } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'
import { UilImagePlus } from '@iconscout/react-unicons'
import { UilFile } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux'
import heartImg from '../assets/img/heart.png'
import axios from 'axios'
import dfAvatar from '../assets/img/defaultAvatar.png';
import moment from 'moment'

export const Post = ({ postData }) => {
    const dispatch = useDispatch()
    const imgs = postData.media
    const AuthData = useSelector(state => state.AuthReducer.user)
    const viewingUser = useSelector(state => state.UserReducer.viewingUser)
    const isLoading = useSelector(state => state.PostReducer.isLoading)
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const onlineUser = useSelector(state => state.OnlineUserReducer.onlineUser)
    //temp data
    const TempUsersData = useSelector(state => state.TempDataReducer.usersData)

    const [allContent, setAllContent] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {


        const handleGetUserInfo = async () => {
            //performance
            if (AuthData._id === postData.userid) {
                setUserInfo(AuthData)
            } else if (postData.userid === viewingUser?._id) {
                setUserInfo(viewingUser)

            } else {
                let existTemp = TempUsersData.find(e => e._id === postData.userid)
                if (existTemp) {
                    setUserInfo(existTemp)
                } else {

                    let res = await axios.get('https://beta-server-8uoh.onrender.com/api/v1/users/' + postData.userid)
                    let userData = await res.data
                    dispatch({ type: 'SAVE_USER_INFO', payload: userData })
                    setUserInfo(userData)
                }
            }

        }
        handleGetUserInfo()
        return () => {
            console.log('')
        }
    }, [])


    const [likesCount, setLikesCount] = useState(0)
    const [heartStatus, setHeartStatus] = useState(false)
    useEffect(() => {
        console.log('fetch')
        const handleGetUserInfo = async () => {
            const isLiked = postData.likes.includes(AuthData._id)
            setHeartStatus(isLiked)
            setLikesCount(postData.likes.length)
        }
        handleGetUserInfo()
        return () => {
            console.log('')
        }
    }, [])

    const handleLikePost = async () => {
        if (!heartStatus) {
            setLikesCount(prev => prev + 1)
            setHeartStatus(true)
            await axios.put(`https://beta-server-8uoh.onrender.com/api/v1/posts/${postData._id}/like`, { userid: AuthData?._id })
        } else {
            setLikesCount(prev => prev - 1)
            setHeartStatus(false)
            await axios.put(`https://beta-server-8uoh.onrender.com/api/v1/posts/${postData._id}/unlike`, { userid: AuthData?._id })

        }
    }
    return (
        <>
            {userInfo &&
                <div className={`${isDarkMode ? 'dark' : ''} shadow-lg`}>
                    <div className="  Post flex flex-col gap-4 dark:bg-bgmdark bg-bgmlight p-4 rounded-lg ">
                        <div className="info flex justify-between">
                            <div className="flex items-start gap-2 ">
                                <div className="relative">
                                    {onlineUser?.findIndex(user => user.userId === userInfo?._id) !== -1 ?
                                        <div className="dot w-[9px] bottom-1 right-0 rounded-full border-[1px] border-white bg-green-500 absolute h-[9px]"></div>
                                        :
                                        <div className="dot w-[9px] bottom-1 right-0 rounded-full border-[1px] border-white bg-red-600 absolute h-[9px]"></div>
                                    }

                                    <img width={'40px'} className='h-[40px] rounded-full ' src={userInfo?.avatar || dfAvatar} alt="" />
                                </div>

                                <div className="">
                                    <h1 className='text-gray-500 text-sm flex items-center gap-2'>@{userInfo.username} <UilCheck className='bg-blue-500 rounded-full w-[14px] h-[14px] text-white dark:text-white' ></UilCheck></h1>
                                    <p className='text-black dark:text-white flex items-center capitalize gap-2'>{userInfo.firstname + " " + userInfo.lastname} <span className='dot w-1 h-1 rounded-full dark:bg-greenyellow bg-blue-500'></span> <span className='dark:text-greenyellow text-blue-500 text-sm'> {moment(postData.createdAt).fromNow() === 'a few seconds ago' ? 'just now' : moment(postData.createdAt).fromNow()}</span> </p>
                                </div>
                            </div>
                            <UilEllipsisV className='text-black '></UilEllipsisV>

                        </div>
                        {
                            postData.content &&
                            <p onClick={() => {
                                setAllContent(prev => !prev)
                            }} className={`dark:text-gray-300 text-gray-800 text-sm ${allContent ? '' : 'overflow-hidden text-ellipsis'}`} style={{ minHeight: '3em', display: '-webkit-box', WebkitBoxOrient: `${allContent ? '' : 'vertical'}`, WebkitLineClamp: `${allContent ? '' : 2}` }}>
                                {postData.content}
                            </p>
                        }

                        <div className={`grid ${imgs.length === 1 ? 'grid-cols-1' : imgs.length === 2 ? 'grid-cols-2' : 'grid-cols-2'} gap-2`}>
                            {imgs && imgs.length > 0 && imgs.map(img => {
                                return (
                                    <img src={img} alt="" className='rounded-lg w-full' />
                                )
                            })}
                        </div>

                        <div className="icon-btn flex flex-row justify-between">
                            <div className="text-black dark:text-white flex  items-center gap-4">
                                {likesCount}
                                {heartStatus ? <p className='mb-[6px]'

                                    onClick={() => {
                                        handleLikePost()
                                    }}
                                >❤️</p> : <p className='mb-[6px]'
                                    onClick={() => {
                                        handleLikePost()
                                    }}
                                >🤍</p>}

                                <UilCommentAltDots width="20px" height="20px"></UilCommentAltDots>
                                <UilShareAlt width="20px" height="20px"></UilShareAlt>
                            </div>
                            <button className='dark:bg-greenyellow bg-blue-500 text-white dark:text-black p-1  px-2 rounded-lg'>Hire me</button>
                        </div>
                        <hr className='dark:border-bgdark border-gray-300' />
                        <div className="flex items-center justify-between gap-4">
                            <img className='rounded-full h-[50px] ' width={'50px'} src={AuthData?.avatar || dfAvatar} alt="" />
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

            }
        </>
    )
}
