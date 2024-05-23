"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putConsulta = exports.postConsulta = exports.deleteConsulta = exports.getConsulta = exports.getConsultas = void 0;
const peluqueria_1 = __importDefault(require("../models/peluqueria"));
const getConsultas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listConsulta = yield peluqueria_1.default.findAll();
    res.json(listConsulta);
});
exports.getConsultas = getConsultas;
const getConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const consult = yield peluqueria_1.default.findByPk(id);
    if (consult) {
        res.json(consult);
    }
    else {
        res.status(404).json({
            msg: 'no existe el id: ' + id
        });
    }
});
exports.getConsulta = getConsulta;
const deleteConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const consult = yield peluqueria_1.default.findByPk(id);
    if (consult) {
        yield consult.destroy();
        res.json({
            msg: 'la Consulta fue eliminada '
        });
    }
    else {
        res.status(404).json({
            msg: 'no existe el id: ' + id
        });
    }
});
exports.deleteConsulta = deleteConsulta;
const postConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield peluqueria_1.default.create(body);
        res.json({
            msg: 'la consulta fue agregada'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'ups, ha ocurrido un error'
        });
    }
});
exports.postConsulta = postConsulta;
const putConsulta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const consult = yield peluqueria_1.default.findByPk(id);
    try {
        if (consult) {
            yield consult.update(body);
            res.json({
                msg: 'el producto fue actualizado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: 'no existe el id: ' + id
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'ups, ha ocurrido un error'
        });
    }
});
exports.putConsulta = putConsulta;
