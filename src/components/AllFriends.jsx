import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllFriendsAction } from '../action/CommunityAction';
import { UserCard } from './UserCard';

export const AllFriends = () => {
  const dispatch = useDispatch()
  const AuthData = useSelector(state => state.AuthReducer.user)
  const allFriends = useSelector(state => state.UserReducer.allFriends)
  useEffect(() => {
    AuthData?._id ?
      dispatch(AllFriendsAction(AuthData._id)) : console.log("Empty Id")
  }, [])

  return (
    <div className="items-center grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      {allFriends?.length > 0 && allFriends && allFriends.map(req => {
        return <UserCard data={req} dataType='friends'></UserCard>


      }
      )}
    </div>
  )
}
