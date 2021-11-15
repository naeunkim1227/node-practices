/*
douzone-naeun1227-math를 npm 모듈로 사용해보기

1. 모듈 패키지를 로컬 배포한다. 
    $ npm i ../douzone-naeun1227-math
    명령으로 설치 후 테스트하자.
2. 

*/

//모듈 땡겨오기
var dzMath = require('douzone-naeun1227-math');

console.log(dzMath.sum(10,20,30,40,50));
console.log(dzMath.max(10,20,30,40,50));
console.log(dzMath.min(10,20,30,40,50));