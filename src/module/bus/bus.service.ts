import { IBus } from './bus.interface'
import { BusModel } from './bus.model'

const createBus = async (payload: IBus) => {
  try {
    const result = await BusModel.create(payload)
    return result
  } catch (err) {
    console.log(err)
  }
}

const findBus = async (filters: any = {}) => {
  try {
    const {
      maxPrice,
      minPrice,
      limit = 10,
      page = 1,
      search,
      from,
      to,
    } = filters
    const query: any = {}
    if (search) {
      query.$or = [
        { name: { $regex: 'search', options: 'i' } },
        { from: { $regex: 'search', options: 'i' } },
        { to: { $regex: 'search', options: 'i' } },
      ]
    }
    if (from) query.from = from
    if (to) query.to = to
    if (minPrice || maxPrice) {
      query.price = {}
      if (minPrice) query.price.$gte = Number(minPrice)
      if (maxPrice) query.price.$lte = Number(maxPrice)
    }
    const skip = Number(page - 1) * Number(limit)
    const result = await BusModel.find(query).skip(skip).limit(Number(limit))
    const total = await BusModel.countDocuments(query)
    return {
      result,
      meta: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    }
  } catch (err) {
    console.log(err)
  }
}
const findByBusId = async (id: string) => {
  try {
    const result = await BusModel.findById(id)
    return result
  } catch (err) {
    console.log(err)
  }
}
const updateBus = async (id: string, payload: IBus) => {
  try {
    const result = await BusModel.findByIdAndUpdate(id, payload, { new: true })
    return result
  } catch (err) {
    console.log(err)
  }
}

const deleteBus = async (id: string) => {
  try {
    const result = await BusModel.findByIdAndDelete(id, { new: true })
    return result
  } catch (err) {
    console.log(err)
  }
}

export const BusServices = {
  createBus,
  findBus,
  findByBusId,
  updateBus,
  deleteBus,
}
