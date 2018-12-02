export const setUser = (user) => {
    localStorage.setItem("id_token", user.id);
};

export const clearUser = () => {
    localStorage.setItem("id_token", "");
};

export const getToken = () => (
    localStorage.getItem("id_token")
);

export const setEmail = (email) => {
    localStorage.setItem("email", email)
};
