
import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export const BioEdit = ({ open, setOpen }) => {
    //config
    const dispatch = useDispatch()
    //state
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)
    const UserData = useSelector(state => state.AuthReducer.user)
    //hooks
    const cancelButtonRef = useRef(null)
    const [desc, setDesc] = useState(UserData?.desc)
    //handle
    const handleChangeDesc = async () => {
        dispatch({ type: 'UPDATE_INFO', payload: { desc: desc } })
        dispatch({ type: 'UPDATE_AUTH_INFO', payload: { desc: desc } })
        await axios.put(`https://beta-server-8uoh.onrender.com/api/v1/users/${UserData._id}`,
            {
                curentuserid: UserData._id,
                desc: desc
            }
        )
    }
    return (

        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div style={{ backdropFilter: 'blur(8px)' }} className="fixed inset-0  dark:bg-red-200 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className={`${isDarkMode ? 'dark' : ''} `}>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center  items-center justify-center   ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-bgmlight dark:bg-bgmdark text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="p-4 flex gap-4 flex-col">
                                        <h1 className='text-black dark:text-white'>Your Description</h1>
                                        <input value={desc} onChange={(e) => { setDesc(e.target.value) }} class="   p-2 text-sm text-black dark:text-white bg-bglight rounded-md shadow-sm bg-blue-white dark:bg-bgdark " type="text" placeholder=" Edit your description..." name="" id="" />
                                    </div>
                                    <div className="  px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 bg-bgmlight dark:bg-bgmdark ">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md dark:text-black bg-blue-500 dark:bg-greenyellow px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => {
                                                handleChangeDesc()
                                            }}
                                        >
                                            Update
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>

            </Dialog>
        </Transition.Root>
    )
}
