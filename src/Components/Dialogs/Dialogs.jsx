import React from 'react'
import s from './Dialog.module.css'
import DialogItem from './DialogItem/DialogItem'
import MassageItem from './Massage/Massage'
import MassagesPictures  from './MassagesPictures/MassagesPicture'

const Dialogs = (props)=>{
  let state = props.massagesPage
       
let dialogsElements =  state.dialogs.map( dialog=>  <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />  )
        
let massagesElements = state.massages.map(massage=> <MassageItem name={massage.massage} key={massage.id}   /> )

let massagesPictures = state.pictures.map(pictures=> <MassagesPictures pictures={pictures.url} key={pictures.id} /> )


  let newMassageElement = React.createRef()
let addNewMassage= ()=>{
 props.sendMassage()
}
let onMassageCgange= ()=>{
 
  let text = newMassageElement.current.value
  props.onMassageCgange(text)
}


  return(
     
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>

        {dialogsElements}
        
         
        </div>
        
        <div className={s.main }>

        <div className={s.pictures}>
            {massagesPictures}
            <textarea onChange={onMassageCgange} ref={newMassageElement} value={props.newPostmassage}></textarea>
            <button onClick={addNewMassage}>Add</button>
        </div>
        <div className={s.massages}>
             {massagesElements}
        </div>

        </div>

    </div>
 )

}

export default Dialogs