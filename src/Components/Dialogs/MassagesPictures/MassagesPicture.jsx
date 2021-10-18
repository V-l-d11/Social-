import React from 'react'
import s from './MassagesPictures.module.css'
import p from './../Dialog.module.css'

const MassagesPictures =(props)=>{
  return(
<div className={p.pictures}>
 <img  className={p.picture}  src={props.pictures} />
</div>
  )
}

export default MassagesPictures