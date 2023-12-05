import './HomePage.css';
import { useState, useEffect, useContext } from 'react';
import {auth} from "../firebase"
import {Link, useNavigate } from 'react-router-dom' ;
import { AuthContext } from '../context/AuthContext';


export const HomePage = () => {
  const {dispatch} = useContext(AuthContext)

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }

  return (
<>
    
    <div className="nav">
    <div className='links'>
    <Link to='/' className='NavBar'>Home</Link>
    <Link to='/Inventory' className='NavBar'>Inventory</Link>
    </div>
    <button className="logout" onClick={() => {handleLogout()}}>Logout</button>
  </div>
    <div className='login'>
      <h1>HomePage</h1>
    </div>
</>
  )
}
