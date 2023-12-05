import './Register.css';
import { useState, useEffect, useContext } from 'react';
import { createUserWithEmailAndPassword , updateProfile   } from "firebase/auth";
import {auth} from "../firebase"
import {Link, useNavigate } from 'react-router-dom' ;
import { AuthContext } from '../context/AuthContext';


export const Register = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayName, setDisplayName] = useState();

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)


  const handleRegister = (e) =>{
    e.preventDefault();

    createUserWithEmailAndPassword  (auth, email, password, displayName)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;

      updateProfile(user, {displayName: displayName})
      console.log(user)
      // ...
    })
    .catch((error) => {
      setError(true)
      // ..
    });
    navigate("/Login")
  }
  

  return (

    <div className='login'>
         <form onSubmit={handleRegister}>
          <input type='email' placeholder='email' onChange={e => setEmail(e.target.value)}/>
          <input type="password"  placeholder='password' onChange={e => setPassword(e.target.value)}/>
          <input type="text"  placeholder='Username' onChange={e => setDisplayName(e.target.value)}/>
          <button type='submit'>Register</button>
          <p><p>Back to <Link to='/Login' className='backtoLog'>Login</Link></p></p>
         </form>
    </div>

  )
}
