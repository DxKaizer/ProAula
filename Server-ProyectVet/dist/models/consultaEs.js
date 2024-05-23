"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const ConsultaEs = connection_1.default.define('consulta_es', {
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    MedicoResponsable: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    Fecha: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    NombrePropietario: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    Direccion: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: true,
    },
    Telefono: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
    },
    Correo: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    NombreMascota: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    FechaNacimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    FechaIngresoMascota: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    Hora: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    Vacunas: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    MotivoPresentacion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    MotivoConsulta: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    InformacionImportanteMascota: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = ConsultaEs;
