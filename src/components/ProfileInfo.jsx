import React, { useRef, useState } from 'react'
import { PostShare } from './PostShare'
import { Posts } from './Posts';
import { InfoCard } from './InfoCard';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export const ProfileInfo = () => {
    const isLoading = useSelector(state => state.PostReducer.isLoading)
    const UserData = useSelector(state => state.UserReducer.viewingUser)

    const [profilePage, setProfilePage] = useState(2)
    const [isRunning, setIsRunning] = useState(false)
    const dispatch = useDispatch()

    const listInnerRef = useRef();
    const onScroll = async () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            // fetch more
            if (scrollTop + clientHeight === scrollHeight) {
                // TO SOMETHING HERE
                if (!isRunning) {
                    setIsRunning(true)
                    dispatch({ type: "USER_POST_STARTING" })
                    let res = await axios.get(`https://beta-server-8uoh.onrender.com/api/v1/posts/${UserData?._id}/${profilePage}`)
                    let newData = await res.data
                    if (newData.length === 0) {
                        return
                    }
                    dispatch({ type: "USER_POST_MORE", payload: newData })
                    setProfilePage(prev => prev + 1)
                    setIsRunning(false)
                }


            }
        }
    };
    return (

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-4 ">
            <InfoCard></InfoCard>
            <div className="flex flex-col gap-4 col-span-2" >

                <div className="overflow-y-scroll h-[90vh]" onScroll={() => onScroll()} ref={listInnerRef}>
                    <Posts></Posts>
                    {isLoading && <p>...Loading</p>}
                </div>
            </div>
        </div>

    )
}
