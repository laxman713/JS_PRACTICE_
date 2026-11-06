const express = require("express");
const router = express.Router();

const proControllerGet = require("../Controllers/proController");
const proControllerPost = require("../Controllers/proController");


router.get('/',proControllerGet.proControllerget)
router.post('/post',proControllerPost.proControllerPost)


module.exports = router;