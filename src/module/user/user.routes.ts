import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post('/create-user', UserController.createUser)

router.get('/users', UserController.findUsers)

router.get('/:id', UserController.findByUserId)

router.post('/login-user', UserController.loginUser)

router.patch('/edit-user/:id', UserController.updateUser)

export const UserRoutes = router
