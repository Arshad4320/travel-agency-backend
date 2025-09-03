import { Request, Response } from 'express'
import { UserServices } from './user.services'

const createUser = async (res: Response, req: Request) => {
  try {
    const result = await UserServices.createUser(req.body)
    res.json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const findUsers = async (res: Response, req: Request) => {
  try {
    const result = await UserServices.findUsers()
    res.json({
      success: true,
      message: 'users retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const findByUserId = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.findByUserId(req.params.id)
    res.json({
      success: true,
      message: 'user retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const result = await UserServices.loginUser(email, password)
    res.json({
      success: true,
      message: 'user logged successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.updateUser(req.params.id, req.body)
    res.json({
      success: true,
      message: 'user update successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const UserController = {
  createUser,
  findByUserId,
  findUsers,
  updateUser,
  loginUser,
}
