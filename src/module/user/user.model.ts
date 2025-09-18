import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'
import bcrypt from 'bcrypt'
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
  password: {
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

// UserSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash('password', 10)
//   }
//   next()
// })
// UserSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10)
//   }
//   next()
// })
export const UserModel = model<IUser>('User', UserSchema)
