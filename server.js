const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3010;


mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to the database"))
.catch((err)=>console.log("Error Connecting to database",err));

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
});
