import { model, Schema } from 'mongoose'
import { IAirplane } from './airplane.interface'

const AirplaneSchema = new Schema<IAirplane>(
  {
    flightNumber: { type: String, required: true },
    providerName: { type: String, required: true },
    planeImage: { type: String },
    airlineName: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    departureTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    durationMinutes: { type: Number },
    price: { type: Number, required: true },
    seatsAvailable: { type: Number, default: 0 },
    amenities: { type: [String], default: [] },
    baggageLimitKg: { type: Number },
    handLuggageKg: { type: Number },
  },
  {
    timestamps: true,
  },
)

export const AirplaneModel = model<IAirplane>('Airplane', AirplaneSchema)
