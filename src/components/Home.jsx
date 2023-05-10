import React, { useEffect } from 'react'
import { HomeCenter } from './HomeCenter';
import { HomeLeft } from './HomeLeft';
import { HomeRight } from './HomeRight';
import { FriendsRecommended } from './FriendsRecommended';
import { HomeChat } from './../modals/HomeChat';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from './Nav';
import { CreatePostAPI } from './../api/PostAPI';
import logoAnimation from '../assets/video/0509.mp4'
import logo from '../assets/img/logo.png'
export const Home = () => {

  //redux


  const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
  return (
    <div className={`${isDarkMode ? 'dark' : ''}      overflow-auto   `}>
      <Nav></Nav>

      <div className="   pt-0 pb-0      grid gap-0 grid-cols-1 md:grid-cols-5 md:gap-4 xl:grid-cols-5 bg-bglight dark:bg-bgdark px-4">
        <HomeLeft></HomeLeft>
        <HomeCenter></HomeCenter>
        <HomeRight></HomeRight>
      </div>
      {/* <video className='w-full h-full ' autoPlay loop muted>
        <source src={logoAnimation} type='video/mp4' />
      </video> */}


    </div>
  )
}
