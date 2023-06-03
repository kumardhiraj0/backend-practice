/*//file upload using multer packeges first method
const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder where files will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Set the filename for the uploaded file
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
  // Access the uploaded file using req.file
  // Process the file as needed
  res.send('File uploaded successfully!');
});


app.listen(5000,()=>{
  console.log("running on port 5000");
})
*/

//file uploded using 2nd method using multer
const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,"uploads");
    },
    filename : function(req,file,cb){
      cb(null,file.fieldname + "-" + Date.now()+".jpg");
    }
  })
}).single("user_file");

app.post("/upload",upload,(req,res)=>{
  res.send("uploaded successfully");
})

app.listen(5000,()=>{
  console.log("server up on 5000");
});