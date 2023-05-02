import React, { useEffect } from 'react'
import { HomeCenter } from './HomeCenter';
import { HomeLeft } from './HomeLeft';
import { HomeRight } from './HomeRight';
import { FriendsRecommended } from './FriendsRecommended';
import { HomeChat } from './../modals/HomeChat';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from './Nav';
import { CreatePostAPI } from './../api/PostAPI';

export const Home = () => {
  const dispatch = useDispatch()
  //redux
  const AuthData = useSelector(state => state.AuthReducer.user)
 
  const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
  return (
    <div className={`${isDarkMode ? 'dark' : ''}      overflow-auto   `}>
      <Nav></Nav>

      <div className="   pt-0      grid gap-0 grid-cols-1 md:grid-cols-5 md:gap-4 xl:grid-cols-5 bg-bglight dark:bg-bgdark p-4">
        <HomeLeft></HomeLeft>
        <HomeCenter></HomeCenter>
        <HomeRight></HomeRight>

      </div>
    </div>
  )
}
