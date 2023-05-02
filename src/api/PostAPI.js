import axios from 'axios'

const baseURL = 'http://localhost:8080/api/v1/posts/';
export const CreatePostAPI = async (data) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/posts', data)
        return response
    } catch (error) {
        console.log('action error: ' + error.message)
        console.log(error)

    }
};
export const GetTimeLine = async (userid) => {
    try {
        const response = await axios.get(baseURL + userid + '/timeline')
        return response
    } catch (error) {
        console.log(error)

    }
};
export const GetUserPostAPI = async (userid) => {
    try {
        const response = await axios.get(baseURL + userid)
        return response
    } catch (error) {
        console.log(error)

    }
};