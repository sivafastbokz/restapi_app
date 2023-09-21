const express = require('express');
const mongoose = require('mongoose');
const app = express();
const serverConfig = require('./serverConfig');
const controller = require('./src/controller/controller')

mongoose.connect(serverConfig.mongooseURL,{useNewUrlParser: true});
app.use(express.json());
app.use('/',controller)

app.listen(serverConfig.port,()=>{
    console.log(`server is started on port ${serverConfig.port}`)
})
