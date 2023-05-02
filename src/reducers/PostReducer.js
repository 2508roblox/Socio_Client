const initState = {
    isLoading: false,
    isErr: false,
    userPosts: null,
    timelinePosts: null
}

const PostReducer = (state = initState, action) => {
    switch (action.type) {
        //posting
        case "IS_POSTING":
            return { ...state, isLoading: true };
        case "POSTING_SUCCESSFULLY":
            if (state.userPosts) {
                console.log('asdf')

                return { ...state, isLoading: false, timelinePosts: [action.payload, ...state.timelinePosts], userPosts: [action.payload, ...state.userPosts] };

            } else {
                console.log('done')
                return { ...state, isLoading: false, timelinePosts: [action.payload, ...state.timelinePosts] };

            }
        case "POSTING_ERROR":
            return { ...state, isErr: true, isLoading: false };
        case "ROMOVE":
            return { ...state, isErr: true, isLoading: false };
        // getitmeline
        case "IS_TIMELINE":
            return { ...state, isLoading: true, isErr: false };
        case "TIMELINE_SUCCESSFULLY":
            return { ...state, isLoading: false, isErr: false, timelinePosts: action.payload };
        case "TIMELINE_ERROR":
            return { ...state, isLoading: false, isErr: true };
        //getuserpost
        case "USER_POST_STARTING":
            return { ...state, isLoading: true };
        case "USER_POST_SUCCESSFULLY":
            return { ...state, isLoading: false, userPosts: action.payload };
        case "USER_POST_ERROR":
            return { ...state, isErr: true, isLoading: false };

        default:
            return state; // explicitly return initial state if state is undefined

    }
}
export default PostReducer