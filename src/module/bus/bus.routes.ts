import express from 'express'
import { BusController } from './bus.controller'

const router = express.Router()

router.post('/create', BusController.createBus)
router.get('/', BusController.findBus)
router.get('/:id', BusController.findByBusId)
router.patch('/edit/:id', BusController.updateBus)
router.delete('/delete/:id', BusController.deleteBus)

export const busRouter = router
