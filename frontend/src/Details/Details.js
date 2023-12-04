import './Details.css';
import { useState, useEffect, useContext } from 'react';


export const Details = ({item}) => {
  



  return (

    <div className='App-header'>
        <h1>{item.item_Name}</h1>
        <h3>Quantity:{item.quantity}</h3>
        <h4>{item.description}</h4>
    </div>

  )
}
