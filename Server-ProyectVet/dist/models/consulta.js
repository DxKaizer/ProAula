"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Consulta = connection_1.default.define('consulta', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    Especie: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    Sexo: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: true,
    },
    Raza: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    FechaNacimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    Edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    Propietario: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    Cedula: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    Celular: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    Direccion: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    Correo: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    ValorConsulta: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    FechaCita: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    HoraCita: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Consulta;
