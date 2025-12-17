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
    },
    follow: async (userId) => {
        return await api_v1.post(`follow/${ userId }`);
    },
    unfollow: async (userId) => {
        return  await api_v1.delete(`follow/${ userId }`);
    },
    getProfile: async (userId = null) => {
        let profile_url = "profile";
        if (userId) { profile_url += "/" + userId }
        return await api_v1.get(profile_url);
    }
}
