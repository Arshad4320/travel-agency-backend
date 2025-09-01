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

const findBus = async () => {}
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
