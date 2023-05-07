const fs = require ("fs");
const express= require("express");
const cors= require("cors");
const app= express();
const PythonShell = require('python-shell').PythonShell;
const port= 80;

app.use(cors());
app.use(express.json());

app.post("/python", (req,res) =>{
fs.writeFileSync("test.py", req.body.dataFromIde);


//destination
var w = fs.createWriteStream("test.py", {flags: 'a'});
// open source file for reading
var r = fs.createReadStream("driverCode.py");

w.on('close', function() {
    console.log("done writing");
});

r.pipe(w);



// let options = {
//     mode: 'text',
//     pythonOptions: ['-u'], // get print results in real-time
//     args: [1],
//   };
  
//   PythonShell.run('./test.py',options,function (err,results){
//     if(err) throw err;

//     console.log("results: %j", results);
  
//   });

let options = {
    mode: 'text',

    pythonOptions: ['-u'], // get print results in real-time

    args: [")()())",4]
  };
  
  PythonShell.run('test.py', options).then(messages=>{
    // results is an array consisting of messages collected during execution

    console.log(messages[0]);
    res.json({passOrFail:messages[0]});
  });


  
});


app.listen(port,()=>{

console.log('server is live');

});