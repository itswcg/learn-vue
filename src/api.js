import {fetch} from './utils'

export const login = data => fetch('/admin/login', data, 'POST')

export const getAdminInfo = () => fetch('/admin/info')

export const userCount = date => fetch('/statis/user/' + date + '/count')

export const orderCount = date => fetch('/')

export const getUserCount = data => fetch('/v1/users/count', data)

export const getOrderCount = data => fetch('/bos/orders', data)

export const adminDayCount = date => fetch('/statis/admin/' + date + '/count')

export const adminCount = () => fetch('/admin/count')

export const signout = () => fetch('/admin/signout')
