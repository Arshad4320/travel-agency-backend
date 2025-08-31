import { Request, Response } from 'express'
import { CategoryServices } from './category.services'

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.createCategory(req.body)
    res.json({
      success: true,
      message: 'category created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const findCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.findCategory()
    res.json({
      success: true,
      message: 'category retrieved  successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const singleCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.singleCategory(req.params.id)
    res.json({
      success: true,
      message: 'category retrieved successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const updateCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.updateCategory(req.params.id)
    res.json({
      success: true,
      message: 'category updated successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const deleteCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.deleteCategory(req.params.id)
    res.json({
      success: true,
      message: 'category deleted successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const categoryController = {
  createCategory,
  findCategory,
  singleCategory,
  updateCategory,
  deleteCategory,
}
