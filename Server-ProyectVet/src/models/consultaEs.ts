import db from '../db/connection';
import { DataTypes } from 'sequelize';

const ConsultaEs = db.define('consulta_es', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    MedicoResponsable: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    Fecha: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    NombrePropietario: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    Direccion: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    Telefono: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    Correo: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    NombreMascota: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    FechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    FechaIngresoMascota: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    Hora: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    Vacunas: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    MotivoPresentacion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    MotivoConsulta: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    InformacionImportanteMascota: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    },{
        createdAt: false,
        updatedAt: false
    });

export default ConsultaEs;
