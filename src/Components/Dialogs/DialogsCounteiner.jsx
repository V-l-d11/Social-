import React from 'react'

import Dialogs from './Dialogs'
import { connect } from 'react-redux'



let mapStateToProps =(state)=>{
 return {
   massagesPage: state.massagesPage
 }
}
let mapDispatchToProps=(dispatch)=>{
return {
onMassageCgange: (text)=>{dispatch({type: 'UPDATE-NEW-MASSAGE' ,newMassage: text })},
sendMassage: ()=>{dispatch({type: 'ADD-MASSAGE'})},
}
}
 const DialogsCounteiner = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default  DialogsCounteiner