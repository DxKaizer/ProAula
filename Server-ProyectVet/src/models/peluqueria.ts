import db from '../db/connection';
import { DataTypes } from 'sequelize';

const peluqueria = db.define('peluqueria', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  FechaEntrada: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  Hora: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  NombreAnimal: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  NombreDueno: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  Especie: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Raza: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  Color: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Telefono: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  PeluqueroResponsable: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  Observaciones: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  TipoBano: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  HoraSalida: {
    type: DataTypes.TIME,
    allowNull: true,
  },
}, {
  createdAt: false,
  updatedAt: false,
});

export default peluqueria;
