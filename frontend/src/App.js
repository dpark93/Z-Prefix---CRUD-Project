import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { HomePage } from './Home/HomePage';
import { Inventory } from './Inventory/Inventory';
import { Details } from './Details/Details';
import { Visitor } from './Visitor/Visitor';
import React, { useEffect, useState, useContext, useCallback, createContext } from "react";

export const userContext = React.createContext();

function App() {

  const [details, setDetails] = useState();



  return (
  <>

    <div className="App">

    <userContext.Provider value={{details, setDetails}}>
    <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Inventory' element={<Inventory />} />
          <Route path='/details/:id' element={ <Details item={details} />} />
          <Route path='/Visitor' element={<Visitor />}/>
    </Routes>
    </userContext.Provider>

    </div>
  </>    
  );
}

export default App;
