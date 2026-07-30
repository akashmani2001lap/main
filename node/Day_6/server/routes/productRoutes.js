import express from "express";
import {getAllProducts, productController, productHeader, QuertParam} from "../controllers/productController.js";

const routes = express.Router();

routes.post("/getProduct", productController);       // http://localhost:5000/api/products/getProduct
routes.get("/getallProducts/:id",getAllProducts);    // http://localhost:5000/api/products/getallProducts/123456
routes.get("/getallProductsQuery",QuertParam);        // http://localhost:5000/api/products/getallProductsQuery 
routes.post("/getProduct",productHeader)               // http://localhost:5000/api/products/getProduct

export default routes;
