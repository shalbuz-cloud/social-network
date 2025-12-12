import axios from "axios";

const api_v1 = axios.create({
    withCredentials: true,
    baseURL: "http://127.0.0.1:8000/api/v1",
    headers: {'API-KEY': 'QG8CevUspV3oXiEMNSutXBEN9LmhPasCHfPyrjiLuyRMiP3KPZetUqlMcGbgNRQ4'}
})

// export const getUsers = async (pageNumber) => {
//     const response = await api_v1.get(`users?page=${ pageNumber }&limit=2`);
//     return response.data;
// }

export const usersAPI = {
    getUsers: async (pageNumber) => {
        const response = await api_v1.get(`users?page=${ pageNumber }&limit=2`);
        return response.data;
    }
}
