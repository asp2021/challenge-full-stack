import React, { createContext, useReducer } from 'react';
import AppReducer from './textReducer';

const initialState = {
   textList : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   // Actions for changing state

   function addItemToList(item) {
       dispatch({
           type: 'ADD_ITEM',
           payload: item
       });
   }

   return(
      <GlobalContext.Provider value = {{textList : state.textList, addItemToList}}> 
        {children} 
   </GlobalContext.Provider>
   )
}