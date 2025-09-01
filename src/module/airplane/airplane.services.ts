import { IAirplane } from './airplane.interface'
import { AirplaneModel } from './airplane.model'

const createAirplane = async (payload: IAirplane) => {
  try {
    const result = await AirplaneModel.create(payload)
    return result
  } catch (err) {
    console.log(err)
  }
}
// const findAirplane = async () => {
//   try {
//     const result = await AirplaneModel.find()
//     return result
//   } catch (err) {
//     console.log(err)
//   }
// }
const findByIdAirplane = async (id: string) => {
  try {
    const result = await AirplaneModel.findById(id)
    return result
  } catch (err) {
    console.log(err)
  }
}
const findAirplane = async (filters: any = {}) => {
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

    const data = await AirplaneModel.find(query)
      .skip(skip)
      .limit(Number(limit))
      .sort({ departureTime: 1 }) // earliest flight first

    const total = await AirplaneModel.countDocuments(query)

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

const updateAirplane = async (id: string, payload: IAirplane) => {
  try {
    const result = await AirplaneModel.findByIdAndUpdate(id, payload, {
      new: true,
    })
    return result
  } catch (err) {
    console.log(err)
  }
}
const deleteAirplane = async (id: string) => {
  try {
    const result = await AirplaneModel.findByIdAndDelete(id, { new: true })
  } catch (err) {
    console.log(err)
  }
}

export const AirplaneServices = {
  createAirplane,
  findAirplane,
  findByIdAirplane,
  updateAirplane,
  deleteAirplane,
}
