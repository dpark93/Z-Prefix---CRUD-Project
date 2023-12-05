import './HomePage.css';
import { useState, useEffect, useContext } from 'react';
import { auth } from "../firebase"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Logout } from '../Logout/Logout';
import { userContext } from '../App';


export const HomePage = () => {

  const {userdata, setUserdata} = useContext(userContext)
  const {userdata, setUserdata, thisuser, setThisuser} = useContext(userContext)
  const [userInfo, setUserInfo] = useState();
  
  useEffect(() => {
    fetch('http://localhost:8081/users')
        .then(res => res.json())
        .then(data => {
          setUserInfo(data);
          data.forEach(element => {
            if(element.username.includes(thisuser)){
              setUserIDinput(element.user_id)
            } else{
              setUserIDinput(4)
            }
            
          });
        })
}, [])

  return (
    <>

      <div className="nav">
        <div className='links'>
          <Link to='/' className='NavBar'>Home</Link>
          <Link to='/Inventory' className='NavBar'>Inventory</Link>
        </div>
        <Logout />
      </div>
      <div className='mainpage'>
        <h1>Welcome Back!</h1>
        <h3>User Name: {userdata.displayName}</h3>
        <h3>Email: {userdata.email}</h3>
      </div>
    </>
  )
}
