import './Inventory.css';
import { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import trashbin from './trashbin.png';

export const Inventory = () => {
  
  const [data, setData] = useState();

  useEffect(()=> {

      fetch('http://localhost:8081/inventory')
      .then(res => res.json())
      .then(data => setData(data))

  },[data])

  const deleteBills = (item_id) =>{
    fetch(`http://localhost:8081/inventory/${item_id}`, {
        method: 'DELETE',
      });
  }


  return !data ? null : ((
<>
<div className='maintable'>
    <table>
      <tr className='columntitle'>
        <th>Item</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>

       {data.map((data, index) => <tr><td>{data.item_Name}</td> <td>{data.description}</td> <td>{data.quantity}</td> 
       <td>Edit</td>
       <td><button onClick={()=> {deleteBills(data.item_id)}} className="trashbutton"><img src={trashbin} alt="trashbin" className='trashimage'></img></button></td> 
       </tr>)} 
    </table>
</div>
</>
  ))
}
