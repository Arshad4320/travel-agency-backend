import { IUser } from './user.interface'
import { UserModel } from './user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser = async (payload: IUser) => {
  try {
    const hashedPassword = await bcrypt.hash(payload.password, 10)
    const user = await UserModel.create({
      ...payload,
      password: hashedPassword,
    })

    return user
  } catch (err) {
    console.log(err)
    return { error: 'Failed to create user' }
  }
}

const findUsers = async () => {
  try {
    const result = await UserModel.find()
    return result
  } catch (err) {
    console.log(err)
    return { error: 'Failed to fetch users' }
  }
}

const findByUserId = async (id: string) => {
  try {
    const result = await UserModel.findById(id)
    return result
  } catch (err) {
    console.log(err)
    return { error: 'Failed to fetch user' }
  }
}

// const loginUser = async (email: string, password: string) => {
//   try {
//     const user = await UserModel.findOne({ email })
//     if (!user) {
//       return { error: 'User not found' }
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password)
//     if (!passwordMatch) {
//       return { error: 'Invalid credentials' }
//     }

//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       process.env.JWT_SECRET || 'secret',
//       { expiresIn: process.env.AUTH_TOKEN_EXPIRE || '7d' },
//     )

//     return { user, token }
//   } catch (err: any) {
//     console.error(err)
//     return { error: err.message || 'Something went wrong' }
//   }
// }
const loginUser = async (email: string, password: string) => {
  try {
    const user = await UserModel.findOne({ email })
    if (!user) {
      return { error: 'User not found' }
    }

    if (!password) {
      return { error: 'Password is required' }
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return { error: 'Invalid credentials' }
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.AUTH_TOKEN_EXPIRE || '7d' },
    )

    return { user, token }
  } catch (err: any) {
    console.error(err)
    return { error: err.message || 'Something went wrong' }
  }
}

const updateUser = async (id: string, payload: IUser) => {
  try {
    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, 10)
    }
    const result = await UserModel.findByIdAndUpdate(id, payload, { new: true })
    return result
  } catch (err) {
    console.log(err)
    return { error: 'Failed to update user' }
  }
}

export const UserServices = {
  createUser,
  findByUserId,
  findUsers,
  updateUser,
  loginUser,
}
