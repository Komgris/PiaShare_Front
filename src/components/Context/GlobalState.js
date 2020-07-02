import React,{ createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const InitialState = {
    transactions:[]
}

export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    );
}