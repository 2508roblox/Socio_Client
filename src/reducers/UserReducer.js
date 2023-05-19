const initialState = {
    viewingUser: null,
    // communitypage
    allUsersNonFriends: null,
    allSentRequests: null,
    allRequests: null,
    allFriends: null,
    isLoading: false,
    isErr: false,
}

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        // Non Friends
        case 'NON_FRIENDS_STARTING': {
            return { ...state, isLoading: true, isErr: false };
        }
        case 'NON_FRIENDS_SUCCESSFULLY': {
            return {
                ...state, isLoading: false, isErr: false, allUsersNonFriends: action.payload, allSentRequests: null,
                allRequests: null,
                allFriends: null,
            };
        }
        case 'NON_FRIENDS_ERROR': {
            return { isErr: true, isLoading: false };
        }
        //-- more
        case 'NON_FRIENDS_MORE': {
            return {
                ...state, isLoading: false, isErr: false, allUsersNonFriends: state.allUsersNonFriends.concat(action.payload), allSentRequests: null,
                allRequests: null,
                allFriends: null,
            };
        }





        // Friends
        case 'ALL_FRIENDS_STARTING': {
            return { ...state, isLoading: true, isErr: false };
        }
        case 'ALL_FRIENDS_SUCCESSFULLY': {
            return {
                ...state, isLoading: false, isErr: false, allFriends: action.payload,

                allSentRequests: null,
                allRequests: null,
                allUsersNonFriends: null,
            };
        }
        case 'ALL_FRIENDS_ERROR': {
            return { isErr: true, isLoading: false };
        }


        // Requests
        case 'ALL_REQ_STARTING': {
            return { ...state, isLoading: true, isErr: false };
        }
        case 'ALL_REQ_SUCCESSFULLY': {
            return {
                ...state, isLoading: false, isErr: false, allRequests: action.payload,

                allSentRequests: null,
                allFriends: null,
                allUsersNonFriends: null,
            };
        }
        case 'ALL_REQ_ERROR': {
            return { isErr: true, isLoading: false };
        }


        // Requestings
        case 'ALL_SENT_REQ_STARTING': {
            return { ...state, isLoading: true, isErr: false };
        }
        case 'ALL_SENT_REQ_SUCCESSFULLY': {
            return {
                ...state, isLoading: false, isErr: false, allSentRequests: action.payload,

                allRequests: null,
                allFriends: null,
                allUsersNonFriends: null,
            };
        }
        case 'ALL_SENT_REQ_ERROR': {
            return { isErr: true, isLoading: false };
        }
        //viewingUser
        case 'VIEW_LOADING': {
            return { ...state, isLoading: true, isErr: false };
        }
        case 'COMMUNITY_VIEW_SUCCESSFULLY': {
            return {
                ...state, isLoading: false, isErr: false, viewingUser: action.payload,
            };
        }
        case 'AUTH_VIEW_SUCCESSFULLY': {
            return {
                ...state, isLoading: false, isErr: false, viewingUser: action.payload,
            };
        }
        case 'VIEW_ERROR': {
            return { isErr: true, isLoading: false };
        }
        //update
        case "UPDATE_INFO":
            return { ...state, viewingUser: { ...state.viewingUser, ...action.payload } };
        default:
            return state
    }
}