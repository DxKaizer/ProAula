import express, { Application, Router } from 'express';

import routesUser from '../routes/user';
import routerConsult from '../routes/consulta';
import routerConsultEs from '../routes/consultaEs';
import routerPeluqueria from '../routes/peluqueria';

import { User } from './user';
import cors from 'cors';


class Server {
    private app: Application;
    private port: string;

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '3001';
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Aplicacion esta Corriendo en el puerto " + this.port)
        })
    }
    
    routes() {

        this.app.use('/api/users', routesUser);
        this.app.use('/api/consulta',routerConsult);
        this.app.use('/api/consultaEspecializada',routerConsultEs)
        this.app.use('/api/Peluqueria',routerPeluqueria)
    }
    midlewares() {
        //parceo body
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }
    

    async dbConnect() {
        try {
            await User.sync();
        } catch (error) {
            console.error('error al conectar a la base e datos',error)
        }
    }
}
export default Server;