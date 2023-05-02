import React, { useEffect } from 'react'
import { UserCard } from './UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { AllSentReqAction } from './../action/CommunityAction';

export const AllSentRequests = () => {
  const dispatch = useDispatch()
  const AuthData = useSelector(state => state.AuthReducer.user)
  const allSentRequests = useSelector(state => state.UserReducer.allSentRequests)
  useEffect(() => {
    AuthData?._id ?
      dispatch(AllSentReqAction(AuthData._id)) : console.log("Empty Id")
  }, [])
  return (
    <div className="items-center grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      {allSentRequests?.length > 0 && allSentRequests && allSentRequests.map(req => {
        return <UserCard data={req} dataType='requesting'></UserCard>


      }
      )}
    </div>
  )
}
