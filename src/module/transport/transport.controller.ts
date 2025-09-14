import { Request, Response } from 'express'
import { TransportServices } from './transport.services'

const createTransport = async (req: Request, res: Response) => {
  try {
    if (req.file) {
      req.body.transportImage = req.file.path
    }

    const result = await TransportServices.createTransport(req.body)

    res.json({
      success: true,
      message: 'Transport created successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, message: 'Something went wrong' })
  }
}

const findTransport = async (req: Request, res: Response) => {
  try {
    const filters = req.query
    const result = await TransportServices.findTransport(filters)

    res.json({
      success: true,
      message: 'Transports retrieved successfully',
      data: result.data,
      meta: result.meta || null,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err instanceof Error ? err.message : err,
    })
  }
}

const findByIdTransport = async (req: Request, res: Response) => {
  try {
    const result = await TransportServices.findByIdTransport(req.params.id)
    res.json({
      success: true,
      message: 'single Transport retrived',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const updateTransport = async (req: Request, res: Response) => {
  try {
    const result = await TransportServices.updateTransport(
      req.params.id,
      req.body,
    )
    res.json({
      success: true,
      message: 'transport update successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}
const deleteTransport = async (req: Request, res: Response) => {
  try {
    const result = await TransportServices.deleteTransport(req.params.id)
    res.json({
      success: true,
      message: 'Transport deleted successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const TransportController = {
  createTransport,
  findTransport,
  findByIdTransport,
  updateTransport,
  deleteTransport,
}
