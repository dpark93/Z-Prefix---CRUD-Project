import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { HomePage } from './Home/HomePage';
import { Inventory } from './Inventory/Inventory';

function App() {




  return (
  <>
        <div className="nav">
          <div className='links'>
          <Link to='/' className='NavBar'>Home</Link>
          <Link to='/Inventory' className='NavBar'>Inventory</Link>
          </div>
        </div>


    <div className="App">

    <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Inventory' element={<Inventory />} />
    </Routes>

    </div>
  </>    
  );
}

export default App;
