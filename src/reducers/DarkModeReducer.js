const initialState = {
  isDarkMode: false
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'ON': {
      return { isDarkMode: true };
    }
    case 'OFF': {
      return { isDarkMode: false };




    }
    default:
      return state
  }
}