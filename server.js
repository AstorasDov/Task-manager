const http = require('http');
const {readFile} = require('fs');
const path = require('path');

const read = (path) => {
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',( err,data )=>{
            if(data){resolve(data);}
            else reject(err);
        });
    });
}

const server = http.createServer(async (req,res)=>{
    const extname = path.extname(req.url);

    switch(req.url){
        case "/":
            try{
                const html = await read(path.join(__dirname,'public','index.html'));
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(html);
            }catch(err){   
                console.log(err);
                res.end();
            }
            break;
        case "/api/tasks":
            try {
                const json = await read("./tasks.json");
                res.end(json);
            } catch (err) {
                res.end();
            };break;
    }

    switch(extname){
        case ".css":
            try {
                const css = await read(path.join(__dirname,'public',req.url));
                res.writeHead(200,{"Content-Type":"text/css"});
                res.end(css);
            } catch (err) {
                res.end();
            };break;
        case ".js":
            try {
                const js = await read(path.join(__dirname,'public',req.url));
                res.writeHead(200,{"Content-Type":"application/javascript"});
                res.end(js);
            } catch (err) {
                res.end();
            };break;  
    }
});

server.listen(3000);