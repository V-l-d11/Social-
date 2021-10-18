import './App.css';
import React from 'react';
import Header from './Components/Header/Heder';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import DialogsCounteiner from './Components/Dialogs/DialogsCounteiner';
import News from './Components/News/News';
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings';
import { BrowserRouter,Route} from "react-router-dom";
import UsersContainer from './Components/Users/Users';




let SomeNews = ()=> <News /> 
let SomeMusic =()=> <Music />
let SomeSettings = ()=> <Settings />

function App(props) {  
   
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
   <Header /> 
   <Nav /> 
   
  <div className= 'app-wrapper-content'>
      
    <Route  path="/dialogs" render ={ ()=> <DialogsCounteiner    /> } />
    <Route path="/profile"  render ={ ()=> <Profile    /> }   />
    <Route path="/users" render={()=> <UsersContainer /> } />
    <Route path="/news"  render ={ SomeNews } />
    <Route path="/music" render={SomeMusic} />
    <Route path='/settings' render={SomeSettings} />
      
  </div>

    </div>
    </BrowserRouter>
  );
}



export default App;

