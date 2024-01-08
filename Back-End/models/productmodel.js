import sequelize from "../config/db.js"
import { DataTypes } from "sequelize";

const Product = sequelize.define(
    "Product",
    {
          title: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          category: {
            type: DataTypes.TEXT,
            allowNull: false,

          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false,

          },
          price: {
            type: DataTypes.INTEGER,
            allowNull: false,

          },
          supplier: {
            type: DataTypes.STRING,
            allowNull: false,

          }
    },{ timestamps: true }

)
export default Product;