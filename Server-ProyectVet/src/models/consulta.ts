import db from '../db/connection';
import {DataTypes} from 'sequelize'

const Consulta = db.define('consulta',{
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Especie: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Sexo: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    Raza: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    FechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    Edad: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    Propietario: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Cedula: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    Celular: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    Direccion: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    Correo: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    ValorConsulta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    FechaCita: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    HoraCita: {
        type: DataTypes.TIME,
        allowNull: true,
    },
},{
    createdAt: false,
    updatedAt: false
});

export default Consulta;