import React from 'react'
import { PostShare } from './PostShare'
import { Posts } from './Posts';
import { InfoCard } from './InfoCard';

export const ProfileInfo = () => {
    
    return (
        <div className="grid  grid-cols-3 gap-4">
            <InfoCard></InfoCard>
            <div className="flex flex-col gap-4 col-span-2">
                <PostShare></PostShare>
                <div className="overflow-y-scroll h-[90vh]">
                    <Posts></Posts>

                </div>
            </div>
        </div>

    )
}
