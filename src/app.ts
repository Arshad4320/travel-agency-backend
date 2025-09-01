import express, { Application, Request, Response } from 'express'

import router from './router/router'
import cors from 'cors'
const app: Application = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .send({ success: true, message: 'Travel agency Server Is Running' })
})
app.use('/api/v1', router)

export default app
