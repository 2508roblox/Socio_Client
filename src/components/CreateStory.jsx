import React from 'react'
import story1 from '.././assets/img/story8.avif'
export const CreateStory = () => {
    return (
        <div className="min-w-[120px] flex text-black dark:text-white gap-2 flex-col items-center justify-center">
            <div className="overflow-hidden  p-[1px] border-4 border-blue-500 dark:border-greenyellow  items-center flex relative   rounded-2xl">
                <img className='rounded-xl ' width={'120px'} src={story1} alt="" />
                <div className="info  absolute w-full bg-green-600 bg-blur-sm bottom-0 bg-opacity-30 flex flex-col items-center">
                    <div className="relative w-full ml-10 mb-2  px-2 flex items-center">
                        <h1 className='absolute rounded-full border-2 border-white w-8 h-8  text-center text-black bg-white text-lg '>+</h1>

                    </div>
                    <h1 className='text-sm  text-white py-2'>
                        Add Story
                    </h1>
                </div>
            </div>

        </div>
    )
}
