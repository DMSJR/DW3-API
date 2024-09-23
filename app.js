//@ Importa as bibliotecas
const express = require("express")
require("dotenv").config();
const router = require("./routes/routes");

//@ Configura o servidor
const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(router);


//@ Cria uma rota para o endereço raiz.
app.get("/", (req, res) => {
    res.send("API para controle acadêmico")
})

//@ Inicia o servidor
app.listen(port, () => {
console.log("Executando a aplicação:" , process.env.APP_NAME);
console.log("Example app listening on port:", port);
})




