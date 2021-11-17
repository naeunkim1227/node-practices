//routes index.js 에서 각 라우터로 이동


//모듈


const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');


  //4. request router
  .all('*', function(req, res, next){
    res.locals.req = req;
    res.locals.res = res;
    next();
})



//.use('/', mainRouter)
    //.use('/user', userRouter);