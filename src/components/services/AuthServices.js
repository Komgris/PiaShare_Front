import axios from 'axios';
import Constants from '../Constrant/Constrant'

    const baseURL = Constants.HOST;
    const testURL = Constants.HOST_TEST;

    export const Login = async (data) =>{
        const result = await axios.post(baseURL+'user/login',data).then(res=>res.data);
        return result
    }

    export const Register = async (data) =>{
        const result = await axios.post(baseURL+'user/register',data).then(res=>res.data);
        return result
    }

    export const TestAPI = async () =>{
        const result = await axios.get(testURL).then(res=>res.data);
        return result
    }
