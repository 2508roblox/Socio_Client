import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import DarkModeReducer from './DarkModeReducer'
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import PostReducer from './PostReducer';
import Conversation from './Conversation';
import OnlineUserReducer from './OnlineUserReducer';
import TempDataReducer from './TempDataReducer';
import NavReducer from './NavReducer';


export const rootReducer = combineReducers({
    DarkModeReducer, AuthReducer, UserReducer, PostReducer, Conversation, OnlineUserReducer, TempDataReducer, NavReducer

})