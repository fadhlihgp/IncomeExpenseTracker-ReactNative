import axios from "axios";
import {base_url_api} from "../../Utils/constData";

export const login = async (credential) => {
    return await axios.post(`${base_url_api}/auth/login`, credential);
}

export const register = async (data) => {
    return await axios.post(`${base_url_api}/auth/register`, data);
}
