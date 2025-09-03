import { TransportModel } from './transport.model'
import { ITransport } from './transport.interface'

const createTransport = async (payload: ITransport) => {
  try {
    const result = await TransportModel.create(payload)
    return result
  } catch (err) {
    console.log(err)
  }
}
// const findTransport = async () => {
//   try {
//     const result = await TransportModel.find()
//     return result
//   } catch (err) {
//     console.log(err)
//   }
// }
const findByIdTransport = async (id: string) => {
  try {
    const result = await TransportModel.findById(id)
    return result
  } catch (err) {
    console.log(err)
  }
}
const findTransport = async (filters: any = {}) => {
  try {
    const {
      search,
      from,
      to,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
    } = filters

    const query: any = {}

    // 🔍 Search multiple fields
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { from: { $regex: search, $options: 'i' } },
        { to: { $regex: search, $options: 'i' } },
      ]
    }

    // ✈️ Filter exact from/to
    if (from) query.from = from
    if (to) query.to = to

    // 💰 Price range
    if (minPrice || maxPrice) {
      query.price = {}
      if (minPrice) query.price.$gte = Number(minPrice)
      if (maxPrice) query.price.$lte = Number(maxPrice)
    }

    // 📄 Pagination
    const skip = (Number(page) - 1) * Number(limit)

    const data = await TransportModel.find(query)
      .skip(skip)
      .limit(Number(limit))
      .sort({ departureTime: 1 }) // earliest flight first

    const total = await TransportModel.countDocuments(query)

    return {
      data,
      meta: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

const updateTransport = async (id: string, payload: ITransport) => {
  try {
    const result = await TransportModel.findByIdAndUpdate(id, payload, {
      new: true,
    })
    return result
  } catch (err) {
    console.log(err)
  }
}
const deleteTransport = async (id: string) => {
  try {
    const result = await TransportModel.findByIdAndDelete(id, { new: true })
  } catch (err) {
    console.log(err)
  }
}

export const TransportServices = {
  createTransport,
  findTransport,
  findByIdTransport,
  updateTransport,
  deleteTransport,
}
