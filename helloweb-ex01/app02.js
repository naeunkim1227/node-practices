const fs = require('fs');
const http = require('http');


const port = 8080;
//요청이 들어오면 실행하는 핸들러   
const server = http.createServer(function(req, resp){
    console.log(req.url);
    
    if(req.url === '/'){
        //특정파일을 지정하지 않았을 경우
        req.url = '/index.html';
    }


    //__dirname 현재 실행중인 디렉토리 이름
    //fs.readFile(__dirname + '/public' + req.url);
    fs.readFile(`${__dirname}/public${req.url}`, function(error, data){

        resp.writeHead(200, {
        //바디가 시작되기 전 contenttype 꼭 적어주기
            'Content-Type' : 'text/html'
       });
    
       resp.end(data);

    });

});


server.listen(port , function(){
    console.log(`http server running on ${port}`);
});
