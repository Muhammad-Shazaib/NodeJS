const http = require('http');
//const fs = require('fs');
//const url = require('url');


const express = require('express');

const app = express();
app.get('/', (req, res) => {
   return res.send('Hello From Home Page');
})

app.get('/about', (req, res) => {
   return res.send(`Hello ${req.query.name}`);
})

app.listen(8000, ()=> console.log('Server Started') )
//function myHandler(req, res) {
    // if (req.url === '/favicon.ico') return res.end();
    // const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    // const myUrl = url.parse(req.url, true);
    // console.log(myUrl);
    // fs.appendFile('log.txt', log, (err, data) => {

    //     switch (myUrl.pathname) {
    //         case '/':
    //             if (req.method) res.end('Home Page');
    //             break;
    //         case '/about':
    //             const username = myUrl.query.myname;
    //             res.end(`Hi , ${username}`);
    //             //console.log(userName);
    //             break;
    //         case '/contact': res.end('Contact Page');
    //         case 'Signup':
    //             if (req.method === 'GET') res.end('This is a Signup Form');
    //             else if (req.method === 'POST') {
    //                 // DB Query
    //                 res.end('Success');
    //             }
    //         default: res.end('404 Not Found');
    //     }
    // })
//}



// const myServer = http.createServer( app);
// myServer.listen(8000, () => {
//     console.log("Server Started");
// });