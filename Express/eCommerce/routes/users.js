const express = require('express');
const router = express.Router();

const userControllerGet = require("../Controllers/usersController")
const userControllerPost = require("../Controllers/usersController")
const userControllerGetId = require("../Controllers/usersController")


router.get('/',userControllerGet.userControllerGet)

router.post('/',userControllerPost.userControllerPost)

router.get('/:id',userControllerGetId.userControllerGetId)

module.exports = router;