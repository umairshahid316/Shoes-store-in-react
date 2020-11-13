import { FormatAlignJustify } from '@material-ui/icons'
import React from 'react'
import {ProductCard, ProductsGrid} from './ProductCard';
import { Outlet } from 'react-router-dom';


export const Products = () => {
    return (
        <div>
            <br/><br/>
            
            
          <Outlet/>
          
        </div>
    )
}
