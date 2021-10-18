import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { followAC, unfollowAC , setUserssAC} from '../../redux/usersReducer'


let  mapStateToProps= (state)=>{   
  return{
   users: state.usersPage.users
  }
}

let mapDispatchToProps =(dispatch)=>{
   return{
   follow:  (userId)=>{
     dispatch(followAC(userId))
   },
   unfollow: (userId)=>{
     dispatch(unfollowAC(userId))
   },
   setUsers: (users)=>{
     dispatch(setUserssAC(users))
   }
   }
}

 const UsersContainers= connect(mapStateToProps, mapDispatchToProps)(Users) 
 export default UsersContainers