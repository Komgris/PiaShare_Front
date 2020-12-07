import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';
import { useHistory } from "react-router-dom";

export default function ValidateServices() {
        const { updateCurrentUser } = useContext(GlobalContext);
        const history = useHistory();

    
    return (
        <div>
            
        </div>
    )
}
