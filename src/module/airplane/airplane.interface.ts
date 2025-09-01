export interface IAirplane {
  name: string // কোম্পানির নাম
  from: string // যাত্রা শুরুর স্থান
  to: string // গন্তব্য
  departureTime: string // ISO datetime
  arrivalTime: string // ISO datetime
  durationMinutes?: number
  price: number // মোট ভাড়া
  serviceClass?: string // Economy, AC, Sleeper...
  seatsAvailable?: number
  amenities?: string[] // ["wifi", "ac", "meal"]
  baggageLimitKg?: number // optional baggage info
  notes?: string // extra তথ্য
}
