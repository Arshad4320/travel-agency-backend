import { Router } from 'express'
import { categoryRoutes } from '../module/category/category.routes'
import { transportRoutes } from '../module/category/transport/transport.routes'

const router = Router()

router.use('/category', categoryRoutes)
router.use('/transport', transportRoutes)
export default router
