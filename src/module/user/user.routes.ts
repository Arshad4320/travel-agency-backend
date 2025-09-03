import express from 'express'
import { UserController } from './user.controller'
const router = express.Router()

router.post('/', UserController.createUser)
router.get('/', UserController.findUsers)
router.get('/:id', UserController.findByUserId)
router.get('/edit-user/:id', UserController.updateUser)

export const UserRoutes = router
