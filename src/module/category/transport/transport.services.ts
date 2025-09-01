import { ITransport } from './transport.interface'
import { TransportModel } from './transport.model'

const createTransport = async (payload: ITransport) => {
  try {
    const result = await TransportModel.create(payload)
    return result
  } catch (err) {
    console.log(err)
  }
}
const findTransport = async () => {
  try {
    const result = await TransportModel.find()
    return result
  } catch (err) {
    console.log(err)
  }
}
const findByIdTransport = async (id: string) => {
  try {
    const result = await TransportModel.findById(id)
    return result
  } catch (err) {
    console.log(err)
  }
}
const updateTransport = async (id: string) => {
  try {
    const result = await TransportModel.findByIdAndUpdate(id, { new: true })
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
