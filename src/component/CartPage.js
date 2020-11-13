import { Grid } from '@material-ui/core';
import React, {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {CartCard} from './CartCard';
import '../App.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import dialog from '../images/dialog.jpg'
import {shoes} from '../context/Data';



export const CartPage = () => {
    const {carts, deleteAllCart} = useContext(GlobalContext); 

    const [open, setOpen] = React.useState(false);

    let shoe;
    const amount = carts.map((cart)=>   (shoe = (shoes[cart.id].price))   );
console.log("amount ",amount)
    
    const total = amount.reduce((acc, item) => (acc += item),0);

    console.log("total ",total)


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        
        setOpen(false);
      
    };

    const deleteCart = ()=>{
        deleteAllCart();
        handleClose();
    }

    


    if(carts.length==0){
        return(
            
            <div style={{textAlign:"center" }}>
            <h1>Cart</h1>
            <br/><br/><br/>
            
            <h3>Your Cart is Empty</h3>
            </div>

        )
    }



    return (
        <div>
            <div style={{textAlign:"center" }}>
            <h1>Cart</h1>
            </div>


<Grid container style={{flexGrow:"1"}}>

    <Grid item  xs={12} sm={12} md={6}>
       <ul className="list">
        {
            carts.map((cart) =>(
              <CartCard key={cart.id} cart={cart}/>      
              
                ))
        }
    </ul>
      </Grid> 
    


<Grid item xs={12} sm={12} md={6}>

<div className="mainTotal">

<div className="total">

<div className="totaldiv">
<div className="totalItem">
<h3>Total Items</h3>
    <h4>{carts.length}</h4>
</div>
<br/>
<div className="totalAmount">
<h3>Total Amount</h3>
    <h4>{total}</h4>
</div>

<br/>

<Button
        variant="contained"
        color="primary"
        // endIcon={<Icon>send</Icon>}
        style={{backgroundColor:"#0069d9"}}
        onClick={handleClickOpen}
      >
        Check Out
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"><img src={dialog} height="150px" width="150px" style={{position:"relative", left:"25%"}} /></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
           
           <h1>Checkout Successfully!</h1>
           <h3>You Have Purchased {carts.length} Items!</h3>
           </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={deleteCart} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>




</div>

    
    
</div>

</div>



</Grid>


</Grid>


        </div>
    )
}
