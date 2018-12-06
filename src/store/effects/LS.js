export const setUser = (user) => {
    localStorage.setItem("token", user.id);
    localStorage.setItem("id", user.userId);
};

export const clearUser = () => {
    localStorage.setItem("token", "");
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

export const getEmail = () => (
    localStorage.getItem("email")
);
