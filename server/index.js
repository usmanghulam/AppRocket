const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

require("./MongoDb/connection");

// Body-Parser
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));



// Routers 
app.use("/signup" || "/signup/*",require("./routers/sign-up"));



app.use(express.static(path.resolve(__dirname,'../build/')));
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'../build/index.html'))
})

var port = process.env.PORT || 8081
app.listen(port,()=>console.log(`Server is running on localhost:${port}`));