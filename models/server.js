    const express = require('express');
    const cors = require('cors');

    class Server{

        constructor() {

            this.app = express();
            this.port = process.env.PORT;

            this.userPath = '/api/user';

            // Middlewares
            this.middlewares();

            // Rutas de la aplicacion
            this.routes();

        }

        middlewares() {

            // CORS
            this.app.use( cors() );

            // Directorio publico
            this.app.use(express.static('public'));

        }

        routes() {

            this.app.use( this.userPath, require('../routes/user.routes') );

        }

        listen() {


            this.app.listen(this.port, () => {

                console.log('El servidor esta corriendo en el puerto:', this.port);
        
            });

        }



    }

    module.exports = Server;

