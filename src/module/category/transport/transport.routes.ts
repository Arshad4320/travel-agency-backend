import express from 'express'
import { TransportController } from './transport.controller'

const router = express.Router()

router.post('/create', TransportController.createTransport)
router.get('/', TransportController.findTransport)
router.get('/:id', TransportController.findByIdTransPort)
router.patch('/edit', TransportController.updateTransport)
router.delete('/delete', TransportController.deleteTransport)

export const transportRoutes = router
