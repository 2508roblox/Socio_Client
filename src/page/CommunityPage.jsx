import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Nav } from './../components/Nav';
import { AllUsers } from './../components/AllUsers';
import { AllFriends } from './../components/AllFriends';
import { AllSentRequests } from './../components/AllSentRequests';
import { AllRequests } from './../components/AllRequests';

export const CommunityPage = () => {
    return (
        <div className=' flex flex-col gap-2'>
            <Nav></Nav>
            <div className="">
                <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li class="mr-2">
                        <Link to={'./'} aria-current="page" class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">All</Link>
                    </li>
                    <li class="mr-2">
                        <Link to={'./friends'} class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Friends</Link>
                    </li>
                    <li class="mr-2">
                        <Link to={'./requesting'} class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Requesting</Link>
                    </li>
                    <li class="mr-2">
                        <Link to={'./request'} class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Request</Link>
                    </li>

                </ul>
            </div>
            <div className="px-4">
                <Routes>

                    <Route index path="/" Component={AllUsers}></Route>
                    {/* {not include friend model} */}
                    <Route path="/friends" Component={AllFriends}></Route>
                    <Route path="/requesting" Component={AllSentRequests}></Route>
                    <Route path="/request" Component={AllRequests}></Route>

                </Routes>
            </div>
        </div>
    )
}
