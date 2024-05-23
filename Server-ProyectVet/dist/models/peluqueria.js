"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const peluqueria = connection_1.default.define('peluqueria', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    FechaEntrada: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    Hora: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    NombreAnimal: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    NombreDueno: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    Especie: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    Raza: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    Color: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    Telefono: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    PeluqueroResponsable: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    Observaciones: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    TipoBano: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
    },
    Valor: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    HoraSalida: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = peluqueria;
