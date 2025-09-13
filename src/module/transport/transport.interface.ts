export enum TransportType {
  Airplane = 'Airplane',
  Bus = 'Bus',
  Ship = 'Ship',
  Train = 'Train',
}

export interface ITransport {
  transportName: TransportType
  transportNumber: string
  providerName: string
  transportImage?: string

  from: string
  to: string
  departureTime: Date
  arrivalTime: Date
  durationMinutes?: number
  price: number
  seatsAvailable?: number
  amenities?: string[]

  // Airplane specific
  baggageLimitKg?: number
  handLuggageKg?: number
  inFlightMeal?: boolean

  // Bus specific
  busType?: 'AC' | 'Non-AC' | 'Sleeper' | 'Seater'

  // Train specific
  coachClass?: 'First Class' | 'AC' | 'Sleeper' | 'General'

  // Ship specific
  cabinType?: 'Luxury' | 'Economy' | 'Shared'
}
