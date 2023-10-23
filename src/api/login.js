import request from '@/utils/request'

export function login (loginParam) {
    return request({
        url: 'login/login',
        method: 'post',
        data: loginParam
    })
}

export function register(user){
    return request({
        url: 'login/register',
        method: 'post',
        data: user
    })
}

export function getHabitIcons () {
    return request({
        url: 'login/isEmailOccupied',
        method: 'post'
    })
}
