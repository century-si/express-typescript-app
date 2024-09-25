import type { User } from '../types/user.type'

const users: User[] = []

/**
 * @method 新增用户
 * @param newUser User object
 */
export const addUser = (newUser: User) => {
  users.push(newUser)
}

/**
 * @method 查询用户
 * @param user User object
 * @returns User
 */
export const getUser = (user: User) => {
  return users.find(u => u.username === user.username && u.password === user.password)
}