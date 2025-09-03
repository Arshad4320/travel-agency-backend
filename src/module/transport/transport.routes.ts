import express from 'express'
import { TransportController } from './transport.controller'

const router = express.Router()

router.post('/create', TransportController.createTransport)
router.get('/', TransportController.findTransport)
router.get('/:id', TransportController.findByIdTransport)
router.patch('/edit/:id', TransportController.updateTransport)
router.delete('/delete/:id', TransportController.deleteTransport)

export const TransportRoutes = router
