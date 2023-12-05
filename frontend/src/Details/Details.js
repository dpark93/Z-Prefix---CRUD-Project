import './Details.css';
import { useState, useEffect, useContext } from 'react';
import {Link, useNavigate } from 'react-router-dom' ;


export const Details = ({item}) => {
  



  return (

    <div className='App-header'>
        <p className="back" onClick={() => window.history.back()}>Back to Inventory</p>
        <h1>{item.item_Name}</h1>
        <h3>Quantity:{item.quantity}</h3>
        <div className='box'>
        <h4>{item.description}</h4>
        </div>
    </div>

  )
}
