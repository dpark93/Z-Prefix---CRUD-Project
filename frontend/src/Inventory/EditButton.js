import { useState, useEffect, useContext } from 'react';
import { userContext } from '../App';
import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import './Inventory.css';
import editicon from './edit.png'

export default function EditButton(props) {

  const [anchor, setAnchor] = useState(null);
  const [item, setItem] = useState();
  const [userIDinput, setUserIDinput] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();



  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;


  const updateItem = (updateID) => {

    fetch(`http://localhost:8081/inventory/${updateID}`, {
      method: 'PUT',
      body: JSON.stringify({
        userID: userIDinput,
        item_Name: item,
        description: description,
        quantity: quantity
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  



if(props.selector === 'itemName'){
    return( 

        <div>
        <Button aria-describedby={id} type="button" onClick={handleClick}>
        <img src={editicon} alt="trashbin" className='editimage'></img>
        </Button>
        <BasePopup id={id} open={open} anchor={anchor} placement="bottom">
          <PopupBody>
          <div className='inputBox'>
            <div className='inputs'>
              <label for="Item">Item Name</label>
              <input name="Item" type='text' placeholder='Item' onChange={(e) => { setItem(e.target.value) }} value={item}></input>
            </div>

                
            <div className='inputs'>
            <button onClick={()=> {updateItem(props.id)}}>Update</button>
            </div>

          </div>    
            </PopupBody>
        </BasePopup>
      </div>
    );
} else if(props.selector === 'description'){
    return( 
        <div>
        <Button aria-describedby={id} type="button" onClick={handleClick}>
        <img src={editicon} alt="trashbin" className='editimage'></img>
        </Button>
        <BasePopup id={id} open={open} anchor={anchor} placement="bottom">
          <PopupBody>
          <div className='inputBox'>
            <div className='inputs'>
              <label for="Item">Description</label>
              <input name="Item" type='text' placeholder='description' onChange={(e) => { setDescription(e.target.value) }} value={description}></input>
            </div>

                
            <div className='inputs'>
            <button onClick={()=> {updateItem(props.id)}}>Update</button>
            </div>

          </div>    
            </PopupBody>
        </BasePopup>
      </div>
    );
} else if(props.selector === 'quantity'){
    return( 
        <div>
        <Button aria-describedby={id} type="button" onClick={handleClick}>
        <img src={editicon} alt="trashbin" className='editimage'></img>
        </Button>
        <BasePopup id={id} open={open} anchor={anchor} placement="bottom">
          <PopupBody>
          <div className='inputBox'>
            <div className='inputs'>
              <label for="Item">Quantity</label>
              <input name="Item" type='number' placeholder='quantity' onChange={(e) => { setQuantity(e.target.value) }} value={quantity}></input>
            </div>

                
            <div className='inputs'>
            <button onClick={()=> {updateItem(props.id)}}>Update</button>
            </div>

          </div>    
            </PopupBody>
        </BasePopup>
      </div>
    );
}


}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#808080',
  500: '#808080',
  600: '#808080',
  700: '#0066CC',
};

const PopupBody = styled('div')(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#FFF'};
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  z-index: 1;
`,
);

const Button = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 600;
  font-size: 0.875rem;

  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 4px 8px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);