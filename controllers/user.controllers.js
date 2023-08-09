
    // Los archivos de los controladores son para crear funciones y exportarlas

    const { response } = require('express');

    const userGet = (req, res = response) => {

        res.json({

            msg: 'get API - controller'

        });

    };

    const userPut= (req, res = response) => {

        res.json({

            msg: 'put API - controller'

        });

    };

    const userPost = (req, res = response) => {

        res.json({

            msg: 'post API - controller'

        });

    };

    const userPatch = (req, res = response) => {

        res.json({

            msg: 'patch API - controller'

        });

    };


    const userDelete = (req, res = response) => {

        res.json({

            msg: 'delete API - controller'

        });

    };

    



    module.exports = {

        userGet,
        userPut,
        userPost,
        userPatch,
        userDelete

    }