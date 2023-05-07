const initialState = {
    usersData: []
  }
  
  export default function TempDataReducer(state = initialState, action) {
    switch (action.type) {
      case 'SAVE_USER_INFO': {
        return { ...state, usersData: [...state.usersData, action.payload] };
      }
    
      default:
        return state
    }
  }