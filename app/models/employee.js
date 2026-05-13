import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";


const Employee = sequelize.define('employee', {
    name: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: true },
    salary: { type: DataTypes.INTEGER, allowNull: true }
})

// await sequelize.sync({ force: true })

export default Employee
