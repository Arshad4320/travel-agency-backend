import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
})

export const UserModel = model<IUser>('User', UserSchema)
