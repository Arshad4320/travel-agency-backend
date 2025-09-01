import { Router } from 'express'
import { categoryRoutes } from '../module/category/category.routes'
import { AirplaneRoutes } from '../module/airplane/airplane.routes'

const router = Router()

router.use('/category', categoryRoutes)
router.use('/airplane', AirplaneRoutes)
export default router
