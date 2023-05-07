import React, { useState } from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilBag } from '@iconscout/react-unicons'

import { UilHeart } from '@iconscout/react-unicons'
import { UilWifi } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux';
import { BioEdit } from './../modals/BioEdit';
import { UilEnvelopeAlt } from '@iconscout/react-unicons'
import { UilPhone } from '@iconscout/react-unicons'
import { UilSwiggy } from '@iconscout/react-unicons'
import { BasicInfoEdit } from '../modals/BasicInfoEdit'
export const InfoCard = () => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const UserData = useSelector(state => state.UserReducer.viewingUser)
    const AuthData = useSelector(state => state.AuthReducer.user)

    const isAuthProfile = AuthData?._id === UserData?._id
    const [open, setOpen] = useState(false)
    const [infoOpen, setInfoOpen] = useState(false)

    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            {
                open ? <BioEdit
                    open={open}
                    setOpen={setOpen}
                ></BioEdit> : ''
            }
            {
                infoOpen ? <BasicInfoEdit
                    infoOpen={infoOpen}
                    setInfoOpen={setInfoOpen}
                ></BasicInfoEdit> : ''
            }
            <div className="  dark:bg-bgmdark bg-bgmlight rounded-lg p-2 flex flex-col">
                <div className="flex flex-col gap-2 profileInfo  dark:bg-bgdark bg-bglight rounded-lg p-4">
                    <h1 className='dark:text-white text-black'>Infomation</h1>
                    <p className='text-fontGray tezt-[.7rem]'>{UserData?.desc}</p>
                    {
                        isAuthProfile && <button button onClick={() => { setOpen(true) }} className='btn-green bg-blue-500 dark:bg-greenyellow text-white  dark:text-black w-full'>Edit Bio</button>

                    }
                    <div className="my-2 dark:text-white text-black">
                        <h1 className='flex gap-2'><UilEstate></UilEstate>Work at {UserData?.worksat || ' : Undefined'}</h1>
                        <h1 className='flex gap-2'><UilBag></UilBag>Live in {UserData?.address || ' : Undefined'}</h1>
                        <h1 className='flex gap-2'><UilHeart></UilHeart>Relationship {UserData?.relationship || ' : Undefined'}</h1>
                        <h1 className='flex gap-2'><UilSwiggy></UilSwiggy>Hometown {UserData?.hometown || ' : Undefined'} </h1>
                        <h1 className='flex gap-2'><UilPhone></UilPhone>Contact {UserData?.phone || ' : Undefined'}</h1>
                        <h1 className='flex gap-2'><UilEnvelopeAlt ></UilEnvelopeAlt>Email {UserData?.email || ' : Undefined'}</h1>
                        <h1 className='flex gap-2'><UilWifi></UilWifi>230 Followers</h1>
                    </div>
                    {
                        isAuthProfile &&
                        <button onClick={() => { setInfoOpen(true) }}  className='btn-green bg-blue-500 dark:bg-greenyellow text-white  dark:text-black w-full'>Edit detail</button>

                    }
                    <div className="skill dark:text-white text-black flex flex-col gap-2">
                        <h1 className='dark:text-white text-black'>Skills</h1>
                        <div className="flex flex-wrap-reverse gap-4 max-w-[400px]">
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>UX Designer</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>Copy writting</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>Website</button>
                            <button className='px-4 py-1 bg-bgmlight dark:bg-bgmdark shadow-lg rounded-xl text-gray-400'>Website</button>

                        </div>
                        {
                            isAuthProfile && <p  > + Add some skills</p>
                        }
                    </div>
                    {
                        isAuthProfile &&
                        <div className="flex justify-between gap-2">
                            <button className='btn-green bg-blue-500 dark:bg-greenyellow text-white  dark:text-black w-[100%]'>Edit Skills</button>
                            <button className='btn-green bg-blue-500 dark:bg-greenyellow text-white  dark:text-black dark:bg-bgmdark bg-bgmlight dark:text-white text-black '>...</button>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}
