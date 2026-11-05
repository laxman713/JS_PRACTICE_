const express = require('express');
const router = express.Router();
const bookController = require("../Controllers/bookController")
const bookControllerPost = require("../Controllers/bookController")

router.get('/',bookController.bookControllerGet)

router.post('/',bookControllerPost.bookControllerPost)

module.exports = router;