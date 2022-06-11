var http = require('http');
var fs =  require('fs');

function onRequest(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('index.html');
    // const html = fs.readFileSync("./index.html");
    // res.end(html);
    fs.createReadStream('./index.html').pipe(res);
}

http.createServer(onRequest).listen(8031, () => { console.log("Running on 8031")});


// var http = require('http'),
//     fs = require('fs');


// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(8000);
// });