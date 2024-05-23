const { text } = require('body-parser');
const { request, response } = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const envioCorreo = (req = request, resp = response) => {
    let body = req.body;
    const nombre = req.body.nombre;
    const fecha = req.body.fecha;
    const mensaje = `Este es un mensaje de confirmación de la cita para ${nombre} para el día ${fecha}.`;

    let config = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    const opciones = {
        from: 'Programacion',
        subject: process.env.ASUNTO,
        to: body.email,
        text: mensaje 
    };

    config.sendMail(opciones, function (error, result) {
        if (error) return resp.json({
            ok: false,
            msg: error
        });

        return resp.json({
            ok: true,
            msg: result
        });
    });
};

module.exports = {
    envioCorreo
};
