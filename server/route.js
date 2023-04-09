const express = require ('express');
const router = express.Router();

router.get("/",(req, res) => {
res.send("Here comes the Boom!!!");
});

module.exports = router;