import axios from 'axios'

const baseURL = 'http://localhost:8080/api/v1/friends/';
export const GetAllUsersNonFriends = async (userId) => {
    try {
        const response = await axios.get(baseURL + userId + '/allnonfriends')
        return response
    } catch (error) {
        console.log(error) 

    }
};
export const GetAllFriends = async (userId) => {
    try {
        const response = await axios.get(baseURL + userId + '/allfriends')
        return response
    } catch (error) {
        console.log(error) 

    }
};//by other's people
export const GetAllReq = async (userId) => {
    try {
        const response = await axios.get(baseURL + userId + '/allrequestbyotherpeople')
        return response
    } catch (error) {
        console.log(error) 

    }
};
//by this user
export const GetAllSentReq = async (userId) => {
    try {
        const response = await axios.get(baseURL + userId + '/allrequestbyuser')
        return response
    } catch (error) {
        console.log(error) 

    }
};
