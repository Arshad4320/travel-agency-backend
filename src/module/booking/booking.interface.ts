import { Types } from 'mongoose'

export interface IBooking {
  user: Types.ObjectId
  transport: Types.ObjectId
  seats: number
  totalPrice: number
  status: 'booked' | 'cancelled'
}
