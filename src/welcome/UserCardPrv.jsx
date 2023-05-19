import React from 'react'
import ava1 from '../assets/img/avatar1.avif'
import ava2 from '../assets/img/avatar2.avif'
import ava3 from '../assets/img/avatar3.avif'
import ava4 from '../assets/img/avatar4.avif'
import ava5 from '../assets/img/avatar5.avif'

export const UserCardPrv = () => {
    return (
        <>
            <div className="col-span-1 rounded-lg shadow-xl  border overflow-hidden border-1 border-white">
                <img className='w-full sm:h-[280px] ms:h-[300px] md:h-[220px] lg:h-[230px] xl:h-[280px] object-cover ' src={ava1} alt="" />
                <div className="bg-bgmlight  dark:bg-bgmdark p-2 ">
                    <h1 className='capitalize dark:text-white'>{
                        'Brian Davis'

                    }</h1>
                    <h1 className='text-sm'>@user1</h1>

                    <div className="flex flex-col gap-2 ">

                        <button className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Add Friend</button>




                    </div>




                </div>
            </div>
            <div className="col-span-1 rounded-lg shadow-xl  border overflow-hidden border-1 border-white">
                <img className='w-full sm:h-[280px] ms:h-[300px] md:h-[220px] lg:h-[230px] xl:h-[280px] object-cover ' src={ava2} alt="" />
                <div className="bg-bgmlight  dark:bg-bgmdark p-2 ">
                    <h1 className='capitalize dark:text-white'>{
                        'Brian Davis'

                    }</h1>
                    <h1 className='text-sm'>@user1</h1>

                    <div className="flex flex-col gap-2 ">

                        <button className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Add Friend</button>




                    </div>




                </div>
            </div>
            <div className="col-span-1 rounded-lg shadow-xl  border overflow-hidden border-1 border-white">
                <img className='w-full sm:h-[280px] ms:h-[300px] md:h-[220px] lg:h-[230px] xl:h-[280px] object-cover ' src={ava4} alt="" />
                <div className="bg-bgmlight  dark:bg-bgmdark p-2 ">
                    <h1 className='capitalize dark:text-white'>{
                        'Brian Davis'

                    }</h1>
                    <h1 className='text-sm'>@user1</h1>

                    <div className="flex flex-col gap-2 ">

                        <button className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Add Friend</button>




                    </div>




                </div>
            </div>
            <div className="col-span-1 rounded-lg shadow-xl  border overflow-hidden border-1 border-white">
                <img className='w-full sm:h-[280px] ms:h-[300px] md:h-[220px] lg:h-[230px] xl:h-[280px] object-cover ' src={ava3} alt="" />
                <div className="bg-bgmlight  dark:bg-bgmdark p-2 ">
                    <h1 className='capitalize dark:text-white'>{
                        'Brian Davis'

                    }</h1>
                    <h1 className='text-sm'>@user1</h1>

                    <div className="flex flex-col gap-2 ">

                        <button className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Add Friend</button>




                    </div>




                </div>
            </div>
            <div className="col-span-1 rounded-lg shadow-xl  border overflow-hidden border-1 border-white">
                <img className='w-full sm:h-[280px] ms:h-[300px] md:h-[220px] lg:h-[230px] xl:h-[280px] object-cover ' src={ava5} alt="" />
                <div className="bg-bgmlight  dark:bg-bgmdark p-2 ">
                    <h1 className='capitalize dark:text-white'>{
                        'Brian Davis'

                    }</h1>
                    <h1 className='text-sm'>@user1</h1>

                    <div className="flex flex-col gap-2 ">

                        <button className=" text-center btn-green bg-blue-500  text-white  dark:text-black dark:bg-greenyellow">Add Friend</button>




                    </div>




                </div>
            </div>
        </>
    )
}
