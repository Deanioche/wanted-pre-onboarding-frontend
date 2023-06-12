import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token && config.headers)
        config.headers["Authorization"] = `Bearer ${token}`;
    return config;
});

// Auth
export async function signInApi(email, password) {
    return apiClient.post("/auth/signin", { email, password });
};

export async function signUpApi(email, password) {
    return apiClient.post("/auth/signup", { email, password });
};

// Todo
export async function getTodoApi() {
    return apiClient.get("/todos");
};

export async function postTodoApi(todo) {
    return apiClient.post("/todos", {todo});
};

export async function updateTodoApi(id, body) {
    return apiClient.put(`/todos/${id}`, body);
};

export async function deleteTodoApi(id) {
    return apiClient.delete(`/todos/${id}`);
};