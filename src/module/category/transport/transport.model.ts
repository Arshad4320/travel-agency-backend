import { model, Schema } from 'mongoose'
import { ITransport } from './transport.interface'

const TransportSchema = new Schema<ITransport>(
  {
    type: {
      type: String,
      enum: ['bus', 'train', 'flight', 'ferry', 'car'],
      required: true,
    },
    provider: {
      type: String,
      required: true,
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
      type: String,
      required: true,
    },
    serviceClass: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seatsAvailable: {
      type: Number,
      required: true,
    },
    amenities: {
      type: [],
    },
    notes: {
      type: String,
    },
    baggageLimitKg: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

export const TransportModel = model('TransportModel', TransportSchema)
