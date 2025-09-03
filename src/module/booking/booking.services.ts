import { TransportModel } from '../transport/transport.model'
import { IBooking } from './booking.interface'
import { BookingModel } from './booking.model'

const createBooking = async (payload: IBooking) => {
  try {
    const transport = await TransportModel.findById(payload.transport)
    if (!transport) {
      throw new Error('transport notfound')
    }
    if ((transport.seatsAvailable ?? 0) < payload.seats) {
      throw new Error('no seats available')
    }
    transport.seatsAvailable = (transport.seatsAvailable ?? 0) - payload.seats
    transport.save()
    const result = await BookingModel.create(payload)
    return result
  } catch (err) {
    console.log(err)
  }
}
const findBookings = async () => {
  try {
    const result = await BookingModel.find()
      .populate('user')
      .populate('transport')
    return result
  } catch (err) {
    console.log(err)
  }
}
const findBookingById = async (id: string) => {
  try {
    const result = await BookingModel.findById(id)
      .populate('user')
      .populate('transport')
    return result
  } catch (err) {
    console.log(err)
  }
}
export const BookingServices = {
  createBooking,
  findBookingById,
  findBookings,
}
