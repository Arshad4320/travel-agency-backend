export interface IBus {
  busNumber: string
  companyName: string
  busImage?: string
  from: string
  to: string
  departureTime: string
  arrivalTime: string
  durationMinutes?: number
  busType?: string
  seatsAvailable?: number
  price: number
}
