import React, { useEffect, useRef, useState } from 'react'
import { UserCard } from './UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { AllUsersAction } from './../action/CommunityAction';
import axios from 'axios';

export const AllUsers = () => {


    const dispatch = useDispatch()
    const AuthData = useSelector(state => state.AuthReducer?.user)
    const NonFriends = useSelector(state => state.UserReducer.allUsersNonFriends)
    

    useEffect(() => {
        AuthData?._id ? dispatch(AllUsersAction(AuthData?._id)) : console.log("fas")
    }, [])
    return (
        <div className="items-center grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2" >
            {
                NonFriends?.length > 0 && NonFriends && NonFriends.map((user, index) => {
                    return <UserCard data={user} dataType=''></UserCard>
                })
            }
        </div>
    )
}
