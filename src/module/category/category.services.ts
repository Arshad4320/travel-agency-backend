import { ICategory } from './category.interface'
import { CategoryModel } from './category.model'

const createCategory = async (payload: ICategory) => {
  try {
    const result = await CategoryModel.create(payload)
    return result
  } catch (err) {
    console.log(err)
  }
}

const findCategory = async () => {
  try {
    const result = await CategoryModel.find()
    return result
  } catch (err) {
    console.log(err)
  }
}
const singleCategory = async (id: string) => {
  try {
    const result = await CategoryModel.find()
    return result
  } catch (err) {
    console.log(err)
  }
}
const updateCategory = async (id: string) => {
  try {
    const result = await CategoryModel.findByIdAndUpdate(id, { new: true })
    return result
  } catch (err) {
    console.log(err)
  }
}
const deleteCategory = async (id: string) => {
  try {
    const result = await CategoryModel.findByIdAndDelete(id, { new: true })
    return result
  } catch (err) {
    console.log(err)
  }
}
export const CategoryServices = {
  createCategory,
  findCategory,
  updateCategory,
  singleCategory,
  deleteCategory,
}
