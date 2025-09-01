import { Router } from 'express'
import { categoryRoutes } from '../module/category/category.routes'
import { AirplaneRoutes } from '../module/airplane/airplane.routes'
import { busRouter } from '../module/bus/bus.routes'

const router = Router()

router.use('/category', categoryRoutes)
router.use('/airplane', AirplaneRoutes)
router.use('/bus', busRouter)
export default router
