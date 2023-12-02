const bodyParser = require('body-parser');
const cors = require ('cors')
const cellphone = require("./cellphoneRoutes");

module.exports = app => {

    app.get('/', (req,res)=> {
        res.status(200).json({msg:'Desafio'});
    })
    .use(
        bodyParser.json(),
        cors(),
        cellphone
        
    )
}