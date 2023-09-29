const express=require('express');
const app=new express();
const routes=require('./src/Routes/api');

app.use('/api',routes);

module.exports=app;