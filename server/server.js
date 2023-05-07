const fs = require ("fs");
const express= require("express");
const cors= require("cors");
const app= express();
const PythonShell = require('python-shell').PythonShell;
const port= 80;

app.use(cors());
app.use(express.json());

app.post("/python", (req,res) =>{
fs.writeFileSync('test.py', req.body.dataFromIde);

let options = {
    mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
    args: [1,2,3],
  };
  
  PythonShell.run('test.py',options,function (err,results){
    if(err) throw err;

    console.log(results[0]);
    res.json({message:results});
  });

 
});


app.listen(port,()=>{

console.log('server is live');

});