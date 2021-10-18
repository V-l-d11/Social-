
import React from 'react'
import  profiles from './MyPosts.module.css'
import Post from '../Post/Post'


const MyPosts = (props)=>{
 
  let newPostElement = React.createRef()

   let  onAddPost = ()=> {
     props.addOnButton()
   }
       
    let postElements = props.posts
    .map( posts=>  <Post  meassage ={posts.massage} likesCount={posts.likesCount} />)
    
   let onPostChange = ()=>{
     let text = newPostElement.current.value
    props.onPostChange(text)
   }

  return(
     
        <div>
       <div className = {profiles.tot}>
         My posts
         <div>New post
         </div>
         <textarea  onChange={onPostChange} ref={newPostElement}  value={props.newPostTex}  />
         <button onClick={onAddPost}>Add</button>
       </div>
       
      {postElements}
       
     </div> 
  )
}
export default MyPosts