import { Request, Response } from 'express'
import { BookingServices } from './booking.services'

const createBooking = async (req: Request, res: Response) => {
  try {
    const result = await BookingServices.createBooking(req.body)
    res.json({
      success: true,
      message: 'seats is booked successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const findBooking = async (req: Request, res: Response) => {
  try {
    const result = await BookingServices.findBookings()
    res.json({
      success: true,
      message: 'booking retrived successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const findBookingById = async (req: Request, res: Response) => {
  try {
    const result = await BookingServices.findBookingById(req.params.id)
    res.json({
      success: true,
      message: 'booking is retrived successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const BookingController = {
  createBooking,
  findBooking,
  findBookingById,
}
