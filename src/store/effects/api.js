import axios from "axios";
import {urls} from "../../assets/constants/index";
import * as storage from "../effects/LS"

const access_token = storage.getToken();
const email = storage.getEmail();

export const createLeftover = leftover => (
    axios.post(urls.leftovers, {
        ...leftover,
        account: email,
    }, {
        params: {access_token},
    })
);


export const fetchMyLeftovers = () => (
    axios.get(urls.leftovers, {
        params: {
            filter: {where: {account: email}},
            access_token
        }
    })
);

export const fetchLeftovers = () => (
    axios.get(urls.leftovers, {
        params: {access_token}
    })
);

export const loginUser = user => (
    axios.post(urls.users + "/login", user)
);

export const fetchAddresses = () => (
    axios.get(urls.addresses, {
        params: {
            filter: {where: {account: email}},
            access_token
        }
    })
);

export const createAddress = address => (
    axios.post(urls.addresses, {
        ...address,
        account: email
    }, {
        params: {
            access_token,
        }
    })
);

export const deleteAddress = id => (
    axios.delete(urls.addresses + "/" + id, {
        params: {
            access_token
        }
    })
);

export const fetchUsers = () => (
    axios.get(urls.accounts, {
        params: {
            access_token
        }
    })
);

export const approveListings = listing => {
    return axios.put(urls.leftovers, listing, {
        params: {
            id: listing.id,
            access_token
        }
    })
};
