import './HomePage.css';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Logout } from '../Logout/Logout';
import { userContext } from '../App';


export const HomePage = () => {

  const { userdata } = useContext(userContext)
  const { thisuser } = useContext(userContext)
  const [userInfo, setUserInfo] = useState();


  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => {
        data.forEach(element => {
          if (element.username.includes(thisuser)) {
            setUserInfo(element)
            localStorage.setItem("userInfo", JSON.stringify(element))
            localStorage.setItem("userdata", JSON.stringify(userdata))
          } else {
            setUserInfo({})
          }
        });
      })

  }, [])




  return !userInfo ? null : ((
    <>

      <div className="nav">
        <div className='links'>
          <Link to='/' className='NavBar'>Home</Link>
          <Link to='/Inventory' className='NavBar'>Inventory</Link>
        </div>
        <Logout />
      </div>
      <div className='mainpage'>
        <p className='welcome'>Welcome Back!</p>
        <h2>{!JSON.parse(localStorage.getItem("userInfo")) ? '' : JSON.parse(localStorage.getItem("userInfo")).firstName} {!JSON.parse(localStorage.getItem("userInfo")) ? '' : JSON.parse(localStorage.getItem("userInfo")).lastName}</h2>
        <h3>User Name: {!JSON.parse(localStorage.getItem("userdata")) ? 'none' :  JSON.parse(localStorage.getItem("userdata")).displayName}</h3>
        <h3>Email: {!JSON.parse(localStorage.getItem("userdata")) ? 'none' :  JSON.parse(localStorage.getItem("userdata")).email}</h3>
      </div>
    </>
  ))
}
