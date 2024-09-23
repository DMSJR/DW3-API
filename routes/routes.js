//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router();
const app = require("../controller/ctlApi");

//@ Configura as rotas


routerApp.get("/getall",app.GetAllSalasDeAula); 
routerApp.get("/getbyid/:salasdeaulaid",app.GetSalasDeAulaByID); 
routerApp.post("/insert",app.InsertSalasDeAula); 
routerApp.put("/update/:salasdeaulaid", app.UpdateSalasDeAula);
routerApp.put("/delete/:salasdeaulaid", app.DeleteSalasDeAula);

//@ Exporta a variável com as rotas
module.exports = routerApp;