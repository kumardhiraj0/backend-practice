// const app = require("./app")
// const f = require("./export");
// var [x,y,z,h] = [20,40,60,100];
// // console.warn(x+y+z+h);
// // console.warn(app);
// // console.log(f.add(20,30));
// // console.log(f.subtract(20,30));

// let arr = [2,6,23,5,28,5,8,4,0];
// let result = arr.filter((item)=>{
//     return item%2===0;
// })
// console.log(result);

// const colors = require('colors');
 
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass
// console.log("hello".bgBlue);
// console.log("checking")
 
// const chalk = require('chalk');

// console.log(chalk.red('Error: Something went wrong!'));
// console.log(chalk.yellow.bold('Warning: This operation may cause data loss.'));
// console.log(chalk.green.underline('Success: The operation completed successfully.'));
//simple server using nodejs
// const http = require("http");
// const data = require("./data");
// const server = http.createServer((req,resp)=>{
//     resp.writeHead(200, { 'Content-Type': 'application/json' });
//     resp.write(JSON.stringify(data));
//     resp.end();
// })
// server.listen(5000)

//input from command line argument 
// console.log(process.argv);
// const input = process.argv;
// let first_name = input[2];
// let last_name = input[3];
// console.log(`my full name is ${first_name} ${last_name} `)


// const fs = require("fs");
// const input = process.argv;
// if(input[2]==="add"){
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2]=="remove"){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log("invalid input");
// }


//show file list and make file using for loop 
// const fs = require("fs");
// const path = require("path");
// const dirpath = path.join(__dirname,"files");
//creating 5 file using for loop inside files folder
// for(let i =0 ; i<5 ; i++){
//     fs.writeFileSync(`${dirpath}/greet${i}.txt`,"welcome to txt file");
// }

//reading all file name inside files folder
// fs.readdir(dirpath,(err,filesname)=>{
//     // console.log(filesname);
//     filesname.forEach((file)=>{
//         console.log("file name is " , file);
//     })
// })


//crud operation with file system
// const fs = require("fs");
// const path = require("path");
// const dirpath = path.join(__dirname,"crud");
// let txtFileName = `${dirpath}/text.txt`
//creating txt file
//fs.writeFileSync(txtFileName,"hello from text file");

//reading txt file
// fs.readFile(txtFileName,"utf-8",(err,data)=>{
//     if(!err){
//         console.log("reading sucessful");
//         console.log(data);
//     }
// })

//rename file name
// fs.rename(txtFileName,`${dirpath}/dhiraj.txt`,(err)=>{
//     if(!err){
//         console.log("updated name");
//     }
// })


//updated text inside dhiraj.txt file
// fs.appendFile(`${dirpath}/dhiraj.txt`," this is updated text" ,(err)=>{
//     if(!err){
//         console.log("text updated successfully");
//     }
// })

//delete file
// fs.unlink(`${dirpath}/text.txt`,(err)=>{
//     console.log("deleted");
// })


//All about syncronous and asynchronous
// Synchronous--In a synchronous program, each line of code is executed one after the other, and each operation must finish before the program can proceed to the next line. This means that if a task takes a long time to complete, it can block the execution of subsequent code, causing the program to appear unresponsive.

//Asynchronous--In simple words, asynchronous in JavaScript means that the code can continue running without waiting for a specific task to complete. When an asynchronous operation is initiated, the program doesn't pause and wait for the operation to finish before moving on to the next line of code. Instead, it continues executing other tasks while the asynchronous operation is being processed in the background.

//Example of synchronous 
// console.log("hello");
// console.log("welcome");
// console.log("brother");

//example of Asynchronous 
// console.log("param mitra")
// setTimeout(()=>{
//     console.log("running after 2 sec")
// },2000)
// console.log("executinon ")

//Handle Asynchronous data in node js
// let a = 30;
// let b = 0;

// let waitingData = new Promise((resolve,reject)=>{
//     b = 50;
//     setTimeout(()=>{
//         resolve(b);
//     })
// })

// waitingData.then((data)=>{
//     console.log(a+data);
// })

//Express starts now

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
// //req example with query(after question mark ?name=dhiraj)
// console.log("data sent by browser =>> ", req.query);
//   res.send(`welcome ${req.query.name}`)
// })
// app.get('/about', (req, res) => {
//     res.send('Hello,this is about page')
//   })

//   app.get('/help', (req, res) => {
//     res.send("hello,this is help page")
//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


//html tag , show json data , link page in express
// const express = require("express");
// const app = express();
// const port = 3000;
// app.get("/",(req,res)=>{
//     res.send(`
//     <h1>Hello, welcome to home page</h1>
//     <a href = "/about">Go to about page</a>
//     `)
// })

// app.get("/about",(req,res)=>{
//     res.send(`
//     <input type="text" placeholder="enter your name" value=${req.query.name}/>
//     <a href = "/">Go to Home page</a>
//     `)
// })

// app.listen(port,()=>{
//     console.log(`app listen on port${port}`);
// })


//make html page , load html files
const express = require("express");
const app = express();
const path = require("path");
const publicpath = path.join(__dirname,"public");
//app.use(express.static(publicpath))
//inform node js that we are using ejs engine
app.set('view engine', 'ejs')




//without extension lec 22
app.get("/",(_,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})

app.get("/about",(_,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})

//load ejs file
app.get("/profile",(_,res)=>{
    const user = {
        name:"dhiraj",
        email:"kumar@gmail.com"
    }
    res.render("profile",{user});
})
app.get("/contact",(_,res)=>{
    const user = {
        name:"mohit",
        city:"bhopal",
        skills:["js","node","react","express","php","mysql"]
    }
    res.render("contact",{user});
})

app.get("*",(_,res)=>{
    res.sendFile(`${publicpath}/notfound.html`)
})


app.listen(3000);