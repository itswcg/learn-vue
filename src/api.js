import { fetch } from './utils'

export const login = data => fetch('/admin/login', data, 'POST')

export const getAdminInfo = () => fetch('/admin/info')
