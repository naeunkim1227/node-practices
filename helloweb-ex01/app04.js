const connect = require('connect');
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');

const port = 8080;
const app = connect();


app.use(serveStatic(__dirname + "/public"));
app.use(connectRoute(function(router){
    //라우터 등록 (get방식)
    router.get("/", function(req, resp){
        resp.writeHead(200, {
            //바디가 시작되기 전 contenttype 꼭 적어주기
                'Content-Type' : 'text/html'
           });
        
           resp.end('<h1>Main</h1>'); 
    });


    router.get("/user", function(req, resp){
        console.log(req._parseUrl.query);


        req.query = {};
        params = (req._parseUrl.query || '').split('&');
        params.foreach(function(param){
            tokens = param.split('=');
            req.query[tokens[0]] = tokens[1];

        })

        resp.writeHead(200, {
            //바디가 시작되기 전 contenttype 꼭 적어주기
                'Content-Type' : 'text/html'
           });

           resp.end(`<h1>User No: ${req.query.no} </h1>`);
       
    });


    router.get("/guestbook", function(req, resp){
        resp.writeHead(200, {
            //바디가 시작되기 전 contenttype 꼭 적어주기
                'Content-Type' : 'text/html'
           });
        
           resp.end('<h1>Guestbook List</h1>');
        
        });

    router.get("/board", function(req, resp){
        resp.writeHead(200, {
            //바디가 시작되기 전 contenttype 꼭 적어주기
                'Content-Type' : 'text/html'
           });
        
           resp.end('<h1>Board List</h1>');
        
        });


    router.get("/board/:no", function(req, resp){
        resp.writeHead(200, {
            //바디가 시작되기 전 contenttype 꼭 적어주기
                'Content-Type' : 'text/html'
           });
        
           resp.end(`<h1>Board view : ${req.params.no}</h1>`);
        
        });


}));




app.listen(port, function(){
    console.log(`http server running on ${port}`);
});