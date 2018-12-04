import axios from "axios";
import {urls} from "../../assets/constants/index";
import * as storage from "../effects/LS"

const access_token = storage.getToken();
const id = storage.getId();

export const createLeftover = leftover => {
    return axios.post(urls.leftovers, {
        ...leftover,
        userId: id,
    }, {
        params: {access_token},

    })
};


export const fetchMyLeftovers = () => {
    return axios.get(urls.leftovers, {
        params: {
            filter: {userId: id},
            access_token
        }
    })
};

export const fetchLeftovers = () => {
    return axios.get(urls.leftovers, {
        params: {access_token}
    })
};

export const loginUser = user => {
    return axios.post(urls.users + "/login", user)
};

export const fetchAddresses = () => {
    return axios.get(urls.addresses, {
        params: {
            filter: {userId: id},
            access_token
        }
    })
};

export const createAddress = address => {
    return axios.post(urls.addresses, {
        location: address.location,
        name: address.name,
        userId: id
    }, {
        params: {
            access_token,
        }
    })
};

export const deleteAddress = id => {

    return axios.delete(urls.addresses + "/" + id, {
        params: {
            access_token
        }
    })
};
