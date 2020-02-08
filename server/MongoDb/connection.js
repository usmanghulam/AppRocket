const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(`${process.env.MONGODB_CONNECTION}`,
{ useNewUrlParser: true, useFindAndModify: false })
.then(connect => console.log("MongoDb Connect Successfully"))
.catch(err => console.log("Something went wrong on Mongo Connection", err))