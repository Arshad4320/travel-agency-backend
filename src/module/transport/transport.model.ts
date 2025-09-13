import { model, Schema } from 'mongoose'
import { ITransport, TransportType } from './transport.interface'

const TransportSchema = new Schema<ITransport>(
  {
    transportNumber: { type: String, required: true },
    providerName: { type: String, required: true },
    transportImage: { type: String },
    transportName: {
      type: String,
      enum: Object.values(TransportType),
      required: true,
    },
    from: { type: String, required: true },
    to: { type: String, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    durationMinutes: { type: Number },
    price: { type: Number, required: true },
    seatsAvailable: { type: Number, default: 0 },
    amenities: { type: [String], default: [] },

    // Airplane specific
    baggageLimitKg: { type: Number },
    handLuggageKg: { type: Number },
    inFlightMeal: { type: Boolean },

    // Bus specific
    busType: { type: String, enum: ['AC', 'Non-AC', 'Sleeper', 'Seater'] },

    // Train specific
    coachClass: {
      type: String,
      enum: ['First Class', 'AC', 'Sleeper', 'General'],
    },

    // Ship specific
    cabinType: { type: String, enum: ['Luxury', 'Economy', 'Shared'] },
  },
  {
    timestamps: true,
  },
)

export const TransportModel = model<ITransport>('Transport', TransportSchema)
