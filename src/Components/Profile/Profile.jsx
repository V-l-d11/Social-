
import React from 'react'
import  profiles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsCountainer from './Myposts/MypostsCountainer';

const Profile = (props)=>{
 
  return(
    
     <div>
       <ProfileInfo />
       <MypostsCountainer   />
     </div>
  )
}

 
export default Profile