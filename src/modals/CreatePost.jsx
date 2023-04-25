import React, { useRef, useState } from 'react'
import { UilSmile } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import { UilImagePlus } from '@iconscout/react-unicons'
import { UilVideo } from '@iconscout/react-unicons'
import { UilListUl } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'
//emoji
import EmojiPicker from 'emoji-picker-react';
import { useSelector } from 'react-redux'

export const CreatePost = ({ isOpen, setIsOpen }) => {
    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    const inputMedia = useRef()
    const [mediaFile, setMediaFile] = useState([])
    const [openEmoji, setOpenEmoji] = useState(false)
    const [postContent, setPostContent] = useState('')
    const handleAddPhoto = () => {
        inputMedia.current.click()
    }
    const handleShowImg = () => {
        console.log(inputMedia.current.files)
        setMediaFile(prev => [...prev, URL.createObjectURL(inputMedia.current.files[0])])
    }
    const handleRemoveMedia = (url) => {
        let MediaTemp = mediaFile ? [...mediaFile] : [];
        // Create a copy of the array
        // if using MediaTemp = MediaFile so when MediaTemp change , mediaFile also changes and MediaTemp change again
        let startIndex = MediaTemp.findIndex(element => element === url);
        console.log(startIndex, url, MediaTemp, 'check');
        MediaTemp.splice(startIndex, 1); // Remove the element from the copied array return a elemet deleted
        setMediaFile(prev => MediaTemp);
    }
    const onEmojiClick = (EmojiClickData, MouseEvent) => {
        setPostContent(prev => prev + EmojiClickData.emoji)

    };
    const handleWriteContent = (data) => {
        setPostContent(data)
    }
    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            <div className={`  fixed  items-center justify-center z-50 w-full h-full top-0 left-0 ${isOpen ? 'flex' : 'hidden'} `}>
                <div className="  dark:bg-bgmdark bg-bgmlight flex flex-col items-center rounded-xl z-50 p-4 gap-4">

                    <div className="  w-full flex  flex-row rounded-xl items-center justify-between px-4 py-2 dark:bg-btnGrayLight bg-bglight gap-20">
                        <div className="flex gap-2 items-center ">
                            <img className=' rounded-full' width={'50px'} src="	  https://source.unsplash.com/240x320/?portrait?0" alt="" />
                            <textarea onChange={(e) => {
                                handleWriteContent(e.target.value)
                            }} value={postContent} type="text" className='bg-transparent border-0 border-transparent outline-none dark:text-white text-black' placeholder="What's in your mind, Evgen " id="w3review" name="w3review" rows="4" cols="50">

                            </textarea>

                        </div>


                        <div className="relative flex">
                            <UilSmile onClick={() => { setOpenEmoji(prev => !prev) }} className='dark:text-white text-black'></UilSmile>
                            {openEmoji ? <div className=" absolute left-[-10rem] top-7 z-50">
                                <EmojiPicker width={300} height={400} className='hidden' onEmojiClick={onEmojiClick} />
                            </div> : ''}

                        </div>
                    </div>


                    <div className={`grid ${mediaFile.length === 1 ? 'grid-cols-1' : mediaFile.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} max-w-[700px] gap-4`}>
                        {mediaFile.length > 0 && mediaFile.map(img =>
                            <div className="relative">
                                <img className='rounded-xl' src={img} alt="" />
                                <UilMultiply onClick={() => {
                                    handleRemoveMedia(img)
                                }} className='text-[10px] dark:bg-bgmdark bg-bgmlight rounded-full p-1 dark:text-white text-black absolute top-2 right-2'></UilMultiply>
                            </div>
                        )}

                    </div>


                    <div className="grid grid-cols-4 gap-4">
                        <button onClick={() => {
                            handleAddPhoto()
                        }} className='bg-bglight border-2 dark:border-0 dark:bg-bgdark px-2 py-2 rounded-xl gap-2 flex dark:text-white  text-black items-center justify-center'><UilImagePlus className='text-green-600'></UilImagePlus> <p className='hidden md:flex'>Photo</p> </button>
                        <button className='bg-bglight border-2 dark:border-0 dark:bg-bgdark px-2 py-2 rounded-xl gap-2 flex dark:text-white text-black items-center justify-center'><UilVideo className='text-blue-500'></UilVideo> <p className='hidden md:flex'>Video</p> </button>
                        <button className='bg-bglight border-2 dark:border-0 dark:bg-bgdark px-2 py-2 rounded-xl gap-2 flex dark:text-white text-black items-center justify-center'><UilListUl className='text-red-500'></UilListUl> <p className='hidden md:flex'>Poll</p> </button>
                        <button className='bg-bglight border-2 dark:border-0 dark:bg-bgdark px-2 py-2 rounded-xl gap-2 flex dark:text-white text-black items-center justify-center'><UilCalendarAlt className='text-yellow-200'></UilCalendarAlt> <p className='hidden md:flex'>Schedule</p> </button>
                        <input onChange={handleShowImg} className='hidden' type="file" ref={inputMedia} />

                    </div>

                </div>
                <div onClick={() => {
                    setIsOpen(prev => !prev)
                }} className="close absolute top-0 bottom-0 left-0 right-0  bg-bgdark bg-opacity-80 ">
                    ca
                </div>
            </div >
        </div >
    )
}