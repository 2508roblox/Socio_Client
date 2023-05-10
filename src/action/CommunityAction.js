
import { GetAllFriends, GetAllUsersNonFriends, GetAllReq, GetAllSentReq } from './../api/UserAPI';


export const AllUsersAction = (userid) => async (dispatch) => {
    try {
        dispatch({ type: "NON_FRIENDS_STARTING" })
        dispatch({ type: "REMOVE_USER_POST" })

        let res = await GetAllUsersNonFriends(userid)
        let data = res.data
        dispatch({ type: "NON_FRIENDS_SUCCESSFULLY", payload: data })


    } catch (error) {
        dispatch({ type: "NON_FRIENDS_ERROR" })
    }
}
export const AllFriendsAction = (userid) => async (dispatch) => {
    try {
        dispatch({ type: "ALL_FRIENDS_STARTING" })
        dispatch({ type: "REMOVE_USER_POST" })

        let res = await GetAllFriends(userid)
        let data = res.data
        dispatch({ type: "ALL_FRIENDS_SUCCESSFULLY", payload: data })


    } catch (error) {
        dispatch({ type: "ALL_FRIENDS_ERROR" })
    }
}

export const AllReqAction = (userid) => async (dispatch) => {
    try {
        dispatch({ type: "ALL_REQ_STARTING" })
        dispatch({ type: "REMOVE_USER_POST" })

        let res = await GetAllReq(userid)
        let data = res.data
        dispatch({ type: "ALL_REQ_SUCCESSFULLY", payload: data })


    } catch (error) {
        dispatch({ type: "ALL_REQ_ERROR" })
    }
}
export const AllSentReqAction = (userid) => async (dispatch) => {
    try {
        dispatch({ type: "ALL_SENT_REQ_STARTING" })
        dispatch({ type: "REMOVE_USER_POST" })

        let res = await GetAllSentReq(userid)
        let data = res.data
        dispatch({ type: "ALL_SENT_REQ_SUCCESSFULLY", payload: data })


    } catch (error) {
        dispatch({ type: "ALL_SENT_REQ_ERROR" })
    }
}
