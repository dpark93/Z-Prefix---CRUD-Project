import './Inventory.css';
import { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import trashbin from './trashbin.png';
import AddButton from './AddButton';
import EditButton from './EditButton'

export const Inventory = () => {
  
  const [data, setData] = useState();

  useEffect(()=> {

      fetch('http://localhost:8081/inventory')
      .then(res => res.json())
      .then(data => setData(data))

  },[data])

  const deleteItem = (item_id) =>{
    fetch(`http://localhost:8081/inventory/${item_id}`, {
        method: 'DELETE',
      });
  }




  return !data ? null : ((
<>

<div className="addbutton">
  <AddButton />
</div>


<div className='maintable'>
    <table>
      <tr className='columntitle'>
        <th>User</th>
        <th>Item</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Delete</th>
      </tr>

       {data.map((data, index) => <tr><td>{data.username}</td><td><div className='entity'>{data.item_Name}<span><EditButton id={data.item_id} username={data.username} description={data.description} quantity={data.quantity} selector={"itemName"}/></span></div></td> <td><div className='entity'>{data.description}<span><EditButton id={data.item_id} username={data.username} description={data.description} quantity={data.quantity} selector={"description"}/></span></div></td> <td><div className='entity'>{data.quantity}<span><EditButton id={data.item_id} username={data.username} description={data.description} quantity={data.quantity} selector={"quantity"}/></span></div></td> 
       <td><button onClick={()=> {deleteItem(data.item_id)}} className="trashbutton"><img src={trashbin} alt="trashbin" className='trashimage'></img></button></td> 
       </tr>)} 
    </table>
</div>
</>
  ))
}
