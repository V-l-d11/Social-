import React from 'react'
import  profiles from './MyPosts.module.css'
import Post from '../Post/Post'
import MyPosts from './Myposts'
import { connect } from 'react-redux'


let mapStateToProps= (state)=>{
  return{
 posts:state.profilePage.post,
 newPostTex:state.profilePage.newPostTex
  }
}
let mapDispatchToProps=(dispatch)=>{
  return {
onPostChange: (text)=>{
  let action = {type: 'UPDATE-NEW-POST-TEXT' , newText: text}
  dispatch( action)},
addOnButton:()=>{dispatch( {type: 'ADD-POST'})}
  }
}
const MypostsCountainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MypostsCountainer

 