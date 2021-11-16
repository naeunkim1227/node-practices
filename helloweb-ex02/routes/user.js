const express = require('express');
const { request } = require('http');

const router = express.Router();

//user?no=10
router.route("/").get(function(req, res){
    res.render('user/info', {
        no: req.query.no || 0
    })

});
router.route("/info/:no").get(function(req, res){
    res.render('user/info', {
        no: req.params.no || 0
    })
    


});

router.route("/join").get(function(req, res){
    res.render('user/join');
 
});

router.route("/join").post(function(req, res){
    console.log(req.body);

    //메인으로 이동
    res.redirect("/");
});

router.route("/api").get(function(req,res){
    const vo = {
        no: 10,
        name: '둘리',
        email: 'dooly@hamil.com',
        gender: 'male'
    }

    //res.writeHead(200, {
    //    'Content-Type' : "application/json"
    //})

    //데이터 보내기
   // res.end(JSON.stringify(vo));

    //express는 다음과 같이 코드 축약이 가능하다
   res.send(vo);

});

module.exports = router;