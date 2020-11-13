import React,{useContext,useState} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {shoes} from '../context/Data';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import '../App.css';

export const CartCard = ({cart}) => {
    
    const shoe = shoes[cart.id];
    const { name, img, price, details } = shoe;
    const {deleteCart} = useContext(GlobalContext);
    
    const delProduct=()=>{
      deleteCart(cart.id)
    }
    
    
    return (
        <li>

              
              <img  src={img} className="cartPic"  alt={name} />

            <div className="main">            
               
               <div className="Pname"> 
               <h2>{name}</h2>
          
                <h3>Price ${price}</h3>
          
              </div> 


              <IconButton onClick={delProduct} aria-label="delete" >
          <DeleteIcon fontSize="large" />
            </IconButton>
        
            </div>       
        </li>
    )
}
