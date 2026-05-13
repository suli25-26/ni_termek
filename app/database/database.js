import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE
})

export default sequelize
