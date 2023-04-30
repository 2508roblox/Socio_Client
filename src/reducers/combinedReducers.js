import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import DarkModeReducer from './DarkModeReducer'
import  AuthReducer  from './AuthReducer';


export const rootReducer = combineReducers({
    DarkModeReducer, AuthReducer

})