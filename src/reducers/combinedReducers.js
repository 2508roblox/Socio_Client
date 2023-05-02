import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import DarkModeReducer from './DarkModeReducer'
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';


export const rootReducer = combineReducers({
    DarkModeReducer, AuthReducer, UserReducer, PostReducer

})