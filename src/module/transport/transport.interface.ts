export enum TransportType {
  Airplane = "Airplane",
  Bus = "Bus",
  Ship = "Ship",
  Train = "Train",
}

export interface ITransport {
  transportNumber: string
  providerName: string
  transportImage?: string
  transportName: TransportType
  from: string
  to: string
  departureTime: Date
  arrivalTime: Date
  durationMinutes?: number
  price: number
  seatsAvailable?: number
  amenities?: string[]
  baggageLimitKg?: number
  handLuggageKg?: number
}
