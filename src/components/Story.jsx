import React from 'react'

export const Story = () => {
    let randomImg = `https://source.unsplash.com/240x320/?portrait?${~~(Math.random() * 13)}`
    let randomAvatar = `https://source.unsplash.com/240x320/?portrait?${~~(Math.random() * 12)}`
    return (
        <div className="min-w-[120px] flex text-black dark:text-white gap-2 flex-col items-center justify-center">
            <div className="overflow-hidden  p-[1px] border-4 items-center flex relative border-white dark:border-bgmdark rounded-2xl">
                <img className='rounded-xl h-[165px] object-cover' width={'120px'} src={randomImg} alt="" />
                <div className="info  absolute w-full bg-green-600 bg-blur-sm bottom-0 bg-opacity-30 flex flex-col items-center">
                    <div className="relative w-full ml-10 mb-0  px-2 flex items-center">
                        <img className='absolute rounded-full border-2 h-[35px] border-white' width={'35px'} src={randomAvatar} alt="" />

                    </div>
                    <h1 className='text-sm  text-white py-2'>
                        Rosaline
                    </h1>
                </div>
            </div>

        </div>

    )
}
