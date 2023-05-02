import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllReqAction } from '../action/CommunityAction';
import { UserCard } from './UserCard';


export const AllRequests = () => {
  const dispatch = useDispatch()
  const AuthData = useSelector(state => state.AuthReducer.user)
  const allRequests = useSelector(state => state.UserReducer.allRequests)
  useEffect(() => {
    AuthData?._id ?
      dispatch(AllReqAction(AuthData._id)) : console.log("Empty Id")
  }, [])
  return (
    <div className="items-center grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      {allRequests?.length > 0 && allRequests && allRequests.map(req => {
        return <UserCard data={req} dataType='request'></UserCard>


      }
      )}
    </div>
  )
}
