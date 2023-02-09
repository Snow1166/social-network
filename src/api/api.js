import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {

    }
})

export const api = {
    getUsers: (currentPage, pageSize)=> {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    getProfile: (userId) => {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    follow: (userId) => {
        return instance.post(`follow/${userId}`).then(response => {
            return response.data.resultCode
        })
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data.resultCode
        })
    },
}
