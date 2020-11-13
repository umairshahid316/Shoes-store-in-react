import { Grid } from '@material-ui/core';
import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import { useParams } from 'react-router-dom';
import {shoes} from '../context/Data';
import '../App.css';
import Button from '@material-ui/core/Button';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export const ProductDetails = () => {

    const { productid } = useParams();
    const {AddNewCart} = useContext(GlobalContext);

    const shoe = shoes[productid];
    if (!shoe) {
        return <h2>Not Found!</h2>;
      }

      const { name, img, price, details } = shoe;

const AddCart=()=>{
  AddNewCart({id:productid});
  
}



    return (
       
       <div>
         <br/><br/><br/>
    <Grid container  >

    <Grid item  xs={12} sm={12} md={6}  >
      <img  src={img} className="pDetailPic"  alt={name} />
      </Grid> 
     
      <Grid item  xs={12} sm={12} md={6}   >
     <div style={{marginLeft:"25px"}} >
      <h1>{name}</h1>
      <h2>${price}</h2>

      <p >{details}</p>

      <br/><br/><br/>
      <div style={{textAlign:"center"}}>
      <Button variant="contained" onClick={AddCart} style={{backgroundColor:"black", color:"white", padding:"13px" }}  startIcon={<ShoppingCartIcon />}>
        Add to Cart
      </Button>
      </div>

      </div>

      </Grid>

      </Grid>
        </div>
    )
}
