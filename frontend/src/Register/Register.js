import './Register.css';
import { useState, useEffect, useContext } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


export const Register = () => {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordtwo, setPasswordtwo] = useState();
    const [displayName, setDisplayName] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userInfo, setUserInfo] = useState();
    const [exists, setExists] = useState(false);
    const [same, setNotSame] = useState();


    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext)



    useEffect(() => {
        fetch('http://localhost:8081/users')
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [userInfo])

    const usernamechecker = () =>{
        userInfo.forEach(element => {
            if(element.username.includes(displayName)){

                setExists(true)

            } else
            {

                setExists(false)
            }           
        });
    }



    const handleRegister =  (e) => {
 
         if ((displayName == null || password == null || email == null || passwordtwo == null) || password !== passwordtwo) {
            alert('Email, Username, and Password is required, Passwords must match!')
        } else {

               createUserWithEmailAndPassword(auth, email, password, displayName)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;

                        updateProfile(user, { displayName: displayName })
                        console.log(user)
                        // ...
                    })
                    .catch((error) => {
                        setError(true)
                        // ..
                    });
                adduser()
                navigate("/Login")
                            
        }
    }

    const adduser = () => {
        fetch('http://localhost:8081/users/', {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: displayName
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }




    return (

        <div className='login'>

            <div className='submitRegister'>
                <input type='email' placeholder='email' onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                <input type="password" placeholder='type password again' onChange={e => {setPasswordtwo(e.target.value); if(e.target.value !== password){setNotSame('Not Same')} else {setNotSame('Correct!')}}} />{same}
                <input type="text" placeholder='Username' onChange={e => setDisplayName(e.target.value)} />
                <input type="text" placeholder='First Name' onChange={e => setFirstName(e.target.value)} />
                <input type="text" placeholder='Last Name' onChange={e => setLastName(e.target.value)} />
                <button type='submit' onClick={() => {handleRegister()}}>Register</button>
                <p>Back to <Link to='/Login' className='backtoLog'>Login</Link></p>
            </div>

        </div>

    )
}
