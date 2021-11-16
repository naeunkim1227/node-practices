const express = require('express');
const path = require('path');
const http  = require('http');

//모듈
const emaillistRouter = require('./routes/emaillist');


const port = 8080;

//Application Setup
const application = express()
//express();가 리턴하는 객체에서 바로 .use 사용가능
    //1. static resources 
    .use(express.static(path.join(__dirname, 'public')))
    //2. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded
    .use(express.json()) // application/json
    //3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    //4. request router
    .all('*', function(req, res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    //매핑 처리 
    .use('/', emaillistRouter)



//Server Setup
http.createServer(application)
.on('listening', function(){
    console.info(`http server runs on ${port}`)
}).on('error', function(){
    switch(error.code){
        case 'EACCESS' : 
            console.error(`${port} requires privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE' : 
            console.error(`${port} is already in use`);
            process.exit(1);
            break;
        default:
             throw error;
    }
}).listen(port);