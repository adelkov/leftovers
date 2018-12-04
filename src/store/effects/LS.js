export const setUser = (user) => {
    localStorage.setItem("token", user.id);
    localStorage.setItem("id", user.userId);
};

export const clearUser = () => {
    localStorage.setItem("id_token", "");
};

export const getId = () => (
    localStorage.getItem("id")
);


export const getToken = () => (
    localStorage.getItem("token")
);


export const setEmail = (email) => {
    localStorage.setItem("email", email)
};
