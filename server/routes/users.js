var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send({ name: "Limon", age: 28 });
});

module.exports = router;
