import { fetch } from './utils'

export const login = data => fetch('/admin/login', data, 'POST')
