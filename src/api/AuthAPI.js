import axios from 'axios'

const baseURL = 'https://beta-server-8uoh.onrender.com/api/v1/auth';

export const RegisterAPI = async (data) => {
    try {
        const response = await axios.post(baseURL + '/register', data)
        return response
    } catch (error) {
        console.log(error) // thêm dòng này để xem lỗi thực sự là gì

    }
};
export const LoginAPI = async (data) => {
    try {
        const response = await axios.post(baseURL + '/login', data)
        return response
    } catch (error) {
        console.log(error) // thêm dòng này để xem lỗi thực sự là gì

    }
};