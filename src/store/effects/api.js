import axios from "axios";
import {urls} from "../../assets/constants/index";
import * as storage from "../effects/LS"


export const createLeftover = leftover => (
    axios.post(urls.leftovers, {
        ...leftover,
        account: storage.getEmail(),
    }, {
        params: {access_token: storage.getToken()},
    })
);


export const fetchMyLeftovers = () => (
    axios.get(urls.leftovers, {
        params: {
            filter: {where: {account: storage.getEmail()}},
            access_token: storage.getToken()
        }
    })
);

export const fetchLeftovers = () => (
    axios.get(urls.leftovers, {
        params: {access_token: storage.getToken()}
    })
);

export const loginUser = user => (
    axios.post(urls.users + "/login", user)
);

export const logoutUser = () => (
    axios.post(urls.users + "/logout",{},  {
        params: {
            access_token: storage.getToken()
        }}
));

export const fetchAddresses = () => (
    axios.get(urls.addresses, {
        params: {
            filter: {where: {account: storage.getEmail()}},
            access_token: storage.getToken()
        }
    })
);

export const createAddress = address => (
    axios.post(urls.addresses, {
        ...address,
        account: storage.getEmail()
    }, {
        params: {
            access_token: storage.getToken(),
        }
    })
);

export const deleteAddress = id => (
    axios.delete(urls.addresses + "/" + id, {
        params: {
            access_token: storage.getToken()
        }
    })
);

export const fetchUsers = () => (
    axios.get(urls.accounts, {
        params: {
            access_token: storage.getToken()
        }
    })
);

export const approveListings = listing => {
    return axios.put(urls.leftovers, listing, {
        params: {
            id: listing.id,
            access_token: storage.getToken()
        }
    })
};


export const isAuthenticated = () => (
    axios.get(urls.leftovers, {
        params: {access_token: storage.getToken()}
    })
);
