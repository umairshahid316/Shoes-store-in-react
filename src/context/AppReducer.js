import React, {useReducer} from "react";

export default (state,action) => {
    switch (action.type) {
        
        case "Delete_Cart": 
    return{ 
...state, cart:state.cart.filter(cart => cart.id !== action.payload)
    }

    case "Delete_All_Cart": 
    return{ 
cart:[] 
    }
    case "Add_Cart":
        return{
            ...state, cart:[action.payload, ...state.cart]
        }

        
        default:
            return state;
    }
}