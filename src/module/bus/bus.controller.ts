import { Request, Response } from 'express'
import { BusServices } from './bus.service'

const createBus = async (req: Request, res: Response) => {
  try {
    const result = await BusServices.createBus(req.body)
    res.json({
      success: true,
      message: 'bus created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

const findBus = async (req: Request, res: Response) => {
  try {
    const result = await BusServices.findBus(req.query)
    res.json({
      success: true,
      message: 'All buses is retrived',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const findByBusId = async (req: Request, res: Response) => {
  try {
    const result = await BusServices.findByBusId(req.params.id)
    res.json({
      success: true,
      message: 'bus retrived successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const updateBus = async (req: Request, res: Response) => {
  try {
    const result = await BusServices.updateBus(req.params.id, req.body)
    res.json({
      success: true,
      message: 'Bus update successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const deleteBus = async (req: Request, res: Response) => {
  try {
    const result = await BusServices.deleteBus(req.params.id)
    res.json({
      success: true,
      message: 'Bus deleted successfully',
    })
  } catch (err) {
    console.log(err)
  }
}

export const BusController = {
  createBus,
  findByBusId,
  findBus,
  updateBus,
  deleteBus,
}
