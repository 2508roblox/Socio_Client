import React, { useRef, useState } from 'react'
import { UilSmile } from '@iconscout/react-unicons'
import { UilMultiply } from '@iconscout/react-unicons'
import { UilImagePlus } from '@iconscout/react-unicons'
import { UilVideo } from '@iconscout/react-unicons'
import { UilListUl } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'
//emoji
import EmojiPicker from 'emoji-picker-react';
import { useDispatch, useSelector } from 'react-redux'
import { UilMessage } from '@iconscout/react-unicons'
import { CreatePostAction } from './../action/PostAction';
import dfAvatar from '../assets/img/defaultAvatar.png';
import uploadToFirebase from '../firebase/Upload'
//

//
export const CreatePost = ({ isOpen, setIsOpen }) => {
    

    //config
    const dispatch = useDispatch()

    const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

    const inputMedia = useRef()
    const [mediaFile, setMediaFile] = useState([])
    const [openEmoji, setOpenEmoji] = useState(false)
    const [postContent, setPostContent] = useState('')
    // state redux
    const AuthData = useSelector(state => state.AuthReducer.user)
    //handle
    const handleAddPhoto = () => {
        inputMedia.current.click()
    }
    const handleShowImg = async () => {
        let url = await uploadToFirebase(inputMedia.current.files[0])
        console.log('urrl', url)
        console.log(inputMedia.current.files)
        setMediaFile(prev => [...prev, url])
        console.log(mediaFile)
    }
    const handleRemoveMedia = (url) => {
        let MediaTemp = mediaFile ? [...mediaFile] : [];
        // Create a copy of the array
        //  
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
    //create POST
    const handleCreatePost = (e) => {
        e.preventDefault()
        let PostData = {
            userid: AuthData?._id,
            content: postContent,
            media: [...mediaFile]

        }

        if (AuthData?._id) {
            dispatch(CreatePostAction(PostData))
            setPostContent('')
            setMediaFile([])
        }

        console.log(PostData, 'post data')
    }


    return (
        <div className={`${isDarkMode ? 'dark' : ''} `}>
            <div className={`  fixed  items-center justify-center z-50 w-full h-full top-0 left-0 ${isOpen ? 'flex' : 'hidden'} `}>
                <div className="  dark:bg-bgmdark bg-bgmlight flex flex-col items-center rounded-xl z-50 p-4 gap-4">

                    <div className="w-full flex flex-row rounded-xl items-center justify-between px-4 py-2 dark:bg-btnGrayLight bg-bglight gap-20">
                        <div className="flex gap-4 items-center">
                            <img className="rounded-full h-[50px] object-cover min-w-[50px]" width="50px" src={AuthData?.avatar || dfAvatar} alt="" />

                            <input onChange={(e) => {
                                handleWriteContent(e.target.value)
                            }} value={postContent} type="text" className="w-[5rem] md:w-full bg-transparent border-0 border-transparent outline-none dark:text-white text-black" placeholder="What's in your mind, Evgen " id="w3review" name="w3review" rows="4" cols="50" />

                        </div>


                        <div className="relative flex gap-2">
                            <UilSmile onClick={() => { setOpenEmoji(prev => !prev) }} className="dark:text-white text-black"></UilSmile>
                            {openEmoji ? <div className="absolute left-[-10rem] top-7 z-50">
                                <EmojiPicker width={300} height={400} className="hidden" onEmojiClick={onEmojiClick} />
                            </div> : ''}
                            <UilMessage onClick={(e) => { handleCreatePost(e) }}></UilMessage>

                        </div>
                    </div>


                    <div className={`grid ${mediaFile.length === 1 ? 'grid-cols-1' : mediaFile.length === 2 ? 'grid-cols-2' : 'grid-cols-3'} max-w-[700px] gap-4`}>
                        {mediaFile.length > 0 && mediaFile.map(img =>
                            <div className="relative">
                                <img className='rounded-xl lg:w-full w-[150px]' src={img} alt="" />
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

                </div>
            </div >
        </div >
    )
}