import React, { useEffect } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { Post } from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { GetTimeLineAction, GetUserPost } from '../action/PostAction';
import PostReducer from './../reducers/PostReducer';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
//inf
export const Posts = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const currentPath = location.pathname;
    //User
    const AuthData = useSelector(state => state.AuthReducer.user)
    const UserData = useSelector(state => state.UserReducer.viewingUser)
    //loading status
    const isLoading = useSelector(state => state.PostReducer.isLoading)

    // posts
    const timelinePosts = useSelector(state => state.PostReducer.timelinePosts)
    const userPosts = useSelector(state => state.PostReducer.userPosts)

    //

    useEffect(() => {
        const GetTimeLine = async () => {

            currentPath === '/' ? dispatch(GetTimeLineAction(AuthData?._id)) : dispatch(GetUserPost(UserData?._id))
        }
        GetTimeLine()
        return () => {
            console.log('clean up')
        }
    }, [])


    // scroll event

    return (




        <div className=" flex flex-col gap-4  " >



            {
                currentPath === '/' ?
                    <>

                        {timelinePosts && timelinePosts.map((data, index) =>
                            // truyền key để react quản lý tốt hơn, biết có cần render, fetch lại không ( biết có thay đổi không)
                            <Post postData={data} key={data._id}></Post>
                        )}

                    </>
                    :
                    <>
                        {userPosts && userPosts.map((data, index) =>
                            // truyền key để react quản lý tốt hơn, biết có cần render, fetch lại không ( biết có thay đổi không)
                            <Post postData={data} key={data._id}></Post>
                        )}
                    </>
            }

        </div>


    )
}
