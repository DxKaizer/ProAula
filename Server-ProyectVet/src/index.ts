import  Server  from "./models/server";
import dotenv from "dotenv";

//Confuguracion Dotenv

dotenv.config();
const server = new Server();
server.listen();