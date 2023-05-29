const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age on quary parameter");

    }else if(req.query.age<18){
        res.send("less than 18 can not acess this page");
    }
    else{
        next();
    }
}
module.exports = reqFilter;