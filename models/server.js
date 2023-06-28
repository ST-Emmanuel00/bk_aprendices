const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const coneccion_db = require('../db/config');

class Server {
    
    constructor () {
        
        this.app = express()

        this.port = process.env.puerto


        this.aprendiz_path = '/api/aprendiz'
        
        this.middlewares()

        this.routes()

        this.conectar_db()

    }

    middlewares() 
    {
        this.app.use(express.static(__dirname + "/public"));
        this.app.use( cors() );
        this.app.use(bodyParser.json()) 

    }

    routes()
    {

        

        this.app.use(this.aprendiz_path, require ('../routes/aprendiz'))

        
          
    }

    async conectar_db(){

        await coneccion_db()

    }

    escuchar() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

module.exports = Server