import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {}
})

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
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


export const authAPI = {
    auth: () => {
        return instance.get('auth/me')
    },
    login: (loginForm) => {
        return instance.post('/auth/login', loginForm)
    },
    logout: () => {
        return instance.delete('auth/login')
    },
    getCaptcha: () => {
        return instance.get('security/get-captcha-url')
}
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus: (userId) => {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus: (status) => {
        return instance.put(`/profile/status/`, {status}).then(response => {
            return response.data
        })
    }
}
