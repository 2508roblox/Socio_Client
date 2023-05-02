const initState = {
    allUserNotInFriends: null,
    allFriends: null,
    AllSentRequests: null,
    AllRequest: null,
    isLoading: false,
    isError: false,
}
export const CommunityReducer = (state = initState, action) => {

    switch (action.type) {
        case 'IS_GETTING':
            return { ...state, isLoading: true }
        case 'IS_ERROR':
            return { ...state, isLoading: true }
        case 'ALL_FRIENDS':
            return { ...state, isLoading: false, isError: false, allFriends: action.payload }
        case 'ALL_NOT_IN_FRIENDS':
            return { ...state, isLoading: false, isError: false, allUserNotInFriends: action.payload }
        case 'ALL_SENT_REQUEST':
            return { ...state, isLoading: false, isError: false, AllSentRequests: action.payload }
        case 'ALL_REQUEST':
            return { ...state, isLoading: false, isError: false, AllRequest: action.payload }

        default:
            return state
    }

}