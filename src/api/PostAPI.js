import axios from 'axios'

const baseURL = 'https://beta-server-8uoh.onrender.com/api/v1/posts/';
export const CreatePostAPI = async (data) => {
    try {
        const response = await axios.post('https://beta-server-8uoh.onrender.com/api/v1/posts', data)
        return response
    } catch (error) {
        console.log('action error: ' + error.message)
        console.log(error)

    }
};
export const GetTimeLine = async (userid) => {
    try {
        const response = await axios.get(baseURL + userid + '/timeline/1')
        return response
    } catch (error) {
        console.log(error)

    }
};
export const GetUserPostAPI = async (userid) => {
    try {
        const response = await axios.get(baseURL + userid + '/1')
        return response
    } catch (error) {
        console.log(error)

    }
};