import { IUser } from './user.interface'
import { UserModel } from './user.model'

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
const updateUser = async (id: string, payload: IUser) => {
  try {
    const result = await UserModel.findByIdAndUpdate(id, payload, { new: true })
  } catch (err) {
    console.log(err)
  }
}

export const UserServices = {
  createUser,
  findByUserId,
  findUsers,
  updateUser,
}
