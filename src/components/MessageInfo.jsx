import React from 'react'
import { UilVideo } from '@iconscout/react-unicons'
import { UilMicrophone } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import { UilSwatchbook } from '@iconscout/react-unicons'
import { UilSmile } from '@iconscout/react-unicons'
import { UilLink } from '@iconscout/react-unicons'
import { UilWallet } from '@iconscout/react-unicons'
import { UilArrowLeft } from '@iconscout/react-unicons'
export const MessageInfo = ({ isOpen, setIsOpen }) => {

    return (
        <div className={`${isOpen ? 'absolute w-full' : 'hidden'} z-50 col-span-3  xl:relative border-l-2 bg-bgmlight dark:bg-bgmdark rounded-xl h-[100vh]  dark:border-bgdark`}>
            <div className="flex flex-col p-4">


                <UilArrowLeft onClick={() => { setIsOpen(false) }} className={`w-[2rem] h-[2rem]`}></UilArrowLeft>
                <div className="flex flex-col items-center mb-10 gap-4">
                    <img className='w-[5rem] h-[5rem] rounded-full object-cover' src="https://source.unsplash.com/240x320/?portrait?0" alt="" />
                    <h1>Designer</h1>
                    <div className="flex justify-center gap-3">
                        <button className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <UilVideo></UilVideo>
                            <span>Voice Chat</span>
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <UilMicrophone></UilMicrophone>
                            <span>Video Chat</span>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className='flex justify-between items-center'>
                        Search in conversation   <UilSearch></UilSearch>
                    </h1>
                    <h1 className='flex justify-between items-center'>Change Color<UilSwatchbook></UilSwatchbook> </h1>
                    <h1 className='flex justify-between items-center'> Change Emoji<UilSmile></UilSmile></h1>
                    <h1 className='flex justify-between items-center'>Link<UilLink></UilLink> </h1>
                </div>
                <div className="">
                    <h1 className='flex justify-start gap-1 items-center mt-5'><UilWallet></UilWallet> Shared Photo</h1>
                    <div className=" flex  flex-wrap justify-center  overflow-scroll gap-2 mt-3">
                        <img className='rounded-xl w-[100px] h-[100px] object-cover' src="	https://source.unsplash.com/240x320/?portrait?0" alt="" />
                        <img className='rounded-xl w-[100px] h-[100px] object-cover' src="	https://source.unsplash.com/240x320/?portrait?1" alt="" />
                        <img className='rounded-xl w-[100px] h-[100px] object-cover' src="	https://source.unsplash.com/240x320/?portrait?2" alt="" />
                        <img className='rounded-xl w-[100px] h-[100px] object-cover' src="	https://source.unsplash.com/240x320/?portrait?3" alt="" />
                        <img className='rounded-xl w-[100px] h-[100px] object-cover' src="	https://source.unsplash.com/240x320/?portrait?4" alt="" />
                        <img className='rounded-xl w-[100px] h-[100px] object-cover' src="	https://source.unsplash.com/240x320/?portrait?5" alt="" />
                        <img className='rounded-xl w-[100px] h-[100px] object-cover' src="	https://source.unsplash.com/240x320/?portrait?6" alt="" />
                        <img className='rounded-xl w-[100px] h-[100px] object-cover' src="	https://source.unsplash.com/240x320/?portrait?7" alt="" />
                        <img className='rounded-xl w-[100px] h-[100px] object-cover' src="	https://source.unsplash.com/240x320/?portrait?8" alt="" />
                    </div>
                </div>


            </div>
        </div>

    )
}
