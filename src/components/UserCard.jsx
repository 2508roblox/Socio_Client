import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import dfAvatar from '../assets/img/defaultAvatar.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const UserCard = ({ data, dataType }) => {
    let [newDataType, setType] = useState(dataType)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const AuthData = useSelector(state => state.AuthReducer.user)
    //online
    const onlineUser = useSelector(state => state.OnlineUserReducer.onlineUser)

    // req, requesting, friends
    const [userData, setUserData] = useState(null)
    // state on click
    const [addFriend, setAddFriend] = useState(false)
    const [isConfirmed, setIsConFIrmed] = useState(false)
    const [isRemoved, setIsRemoved] = useState(false)

    //handle
    //- all non friends

    const handleFriendRequest = async (e) => {


        e.preventDefault()
        if (AuthData?._id) {

            setAddFriend(true)
            setType('requesting')
            await axios.post('https://beta-server-8uoh.onrender.com/api/v1/friends/' + data._id + '/request', { userid: AuthData?._id })
        }
    }
    //-confirmed requests
    const handleConfirmReq = async (e) => {
        e.preventDefault()
        if (AuthData?._id) {
            setIsConFIrmed(true)
            await axios.post('https://beta-server-8uoh.onrender.com/api/v1/friends/' + data?.userid + '/confirm', { userid: AuthData?._id })


        }
    }
    // remove friend
    const handleRemove = async (e) => {

        e.preventDefault()
        console.log(data, 'check client')
        let paramId = AuthData?._id === data?.userid ? data?.friendid : data?.userid
        if (AuthData?._id) {
            setIsRemoved(true)
            await axios.delete('https://beta-server-8uoh.onrender.com/api/v1/friends/' + paramId + '/remove',

                {
                    data: {
                        userid: AuthData?._id
                    }
                }
            )


        }
    }
    //- requesting fetch data of users, fetch by key,  if state, props is not changed , it will not re mount and useEffect don't run

    useEffect(() => {

        const getUserData = async () => {
            let paramId = AuthData?._id === data?.userid ? data?.friendid : data?.userid

            let res = await axios.get('https://beta-server-8uoh.onrender.com/api/v1/users/' + paramId)
            let UserInfo = await res.data
            setUserData(UserInfo)
        }
        if (dataType === 'requesting' || dataType === 'friends' || dataType === 'request') {

            getUserData()
        }
    }, [])

    //Navigate
    const handleLink = (e) => {
        console.log(newDataType, 'ckadjlkfjasf')
        //get viewing user infomation
        dispatch({ type: 'COMMUNITY_VIEW_SUCCESSFULLY', payload: { ...userData, status: newDataType } })
        navigate('../../profile');

    }
    const handleLinkData = (e) => {
        e.preventDefault()
        //get viewing user infomation
        dispatch({ type: 'COMMUNITY_VIEW_SUCCESSFULLY', payload: { ...data, status: newDataType } })
        navigate('../../profile');

    }

    if (dataType) {
        // trang cần fetch
        return (
            <>
                {userData ?
                    <div className="col-span-1 rounded-lg shadow-xl  flex flex-col border overflow-hidden border-1 bg-transparent border-white">
                        <img onClick={(e) => { handleLink(e) }} className='w-full sm:h-[280px] ms:h-[300px] md:h-[220px] lg:h-[230px] xl:h-[280px] object-cover  ' src={userData?.avatar || data?.avatar || dfAvatar} alt="" />

                        <div className="bg-bgmlight   dark:bg-bgmdark p-2 ">
                            <div className="flex flex-row gap-2 items-center" >
                                <h1 className='capitalize dark:text-white'>{
                                    dataType === 'requesting' ? userData?.firstname + " " + userData?.lastname : dataType === 'friends' ? userData?.firstname + " " + userData?.lastname :
                                        dataType === 'request' ? userData?.firstname + " " + userData?.lastname
                                            : data?.firstname + " " + data?.lastname

                                }

                                </h1>
                                {onlineUser?.findIndex(user => user.userId === userData?._id) !== -1 ?
                                    <div className="dot w-[9px] bottom-1 right-0 rounded-full first-line: bg-green-500   h-[9px]"></div>
                                    :
                                    <div className="dot w-[9px] bottom-1 right-0 rounded-full    bg-red-600   h-[9px]"></div>
                                }
                            </div>
                            <h1 className='text-sm'>@{data?.username || userData?.username}</h1>
                            {dataType === 'friends' ?

                                <div className="flex flex-col gap-2 ">
                                    {!isRemoved ?
                                        <>
                                            <button className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Friend</button>
                                            <button className=" text-center btn-green bg-bglight" onClick={(e) => handleRemove(e)}>Remove</button>
                                        </>
                                        :
                                        <button className="  text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Add Friend</button>

                                    }
                                </div>
                                :
                                dataType === 'requesting' ?
                                    <div className="flex flex-col gap-2 ">
                                        <div className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Requesting</div>
                                        <div className=" text-center btn-green bg-bglight">Cancle</div>
                                    </div>
                                    :
                                    dataType === 'request' ?
                                        <div className="flex flex-col gap-2 ">
                                            {isConfirmed ?
                                                <button className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Friend</button>

                                                :
                                                <>
                                                    <button onClick={(e) => { handleConfirmReq(e) }} className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Accept</button>
                                                    <button className=" text-center btn-green bg-bglight">Cancle</button>
                                                </>
                                            }

                                        </div> :
                                        <div className="flex flex-col gap-2 ">
                                            {!addFriend ?
                                                <div onClick={(e) => {
                                                    handleFriendRequest(e)
                                                }} className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Add Friend</div>
                                                :
                                                <div className=" text-center btn-green bg-gray-600  text-white  dark:text-black dark:bg-greenyellow">Pending</div>
                                            }


                                        </div>

                            }


                        </div>
                    </div>
                    :
                    <div className="col-span-1 rounded-lg shadow-xl flex flex-col border overflow-hidden border-1 bg-transparent border-white">
                        <div className="bg-gray-300 w-full sm:h-[280px] ms:h-[300px] md:h-[220px] lg:h-[230px] xl:h-[280px] object-cover "></div>
                        <div className="bg-bgmlight animate-pulse duration-75 dark:bg-bgmdark p-2 ">
                            <h1 className='capitalize dark:text-white'>Full Name</h1>
                            <h1 className='text-sm'>@username</h1>
                            <div className="flex flex-col gap-2 ">

                                <div className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Add Friend</div>

                                <div className=" text-center btn-green bg-gray-600  text-white  dark:text-black dark:bg-greenyellow">Pending</div>



                            </div>




                        </div>
                    </div>
                }

            </>
        )
    } else {
        return (
            <div className="col-span-1 rounded-lg shadow-xl  border overflow-hidden border-1 border-white">
                <img onClick={(e) => { handleLinkData(e) }} className='w-full sm:h-[280px] ms:h-[300px] md:h-[220px] lg:h-[230px] xl:h-[280px] object-cover ' src={data?.avatar || dfAvatar} alt="" />
                <div className="bg-bgmlight  dark:bg-bgmdark p-2 ">
                    <h1 className='capitalize dark:text-white'>{
                        data?.firstname + " " + data?.lastname

                    }</h1>
                    <h1 className='text-sm'>@{data?.username}</h1>

                    <div className="flex flex-col gap-2 ">
                        {!addFriend ?
                            <button onClick={(e) => {
                                handleFriendRequest(e)
                            }} className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Add Friend</button>
                            :
                            <button className=" text-center btn-green bg-gray-600  text-white  dark:text-black dark:bg-greenyellow">Pending</button>
                        }


                    </div>




                </div>
            </div>
        )
    }

}
