/*//os module 
const os = require('os');

console.log('Platform:', os.platform());
 console.log('Architecture:', os.arch());
 console.log('Hostname:', os.hostname());
 console.log('User Info:', os.userInfo());
 console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', (os.freemem()/(1024*1024*1024)));
console.log('CPUs:', os.cpus());
 console.log('Network Interfaces:', os.networkInterfaces());*/


// yaha pe count kar rahe hau jitni baar api call ho rahi hai using event
 /*const express = require("express");
 const EventEmitter = require("events");
 const event = new EventEmitter();
 let count = 0

 const app = express();

 event.on("countApi",()=>{
    count++;
    console.log("event called",count);
 })

 app.get("/",(req,res)=>{
    res.send("api called");
    event.emit("countApi");
 })

 app.get("/search",(req,res)=>{
    res.send("api called");
    event.emit("countApi");
 })

 app.get("/update",(req,res)=>{
    res.send("api called");
    event.emit("countApi");
 })

 app.listen(3000,()=>{
    console.log("port listen on 3000");
 })*/


 //other exapmle of event emmiter

 const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('login', (username) => {
  console.log(`User ${username} has logged in`);
});

// Simulate a login event
myEmitter.emit('login', 'dhiraj');



