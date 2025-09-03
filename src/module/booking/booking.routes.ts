import express from 'express'
import { BookingController } from './booking.controller'

const router = express.Router()

router.post('/create-booking', BookingController.createBooking)
router.get('/', BookingController.findBooking)
router.get('/:id', BookingController.findBookingById)

export const BookingRouter = router
