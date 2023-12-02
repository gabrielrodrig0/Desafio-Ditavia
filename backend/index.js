const express = require('express')
const app = express();
const connection = require("./database/config")
const routes = require("./routes")

routes(app)
app.use(express.json())

app.listen(3000, ()=>{
    console.log(`Servidor rodando na porta 3000`)
})