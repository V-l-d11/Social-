import React from 'react'
import  classes from './Nav.module.css'

import { NavLink } from 'react-router-dom'


const Nav = ()=>{
  return(
     <nav className={classes.nav}>
          <div className= {classes.item}>
           <NavLink activeClassName={classes.active} to= '/profile'>Profile</NavLink> 
          </div>
          <div className= {`${classes.item} ${classes.active}`}>
            <NavLink activeClassName={classes.active} to='/dialogs'>Massages</NavLink>
          </div>
          <div className= {classes.item}>
            <NavLink activeClassName={classes.active} to='/news'>News</NavLink>
          </div>
          <div className= {classes.item}><NavLink activeClassName={classes.active} to='/music'>Music</NavLink></div>
          <div className= {classes.item}><NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink></div>
          <div className={classes.item}><NavLink activeClassName={classes.active} to='/users'>Users</NavLink></div>
      </nav>
     
  )
}

export default Nav