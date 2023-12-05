import './Logout.css';
import { useState, useEffect, useContext } from 'react';
import {auth} from "../firebase"
import {Link, useNavigate } from 'react-router-dom' ;
import { AuthContext } from '../context/AuthContext';


export const Logout = () => {
  const {dispatch} = useContext(AuthContext)

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
  }

  return (
<>
    <button className="logout" onClick={() => {handleLogout()}}>Logout</button>
</>
  )
}
