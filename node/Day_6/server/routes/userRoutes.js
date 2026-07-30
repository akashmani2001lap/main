import express from 'express'
import {userController} from '../controllers/usersController.js'

const routes = express.Router()

routes.post("/register",userController)

export default routes;