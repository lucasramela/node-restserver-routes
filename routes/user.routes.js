
    const { Router } = require('express');

    const { userGet, userPut, userPost, userDelete, userPatch } = require('../controllers/user.controllers');

    const router = Router();
 
    router.get('/', userGet );
    
    router.put('/', userPut);

    router.post('/', userPost);

    router.patch('/', userPatch);
    
    router.delete('/', userDelete);

    

    module.exports = router;