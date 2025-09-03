import { model, Schema } from 'mongoose'
import { IBooking } from './booking.interface'

const BookingSchema = new Schema<IBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    transport: {
      type: Schema.Types.ObjectId,
      ref: 'Transport',
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['booked', 'cancelled'],
    },
  },
  { timestamps: true },
)

export const BookingModel = model<IBooking>('Booking', BookingSchema)
