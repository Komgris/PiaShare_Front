import React,{ createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const InitialState = {
    transactions:{}
}

export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    const updateCurrentUser=(id)=>{
        dispatch({
            type:'UPDATE_TRANSACTION',
            payload: id
        });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            updateCurrentUser,
        }}>
            {children}
        </GlobalContext.Provider>
    );
}