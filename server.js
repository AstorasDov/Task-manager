const http = require('http');
const fs = require('fs');
const path = require('path');

const read = (path) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            if(data){resolve(data)}
            else reject(err);
        });
    });
}

const server = http.createServer(async (req,res)=>{
    const extname = path.extname(req.url);

    switch(req.url){
        case "/":
            const html = await read(path.join(__dirname,'public','index.html'));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
            break;
    }

    switch(extname){
        case ".css":
            const css = await read(path.join(__dirname,'public',req.url));
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
            break;
        case ".js":
            const js = await read(path.join(__dirname,'public',req.url));
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(js); 
            break;
    }


});

server.listen(3000);