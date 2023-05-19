import React from 'react'

export const Story = ({ data, story, avatar }) => {

    return (
        <div className="overflow-hidden min-w-[120px] flex text-black dark:text-white gap-2 flex-col items-center justify-center">
            <div className="overflow-hidden  p-[1px] border-4 items-center flex relative border-white dark:border-bgmdark rounded-2xl">
                <img className='rounded-xl h-[165px] object-cover' width={'120px'} src={data || story} alt="" />
                <div style={{
                    'backgroundColor': 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(2px)'
                }} className="info  absolute w-full   bottom-0 bg-opacity-30 flex flex-col items-center">
                    <div className="relative w-full ml-10 mb-2  px-2 flex items-center">
                        <img className='absolute rounded-full border-2 h-[35px] border-white' width={'35px'} src={avatar} alt="" />

                    </div>
                    <h1 className=' text-sm  text-white py-2'>
                        Rosaline
                    </h1>
                </div>
            </div>

        </div>

    )
}
