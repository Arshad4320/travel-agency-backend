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
const findAirplane = async () => {
  try {
    const result = await AirplaneModel.find()
    return result
  } catch (err) {
    console.log(err)
  }
}
const findByIdAirplane = async (id: string) => {
  try {
    const result = await AirplaneModel.findById(id)
    return result
  } catch (err) {
    console.log(err)
  }
}
const updateAirplane = async (id: string) => {
  try {
    const result = await AirplaneModel.findByIdAndUpdate(id, { new: true })
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
