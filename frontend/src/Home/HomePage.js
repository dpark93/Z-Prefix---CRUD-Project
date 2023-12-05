import './HomePage.css';
import { useState, useEffect, useContext } from 'react';
import { auth } from "../firebase"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Logout } from '../Logout/Logout';


export const HomePage = () => {


  return (
    <>

      <div className="nav">
        <div className='links'>
          <Link to='/' className='NavBar'>Home</Link>
          <Link to='/Inventory' className='NavBar'>Inventory</Link>
        </div>
        <Logout />
      </div>
      <div className='login'>
        <h1>HomePage</h1>
      </div>
    </>
  )
}
