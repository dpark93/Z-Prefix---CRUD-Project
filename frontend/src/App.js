import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { HomePage } from './Home/HomePage';
import { Inventory } from './Inventory/Inventory';
import { Details } from './Details/Details';
import { Visitor } from './Visitor/Visitor';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import React, { useEffect, useState, useContext, useCallback, createContext } from "react";
import { AuthContext } from './context/AuthContext';


export const userContext = React.createContext();

function App() {

  const [details, setDetails] = useState();

  const {currentUser} = useContext(AuthContext)


  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/Login" />
  }

  console.log(currentUser)


  return (
  <>

    <div className="App">

    <userContext.Provider value={{details, setDetails}}>
    <Routes>
          <Route path='/Login' element={<Login />} />

          <Route path='/' element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>} />

          <Route path='/Inventory' element={
            <RequireAuth>
              <Inventory /> 
            </RequireAuth>
        } />
           <Route path='/Register' element={ <Register />} />
          <Route path='/details/:id' element={ <Details item={details} />} />
          <Route path='/Visitor' element={<Visitor />}/>
    </Routes>
    </userContext.Provider>

    </div>
  </>    
  );
}

export default App;
