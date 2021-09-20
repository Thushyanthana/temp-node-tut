/*
const amount = 9;

setTimeout(() => {
    console.log('Hello world')
}, 1000)


//To run the app type 'node app.js' or 'node app'
//No window object
//Gloabal variables-Always access access from anywhere

//Variables
//__dirname-path to current directory
//console.log(__dirname)
//__filename-File name
//console.log(__filename)
//require-Function to use modules(Common.js)
//module-Information about current module
//process-Information about env where the program being excecuted

//Every time you must access these modules by /
//import modules 

/*
if (amount < 10) {
    console.log('Small number')
}
else {
    console.log('Large number')
}

console.log('It is my First node')
console.log(__dirname)
console.log(__filename)
console.log(module)


//OS Module Builtin module

const os=require('os');
//const path = require('path/posix');

//Information about current user
const user=os.userInfo();
console.log(user)

//Method returns the system uptime in seconds
console.log(os.uptime())


const currentOS={
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem()
}

console.log(currentOS);

const path=require('path')
console.log(path.sep);

//pass the values as Strings
const filePath=path.join('/content/','subfolder','test.txt')
console.log(filePath)

//currently working path will be 
const base=path.basename(filePath)
console.log(base);


//Full path will be receive
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

*/
const http=require('http')
//req,res are objects
const server=http.createServer((req,res)=>{

   if(req.url==='/')
   {
res.end('Welcome to home page')
   }
    if(req.url==='/about')
   {
res.end('Here is our short history')
   }

res.end('<h1>Oops!</h1><p>We cannot seem the page</p><a href="/">Home Page</a>')

})

server.listen(5000)