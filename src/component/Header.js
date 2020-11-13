import React,{useContext} from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {GlobalContext} from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Link:{
// wordSpacing: 5,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  btnStyle:{
    fontSize:"20px",
     padding:"22px",
     '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0069d9',
      borderColor: '#005cbf',
    },
  }
}));



const StyledBadge = withStyles((theme) => ({
  badge: {
    // right: -3,
    // top: 13,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);



export  function Header() {
  const classes = useStyles();

  const {carts} = useContext(GlobalContext);

  console.log("cart ",carts)
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:"black"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
            <img src={logo} height="55px" width="120px" alt="Shoes Store" />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Shoez Store
          </Typography>
        
        <div style={{marginRight:"120px"}} >
      
     

           {/* <Button disableRipple  className={classes.btnStyle} component={Link} to="/" color="inherit">Home</Button> */}
         
           <Button  className={classes.btnStyle} component={Link} to="/" color="inherit">Products</Button>
         
           {/* <Button  className={classes.btnStyle} component={Link} to="/" color="inherit">Cart</Button> */}


           <IconButton component={Link} to="cartpage" color="inherit" aria-label="add to shopping cart">
          
           <StyledBadge badgeContent={carts.length} color="secondary">
          
               <ShoppingCartIcon />
                  </StyledBadge>
        </IconButton>
           </div>
           
                  
        
  
        </Toolbar>
      </AppBar>
    </div>
  );
}
