import axios from 'axios';
import Constants from '../Constrant/Constrant'

const baseURL = Constants.HOST;

export const TestServices = async () =>{
    const result = await axios.get(baseURL).then(res=>res.data);
    return result
}