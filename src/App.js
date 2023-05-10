import axios from 'axios';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route from react-router-dom
import './App.css';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { HomePage } from './page/HomePage';
import { Profile } from './page/Profile';

import { useSelector, useDispatch } from 'react-redux';
import { EcommercePage } from './page/EcommercePage';
import { MessagePage } from './page/MessagePage';
import { LoginPage } from './page/LoginPage';
import { SignUpPpage } from './page/SignUpPpage';
import { CommunityPage } from './page/CommunityPage';
//socket
import { socket } from './socket'
import { Welcome } from './page/Welcome';

function App() {
  //config
  const dispatch = useDispatch()
  const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
  const AuthData = useSelector(state => state.AuthReducer.user)

  useEffect(() => {
    if (AuthData?._id) {
      socket.connect()
      socket.emit('sendUserId', AuthData?._id)
    } else {
      socket.disconnect()
    }
  }, [AuthData?._id])
  // get online user
  useEffect(() => {
    socket.on('sendAllOnlineUser', (data) => {
      console.log(data)
      dispatch({ type: 'SET_ONLINE_USER', payload: data })
    })
  }, [])

  return (
    <div className={`${isDarkMode ? 'dark' : ''} `}>

      <div className='bg-bglight dark:bg-bgdark flex flex-col justify-start' >
        <Routes>
          <Route path="/*" Component={AuthData?._id ? Home : Welcome} /> {/* Use the render prop to specify the component to be rendered */}
          <Route path="/profile/*" Component={Profile} /> {/* Use the render prop to specify the component to be rendered */}
          <Route path="/ecommerce/*" Component={EcommercePage} /> {/* Use the render prop to specify the component to be rendered */}
          <Route path="/message/*" Component={MessagePage} /> {/* Use the render prop to specify the component to be rendered */}
          <Route path="/login/*" Component={LoginPage} /> {/* Use the render prop to specify the component to be rendered */}
          <Route path="/register/*" Component={SignUpPpage} /> {/* Use the render prop to specify the component to be rendered */}
          <Route path="/community/*" Component={CommunityPage} /> {/* Use the render prop to specify the component to be rendered */}
        </Routes>
      </div>
    </div>
  );
}

export default App;