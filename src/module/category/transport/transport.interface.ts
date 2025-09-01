// export type UUID = string
// export type ISODateTime = string // e.g., "2025-09-01T14:30:00+06:00"
// export type CurrencyCode = string

// export enum TransportMode {
//   Flight = 'flight',
//   Train = 'train',
//   Bus = 'bus',
//   Ferry = 'ferry',
//   CarRental = 'car_rental',
//   RideShare = 'ride_share',
//   PrivateTransfer = 'private_transfer',
//   Metro = 'metro',
//   Bike = 'bike',
// }

// export enum ServiceClass {
//   Economy = 'economy',
//   PremiumEconomy = 'premium_economy',
//   Business = 'business',
//   First = 'first',
//   AC = 'ac',
//   NonAC = 'non_ac',
//   Sleeper = 'sleeper',
// }

// export interface GeoPoint {
//   lat?: number
//   lon?: number
// }

// export interface Location {
//   code?: string // IATA code for airports, station code, etc.
//   name: string // "Shahjalal International Airport"
//   city?: string // "Dhaka"
//   country?: string // "BD"
//   geo?: GeoPoint
// }

// // ---- Pricing & policy ----
// export interface Money {
//   amount: number // base amount (without taxes/fees if you split them)
//   currency: CurrencyCode
// }

// export interface Price extends Money {
//   taxes?: number // total tax amount in same currency
//   fees?: number // service/booking fees
//   discount?: number // discount amount applied
//   total?: number // if provided, overrides computed total
// }

// export interface CancellationPolicy {
//   refundable: boolean
//   cancelFee?: Money // fee if canceled
//   changeFee?: Money // fee if date/route changed
//   deadlineHours?: number // hours before departure for free cancel/change
// }

// export interface BaggagePolicy {
//   cabinKg?: number
//   checkedKg?: number
//   extraPerKg?: Money // charge per extra kg
// }

// // ---- Schedule & equipment ----
// export interface Schedule {
//   departureTime: ISODateTime
//   arrivalTime: ISODateTime
//   durationMinutes?: number // optional if not precomputed
//   frequencyRule?: string // e.g., "daily", "Mon-Fri", or cron-like string
// }

// export interface Equipment {
//   code?: string // aircraft/coach type (e.g., "738", "Volvo B11R")
//   name?: string // human readable
// }

// export interface Seat {
//   number?: string // seat number if pre-assigned
//   class?: ServiceClass
//   available?: boolean
//   fareCode?: string // airline/bus fare bucket
// }

// // ---- Core transport option ----
// export interface TransportOption {
//   id: UUID
//   mode: TransportMode
//   providerName: string // airline, bus company, etc.

//   from: Location
//   to: Location

//   schedule: Schedule
//   serviceClass?: ServiceClass
//   equipment?: Equipment

//   price: Price
//   currency?: CurrencyCode // optional convenience if you always price in one currency

//   seatsAvailable?: number
//   seatMap?: Seat[] // optional detailed seats

//   amenities?: string[] // ["wifi", "meal", "ac", "power" ]

//   policies?: {
//     cancellation?: CancellationPolicy
//     baggage?: BaggagePolicy // meaningful for flight/ferry/bus
//   }

//   // Flexible extension for provider-specific fields (PNR, bus counter, etc.)
//   metadata?: Record<string, unknown>
// }

// // ---- Example data ----
// export const demoOptions: TransportOption[] = [
//   {
//     id: 'opt-001',
//     mode: TransportMode.Bus,
//     providerName: 'Shohagh Paribahan',
//     from: { name: 'Dhaka (Gabtoli)', city: 'Dhaka', country: 'BD' },
//     to: { name: 'Chattogram (AK Khan)', city: 'Chattogram', country: 'BD' },
//     schedule: {
//       departureTime: '2025-09-01T22:30:00+06:00',
//       arrivalTime: '2025-09-02T05:30:00+06:00',
//       durationMinutes: 420,
//       frequencyRule: 'daily',
//     },
//     serviceClass: ServiceClass.AC,
//     equipment: { name: 'Volvo Sleeper Coach' },
//     price: { amount: 1600, currency: 'BDT', taxes: 0, fees: 50 },
//     seatsAvailable: 14,
//     amenities: ['ac', 'wifi', 'power'],
//     policies: {
//       cancellation: {
//         refundable: true,
//         cancelFee: { amount: 100, currency: 'BDT' },
//         deadlineHours: 6,
//       },
//     },
//   },
//   {
//     id: 'opt-002',
//     mode: TransportMode.Flight,
//     providerName: 'Biman Bangladesh Airlines',
//     from: { code: 'DAC', name: 'Shahjalal Intl', city: 'Dhaka', country: 'BD' },
//     to: {
//       code: 'CGP',
//       name: 'Shah Amanat Intl',
//       city: 'Chattogram',
//       country: 'BD',
//     },
//     schedule: {
//       departureTime: '2025-09-01T09:00:00+06:00',
//       arrivalTime: '2025-09-01T09:50:00+06:00',
//       durationMinutes: 50,
//     },
//     serviceClass: ServiceClass.Economy,
//     equipment: { code: '738', name: 'Boeing 737-800' },
//     price: { amount: 5800, currency: 'BDT', taxes: 500, fees: 200 },
//     seatsAvailable: 9,
//     amenities: ['meal'],
//     policies: {
//       cancellation: {
//         refundable: false,
//         changeFee: { amount: 1500, currency: 'BDT' },
//       },
//       baggage: {
//         cabinKg: 7,
//         checkedKg: 20,
//         extraPerKg: { amount: 600, currency: 'BDT' },
//       },
//     },
//     metadata: { pnrRequired: true },
//   },
//   {
//     id: 'opt-003',
//     mode: TransportMode.Train,
//     providerName: 'Bangladesh Railway',
//     from: { name: 'Kamalapur Station', city: 'Dhaka', country: 'BD' },
//     to: { name: 'Chattogram Station', city: 'Chattogram', country: 'BD' },
//     schedule: {
//       departureTime: '2025-09-01T23:00:00+06:00',
//       arrivalTime: '2025-09-02T06:45:00+06:00',
//       durationMinutes: 465,
//     },
//     serviceClass: ServiceClass.Sleeper,
//     equipment: { name: 'Intercity Express' },
//     price: { amount: 1200, currency: 'BDT' },
//     seatsAvailable: 30,
//     amenities: ['ac', 'power'],
//     policies: {
//       cancellation: {
//         refundable: true,
//         cancelFee: { amount: 80, currency: 'BDT' },
//       },
//     },
//   },
// ]

// // ---- Helper: compute display total ----
// export function computeTotal(p: Price): number {
//   if (typeof p.total === 'number') return p.total
//   const taxes = p.taxes ?? 0
//   const fees = p.fees ?? 0
//   const discount = p.discount ?? 0
//   return Math.max(0, p.amount + taxes + fees - discount)
// }

// // ---- Helper: basic validation for times ----
// export function isScheduleValid(s: Schedule): boolean {
//   return new Date(s.arrivalTime).getTime() > new Date(s.departureTime).getTime()
// }

// Single compact interface for all transport types

export type TransportType = 'bus' | 'train' | 'flight' | 'ferry' | 'car'

export interface ITransport {
  type: TransportType
  provider: string // কোম্পানির নাম
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
