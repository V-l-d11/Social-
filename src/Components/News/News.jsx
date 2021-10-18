import React from 'react'
import clases from './News.module.css'




const News = (props)=>{
 let addNewsElement = React.createRef()
  let addNewMusic =()=>{
    let text = addNewsElement.current.value 
    alert(text)
  }

  return(
      <div>
        Hello
         <textarea ref={addNewsElement}></textarea>
         <button onClick={addNewMusic}>Add</button>
      </div>
  )
}

export default News
 