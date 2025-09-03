import { model, Schema } from 'mongoose'
import { ITransport } from './transport.interface'

const TransportSchema = new Schema<ITransport>(
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

export const TransportModel = model<ITransport>('Transport', TransportSchema)
