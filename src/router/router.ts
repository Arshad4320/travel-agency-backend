import { Router } from 'express'
import { categoryRoutes } from '../module/category/category.routes'
import { TransportRoutes } from '../module/transport/transport.routes'
import { busRouter } from '../module/bus/bus.routes'

const router = Router()

router.use('/category', categoryRoutes)
router.use('/transport', TransportRoutes)
router.use('/bus', busRouter)
export default router
