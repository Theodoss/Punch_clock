import request from '@/utils/request'

export function getHabitIcons () {
    return request({
        url: 'api/habit/icons',
        method: 'get'
    })
}

export function getPublicHabits () {
    return request({
        url: 'api/habit/public',
        method: 'get'
    })
}

export function addHabit(habit){
    return request({
        url: 'api/habit',
        method: 'post',
        data: habit
    })
}