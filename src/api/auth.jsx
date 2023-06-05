import axios from "axios";

export const request = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function signInApi(email, password) {
    return request.post("/auth/signin", { email, password });
};

export async function signUpApi(email, password) {
    return request.post("/auth/signup", { email, password });
};
