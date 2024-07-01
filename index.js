const fs = require('fs');
// const data = fs.readFileSync('new-file.txt');

// console.log(data.toString());

//write file

// fs.writeFile('file.txt',"Hello World !",'utf-8', (err) => {
//     console.log('file modified');
// });

//append File

// fs.appendFile('file.txt',"Hello World !",'utf-8', (err) => {
//     console.log('file added');
// });

//create new dir

// fs.mkdir('newDir', (err) => {
//     if(err) console.log(err);
//     else {console.log('directory created')}
// });

//remove dir

// fs.rmdir('newDir', (err) => {
//     if(err) console.log(err);
//     else {console.log('directory deleted')}
// });

//rename file

// fs.rename('newFile.txt','new-file.txt', (err) => {
//     if(err) console.log(err);
//     else {console.log('file renamed')}
// });


//path directory and extension

// const p = '/home/harsh/Desktop/Node/new-file.txt';

const path = require('path');

// const dirName = path.dirname(p);
// const extension = path.extname(p);

// console.log(dirName);
// console.log(extension);


const destinationPath = '/home/harsh/Desktop/Node/newDir';
const fileSourcePath = '/home/harsh/Desktop/Node/new-file.txt';

fs.copyFileSync(fileSourcePath,path.join(destinationPath,path.basename(fileSourcePath)));

const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>Node js</title></head> <body>');
        res.write('<h1>Hello World</h1>');
        res.write('</body></html>');
        res.end();
    }
    else if(req.url==='/login'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><title>Node js</title></head> <body>');
        res.write('<h1>Hello login</h1>');
        res.write('</body></html>');
        res.end();
    }
    else if(req.url==='/name'){
        res.setHeader('Content-Type','text/html');
        res.write(fs.readFileSync('index.html'));
        res.end();
    }
});

const port = 3000;
const host = 'localhost';
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`);
});

