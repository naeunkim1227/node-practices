const express = require('express');
const { request } = require('http');

const router = express.Router();
router.route("/01").get(function(req, res){
    //controller
    res.render('hello/01')

});
router.route("/02").get(function(req, res){
    const data = {
        //undeifined일 경우 ''로 설정
        no: req.query.no  || '',
        email: req.query.email || ''
    };
    
    //controller
    res.render('hello/02',data)

});

module.exports = router;