import { createSelectorHook } from "react-redux"



export const getUsers = (state) => {
    return state.usersPage.users
}

// export const getUsers = createSelector()

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
