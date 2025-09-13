import { model, Schema } from 'mongoose'
import { ITransport } from './transport.interface'

const TransportSchema = new Schema<ITransport>(
  {
    transportNumber: { type: String, required: true },   
    providerName: { type: String, required: true },
    transportImage: { type: String },                   
    transportName: {                                  
      type: String,
      enum: ["Airplane", "Bus", "Ship", "Train"],
      required: true,
    },
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
