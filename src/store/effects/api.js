import axios from "axios";
import {urls} from "../../assets/constants/index";
import * as storage from "../effects/LS"

export const createLeftover = leftover => {
    const id = storage.getToken();
    return axios.post(urls.leftovers, {
        ...leftover,
        userId: id
    })
};

export const fetchMyLeftovers = () => {
    const id = storage.getToken();
    return axios.get(urls.leftovers, {
        params: {filter: {userId: id}}
    })
};

export const fetchLeftovers = () => {
    return axios.get(urls.leftovers)
};

export const loginUser = user => {
    return axios.post(urls.users + "/login", user)
};

export const fetchAddresses = () => {
    const id = storage.getToken();
    return axios.get(urls.addresses, {
        params: {filter: {userId: id}}
    })
};

export const createAddress = address => {
    const id = storage.getToken();
    return axios.post(urls.addresses, {
        location: address.location,
        name: address.name,
        userId: id
    })
};

export const deleteAddress = id => {
    return axios.delete(urls.addresses +"/"+ id)
};
