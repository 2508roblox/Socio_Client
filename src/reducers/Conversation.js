const initialState = {
    conversationData: null
}

export default function Conversation(state = initialState, action) {
    switch (action.type) {
        case 'CONVERSATION_DATA': {
            return { ...state, conversationData: action.payload };
        }






        default:
            return state
    }
}