import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: "../../../production_local.env"});

async function dbConnection(){
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(()=>{
        console.log("Conectado ao banco");
    })
    .catch((error)=>{
        console.error("Falha ao conectar-se com o banco de dados:", error)
    });
};

dbConnection();

export default dbConnection;