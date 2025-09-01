import express from 'express'
import { AirplaneController } from './airplane.controller'

const router = express.Router()

router.post('/create', AirplaneController.createAirplane)
router.get('/', AirplaneController.findAirplane)
router.get('/:id', AirplaneController.findByIdAirplane)
router.patch('/edit', AirplaneController.updateAirplane)
router.delete('/delete', AirplaneController.deleteAirplane)

export const AirplaneRoutes = router
