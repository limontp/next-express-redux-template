var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send({ msg: "Hello World" });
});

module.exports = router;
