import { Request, Response } from 'express'
import { UserServices } from './user.services'

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.createUser(req.body)
    if (!result) {
      res.json({
        success: false,
        message: 'user create field',
      })
    }
    res.json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const findUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.findUsers()
    if (!result) {
      res.json({
        success: false,
        message: 'user not found',
      })
    }
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
    if (!result) {
      res.json({
        success: false,
        message: 'user not found',
      })
    }
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
    if (!result) {
      res.json({
        success: false,
        message: 'user not found',
      })
    }
    res.status(200).json({
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
    if (!result) {
      res.json({
        success: false,
        message: 'user update field',
      })
    }
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
