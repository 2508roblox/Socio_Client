import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import dfAvatar from '../assets/img/defaultAvatar.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AnotherUserCard = ({ data }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const AuthData = useSelector(state => state.AuthReducer?.user)
    let [newDataType, setType] = useState('')
    const [isAccept, setIsAccept] = useState(false)
    const handleAccept = async (e) => {
        e.preventDefault()
        setIsAccept(true)
        //sent req
        setType('requesting')

        await axios.post('https://beta-server-8uoh.onrender.com/api/v1/friends/' + data._id + '/request', { userid: AuthData?._id })

    }
    const handleLink = (e) => {
        //get viewing user infomation
        dispatch({ type: 'COMMUNITY_VIEW_SUCCESSFULLY', payload: { ...data, status: newDataType } })
        navigate('../../profile');

    }
    return (
        <div className={`${isDarkMode ? 'dark' : ' '}     `}>

            <div className="mb-4   shadow-lg flex flex-col gap-2  dark:bg-btnGrayLight bg-bglight rounded-xl  ">
                <img onClick={handleLink} className='rounded-md w-[240px] h-[200px] object-cover' src={data?.avatar || dfAvatar} alt="" />
                <div className=" p-2">
                    <h1 className='capitalize'>{data?.firstname + " " + data?.lastname}</h1>


                </div>

                {!isAccept ?

                    <button className='btn-green text-white dark:text-black bg-blue-500 dark:bg-greenyellow w-[12rem]' onClick={handleAccept}>Add friend</button>
                    :
                    <button className='btn-green text-white dark:text-black bg-blue-500 dark:bg-greenyellow w-[12rem]'>Pending...</button>

                }
            </div>
        </div>
    )
}
