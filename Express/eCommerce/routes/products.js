const express = require('express');
const router = express.Router();
const procontrollerGet = require("../Controllers/productController");
const procontrollerPost = require("../Controllers/productController");
const procontrollerGetId = require("../Controllers/productController");


router.get('/',procontrollerGet.proControllerGet)

router.post('/',procontrollerPost.proControllerPost)

router.get('/:id',procontrollerGet.proControllerGetId)

module.exports = router;