import './Inventory.css';
import { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import trashbin from './trashbin.png';
import AddButton from './AddButton';
import EditButton from './EditButton'
import { Link, useNavigate } from 'react-router-dom';
import { Logout } from '../Logout/Logout';

export const Inventory = () => {

  const [data, setData] = useState();
  const [userdata, setUserData] = useState();
  const [filter, setFilter] = useState('All');
  const { details, setDetails } = useContext(userContext);
  

  useEffect(() => {
    if (filter == 'All') {
      Promise.all([
        fetch('http://localhost:8081/inventory').then((res) => res.json()),
        fetch('http://localhost:8081/users').then((res) => res.json()),
      ])
        .then(([inventoryData, usersData]) => {
          setData(inventoryData);
          setUserData(usersData)
        })

    } else {
      Promise.all([
        fetch(`http://localhost:8081/inventory/byUser/${filter}`).then((res) => res.json()),
        fetch('http://localhost:8081/users').then((res) => res.json()),
      ])
        .then(([inventoryData, usersData]) => {
          setData(inventoryData);
          setUserData(usersData)
        })
    }
  }, [data])


  const deleteItem = (item_id) => {
    fetch(`http://localhost:8081/inventory/${item_id}`, {
      method: 'DELETE',
    });
  }


  return (!data && !userdata) ? null : ((
    <>

      <div className="nav">
        <div className='links'>
          <Link to='/' className='NavBar'>Home</Link>
          <Link to='/Inventory' className='NavBar'>Inventory</Link>
        </div>
        <Logout />
      </div>

      <div className="addbutton">
        <AddButton />
      </div>


      <div className='maintable'>
        <table>
          <tr className='columntitle'>
            <th>
              <select className='categorySelect' onChange={(e) => { setFilter(e.target.value) }}>
                <option value="All">All Username</option>
                {userdata.map((data, index) => <option value={data.username}>{data.username}</option>)}
              </select>
            </th>
            <th>Item</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>

          {data.map((data, index) => <tr><td>{data.username}</td><td><div className='entity'><Link to={`/details/${data.item_id}`} onClick={() => { setDetails(data) }}><div className='detailLink'>{data.item_Name}</div></Link><span><EditButton id={data.item_id} username={data.username} description={data.description} quantity={data.quantity} selector={"itemName"} /></span></div></td> <td><div className='entity'><div className='descriptionlimit'>{data.description}</div><span><EditButton id={data.item_id} username={data.username} description={data.description} quantity={data.quantity} selector={"description"} /></span></div></td> <td><div className='entity'>{data.quantity}<span><EditButton id={data.item_id} username={data.username} description={data.description} quantity={data.quantity} selector={"quantity"} /></span></div></td>
            <td><button onClick={() => { deleteItem(data.item_id) }} className="trashbutton"><img src={trashbin} alt="trashbin" className='trashimage'></img></button></td>
          </tr>)}
        </table>
      </div>
    </>
  ))
}
