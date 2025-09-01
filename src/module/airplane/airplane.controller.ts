import { Request, Response } from 'express'
import { AirplaneServices } from './airplane.services'

const createAirplane = async (req: Request, res: Response) => {
  try {
    const result = await AirplaneServices.createAirplane(req.body)
    res.json({
      success: true,
      message: 'Airplane created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const findAirplane = async (req: Request, res: Response) => {
  try {
    const result = await AirplaneServices.findAirplane()
    res.json({
      success: true,
      message: 'Airplane retrived',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const findByIdAirplane = async (req: Request, res: Response) => {
  try {
    const result = await AirplaneServices.findByIdAirplane(req.params.id)
    res.json({
      success: true,
      message: 'single Airplane retrived',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const updateAirplane = async (req: Request, res: Response) => {
  try {
    const result = await AirplaneServices.updateAirplane(req.params.id)
    res.json({
      success: true,
      message: 'transport update successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const deleteAirplane = async (req: Request, res: Response) => {
  try {
    const result = await AirplaneServices.deleteAirplane(req.params.id)
    res.json({
      success: true,
      message: 'Transport deleted successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const AirplaneController = {
  createAirplane,
  findAirplane,
  findByIdAirplane,
  updateAirplane,
  deleteAirplane,
}
