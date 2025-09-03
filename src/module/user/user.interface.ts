export interface IUser {
  name: string
  phone: string
  email: string
  password: string
  address?: string
  role?: 'user' | 'admin'
}
