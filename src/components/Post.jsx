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

export const Post = ({ postData }) => {
    const dispatch = useDispatch()
    const imgs = postData.media
    const AuthData = useSelector(state => state.AuthReducer.user)
    const userPosts = useSelector(state => state.PostReducer.userPosts)
    const isLoading = useSelector(state => state.PostReducer.isLoading)
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    const [allContent, setAllContent] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {

        const handleGetUserInfo = async () => {
            let res = await axios.get('http://localhost:8080/api/v1/users/' + postData.userid)
            let userData = await res.data

            setUserInfo(userData)

        }
        handleGetUserInfo()
        return () => {
            console.log('Unmounted Post Component');
        };
    }, [])


    const [likesCount, setLikesCount] = useState(0)
    const [heartStatus, setHeartStatus] = useState(false)
    useEffect(() => {

        const handleGetUserInfo = async () => {
            const isLiked = postData.likes.includes(AuthData._id)
            console.log('compare', isLiked)
            setHeartStatus(isLiked)
            setLikesCount(postData.likes.length)
        }
        handleGetUserInfo()
        return () => {
            console.log('Unmounted Post Component');
        };
    }, [userPosts, isLoading])

    const handleLikePost = async () => {
        if (!heartStatus) {
            await axios.put(`http://localhost:8080/api/v1/posts/${postData._id}/like`, { userid: AuthData?._id })
            setLikesCount(prev => prev + 1)
            setHeartStatus(true)
        } else {
            await axios.put(`http://localhost:8080/api/v1/posts/${postData._id}/unlike`, { userid: AuthData?._id })
            setLikesCount(prev => prev - 1)
            setHeartStatus(false)

        }
    }
    return (
        <>
            {console.log('render',)}
            {userInfo &&
                <div className={`${isDarkMode ? 'dark' : ''} shadow-lg`}>
                    <div className="  Post flex flex-col gap-4 dark:bg-bgmdark bg-bgmlight p-4 rounded-lg ">
                        <div className="info flex justify-between">
                            <div className="flex items-start gap-2 ">
                                <img width={'40px'} className='h-[40px] rounded-full ' src={userInfo?.avatar || dfAvatar} alt="" />
                                <div className="">
                                    <h1 className='text-gray-500 text-sm flex items-center gap-2'>@{userInfo.username} <UilCheck className='bg-blue-500 rounded-full w-[14px] h-[14px] text-white dark:text-white' ></UilCheck></h1>
                                    <p className='text-black dark:text-white flex items-center gap-2'>{userInfo.firstname + " " + userInfo.lastname} <span className='dot w-1 h-1 rounded-full dark:bg-greenyellow bg-blue-500'></span> <span className='dark:text-greenyellow text-blue-500 text-sm'> {postData.createdAt}</span> </p>
                                </div>
                            </div>
                            <UilEllipsisV className='text-black '></UilEllipsisV>

                        </div>
                        <p onClick={() => {
                            setAllContent(prev => !prev)
                        }} className={`dark:text-gray-300 text-gray-800 text-sm ${allContent ? '' : 'overflow-hidden text-ellipsis'}`} style={{ minHeight: '3em', display: '-webkit-box', WebkitBoxOrient: `${allContent ? '' : 'vertical'}`, WebkitLineClamp: `${allContent ? '' : 2}` }}>
                            {postData.content} {'-' + userInfo._id}
                        </p>
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
                                {heartStatus ? <img onClick={() => {
                                    handleLikePost()
                                }} src={heartImg} alt="" width={'40px'} /> :
                                    <UilHeart onClick={() => {
                                        handleLikePost()
                                    }} fill='red ' width="35px" height="35px" ></UilHeart>
                                }
                                <UilCommentAltDots width="35px" height="35px"></UilCommentAltDots>
                                <UilShareAlt width="35px" height="35px"></UilShareAlt>
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
