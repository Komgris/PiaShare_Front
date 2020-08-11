import axios from 'axios';
import Constants from '../Constrant/Constrant'

    const baseURL = Constants.HOST;

    export const Create = async (data) =>{
        const result = await axios.post(baseURL+'shared/create',data).then(res=>res.data);
        return result
    }