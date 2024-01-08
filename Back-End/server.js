import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/db.js"
import ProductRoutes from "./routes/ProductRoutes.js"
import UserRoutes from "./routes/UserRoutes.js"
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

  app.use('/products',ProductRoutes)
  app.use('/users', UserRoutes)

  app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
  });