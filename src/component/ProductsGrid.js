import React from 'react'
import Grid from '@material-ui/core/Grid';
import {ProductCard} from './ProductCard';
import {shoes} from '../context/Data';
import { Link } from 'react-router-dom';

export const ProductsGrid = () => {

return (
<div>
<div style={{textAlign:"center" }}>
            <h1>Stylish Shoes</h1>
            </div>
        
{/* <Grid container  style={{padding:"25px 10px 20px 35px"}} flexGrow={1}> */}
<Grid container  style={{flexGrow:"1"}} >

{Object.entries(shoes).map(([slug,{name,img,price}])=>(


 <Grid item key={slug} style={{padding:"0px 0px 30px 50px"}} xs={12} sm={4}>
  {/* <Grid item center key={slug} style={{backgroundColor:"red", }} xs={12} sm={4}>  */}
   
    <Link to={slug} style={{textDecoration:"none"}}>
<ProductCard  name={name} img={img} price={price} />
</Link>
</Grid> 

))}


 
 
 

</Grid>

</div>    )
}
