import React, { useEffect, useState } from 'react'
import { AnotherUserCard } from './AnotherUserCard';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const FriendsRecommended = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const AuthData = useSelector(state => state.AuthReducer?.user)
    const [recommenedData, setRecommenedData] = useState()
    useEffect(() => {
        const getData = async () => {
            let res = await axios.get(`https://beta-server-8uoh.onrender.com/api/v1/friends/${AuthData?._id}/allnonfriends/1`)
            let newData = await res.data
            setRecommenedData(newData)
        }
        getData()
    }, [])
    return (
        <div className={`${isDarkMode ? 'dark' : ''}shadow-2xl `}>
            <div className="  dark:text-white  dark:bg-bgmdark bg-bgmlight  rounded-lg p-4 flex gap-2 flex-col">
                <h1>Recommended</h1>
                <div className="flex overflow-x-scroll w-full gap-4   ">
                    {recommenedData && recommenedData.length > 0 &&
                        recommenedData.map(user => {
                            return <>
                                <AnotherUserCard data={user} key={user?._id}></AnotherUserCard>

                            </>
                        })
                    }



                </div>
            </div>
        </div>

    )
}
