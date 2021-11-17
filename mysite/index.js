const express = require('express');
const path = require('path');
const http  = require('http');
const dotenv = require('dotenv');


//구조분리하기
//1.Environment Variables
//dotenv라이브러리가 이를 도와준다
//app.env
dotenv.config({
    path: path.join(__dirname, 'config/app.env')
});

//2. Application Routers 
    // index.js 에서 매핑 처리 계속해서 ; 를 옮겨야하고 추가해야한다. 이를 추가하는 router를 새로 추가한다.
    //.use('/', mainRouter)
    //.use('/user', userRouter);
    const applicationRouter = require('../routes')

//3. Logger






//4.Application Setup
const application = express()
//express();가 리턴하는 객체에서 바로 .use 사용가능
    //4-1. static resources 
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
    //4-2. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded
    .use(express.json()) // application/json
    //4-3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
  
    //.use('/', mainRouter)
    //.use('/user', userRouter);
    //5. Application Routers 사용하기
    applicationRouter.setup();



//Server Setup
http.createServer(application)
.on('listening', function(){
    console.info(`http server runs on ${process.env.PORT}`)
}).on('error', function(){
    switch(error.code){
        case 'EACCESS' : 
            console.error(`${process.env.PORT} requires privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE' : 
            console.error(`${process.env.PORT} is already in use`);
            process.exit(1);
            break;
        default:
             throw error;
    }
}).listen(process.env.PORT);