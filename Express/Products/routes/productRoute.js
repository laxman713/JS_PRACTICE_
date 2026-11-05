const express = require("express");
const router = express.Router();

const proControllerGet = require("../Controllers/proController");

router.get('/',proControllerGet.proControllerget)

module.exports = router;