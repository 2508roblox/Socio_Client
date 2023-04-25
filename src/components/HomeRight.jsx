import React from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { AdsCard } from './AdsCard';
import { FriendRequests } from './FriendRequests';
import { HomeMessage } from './HomeMessage';

export const HomeRight = () => {
  return (
    <div className=" hidden flex-col gap-4 xl:flex h-[90vh] overflow-scroll">
      <AdsCard></AdsCard>
      <FriendRequests></FriendRequests>
      <HomeMessage></HomeMessage>
    </div>
  )
}
