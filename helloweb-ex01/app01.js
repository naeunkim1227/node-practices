const http = require('http');


const port = 8080;
//요청이 들어오면 실행하는 핸들러   
const server = http.createServer(function(req, resp){
   resp.writeHead(200, {
    //바디가 시작되기 전 contenttype 꼭 적어주기
        'Content-Type' : 'text/html'
   });

   resp.end('<h1>Hello</h1>');

});


server.listen(port , function(){
    server.listen(port , function(){
    console.log(`http server running on ${port}`);
})