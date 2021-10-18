import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo =(props)=>{
  return(
    <div>
  <div>
       <img src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=828&q=80" />
       </div>    
       <div className={s.massage}>
         Avatar + description
       </div>
       </div>
       
  )
}

export default ProfileInfo