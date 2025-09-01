import { model, Schema } from 'mongoose'
import { IBus } from './bus.interface'

const BusSchema = new Schema<IBus>(
  {
    busNumber: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    busImage: {
      type: String,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    departureTime: {
      type: String,
      required: true,
    },
    arrivalTime: {
      type: String,
      required: true,
    },
    durationMinutes: {
      type: Number,
    },
    busType: {
      type: String,
    },
    seatsAvailable: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const BusModel = model<IBus>('BusModel', BusSchema)
