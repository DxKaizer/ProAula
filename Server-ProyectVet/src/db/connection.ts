import { Sequelize } from "sequelize";

const sequelize = new Sequelize('proyect', 'root', 'pass123', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;