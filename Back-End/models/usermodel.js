import sequelize from "../config/db.js"
import { DataTypes } from "sequelize";
import {Sequelize} from "sequelize"

const User = sequelize.define(
    "User",
    {
        firstName: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            // allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("viewer", "creator"),
            // allowNull: false
        },
        password: {
            type: DataTypes.STRING,
        //     allowNull: false,
        // set(value) {
        // const salt = bcrypt.genSaltSync(12);
        // const hash = bcrypt.hashSync(value, salt);
        // this.setDataValue("password", hash);
        //         },
        },
        }, { timestamps: true }

)
export default User;