import express from "express";
import { register } from "../controllers/authControllers.js";

const routes = express.Router();

routes.post("/register", register);

export default routes;
