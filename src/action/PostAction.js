
import { CreatePostAPI, GetTimeLine, GetUserPostAPI } from './../api/PostAPI';



export const CreatePostAction = (postData) => async (dispatch) => {
    try {
        dispatch({ type: "IS_POSTING" })
        console.log('time')
        let res = await CreatePostAPI(postData)
        let dataRes = await res.data
        dispatch({ type: "POSTING_SUCCESSFULLY", payload: dataRes })


    } catch (error) {
        console.log(error)

        dispatch({ type: "POSTING_ERROR" })
    }
}
export const GetTimeLineAction = (userid) => async (dispatch) => {
    try {
        dispatch({ type: "IS_TIMELINE" })
        let res = await GetTimeLine(userid)
        let data = res.data
        dispatch({ type: "TIMELINE_SUCCESSFULLY", payload: data })


    } catch (error) {
        dispatch({ type: "TIMELINE_ERROR" })
    }
}

export const GetUserPost = (userid) => async (dispatch) => {
    try {
        dispatch({ type: "USER_POST_STARTING" })
        let res = await GetUserPostAPI(userid)
        let data = res.data
        dispatch({ type: "USER_POST_SUCCESSFULLY", payload: data })



    } catch (error) {
        dispatch({ type: "USER_POST_ERROR" })
    }
}
