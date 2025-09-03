import { IUser } from './user.interface'
import { UserModel } from './user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createUser = async (payload: IUser) => {
  try {
    const result = await UserModel.create(payload)
    return result
  } catch (err) {
    console.log(err)
  }
}
const findUsers = async () => {
  try {
    const result = await UserModel.find()
    return result
  } catch (err) {
    console.log(err)
  }
}
const findByUserId = async (id: string) => {
  try {
    const result = await UserModel.findById(id)
  } catch (err) {
    console.log(err)
  }
}

const loginUser = async (email: string, password: string) => {
  try {
    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error('user notfound')
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      throw new Error('invalid credential')
    }
    //  const token = jwt.sign(
    //    { id: user._id, email: user.email, role: user.role },
    //    process.env.JWT_SECRET || 'secret',
    //    { expiresIn: '1d' },
    //  )

    //   const token = jwt.sign(
    //     {
    //       id: user._id,
    //       email: user.email,
    //       role: user.role,
    //     },
    //     process.env.JWT_SECRET || 'secret',
    //     { expiresIn: process.env.AUTH_TOKEN_EXPIRE },
    //   )

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: process.env.AUTH_TOKEN_EXPIRE },
    )
    return { user, token }
  } catch (err) {
    console.log(err)
  }
}
const updateUser = async (id: string, payload: IUser) => {
  try {
    const result = await UserModel.findByIdAndUpdate(id, payload, { new: true })
    return result
  } catch (err) {
    console.log(err)
  }
}

export const UserServices = {
  createUser,
  findByUserId,
  findUsers,
  updateUser,
  loginUser,
}
