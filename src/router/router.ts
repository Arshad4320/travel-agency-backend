import { Router } from 'express'
import { categoryRoutes } from '../module/category/category.routes'
import { TransportRoutes } from '../module/transport/transport.routes'
import { busRouter } from '../module/bus/bus.routes'
import { UserRoutes } from '../module/user/user.routes'

const router = Router()

router.use('/category', categoryRoutes)
router.use('/transport', TransportRoutes)
router.use('/bus', busRouter)
router.use('/user', UserRoutes)
export default router
