const express = require('express');
const router = express.Router();
const cartControllerGet = require('../Controllers/cartController')
const cartControllerPost = require("../Controllers/cartController")

router.post('/:id',cartControllerPost.cartControllerPost);

router.get('/:id',cartControllerGet.cartControllerGet)

module.exports = router;