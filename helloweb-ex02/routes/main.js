const express = require('express');

const router = express.Router();
router.route("").get(function(req, res){
    //controller
    res.render('main/index')

});

module.exports = router;