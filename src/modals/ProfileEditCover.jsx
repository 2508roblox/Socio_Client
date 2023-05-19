import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import uploadToFirebase from './../firebase/Upload';

export const ProfileEditCover = ({ setOpenUpload }) => {
    //cf
    const dispatch = useDispatch()


    //
    const UserData = useSelector(state => state.AuthReducer.user)


    const [img, setImg] = useState(null)
    const handleChangeImg = async () => {

        let fileImg = img.files[0]
        console.log('check')
        dispatch({ type: 'UPDATE_AUTH_INFO', payload: { coverimage: URL.createObjectURL(fileImg) } })

        let urlImg = await uploadToFirebase(fileImg)
        console.log(urlImg, 'chc')
        await axios.put(`https://beta-server-8uoh.onrender.com/api/v1/users/${UserData._id}`, {
            curentuserid: UserData._id,
            coverimage: urlImg
        }
        )
    }
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">

            <div onClick={() => { setOpenUpload(false) }} className="fixed top-0 left-0 right-0 bottom-0 ">

            </div>
            <div className="z-50 flex gap-4 flex-col bg-bglight dark:bg-bgmdark p-4 rounded-lg shadow-lg">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Change Your Cover Picture</label>
                <input onChange={(e) => { setImg(e.target) }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                <button onClick={() => { handleChangeImg() }} className='btn-green text-white dark:text-black bg-blue-500 dark:bg-greenyellow'> Update</button>
            </div>
        </div >



    )
}
