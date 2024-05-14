import http2 from "http2";
import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

const options = {
    key: fs.readFileSync("./server.key"),
    cert: fs.readFileSync("./server.crt")
};

const server = http2.createSecureServer(options, app);

server.listen(3000, () =>{
    try {
        console.log("Servidor aberto");
    } catch (error) {
        console.error("Servidor não foi aberto", error);
    }
});