import './App.css';
import {Header} from './component/Header';
import { Products } from './component/Products';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";
import {Home} from './component/Home';
import { ProductsGrid } from './component/ProductsGrid';
import {ProductDetails} from './component/ProductDetails';
import {GlobalProvider} from './context/GlobalState';
import {CartPage} from './component/CartPage';

function App() {
  return (
    <GlobalProvider>
    <Router>

    <Header/> 
    <br/><br/><br/> 
<Routes>
{/* <Route path="/" element={<Home/>}/> */}
  <Route path="cartpage" element={<CartPage/>}/>
  <Route path="/" element={<Products/>}>
  <Route path="/" element={<ProductsGrid/>} />
  <Route path=":productid" element={<ProductDetails/>} />
  </Route>

</Routes>


    </Router>
  
    </GlobalProvider>
  
  );
}

export default App;
