const initialState = {
    onlineUser: null
  }
  
  export default function OnlineUserReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_ONLINE_USER': {
        return { ...state, onlineUser: action.payload };
      }
      default:
        return state
    }
  }