export interface IAirplane {
  flightNumber: string
  providerName: string
  planeImage?: string
  airlineName: string
  from: string
  to: string
  departureTime: string
  arrivalTime: string
  durationMinutes?: number
  price: number
  seatsAvailable?: number
  amenities?: string[]
  baggageLimitKg?: number
  handLuggageKg?: number
}
