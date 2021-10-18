import {combineReducers, createStore} from "redux"
import profileReducer from './profileReducer'
import massageReducer from './massageReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer'

let reducers = combineReducers({
   profilePage : profileReducer ,
   massagesPage: massageReducer,
   sidebar : sidebarReducer,
   usersPage:  usersReducer
}) 
let store = createStore(reducers)

export default store