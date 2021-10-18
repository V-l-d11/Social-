
 let initialState = {
 post: [
  {id:1, massage:'Hi , how i you?' , likesCount: 12 },
  {id:2, massage:'Its my first post' , likesCount:10},
  {id:3 , massage:'Hahaha' , likesCount: 40}
  ],
  newPostText: 'MyProduction',
  
  }

 const profileReducer = (state = initialState,action)=>{
   switch(action.type){
     case 'ADD-POST' : {
     let newPost = {
         id:5,
         massage:state.newPostText,
         likesCount: 0, 
      }
      return  {
         ...state,
         post: [...state.post,newPost],
         newPostText: ''
      }
   }
      case 'UPDATE-NEW-POST-TEXT':{ 
     return  {
         ...state,
         newPostText:action.newText
      }
      
    
      }
      default: return state
   }
   

}

export default profileReducer 