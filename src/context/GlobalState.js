import React, {createContext, useContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState={

    cart:[   ]

}

export const GlobalContext =createContext(initialState);


export const GlobalProvider= ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
 
 

 let AddNewCart = (cart)=>{
    dispatch(
        {
            type: "Add_Cart",
            payload: cart
        }
    );
    
     }

     let deleteCart = (id)=>{
        dispatch(
            {
                type: "Delete_Cart",
                payload: id
            }
        );
         }
    
         let deleteAllCart = (id)=>{
            dispatch(
                {
                    type: "Delete_All_Cart",
                    // payload: id
                }
            );
             }
        
     
    return(
        <GlobalContext.Provider value={

            {
                carts: state.cart,
                AddNewCart,
                deleteCart,
                deleteAllCart
            }

        } >
            {children}</GlobalContext.Provider>

    );

}
