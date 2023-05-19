import React, { useRef, useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { PostShare } from './PostShare';
import { Posts } from './Posts';
import { FriendsRecommended } from './FriendsRecommended';
import { useSelector, useDispatch } from 'react-redux';
import { Story } from './Story';
import { CreateStory } from './CreateStory';
import storyData from '../data/Story'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
export const HomeCenter = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const isLoading = useSelector(state => state.PostReducer.isLoading)
    const AuthData = useSelector(state => state.AuthReducer.user)
    const UserData = useSelector(state => state.UserReducer.viewingUser)


    const listInnerRef = useRef();
    const location = useLocation();
    const dispatch = useDispatch()
    const [pageNum, setPageNum] = useState(2)
    const [isRunning, setIsRunning] = useState(false)
    const currentPath = location.pathname;
    const onScroll = async () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            // fetch more
            if (scrollTop + clientHeight === scrollHeight) {
                // TO SOMETHING HERE
                console.log('Reached bottom')
                if (currentPath === '/' && !isRunning) {
                    setIsRunning(true)
                    dispatch({ type: "IS_TIMELINE" })
                    let res = await axios.get(`https://beta-server-8uoh.onrender.com/api/v1/posts/${AuthData?._id}/timeline/${pageNum}`)
                    let newData = await res.data
                    if (newData.length === 0) {
                        return
                    }
                    dispatch({ type: "TIMELINE_MORE", payload: newData })
                    setPageNum(prev => prev + 1)
                    setIsRunning(false)



                }
            }
        };
    }
    return (

        <div className={`${isDarkMode ? 'dark' : ''} md:col-span-3 xl:col-span-3`}>

            <div className="flex pt-0 flex-col col-span-3 gap-4 overflow-y-scroll h-[92vh]" onScroll={() => onScroll()} ref={listInnerRef}>

                <div className="">
                    <div className=" flex gap-2 float-left w-full overflow-y-scroll  " >
                        <CreateStory></CreateStory>
                        {storyData && storyData.map(data => {
                            return <Story story={data.story} avatar={data.avatar}></Story>
                        })}

                    </div>
                </div>

                <PostShare></PostShare>
                <Posts></Posts>
                {isLoading && <p>...Loading</p>}
                <FriendsRecommended></FriendsRecommended>

            </div>
        </div>
    )
}
