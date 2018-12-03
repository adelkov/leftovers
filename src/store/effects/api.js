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

export const fetchAddresses = () => {
    const id = storage.getToken();
    return axios.get(urls.addresses, {
        params: {filter: {id}}
    })
};

export const createAddress = address => {
    return axios.post(urls.addresses, address)
};

export const deleteAddress = id => {
    return axios.delete(urls.addresses, id)
}




