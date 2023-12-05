import './Register.css';
import { useState, useEffect, useContext } from 'react';
import { createUserWithEmailAndPassword   } from "firebase/auth";
import {auth} from "../firebase"
import {Link, useNavigate } from 'react-router-dom' ;
import { AuthContext } from '../context/AuthContext';


export const Register = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleRegister = (e) =>{
    e.preventDefault();

    createUserWithEmailAndPassword  (auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      navigate("/Login")
      // ...
    })
    .catch((error) => {
      setError(true)
      // ..
    });
  }
  

  return (

    <div className='login'>
         <form onSubmit={handleRegister}>
          <input type='email' placeholder='email' onChange={e => setEmail(e.target.value)}/>
          <input type="password"  placeholder='password' onChange={e => setPassword(e.target.value)}/>
          <button type='submit'>Register</button>
          <p><p>Back to <Link to='/Login' className='backtoLog'>Login</Link></p></p>
         </form>
    </div>

  )
}
