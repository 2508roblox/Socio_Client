import React, { useEffect } from 'react'
import { Nav } from './../components/Nav';
import { Home } from './../components/Home';
import { getAPI } from '../api/getData';
import axios from 'axios';


export const HomePage = () => {

  return (
    <div className="bg-bgdark ">
      <Nav></Nav>
      <Home></Home>
    </div>
  )
}
