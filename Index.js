const app=require('./App');
require('dotenv').config();
const port=process.env.RUNNING_PORT||8080;
const dotenv = require('dotenv');


app.listen(port,()=>{
    console.log("Server creation successfull");
})