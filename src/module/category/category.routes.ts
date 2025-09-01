import express from 'express'
import { categoryController } from './category.controller'

const router = express.Router()

router.post('/create', categoryController.createCategory)
router.get('/', categoryController.findCategory)
router.get('/:id', categoryController.singleCategory)
router.patch('/edit', categoryController.updateCategory)
router.delete('/delete', categoryController.deleteCategory)

export const categoryRoutes = router
