const mongoose = require("mongoose");

const connection = mongoose
  .connect(`mongodb://127.0.0.1:27017/desafio`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão ao banco realizada com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB: " + err);
  });

module.exports = connection;