import React from 'react'
import { ProfileCard } from './../components/ProfileCard';
import { ProfilePost } from './../components/ProfilePost';
import { InfoCard } from './../components/InfoCard';
import { PostShare } from './../components/PostShare';
import { Posts } from './../components/Posts';
import { Route, Routes } from 'react-router-dom';
import { ProfileInfo } from './../components/ProfileInfo';
import { ProfileFriends } from './../components/ProfileFriends';
import { Gallery } from './../components/Gallery';

export const Profile = () => {
    return (
        <div className=" p-4 flex flex-col gap-4">
            <ProfileCard></ProfileCard>


            <Routes>
                <Route index element={<ProfileInfo />} />
                <Route path='/friends/' Component={ProfileFriends} />
                <Route path='/gallery/' Component={Gallery} />




            </Routes>

        </div>
    )
}
