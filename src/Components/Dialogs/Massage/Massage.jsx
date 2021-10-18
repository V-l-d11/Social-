import React from 'react'
import s from './../Dialog.module.css'



const MassageItem = (props)=>{

  
  return(
    <div className={s.massage}>
      
      <div className={s.lan}>{props.name}</div>
     
       
      </div>
  )
}


export default MassageItem