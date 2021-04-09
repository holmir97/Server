// createServer.js [1]

const http = require('http');

      //서버를 만들어주는 명령어
http
  .createServer((req, res) => { 

      //console.log는 콘솔창에 두번 출력
    console.log('28기 서버 파트');
    res.writeHead(200, { 'Content-Type': 'text/plain' }); //중요한 건 아님
    
    //res: respone의 약자
    res.write('Hello nodejs');  
    res.end();
  })
  
  // port
  .listen(3000); 
