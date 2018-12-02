import axios from "axios";
import {urls} from "../../constants/index";
import * as storage from "../effects/LS"

export const createLeftover = leftover => {
    return axios.post(urls.leftovers, leftover)
};

export const fetchMyLeftovers = () => {
    const id = storage.getToken();
    return axios.get(urls.leftovers, {
        params: {filter: {id}}
    })
};

export const fetchLeftovers = () => {
    return axios.get(urls.leftovers)
};

export const loginUser = user => {
    return axios.post(urls.users+"/login", user)
};




