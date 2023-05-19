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
import { CreatePostAction } from '../action/PostAction';
import dfAvatar from '../assets/img/defaultAvatar.png';
import uploadToFirebase from '../firebase/Upload'
//
import story4 from '../assets/img/story4.avif'
import story5 from '../assets/img/story5.avif'
import story6 from '../assets/img/story6.avif'
export const CreatePostPrv = () => {
  const dispatch = useDispatch()

  const isDarkMode = useSelector(state => state.DarkModeReducer.isDarkMode)

  const inputMedia = useRef()
  const [mediaFile, setMediaFile] = useState([story4, story5,
    story6])
  const [openEmoji, setOpenEmoji] = useState(false)
  const [postContent, setPostContent] = useState('My work!')
  //is posting image
  const [isUpload, setIsUpload] = useState(false)
  // state redux
  const AuthData = useSelector(state => state.AuthReducer.user)
  //handle
  const handleAddPhoto = () => {
    inputMedia.current.click()
  }
  const handleShowImg = async () => {
    setIsUpload(true)
    let url = await uploadToFirebase(inputMedia.current.files[0])
    setIsUpload(false)
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
      <div className={`  relative  items-center  my-10 z-50 w-full h-full top-0 left-0  flex`}>
        <div className="  dark:bg-bgmdark bg-bgmlight flex flex-col items-center rounded-xl z-50 p-4 gap-4">

          <div className="w-full flex flex-row rounded-xl items-center justify-between px-4 py-2 dark:bg-btnGrayLight bg-bglight gap-20">
            <div className="flex gap-4 items-center">
              <img className="rounded-full h-[50px] object-cover min-w-[50px]" width="50px" src='https://firebasestorage.googleapis.com/v0/b/socialmediav2.appspot.com/o/1d9003898f5723081867134deca59a3f.gif?alt=media&token=5b88b10e-2f0d-43bb-af3f-7cc1f1ba3aac' alt="" />

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
            {isUpload &&

              <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            }
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
        {/* <div onClick={() => {
          setIsOpen(prev => !prev)
        }} className="close absolute top-0 bottom-0 left-0 right-0  bg-bgdark bg-opacity-80 ">

        </div> */}
      </div >
    </div >
  )
}
