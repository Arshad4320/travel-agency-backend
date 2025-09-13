import express from 'express'
import { TransportController } from './transport.controller'
import uploader from '../../utilits/uploader'
const router = express.Router()
const upload = uploader({})
router.post(
  '/create',
  upload.single('transportImage'),
  TransportController.createTransport,
)
router.get('/', TransportController.findTransport)
router.get('/:id', TransportController.findByIdTransport)
router.patch('/update-transport/:id', TransportController.updateTransport)
router.delete('/delete-transport/:id', TransportController.deleteTransport)

export const TransportRoutes = router
