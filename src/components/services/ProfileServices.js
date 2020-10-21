import axios from 'axios';
import Constants from '../Constrant/Constrant'

    const baseURL = Constants.HOST;

    export const Create = async (data) =>{
        const result = await axios.post(baseURL+'profile/create',data).then(res=>res.data);
        return result
    }

    export const Get = async (data) =>{
        const result = await axios.get(baseURL+`profile/get/${data}`).then(res=>res.data);
        return result;
    }